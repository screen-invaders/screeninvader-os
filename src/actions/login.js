export function login__attempt(){
  return {
    type: "login__attempt"
  }
};

export function login__enterName(e){
  return {
    type: "login__enterName",
    password: e.target.value
  }
};

export function login__logout(e){
  return {
    type: "login__logout"
  }
};