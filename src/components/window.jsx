import React from 'react';
import Draggable, {DraggableCore} from 'react-draggable';

import { Resizable, ResizableBox } from 'react-resizable';

import WindowExplorer from './window-explorer.jsx';
import WindowSearch from './window-search.jsx';

class Window extends React.Component{
  // Setting local position for the first time
  constructor(props){
    super(props);
    this.state = {
      currentX: this.props.itemData.viewPos.x,
      currentY: this.props.itemData.viewPos.y
    }
  }

  // Setting local position dynamically
  componentWillReceiveProps(nextProps){
    this.setState({
      currentX: nextProps.itemData.viewPos.x,
      currentY: nextProps.itemData.viewPos.y
    });
  }

  // Handle dragging locally (to prevent excessive statechanges)
  dragStart(e, draggableEvent){
    this.setState((prevState)=>{ 
      return {
        currentX: prevState.currentX + draggableEvent.position.deltaX,
        currentY: prevState.currentY + draggableEvent.position.deltaY
      }
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
                <p className="window__header-text">{this.props.itemData.type} {this.props.itemData.searchQuery} </p>
                <div className="window__close-button" onClick={this.props.windowHandler.bind(null, "close", this.props.itemData, {})}>x</div>
              </header>
            </DraggableCore>
            <main className="window__body">
            {(()=>{
            switch (this.props.itemData.type){
              case "Verkenner": return <WindowExplorer itemData={this.props.itemData} folderHandler={this.props.folderHandler}/> ;
              case "Zoeken": return <WindowSearch filesystem={this.props.filesystem} itemData={this.props.itemData} folderHandler={this.props.folderHandler}/>;
            }
            })()}
            </main>
          </div>
        </ResizableBox>
      </div>
    )
  }
}

export default Window;