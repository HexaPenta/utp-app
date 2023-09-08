"use client";

export default function Landing() {
  return (
    <h1 className=" font-semibold underline decoration-2">
      Landing-Page
      {localStorage.idUser ? <div>are a idUSer</div> : <div>Not a id User</div>}
    </h1>
  );
}
