import React, { Component } from "react";
import "./App.css";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    usernames: [
      { id: 1, name: "Jack" },
      { id: 2, name: "Jessica" },
      { id: 3, name: "Boris" }
    ],
    showUsers: false
  };

  toggleContentHandler = event => {
    const doesShow = this.state.showUsers;
    this.setState({ showUsers: !doesShow }); // if does show is true it'll set showUsers to false
  };

  deleteUserOutputHandler = usernameIndex => {
    // const usernames = this.state.usernames.slice();
    const usernames = [...this.state.usernames];
    usernames.splice(usernameIndex, 1);
    this.setState({ usernames: usernames });
  };

  changeNameHandler = (event, id) => {
    const usernameIndex = this.state.usernames.findIndex(user => {
      return user.id === id;
    });
    const usernameCopy = { ...this.state.usernames[usernameIndex] };
    usernameCopy.name = event.target.value;
    const usernamesCopy = [...this.state.usernames];
    usernamesCopy[usernameIndex] = usernameCopy;
    this.setState({ usernames: usernamesCopy });
  };

  render() {
    let users = null;
    let buttons = null;

    if (this.state.showUsers) {
      users = (
        <div>
          {this.state.usernames.map((username, index) => {
            return (
              <UserOutput
                name={username.name}
                key={username.id}
                changed={event => this.changeNameHandler(event, username.id)}
                click={event => this.deleteUserOutputHandler(index)}
              />
            );
          })}
        </div>
      );
      buttons = (
        <div>
          <button onClick={this.toggleContentHandler}>Hide Content</button>
        </div>
      );
    } else {
      buttons = (
        <div>
          <h1>Welcome to Jack's app</h1>
          <div>
          <button onClick={this.toggleContentHandler}>Display Content</button>
          </div>
        </div>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          {users}
          {buttons}
        </header>
      </div>
    );
  }
}

export default App;
