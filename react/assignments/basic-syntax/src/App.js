import React, { Component } from "react";
import "./App.css";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    usernames: [{ name: "Jack" }, { name: "Jessica" }, { name: "Boris" }],
    showUsers: false
  };

  switchNameHandler = newName => {
    this.setState({
      usernames: [
        { name: newName },
        { name: "Jessica Mendoza" },
        { name: "Boris Johnson" }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      usernames: [
        { name: event.target.value },
        { name: event.target.value },
        { name: event.target.value }
      ]
    });
  };

  toggleContentHandler = event => {
    const doesShow = this.state.showUsers;
    this.setState({showUsers: !doesShow}); // if does show is true it'll set showUsers to false
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          { this.state.showUsers === false ?
          <div>
          <button onClick={this.toggleContentHandler}>
            Display Content
          </button>
          </div> : 
          <div>
          <button onClick={this.toggleContentHandler}>
            Hide Content
          </button>
          </div>
          }
          { this.state.showUsers === true ?
          <div>
          <button onClick={() => this.switchNameHandler("Jack!!")}>
            Change names
          </button>
          <UserOutput
            name={this.state.usernames[0].name}
            changed={this.nameChangedHandler}
          />
          <UserOutput
            name={this.state.usernames[1].name}
            click={this.switchNameHandler.bind(this, "Jessica")}
            changed={this.nameChangedHandler}
          />
          <UserOutput
            name={this.state.usernames[2].name}
            changed={this.nameChangedHandler}
          />
          </div> : null
          }
        </header>
      </div>
    );
  }
}

export default App;
