"use client";

import { useState } from "react";
import { ClipLoader } from "react-spinners";

export default function IsLove({ love, idUser, idPost }) {
  const [newLove, setNewLove] = useState(love);
  const [mustBeRegistered, setMustBeRegistered] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleLove() {
    setLoading(true);

    if (idUser) {
      const res = await fetch("/post/posts/components/changeLove/api", {
        method: "PUT",
        body: JSON.stringify({ newLove: !newLove, idUser, idPost }),
      })
        .then((r) => r.json())
        .catch(() => false);
      // console.log(res);
      setNewLove(res);
    } else {
      setMustBeRegistered(true);
      setTimeout(() => setMustBeRegistered(false), 1205);
    }

    setLoading(false);
  }
  if (loading)
    return (
      <div className=" h-14 p-2 pb-1">
        <ClipLoader color="#D3052D" size={40} />
      </div>
    );

  return (
    <button
      onClick={handleLove}
      className=" text-4xl h-14 pl-4 flex items-center"
    >
      {newLove ? "❤️" : "🤍"}
      {mustBeRegistered ? (
        <span className="ml-2 text-red-700 text-base break-all text-pretty">
          Debes estar logueado <br /> para reaccionar
        </span>
      ) : null}
    </button>
  );
}
