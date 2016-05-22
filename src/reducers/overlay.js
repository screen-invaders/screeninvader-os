export default function overlay(state, action) {
  switch (action.type) {
    case "overlay__change2login":
      return {...state, ...{
        type: "login"
      }};
    case "overlay__change2none":
      return {...state, ...{
        type: ""
      }};
    default:
      return state;
  }
}