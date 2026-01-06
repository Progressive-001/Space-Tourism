import { useState, useEffect } from 'react'

import './Destination.css'

import DestinationDetails from '../../components/destinationComponent/DestinationDetails'


export default function Destination() {

  //  const [loaded, setLoaded] = useState(false);
  
  //   useEffect(() => {
  //     const img = new Image();
  //     img.src = "/assets/destination/background-destination-desktop.jpg";
  
  //     img.onload = () => {
  //       setLoaded(true);
  //     };
  //   }, []);

  return ( 

    <div 
      className="text-white h-[100vh] min-w-[100%] bg-scroll bg-cover destinationContainer flex flex-col justify-center items-center gap-[100px]">
     <DestinationDetails />
    </div>

  )
}
    