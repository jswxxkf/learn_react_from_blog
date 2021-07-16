// React非常灵活，但它也有一个严格的规则：
// 所有React组件都必须像【纯函数】一样保护它们的props不被更改
// redux中的reducer也被要求必须是一个纯函数
function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      // action.info: 真正要增加的friend
      // 与state.friends拼接后覆盖前面state中的friends属性
      return {...state, friends: [...state.friends, action.info]}
    case "INC_AGE":
      return {
        ...state, friends: state.friends.map((item, index) => {
          if (index === action.index) {
            return {...item, age: item.age + 1}
          }
        })
      }
    case "CHANGE_NAME":
      return {
        ...state, friends: state.friends.map((item, index) => {
          if (index === action.index) {
            return {...item, name: action.newName}
          }
        })
      }
    default:
      return state
  }
}