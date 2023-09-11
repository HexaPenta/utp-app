"use client";

export default function Login({ params }) {
  console.log(params);
  return <h1 className=" underline decoration-2">Are... {params.login}</h1>;
}
