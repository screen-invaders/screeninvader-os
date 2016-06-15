import React from 'react';

import { explorer__moveDown } from '../../actions/windows/explorer.js';
import { window__open } from '../../actions/windows/window.js';

import imgFolder from '../../assets/images/icons-aes/png/128x128/folder.png'
import imgFolderArchive from '../../assets/images/icons-aes/png/128x128/archive.png'
import imgFolderLocked from '../../assets/images/icons-aes/png/128x128/lock.png'
import imgTXT from '../../assets/images/icons-aes/png/128x128/note_edit.png'
import imgPDF from '../../assets/images/icons-aes/png/128x128/pdf.png'

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
    let {itemData} = this.props;
		return (
      <div className="listed-item" onDoubleClick={this.openItem.bind(this)}>
			  <img className="listed-item__image" draggable="false" src={(()=>{
          switch (itemData.type){
            case "dir": 
              if (itemData.locked) {
                return imgFolderLocked;
              }
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