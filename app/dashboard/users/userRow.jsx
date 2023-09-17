// "use client";
//Necessary ???

import { useState } from "react";
import Validations from "./validations";
import { MoonLoader } from "react-spinners";

export default function UserRow({ userValue, setCloneData, cloneData }) {
  const [userValueClone, setUserValueClone] = useState(userValue);
  const [edit, setEdit] = useState(false);
  const [willBeDeleted, setWillBeDeleted] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [loadingUpdate, setLoadingUpdate] = useState(false);
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
    dashboardPosts: userValue.Access.dashboardPosts,
    dashboardUsers: userValue.Access.dashboardUsers,
    posts: userValue.Access.posts,
  });
  const [errors, setErrors] = useState({});
  const translate = {
    centerLime: "Lima centro",
    northLime: "Lima norte",
    SouthLime: "Lima sur",
    "eastLime-SJL": "Lima Este - SJL",
    "eastLime-ATE": "Lima Este - ATE",
    Arequipa: "Arequipa",
    Chiclayo: "Chiclayo",
    Chimbote: "Chimbote",
    Huancayo: "Huancayo",
    Ica: "Ica",
    Piura: "Piura",
    Trujillo: "Trujillo",
    virtualCampus: "Campus 100% virtual",
  };
  function handleInitData(event) {
    const { name, value } = event.target;
    setErrors(Validations({ ...initData, [name]: value }));
    setInitData({ ...initData, [name]: value });
  }

  function handleAccess(event) {
    const { name } = event.target;
    let { value } = event.target;
    if (value === "false") {
      value = false;
    } else {
      value = true;
    }
    setAccess({ ...Access, [name]: value });
  }
  return (
    <div>
      {!edit ? (
        <div className=" flex divide-x-2 divide-gray-500 text-xs border-b-2 border-gray-500 font-medium overflow-auto">
          <div className="flex items-center">
            <div className=" py-2.5 overflow-auto pl-4 w-44 h-fit">
              {userValueClone.name}
            </div>
          </div>
          <div className="flex items-center">
            <div className=" py-2.5 overflow-auto pl-4 w-44 h-fit">
              {userValueClone.surname}
            </div>
          </div>
          <div className="flex items-center">
            <div className=" py-2.5 overflow-auto px-4 w-80 h-fit">
              {userValueClone.email}
            </div>
          </div>
          <div className="flex items-center">
            <div className=" py-2.5 overflow-auto pl-4 w-24 h-fit">
              {userValueClone.password}
            </div>
          </div>
          <div className="flex items-center">
            <div className=" py-2.5 overflow-auto pl-4 w-24 h-fit">
              {translate[userValueClone.headquarter]}
            </div>
          </div>
          <div className="flex items-center">
            <div className=" py-2.5 overflow-auto pl-4 w-12 h-fit">
              {userValueClone.cycle}
            </div>
          </div>
          <div className="flex items-center">
            <div className=" py-2.5 overflow-auto pl-4 w-24 h-fit">
              {userValueClone.carrer}
            </div>
          </div>
          <div className="flex items-center">
            <div className=" px-3 h-fit w-11">
              {userValueClone.Access.about ? "Yes" : "No"}
            </div>
          </div>

          <div className="flex items-center">
            <div className=" px-3 h-fit w-11">
              {userValueClone.Access.posts ? "Yes" : "No"}
            </div>
          </div>

          <div className="flex items-center">
            <div className=" px-3 h-fit w-11">
              {userValueClone.Access.dashboardPosts ? "Yes" : "No"}
            </div>
          </div>

          <div className="flex items-center">
            <div className=" px-3 h-fit w-11">
              {userValueClone.Access.dashboardUsers ? "Yes" : "No"}
            </div>
          </div>
          {willBeDeleted ? (
            <div className=" flex items-center">
              {!loadingDelete ? (
                <div className=" flex gap-4 px-6">
                  <button
                    className=" underline underline-offset-4"
                    onClick={() => {
                      setLoadingDelete(true);
                      // await fetch(`/dashboard/users/api?id=${userValue.id}`, {
                      //   method: "DELETE",
                      // });
                      // setCloneData(
                      //   cloneData.filter((value) => value.id !== userValue.id)
                      // );
                      // setLoadingDelete(false);
                      ////////////////////////////////////////////////////////////////
                      fetch(`/dashboard/users/api?id=${userValue.id}`, {
                        method: "DELETE",
                      })
                        .then(() => {
                          // setLoadingDelete(true);
                          setCloneData(
                            cloneData.filter(
                              (value) => value.id !== userValue.id
                            )
                          );
                          setWillBeDeleted(false);
                          setLoadingDelete(false);
                          // alert("yes");
                        })
                        .catch(() =>
                          alert("Error deleting, please try again or after")
                        );
                      // .finally(() => setLoadingDelete(false));
                    }}
                  >
                    ✅
                  </button>
                  <button
                    className=" underline underline-offset-4"
                    onClick={() => setWillBeDeleted(!willBeDeleted)}
                  >
                    ❌
                  </button>
                </div>
              ) : (
                <div className=" px-8 overflow-hidden">
                  <MoonLoader size={22} />
                </div>
              )}
            </div>
          ) : (
            <div className=" flex gap-4 px-6">
              <button
                className=" underline underline-offset-4"
                onClick={() => setEdit(!edit)}
              >
                ✏️
              </button>
              <button
                className=" underline underline-offset-4"
                onClick={() => setWillBeDeleted(!willBeDeleted)}
              >
                🗑️
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className=" flex divide-x-2 divide-gray-500 text-xs border-b-2 border-gray-500 font-medium overflow-auto break-words">
          <div className="flex flex-col items-center">
            <input
              maxLength={45}
              className={
                errors.name
                  ? " py-2.5 overflow-auto pl-4 w-44 h-fit ring-red-500 ring-inset ring-2"
                  : " py-2.5 overflow-auto pl-4 w-44 h-fit"
              }
              value={initData.name}
              name="name"
              type="text"
              onChange={handleInitData}
            />
            {errors.name ? (
              <p className=" mt-1 text-sm leading-6 text-red-600 px-3 w-44">
                {errors.name}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col items-center">
            <input
              maxLength={45}
              className={
                errors.surname
                  ? " py-2.5 overflow-auto pl-4 w-44 h-fit ring-red-500 ring-inset ring-2"
                  : " py-2.5 overflow-auto pl-4 w-44 h-fit"
              }
              value={initData.surname}
              name="surname"
              onChange={handleInitData}
            />
            {errors.surname ? (
              <p className=" mt-1 text-sm leading-6 text-red-600 px-3 w-44">
                {errors.surname}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col items-center">
            <input
              maxLength={45}
              className={
                errors.email
                  ? " py-2.5 overflow-auto pl-4 w-80 h-fit ring-red-500 ring-inset ring-2"
                  : " py-2.5 overflow-auto pl-4 w-80 h-fit"
              }
              value={initData.email}
              name="email"
              onChange={handleInitData}
            />
            {errors.email ? (
              <p className=" mt-1 text-sm leading-6 text-red-600 px-3 w-80">
                {errors.email}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col items-center">
            <input
              maxLength={45}
              className={
                errors.password
                  ? " py-2.5 overflow-auto pl-4 w-24 h-fit ring-red-500 ring-inset ring-2"
                  : " py-2.5 overflow-auto pl-4 w-24 h-fit"
              }
              value={initData.password}
              name="password"
              onChange={handleInitData}
            />
            {errors.password ? (
              <p className=" mt-1 text-sm leading-6 text-red-600 px-3 w-24">
                {errors.password}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col items-center">
            {/* <input
              className={
                errors.headquarter
                  ? " py-2.5 overflow-auto pl-4 w-24 h-fit ring-red-500 ring-inset ring-2"
                  : " py-2.5 overflow-auto pl-4 w-24 h-fit"
              }
              value={initData.headquarter}
              name="headquarter"
              onChange={handleInitData}
            /> */}
            <select
              onChange={handleInitData}
              name="headquarter"
              value={initData.headquarter}
              id=""
              className=" focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-gray-900 text-sm py-2 shadow-sm px-1.5 w-24"
            >
              <option value="centerLime" className=" text-gray-900 text-sm ">
                Lima centro
              </option>
              <option value="northLime" className=" text-gray-900 text-sm ">
                Lima norte
              </option>
              <option value="SouthLime" className=" text-gray-900 text-sm ">
                Lima sur
              </option>
              <option value="eastLime-SJL" className=" text-gray-900 text-sm ">
                Lima Este - SJL
              </option>
              <option value="eastLime-ATE" className=" text-gray-900 text-sm ">
                Lima Este - ATE
              </option>
              <option value="Arequipa" className=" text-gray-900 text-sm ">
                Arequipa
              </option>
              <option value="Chiclayo" className=" text-gray-900 text-sm ">
                Chiclayo
              </option>
              <option value="Chimbote" className=" text-gray-900 text-sm ">
                Chimbote
              </option>
              <option value="Huancayo" className=" text-gray-900 text-sm ">
                Huancayo
              </option>
              <option value="Ica" className=" text-gray-900 text-sm ">
                Ica
              </option>
              <option value="Piura" className=" text-gray-900 text-sm ">
                Piura
              </option>
              <option value="Trujillo" className=" text-gray-900 text-sm ">
                Trujillo
              </option>
              <option value="virtualCampus" className=" text-gray-900 text-sm ">
                Campus 100% virtual
              </option>
            </select>
            {errors.headquarter ? (
              <p className=" mt-1 text-sm leading-6 text-red-600 px-3 w-24">
                {errors.headquarter}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col items-center">
            {/* <input
            {/* <input
            {/* <input
              className={
                errors.cycle
                  ? " py-2.5 overflow-auto pl-4 w-12 h-fit ring-red-500 ring-inset ring-2"
                  : " py-2.5 overflow-auto pl-4 w-12 h-fit"
              }
              value={initData.cycle}
              name="cycle"
              onChange={handleInitData}
            /> */}
            <select
              onChange={handleInitData}
              value={initData.cycle}
              name="cycle"
              id=""
              className=" focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-gray-900 text-sm py-2 shadow-sm px-1 w-12"
            >
              <option value="01" className=" text-gray-900 text-sm ">
                01
              </option>
              <option value="02" className=" text-gray-900 text-sm ">
                02
              </option>
              <option value="03" className=" text-gray-900 text-sm ">
                03
              </option>
              <option value="04" className=" text-gray-900 text-sm ">
                04
              </option>
              <option value="05" className=" text-gray-900 text-sm ">
                05
              </option>
              <option value="06" className=" text-gray-900 text-sm ">
                06
              </option>
              <option value="07" className=" text-gray-900 text-sm ">
                07
              </option>
              <option value="08" className=" text-gray-900 text-sm ">
                08
              </option>
              <option value="09" className=" text-gray-900 text-sm ">
                09
              </option>
              <option value="10" className=" text-gray-900 text-sm ">
                10
              </option>
            </select>
            {errors.cycle ? (
              <p className=" mt-1 text-sm leading-6 text-red-600 px-3 w-12">
                {errors.cycle}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col items-center">
            <input
              maxLength={25}
              className={
                errors.carrer
                  ? " py-2.5 overflow-auto pl-4 w-24 h-fit ring-red-500 ring-inset ring-2"
                  : " py-2.5 overflow-auto pl-4 w-24 h-fit"
              }
              value={initData.carrer}
              name="carrer"
              onChange={handleInitData}
            />
            {errors.carrer ? (
              <p className=" mt-1 text-sm leading-6 text-red-600 px-3 w-24">
                {errors.carrer}
              </p>
            ) : null}
          </div>
          <div className=" flex items-center bg-white">
            <div className=" w-11">
              <select
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
          <div className=" flex items-center bg-white">
            <div className=" w-11">
              <select
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
          <div className=" flex items-center bg-white">
            <div className=" w-11">
              <select
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
          <div className=" flex items-center bg-white">
            <div className=" w-11">
              <select
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
          {!loadingUpdate ? (
            <div className=" flex gap-4 px-6">
              <button
                className=" underline underline-offset-4"
                onClick={() => {
                  if (!Object.keys(errors).length) {
                    setLoadingUpdate(true);
                    fetch("/dashboard/users/api", {
                      method: "PUT",
                      body: JSON.stringify({
                        idUser: userValue.id,
                        initData,
                        Access,
                      }),
                    })
                      .then(() => {
                        setUserValueClone({ ...initData, Access });
                      })
                      .then(() => setEdit(false))
                      .then(() => setLoadingUpdate(false))
                      .catch(() => alert("Error, please try again or after"));
                  } else {
                    alert("There are some errors in your fields");
                  }
                }}
              >
                ✅
              </button>
              <button
                className=" underline underline-offset-4"
                onClick={() => setEdit(!edit)}
              >
                ❌
              </button>
            </div>
          ) : (
            <div className=" py-1 px-8 mr-6 overflow-hidden">
              <MoonLoader size={22} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
