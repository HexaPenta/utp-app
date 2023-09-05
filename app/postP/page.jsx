// "use client";

// // import { useEffect, useState } from "react";
// // import ChangeLove from "./components/changeLove/page";
// import IsLove from "./components/changeLove/isLove";
// import useSWR from "swr";

// export default function PostMain() {
//   if (typeof window !== "undefined") {
//     window;
//   }

//   const { data, error, isLoading } = useSWR(
//     `/post/api?idUser=${localStorage.idUser}`,
//     (path) => fetch(path).then((r) => r.json())
//   );
//   console.log(data);
//   // const posts = await fetch(
//   //   `http://localhost:3000/post/api?idUser=${idUser}`
//   // ).then((r) => r.json());

//   if (error) return <div>failed to load</div>;
//   if (isLoading) return <div>loading...</div>;

//   return (
//     <div className="flex max-w-full">
//       <div className=" bg-lime-600 w-1/4">left</div>
//       <div className=" bg-yellow-500 w-1/2 ">
//         <div>
//           {data.map((value, index) => {
//             let love = false;
//             if (value.postDetail.length) {
//               love = value.postDetail[0].iLove;
//             } else {
//               love = false;
//             }
//             return (
//               <div key={index} className=" border-8 box-border p-4">
//                 <h1>{value.id}</h1>
//                 <h1>{value.title}</h1>
//                 <h2>{value.description}</h2>
//                 <h2>{value.image}</h2>
//                 <img
//                   src="https://scontent.fpiu1-1.fna.fbcdn.net/v/t39.30808-6/371097562_715043084001396_5355569202192732869_n.jpg?stp=dst-jpg_p526x395&_nc_cat=102&ccb=1-7&_nc_sid=49d041&_nc_ohc=1gvrpO9G6lkAX-iSZWM&_nc_ht=scontent.fpiu1-1.fna&oh=00_AfCtJo5X9D_LvlWuvJEUaslyXHKeXV22lbPyq3trvvIzjQ&oe=64F6A7C7"
//                   alt=""
//                   className="w-72 mx-auto"
//                 />
//                 {/* <ChangeLove
//                     idUser={idUser}
//                     idPost={value.id}
//                     iLove={iLove}
//                     idPostDetail={idPostDetail}
//                   /> */}
//                 <IsLove
//                   love={love}
//                   idUser={localStorage.idUser}
//                   idPost={value.id}
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       <div className=" bg-indigo-600 w-1/4">right</div>
//     </div>
//   );

//   // return (
//   //   <div>
//   //     {posts.map((value, index) => {
//   //       return <div key={index}>{value.id}</div>;
//   //     })}
//   //     G
//   //   </div>
//   // );
// }
