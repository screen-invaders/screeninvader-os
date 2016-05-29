import React from 'react';

import { window__open, window__moveDown } from '../../actions/window.js';

import imgFolder from '../../assets/images/icons/row-11/3.png'
import imgFile from '../../assets/images/icons/row-11/6.png'

class ListedItem extends React.Component{
  openItem(){
    let {dispatch, itemData, windowData} = this.props;
    if (windowData.type == "Verkenner" && itemData.type == "dir"){
      dispatch(window__moveDown(windowData, itemData.path))
    } else {
      dispatch(window__open(itemData.type, itemData))
    }
  }

  render() {
		return (
      <div className="listed-item" onDoubleClick={this.openItem.bind(this)}>
			  <img className="listed-item__image" draggable="false" src={(()=>{
          switch (this.props.itemData.type){
            case "dir": 
              return imgFolder;
            case "txt": 
              return imgFile;
          }
        })()}></img>
        <div className="listed-item__name">
          <p>{this.props.itemData.name}</p>
        </div>
        <p className="listed-item__date">25-01-1998</p>
      </div>
    )
	}
}

export default ListedItem;