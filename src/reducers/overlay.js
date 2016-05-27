export default function overlay(state, action) {
  switch (action.type) {
    case "overlay__change2login":
      return {...state.overlay, ...{
        type: "login"
      }};
    case "overlay__change2none":
      if (state.login.attempts == 0){
        return {...state.overlay, ...{
          type: ""
        }};
      } else {
        return {...state.overlay}
      }
    default:
      return {...state.overlay};
  }
}