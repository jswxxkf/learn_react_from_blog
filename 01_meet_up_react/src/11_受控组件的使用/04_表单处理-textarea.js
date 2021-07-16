import React, {PureComponent} from "react";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      article: "请编写你喜欢的文章："
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="article">
            <textarea id="article" cols="30" rows="10"
                      value={this.state.article}
                      onChange={e => this.handleArticleChange(e)}/>
          </label>
          <div>
            <input type="submit" value="发布文章"/>
          </div>
        </form>
      </div>
    );
  }

  handleArticleChange(event) {
    this.setState({
      article: event.target.value
    })
  }

  handleSubmit(event) {
    console.log(this.state.article)
    event.preventDefault()
  }
};