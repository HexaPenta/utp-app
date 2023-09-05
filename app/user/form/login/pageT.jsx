export default function Loading() {
  return (
    <div>
      <div className=" w-1/2 mx-auto mt-24">
        <div className=" grid grid-cols-6 animate-pulse gap-y-6 gap-x-3 p-4">
          <div class="h-4 bg-slate-400/70 rounded-lg col-span-full     "></div>
          <div class="h-4 bg-slate-400/70 rounded-lg col-span-5     "></div>
          <div class="h-4 bg-slate-400/70 rounded-lg col-span-4     "></div>
          <div class="h-4 bg-slate-400/70 rounded-lg col-span-2     "></div>
          <div class="h-40 bg-slate-400/70 rounded-lg col-span-4 col-start-2    "></div>
          <div class="h-16 bg-slate-400/70 rounded-full col-start-1 w-16    "></div>
        </div>
      </div>
    </div>
  );
}
