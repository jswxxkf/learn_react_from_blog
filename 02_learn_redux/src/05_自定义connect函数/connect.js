import React, {PureComponent} from "react";

import store from "../03_redux目录结构划分/index.js";

export default function connect(mapStateToProps, mapDispatchToProps) {
  // 返回高阶组件
  return function handleMapCpn(WrappedCpn) {
    return class extends PureComponent {
      constructor(props) {
        super(props);
        this.state = {
          storeState: mapStateToProps(store.getState())
        }
      }

      componentDidMount() {
        this.unSubscribe = store.subscribe(() => {
          this.setState({
            storeState: mapStateToProps(store.getState())
          })
        });
      }

      componentWillUnmount() {
        this.unSubscribe()
      }

      render() {
        return <WrappedCpn {...this.props}
                           {...mapStateToProps(store.getState())}
                           {...mapDispatchToProps(store.dispatch)}/>
      }
    };
  };
};