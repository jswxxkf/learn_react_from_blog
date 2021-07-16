import useLocalStorage from "../useLocalStorage";

export default function CustomDataStoreHook() {
  const [data, setData] = useLocalStorage("name");
  return (
    <div>
      <h2>CustomDataStoreHook: {data}</h2>
      <button onClick={e => setData("xkf")}>设置name为xkf</button>
      <button onClick={e => setData("ld")}>设置name为ld</button>
    </div>
  )
};