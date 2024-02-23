import { useContext } from "react";
import React from "react";
import { HookContext } from "../../context/HookContext";




export const Expo2 = (props) => {

    const {state} = useContext(HookContext)
    console.log("Expo2", state)
    return(
        
        <h1>Expo 2 - {state.expoTitle}</h1>
        
    )
}

