"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header({ kanit }) {
  const pathname = usePathname();
  const [el, setEl] = useState(null);
  const [el2, setEl2] = useState(null);
  // const el = document?.querySelector("#first") ?? "";
  const [observer, setObserver] = useState(null);
  const [color, setColor] = useState(null);
  useEffect(() => {
    if (pathname == "/" || pathname == "/blog/list") {
      setEl(document?.querySelector("#first"));
      if (pathname == "/") {
        setEl2(document?.querySelector("#third"));
      }
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            console.log("ENTER");
            setColor(false);
            return;
          }
          console.log("LEAVE");
          setColor(true);
        },
        {
          root: null,
          threshold: 0.1, // set offset 0.1 means trigger if atleast 10% of element in viewport
        }
      );
      setObserver(observer);
      // observer.observe(el);
    } else {
      setObserver(null);
      setColor(true);
    }
  }, [pathname]);

  if (observer) {
    observer.observe(el);
    if (pathname == "/") {
      observer.observe(el2);
    }
  }

  return (
    <div className="absolute top-0 lg:w-full h-24 ">
      <div className="h-full grid grid-cols-4 lg:grid-cols-5  justify-items-center content-center text-slate-950">
        <div
          className={`${kanit.className} ${
            color ? "text-black" : "text-whitebg"
          } col-span-1 text-3xl transition-all duration-300`}
        >
          Logo
        </div>
        <div
          className={`${
            color ? "text-black" : "text-whitebg"
          } transition-all duration-300 col-span-2 lg:col-span-3  grid grid-cols-4 gap-8 text-center justify-items-center  content-center`}
        >
          <Link
            href="/"
            className=" grid grid-rows-2 justify-items-center content-center col-span-1"
          >
            <p
              className={`${
                color ? "hover:text-slate-700" : "hover:text-slate-300"
              } `}
            >
              Dashboard
            </p>
            <div
              className={`${
                pathname == "/" ? "opacity-100" : "opacity-0"
              } rounded-full w-2 h-2 ${color ? "bg-accentBlue" : "bg-cream"} `}
            ></div>
          </Link>
          <Link
            href="/blog"
            className="grid grid-rows-2 justify-items-center content-center col-span-1"
          >
            <p className="hover:text-slate-700"> Blog</p>
            <div
              className={`${
                pathname == "/blog" ? "opacity-100" : "opacity-0"
              } rounded-full w-2 h-2 bg-accentBlue`}
            ></div>
          </Link>
          <Link
            href="/location"
            className="grid grid-rows-2 justify-items-center content-center col-span-1"
          >
            <p className="hover:text-slate-700"> Location</p>
            <div
              className={`${
                pathname == "/location" ? "opacity-100" : "opacity-0"
              } rounded-full w-2 h-2 bg-orangeCream`}
            ></div>
          </Link>
          <Link
            href="/about"
            className="grid grid-rows-2 justify-items-center content-center col-span-1"
          >
            <p className="hover:text-slate-700"> About</p>
            <div
              className={`${
                pathname == "/about" ? "opacity-100" : "opacity-0"
              } rounded-full w-2 h-2 bg-sweetPink`}
            ></div>
          </Link>
        </div>
        <div className="col-span-1  text-sm w-auto ">
          <button
            className={`flex ${
              color ? "bg-blue-800 text-slate-100" : "bg-whitebg text-slate-900"
            } transition-all duration-300  rounded-3xl items-center place-content-center w-24 lg:w-44 h-12 gap-2`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            <p
              className={`${kanit.className} hidden lg:block text-xs lg:text-md`}
            >
              0-XXX-88XX-XX
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
