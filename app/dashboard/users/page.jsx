"use client";

import useSWR from "swr";
import UserRow from "./userRow";
import { useState } from "react";

export default function UsersDashborad() {
  const [cloneData, setCloneData] = useState([]);
  const { data, error, isLoading } = useSWR("/dashboard/users/api", (path) =>
    fetch(path)
      .then((r) => r.json())
      .then((r) => {
        setCloneData(r);
        return r;
      })
  );
  return (
    <div>
      {isLoading ? (
        <h1>Loading</h1>
      ) : data ? (
        <div className=" mx-6 mb-3 border-x-2 border-gray-500 text-lg mt-20 rounded">
          <div className="flex divide-x-2 divide-gray-500 border-y-2 border-gray-500 font-semibold overflow-auto">
            <div className="flex items-center">
              <div className=" py-2.5 pl-4 w-44">Name</div>
            </div>
            <div className="flex items-center">
              <div className=" py-2.5 pl-4 w-44">Surname</div>
            </div>
            <div className="flex items-center">
              <div className=" py-2.5 pl-4 w-80">Email</div>
            </div>

            <div className="flex items-center">
              <div className=" pl-1.5 w-24">Password</div>
            </div>

            <div className="flex items-center">
              {/* <div className=" py-2.5 pl-2 w-24">Headquarter</div> */}
              <div className=" py-2.5 pl-2 w-24">Seat</div>
            </div>

            <div className="flex items-center">
              <div className=" pl-0.5 w-12">Ciclo</div>
            </div>

            <div className="flex items-center">
              <div className=" py-2.5 pl-4 w-24">Carrer</div>
            </div>

            <div className="flex items-center text-center pl-24">
              <div className=" py-2.5 pl-4">Accesos</div>
            </div>
          </div>
          {cloneData.map((value, index) => {
            return (
              <UserRow
                key={index}
                userValue={value}
                setCloneData={setCloneData}
                cloneData={cloneData}
              />
            );
          })}
        </div>
      ) : (
        <h1>Error, please try again or after {JSON.stringify(error)}</h1>
      )}
    </div>
  );
}
