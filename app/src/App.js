import React from 'react';
import './App.css';
// import { Country } from './components/Country';
// import { Joker } from './components/Joker';
import { Card } from './components/Cards';

class App extends React.Component{

  // state classlar ucundur. function componentler ucun ise hooklardan istifade olunur.
  state = {
    animals:[{name: "cat", color: "pink"},
              {name: "dog", color: "black"},
              {name: "tiger", color: "orange"},
              {name: "fox", color: "ginger"},
              {name: "lion", color: "yellow"},
            ]


  }
    render(){
      // console.log(this.state)

      let animal = this.state.animals
      // console.log(animal)
      return(
        <div className='App'>
          <Card name={animal[0].name} color={animal[0].color} />
          <Card name={animal[1].name} color={animal[1].color} />
          <Card name={animal[2].name} color={animal[2].color} />
          <Card name={animal[3].name} color={animal[3].color} />
          <Card name={animal[4].name} color={animal[4].color} />
        </div>
      )
    }

}

export default App;