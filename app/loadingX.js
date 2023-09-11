export default function Loading() {
  return (
    <div>
      <div classNameName="   p-4 pt-0 bg-slate-50 mx-auto">
        <div classNameName=" grid grid-cols-6 animate-pulse gap-y-6 gap-x-1 py-1">
          <div className="h-4 bg-slate-700 rounded-lg col-span-full     "></div>
          <div className="h-4 bg-slate-700 rounded-lg col-span-5     "></div>
          <div className="h-4 bg-slate-700 rounded-lg col-span-4     "></div>
          <div className="h-4 bg-slate-700 rounded-lg col-span-2     "></div>
          <div className="h-40 bg-slate-700 rounded-lg col-span-4 col-start-2    "></div>
          <div className="h-10 bg-slate-700 rounded-full col-start-1 w-10    "></div>
        </div>
      </div>
    </div>
  );
}
