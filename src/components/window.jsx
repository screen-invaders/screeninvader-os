import React from 'react';
import Draggable, {DraggableCore} from 'react-draggable';

import { Resizable, ResizableBox } from 'react-resizable';

import FolderDraggable from './folder-draggable.jsx';

class Window extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentX: this.props.itemData.viewPos.x,
      currentY: this.props.itemData.viewPos.y
    }
  }

  dragStart(e, draggableEvent){
    this.setState((prevState)=>{ 
      return {
        currentX: prevState.currentX + draggableEvent.position.deltaX,
        currentY: prevState.currentY + draggableEvent.position.deltaY
      }
    });
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      currentX: nextProps.itemData.viewPos.x,
      currentY: nextProps.itemData.viewPos.y
    });
  }

  render() {
    var style = {
      left: this.state.currentX + "px", 
      top: this.state.currentY + "px", 
      zIndex: this.props.itemData.viewIndex
    };
    return (
      <div className="window" style={style} onClick={this.props.windowHandler.bind(null, "tofront", this.props.itemData, {})}>
        <ResizableBox 
          width={600} 
          height={400}
          minConstraints={[200, 200]} 
          maxConstraints={[1000, 600]}
          >
          <div className="window__inner">
            <DraggableCore 
            onDrag={this.dragStart.bind(this)}
            onStop={this.props.windowHandler.bind(null, "move", this.props.itemData, {x: this.state.currentX, y: this.state.currentY})}>
              <header className="window__header">
                <div className="window__close-button" onClick={this.props.windowHandler.bind(null, "close", this.props.itemData, {})}>x</div>
              </header>
            </DraggableCore>
            <main className="window__body">
              { (()=>{
                if (this.props.itemData.type == "explorer" && this.props.itemData.folder.contents){
                  var folders = this.props.itemData.folder.contents.map((item, key)=>{
                    return <FolderDraggable key={key} itemData={item} folderHandler={this.props.folderHandler}/> 
                  })  
                }
                return folders;
              })() }
            </main>
          </div>
        </ResizableBox>
      </div>
    )
  }
}

export default Window;