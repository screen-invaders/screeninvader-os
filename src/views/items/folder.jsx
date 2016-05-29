import React from 'react';

import { window__open, window__moveDown } from '../../actions/window.js';

import imgFolder from '../../assets/images/icons/row-11/3.png'
import imgFile from '../../assets/images/file.png'

class Folder extends React.Component{
  openFolder(){
    let {dispatch, itemData, windowData} = this.props;
    if (!windowData){windowData = {type: "desktop"};}
    if (windowData.type == "Verkenner"){
      dispatch(window__moveDown(windowData, itemData.path))
    } else {
      dispatch(window__open(itemData.type, itemData))
    }
  }
  render() {
		return (
      <div className="folder" onDoubleClick={this.openFolder.bind(this)}>
			  <img className="folder__image" draggable="false" src={(()=>{
          switch (this.props.itemData.type){
            case "txt": 
              return imgFile;
            case "dir": 
              return imgFolder;
          }
        })()}></img>
        <p className="folder__text">{this.props.itemData.name}</p>
      </div>
    )
	}
}

export default Folder;