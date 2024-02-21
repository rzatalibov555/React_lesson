import React from "react";
import classes from "./card.module.css"
// ---------------------------------------------------------------------
// Sass ise iwlemek lazim olarsa 
// Terminalda: 
// 1) npm install node-sass
// 2) npm start
// 3) butun css fayllarinin uzantilarini .css-den .scss-e deyiwirik
// 4) css olan importlari duzgun cagiririq. sccs kimi
// ---------------------------------------------------------------------


//Qeyd: Birde var module.css  Meselen: card.module.css
// 1) CSS faylinda adi card-dirsa o zaman adi olur card.module.css
// 2) import olunur : import classes from "./card.module.css"
// 3) <div className={classes.card}> cagirilanda bele cagirilir. classes import olundugu ucun, card ise clasin adi oldugu ucun. css fayllari sifrelemiw olur.

export const Card = (props) => {
    // console.log(classes)
    if(props.show){
        return(
            <div className={classes.card}>
                <h2 onClick={()=> props.click(props.name)}>Name: {props.name}</h2>
                <h3>Author: {props.color}</h3>
                <h3>Descriprion: </h3>
                <p>lorem ipsum dolar sit amet</p>
            </div>
        ) 
    }else{
        return(
            <div className={classes.card}>
                <h2 onClick={()=> props.click(props.name)}>Name: {props.name}</h2>
                <h3>Author: {props.color}</h3>
            </div>
        )
    }

   

}