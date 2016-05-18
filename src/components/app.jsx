import React from 'react';

import initialState from '../models/initial-state.js';
import dispatch from '../actions/dispatch.js';

import Menu from './menu.jsx';
import Desktop from './desktop.jsx';
import Login from './login.jsx';
import Admin from './admin.jsx';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = initialState;
    this.dispatch = dispatch.bind(this);
  }

  render() {
		return (
			<div className="layout__OS">
        {(()=>{
        switch (this.state.view.overlay.type){
          case "admin": 
            return <Admin dispatch={this.dispatch} />;
          case "login": 
            return <Login state={this.state} dispatch={this.dispatch} />;
        }
        })()}
        <div className="layout__desktop">
          <header className="layout__desktop-header">
            <Menu state={this.state} dispatch={this.dispatch}/>
          </header>
          <div className="layout__desktop-main">
            <Desktop state={this.state} dispatch={this.dispatch}/>
          </div>
        </div>
			</div>
		)
	}
}

export default App;