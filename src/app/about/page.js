import { kanit } from "../fonts";

const kanit_fonts = kanit;
export default function About() {
  return (
    <div className="snap-start h-[844px]  lg:h-screen bg-babyBlue shrink-0 min-w-full flex min-h-screen flex-col items-center justify-between pt-24 pb-6">
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 h-auto w-3/4 lg:w-[1100px] lg:h-[945px] transition-all duration-300">
        <div className="rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDYzNDB8MHwxfHNlYXJjaHw3fHx3b3JraW5nJTIwdGVhbXxlbnwwfHx8fDE2OTU0Nzk0MTN8MA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="about"
            className="w-full h-full  object-cover lg:object-left sm:rounded-2xl transition-all duration-300"
          ></img>
        </div>
        <div className=" flex-1 gap-4 w-full lg:w-[523px] h-full] transition-all duration-300">
          <h1
            className={`${kanit_fonts.className} text-left w-full h-auto text-[45px] lg:text-[75px] text-slate-600 transition-all duration-300`}
          >
            Place that priotize you first.
          </h1>
          <div className="text-justify h-auto ">
            <p className="text-[15px] lg:text-[20px] text-slate-800">
              Getting the place you need doesn’t have to feel confusing and
              impersonal.
            </p>
            <p className="text-[15px] lg:text-[20px] text-slate-800">
              That’s why we’ve made it as easy as possible to get the product
              you need with the personalized preference and first-class quality
              of the product you deserve.
            </p>
          </div>
          <div className="h-1/5 grid pt-6 w-full   justify-items-center">
            <button className="w-1/2 h-[50px] rounded-3xl bg-orangeCream">
              Book your workplace now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
