import React from "react";

export const Card = (props) => {
    // console.log(props)
    return(
        <div style={{ minWidth: "200px", minHeight: "200px", border:"1px solid red", padding:"10px", margin:"10px", color:"blue", float:"left"}}>
            <h2 onClick={()=> props.click(props.name)}>Name: {props.name}</h2>
            <h3>Author: {props.color}</h3>
        </div>
    )

}