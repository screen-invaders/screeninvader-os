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
            return <Admin view={this.state.view} dispatch={this.dispatch.bind(this)} />;
          case "login": 
            return <Login view={this.state.view} dispatch={this.dispatch.bind(this)} />;
        }
        })()}
        <div className="layout__desktop">
          <header className="layout__desktop-header">
            <Menu searchQuery={this.state.view.searchQuery} dispatch={this.dispatch.bind(this)}/>
          </header>
          <div className="layout__desktop-main">
            <Desktop windows={this.state.view.windows} filesystem={this.state.filesystem}dispatch={this.dispatch.bind(this)}/>
          </div>
        </div>
			</div>
		)
	}
}

export default App;