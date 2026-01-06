import { useState } from "react";
import { motion } from "framer-motion";
import "./HomeDetails.css";
import { NavLink } from "react-router-dom";

const HomeDetails = () => {
  const [active, setActive] = useState(false);

  return (
    <motion.div 
      className="home-details flex flex-row items-center text-center p-8 mt-[150px]"
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      >

        <div className=" w-[100%] max-w-[660px] flex flex-col gap-[24px] text-justify">

            <h2 className="font-barlow text-preset-8 leading-auto tracking-preset-3  text-[#D0D6F9]">SO, YOU WANT TO TRAVEL TO</h2>

            <h1 className="font-bellefair text-preset-2 leading-auto tracking-preset-1">SPACE</h1>

            <p className="font-barlowRegular text-preset-7 leading-preset-9 tracking-preset-1 font-normal text-[#D0D6F9]">
                Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!
            </p>

        </div>
        
        <button
          className={`explore-button relative font-bellefair text-preset-4 leading-auto tracking-preset-1 rounded-[100%] flex justify-center items-center text-[#0B0D17] overflow-hidden min-h-[430px] min-w-[430px]
          ${active ? "transition-all duration-500 ease-in hover:bg-[#ffff]/10" :"transition-all duration-500 ease-out"}`}
        >
          <NavLink 
            to={"/destination"}
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            className="w-[272px] h-[272px] rounded-[100%] flex items-center bg-white justify-center"
          >
            EXPLORE
          </NavLink>
        </button>
    </motion.div>
  )
}

export default HomeDetails