import Card from "./Card";

const Cards = () => {
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
    <div className="flex absolute gap-6 p-6 z-40">
      {data.map((item, index) => (
        <Card key={index} dataa={item} />
      ))}
    </div>
  );
};

export default Cards;
