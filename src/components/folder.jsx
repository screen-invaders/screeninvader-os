import React from 'react';
import imgLogo from '../assets/images/SI_folder.svg'

class Folder extends React.Component{
  render() {
		return (
			<img className="folder" src={imgLogo}></img>
		)
	}
}

export default Folder;