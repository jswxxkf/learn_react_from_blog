import {useEffect} from "react";

export default function useLoggingLife(cpnName) {
  useEffect(() => {
    console.log(`${cpnName}组件被创建了`);
    return () => {
      console.log(`${cpnName}组件被销毁了`);
    };
  },[]);
}