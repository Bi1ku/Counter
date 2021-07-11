import React from "react";
import logo from "./logo.svg";
import "./App.css";

// Importing buttons and counter from componets folder
import SubtractButton from "./componets/ButtonSubtract";
import AddButton from "./componets/ButtonAdd";
import ResetButton from "./componets/CounterReset";
import Counter from "./componets/Counter";

class App extends React.Component {
  state = {
    counter: 0,
  };

  AddCounter = () => {
    let counter = this.state.counter;
    counter = counter + 1;
    this.setState({
      counter,
    });
  };

  SubtractCounter = () => {
    let counter = this.state.counter;
    if (counter - 1 >= 0) {
      counter = counter - 1;
    } else {
      alert("Sorry! Counter can't go to the negative numbers!");
    }
    this.setState({
      counter,
    });
  };

  ResetCounter = () => {
    let counter = this.state.counter;
    counter = 0;
    this.setState({
      counter,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter counter={this.state.counter} />
          <AddButton AddCounter={this.AddCounter} />
          <SubtractButton SubtractCounter={this.SubtractCounter} />
          <ResetButton ResetCounter={this.ResetCounter} />
          <h1>{this.counter}</h1>
        </header>
      </div>
    );
  }
}

export default App;
