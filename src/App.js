import { Icon } from "@iconify/react";
import React from "react";
import locationIcon from "@iconify/icons-mdi/check-circle";
const inputStyle = {
  width: 235,
  margin: 5,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      input: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
    this.buttonToComplete = this.buttonToComplete.bind(this);
  }

  handleChange(e) {
    this.setState(() => {
      return {
        input: e.target.value,
      };
    });
  }

  submit() {
    this.setState({
      todos: [...this.state.todos, this.state.input],
    });
  }

  //
  //When the user clicks the markasComplete button this function is called
  //It splices the state todo array to remove the index passed into the function from the array
  //This spliced array is then set to a temp array which is used to update state to the smaller array
  //
  buttonToComplete(td) {
    let beforeArr = this.state.todos;
    console.log("before splice" + beforeArr);
    this.state.todos.splice(td, 1);
    let filteredArray = this.state.todos;
    console.log("after splice" + filteredArray);
    this.setState({ todos: filteredArray });
  }

  render() {
    const todos = this.state.todos.map((td, index) => {
      return (
        <li className="list-items">
          {td}
          <button
            className="mark-complete-button"
            onClick={() => this.buttonToComplete(index)}
          >
            <Icon icon={locationIcon} className="complete-icon"></Icon>
          </button>
        </li>
      );
    });
    return (
      <div className="body-container">
        <h1 className="header-text-container">Conor's Todo Tracker </h1>
        <div className="input-container">
          <input
            style={inputStyle}
            value={this.state.input}
            placeholder="Enter your todo here"
            onChange={this.handleChange}
          />
        </div>

        <button onClick={this.submit} className="button">
          Create todo!
        </button>
        <div className="todo-container-outer">
          {this.state.todos.length > 0 ? (
            <div className="todo-container-inner">{todos}</div>
          ) : (
            <div>No to-do's in list</div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
