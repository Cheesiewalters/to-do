import React from "react";

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
      todos: [
        ...this.state.todos,
        this.state.input,
        // this.state.todos.markedAsComplete,
      ],
    });
  }

  buttonToComplete(td) {
    let filteredArray = this.state.todos.filter((item) => item !== td);
    this.setState({ todos: filteredArray });
  }

  render() {
    const todos = this.state.todos.map((td) => {
      return (
        <ul>
          <li>
            {td}
            <button
              className="mark-complete-button"
              onClick={() => this.buttonToComplete(td)}
            >
              Mark as Complete
            </button>
          </li>
        </ul>
      );
    });
    return (
      <div className="body-container">
        <div className="input-container">
          <input
            style={inputStyle}
            value={this.state.input}
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
