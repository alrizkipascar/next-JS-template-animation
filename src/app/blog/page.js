"use client";
import BlogGrid from "@/components/BlogGrid";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Blog() {
  // SET ELEMENT
  const [el1, setEl1] = useState(null);

  const [observer1, setObserver1] = useState(null);

  const [anim1, setPage1] = useState(false);

  useEffect(() => {
    // setEl2(document.querySelector("#second"));
    // setEl3(document.querySelector("#third"));
    setEl1(document.querySelector("#first"));

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
  }, []);

  if (observer1) {
    observer1.observe(el1);
  }

  const [boxStyle, setBoxStyle] = useState("hidden");

  useEffect(() => {
    if (anim1 === true) {
      let newStyle = "opacity-0 translate-y-32 ";
      setBoxStyle(newStyle);

      //   setTimeout(() => {
      //     newStyle = "opacity-0 translate-y-2/4 ";

      //     setBoxStyle(newStyle);
      //   }, 250);
      setTimeout(() => {
        newStyle = "opacity-100  translate-y-0";
        setBoxStyle(newStyle);
      }, 500);
    }
  }, [anim1]);
  const data = [
    {
      id: 0,
      text: "The Reason We Build This Company",
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDYzNDB8MHwxfHNlYXJjaHw3fHx0ZWFtfGVufDB8fHx8MTY5NTQ3ODM5Mnww&ixlib=rb-4.0.3&q=80&w=1080",
      description:
        "Et duis dolore proident aliquip fugiat laborum pariatur. Ipsum ex quis veniam sunt ipsum ut velit nisi ex. Esse deserunt ut est ea do laboris et ad proident in duis cupidatat non. Amet officia anim anim nulla tempor nostrud. Fugiat eiusmod fugiat esse ad. In quis ullamco nulla et reprehenderit voluptate sunt occaecat fugiat id. Magna cupidatat duis id enim eiusmod deserunt. Non in irure sint ut eu ut occaecat mollit. Cupidatat nostrud in eiusmod eiusmod labore tempor. Pariatur Lorem nulla do officia culpa aute mollit. Nulla anim ipsum consequat et mollit mollit.",
      date: "9/26/2023",
    },
    {
      id: 1,
      text: "How we prepare our food",
      src: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      description:
        "Mollit Lorem laboris culpa ad laborum cillum minim laborum adipisicing adipisicing elit. Mollit sit duis reprehenderit excepteur Lorem ipsum eiusmod velit. Dolor cupidatat excepteur amet Lorem ex fugiat. Fugiat est sit velit anim ullamco excepteur labore sunt deserunt adipisicing dolor velit laborum. Ex consequat ad fugiat Lorem ea ea adipisicing.",
      date: "9/20/2023",
    },
    {
      id: 2,
      text: "Where Our Coffee Come From",
      src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDYzNDB8MHwxfHNlYXJjaHw4fHxjYWZlfGVufDB8fHx8MTY5NTU4NTExM3ww&ixlib=rb-4.0.3&q=80&w=1080",
      description:
        "Tempor deserunt duis incididunt aute dolor sunt adipisicing consequat enim non laborum. Nostrud eu deserunt officia cupidatat pariatur ut veniam eu ex. Esse cillum fugiat eiusmod qui voluptate est ea adipisicing dolor velit aliqua nisi cillum non.",
      date: "9/4/2023",
    },
    {
      id: 3,
      text: "Most of Developer Enjoy Our Place?",
      src: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDYzNDB8MHwxfHNlYXJjaHwxMHx8d2Vic2l0ZXxlbnwwfHx8fDE2OTU0Nzc3NjV8MA&ixlib=rb-4.0.3&q=80&w=1080",
      description:
        "Mollit Lorem laboris culpa ad laborum cillum minim laborum adipisicing adipisicing elit. Mollit sit duis reprehenderit excepteur Lorem ipsum eiusmod velit. Dolor cupidatat excepteur amet Lorem ex fugiat. Fugiat est sit velit anim ullamco excepteur labore sunt deserunt adipisicing dolor velit laborum. Ex consequat ad fugiat Lorem ea ea adipisicing.",
      date: "9/20/2023",
    },
    {
      id: 4,
      text: "Why High Building is High?",
      src: "https://images.unsplash.com/photo-1471039497385-b6d6ba609f9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDYzNDB8MHwxfHNlYXJjaHw3fHxidWlsZGluZ3xlbnwwfHx8fDE2OTU0NzczNDN8MA&ixlib=rb-4.0.3&q=80&w=1080",
      description:
        "Tempor deserunt duis incididunt aute dolor sunt adipisicing consequat enim non laborum. Nostrud eu deserunt officia cupidatat pariatur ut veniam eu ex. Esse cillum fugiat eiusmod qui voluptate est ea adipisicing dolor velit aliqua nisi cillum non.",
      date: "9/4/2023",
    },
  ];

  const truncate = (str, max, len) => {
    return str.length > max ? str.substring(0, len) + "..." : str;
  };

  const staticDesc = truncate(data[0]?.description, 500, 500);

  return (
    <div
      id="first"
      className="snap-start h-screen  min-w-full flex min-h-screen flex-col  justify-between p-24"
    >
      <div className="px-24 h-full">
        <div
          className={`self-start   w-[450px] h-auto border-b-2 border-slate-900`}
        >
          <p className="text-5xl text-black font-bold ">Latest News</p>
        </div>
        <div className="h-full w-full  pt-4">
          <div className="grid grid-cols-5">
            <div
              className={`transition-all duration-500  w-full h-full  col-span-2 ${
                anim1 ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={data[0]?.src}
                alt="list"
                className="w-full h-full  object-cover   "
              ></img>
            </div>{" "}
            <div className="col-span-3 w-full h-full">
              <div className="grid grid-rows-5  w-full h-full">
                <div
                  className={`transition-all duration-700 row-span-1 w-full h-full  grid pl-[20px] ${
                    anim1 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <p className="self-center ">{data[0]?.date}</p>{" "}
                </div>
                <div
                  className={`transition-all duration-700 pl-[20px] row-span-1 w-full h-full  text-3xl text-slate-800 font-bold ${
                    anim1 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {data[0]?.text}
                </div>
                <p
                  className={`transition-all duration-700 pl-[20px] row-span-2  line-clamp-3 ${
                    anim1 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {staticDesc}
                </p>
                <div
                  className={`transition-all duration-1000 pl-[20px] grid row-span-1 w-full h-full  ${
                    anim1 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Link
                    href={`blog/${data[0]?.id}`}
                    className="bg-orangeCream hover:bg-cream hover:text-slate-700 self-center text-center  w-2/5 h-7 rounded-xl"
                  >
                    Read full blog
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-6">
            <div className="grid grid-cols-3 w-full h-full  ">
              {data?.slice(1, 3).map((index, i) => {
                return (
                  <Link
                    href={`blog/${index?.id}`}
                    key={i}
                    className={`transition-all duration-1500 grid justify-center ${boxStyle}`}
                  >
                    <BlogGrid data={index} indexData={i}></BlogGrid>
                  </Link>
                );
              })}
              <div className="pl-[20px] grid w-3/4 h-3/4">
                <Link
                  href={`blog/list`}
                  className="transform-all duration-300 hover:bg-slate-300 text-black grid hover:text-slate-700  text-center  w-full h-full text-4xl"
                >
                  <p className="self-center">See all article</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
