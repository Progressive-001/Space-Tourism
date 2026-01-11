
import './TechnologyDetails.css'

import SpacePort from './SpacePort';
import SpaceCapsule from './SpaceCapsule';
import LaunchVehicle from './LaunchVehicle';

import { NavLink, useParams } from 'react-router-dom/cjs/react-router-dom'

import { motion } from 'framer-motion'


export default function TechnologyDetails() {
  const { spaceLaunch } = useParams();

  return (
    <div className='flex flex-row self-end justify-between mt-40 gap-[2rem] max-w-[1200px] w-[100%]'>

      <div className='flex flex-col min-h-[500px] items-start gap-[80px]'>

        <div>
          <h1 className='font-barlow font-thin text-preset-5 tracking-preset-3 mb-[10px]'><span className='text-[#9ca3af] font-bold text-preset-5 tracking-preset-3'>03</span> SPACE LAUNCH 101</h1>
        </div>

        <div className='flex flex-row items-start gap-[60px] justify-between'>

          {/* Nav Links */}
          <ul 
            className="flex flex-col gap-[40px] z-10 mt-[0] justify-around font-bellefair text-preset-4" 
            // onClick={handleClick}
          >
            <li>
              <NavLink
                exact
                to="/technology/launch-vehicle"
                className={({ isActive }) => `circle-num${isActive ? " active" : ""}`
                }
              >1</NavLink>
            </li>

            <li>
              <NavLink 
                to="/technology/spaceport" 
                className={({isActive}) => `circle-num${isActive ? " active" : ""}`
                }
              >2</NavLink>
            </li>

            <li>
              <NavLink 
                to="/technology/space-capsule" 
                className={({isActive}) => `circle-num${isActive ? " active" : ""}`
                }
              >3</NavLink>
            </li>
          </ul>

          <motion.div
            key={spaceLaunch}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className='w-[545px]'
          >
            {spaceLaunch === "launch-vehicle" && <LaunchVehicle spaceLaunch={spaceLaunch} />}  
            {spaceLaunch === "spaceport" && <SpacePort spaceLaunch={spaceLaunch}/>}
            {spaceLaunch === "space-capsule" && <SpaceCapsule spaceLaunch={spaceLaunch}/>}
          </motion.div>

        </div>  
   
      </div>

      {/* Image */}                
      <motion.div 
        key={spaceLaunch}
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <img src={`/Space-Tourism/assets/technology/image-${spaceLaunch}-portrait.jpg`} alt="" className='space-image w-full'/>
      </motion.div>

    </div>
  )
}

