//Necessary ???

import { useState } from "react";

export default function UserRow({ userValue }) {
  console.log(userValue);
  const [edit, setEdit] = useState(false);
  const [initData, setInitData] = useState({
    name: userValue.name,
    surname: userValue.surname,
    email: userValue.email,
    password: userValue.password,
    headquarter: userValue.headquarter,
    cycle: userValue.cycle,
    carrer: userValue.carrer,
  });
  const [Access, setAccess] = useState({
    about: userValue.Access.about,
    dashboard: userValue.Access.dashboard,
    dashboardPosts: userValue.Access.dashboardPosts,
    dashboardUsers: userValue.Access.dashboardUsers,
    posts: userValue.Access.posts,
  });

  function handleInitData(event) {
    const { name, value } = event.target;
    setInitData({ ...initData, [name]: value });
  }

  function handleAccess(event) {
    const { name, value } = event.target;
    setAccess({ ...Access, [name]: value });
  }
  console.log(Access);
  return (
    <div>
      {!edit ? (
        // <div className=" flex divide-x-2 divide-gray-500 text-xs">
        //   <div className=" grid grid-cols-7 divide-x-2 divide-gray-500 border-b-2 border-gray-500 bg-yellow-500">
        //     <div className=" col-span-1 py-2.5 pl-4 bg-sky-300">
        //       {userValue.name}
        //     </div>
        //     <div className=" py-2.5 pl-4 bg-lime-500">{userValue.surname}</div>
        //     <div className=" py-2.5 px-4 overflow-auto">{userValue.email}</div>
        //     <div className=" py-2.5 pl-4">{userValue.password}</div>
        //     <div className=" py-2.5 pl-4">{userValue.headquarter}</div>
        //     <div className=" py-2.5 pl-4">{userValue.cycle}</div>
        //     <div className=" py-2.5 pl-4">{userValue.carrer}</div>
        //   </div>
        //   <div
        //     className=" grid grid-cols-5 divide-x-2 divide-gray-500 border-b-2 border-gray-500
        //    bg-red-500 grow"
        //   >
        //     <div>{Access.about ? "Yes" : "No"}</div>
        //     <div>{Access.posts ? "Yes" : "No"}</div>
        //     <div>{Access.dashboardPosts ? "Yes" : "No"}</div>
        //     <div>
        //       <div>{Access.dashboardUsers ? "Yes" : "No"}</div>
        //     </div>

        //     <button
        //       className=" underline underline-offset-2"
        //       onClick={() => setEdit(!edit)}
        //     >
        //       edit
        //     </button>
        //   </div>
        // </div>
        <div className=" flex divide-x-2 divide-gray-500 text-xs border-b-2 border-gray-500 font-medium overflow-auto">
          <div className="flex items-center">
            <div className=" py-2.5 overflow-auto pl-4 w-44 h-fit">
              {userValue.name}
            </div>
          </div>
          <div className="flex items-center">
            <div className=" py-2.5 overflow-auto pl-4 w-44 h-fit">
              {userValue.surname}
            </div>
          </div>
          <div className="flex items-center">
            <div className=" py-2.5 overflow-auto px-4 w-80 h-fit">
              {userValue.email}
            </div>
          </div>
          <div className="flex items-center">
            <div className=" py-2.5 overflow-auto pl-4 w-24 h-fit">
              {userValue.password}
            </div>
          </div>
          <div className="flex items-center">
            <div className=" py-2.5 overflow-auto pl-4 w-24 h-fit">
              {userValue.headquarter}
            </div>
          </div>
          <div className="flex items-center">
            <div className=" py-2.5 overflow-auto pl-4 w-12 h-fit">
              {userValue.cycle}
            </div>
          </div>
          <div className="flex items-center">
            <div className=" py-2.5 overflow-auto pl-4 w-24 h-fit">
              {userValue.carrer}
            </div>
          </div>
          <div className="flex items-center">
            <div className=" px-3 h-fit">{Access.about ? "Yes" : "No"}</div>
          </div>

          <div className="flex items-center">
            <div className=" px-3 h-fit">{Access.posts ? "Yes" : "No"}</div>
          </div>

          <div className="flex items-center">
            <div className=" px-3 h-fit">
              {Access.dashboardPosts ? "Yes" : "No"}
            </div>
          </div>

          <div className="flex items-center box-border">
            <div className=" px-3 h-fit">
              {Access.dashboardUsers ? "Yes" : "No"}
            </div>
          </div>
          <div className=" flex gap-4 px-6">
            <button
              className=" underline underline-offset-2"
              onClick={() => setEdit(!edit)}
            >
              {/* <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnnSbZtrqfpcNJeoUAUco8ilWGGymhOpHAqT_nfKiW4xnIIQ_Mf5bMFvvIjgxQ80CcLxE&usqp=CAU"
                alt="Edit"
                // width={100000}
              /> */}
              ✏️
            </button>
            <button className=" underline underline-offset-2">
              {/* <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzb1EQddI1Qzm7z-0855CNh3tuE3sePw9FyA&usqp=CAU"
                alt="Delete"
                // width={100000}
              /> */}
              🗑️
            </button>
          </div>
        </div>
      ) : (
        // </div>
        <div className=" flex divide-x-2 divide-gray-500 text-xs">
          <div className=" grid grid-cols-7 divide-x-2 divide-gray-500 border-b-2 border-gray-500">
            <input
              className=" col-start-1 py-2.5 pl-4 "
              value={initData.name}
              name="name"
              type="text"
              onChange={handleInitData}
            />
            <input
              className=" col-start-2 py-2.5 pl-4"
              value={initData.surname}
              name="surname"
              onChange={handleInitData}
            />
            <input
              className=" col-start-3 py-2.5 pl-4"
              value={initData.email}
              name="email"
              onChange={handleInitData}
            />
            <input
              className=" col-start-4 py-2.5 pl-4"
              value={initData.password}
              name="password"
              onChange={handleInitData}
            />
            <input
              className=" col-start-5 py-2.5 pl-4"
              value={initData.headquarter}
              name="headquarter"
              onChange={handleInitData}
            />
            <input
              className=" col-start-6 py-2.5 pl-4"
              value={initData.cycle}
              name="cycle"
              onChange={handleInitData}
            />
            <input
              className=" col-start-7 py-2.5 pl-4"
              value={initData.carrer}
              name="carrer"
              onChange={handleInitData}
            />
          </div>
          <div className=" grid grid-cols-5 divide-x-2 divide-gray-500 border-b-2 border-gray-500">
            <div className=" bg-white">
              <div className=" w-fit mx-auto">
                <select
                  className=" col-start-1 py-2.5 pl-4"
                  name="about"
                  id=""
                  value={Access.about}
                  onChange={handleAccess}
                >
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select>
              </div>
            </div>
            <div className=" bg-white">
              <div className=" w-fit mx-auto">
                <select
                  className=" col-start-1 py-2.5 pl-4"
                  name="posts"
                  id=""
                  value={Access.posts}
                  onChange={handleAccess}
                >
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select>
              </div>
            </div>
            <div className=" bg-white">
              <div className=" w-fit mx-auto">
                <select
                  className=" col-start-1 py-2.5 pl-4"
                  name="dashboardPosts"
                  id=""
                  value={Access.dashboardPosts}
                  onChange={handleAccess}
                >
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select>
              </div>
            </div>
            <div className=" bg-white">
              <div className=" w-fit mx-auto">
                <select
                  className=" col-start-1 py-2.5 pl-4"
                  name="dashboardUsers"
                  id=""
                  value={Access.dashboardUsers}
                  onChange={handleAccess}
                >
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select>
              </div>
            </div>

            <button
              className=" underline underline-offset-2"
              onClick={() => setEdit(!edit)}
            >
              edit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
