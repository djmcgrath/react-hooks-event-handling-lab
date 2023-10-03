import React from "react";

function Keypad (){

    function doChange (){
        console.log("Entering password...")
    }
    return (
        <div>
            <input type="password" onChange={doChange}></input>
        </div>
    )
}

export default Keypad;