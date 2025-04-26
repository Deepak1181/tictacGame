import React, { useState } from "react";
import useTic from "./Tic1Hook";


const Tic1 = () => {
 const {board,handleClick,reset,getStatusMessage,CalculateWinner} = useTic()

  return (
    <div >
        {getStatusMessage()}
       <p onClick={reset}>Reset</p>
    <div className="grid grid-cols-3 gap-1  border-2 w-[250px] m-auto p-5  justify-center items-center">
    {
        board.map((el,i)=>{
            return(
                <button className="w-16   h-16 border black  hover:bg-gray-500" key={i} onClick={handleClick(i)} disabled={el!==null}>{el}</button>
            )
        })
     }
    </div>
    </div>
  );
};

export default Tic1;
