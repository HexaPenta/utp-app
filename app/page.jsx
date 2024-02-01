export default function Landing() {
  return (
    <div className=" overflow-auto break-words">
      <img
        src="https://i.ytimg.com/vi/IfM3TpvN2Og/maxresdefault.jpg"
        width={100000}
        alt=""
      />
      <div className=" bg-rose-600 h-6"></div>
      <footer className=" bg-black py-14 px-16X text-white">
        <div
          className="mx-auto sm:max-w-7xl border-b border-gray-500 
       flex flex-col sm:flex-row flex-wrap justify-center sm:justify-around 
        "
        >
          <div className="px-2 sm:w-2/5">
            <h2 className=" font-medium text-3xl">Nuestro campus</h2>
            <div className=" flex flex-wrap gap-x-4 gap-y-5 mt-3">
              <a href="" className=" underline-offset-2 underline">
                Arequipa
              </a>
              <a href="" className=" underline-offset-2 underline">
                Chiclayo
              </a>
              <a href="" className=" underline-offset-2 underline">
                Chimbote
              </a>
              <a href="" className=" underline-offset-2 underline">
                Huancayo
              </a>
              <a href="" className=" underline-offset-2 underline">
                Ica
              </a>
              <a href="" className=" underline-offset-2 underline">
                Lima Centro
              </a>
              <a href="" className=" underline-offset-2 underline">
                Lima Este - Ate
              </a>
              <a href="" className=" underline-offset-2 underline">
                Lima Este - SJL
              </a>
              <a href="" className=" underline-offset-2 underline">
                Lima Norte
              </a>
              <a href="" className=" underline-offset-2 underline">
                Lima Sur
              </a>
              <a href="" className=" underline-offset-2 underline">
                Ica
              </a>
              <a href="" className=" underline-offset-2 underline">
                Trujillo
              </a>
            </div>
          </div>

          <div className="sm:w-1/3 pl-4 mb-20">
            <h2 className=" font-medium text-3xl mb-6 max-md:mt-6">
              Contáctanos
            </h2>
            <div className=" flex">
              <svg
                fill="none"
                height="26"
                viewBox="0 0 16 21"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.3333 21.0001V15.762C14.3333 14.3335 10.6667 12.4287 7.66667 12.4287C4.66667 12.4287 1 14.3335 1 15.762V21.0001"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-width="2"
                  data-darkreader-inline-stroke=""
                ></path>
                <path
                  d="M7.6667 1C5.69527 1 3.85718 2.38095 3.85718 4.08572V6.48571C3.85718 8.19047 5.69527 9.57143 7.6667 9.57143C9.63813 9.57143 11.4762 8.19047 11.4762 6.48571V4.08572C11.4762 2.38095 9.63813 1 7.6667 1Z"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-width="2"
                  data-darkreader-inline-stroke=""
                ></path>
              </svg>
              <span className=" font-medium pl-4 text-lg mb-3">
                Postulantes
              </span>
            </div>
            <p className=" mt-2">
              Lima:{" "}
              <span className=" font-medium underline underline-offset-2 hover:cursor-pointer">
                (01) 315 9610{" "}
              </span>
              | Provincia:{" "}
              <span className=" font-medium underline underline-offset-2 hover:cursor-pointer">
                0801 19 610{" "}
              </span>
            </p>
            <p className=" mt-2">
              WhatsApp:
              <a
                href="https://api.whatsapp.com/send?phone=51946416620&text=Hola%2C%20vengo%20de%20la%20WEB%2C%20deseo%20m%C3%A1s%20informaci%C3%B3n%20de%20la%20UTP."
                className=" underline underline-offset-2 font-medium px-1"
              >
                bit.ly/ConversaUTP
              </a>
            </p>
            <p className=" mt-2">
              Correo:
              <a
                href="mailto:admision@utp.edu.pe"
                className=" underline underline-offset-2 font-medium px-1"
              >
                admision@utp.edu.pe
              </a>
            </p>
            <div className=" flex mt-6">
              <svg
                fill="none"
                height="26"
                viewBox="0 0 16 21"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.3333 21.0001V15.762C14.3333 14.3335 10.6667 12.4287 7.66667 12.4287C4.66667 12.4287 1 14.3335 1 15.762V21.0001"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-width="2"
                  data-darkreader-inline-stroke=""
                ></path>
                <path
                  d="M7.6667 1C5.69527 1 3.85718 2.38095 3.85718 4.08572V6.48571C3.85718 8.19047 5.69527 9.57143 7.6667 9.57143C9.63813 9.57143 11.4762 8.19047 11.4762 6.48571V4.08572C11.4762 2.38095 9.63813 1 7.6667 1Z"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-width="2"
                  data-darkreader-inline-stroke=""
                ></path>
              </svg>
              <span className=" font-medium pl-4 text-lg mb-3">
                Alumnos (SAE):
              </span>
            </div>
            <p className=" mt-2">
              Lima:{" "}
              <span className=" font-medium underline underline-offset-2 hover:cursor-pointer">
                (01) 315 9600{" "}
              </span>
              | Provincia:{" "}
              <span className=" font-medium underline underline-offset-2 hover:cursor-pointer">
                0801 19 600{" "}
              </span>
            </p>
            <p className=" mt-2">
              WhatsApp:
              <a
                href="https://api.whatsapp.com/send?phone=51960252970&text=Hola!+Escr%C3%ADbenos+tu+consulta+por+aqu%C3%AD%C2%A0"
                className=" underline underline-offset-2 px-1 font-medium"
              >
                bit.ly/contacto_SAE
              </a>
            </p>
          </div>
          <div className="px-2 w-fitX sm:pl-20 py-10 mb-20">
            <div className=" flex ">
              <svg
                fill="none"
                height="27"
                viewBox="0 0 24 22"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.2382 1.95239H18.1429C18.2692 1.95239 18.3903 2.00256 18.4796 2.09187C18.5689 2.18117 18.6191 2.30229 18.6191 2.42858V8.61906"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  data-darkreader-inline-stroke=""
                ></path>
                <path
                  d="M10.0476 16.2381H1.47619C1.3499 16.2381 1.22878 16.1879 1.13947 16.0986C1.05017 16.0093 1 15.8882 1 15.7619V2.42858C1 2.30229 1.05017 2.18117 1.13947 2.09187C1.22878 2.00256 1.3499 1.95239 1.47619 1.95239H3.38095"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  data-darkreader-inline-stroke=""
                ></path>
                <path
                  d="M17.1905 20.9999C20.0834 20.9999 22.4286 18.6547 22.4286 15.7618C22.4286 12.8689 20.0834 10.5237 17.1905 10.5237C14.2976 10.5237 11.9524 12.8689 11.9524 15.7618C11.9524 18.6547 14.2976 20.9999 17.1905 20.9999Z"
                  stroke="white"
                  stroke-linejoin="round"
                  stroke-width="2"
                  data-darkreader-inline-stroke=""
                ></path>
                <path
                  d="M1 5.76196H18.619"
                  stroke="white"
                  stroke-linejoin="round"
                  stroke-width="2"
                  data-darkreader-inline-stroke=""
                ></path>
                <path
                  d="M19.5714 13.3811L17.1904 16.2382L15.2856 14.8097"
                  stroke="white"
                  stroke-linejoin="round"
                  stroke-width="2"
                  data-darkreader-inline-stroke=""
                ></path>
                <path
                  d="M14.8096 1V2.90476"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  data-darkreader-inline-stroke=""
                ></path>
                <path
                  d="M6.23804 1.95239H13.3809"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  data-darkreader-inline-stroke=""
                ></path>
                <path
                  d="M4.80957 1V2.90476"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  data-darkreader-inline-stroke=""
                ></path>
                <path
                  d="M6.23804 8.61914H7.66661"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-width="2"
                  data-darkreader-inline-stroke=""
                ></path>
                <path
                  d="M8.61902 8.61914H10.0476"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-width="2"
                  data-darkreader-inline-stroke=""
                ></path>
                <path
                  d="M11 8.61914H12.4286"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-width="2"
                  data-darkreader-inline-stroke=""
                ></path>
                <path
                  d="M13.381 8.61914H14.8096"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-width="2"
                  data-darkreader-inline-stroke=""
                ></path>
                <path
                  d="M3.85718 11H5.28575"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-width="2"
                  data-darkreader-inline-stroke=""
                ></path>
                <path
                  d="M6.23804 11H7.66661"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-width="2"
                  data-darkreader-inline-stroke=""
                ></path>
                <path
                  d="M8.61902 11H10.0476"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-width="2"
                  data-darkreader-inline-stroke=""
                ></path>
                <path
                  d="M11 11H12.4286"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-width="2"
                  data-darkreader-inline-stroke=""
                ></path>
                <path
                  d="M3.85718 13.3811H5.28575"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-width="2"
                  data-darkreader-inline-stroke=""
                ></path>
                <path
                  d="M6.23804 13.3811H7.66661"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-width="2"
                  data-darkreader-inline-stroke=""
                ></path>
                <path
                  d="M8.61902 13.3811H10.0476"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-width="2"
                  data-darkreader-inline-stroke=""
                ></path>
              </svg>
              <h2 className=" font-medium pl-4 text-lg">
                Horario de atención:
              </h2>
            </div>
            <div className=" mt-4">
              <p className=" font-medium text-lg">Postulantes</p>
              <p>Lun - Sab: 8:30 a.m. a 8:00 p.m.</p>
            </div>
            <div className=" mt-4">
              <p className=" font-medium text-lg">Alumnos (SAE):</p>
              <p>Lun - Sab: 8:30 a.m. a 8:00 p.m.</p>
            </div>
          </div>
        </div>
        <ul className="px-2 max-md:flex-col max-md:w-fit flex gap-8 gap-x-6 py-4 mx-auto max-w-7xl mt-10">
          <li className=" bg-slate-300 py-3 px-5 rounded-full">
            <a href="https://www.facebook.com/UTP.Peru/" target="_blank">
              <svg
                fill="none"
                height="20"
                viewBox="0 0 10 20"
                width="10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 5.75557H2.06877V4.68539C2.06877 3.48567 2.19473 2.59117 2.44664 2.00189C2.69856 1.4126 3.16322 0.930898 3.84064 0.556774C4.517 0.185861 5.37251 0.000270751 6.40716 3.13696e-06C7.46441 -0.000825323 8.51553 0.162446 9.52381 0.484117L9.02051 3.11342C8.46041 2.97422 7.88612 2.90187 7.30937 2.89786C6.76915 2.89786 6.38334 3.02712 6.14876 3.28082C5.91418 3.53451 5.79669 4.02505 5.79669 4.74962V5.75317H8.58389V8.72007H5.79748V20H2.06877V8.72007H0V5.75557Z"
                  fill="#231F20"
                  data-darkreader-inline-fill=""
                ></path>
              </svg>
            </a>
          </li>
          <li className=" bg-slate-300 py-3 px-3 pt-4 rounded-full">
            <a
              href="https://www.youtube.com/channel/UCLQEBv7WN0SgOFD_nRLraRQ"
              target="_blank"
            >
              <svg
                fill="none"
                height="14"
                viewBox="0 0 23 14"
                width="23"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M18.6081 13.6525C20.344 13.4204 21.6331 12.2453 21.8284 10.4322C21.9839 9.29807 22.0609 8.15451 22.0591 7.00973C22.0591 5.56337 21.9323 4.51249 21.8654 3.95741C21.8478 3.81135 21.8343 3.69961 21.8284 3.62404C21.681 1.75747 20.4399 0.641417 18.6081 0.403752C16.7304 0.160528 15.3489 0 11.0403 0C6.71716 0 5.32731 0.114663 3.45101 0.403752C1.65879 0.679638 0.388465 1.82488 0.230716 3.62404C0.224877 3.69067 0.212853 3.79599 0.197221 3.93293C0.130996 4.51304 0 5.66054 0 6.83669C0 8.4752 0.131373 9.57854 0.197773 10.1362C0.2129 10.2632 0.224656 10.362 0.230716 10.4322C0.388465 12.2627 1.65879 13.419 3.45101 13.6525C5.33426 13.8992 6.82557 14 11.0403 14C15.1188 14 16.7318 13.9055 18.6081 13.6525ZM14.376 6.90624L9.52675 9.7061V4.10638L14.376 6.90624Z"
                  fill="black"
                  fill-rule="evenodd"
                  data-darkreader-inline-fill=""
                ></path>
              </svg>
            </a>
          </li>
          <li className=" bg-slate-300 py-3.5 px-4 rounded-full">
            <a
              href="https://www.linkedin.com/edu/universidad-tecnol%C3%B3gica-del-per%C3%BA-15621"
              target="_blank"
            >
              <svg
                fill="none"
                height="16"
                viewBox="0 0 16 16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.234741 15.8906H3.51599V5.29688H0.234741V15.8906Z"
                  fill="black"
                  data-darkreader-inline-fill=""
                ></path>
                <path
                  d="M1.92261 0C2.98279 0 3.84338 0.860962 3.84338 1.92169C3.84338 2.98279 2.98279 3.84375 1.92261 3.84375C0.858398 3.84375 0 2.98279 0 1.92169C0 0.860962 0.858398 0 1.92261 0Z"
                  fill="black"
                  data-darkreader-inline-fill=""
                ></path>
                <path
                  d="M11.874 5.10938C15.1961 5.10938 15.7969 7.21857 15.7969 10.0624V15.8906H12.5625V10.7183C12.5625 9.49402 12.5079 7.91876 10.8237 7.91876C9.11627 7.91876 8.76562 9.25323 8.76562 10.6307V15.8906H5.57812V5.29688H8.76562V6.73792H8.76874C9.20618 5.90771 10.2777 5.10938 11.874 5.10938Z"
                  fill="black"
                  data-darkreader-inline-fill=""
                ></path>
              </svg>
            </a>
          </li>
          <li className=" bg-slate-300 py-3 px-3.5 rounded-full">
            <a href="https://www.instagram.com/universidadutp/" target="_blank">
              <svg
                fill="none"
                height="20"
                viewBox="0 0 20 20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0034 4.8645C7.16762 4.8645 4.87183 7.1628 4.87183 9.99608C4.87183 12.8319 7.17012 15.1277 10.0034 15.1277C12.8392 15.1277 15.135 12.8294 15.135 9.99608C15.135 7.1603 12.8367 4.8645 10.0034 4.8645ZM10.0034 13.3269C8.1626 13.3269 6.67263 11.836 6.67263 9.99608C6.67263 8.15611 8.16343 6.6653 10.0034 6.6653C11.8434 6.6653 13.3342 8.15611 13.3342 9.99608C13.335 11.836 11.8442 13.3269 10.0034 13.3269Z"
                  fill="black"
                  data-darkreader-inline-fill=""
                ></path>
                <path
                  d="M14.1233 0.0628211C12.2833 -0.0230107 7.72589 -0.0188441 5.88425 0.0628211C4.26595 0.138653 2.83847 0.529479 1.68766 1.68029C-0.23564 3.60359 0.0101892 6.19521 0.0101892 9.99598C0.0101892 13.8859 -0.206474 16.4175 1.68766 18.3117C3.61846 20.2416 6.24758 19.9891 10.0033 19.9891C13.8566 19.9891 15.1866 19.9916 16.5491 19.4641C18.4015 18.745 19.7998 17.0892 19.9365 14.1151C20.0232 12.2743 20.0182 7.71769 19.9365 5.87605C19.7715 2.36528 17.8874 0.236151 14.1233 0.0628211ZM17.0357 17.0392C15.7749 18.3 14.0258 18.1875 9.97918 18.1875C5.81259 18.1875 4.14178 18.2492 2.92264 17.0267C1.5185 15.6292 1.77266 13.3851 1.77266 9.98265C1.77266 5.37856 1.30017 2.06279 5.92092 1.82612C6.98257 1.78862 7.29506 1.77612 9.96751 1.77612L10.005 1.80112C14.4458 1.80112 17.9299 1.33613 18.139 5.95605C18.1865 7.0102 18.1974 7.32686 18.1974 9.99515C18.1965 14.1134 18.2749 15.7942 17.0357 17.0392Z"
                  fill="black"
                  data-darkreader-inline-fill=""
                ></path>
                <path
                  d="M15.3383 5.86094C16.0006 5.86094 16.5375 5.32406 16.5375 4.66179C16.5375 3.99952 16.0006 3.46265 15.3383 3.46265C14.676 3.46265 14.1392 3.99952 14.1392 4.66179C14.1392 5.32406 14.676 5.86094 15.3383 5.86094Z"
                  fill="black"
                  data-darkreader-inline-fill=""
                ></path>
              </svg>
            </a>
          </li>
          <li className=" bg-slate-300 py-3 px-3.5 rounded-full">
            <a href="https://www.tiktok.com/@universidadutp" target="_blank">
              <svg
                fill="none"
                height="23"
                viewBox="0 0 20 23"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 9.43194C18.034 9.43667 16.1162 8.81974 14.5176 7.66831V15.6988C14.5171 17.1861 14.0653 18.6378 13.2226 19.8598C12.38 21.0818 11.1867 22.0158 9.80222 22.537C8.41778 23.0581 6.90821 23.1415 5.47537 22.7761C4.04254 22.4107 2.75472 21.6138 1.78412 20.4921C0.813528 19.3703 0.206419 17.9771 0.0439736 16.4988C-0.118471 15.0205 0.171491 13.5275 0.87509 12.2194C1.57869 10.9114 2.66238 9.8507 3.98127 9.17913C5.30016 8.50757 6.79138 8.25715 8.25552 8.46138V12.5004C7.58553 12.2884 6.86607 12.2948 6.1999 12.5187C5.53373 12.7426 4.95491 13.1726 4.54609 13.7473C4.13728 14.3219 3.91939 15.0119 3.92352 15.7186C3.92766 16.4253 4.15362 17.1126 4.56913 17.6824C4.98464 18.2522 5.56846 18.6753 6.2372 18.8913C6.90595 19.1073 7.62543 19.1052 8.2929 18.8852C8.96037 18.6652 9.54168 18.2387 9.95384 17.6664C10.366 17.0942 10.5879 16.4055 10.5879 15.6988V0H14.5176C14.5149 0.333917 14.5427 0.667379 14.6007 0.99617C14.7372 1.73015 15.0211 2.42838 15.4351 3.04815C15.849 3.66793 16.3843 4.19622 17.0081 4.60072C17.8955 5.19118 18.9361 5.5059 20 5.50567V9.43194Z"
                  fill="black"
                  data-darkreader-inline-fill=""
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
