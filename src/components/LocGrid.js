export default function LocGrid({ data, indexData }) {
  return (
    <div className="grid grid-rows-3 w-[500px] h-[350px]   ">
      <div className=" w-full h-full  row-span-2">
        <img
          src={data?.src}
          alt="locgrd"
          className="w-full h-full  object-cover   "
        ></img>
      </div>{" "}
      <div className="row-span-1 w-full h-auto">
        <p className="self-center ">{data?.date}</p>
        <div className="text-xl text-slate-800 font-bold">{data?.text}</div>
      </div>
    </div>
  );
}
