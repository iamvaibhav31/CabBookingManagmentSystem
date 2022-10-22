import React, { useState } from "react";

const Driverdata = () => {


     return (
          <form className="p-4">
               <div class="col-12 mb-2 ">
                    <label for="name" class="form-label">Drive Name:-</label>
                    <input type="text" class="form-control" id="name" />
               </div>
               <div class="col-12 mb-2 ">
                    <label for="currentaddress" class="form-label">Current Address:-</label>
                    <form class="row ">
                         <div class="col-8">
                              <input type="text" class="form-control" placeholder="City" aria-label="City" />
                         </div>
                         <button type="submit" class="btn btn-primary col-3"> Search</button>
                    </form>
               </div>

               <button type="submit" class="btn btn-primary w-100"> Resgister</button>

          </form>
     );
};

export default Driverdata;
