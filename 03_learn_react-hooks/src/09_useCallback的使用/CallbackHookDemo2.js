import React, {memo, useState, useCallback} from 'react';

const CounterIncrement = memo((props) => {
  console.log("CounterIncrement被渲染:", props.name);
  return <button onClick={props.increment}>+1</button>
})

export default function CallbackHookDemo2() {
  const [count, setCount] = useState(0);

  // useCallback将整个包裹的callback缓存起来(memoized)，
  // 并且，因为子组件被memo提升，对于increment1，每次传入的props.increment都相同，故CounterIncrement不会重新渲染
  // 而对于increment2，每次传入的props.increment都不同(重新定义的callback)，故CounterIncrement会重新渲染
  const increment1 = useCallback(function increment() {
    setCount(count + 1);
  }, []);

  const increment2 = function () {
    setCount(count + 1);
  }

  // console.log('---');

  return (
    <div>
      <h2>当前计数: {count}</h2>
      {/* <button onClick={increment1}>+1</button>
      <button onClick={increment2}>+1</button> */}
      <CounterIncrement increment={increment1} name="increment1"/>
      <CounterIncrement increment={increment2} name="increment2"/>
    </div>
  )
}
