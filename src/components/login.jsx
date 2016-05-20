import React from 'react';

import { overlay__change2none } from '../actions/overlay.js';

import imgLogo from '../assets/images/belasting-logo.png'

class Login extends React.Component{
  render() {
		return (
      <div className="layout__overlay">
  			<div className="login">
          <form className="login__details" onSubmit={(e)=>{
            e.preventDefault();
            this.props.dispatch(overlay__change2none());
          }}>
            <img className="login__logo" src={imgLogo} />
            {(()=>{
              if (this.props.state.login.attempts < 2){
                return (
                <div className="login__error">
                  <p>Verkeerd Wachtwoord! Nog {this.props.state.login.attempts + 1} pogingen</p>
                  <p>klik voor meer info</p>
                </div> )
              }
            })()}
            <div className="login__group">
              <label className="login__label">Gebruikersnaam</label>
              <input className="login__username" type="text" defaultValue={this.props.state.user.name}></input>
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