"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
// import DynamicPart from "./dynamicPart";

export default function Navbar() {
  // if (typeof window !== "undefined") {
  //   // var p = window.localStorage;
  // }
  // const [idUser, setIdUser] = useState(p.getItem("idUser"));
  const [idUser, setIdUser] = useState("");

  // if (typeof window !== "undefined") {
  //   // if (typeof localStorage.idUser === "string") {
  //   //   setIdUser(true);
  //   // } else {
  //   //   setIdUser(false);
  //   // }
  //   setIdUser(localStorage.idUser);
  // }

  useEffect(() => {
    if (typeof window !== "undefined") {
      // if (typeof localStorage.idUser === "string") {
      //   setIdUser(true);
      // } else {
      //   setIdUser(false);
      // }
      setIdUser(window.localStorage.idUser);
    }
  }, []);

  return (
    // <div className=" p-6 bg-purple-600">
    <div className=" grid grid-cols-10 bg-indigo-100 gap-5 py-6 px-4 text-center">
      <Link className=" box-border" href="/">
        <img
          className=" rounded scale-150 ml-7  "
          src="https://visualizate.utpxpedition.com/sites/default/files/2020-02/logo-visualizate.png"
          alt="utp-mainImage"
        />
      </Link>
      <button className=" bg-red-600 col-start-7 col-span-1 rounded text-white hover:bg-indigo-500 text-sm font-semibold px-3 py-2 box-border bg-redUTP">
        About
      </button>
      <Link
        className=" bg-red-600 rounded col-span-1 text-white hover:bg-indigo-500 text-sm font-semibold px-3 py-2 box-border"
        href="/post/all"
      >
        Posts
      </Link>

      {/* <DynamicPart /> */}

      <Link
        className={
          idUser
            ? "hidden"
            : " bg-red-600 rounded  text-white hover:bg-indigo-500 text-sm font-semibold px-3 py-2 box-border"
        }
        href="/user/form/signIn"
      >
        Sign in
      </Link>

      <Link
        className={
          !idUser
            ? "hidden"
            : " bg-red-600 rounded  text-white hover:bg-indigo-500 text-sm font-semibold px-3 py-2 box-border"
        }
        href="/dashboard/users"
      >
        Dash
      </Link>

      {/* <Link
        className=" bg-red-600 rounded text-white hover:bg-indigo-500 text-sm font-semibold px-3 py-2 box-border"
        // href="https://www.instagram.com/reels/CwYDETrqej3/"
        href="/user/form/login"
      >
        login
      </Link> */}

      <Link
        className={
          idUser
            ? "hidden"
            : " block bg-red-600 rounded  text-white hover:bg-indigo-500 text-sm font-semibold px-3 py-2 box-border"
        }
        href="/user/form/login"
      >
        Login
      </Link>

      <button
        className={
          !idUser
            ? "hidden"
            : " block bg-red-600 rounded  text-white hover:bg-indigo-500 text-sm font-semibold px-3 py-2 box-border"
        }
        onClick={() => {
          localStorage.clear();
          //   location.replace("/post/all");
          location.reload();
        }}
      >
        Logout
      </button>
    </div>
    // </div>
  );
}
