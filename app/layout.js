// "use client";

import "./globals.css";
import { Inter } from "next/font/google";
// import IsNotLogin from "./components/navbar/isNotLogin/isNotLogin";
// import IsLogin from "./components/navbar/isLogin/isLogin";
import Navbar from "./components/navbar/neutro/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wilson utp app",
  description: "utp app wilson collantes aponte posts",
};

export default function RootLayout({ children }) {
  // const idUser = typeof window !== "undefined" ? localStorage.idUser : "";
  // if (typeof window !== "undefined") {
  //   localStorage;
  // }

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div className={localStorage.idUser ? "hidden" : ""}>
          <IsNotLogin />
        </div>
        <div className={!localStorage.idUser ? "hidden" : ""}>
          <IsLogin />
        </div> */}
        <div className=" flex">
          {/* <div className=" h-screen"> */}
          <Navbar />
          {/* </div> */}
          <div className=" overflow-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
