import "./Background.css";

const Background = () => {
  return (
    <div className="h-screen w-screen bg-zinc-800 z-[-1] text-zinc-900 main flex-col relative select-none">
      <span className="absolute left-[50%] -translate-x-[50%] mt-16 text-zinc-400">
        Document
      </span>
      <h1 className="font-bold text-[12rem] absolute left-[50%] top-[50%]  -translate-x-[50%] -translate-y-[50%]">
        Docs.
      </h1>
    </div>
  );
};

export default Background;
