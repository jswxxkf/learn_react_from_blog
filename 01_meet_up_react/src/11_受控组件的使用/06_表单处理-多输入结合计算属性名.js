import React, {PureComponent} from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    }
  }

  render() {
    const {username, password} = this.state
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="username">
            <input type="text"
                   id="username" name="username"
                   value={username}
                   onChange={e => this.handleChange(e)}/>
          </label>
          <label htmlFor="password">
            <input type="password"
                   id="password" name="password"
                   value={password}
                   onChange={e => this.handleChange(e)}/>
          </label>
          <input type="submit" value="提交"/>
        </form>
      </div>
    );
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    console.log(this.state.username, this.state.password);
    event.preventDefault();
  }
}