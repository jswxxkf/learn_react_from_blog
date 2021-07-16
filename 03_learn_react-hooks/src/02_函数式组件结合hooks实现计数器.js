import React, {useState} from "react";

export default function Counter02() {
  // hook的调用位置只能位于函数最外部
  // 不要尝试在子函数、循环、条件判断语句中使用钩子
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>当前计数：{count}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
      <button onClick={e => setCount(count - 1)}>-1</button>
    </div>
  );
};
