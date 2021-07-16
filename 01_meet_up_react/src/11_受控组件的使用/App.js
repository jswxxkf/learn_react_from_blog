import React, {createRef, PureComponent} from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.usernameRef = createRef();
  }

  render() {
    return (
      <div>
        <form onSubmit={e=>this.handleSubmit(e)}>
          <label htmlFor="">
            用户：
            <input type="text" name="username"
                   ref={this.usernameRef} defaultValue="username"/>
          </label>
          <input type="submit" value="提交"/>
        </form>
      </div>
    );
  }

  handleSubmit(e) {
    console.log(this.usernameRef.current.value)
    e.preventDefault()
  }

}