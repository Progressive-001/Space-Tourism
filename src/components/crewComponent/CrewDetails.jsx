
import "../crewComponent/CrewDetails.css"

import Commander from './Commander';
import MissionSpec from './MissionSpec';
import Pilot from './Pilot';
import FlightEng from './FlightEng';

import { NavLink, useParams } from 'react-router-dom/cjs/react-router-dom'

import { motion } from 'framer-motion'


export default function CrewDetails() {
  const { people } = useParams();

  return (
    <div className='flex flex-row items-center justify-start  mt-40 gap-[10rem] max-w-[1200px] w-[100%]'>

      <div className='flex flex-col max-w-[540px] min-h-[500px] items-start justify-between m-[10px]'>

        <div>
          <h1 className='font-barlow font-thin text-preset-5 tracking-preset-3 mb-[10px]'><span className='text-[#9ca3af] font-bold text-preset-5 tracking-preset-3'>02</span> MEET YOUR CREW</h1>

          <motion.div
            key={people}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
              {people === "douglas-hurley" && <Commander people={people} />}  
              {people === "mark-shuttleworth" && <MissionSpec people={people}/>}
              {people === "victor-glover" && <Pilot people={people}/>}
              {people === "anousheh-ansari" && <FlightEng people={people}/>}
          </motion.div>
         
        </div>

        {/* Nav Links */}
        <ul 
          className="flex gap-[40px] z-10 mt-[0]" 
          // onClick={handleClick}
        >
          <li>
            <NavLink
              exact
              to="/crew/douglas-hurley"
              className={({ isActive }) => `circle${isActive ? " active" : ""}`
              }
            />
          </li>

          <li>
            <NavLink 
              to="/crew/mark-shuttleworth" 
              className={({isActive}) => `circle${isActive ? " active" : ""}`
              }
            />
          </li>

          <li>
            <NavLink 
              to="/crew/victor-glover" 
              className={({isActive}) => `circle${isActive ? " active" : ""}`
              }
            />
          </li>

          <li>
            <NavLink 
              to="/crew/anousheh-ansari" 
              className={({isActive}) => `circle${isActive ? " active" : ""}`
              }
            />
          </li>
        </ul>

      </div>

      <motion.div 
        key={people}
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <img src={`/Space-Tourism/assets/crew/image-${people}.webp`} alt="" />
      </motion.div>

    </div>
  )
}

