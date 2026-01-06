
import './Home.css'
import HomeDetails from '../../components/homeComponent/HomeDetails'

import { useState, useEffect } from 'react'


const Home = () => {
//  const [loaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   const img = new Image();
  //   img.src = "/assets/home/background-home-desktop.jpg";

  //   img.onload = () => {
  //     setLoaded(true);
  //   };
  // }, []);

  return (
    <div className="text-white h-[100vh] max-w-[100%] bg-scroll bg-cover bg-center container flex flex-col justify-center items-center">
      <HomeDetails />
    </div>
  )
}

export default Home;