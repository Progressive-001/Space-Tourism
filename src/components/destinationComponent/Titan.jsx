import React from 'react'
import { motion } from 'framer-motion'

export default function Titan({planet}) {
  return (
   <motion.div className="planetText flex flex-col justify-start gap-[50px] font-bellefair"
      key={planet}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
   >

      <div>
         <h1 className='text-preset-2 leading-auto tracking-preset-2 font-normal mb-[20px]'>{planet.toUpperCase()}</h1>
         <p className='font-barlowRegular text-preset-8 border-b-[1px] pb-[40px]  border-slate-600 leading-preset-9  text-[#D0D6F9] font-thin'>
            The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.
         </p>
      </div>

      <div className='flex flex-row gap-24'>

         <div>
            <h5 className='font-barlow text-preset-6 tracking-preset-2 pb-3  text-[#D0D6F9]'>AVG. DISTANCE</h5>
            <span className='font-bellefair text-preset-5'>{"1.6 bil. km".toUpperCase()}</span>  
         </div>

         <div>
            <h5 className='font-barlow text-preset-6 tracking-preset-2 pb-3  text-[#D0D6F9]'>EST. TRAVEL TIME</h5>
            <span className='font-bellefair text-preset-5'>{"7 years".toUpperCase()}</span>  
         </div>

      </div>

   </motion.div>
  )
}
