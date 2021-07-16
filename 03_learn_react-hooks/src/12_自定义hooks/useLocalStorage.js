import {useEffect, useState} from "react";

export default function useLocalStorage(key) {
  const [data, setData] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key))
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(data));
  }, [data]);
  return [data, setData];
};