import React from 'react';

import { window__open, window__updatePath } from '../../actions/window.js';

import imgFolder from '../../assets/images/icons/row-11/3.png'
import imgFile from '../../assets/images/file.png'

class ListedFolder extends React.Component{
  openFolder(){
    let {dispatch, itemData, windowData} = this.props;
    if (windowData.type == "Verkenner"){
      dispatch(window__updatePath(windowData, itemData.path))
    } else {
      dispatch(window__open(itemData.type, itemData))
    }
  }

  render() {
		return (
      <div className="listed-folder" onDoubleClick={this.openFolder.bind(this)}>
			  <img className="listed-folder__image" draggable="false" src={(()=>{
          switch (this.props.itemData.type){
            case "txt": 
              return imgFile;
            case "dir": 
              return imgFolder;
          }
        })()}></img>
        <div className="listed-folder__name">
          <p>{this.props.itemData.name}</p>
        </div>
        <p className="listed-folder__date">25-01-1998</p>
      </div>
    )
	}
}

export default ListedFolder;