import React from 'react';

class Login extends React.Component{
  render() {
		return (
      <div className="layout__overlay">
  			<div className="login">
          <form className="login__details" onSubmit={this.props.loginHandler}>
            <input className="login__username" type="text" defaultValue="Jan Janssen"></input>
            <input className="login__password" type="text"></input>
            <input className="login__submit" value="Login"  type="submit"></input>
          </form>
        </div>
      </div>
    )
	}
}

export default Login;