import React from 'react';
import './App.css';
// import { Country } from './components/Country';
// import { Joker } from './components/Joker';
import { Card } from './components/Cards';

class App extends React.Component {
  
  // https://react.dev/
  // state classlar ucundur. function componentler ucun ise hooklardan istifade olunur.
  state = {
    animals: [{ name: "cat", color: "pink" },
    { name: "dog", color: "black" },
    { name: "tiger", color: "orange" },
    { name: "fox", color: "ginger" },
    { name: "lion", color: "yellow" },
    ]
  }

  eventHandler() {
      console.log("work")
  }

  eventHandler2(x) {
    console.log(x)
  }


  render() {
    


    let animal = this.state.animals
    // console.log(animal)
    return (
      <div>
        <div className='App'>
          <Card name={animal[0].name} color={animal[0].color} />
          <Card name={animal[1].name} color={animal[1].color} />
          <Card name={animal[2].name} color={animal[2].color} />
          <Card name={animal[3].name} color={animal[3].color} />
          <Card name={animal[4].name} color={animal[4].color} />
        </div>

        <div>
          {/* <button onClick={this.eventHandler}>push</button> */}
          <button onClick={()=> this.eventHandler2('a')}>push</button>

          <select onChange= {()=> this.eventHandler2('b')}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
      </div>


    )
  }

}

export default App;