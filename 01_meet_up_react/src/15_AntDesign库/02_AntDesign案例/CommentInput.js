import React, {PureComponent} from "react";
import moment from 'moment';
import {Input, Button} from "antd";
import "antd/dist/antd.css";

export default class CommentInput extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }
  }

  render() {
    const {value} = this.state
    return (
      <div>
        <Input.TextArea
          rows={4}
          onChange={this.onChange.bind(this)}
          value={value}/>
        <Button
          onClick={this.onSubmit.bind(this)}
          type={'primary'}>
          添加评论
        </Button>
      </div>
    );
  }

  onChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  onSubmit() {
    // xxx, a few moments ago (距离现在的大概时间描述)
    // console.log(this.state.value, moment().fromNow());
    const commentInfo = {
      id: Date.now(),
      name: "xkf",
      avatar: "https://upload.jianshu.io/users/upload_avatars/1102036/c3628b478f06.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240",
      content: <p>{this.state.value}</p>,
      datetime: moment()
    }
    console.log(this)
    this.props.submitComment(commentInfo)
    this.setState({
      value: ""
    })
  }
};