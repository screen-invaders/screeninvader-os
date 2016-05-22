export default function login(state, action) {
  switch (action.type) {
    case "login__attempt":
      return {...state, ...{
          attempts: state.attempts - 1
        }
      };
    default:
      return state;
  }
}