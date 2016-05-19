import React from 'react';
import { connect } from 'react-redux'

import Menu from './menu.jsx';
import Desktop from './desktop.jsx';
import Login from './login.jsx';
import Admin from './admin.jsx';

class App extends React.Component{
  render() {
    let {state, dispatch} = this.props;
		return (
			<div className="layout__OS">
        {(()=>{
        switch (state.view.overlay.type){
          case "admin": 
            return <Admin dispatch={dispatch} />;
          case "login": 
            return <Login state={state} dispatch={dispatch} />;
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