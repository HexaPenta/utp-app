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
    // <div className=" grid grid-cols-10 bg-indigo-100 gap-5 py-6 px-4 text-center overflow-auto">
    <div className=" flex bg-indigo-100 gap-5 py-6 px-4 text-center overflow-auto">
      <Link className=" box-border mr-96 grow" href="/">
        <img
          className=" rounded ml-7 min-w-150px"
          src="https://visualizate.utpxpedition.com/sites/default/files/2020-02/logo-visualizate.png"
          alt="utp-mainImage"
          width={170}
        />
      </Link>
      {/* <div className=" w-28 h-5 bg-orange-400"></div>
      <div className=" w-28 h-5 bg-orange-400"></div>
      <div className=" w-28 h-5 bg-orange-400"></div>
      <div className=" w-28 h-5 bg-orange-400"></div> */}
      <Link
        className=" bg-red-600 rounded col-span-1 col-end-7 text-white hover:bg-black text-sm font-extrabold px-3 py-2 box-border w-28 flex items-center text-end"
        href="/"
      >
        <div className=" mx-auto">Home</div>
      </Link>
      <button className=" bg-red-600 col-start-7 col-span-1 rounded text-white hover:bg-black text-sm font-extrabold px-3 py-2 box-border bg-redUTP w-28 flex items-center">
        <div className=" mx-auto">About</div>
      </button>
      <Link
        className=" bg-red-600 rounded col-span-1 text-white hover:bg-black text-sm font-extrabold px-3 py-2 box-border w-28 flex items-center"
        href="/post/posts/all"
      >
        <div className=" mx-auto">Posts</div>
      </Link>

      {/* <DynamicPart /> */}

      <Link
        className={
          idUser
            ? "hidden"
            : " bg-red-600 rounded  text-white hover:bg-black text-sm font-extrabold px-3 py-2 box-border w-28 flex items-center"
        }
        href="/user/form/signIn"
      >
        <div className=" mx-auto">SignIn</div>
      </Link>

      <Link
        className={
          !idUser
            ? "hidden"
            : " bg-red-600 rounded  text-white hover:bg-black text-sm font-extrabold px-3 py-2 box-border w-28 flex items-center"
        }
        href="/dashboard/users"
      >
        <div className=" mx-auto">Dashboard</div>
      </Link>

      {/* <Link
        className=" bg-red-600 rounded text-white hover:bg-black text-sm font-extrabold px-3 py-2 box-border"
        // href="https://www.instagram.com/reels/CwYDETrqej3/"
        href="/user/form/login"
      >
        login
      </Link> */}

      <Link
        className={
          idUser
            ? "hidden"
            : " bg-red-600 rounded  text-white hover:bg-black text-sm font-extrabold px-3 py-2 box-border w-28 flex items-center"
        }
        href="/user/form/login"
      >
        <div className=" mx-auto">Login</div>
      </Link>

      <button
        className={
          !idUser
            ? "hidden"
            : // : " block bg-red-600 rounded  text-white hover:bg-black text-sm font-extrabold px-3 py-2 box-border"
              " bg-red-600 rounded  text-white hover:bg-black text-sm font-extrabold px-3 py-2 box-border w-28 flex items-center"
        }
        onClick={() => {
          localStorage.clear();
          location.replace("/post/posts/all");
        }}
      >
        <div className=" mx-auto">Logout</div>
      </button>
    </div>
    // </div>
  );
}
