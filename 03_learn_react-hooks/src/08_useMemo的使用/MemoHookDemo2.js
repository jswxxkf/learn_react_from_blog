import React, {useState, useMemo, memo} from 'react';

function calcNum(count) {
  let total = 0;
  for (let i = 0; i < count; i++) {
    total += i;
  }
  console.log("计算一遍");
  return total
}

const ShowCounter = memo(props => {
  console.log("ShowCounter重新渲染")
  const {total} = props
  return <h1>总数: {total}</h1>
})

const ShowInfo = memo(props => {
  console.log("ShowInfo重新渲染")
  const {info} = props
  return <h1>信息：{info.name}</h1>
})

export default function MemoHookDemo2() {
  const [count, setCount] = useState(10);
  const [isLogin, setIsLogin] = useState(true);
  const total = useMemo(() => {
    return calcNum(count);
  }, [count]);
  const info = useMemo(() => {
    return {name: "xkf"}
  }, []);
  return (
    <div>
      <h2>数字和: {total}</h2>
      <ShowCounter total={total}/>
      <ShowInfo info={info}/>
      <button onClick={e => setCount(count + 1)}>+1</button>
      {isLogin && <h2>Kaifeng Xue</h2>}
      <button onClick={e => setIsLogin(!isLogin)}>切换</button>
    </div>
  )
};