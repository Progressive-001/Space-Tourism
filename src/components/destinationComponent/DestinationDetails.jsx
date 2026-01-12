import { NavLink, useParams } from 'react-router-dom'

import { motion } from 'framer-motion'


import './DestinationDetails.css'
import Moon from './Moon';
import Mars from './Mars';
import Europa from './Europa';
import Titan from './Titan';

export default function DestinationDetails() {
  const { planet } = useParams();

  return (
    <div className='flex flex-row items-center justify-start mt-40 gap-[10rem] max-w-[1200px] w-[100%]'>

      <div>
        <h1 className='font-barlow font-thin text-preset-5 tracking-preset-3 mb-[10px]'><span className='text-[#9ca3af] font-bold text-preset-5 tracking-preset-3'>01</span> PICK YOUR DESTINATION</h1>

        <motion.div 
          key={planet}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <img src={`../assets/destination/image-${planet}.webp`} alt="" />
        </motion.div>
      </div>
        

      <div className='flex flex-col gap-4 max-w-[440px] items-start'>

        {/* Nav Links */}
        <ul 
          className="flex gap-[40px] justify-center font-barlow text-preset-7 tracking-preset-2 leading-auto font-thin z-10 mb-[20px]" 
          // onClick={handleClick}
        >
          <li>
            <NavLink
              exact
              to="/destination/moon"
              className={({ isActive }) =>
                `nav-line${isActive ? " active" : ""}`
              }
            >
              MOON
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="/destination/mars" 
              className={({isActive}) =>
                `nav-line${isActive ? " active" : ""}`
              }
            >
             MARS
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="/destination/europa" 
              className={({isActive}) => 
                `nav-line${isActive ? " active" : ""}`
              }
            >
             EUROPA
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="/destination/titan" 
              className={({isActive}) =>  
                `nav-line${isActive ? " active" : ""}`
              }
            >
             TITAN
            </NavLink>
          </li>
        </ul>

        {planet === "moon" && <Moon planet={planet} />}
        {planet === "mars" && <Mars planet={planet}/>}
        {planet === "europa" && <Europa planet={planet}/>}
        {planet === "titan" && <Titan planet={planet}/>}

      </div>

    </div>
  )
}
