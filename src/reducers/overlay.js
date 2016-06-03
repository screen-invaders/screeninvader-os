export default function overlay(state, action) {
  switch (action.type) {
    case "overlay__change":
      return {...state.overlay, ...{
        type: action.target
      }};

    case "overlay__changeFromLogin":
      if (state.login.attempts == 0){
        return {...state.overlay, ...{
          type: action.target
        }};
      } else {
        return {...state.overlay}
      }

    default:
      return {...state.overlay};
  }
}