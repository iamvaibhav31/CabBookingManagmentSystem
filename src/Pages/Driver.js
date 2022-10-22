import React, { useState } from "react";
import Mapview from "../Components/mapview";
import DriverData from '../Components/driverdata'


const Driver = () => {
     const [selectPosition, setSelectPosition] = useState(null);

     return (
          <div className="position-relative vh-100 vw-100 d-flex align-items-center ">
               <div className="position-absolute top-0 start-0 h-100 w-100" style={{ zIndex: -1 }}>
                    <Mapview selectPosition={selectPosition} />
               </div>

               <div className="position-absolute top-0 start-50 translate-middle-x  clearflex bg-white rounded-bottom " style={{ hight: "300px", width: "500px" }} >
                    <DriverData selectPosition={selectPosition} setSelectPosition={setSelectPosition} />
               </div>
          </div >
     )
};

export default Driver;
