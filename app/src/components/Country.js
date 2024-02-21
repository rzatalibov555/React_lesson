import React from "react";
import {Joker} from "./Joker"

export const Country = (props) =>{


    let a = 10
    let b = 15

    let arr = [1,2,3,4,5]
    console.log(props)
    return(
        
        <div>
            <hr />
            <span>Person: <b>{props.country.name}</b></span>
            <br/>
            <span>Population: <b>{props.country.population}</b></span>
            <br/>
            <h3>Adi: {props.demo}</h3>
            <hr/>

            
            <Joker></Joker>

            <h3>Number1: 12 + 12</h3>
            <h3>Number2: {12 + 12}</h3> {/* reqemler toplansin deye {} fiqurlu meterezelerde yazilmalidir!  */}
            <h3>Number3: {Math.round(Math.random()*100)}</h3>
    
            <h3>{ a + b }</h3>
            <h3>{ arr[3] }</h3>

        </div>
      
    )
}