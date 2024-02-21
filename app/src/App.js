import React from 'react';
import './App.css';
import { Country } from './components/Country';
import { Joker } from './components/Joker';

class App extends React.Component{

    render(){

      const style = {
        with: "100%",
        minHeight: "400px",
        background:"red"
      }

      return(
        <div className='App' style={style}>
          <h1 style={{color:"blue"}}>Hello</h1>
          <Country>
            <span><b>Salam Rza</b></span>
            <span><b>Salam M</b></span>
          </Country>
          <Joker></Joker>
        </div>
      )
    }

}

export default App;