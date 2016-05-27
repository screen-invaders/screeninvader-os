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

  get_browser(){
    var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []; 
    if(/trident/i.test(M[1])){
      tem=/\brv[ :]+(\d+)/g.exec(ua) || []; 
      return {name:'IE',version:(tem[1]||'')};
      }   
    if(M[1]==='Chrome'){
      tem=ua.match(/\bOPR\/(\d+)/)
      if(tem!=null)   {return {name:'Opera', version:tem[1]};}
      }   
    M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
    return {
      name: M[0],
      version: M[1]
    };
  }

  render() {
		return (
      <div className="layout__overlay">
  			<div className="admin">
          <div className="admin__content">
            <img className="admin__logo" src={imgLogo} />
            {(()=>{
            if ((this.get_browser()).name != "Chrome"){
              console.log("pass")
              return <div className="admin__browser-error">Deze app werkt alleen op <a className="admin__browser-error-link" href="https://www.google.com/intl/en/chrome/browser/desktop/index.html">Chrome</a></div>
            }})()} 
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