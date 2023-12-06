import "./Background.css";

const Background = () => {
  return (
    <div className="h-[100vh] w-[100vw] bg-zinc-800 z-[-1] text-zinc-900 main flex-col relative select-none  overflow-hidden">
      <span className="absolute left-[50%] -translate-x-[50%] mt-16 text-zinc-400">
        Document
      </span>
      <div className="font-bold text-[12rem] absolute left-[50%] top-[50%]  -translate-x-[50%] -translate-y-[50%]">
        Docs.
      </div>
      <span className="absolute left-[50%] bottom-[37%] -translate-x-[50%] text-red-800">By Shubhankit Jain</span>
    </div>
  );
};

export default Background;
