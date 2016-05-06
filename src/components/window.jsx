import React from 'react';
import Draggable, {DraggableCore} from 'react-draggable';

import imgLogo from '../assets/images/SI_folder.svg';

class Window extends React.Component{
  render() {
		return (
      <Draggable>
  			<div draggable="false" className="window">
          <header className="window__header">

          </header>
          <main className="window__body">

          </main>
          <footer className="window__footer">

          </footer>
        </div>
		  </Draggable>
    )
	}
}

export default Window;