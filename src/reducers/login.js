// Needs dispatcher
export default function login(state, action) {
  switch (action.type) {
    case "login__attempt":
      return {...state, ...{
          attempts: state.login.attempts - 1
        }
      };
    default:
      return state;
  }
}