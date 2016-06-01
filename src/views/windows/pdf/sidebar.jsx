import React from 'react';
import Draggable, {DraggableCore} from 'react-draggable';

import iconDesktop from '../../../assets/images/icons/row-12/9.png'
import iconDocumenten from '../../../assets/images/icons/row-11/12.png'
import iconAfbeeldingen from '../../../assets/images/icons/row-13/12.png'
import iconSpreadsheets from '../../../assets/images/icons/row-12/14.png'
import iconDatabases from '../../../assets/images/icons/row-9/11.png'
import iconBeveiligd from '../../../assets/images/icons/row-3/4.png'

class Sidebar extends React.Component{
  render() {
    let {windowData, dispatch} = this.props;
    return (
      <div className="pdf__sidebar">
        {(()=>{
        if (windowData.data.content == undefined){
          return <div>
          </div>
        } else {
          return "no PDF";
        }
        })()}
      </div>
    )
  }
}

export default Sidebar;