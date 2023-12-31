import { useRef } from "react";
import Card from "./Card";

const Cards = () => {
  const ref = useRef(null);
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et nulla ac justo.",
      size: "1 MB",
      tag: "Tag 1",
      tagColor: "green",
    },
    {
      desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      size: "2 MB",
      tag: "Tag 2",
      tagColor: "green",
    },
    {
      desc: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
      size: "3 MB",
      tag: "Tag 3",
      tagColor: "green",
    },
  ];
  return (
    <div
      ref={ref}
      className="flex absolute gap-6 flex-wrap h-[100vh] w-screen overflow-hidden p-6 z-40 "
    >
      {data.map((item, index) => (
        <Card key={index} reference={ref} dataa={item} />
      ))}
    </div>
  );
};

export default Cards;
