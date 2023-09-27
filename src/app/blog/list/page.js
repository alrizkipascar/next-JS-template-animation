import { kanit } from "@/app/fonts";
import BlogList from "@/components/BlogList";
import Link from "next/link";

const kanit_fonts = kanit;
export default function List() {
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
  return (
    <div
      id="first"
      className="h-auto bg-sweetPink shrink-0 min-w-full flex min-h-screen flex-col items-center justify-between pt-24 pb-6"
    >
      <div className="px-24 h-full w-full">
        <div
          className={`${kanit_fonts.className} self-start flex   w-[250px] h-auto border-b-2 border-slate-900`}
        >
          <Link href={`/blog`}>
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
          </Link>
          <p className="text-5xl text-black font-bold ">Blog</p>
        </div>
        <div className="h-full w-full  pt-4">
          <div className="flex-row grid gap-3">
            {data?.map((index, i) => {
              return (
                <Link
                  href={`/blog/${i}`}
                  key={i}
                  className="grid justify-center"
                >
                  <BlogList data={index} indexData={i}></BlogList>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
