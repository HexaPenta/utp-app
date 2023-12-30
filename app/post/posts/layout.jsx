"use client";
import { useEffect, useState } from "react";

export default function PostLayout({ children }) {
  const [carrer, setCarrer] = useState("");

  useEffect(() => {
    if (typeof window !== undefined)
      setCarrer(window.location.pathname.split("/")[3]);
  }, []);

  return (
    <div>
      <div className=" overflow-auto">
        <div className="overflow-auto flex bg-indigo-100 gap-5 py-6 px-4 text-center border-t border-gray-400 pb-6">
          <a
            className=" border-x-2 border-y-2 bg-rose-600 col-span-2 rounded hover:bg-rose-500   hover:text-white text-xs font-black font-serif px-3 box-border text-white w-52 flex flex-col shadow-sm shadow-red-200"
            href="/post/posts/architecture"
          >
            <div className=" my-auto">Arquitectura</div>
          </a>
          <a
            className=" border-x-2 border-y-2 bg-rose-600 col-span-2 rounded hover:bg-rose-500   hover:text-white text-xs  font-black font-serif px-3 py-2 box-border text-white w-52 flex flex-col shadow-sm shadow-red-200"
            href="/post/posts/civilEngineering"
          >
            <div className=" my-auto">Ingeniería civil</div>
          </a>
          <a
            className=" border-x-2 border-y-2 bg-rose-600 col-span-2 rounded hover:bg-rose-500   hover:text-white text-xs  font-black font-serif px-3 py-2 box-border text-white w-52 flex flex-col shadow-sm shadow-red-200"
            href="/post/posts/industrialEngineering"
          >
            <div className=" my-auto">Ingeniería industrial</div>
          </a>
          <a
            className=" border-x-2 border-y-2 bg-rose-600 col-span-2 rounded hover:bg-rose-500   hover:text-white text-xs  font-black font-serif px-3 py-2 box-border text-white w-52 flex flex-col shadow-sm shadow-red-200"
            href="/post/posts/systemsEngineering"
          >
            <div className=" my-auto">Ingeniería sistemas e informática</div>
          </a>

          <div className=" grow flex justify-end">
            <a
              className=" border-x-2 border-y-2 bg-rose-600 col-start-10 col-span-3 ounded hover:bg-rose-500   hover:text-white text-xs  font-black font-serif px-3 box-border text-white w-52 flex flex-col shadow-sm shadow-red-200 ml-40"
              href="/post/posts/all"
            >
              <div className=" my-auto">Todos</div>
            </a>
          </div>
        </div>
      </div>

      <div className={`flex max-w-full px-4 overflow-auto justify-center bg`}>
        <div className=" w-1/2 p-4 pt-0 overflow-auto max-md:w-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
