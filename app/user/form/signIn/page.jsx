"use client";

import { useState } from "react";
import Validations from "./validations";
import { MoonLoader } from "react-spinners";
import Link from "next/link";

export default function SignInSuperUser() {
  if (typeof window !== "undefined") {
    if (localStorage.idUser) {
      //
    }
  }
  const [data, setData] = useState({
    headquarter: "none",
    cycle: "none",
  });
  const [error, setError] = useState({});
  const [IsLoading, setIsLoading] = useState(false);
  const [isFinally, setFinally] = useState(0);
  const [existUser, setExistUSer] = useState(false);

  function handleData(event) {
    setExistUSer(false);
    setFinally(false);
    const { name, value } = event.target;
    data[name] = value;
    setData(data);
    setError(Validations(data));
    // console.log(data);
    // console.log(Validations(data));
  }

  function handleSave() {
    if (
      typeof data.name === "undefined" ||
      typeof data.surname === "undefined" ||
      typeof data.carrer === "undefined"
    ) {
      setFinally(true);
    } else {
      setFinally(false);
    }

    if (
      typeof isFinally !== "number" &&
      typeof data.name !== "undefined" &&
      typeof data.surname !== "undefined" &&
      typeof data.carrer !== "undefined" &&
      !Object.keys(error).length
    ) {
      //Here api POST
      setIsLoading(true);
      fetch("/user/form/signIn/api", {
        method: "POST",
        body: JSON.stringify(data),
      })
        .then((r) => r.json())
        .then(({ def, idUser }) => {
          // console.log(`El usuario ${!def.exist ? "se creo" : "ya existia"}`, {
          //   def,
          //   idUser,
          // });
          setExistUSer(def.exist);
          if (!def.exist) {
            localStorage.idUser = idUser;
            location.replace("/post/posts/all");
          } else {
            setIsLoading(false);
          }
        })
        .catch(() => {
          alert("Try again");
          setIsLoading(false);
          location.reload();
        });
    }
  }

  return (
    <div className=" bg-blue-100/25 w-screen ">
      <div className="mx-auto  px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="  mx-auto  max-w-2xl bg-white rounded-md p-11">
          <form
            className=""
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Registrar un nuevo usuario
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Son requeridos todos los campos
              </p>
              <div className="mt-10 grid grid-cols-6 gap-x-6 gap-y-8">
                <div className="col-span-3">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Nombre
                  </label>
                  <div className="mt-2">
                    <input
                      maxLength={45}
                      onChange={handleData}
                      value={data.name}
                      type="text"
                      name="name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  {error.name ? (
                    <p className=" mt-1 text-sm leading-6 text-red-600">
                      {error.name}
                    </p>
                  ) : null}
                </div>

                <div className=" col-span-3">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Apellido
                  </label>
                  <div className=" mt-2">
                    <input
                      maxLength={45}
                      onChange={handleData}
                      value={data.surname}
                      type="text"
                      name="surname"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  {error.surname ? (
                    <p className=" mt-1 text-sm leading-6 text-red-600">
                      {error.surname}
                    </p>
                  ) : null}
                </div>

                <div className=" col-span-4">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Correo
                  </label>
                  <div className=" mt-2">
                    <input
                      maxLength={45}
                      onChange={handleData}
                      value={data.email}
                      type="email"
                      name="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  {error.email ? (
                    <p className=" mt-1 text-sm leading-6 text-red-600">
                      {error.email}
                    </p>
                  ) : null}
                </div>

                <div className=" col-span-3 ">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Contraseña
                  </label>
                  <div className=" mt-2">
                    <input
                      maxLength={45}
                      onChange={handleData}
                      value={data.password}
                      type="text"
                      name="password"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  {error.password ? (
                    <p className=" mt-1 text-sm leading-6 text-red-600">
                      {error.password}
                    </p>
                  ) : null}
                </div>

                <div className=" col-span-3 ">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Repita su Contraseña
                  </label>
                  <div className=" mt-2">
                    <input
                      maxLength={45}
                      onChange={handleData}
                      value={data.repeatPassword}
                      type="text"
                      name="repeatPassword"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  {error.repeatPassword ? (
                    <p className=" mt-1 text-sm leading-6 text-red-600">
                      {error.repeatPassword}
                    </p>
                  ) : null}
                </div>

                <div className=" col-span-2">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Sede
                  </label>
                  <div className=" mt-2">
                    <select
                      onChange={handleData}
                      name="headquarter"
                      id=""
                      className=" focus:outline-none rounded-md ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-gray-900 text-sm py-2 shadow-sm"
                    >
                      <option value="none" className=" text-gray-900 text-sm ">
                        Select
                      </option>
                      <option
                        value="centerLime"
                        className=" text-gray-900 text-sm "
                      >
                        Lima centro
                      </option>
                      <option
                        value="northLime"
                        className=" text-gray-900 text-sm "
                      >
                        Lima norte
                      </option>
                      <option
                        value="SouthLime"
                        className=" text-gray-900 text-sm "
                      >
                        Lima sur
                      </option>
                      <option
                        value="eastLime-SJL"
                        className=" text-gray-900 text-sm "
                      >
                        Lima Este - SJL
                      </option>
                      <option
                        value="eastLime-ATE"
                        className=" text-gray-900 text-sm "
                      >
                        Lima Este - ATE
                      </option>
                      <option
                        value="Arequipa"
                        className=" text-gray-900 text-sm "
                      >
                        Arequipa
                      </option>
                      <option
                        value="Chiclayo"
                        className=" text-gray-900 text-sm "
                      >
                        Chiclayo
                      </option>
                      <option
                        value="Chimbote"
                        className=" text-gray-900 text-sm "
                      >
                        Chimbote
                      </option>
                      <option
                        value="Huancayo"
                        className=" text-gray-900 text-sm "
                      >
                        Huancayo
                      </option>
                      <option value="Ica" className=" text-gray-900 text-sm ">
                        Ica
                      </option>
                      <option value="Piura" className=" text-gray-900 text-sm ">
                        Piura
                      </option>
                      <option
                        value="Trujillo"
                        className=" text-gray-900 text-sm "
                      >
                        Trujillo
                      </option>
                      <option
                        value="virtualCampus"
                        className=" text-gray-900 text-sm "
                      >
                        Campus 100% virtual
                      </option>
                    </select>
                  </div>
                  {error.headquarter ? (
                    <p className=" mt-1 text-sm leading-6 text-red-600">
                      {error.headquarter}
                    </p>
                  ) : null}
                </div>

                <div className=" col-span-2">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Ciclo
                  </label>
                  <div className=" mt-2">
                    <select
                      onChange={handleData}
                      name="cycle"
                      id=""
                      className=" focus:outline-none rounded-md ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-gray-900 text-sm py-2 shadow-sm pr-24"
                    >
                      <option value="none" className=" text-gray-900 text-sm ">
                        Select
                      </option>
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
                  </div>
                  {error.cycle ? (
                    <p className=" mt-1 text-sm leading-6 text-red-600">
                      {error.cycle}
                    </p>
                  ) : null}
                </div>

                <div className=" col-span-2">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Carrera
                  </label>
                  <div className=" mt-2">
                    <input
                      maxLength={25}
                      onChange={handleData}
                      value={data.carrer}
                      type="text"
                      name="carrer"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  {error.carrer ? (
                    <p className=" mt-1 text-sm leading-6 text-red-600">
                      {error.carrer}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>

            {!IsLoading ? (
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <Link
                  className="text-sm font-semibold leading-6 text-gray-900"
                  href="/post/posts/all"
                >
                  Cancelar
                </Link>
                <button
                  className="rounded-md bg-rose-600 px-3 py-2 text-sm font-semibold text-white  hover:bg-rose-500 disabled:bg-indigo-200"
                  name="save"
                  onClick={handleSave}
                >
                  Guardar
                </button>
              </div>
            ) : (
              <div className=" flex justify-end mt-6 py-2">
                <MoonLoader size={56} color="#4F46E5" />
              </div>
            )}
            {isFinally ? (
              <p className=" mt-1 text-sm leading-6 text-red-600 text-right">
                Complete todos los campos
              </p>
            ) : null}

            {existUser ? (
              <p className=" mt-1 text-sm leading-6 text-red-600 text-right">
                Ya existe ese email
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
}
