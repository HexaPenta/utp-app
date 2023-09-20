"use client";

import { useState } from "react";
import { GridLoader } from "react-spinners";
// import useSWR from "swr";

export default function ChangeLove({ idUser, idPost, iLove, idPostDetail }) {
  console.log({ iLove, idUser, idPost, idPostDetail });
  const [love, setLove] = useState(iLove);
  const [result, setResult] = useState(iLove ? "❤️" : "🤍");
  const [loading, setLoading] = useState(false);

  let idPostDetailUse = idPostDetail;
  // function fetcher() {
  //   return fetch("http://localhost:3000/post/posts/components/changeLove/api", {
  //     method: "PUT",
  //     body: JSON.stringify({ iLove: !love, idUser, idPost, idPostDetail }),
  //   }).finally(() => {});
  // }

  // const {} = useSWR()

  async function handleLove() {
    setLoading(true);
    const m = await fetch(
      "http://localhost:3000/post/posts/components/changeLove/api",
      {
        method: "PUT",
        body: JSON.stringify({ iLove: !love, idUser, idPost, idPostDetailUse }),
      }
    );

    const mJSON = await m.json();
    idPostDetailUse = mJSON.id;
    if (!love) {
      setResult("❤️");
    } else {
      setResult("🤍");
    }

    setLove(!love);

    setLoading(false);
  }

  return (
    <div className=" text-9xl  ">
      {loading ? (
        <GridLoader color={"#36d7b7"} size={60} />
      ) : (
        <button onClick={handleLove}>{result}</button>
      )}
    </div>
    // <button onClick={handleLove}>{result}</button>
  );
}
// "use client";

// export default function changeLove() {
//   return <div>❤️</div>;
// }
