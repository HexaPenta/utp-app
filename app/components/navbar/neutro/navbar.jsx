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
    <div className=" flex flex-col bg-rose-600  gap-28 py-6 px-4 text-center bg-transparentX">
      {/* <Link className=" box-border mr-96 grow" href="/"> */}
      {/* <Link className=" box-border mr-10 w-80" href="/">
        <img
          className=" rounded ml-7 min-w-150px"
          src="https://visualizate.utpxpedition.com/sites/default/files/2020-02/logo-visualizate.png"
          alt="utp-mainImage"
          width={170}
        />
      </Link> */}
      {/* <div className=" w-28 h-5 bg-orange-400"></div>
      <div className=" w-28 h-5 bg-orange-400"></div>
      <div className=" w-28 h-5 bg-orange-400"></div>
      <div className=" w-28 h-5 bg-orange-400"></div> */}
      <Link
        className=" rounded col-span-1 col-end-7 text-white hover:bg-white text-sm font-extrabold px-3 py-2 box-border w-fit flex items-center text-end"
        href="/"
      >
        {/* <div className=" mx-auto">Home</div> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
        </svg>
      </Link>
      {/* <button className=" bg-red-600 col-start-7 col-span-1 rounded text-white hover:bg-black text-sm font-extrabold px-3 py-2 box-border bg-redUTP w-28 flex items-center">
        <div className=" mx-auto">About</div>
      </button> */}
      <Link
        className=" rounded col-span-1 text-white hover:bg-white text-sm font-extrabold px-3 py-2 box-border w-fit flex items-center"
        href="/post/posts/all"
      >
        {/* <div className=" mx-auto">Posts</div> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="M480-80q-33 0-56.5-23.5T400-160v-320q0-33 23.5-56.5T480-560h320q33 0 56.5 23.5T880-480v320q0 33-23.5 56.5T800-80H480Zm0-80h320v-320H480v320Zm-240-80v-400q0-33 23.5-56.5T320-720h400v80H320v400h-80ZM80-400v-400q0-33 23.5-56.5T160-880h400v80H160v400H80Zm400 240v-320 320Z" />
        </svg>
      </Link>

      <Link
        className=" rounded col-span-1 text-white hover:bg-white text-sm font-extrabold px-3 py-2 box-border w-fit flex items-center"
        href="/post/form"
      >
        {/* <div className=" mx-auto">Add post</div> */}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h360v80H200v560h560v-360h80v360q0 33-23.5 56.5T760-120H200Zm120-160v-80h320v80H320Zm0-120v-80h320v80H320Zm0-120v-80h320v80H320Zm360-80v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z" />
        </svg>
      </Link>

      {/* <DynamicPart /> */}

      <Link
        className={
          idUser
            ? "hidden"
            : " rounded  text-white hover:bg-white text-sm font-extrabold px-3 py-2 box-border w-fit flex items-center"
        }
        href="/user/form/signIn"
      >
        {/* <div className=" mx-auto">SignIn</div> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
        </svg>
      </Link>

      {/* <Link
        className={
          !idUser
            ? "hidden"
            : " bg-red-600 rounded  text-white hover:bg-black text-sm font-extrabold px-3 py-2 box-border w-28 flex items-center"
        }
        href="/dashboard/users"
      >
        <div className=" mx-auto">Dashboard</div>
      </Link> */}

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
            : " rounded  text-white hover:bg-white text-sm font-extrabold px-3 py-2 box-border w-fit flex items-center"
        }
        href="/user/form/login"
      >
        {/* <div className=" mx-auto">Login</div> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z" />
        </svg>
      </Link>

      <button
        className={
          !idUser
            ? "hidden"
            : // : " block bg-red-600 rounded  text-white hover:bg-black text-sm font-extrabold px-3 py-2 box-border"
              " rounded  text-white hover:bg-white text-sm font-extrabold px-3 py-2 box-border w-fit flex items-center"
        }
        onClick={() => {
          localStorage.clear();
          location.replace("/post/posts/all");
        }}
      >
        {/* <div className=" mx-auto">Logout</div> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
        </svg>
      </button>
    </div>
    // </div>
  );
}
