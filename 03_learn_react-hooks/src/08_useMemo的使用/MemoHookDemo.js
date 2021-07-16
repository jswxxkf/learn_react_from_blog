import React, {useState, useMemo} from 'react';

function calcNum(count) {
  let total = 0
  for (let i = 0; i < count; i++) {
    total += i
  }
  console.log("计算一遍")
  return total
}

export default function MemoHookDemo() {
  const [count, setCount] = useState(10);
  const [isLogin, setIsLogin] = useState(true)
  // 对calcNum进行性能优化：只有依赖项count改变时，才会执行calcNum计算新总和
  const total = useMemo(() => {
    return calcNum(count);
  }, [count]);
  return (
    <div>
      <h2>数字和：{total}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
      {isLogin && <h2>Kaifeng Xue</h2>}
      <button onClick={e => setIsLogin(!isLogin)}>切换</button>
    </div>
  )
};
