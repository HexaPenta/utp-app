// "use client";

import "./globals.css";
import { Inter } from "next/font/google";
// import IsNotLogin from "./components/navbar/isNotLogin/isNotLogin";
// import IsLogin from "./components/navbar/isLogin/isLogin";
import Navbar from "./components/navbar/neutro/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UTP Post",
  description: "utp app Richard Alexander Alonso posts",
};

export default function RootLayout({ children }) {
  // const idUser = typeof window !== "undefined" ? localStorage.idUser : "";
  // if (typeof window !== "undefined") {
  //   localStorage;
  // }

  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4148416468265146"
          crossOrigin="anonymous"
        ></script>
      </head>
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
          <div className=" overflow-auto grow">{children}</div>
        </div>
      </body>
    </html>
  );
}
