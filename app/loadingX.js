export default function Loading() {
  return (
    <div>
      <div className=" w-1/2  max-h-full p-4 pt-0 bg-slate-50 mx-auto">
        <div className=" grid grid-cols-6 animate-pulse gap-y-6 gap-x-1 py-1">
          <div class="h-4 bg-slate-700 rounded-lg col-span-full     "></div>
          <div class="h-4 bg-slate-700 rounded-lg col-span-5     "></div>
          <div class="h-4 bg-slate-700 rounded-lg col-span-4     "></div>
          <div class="h-4 bg-slate-700 rounded-lg col-span-2     "></div>
          <div class="h-40 bg-slate-700 rounded-lg col-span-4 col-start-2    "></div>
          <div class="h-10 bg-slate-700 rounded-full col-start-1 w-10    "></div>
        </div>
      </div>
    </div>
  );
}
