
import { useEffect, useState } from 'react'

import './Crew.css'

import CrewDetails from '../../components/crewComponent/CrewDetails'


export default function Crew() {
  //  const [loaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   const img = new Image();
  //   img.src = "/assets/crew/background-crew-desktop.jpg";

  //   img.onload = () => {
  //     setLoaded(true);
  //   };
  // }, []);

  return (

    <div className=" crewContainer text-white h-[100vh] min-w-[100%] bg-scroll bg-cover bg-center flex flex-col justify-center items-center gap-[100px]">
        <CrewDetails />
    </div>

  )
}
