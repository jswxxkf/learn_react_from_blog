import axios from "axios";

import {
  ADD_NUMBER,
  SUB_NUMBER,
  CHANGE_BANNER,
  CHANGE_RECOMMEND
} from "./constants.js";

const addAction = (count) => {
  return {
    type: ADD_NUMBER,
    num: count
  }
};

const subAction = (count) => {
  return {
    type: SUB_NUMBER,
    num: count
  }
};

const changeBannersAction = (banners) => ({
  type: CHANGE_BANNER,
  banners
})

const changeRecommendsAction = (recommends) => ({
  type: CHANGE_RECOMMEND,
  recommends
})

// 定义返回函数的action，会在同步的dispatch之后被调用
// 调用时，相当于再去执行额外的dispatch(异步)
// 相当于通过异步操作如网络请求等来改变状态的操作也交由redux进行统一管理
const getHomeMultidataAction = () => {
  return (dispatch) => {
    axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
      const data = res.data.data;
      dispatch(changeBannersAction(data.banner.list))
      dispatch(changeRecommendsAction(data.recommend.list))
    });
  };
};

export {
  addAction,
  subAction,
  changeRecommendsAction,
  changeBannersAction,
  getHomeMultidataAction
}