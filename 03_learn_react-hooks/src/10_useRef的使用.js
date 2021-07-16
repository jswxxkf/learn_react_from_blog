import React, {useState, useEffect, useRef} from 'react';

let preValue = 0;

export default function RefHookDemo02() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  useEffect(() => {
    countRef.current = count;
  }, [count]);

  return (
    <div>
      <h2>前一次的值: {countRef.current}</h2>
      <h2>这一次的值: {count}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
    </div>
  )
}