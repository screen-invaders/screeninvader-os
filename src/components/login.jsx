import React from 'react';

import imgLogo from '../assets/images/belasting-logo.png'

class Login extends React.Component{
  render() {
		return (
      <div className="layout__overlay">
  			<div className="login">
          <form className="login__details" onSubmit={this.props.loginHandler}>
            <img className="login__logo" src={imgLogo} />
            
            {(()=>{
              if (this.props.view.overlay.attempts < 2){
                return (
                <div className="login__error">
                  <p>Verkeerd Wachtwoord! Nog {this.props.view.overlay.attempts + 1} pogingen</p>
                  <p>klik voor meer info</p>
                </div> )
              }
            })()}            
            
            <div className="login__group">
              <label className="login__label">Gebruikersnaam</label>
              <input className="login__username" type="text" defaultValue="IvMourik"></input>
            </div>
            <div className="login__group">
              <label className="login__label">Wachtwoord</label>
              <input className="login__password" placeholder="Wachtwoord" type="text"></input>
            </div>
            <input className="login__submit" value="Inloggen" type="submit"></input>
          </form>
        </div>
      </div>
    )
	}
}

export default Login;