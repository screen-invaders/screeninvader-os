import React from 'react';
import { connect } from 'react-redux'

import ListedItem from '../../items/listed-item.jsx';
import Item from '../../items/item.jsx';

class Body extends React.Component{
  getItems(dir, path){
    // recursively get items from the filesystem
    let newPath = [...path];
    if (newPath.length != 0) {
      let current = newPath.shift();
      return this.getItems(dir.children[current], newPath);
    } else {
      return dir.children;
    }
  }

  render() {
    let { windowData, filesystem, dispatch } = this.props;
    return (
      <div className="window__body">
      {(()=>{
        let items = this.getItems(filesystem, windowData.data.path);
        if (items){
          var templatedItems = [];
          for (var item in items) {
            if (items.hasOwnProperty(item)) {
              if (windowData.data.viewType == "list"){
              templatedItems.push(<ListedItem key={item} windowData={windowData} itemData={items[item]} dispatch={dispatch}/>);
              } else {
              templatedItems.push(<Item key={item} windowData={windowData} itemData={items[item]} dispatch={dispatch}/>);
              }
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

export default connect(state => ({filesystem: state.filesystem}),null ,null ,{pure: false})(Body);