export default function login(state, action) {
  switch (action.type) {
    case "login__attempt":
      if (state.user.password == state.login.password){
        return {...state.login, ...{
            attempts: 0
          }
        };
      } else {
        return {...state.login, ...{
            attempts: state.login.attempts - 1
          }
        };
      }
    case "login__enterName":
      return {...state.login, ...{
          password: action.password
        }
      };
    default:
      return {...state.login};
  }
}