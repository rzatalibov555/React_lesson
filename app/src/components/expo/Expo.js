import React from "react";
import { Auxillary } from "../hoc/Auxillary";
import { Expo2 } from "../expo2/Expo2";




export const Expo = (props) => {
    console.log(props)
    return(

        
        <Auxillary>
            <Expo2 title={props.title} />
            <h2>This is Expo</h2>
            <h3>New React App</h3>
        </Auxillary>
    )

}
