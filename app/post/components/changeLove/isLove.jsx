"use client";

import { useState } from "react";
import { ClipLoader } from "react-spinners";

export default function IsLove({ love, idUser, idPost }) {
  console.log("|=>", love, idUser, idPost);

  const [newLove, setNewLove] = useState(love);
  const [loading, setLoading] = useState(false);

  async function handleLove() {
    setLoading(true);

    const res = await fetch("/post/components/changeLove/api", {
      method: "PUT",
      body: JSON.stringify({ newLove: !newLove, idUser, idPost }),
    })
      .then((r) => r.json())
      .catch(() => false);
    console.log(res);
    setNewLove(res);

    setLoading(false);
  }
  if (loading)
    return (
      <div className=" h-14 p-2 pb-1">
        <ClipLoader color="#D3052D" size={40} />
        <span className=" text-red-700 ">
          Debes estar logueado para reaccionar
        </span>
      </div>
    );

  return (
    <button onClick={handleLove} className=" text-4xl h-14">
      {newLove ? "❤️" : "🤍"}
    </button>
  );
}
