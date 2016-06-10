import React from 'react';

import { explorer__moveDown } from '../../actions/windows/explorer.js';
import { window__open } from '../../actions/windows/window.js';

import imgFolder from '../../assets/images/folder.svg'
import imgTXT from '../../assets/images/icons/row-10/12.png'
import imgPDF from '../../assets/images/icons/row-11/6.png'

class ListedItem extends React.Component{
  openItem(){
    let {dispatch, itemData, windowData} = this.props;
    if (windowData.type == "dir" && itemData.type == "dir"){
      dispatch(explorer__moveDown(windowData, itemData.path))
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
              return imgTXT;
            case "pdf": 
              return imgPDF;
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