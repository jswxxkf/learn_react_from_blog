import useScrollPosition from "../useScrollPosition";

export default function CustomScrollPositionHook() {
  const scrollPosition = useScrollPosition();
  return (
    <div style={{padding: "1000px 0"}}>
      <h2 style={{position: "fixed", top: 0, left: 0}}>CustomScrollPositionHook: {scrollPosition}</h2>
    </div>
  )
};