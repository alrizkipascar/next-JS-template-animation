export default function BlogGrid({ data }) {
  return (
    <div className="grid grid-rows-3 w-3/4 h-auto  ">
      <div className=" w-3/4 h-full  row-span-2">
        <img
          src={data?.src}
          alt="grd"
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
