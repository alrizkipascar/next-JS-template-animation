"use client";
import { useEffect, useState } from "react";
import { kanit } from "./fonts";
import Facilitates from "@/components/Facilitates";
import TestimonialCard from "@/components/TestimonialCard";

export default function Home() {
  // SET ELEMENT
  const [el1, setEl1] = useState(null);
  const [el2, setEl2] = useState(null);
  const [el3, setEl3] = useState(null);
  const [el4, setEl4] = useState(null);

  const [observer1, setObserver1] = useState(null);
  const [observer2, setObserver2] = useState(null);
  const [observer3, setObserver3] = useState(null);
  const [observer4, setObserver4] = useState(null);

  const [anim1, setPage1] = useState(false);
  const [anim2, setPage2] = useState(false);
  const [anim3, setPage3] = useState(false);
  const [anim4, setPage4] = useState(false);

  useEffect(() => {
    setEl2(document.querySelector("#second"));
    setEl3(document.querySelector("#third"));
    setEl1(document.querySelector("#fourth"));

    setEl4(document.querySelector("#stats"));
    const observer2 = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("ENTER 2");
          setPage2(true);
          return;
        }
        console.log("LEAVE 2");
        // setPage2(false);
      },
      {
        root: null,
        threshold: 0.1, // set offset 0.1 means trigger if atleast 10% of element in viewport
      }
    );
    setObserver2(observer2);
    const observer3 = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("ENTER 3");
          setPage3(true);
          return;
        }
        console.log("LEAVE 3");
        // setPage3(false);
      },
      {
        root: null,
        threshold: 0.1, // set offset 0.1 means trigger if atleast 10% of element in viewport
      }
    );
    setObserver3(observer3);
    // observer.observe(el);
    const observer1 = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("ENTER 1");
          setPage1(true);
          return;
        }
        console.log("LEAVE 1");
        // setPage1(false);
      },
      {
        root: null,
        threshold: 0.1, // set offset 0.1 means trigger if atleast 10% of element in viewport
      }
    );
    setObserver1(observer1);

    //
    const observer4 = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("ENTER 4");
          setPage4(true);
          return;
        }
        console.log("LEAVE 4");
        // setPage1(false);
      },
      {
        root: null,
        threshold: 0.1, // set offset 0.1 means trigger if atleast 10% of element in viewport
      }
    );
    setObserver4(observer4);
  }, []);

  if (observer1 && observer2 && observer3 && observer4) {
    observer1.observe(el1);
    observer2.observe(el2);
    observer3.observe(el3);
    observer4.observe(el4);
  }

  function animateValue(id, start, end, duration) {
    if (
      document.getElementById("totalPost") !== null &&
      document.getElementById("totalUser") !== null
    ) {
      if (start === end) return;
      const range = end - start;
      let current = start;
      const increment = end > start ? 1 : +1;
      const stepTime = Math.abs(Math.floor(duration / range));
      const obj = document.getElementById(id);
      const timer = setInterval(function () {
        current += increment;
        obj.innerHTML = current.toString() ?? 0;
        if (current == end) {
          clearInterval(timer);
        }
      }, stepTime);
    }
  }
  useEffect(() => {
    if (anim4) {
      animateValue("totalPost", 0, 6, 700);
      animateValue("totalUser", 0, 200, 700);
    }
  }, [anim4]);

  const kanit_fonts = kanit;

  return (
    //
    <>
      <div
        id="first"
        className="snap-start h-auto lg:h-screen bg-accentBlue shrink-0 min-w-full flex min-h-screen flex-col items-center justify-between pt-24 pb-6"
      >
        <div className="grid  lg:grid-cols-2 w-3/4 lg:w-[1100px] h-auto lg:h-[945px] transition-all duration-300">
          <div className=" flex-1 gap-4 w-full lg:w-[523px] h-auto lg:h-full transition-all duration-300">
            <h1
              className={`${kanit_fonts.className} text-left w-full h-auto text-[65px] text-slate-800 transition-all duration-300 `}
            >
              A good workplace create a good mindset.
            </h1>
            <div className="text-justify h-auto ">
              <p className="text-[20px] text-slate-800">
                Getting the place you need doesn`t have to feel confusing and
                impersonal.
              </p>
              <p className="text-[20px] text-slate-800">
                That`s why we`ve made it as easy as possible to get the product
                you need with the personalized preference and first-class
                quality of the product you deserve.
              </p>
            </div>
            <div className="h-1/5 grid pt-6 w-full   justify-items-center">
              <button className="w-1/2 h-[50px] rounded-3xl bg-orangeCream">
                Book your workplace now!
              </button>
            </div>
          </div>
          <div className="rounded-2xl ">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDYzNDB8MHwxfHNlYXJjaHwxfHx3b3JraW5nJTIwdGVhbXxlbnwwfHx8fDE2OTU0Nzk0MTN8MA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="front"
              className="w-full h-full  object-cover lg:object-right sm:rounded-2xl transition-all duration-300"
            ></img>
          </div>
        </div>
        {/* <div className="rounded-xl bg-sweetPink h-1/2 w-3/4"></div> */}
      </div>
      <div
        id="second"
        className="snap-start  h-auto lg:h-screen  shrink-0 min-w-full flex min-h-screen flex-col items-center  p-24"
      >
        <div className="flex  grid-cols-2 gap-3 w-full h-full ">
          <div className="w-3/4 h-full ">
            <div className="flex grid-cols-2 gap-2 w-full h-1/2 pb-2">
              <img
                src="https://images.unsplash.com/photo-1587301669187-732ea66e7617?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDYzNDB8MHwxfHNlYXJjaHwxMHx8d29ya3NwYWNlfGVufDB8fHx8MTY5NTQ3NzkzOHww&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Picture of the x"
                className={` transition-all duration-1500 rounded-xl object-fill bg-accentBlue h-full w-1/4 ${
                  anim2 ? "opacity-100 animate-fadeIn" : "opacity-0"
                } `}
              ></img>
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDYzNDB8MHwxfHNlYXJjaHwzfHx3b3JraW5nJTIwdGVhbXxlbnwwfHx8fDE2OTU0Nzk0MTN8MA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Picture of the x"
                className={`animate-fadeIn transition-all duration-1500 rounded-xl object-cover object-bottom bg-slate-800 h-full w-3/4 ${
                  anim2 ? "opacity-100" : "opacity-0"
                } `}
              ></img>
            </div>
            <div className="flex grid-cols-2 gap-2 w-full h-1/2 pt-2">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDYzNDB8MHwxfHNlYXJjaHwzfHx0ZWFtfGVufDB8fHx8MTY5NTQ3ODM5Mnww&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Picture of the x"
                className={`animate-fadeIn transition-all duration-1500 rounded-xl object-cover object-center bg-cream h-full w-3/4 ${
                  anim2 ? "opacity-100" : "opacity-0"
                } `}
              ></img>
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDYzNDB8MHwxfHNlYXJjaHw5fHx3b3Jrc3BhY2V8ZW58MHx8fHwxNjk1NDc3OTM4fDA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Picture of the x"
                className={` transition-all duration-1500 rounded-xl object-fill bg-primaryBlue h-full w-1/4 ${
                  anim2 ? "opacity-100 animate-fadeIn" : "opacity-0"
                } `}
                //
              ></img>
            </div>
          </div>
          <div
            className={`w-1/4 h-full rounded-2xl bg-orange-700 transition-all duration-1500 p-3 ${
              anim2 ? "opacity-100 animate-fadeIn " : "hidden translate-x-32"
            } `}
          >
            <div className="self-center justify-center text-center ">
              <p className="text-2xl lg:text-5xl text-whitebg font-bold">
                Create, Present, and Work.
              </p>
            </div>
            <p className="text-xl lg:text-2xl text-slate-900 text-left mt-3 h-full w-full">
              Start your company with us, our workspace is perfect for a small
              or starting up company who needs space for works, a meeting or
              presentation space, and peaceful.
            </p>
          </div>
        </div>
      </div>
      <div
        id="third"
        className="snap-start h-auto  lg:h-screen bg-sweetPink shrink-0 min-w-full flex min-h-screen flex-col items-center justify-between p-24"
      >
        <Facilitates anim={anim3}></Facilitates>
      </div>
      <div
        id="stats"
        className="snap-start h-auto  lg:h-screen  shrink-0 min-w-full flex min-h-screen flex-col items-center justify-between p-24"
      >
        <div className={`self-center justify-center text-center  `}>
          <p className="text-3xl text-black font-bold">Total Our User</p>
          <p className="">
            What (imaginary) stats for this (imaginary) company.
          </p>
        </div>
        <div className=" flex h-full w-full text-center text-5xl">
          <div className="mx-auto my-auto flex w-full ">
            <div className="w-full border-r border-gray-600">
              <div>Total Company</div>
              <div id="totalPost">0</div>
            </div>
            <div className="w-full border-l border-gray-600">
              <div>Total Member</div>

              <div id="totalUser">0</div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="fourth"
        className="snap-start  h-auto lg:h-screen shrink-0 min-w-full flex min-h-screen flex-col items-center justify-between p-7 lg:p-24"
      >
        <TestimonialCard anim1={anim1}></TestimonialCard>
      </div>
    </>
  );
}
