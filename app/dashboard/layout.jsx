import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <section>
      <div className=" grid grid-cols-12 bg-indigo-100 gap-5 py-6 px-4 text-center border-y  border-gray-400 pb-6">
        <div className=" flex bg-orange-500 col-span-2 justify-stretch">
          <Link
            // className=" border-x-2 border-y-2  border-gray-600  col-span-2 rounded hover:bg-black  hover:text-white text-sm  font-extrabold font-serif px-3 py-2 box-border text-gray-900"
            className="   col-span-2 rounded hover:bg-black  hover:text-white text-sm  font-extrabold font-serif px-3 py-2 box-border text-gray-900 w-40 bg-red-600"
            href="/dashboard/users"
          >
            Users
          </Link>
          <button className=" bg-green-600 text-2xl grow">+</button>
        </div>
        <Link
          className=" border-x-2 border-y-2  border-gray-600  col-span-2 rounded hover:bg-black  hover:text-white text-sm  font-extrabold font-serif px-3 py-2 box-border text-gray-900"
          href="/dashboard/posts"
        >
          Posts
        </Link>
      </div>
      {children}
    </section>
  );
}
