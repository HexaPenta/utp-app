"use client";

import useSWR from "swr";
import UserRow from "./userRow";

export default function UsersDashborad() {
  const { data, error, isLoading } = useSWR("/dashboard/users/api", (path) =>
    fetch(path).then((r) => r.json())
  );

  return (
    <div>
      {isLoading ? (
        <h1>Loading</h1>
      ) : data ? (
        // <div className=" grid grid-cols-7 mx-6">
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
              <div className=" py-2.5 pl-2 w-32">Password</div>
            </div>

            <div className="flex items-center">
              <div className=" py-2.5 pl-2 w-32">Headquarter</div>
            </div>

            <div className="flex items-center">
              <div className=" py-2.5 pl-4 w-24">Cycle</div>
            </div>

            <div className="flex items-center">
              <div className=" py-2.5 pl-4 w-24">Carrer</div>
            </div>

            <span></span>
          </div>
          {data.map((value, index) => {
            // const [edit, setEdit] = useState(false);

            return (
              // <div
              //   key={index}
              //   className=" grid grid-cols-7 divide-x-2 divide-gray-500 border-b-2 border-gray-500"
              // >
              //   <div className=" col-start-1 py-2.5 pl-4">{value.name}</div>
              //   <div className=" col-start-2 py-2.5 pl-4">{value.surname}</div>
              //   <div className=" col-start-3 py-2.5 pl-4">{value.email}</div>
              //   <div className=" col-start-4 py-2.5 pl-4">{value.password}</div>
              //   <div className=" col-start-5 py-2.5 pl-4">
              //     {value.headquarter}
              //   </div>
              //   <div className=" col-start-6 py-2.5 pl-4">{value.cycle}</div>
              //   <div className=" col-start-7 py-2.5 pl-4">{value.carrer}</div>
              // </div>
              // <div>
              //   {!false ? (
              //     <div
              //       key={index}
              //       className=" grid grid-cols-7 divide-x-2 divide-gray-500 border-b-2 border-gray-500"
              //     >
              //       <div className=" col-start-1 py-2.5 pl-4">{value.name}</div>
              //       <div className=" col-start-2 py-2.5 pl-4">
              //         {value.surname}
              //       </div>
              //       <div className=" col-start-3 py-2.5 pl-4">
              //         {value.email}
              //       </div>
              //       <div className=" col-start-4 py-2.5 pl-4">
              //         {value.password}
              //       </div>
              //       <div className=" col-start-5 py-2.5 pl-4">
              //         {value.headquarter}
              //       </div>
              //       <div className=" col-start-6 py-2.5 pl-4">
              //         {value.cycle}
              //       </div>
              //       <div className=" col-start-7 py-2.5 pl-4">
              //         {value.carrer}
              //       </div>
              //     </div>
              //   ) : (
              //     <div></div>
              //   )}
              // </div>
              <UserRow key={index} userValue={value} />
            );
          })}
        </div>
      ) : (
        <h1>{JSON.stringify(error)}</h1>
      )}
    </div>
  );
}
