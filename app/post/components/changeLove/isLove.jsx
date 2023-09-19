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
      const res = await fetch("/post/components/changeLove/api", {
        method: "PUT",
        body: JSON.stringify({ newLove: !newLove, idUser, idPost }),
      })
        .then((r) => r.json())
        .catch(() => false);
      console.log(res);
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
    <button onClick={handleLove} className=" text-4xl h-14">
      {newLove ? "❤️" : "🤍"}
      {mustBeRegistered ? (
        <span className=" text-red-700 text-base">
          Debes estar logueado para reaccionar
        </span>
      ) : null}
    </button>
  );
}
