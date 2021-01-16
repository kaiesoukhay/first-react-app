import logo from "./logo.svg";
import "./App.css";
import "./App.css";
import React from "react";
import Produit from "./components/Produit";
import products from "./const/Const";

class App extends React.Component {
  state = {
    counter: 0,
  };
  componentDidMount() {
    this.timerID = setInterval(
      () => this.Increment(),
      1000
    );
  }

  Increment = () => {
    this.setState({
      counter : this.state.counter + 1}) 
  };
  Decrement = () => {
    this.setState({
      counter : this.state.counter - 1}) 
  };
  Reser = () => {
    this.setState({
      counter :   0})
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div style ={{ display : 'flex' , 'flex-flow': 'column' , 'margin':'20px' }} >
          <h1>Counter : {this.state.counter}</h1>
          <button  onClick ={this.Increment} className= "btn btn-primary">+</button>
          <button  onClick ={this.Decrement} className= "btn btn-primary">-</button>
          <button  onClick ={this.Reser} className= "btn btn-primary">Reset</button>
          </div>
          
        
        
          <div className="App-header">
            {products.map((produit) => (
              <Produit produit={produit} />
            ))}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
