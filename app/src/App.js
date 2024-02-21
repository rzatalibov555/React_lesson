import React from 'react';
import './App.css';
// import { Country } from './components/Country';
// import { Joker } from './components/Joker';
import { Card } from './components/Cards';

class App extends React.Component {
  
  // https://react.dev/
  // state classlar ucundur. function componentler ucun ise hooklardan istifade olunur.
  
  
  constructor(props){
    super(props);
    this.state = {

      animals:[ { name: "cat", color: "pink" },
                { name: "dog", color: "black" },
                { name: "tiger", color: "orange" },
                { name: "fox", color: "ginger" },
                { name: "lion", color: "yellow" },
                { name: "crocodile", color: "green" },
              ],
      title: "Animals",

    }
  }
  
  
  inputHandler = (e)=>{
    console.log(e.target.value)
    this.setState({
      title: e.target.value
    })
  }
  

  eventHandler(title) {
      // console.log("work")
      // this.state.title = "New Title" // State bele deyiwilmir reactda
      this.setState({
        title: title     // eger title: title kimi yazilibsa yani object ile value eynidirse o zaman sadece title yazmaq kifayet edir. 
      })
      console.log(this.state.title)
  }

  eventHandler2(x) {
    console.log(x)
  }

  render() {
    
    let animal = this.state.animals

    // console.log(animal)
    return (
      <div>

        <div style={{textAlign:'center'}}>
          <h1 onClick={this.inputHandler}>{this.state.title}</h1>
        </div>

        <div className='App'>

          {animal.map((item, i) =>{
            return(
              <Card name={item.name} color={item.color} click= {this.eventHandler.bind(this)} key={i} />
            )
          })}

          {/* <Card name={animal[0].name} color={animal[0].color} click= {this.eventHandler.bind(this)} />
          <Card name={animal[1].name} color={animal[1].color} click= {this.eventHandler.bind(this)} />
          <Card name={animal[2].name} color={animal[2].color} click= {this.eventHandler.bind(this)} />
          <Card name={animal[3].name} color={animal[3].color} click= {this.eventHandler.bind(this)} />
          <Card name={animal[4].name} color={animal[4].color} click= {this.eventHandler.bind(this)} /> */}
        </div>

        <div>
          {/* <button onClick={this.eventHandler}>push</button> */}
          <button onClick={this.eventHandler.bind(this)}>push</button>

          {/* <select onChange= {this.eventHandler.bind(this)}>
            <option>1</option>
            <option>2</option>
            <option>3</option>

          </select> */}

          <select onChange= {this.inputHandler}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>

          <input type='text' onChange={this.inputHandler} />
        </div>
      </div>


    )
  }

}

export default App;