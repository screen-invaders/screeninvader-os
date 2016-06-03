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