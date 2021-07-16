import Immutable from "immutable"

const friends = [
  {name: "xkf", age: 25},
  {name: "lidan", age: 22}
]

const imjs = Immutable

// 不会进行深层转换
const imArr1 = imjs.List(friends);
// 会进行深层转换
const imArr2 = imjs.fromJS(friends);
// console.log(imArr1);
// console.log(imArr2);

const info = {
  name: "xkf",
  age: 24,
  friend: {
    name: "wgy",
    age: 23
  }
}

const imObj1 = imjs.Map(info);
const imObj2 = imjs.fromJS(info);
// console.log(imObj1);
// console.log(imObj2);

// 对immutable的操作
// 1. 添加数据，产生一个新的immutable对象
// console.log(imArr1.push('aaaa'));
// console.log(imArr1.set(2, 'bbbb'));
// 原来的是不变的
// console.log(imArr1)

// 2. 修改数据
// console.log(imArr1.set(1, 'aaa'));
// console.log(imArr1.set(2, imjs.fromJS('cccc')));
// 注意都不会修改原先的值
// console.log(imArr1)

// 3. 删除数据
// console.log(imArr1.delete(0).get(0));
// console.log(imArr1);

// 4. 查询数据
console.log(imArr1.get(1))
console.log(imArr2.get(1))
console.log(imArr1.get(1).name)
console.log(imArr2.getIn([1, 'name']));

// 5. 重新转回mutable的JS对象
console.log(imArr1.toJS());
console.log(imObj1.toJS());