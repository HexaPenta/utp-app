"use client";

import { useState } from "react";

export default function SignInSuperUser() {
  const [data, setData] = useState({
    Access: {
      about: false,
      posts: false,
      dashboardUsers: false,
      dashboardPosts: false,
    },
  });

  function handleData(event) {
    const { name, value } = event.target;
    if (name.startsWith("Access")) {
      const Access_name = name.split("-")[1];
      if (typeof data.Access[Access_name] === "boolean") {
        data.Access[Access_name] = !data.Access[Access_name];
      }
    } else {
      data[name] = value;
    }
    setData(data);
    console.log(data);
  }

  return (
    <div className=" bg-white">
      <div className="mx-auto  px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="  mx-auto  max-w-2xl dark:bg-slate-100 rounded-md p-11">
          <form>
            <div className="border-b border-gray-900/10 pb-12 ">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Register a new user
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                All fields are required
              </p>
              <div className="mt-10 grid grid-cols-6 gap-x-6 gap-y-8 ">
                <div className="sm:col-span-3">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    name
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={handleData}
                      value={data.name}
                      type="text"
                      name="name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <p>Error, no debe ser vacío</p>
                </div>

                <div className=" col-span-3">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    surname
                  </label>
                  <div className=" mt-2">
                    <input
                      onChange={handleData}
                      value={data.surname}
                      type="text"
                      name="surname"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

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

                <div className=" col-span-3 ">
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

                <div className=" col-span-3 ">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    repeatPassword
                  </label>
                  <div className=" mt-2">
                    <input
                      onChange={handleData}
                      value={data.repeatPassword}
                      type="text"
                      name="repeatPassword"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className=" col-span-2">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    headquarter
                  </label>
                  <div className=" mt-2">
                    <input
                      onChange={handleData}
                      value={data.headquarter}
                      type="text"
                      name="headquarter"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className=" col-span-2">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    cycle
                  </label>
                  <div className=" mt-2">
                    <input
                      onChange={handleData}
                      value={data.cycle}
                      type="text"
                      name="cycle"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className=" col-span-2">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    carrer
                  </label>
                  <div className=" mt-2">
                    <input
                      onChange={handleData}
                      placeholder="Carrer"
                      value={data.carrer}
                      type="text"
                      name="carrer"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <p className=" col-span-3 mt-1 text-sm leading-6 text-gray-900 ">
                  Access for the user
                </p>

                <div className="col-span-1 col-start-1 flex justify-center bg-white shadow-sm rounded-md focus:ring-2 focus:ring-inset focus:ring-indigo-500  ">
                  <label className="block text-sm  font-medium leading-6 text-gray-900">
                    About
                  </label>
                  <div className="ml-2 ">
                    <input
                      onClick={handleData}
                      type="checkbox"
                      name="Access-about"
                      value={data.Access.about}
                    />
                  </div>
                </div>

                <div className="col-span-1 flex justify-center bg-white shadow-sm rounded-md focus:ring-2 focus:ring-inset focus:ring-indigo-500  ">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Posts
                  </label>
                  <div className="ml-2">
                    <input
                      onClick={handleData}
                      type="checkbox"
                      name="Access-posts"
                      value={data.Access.posts}
                    />
                  </div>
                </div>

                <div className="col-span-2 flex justify-center bg-white shadow-sm rounded-md focus:ring-2 focus:ring-inset focus:ring-indigo-500  ">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    DashboardUsers
                  </label>
                  <div className="ml-2">
                    <input
                      onClick={handleData}
                      type="checkbox"
                      name="Access-dashboardUsers"
                      value={data.Access.dashboardUsers}
                    />
                  </div>
                </div>

                <div className="col-span-2 flex justify-center bg-white shadow-sm rounded-md focus:ring-2 focus:ring-inset focus:ring-indigo-500  ">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    DashboardPosts
                  </label>
                  <div className="ml-2">
                    <input
                      onClick={handleData}
                      type="checkbox"
                      name="Access-dashboardPosts"
                      value={data.Access.dashboardPosts}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button className="text-sm font-semibold leading-6 text-gray-900">
                Cancel
              </button>
              <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white  hover:bg-indigo-500 ">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
