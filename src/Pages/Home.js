import React from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {
     const navigation = useNavigate()
     const onclickdriver = () => { navigation("/drive") }
     const onclickride = () => { navigation("/rider") }
     return (
          <div className="vh-100 vw-100 d-flex align-items-center justify-content-center">
               <div className="d-flex flex-column">
                    <h1> Welcome to Cab Booking Management System</h1>

                    <div className="d-flex justify-content-evenly">
                         <button onClick={onclickdriver}>
                              Driver
                         </button>
                         <button onClick={onclickride}>
                              Rider
                         </button>
                    </div>
               </div>


          </div>
     );
};

export default Home;
