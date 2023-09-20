"use client";

import PostMain2 from "./page";

let idUser = "";
if (typeof window !== "undefined") {
  idUser = localStorage.idUser;
}
export default function PostMain() {
  console.log("PostMain-First-idUserIs=>", idUser);
  return <PostMain2 idUser={idUser} />;
}
