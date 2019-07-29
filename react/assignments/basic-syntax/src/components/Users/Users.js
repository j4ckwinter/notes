import React from "react";
import UserOutput from './UserOutput/UserOutput'

const users = props =>
  props.usernames.map((username, index) => {
    return <UserOutput
        name={username.name}
        key={username.id}
        changed={event => props.changed(event, username.id)}
        click={event => props.clicked(index)}
      />
  });

  export default users;
