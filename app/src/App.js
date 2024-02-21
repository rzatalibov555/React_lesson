import React from 'react';
import './App.css';
// import { Country } from './components/Country';
// import { Joker } from './components/Joker';
import { Card } from './components/card/Cards';

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
      showCards: false,
      showDescription:false

    }
  }
  
  
  inputHandler = (e)=>{
    console.log(e.target.value)
    this.setState({
      title: e.target.value
    })
  }
  

  eventHandler(title) {
      this.setState({
        title: title
      })
      console.log(this.state.title)
  }


  showCardsHandler = () =>{
    this.setState({showCards: !this.state.showCards})
  }

  showDescrHandler = () =>{
    this.setState({showDescription: !this.state.showDescription})
  }

  render() {
    
    let animal = this.state.animals

    // console.log(animal)
    return (
      <div>

        <div style={{textAlign:'center'}}>
          <h1 onClick={this.inputHandler}>{this.state.title}</h1>
        </div>


      {this.state.showCards ? 
      
        <div className='App'>
          {animal.map((item, i) =>{
            return(
              <Card key={i} name={item.name} color={item.color} click= {this.eventHandler.bind(this)} show={this.state.showDescription}  />
            )
          })}
        </div>
    
      : null}
        

        <div>
          <button onClick={this.showCardsHandler}>Show / Hide</button>
          <button onClick={this.showDescrHandler}>Description</button>
        </div>
      </div>


    )
  }

}

export default App;