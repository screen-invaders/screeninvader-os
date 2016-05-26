import React from 'react';

import { overlay__change2login } from '../../actions/overlay.js';

import imgLogo from '../../assets/images/si-logo.svg'

class Admin extends React.Component{
  fullScreen(){
    let element = document.documentElement;
    if(element.requestFullscreen) {
      element.requestFullscreen();
    } else if(element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if(element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if(element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  }
  render() {
		return (
      <div className="layout__overlay">
  			<div className="admin">
          <div className="admin__content">
            <img className="admin__logo" src={imgLogo} />
            <div className="admin__description">
              <h1 className="admin__header"> Welkom bij je screeninvader!</h1>
              <p>Dit intranet van de belastingdienst kan dit:</p>
              <ul className="admin__list">
                <li>Inloggen: na 2x fout inloggen, stuurt hij je de derde keer door</li>
                <li>Openen en slepen van mappen en vensters</li>
                <li>Weergeven van mappen en documenten</li>
                <li>Zoekfunctionaliteiten waarbij veel vensters opengaan (zoek zonder term voor alles)</li>
              </ul>
            </div>
            <div className="admin__button-container">
              <button className="admin__button" onClick={this.fullScreen}> Full Screen!</button>
              <button className="admin__button" onClick={this.props.dispatch.bind(null, overlay__change2login())}> Start invading!</button>
            </div>
          </div>
        </div>
      </div>
    )
	}
}

export default Admin;