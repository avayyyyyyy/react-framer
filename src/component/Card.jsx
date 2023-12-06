import { FaFileAlt } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";

const Card = ({ dataa }) => {
  return (
    <motion.div
      drag
      whileDrag={{ scale: 1.2 }}
      whileFocus={{ scale: 1.2 }}
      dragElastic={0.2}
      dragConstraints={reference}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      className=" overflow-hidden  h-[280px] w-[280px] bg-zinc-950 rounded-[15px] opacity-70 text-zinc-100 flex flex-col justify-between "
    >
      <div className="p-5 flex flex-col h-[100%] justify-between">
        <FaFileAlt />
        <h3 className="my-3">{dataa.desc}</h3>
        <div className="flex justify-between items-center">
          <h6>{dataa.size}</h6>
          <div className="bg-slate-200 p-[2px] w-fit text-zinc-950 rounded-full cursor-pointer">
            <RxCross2 />
          </div>
        </div>
      </div>
      <div
        className={`cursor-pointer bg-red-600 flex justify-center items-center w-full h-[38px] hover:bg-red-500`}
      >
        <h4>Download Now</h4>
      </div>
    </motion.div>
  );
};

export default Card;
