import React from 'react';

import imgLogo from '../assets/images/si-logo.svg'

class Admin extends React.Component{
  fullScreen(e){
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
              <p>Deze screeninvader kan dit:</p>
              <ul className="admin__list">
                <li>Nep inlogsysteem</li>
                <li>Openen en slepen van mappen en vensters</li>
                <li>Weergeven van specifieke content</li>
                <li>Zoekfunctionaliteiten (zoek zonder term voor alles)</li>
              </ul>
            </div>
            <button className="admin__button" onClick={this.fullScreen}> Full Screen!</button>
            <button className="admin__button" onClick={this.props.adminHandler}> Start invading! </button>
          </div>
        </div>
      </div>
    )
	}
}

export default Admin;