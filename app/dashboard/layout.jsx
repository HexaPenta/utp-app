import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <section className="">
      <div className=" flex bg-indigo-100 gap-5 py-6 px-4 text-center border-y  border-gray-400 pb-6 overflow-auto  ">
        <div className=" flex col-span-2 divide-x-2 divide-gray-500 border-2 rounded border-gray-600">
          <Link
            className=" col-span-2 bg-black  text-white text-sm  font-extrabold font-serif px-3 py-2 box-border w-40 hover:bg-slate-600/75"
            href="/dashboard/users"
          >
            Users
          </Link>
          <button className=" text-2xl grow font-bold text-white bg-black hover:bg-slate-600/75 px-5">
            +
          </button>
        </div>
        <div className=" flex col-span-2 divide-x-2 divide-gray-500 border-2 rounded border-gray-600">
          <Link
            className=" col-span-2 bg-black  text-white text-sm  font-extrabold font-serif px-3 py-2 box-border w-40 hover:bg-slate-600/75"
            href="/dashboard/posts"
          >
            Posts
          </Link>
          <Link
            className=" text-2xl grow font-bold text-white bg-black hover:bg-slate-600/75 px-5"
            href="/post/form"
          >
            +
          </Link>
        </div>
      </div>
      {children}
    </section>
  );
}
