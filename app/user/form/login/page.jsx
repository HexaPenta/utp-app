"use client";

import { useState } from "react";
import { MoonLoader } from "react-spinners";

export default function Login() {
  if (typeof window !== "undefined") {
    if (localStorage.idUser) {
      // location.replace("/post/all");
    }
  }

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  function handleData(event) {
    const { name, value } = event.target;
    data[name] = value;
    setData(data);
    console.log(data);
  }

  async function handleSubmit(event) {
    setLoading(true);
    setNotFound(false);
    event.preventDefault();
    const user = await fetch(
      `http://localhost:3000/user/form/login/api?email=${data.email}&password=${data.password}`
    )
      .then((r) => r.json())
      .catch(() => {
        return undefined;
      });
    console.log(user);
    if (user) {
      // const userJSON = await user.json();

      if (typeof window !== "undefined") {
        localStorage.setItem("idUser", user.id);
        // location.reload();
        // location.replace("/post/all");
      }
    } else {
      setLoading(false);
      setNotFound(true);
    }
    // window.localStorage.idUser = userJSON.id;
    // window.location.href = "/post";
    // useRouter().push("/post/all");
  }
  return (
    <div className=" bg-white">
      <div className="mx-auto  px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="  mx-auto  max-w-2xl dark:bg-slate-100 rounded-md p-11">
          <form onSubmit={handleSubmit}>
            <div className="border-b border-gray-900/10 pb-12 ">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Login
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Login with a email and password
              </p>
              <div className="mt-10 grid grid-cols-6 gap-x-6 gap-y-8 ">
                <div className=" col-span-4">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    email
                  </label>
                  <div className=" mt-2">
                    <input
                      onChange={handleData}
                      value={data.email}
                      type="text"
                      name="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className=" col-span-4 ">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    password
                  </label>
                  <div className=" mt-2">
                    <input
                      onChange={handleData}
                      value={data.password}
                      type="text"
                      name="password"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>

            {!loading ? (
              <div className=" flex flex-col items-end gap-y-4 mt-6">
                <div className="flex gap-x-3">
                  <button className=" font-semibold text-sm text-gray-800">
                    Cancel
                  </button>

                  <button className="text-right w-fit rounded bg-indigo-600 hover:bg-indigo-500 px-3 py-2 font-semibold text-sm text-white">
                    Access
                  </button>
                </div>
                <button className="text-right w-fit rounded bg-indigo-600 hover:bg-indigo-500 px-3 py-2 font-semibold text-sm text-white">
                  Login with google
                </button>
                {notFound ? (
                  <h3 className=" text-red-600 font-medium text-sm">
                    Error-User-not-found
                  </h3>
                ) : null}
              </div>
            ) : (
              <div className=" flex justify-end mt-6 py-2">
                <MoonLoader size={56} color="#4F46E5" />
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
