import React from 'react';
import Draggable, {DraggableCore} from 'react-draggable';
import PDF from './pdf-wrapper.jsx';

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
          <PDF file="filesystem/hgt.pdf" page={1} loading={(<span>Your own loading message ...</span>)}/>
          <PDF file="filesystem/hgt.pdf" page={2} loading={(<span>Your own loading message ...</span>)}/>
          <PDF file="filesystem/hgt.pdf" page={3} loading={(<span>Your own loading message ...</span>)}/>
          <PDF file="filesystem/hgt.pdf" page={4} loading={(<span>Your own loading message ...</span>)}/>
          <PDF file="filesystem/hgt.pdf" page={5} loading={(<span>Your own loading message ...</span>)}/>
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