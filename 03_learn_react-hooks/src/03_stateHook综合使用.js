import React, {useState} from "react";

export default function Home() {
  const [age, setAge] = useState(0);
  const [names, setNames] = useState(["abc", "cba"]);
  const [info, setInfo] = useState({name: "xkf", age: 24})

  function addFriend() {
    let names_ = [...names, "shihuaiyu"];
    console.log(names_)
    setNames(names_)
  }

  return (
    <div>
      <h2>当前年龄：{age}</h2>
      <button onClick={e => setAge(age + 1)}>age+1</button>
      <h2>朋友列表</h2>
      <ul>
        {
          names.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
      <button onClick={e => setNames([...names, "lidan"])}>添加好友</button>
      {/*{第二种方案}*/}
      {/*<button onClick={addFriend}>添加好友</button>*/}
      <h2>我的信息：</h2>
      <div>我的名字：{info.name}</div>
      <button onClick={e => setInfo({...info, name: "shihuaiyu"})}>修改名字</button>
    </div>
  );
};