import "./Europa.css"

import { motion } from "framer-motion"

export default function Europa({planet}) {
  return (

   <motion.div 
      className="planetText flex flex-col justify-start gap-[50px] font-bellefair"
         key={planet}
         initial={{ opacity: 0, y: 10 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.7, ease: "easeInOut" }}
      >

      <div>
         <h1 className='text-preset-2 leading-auto tracking-preset-2 font-normal mb-[20px]'>{planet.toUpperCase()}</h1>
         <p className='font-barlowRegular text-preset-8 border-b-[1px] pb-[40px]  border-slate-600 leading-preset-9  text-[#D0D6F9] font-thin'>
            The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.
         </p>
      </div>

      <div className='flex flex-row gap-24'>

         <div>
            <h5 className='font-barlow text-preset-6 tracking-preset-2 pb-3 font-thin  text-[#D0D6F9]'>AVG. DISTANCE</h5>
            <span className='font-bellefair text-preset-5'>{"628 mil. km".toUpperCase()}</span>  
         </div>

         <div>
            <h5 className='font-barlow text-preset-6 tracking-preset-2 pb-3 font-thin text-[#D0D6F9]'>EST. TRAVEL TIME</h5>
            <span className='font-bellefair text-preset-5'>{"3 years".toUpperCase()}</span>  
         </div>
      </div>

   </motion.div>
  )
}
