import React from 'react';
import { connect } from 'react-redux'

import ListedFolder from '../../items/listed-folder.jsx';

class Body extends React.Component{
  getItems(){
    let { windowData, filesystem } = this.props;
    console.log(filesystem)
    console.log(filesystem.children[windowData.data.path])

  }

  render() {
    this.getItems();
    return (
      <div className="window__body">
      {(()=>{
        if (this.props.windowData.data.items){
          var items = this.props.windowData.data.items;
          var templatedItems = [];
          for (var item in items) {
            if (items.hasOwnProperty(item)) {
              templatedItems.push(<ListedFolder key={item} itemData={items[item]} dispatch={this.props.dispatch}/>);
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