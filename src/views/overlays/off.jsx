import React from 'react';

import { overlay__change, overlay__changeFromLogin } from '../../actions/overlay.js';
import { login__attempt, login__enterName } from '../../actions/login.js';

import imgLogo from '../../assets/images/belasting-logo.png'

class Login extends React.Component{
  render() {
    let {state, dispatch} = this.props;
		return (
      <div className="layout__overlay">
  			<div className="login">
          <form className="login__details" onSubmit={(e)=>{
            e.preventDefault();
            dispatch(login__attempt());
            dispatch(overlay__changeFromLogin(""));
          }}>
            <img className="login__logo" src={imgLogo} />
            {(()=>{
              if (state.login.attempts < 5){
                return (
                <div className="login__error">
                  <p>Verkeerd Wachtwoord! Nog {state.login.attempts} pogingen</p>
                  <p>klik voor meer info</p>
                </div> )
              }
            })()}
            <div className="login__group">
              <label className="login__label">Gebruikersnaam</label>
              <input className="login__username" type="text" defaultValue={state.user.name}></input>
            </div>
            <div className="login__group">
              <label className="login__label">Wachtwoord</label>
              <input className="login__password" placeholder="Wachtwoord" type="text" onChange={(e)=>{dispatch(login__enterName(e))}}></input>
            </div>
            <input className="login__submit" value="Inloggen" type="submit"></input>
          </form>
        </div>
      </div>
    )
	}
}

export default Login;