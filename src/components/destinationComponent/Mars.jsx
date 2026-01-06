import React from 'react'

import { motion } from 'framer-motion'

export default function Mars({planet}) {
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
            Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!
         </p>
      </div>

      <div className='flex flex-row gap-24'>

         <div>
            <h5 className='font-barlow text-preset-6 tracking-preset-2 pb-3  text-[#D0D6F9]'>AVG. DISTANCE</h5>
            <span className='font-bellefair text-preset-5'>{"225 mil. km".toUpperCase()}</span>  
         </div>

         <div>
            <h5 className='font-barlow text-preset-6 tracking-preset-2 pb-3  text-[#D0D6F9]'>EST. TRAVEL TIME</h5>
            <span className='font-bellefair text-preset-5'>{"9 months".toUpperCase()}</span>  
         </div>
      </div>

   </motion.div>
  )
}
