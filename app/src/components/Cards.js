import React from "react";

export const Card = (props) => {
    // console.log(props)
    return(
        <div style={{ minWidth: "200px", minHeight: "200px", border:"1px solid red", padding:"10px", margin:"10px", color:"blue", float:"left"}}>
            <h1>Name: {props.name}</h1>
            <h1>Author: {props.color}</h1>
        </div>
    )

}