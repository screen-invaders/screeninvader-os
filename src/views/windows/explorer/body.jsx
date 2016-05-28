import React from 'react';
import { connect } from 'react-redux'

import ListedFolder from '../../items/listed-folder.jsx';

class Body extends React.Component{
  getItems(dir, current){
    // recursively get items from the filesystem
    if (current.type == "dir") {
      return getItems(dir.children[current.path.name], path);
    } else {
      return current.items;
    }
  }

  render() {
    let { windowData, filesystem, dispatch } = this.props;
    return (
      <div className="window__body">
      {(()=>{
        let items = this.getItems(filesystem, windowData.data);
        if (items){
          var templatedItems = [];
          for (var item in items) {
            if (items.hasOwnProperty(item)) {
              templatedItems.push(<ListedFolder key={item} itemData={items[item]} dispatch={dispatch}/>);
            }
          }
          return templatedItems;
        } else {
          return "Geen inhoud";
        }
        })()}
      </div>
    )
  }
}

export default connect(state => ({filesystem: state.filesystem}))(Body);