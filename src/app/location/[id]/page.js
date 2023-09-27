"use client";
import { kanit } from "@/app/fonts";
import { useParams, useRouter } from "next/navigation";

const kanit_fonts = kanit;
export default function LocationID() {
  const router = useParams();
  const { id } = router;
  const routerid = useRouter();
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
      className=" h-auto bg-whitebg shrink-0 min-w-full flex min-h-screen flex-col items-center justify-between pt-24 pb-6"
    >
      <div className="px-24 h-auto w-full">
        <div
          className={`${kanit_fonts.className} self-start flex   w-[250px] h-auto border-b-2 border-slate-900`}
        >
          <button onClick={routerid.back}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-[48px] h-[48px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
              />
            </svg>
          </button>
          <p className="text-5xl text-black font-bold ">Location</p>
        </div>
        <div className="h-1/2 w-full  pt-4">
          <div className=" flex-row  ">
            <div className=" w-2/3  h-auto ">
              <img
                src={data[id]?.src ?? ""}
                alt="locs"
                className="w-full h-1/2  object-cover   "
              ></img>
            </div>{" "}
            <div className="flex-row w-full h-auto pt-4">
              <div className="pl-[20px] row-span-1 w-full h-auto  text-3xl text-slate-800 font-bold">
                {data[id]?.text} | {data[id]?.date ?? "null"}
              </div>
              <p className="pl-[20px] row-span-2 w-full h-full text-xl ">
                {data[id]?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
