import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      input: "",
      deletedToDos: [],
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
    let deletedArr = this.state.todos.splice(td, 1);
    let filteredArray = this.state.todos;
    console.log("After delete the deletedToDos is: " + deletedArr);
    this.setState({
      todos: filteredArray,
      deletedToDos: [...this.state.deletedToDos, deletedArr],
    });
  }

  render() {
    const todos = this.state.todos.map((td, index) => {
      return (
        <li className="list-items" onClick={() => this.buttonToComplete(index)}>
          {td}
        </li>
      );
    });

    const completedTickets = this.state.deletedToDos.map((deletedValue) => {
      return <li className="list-items-complete">{deletedValue}</li>;
    });
    return (
      <div className="body-container">
        <h1 className="header-text-container">Conor's Todo Tracker </h1>
        <div className="input-container">
          <input
            className="input"
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
            <div>{todos}</div>
          ) : (
            <div className="todo-container-inner-error">
              No to-do's in the list.. it's lonely in here
            </div>
          )}
        </div>

        <div className="todo-container-outer">
          {this.state.deletedToDos.length > 0 ? (
            <div>{completedTickets}</div>
          ) : (
            <div className="todo-container-inner-error">
              No to-do's have yet been completed... get working :)
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
