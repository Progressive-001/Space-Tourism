import { useState, useEffect } from "react";
import TechnologyDetails from "../../components/technologyComponent/TechnologyDetails";
import "./Technology.css";

export default function Technology() {
  // const [loaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   const img = new Image();
  //   img.src = "/assets/technology/background-technology-desktop.jpg";

  //   img.onload = () => {
  //     setLoaded(true);
  //   };
  // }, []);

  return (
    <div className="text-white h-[100vh] w-[100%] bg-scroll bg-cover bg-center technologyContainer flex flex-col justify-center items-center gap-[100px]">
      <TechnologyDetails />
    </div>
  );
}
