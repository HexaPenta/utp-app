"use client";

import useSWR from "swr";
import IsLove from "../components/changeLove/isLove";

export default function PostMain({ params }) {
  // console.log(params);

  const idUser =
    typeof window !== "undefined" ? localStorage.getItem("idUser") : null;

  const { data, error, isLoading } = useSWR(
    `/post/api?idUser=${idUser}&category=${params.category}`,
    (path) => fetch(path).then((r) => r.json())
  );
  // console.log(data);
  // const posts = await fetch(
  //   `http://localhost:3000/post/api?idUser=${idUser}`
  // ).then((r) => r.json());

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
    // <div className="flex max-w-full px-2">
    //   <div className=" bg-lime-600 w-1/4 rounded-lg">left</div>
    // <div className=" w-1/2 p-4 pt-0">
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
            className=" rounded-lg shadow-md mb-4 box-border p-5 dark:bg-slate-100"
          >
            {/* <h1 className=" text-gray-900 font-bold text-lg">{value.id}</h1> */}
            <h1 className="text-gray-900 font-bold text-lg">{value.title}</h1>
            <h2>{value.image}</h2>
            <img
              src="https://scontent.fpiu1-1.fna.fbcdn.net/v/t39.30808-6/371097562_715043084001396_5355569202192732869_n.jpg?stp=dst-jpg_p526x395&_nc_cat=102&ccb=1-7&_nc_sid=49d041&_nc_ohc=1gvrpO9G6lkAX-iSZWM&_nc_ht=scontent.fpiu1-1.fna&oh=00_AfCtJo5X9D_LvlWuvJEUaslyXHKeXV22lbPyq3trvvIzjQ&oe=64F6A7C7"
              alt=""
              className="w-72 mx-auto rounded-md px-4 py-6"
            />
            <h2>{value.description}</h2>
            {/* <ChangeLove
                    idUser={idUser}
                    idPost={value.id}
                    iLove={iLove}
                    idPostDetail={idPostDetail}
                  /> */}
            <IsLove love={love} idUser={idUser} idPost={value.id} />
          </div>
        );
      })}
    </div>
    // </div>
    //   <div className=" bg-indigo-600 w-1/4 rounded-lg">right</div>
    // </div>
  );

  // return (
  //   <div>
  //     {posts.map((value, index) => {
  //       return <div key={index}>{value.id}</div>;
  //     })}
  //     G
  //   </div>
  // );
}
