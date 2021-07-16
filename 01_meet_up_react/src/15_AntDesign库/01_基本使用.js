import React, {PureComponent} from "react";
import {Button, DatePicker} from "antd";
// less文件包含已经被craco配置(craco.config.js)中修改过的主题色
import "antd/dist/antd.less";

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <br/>
        <DatePicker
          allowClear={false}
          onChange={this.onChange}
          dateRender={current => {
            const style = {};
            if (current.date() === 1) {
              style.border = '1px solid red';
              style.borderRadius = '50%'
            }
            return (
              <div className="ant-picker-cell-inner" style={style}>
                {current.date()}
              </div>
            );
          }}>
        </DatePicker>
      </div>
    );
  }
};