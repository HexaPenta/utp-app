"use client";

import useSWR from "swr";
import IsLove from "../components/changeLove/isLove";

export default function PostMain({ params }) {
  console.log(params);

  const idUser =
    typeof window !== "undefined" ? localStorage.getItem("idUser") : null;

  const { data, error, isLoading } = useSWR(
    `/post/posts/api?idUser=${idUser}&category=${params.category}`,
    (path) => fetch(path).then((r) => r.json())
  );
  console.log(data);

  if (error) return <div>failed to load</div>;
  if (isLoading)
    return (
      <div>
        <div className=" grid grid-cols-6 animate-pulse gap-y-6 gap-x-3 p-4">
          <div className="h-4 bg-slate-400/70 rounded-lg col-span-full     "></div>
          <div className="h-4 bg-slate-400/70 rounded-lg col-span-5     "></div>
          <div className="h-4 bg-slate-400/70 rounded-lg col-span-4     "></div>
          <div className="h-4 bg-slate-400/70 rounded-lg col-span-2     "></div>
          <div className="h-40 bg-slate-400/70 rounded-lg col-span-4 col-start-2    "></div>
          <div className="h-16 bg-slate-400/70 rounded-full col-start-1 w-16    "></div>
        </div>
        <div className=" grid grid-cols-6 animate-pulse gap-y-6 gap-x-3 py-1">
          <div className="h-4 bg-slate-400/70 rounded-lg col-span-full     "></div>
          <div className="h-4 bg-slate-400/70 rounded-lg col-span-5     "></div>
          <div className="h-4 bg-slate-400/70 rounded-lg col-span-4     "></div>
          <div className="h-4 bg-slate-400/70 rounded-lg col-span-2     "></div>
          <div className="h-40 bg-slate-400/70 rounded-lg col-span-4 col-start-2    "></div>
          <div className="h-16 bg-slate-400/70 rounded-full col-start-1 w-16    "></div>
        </div>
      </div>
    );

  return (
    <div>
      {data.map((value, index) => {
        let love = false;
        if (value.postDetail.length) {
          love = value.postDetail[0].iLove;
        } else {
          love = false;
        }
        return (
          <div
            key={index}
            className=" rounded-lg shadow-md mb-4 box-border pt-3.5 pb-5 px-0.5 mt-6 dark:bg-slate-100 overflow-auto"
          >
            <h1 className="text-gray-900 font-bold font-sans text-xl pl-5 mb-5">
              {value.title}
            </h1>

            <div className=" overflow-auto flex gap-6 snap-x snap-mandatory">
              {value.image?.map((aImage, i_Index) => (
                <img
                  className=" snap-center rounded-md mx-auto"
                  key={i_Index}
                  src={aImage}
                  alt="none-chargued_:/"
                />
              ))}
            </div>
            <h2 className=" my-4 pl-4">{value.description}</h2>
            <IsLove love={love} idUser={idUser} idPost={value.id} />
          </div>
        );
      })}
    </div>
  );
}
