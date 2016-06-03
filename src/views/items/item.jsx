import React from 'react';

import { explorer__moveDown } from '../../actions/windows/explorer.js';
import { window__open } from '../../actions/windows/window.js';

import imgFolder from '../../assets/images/icons/row-11/3.png'
import imgTXT from '../../assets/images/icons/row-10/12.png'
import imgPDF from '../../assets/images/icons/row-11/6.png'

class Item extends React.Component{
  openItem(){
    let {dispatch, itemData, windowData} = this.props;
    if (!windowData){windowData = {type: "desktop"};}
    if (windowData.type == "dir" && itemData.type == "dir"){
      dispatch(explorer__moveDown(windowData, itemData.path))
    } else {
      dispatch(window__open(itemData.type, itemData))
    }
  }
  render() {
		return (
      <div className="item" onDoubleClick={this.openItem.bind(this)}>
			  <img className="item__image" draggable="false" src={(()=>{
          switch (this.props.itemData.type){
            case "dir": 
              return imgFolder;
            case "txt": 
              return imgTXT;
            case "pdf": 
              return imgPDF;
          }
        })()}></img>
        <p className="item__text">{this.props.itemData.name}</p>
      </div>
    )
	}
}

export default Item;