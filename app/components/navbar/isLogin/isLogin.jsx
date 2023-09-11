// "use client";

import Link from "next/link";

if (typeof window !== "undefined") {
  localStorage;
}

export default function IsLogin() {
  return (
    <div className=" grid grid-cols-10 bg-indigo-100 gap-5 py-6 px-4 text-center">
      <button className=" box-border">
        <img
          className=" rounded scale-150 ml-7  "
          src="https://visualizate.utpxpedition.com/sites/default/files/2020-02/logo-visualizate.png"
          alt=""
        />
      </button>
      <button className=" bg-red-600 col-start-7 col-span-1 rounded text-white hover:bg-indigo-500 text-sm font-semibold px-3 py-2 box-border bg-redUTP">
        About
      </button>
      <Link
        className=" bg-red-600 rounded col-span-1 text-white hover:bg-indigo-500 text-sm font-semibold px-3 py-2 box-border"
        href="/post/all"
      >
        Posts
      </Link>

      <button className=" bg-red-600 rounded  text-white hover:bg-indigo-500 text-sm font-semibold px-3 py-2 box-border">
        Dash...
      </button>

      <button
        className=" bg-red-600 rounded text-white hover:bg-indigo-500 text-sm font-semibold px-3 py-2 box-border"
        // href="https://www.instagram.com/reels/CwYDETrqej3/"
        onClick={() => {
          localStorage.clear();
          location.replace("/post/all"); //¿? how to define it
        }}
      >
        logout
      </button>
    </div>
  );
}
