import React from "react";
import { MyContext } from "../../App"



export const Expo2 = (props) => {
    return(
        <MyContext.Consumer>
            {(value)=> <h3>Expo 2 {value.title}</h3>}
        </MyContext.Consumer>
        
    )
}

