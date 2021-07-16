let readerWrapper = document.body;

let requestMethod =
  readerWrapper.webkitRequestFullScreen || //FireFox
  readerWrapper.requestFullScreen || //W3C
  readerWrapper.mozRequestFullScreen; //Chrome等
let cancelMethod =
  document.webkitExitFullscreen || //FireFox
  document.exitFullscreen || //W3C
  document.mozRequestFullScreen; //Chrome等

const buttonEl = document.querySelector(".toggle");
const rightEl = document.querySelector(".remaining");
let isFullScreen = false;

buttonEl.addEventListener("click", () => {
  console.log(readerWrapper);
  if (!isFullScreen) {
    requestMethod.call(readerWrapper);
    rightEl.style.display = "none";
    buttonEl.innerHTML = "退出全屏";
  } else {
    cancelMethod.call(document);
    rightEl.style.display = "block";
    buttonEl.innerHTML = "进入全屏";
  }
  isFullScreen = !isFullScreen;
});
