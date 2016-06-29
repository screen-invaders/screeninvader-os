export function overlay__change(target){
  return {
    type: "overlay__change",
    target: target
  }
};

export function overlay__changeFromLogin(target){
  return {
    type: "overlay__changeFromLogin",
    target: target
  }
};

export function overlay__fullscreen(target){
  let element = document.documentElement;
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
  return {
    type: "overlay__fullscreen"
  }
};