import React, {PureComponent} from "react";
// style
import styled from "styled-components";
import "antd/dist/antd.css"
// sub cpn
import CommentInput from "./CommentInput";
import CommentItem from "./CommentItem";

const AppStyleWrapper = styled.div`
  width: 500px;
  padding: 20px;
`

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      commentList: []
    }
  }

  render() {
    return (
      <AppStyleWrapper>
        {
          this.state.commentList.map((item, index) => {
            return (
              <CommentItem
                key={item.id}
                comment={item}
                index={index}
                removeItem={e => this.removeItem(index)}
              />
            )
          })
        }
        <CommentInput submitComment={this.submitComment.bind(this)}/>
      </AppStyleWrapper>
    );
  }

  // 暴露给子组件调用的methods
  submitComment(comment) {
    this.setState({
      commentList: [...this.state.commentList, comment]
    })
  }

  removeItem(index) {
    const newCommentList = [...this.state.commentList];
    newCommentList.splice(index, 1);
    this.setState({
      commentList: newCommentList
    })
  }
};