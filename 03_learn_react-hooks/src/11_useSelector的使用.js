import {useSelector, shallowEqual} from "react-redux";

function Profile(props) {
  // 默认比较是强等，只有返回的对象更新前后两者完全相等，才不会触发rerender
  // 将useSelector第二个参数equalityFn置为shallowEqual，即可变为浅相等
  // 其中的counter值的变化并不会引起浅相等比较的不同
  // 只有返回一个新对象时，才会触发浅相等比较的不同判定
  const {banners, recommends, counter} = useSelector(state => ({
    banners: state.homeInfo.banners,
    recommends: state.homeInfo.recommends
  }), shallowEqual)
  console.log("Profile重新渲染");
  return (
    <div>
      <h2>数字:{counter}</h2>
      <h2>Banners</h2>
      <ul>
        {
          banners.map((item, index) => {
            return <li key={item.acm}>{item.title}</li>
          })
        }
      </ul>
      <h2>Recommends</h2>
      <ul>
        {
          recommends.map((item, index) => {
            return <li key={item.acm}>{item.title}</li>
          })
        }
      </ul>
    </div>
  );
}