"use client";
import LocGrid from "@/components/LocGrid";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Location() {
  // SET ELEMENT
  const [el1, setEl1] = useState(null);

  const [observer1, setObserver1] = useState(null);

  const [anim1, setPage1] = useState(false);

  useEffect(() => {
    setEl1(document.querySelector("#first"));

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
  }, []);

  if (observer1) {
    observer1.observe(el1);
  }

  const [boxStyle, setBoxStyle] = useState("hidden");

  useEffect(() => {
    if (anim1 === true) {
      let newStyle = "opacity-0 translate-y-32 ";
      setBoxStyle(newStyle);

      setTimeout(() => {
        newStyle = "opacity-100  translate-y-0";
        setBoxStyle(newStyle);
      }, 500);
    }
  }, [anim1]);
  const data = [
    {
      id: 0,
      text: "Gedung X SCBD ",
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDYzNDB8MHwxfHNlYXJjaHw0fHxidWlsZGluZ3xlbnwwfHx8fDE2OTU0NzczNDN8MA&ixlib=rb-4.0.3&q=80&w=400",
      description:
        "Et duis dolore proident aliquip fugiat laborum pariatur. Ipsum ex quis veniam sunt ipsum ut velit nisi ex. Esse deserunt ut est ea do laboris et ad proident in duis cupidatat non. Amet officia anim anim nulla tempor nostrud. Fugiat eiusmod fugiat esse ad. In quis ullamco nulla et reprehenderit voluptate sunt occaecat fugiat id. Magna cupidatat duis id enim eiusmod deserunt. Non in irure sint ut eu ut occaecat mollit. Cupidatat nostrud in eiusmod eiusmod labore tempor. Pariatur Lorem nulla do officia culpa aute mollit. Nulla anim ipsum consequat et mollit mollit.",
      date: "Jakarta",
    },
    {
      id: 1,
      text: "Gedung A Gading Serpong",
      src: "https://images.unsplash.com/photo-1471039497385-b6d6ba609f9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDYzNDB8MHwxfHNlYXJjaHw3fHxidWlsZGluZ3xlbnwwfHx8fDE2OTU0NzczNDN8MA&ixlib=rb-4.0.3&q=80&w=1080",
      description:
        "Mollit Lorem laboris culpa ad laborum cillum minim laborum adipisicing adipisicing elit. Mollit sit duis reprehenderit excepteur Lorem ipsum eiusmod velit. Dolor cupidatat excepteur amet Lorem ex fugiat. Fugiat est sit velit anim ullamco excepteur labore sunt deserunt adipisicing dolor velit laborum. Ex consequat ad fugiat Lorem ea ea adipisicing.",
      date: "Tangerang Selatan",
    },
  ];

  return (
    <div
      id="first"
      className="snap-start w-auto h-screen lg:h-screen shrink-0 min-w-full flex min-h-screen flex-col items-center justify-between p-24"
    >
      <div className="px-6 w-full h-full">
        <div
          className={`self-start   w-[450px] h-auto border-b-2 border-slate-900`}
        >
          <p className="text-5xl text-black font-bold ">Our Location</p>
        </div>
        <div className="h-2/3 w-full  pt-4">
          <div className="grid grid-cols-2 gap-5 w-full h-full  ">
            {data?.map((index, i) => {
              return (
                <Link
                  href={`location/${i}`}
                  key={i}
                  className={`transition-all duration-1000 ${boxStyle}`}
                >
                  <LocGrid data={index} indexData={i}></LocGrid>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
