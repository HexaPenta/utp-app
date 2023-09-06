// "use client";
// import { useRouter } from "next/navigation";

export default function Home() {
  // useRouter().push("/post/all");

  return (
    // <div className=" bg-white">
    //   <div className=" w-1/2 mx-auto py-24">
    //     <div className=" grid grid-cols-6 animate-pulse gap-y-6 gap-x-3 py-16 pl-12">
    //       <div class="h-4 bg-slate-400/70 rounded-lg col-span-1 "></div>
    //       <div class="h-4 bg-slate-400/70 rounded-lg col-span-3 col-start-1 "></div>
    //       <div class="h-4 bg-slate-400/70 rounded-lg col-span-1 col-start-1 "></div>
    //       <div class="h-4 bg-slate-400/70 rounded-lg col-span-4 col-start-1 "></div>
    //       <div class="h-4 bg-slate-400/70 rounded-lg col-span-1 col-start-1 "></div>
    //       <div class="h-4 bg-slate-400/70 rounded-lg col-span-4 col-start-1 "></div>
    //     </div>
    //   </div>
    // </div>
    <div className="flex max-w-full px-4">
      <div className=" w-1/4 rounded-lg ml-2 h-fit">
        <div className="  px-4 py-6 grid grid-cols-1 gap-y-14  mx-auto w-fit items-center ">
          {/* <div className=" flex flex-col gap-y-14 pt-8 mx-auto w-fit"> */}
          <img
            src="https://www.utp.edu.pe/sites/default/files/logos-empresas/logo-ibk.png"
            alt="Failed to load"
            className=" scale-125 mx-auto pb-1 px-2"
          />
          <img
            src="https://www.utp.edu.pe/sites/default/files/logos-empresas/logo-promart.png"
            alt="Failed to load"
            className=" scale-125 mx-auto pb-1 px-2 "
          />
          <img
            src="https://www.utp.edu.pe/sites/default/files/logos-empresas/logo-cineplanet.png"
            alt="Failed to load"
            className=" scale-110 mx-auto pb-1 px-2 "
          />
          <img
            src="https://www.utp.edu.pe/sites/default/files/logos-empresas/logo-makro.png"
            alt="Failed to load"
            className=" scale-125 mx-auto  pb-1 px-2 "
          />
          <img
            src="https://www.utp.edu.pe/sites/default/files/logos-empresas/logo-plazavea.png"
            alt="Failed to load"
            className=" scale-125 mx-auto rounded-lg  pb-1 px-2 "
          />
          <img
            src="https://www.utp.edu.pe/sites/default/files/logos-empresas/logo-vivanda.png"
            alt="Failed to load"
            className=" scale-110 mx-auto pb-1 px-2 "
          />
          <img
            src="https://www.utp.edu.pe/sites/default/files/logos-empresas/logo-tinka.png"
            alt="Failed to load"
            className=" scale-125 mx-auto pb-1 px-2 "
          />
          <img
            src="https://www.utp.edu.pe/sites/default/files/logos-empresas/logo-oechsle.png"
            alt="Failed to load"
            className=" scale-125 mx-auto pb-1 px-2 "
          />
          <img
            src="https://www.utp.edu.pe/sites/default/files/logos-empresas/logo-inkafarma.png"
            alt="Failed to load"
            className=" scale-125 mx-auto rounded-lg pb-1 px-2 "
          />
          <img
            src="https://www.utp.edu.pe/sites/default/files/logos-empresas/logo-mifarma.png"
            alt="Failed to load"
            className=" scale-125 mx-auto rounded-lg pb-1 px-2 "
          />
          <img
            src="https://www.utp.edu.pe/sites/default/files/logos-empresas/logo-realplaza.png"
            alt="Failed to load"
            className=" scale-125 mx-auto rounded-md pb-1 px-2 "
          />
          <img
            src="https://www.utp.edu.pe/sites/default/files/logos-empresas/logo-interseguro.png"
            alt="Failed to load"
            className=" scale-125 mx-auto pb-1 px-2 "
          />
          <img
            src="https://www.utp.edu.pe/sites/default/files/logos-empresas/logo-inretail.png"
            alt="Failed to load"
            className=" scale-125 mx-auto pb-1 px-2 "
          />
          <img
            src="https://www.utp.edu.pe/sites/default/files/logos-empresas/logo-inteligo.png"
            alt="Failed to load"
            className=" scale-125 mx-auto pb-1 px-2 "
          />
          <img
            src="https://www.utp.edu.pe/sites/default/files/logos-empresas/logo-interfondos.png"
            alt="Failed to load"
            className=" scale-125 mx-auto pb-1 px-2 "
          />
          <img
            src="https://www.utp.edu.pe/sites/default/files/logos-empresas/logo-innovaschool.png"
            alt="Failed to load"
            className=" scale-125 mx-auto pb-1 px-2 "
          />
        </div>
      </div>
      <div className=" w-1/2 p-4 pt-0">{children}</div>
      <div className=" w-1/4 h-fit px-4 py-6 grid grid-col-1 gap-y-12 my-4 ">
        {/* <div className=" bg-yellow-400 w-1/4 h-fit rounded-lg shadow-md px-4 py-6 grid-col-1 gap-y-96 "> */}
        <img src={UrlImagePortalUTP} alt="" className=" mx-auto" />
        <img
          src="https://instructure-uploads.s3.amazonaws.com/account_94830000000000001/attachments/13474277/utp-canvas.png"
          alt=""
          className=" mx-auto"
        />
        <img
          src="https://info.utp.edu.pe/static/media/logo-small.b45b7454.svg"
          alt=""
          className=" mx-auto"
        />
        {/* <span>
            <img
              src="https://portal.utp.edu.pe/static/media/IconWhatsapp.1cd55871.svg"
              alt=""
            />
          </span> */}
      </div>
    </div>
  );
}
