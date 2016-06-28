import React from 'react';

import { explorer__moveDown } from '../../actions/windows/explorer.js';
import { window__open } from '../../actions/windows/window.js';

import imgFolder from '../../assets/images/icons-berries/folder_closed.png'
import imgFolderArchive from '../../assets/images/icons-berries/files_closed.png'
import imgFolderLocked from '../../assets/images/icons-berries/lock_closed_blue.png'
import imgTXT from '../../assets/images/icons-berries/note_write.png'
import imgPDF from '../../assets/images/icons-berries/note_search.png'
import imgSpreadsheet from '../../assets/images/icons-berries/calculator.png'

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
              if (itemData.dirType === "locked") {
                return imgFolderLocked;
              }
              if (itemData.dirType === "archive"){
                return imgFolderArchive;
              }
              return imgFolder;
            case "txt": 
              return imgTXT;
            case "pdf": 
              return imgPDF;
            case "csv":
              return imgSpreadsheet;
          }
        })()}></img>
        <div className="listed-item__name">
          <p>{itemData.name}</p>
        </div>
        <p className="listed-item__date">{itemData.date && (()=>{return (new Date(itemData.date)).toDateString()})()}</p>
      </div>
    )
	}
}

export default ListedItem;