import React from 'react';
import { connect } from 'react-redux'

import Menu from './desktop/menu.jsx';
import Desktop from './desktop/desktop.jsx';
import Login from './overlays/login.jsx';
import Admin from './overlays/admin.jsx';
import Shutdown from './overlays/shutdown.jsx';
import Off from './overlays/off.jsx';

class App extends React.Component{
  render() {
    let {state, dispatch} = this.props;
		return (
			<div className="layout__OS">
        {(()=>{
        switch (state.overlay.type){
          case "admin": 
            return <Admin dispatch={dispatch} />;
          case "login": 
            return <Login state={state} dispatch={dispatch} />;
          case "shutdown": 
            return <Shutdown state={state} dispatch={dispatch} />;
          case "off": 
            return <Off state={state} dispatch={dispatch} />;
        }
        })()}
        <div className="layout__desktop">
          <header className="layout__desktop-header">
            <Menu state={state} dispatch={dispatch}/>
          </header>
          <div className="layout__desktop-main">
            <Desktop state={state} dispatch={dispatch}/>
          </div>
        </div>
			</div>
		)
	}
}

export default connect(state => ({state: state}))(App);