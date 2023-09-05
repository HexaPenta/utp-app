// import Link from "next/link";

// export default function Navbar() {
//   return (
//     // <div className=" dark:bg-slate-400  px-6 py-24">
//     // <div className=" grid grid-cols-10 bg-orange-300 gap-5 py-6 px-4 text-center">
//     //   <button className=" bg-blue-800 rounded-sm text-white hover:bg-indigo-500 text-sm font-semibold px-3 py-2 box-borde">
//     //     LogoUTP
//     //   </button>
//     //   <button className=" bg-cyan-400 col-start-5 rounded-sm text-white hover:bg-indigo-500 text-sm font-semibold px-3 py-2 box-border">
//     //     About
//     //   </button>
//     //   <button className=" bg-red-400 rounded-sm text-white hover:bg-indigo-500 text-sm font-semibold px-3 py-2 box-border">
//     //     Posts
//     //   </button>
//     //   <button className=" bg-green-400 rounded-sm text-white hover:bg-indigo-500 text-sm font-semibold px-3 py-2 box-border">
//     //     Dashboard
//     //   </button>
//     //   <button className=" bg-gray-400 rounded-sm text-white hover:bg-indigo-500 text-sm font-semibold px-3 py-2 box-border">
//     //     Sign in
//     //   </button>
//     //   <Link
//     //     className=" bg-purple-400 rounded-sm text-white hover:bg-indigo-500 text-sm font-semibold px-3 py-2 box-border"
//     //     // href={`/user/form/login`}
//     //     // href="https://www.instagram.com/reels/CwYDETrqej3/"
//     //     href="/user/form/login"
//     //   >
//     //     login
//     //   </Link>
//     //   <button className=" bg-yellow-400 rounded-sm text-white hover:bg-indigo-500 text-sm font-semibold px-3 py-2 box-border">
//     //     logout
//     //   </button>
//     // </div>
//     // </div>
//     <div className=" grid grid-cols-10 dark:bg-slate-200 gap-5 py-6 px-4 text-center">
//       <button className=" bg-blue-800 rounded text-white hover:bg-indigo-500 text-sm font-semibold px-3 py-2 box-borde">
//         LogoUTP
//       </button>
//       <button
//         className={` bg-cyan-400 ${
//           localStorage.idUser ? `col-start-6` : `col-start-5`
//         } rounded text-white hover:bg-indigo-500 text-sm font-semibold px-3 py-2 box-border`}
//       >
//         About
//       </button>
//       <Link
//         className=" bg-red-400 rounded text-white hover:bg-indigo-500 text-sm font-semibold px-3 py-2 box-border"
//         href="/post"
//       >
//         Posts
//       </Link>
//       <button className=" bg-green-400 rounded text-white hover:bg-indigo-500 text-sm font-semibold px-3 py-2 box-border">
//         Dashboard
//       </button>
//       {!localStorage.idUser ? (
//         <button className=" bg-gray-400 rounded col-start-9 text-white hover:bg-indigo-500 text-sm font-semibold px-3 py-2 box-border">
//           Sign in
//         </button>
//       ) : null}
//       {!localStorage.idUser ? (
//         <Link
//           className=" bg-purple-400 rounded text-white hover:bg-indigo-500 text-sm font-semibold px-3 py-2 box-border"
//           // href="https://www.instagram.com/reels/CwYDETrqej3/"
//           href="/user/form/login"
//         >
//           login
//         </Link>
//       ) : null}
//       {localStorage.idUser ? (
//         <button className=" bg-yellow-400 col-start-9 col-span-2 rounded text-white hover:bg-indigo-500 text-sm font-semibold px-3 py-2 box-border">
//           logout
//         </button>
//       ) : null}
//     </div>
//   );
// }
