import React, {PureComponent} from "react";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    }
  }

  render() {
    const {username} = this.state;
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <label htmlFor="username">
            用户名：
            <input type="text"
                   id="username"
                   value={username}
                   onChange={event => this.handleUsernameChange(event)}/>
          </label>
        </form>
      </div>
    )
  }

  handleSubmit(event) {
    console.log(this.state.username)
    event.preventDefault();
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value
    })
  }
};