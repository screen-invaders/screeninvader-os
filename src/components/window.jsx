import React from 'react';
import Draggable, {DraggableCore} from 'react-draggable';

import { Resizable, ResizableBox } from 'react-resizable';

import WindowExplorer from './window-explorer.jsx';
import WindowSearch from './window-search.jsx';
import WindowText from './window-text.jsx';

class Window extends React.Component{
  // Setting local position for the first time
  constructor(props){
    super(props);
    this.state = {
      currentX: this.props.itemData.viewPos.x,
      currentY: this.props.itemData.viewPos.y,
      currentSizeX: this.props.itemData.viewSize.x,
      currentSizeY: this.props.itemData.viewSize.y,
      currentIndex: this.props.itemData.viewIndex
    }
  }

  // Setting local position dynamically
  componentWillReceiveProps(nextProps){
    this.setState({
      currentX: nextProps.itemData.viewPos.x,
      currentY: nextProps.itemData.viewPos.y,
      currentSizeX: nextProps.itemData.viewSize.x,
      currentSizeY: nextProps.itemData.viewSize.y,
      currentIndex: nextProps.itemData.viewIndex
    });
  }

  // Handle dragging locally (to prevent excessive statechanges)
  dragStart(e, draggableEvent){
    this.setState((prevState)=>{
      prevState.currentX = prevState.currentX + draggableEvent.position.deltaX;
      prevState.currentY = prevState.currentY + draggableEvent.position.deltaY;
      return prevState
    });
  }

  resizeStart(e, resizeableEvent){
    this.setState((prevState)=>{
      prevState.currentSizeX = resizeableEvent.size.width;
      prevState.currentSizeY = resizeableEvent.size.height;
      return prevState;
    });
  }

  render() {
    let stylePosition = {
      left: this.state.currentX + 'px', 
      top: this.state.currentY + 'px', 
      zIndex: this.state.currentIndex
    };
    let styleResize = {
      width: this.state.currentSizeX + 'px', 
      height: this.state.currentSizeY + 'px'
    };

    let actions = {
      tofront: {
        type: "window__tofront",
        window: this.props.itemData
      },
      close: {
        type: "window__close",
        window: this.props.itemData
      },
      resize: {
        type: "window__resize",
        window: this.props.itemData,
        size: {
          x: this.state.currentSizeX,
          y: this.state.currentSizeY
        }
      },
      move: {
        type: "window__move",
        window: this.props.itemData,
        position: {
          x: this.state.currentX,
          y: this.state.currentY
        }
      }
    }

    let dispatch = this.props.dispatch;

    return (
      <div className="window" style={stylePosition} onClick={dispatch.bind(null, actions.tofront)}>
        <Resizable 
          width={this.state.currentSizeX} 
          height={this.state.currentSizeY}
          minConstraints={[200, 200]} 
          maxConstraints={[1000, 600]}
          onResize={this.resizeStart.bind(this)}
          onResizeStop={dispatch.bind(null, actions.resize)}
          >
          <div style={styleResize}>
            <div className="window__inner">
              <DraggableCore 
              onDrag={this.dragStart.bind(this)}
              onStop={dispatch.bind(null, actions.move)}>
                <header className="window__header">
                  <p className="window__header-text">{this.props.itemData.type}</p>
                  <div className="window__close-button" onClick={dispatch.bind(null, actions.close)}>x</div>
                </header>
              </DraggableCore>
              <main className="window__body">
              {(()=>{
              switch (this.props.itemData.type){
                case "Verkenner": return <WindowExplorer itemData={this.props.itemData} folderHandler={this.props.folderHandler}/> ;
                case "Zoeken": return <WindowSearch filesystem={this.props.filesystem} itemData={this.props.itemData} folderHandler={this.props.folderHandler}/>;
                case "Tekstbestand": return <WindowText filesystem={this.props.filesystem} itemData={this.props.itemData} folderHandler={this.props.folderHandler}/>;
              }
              })()}
              </main>
            </div>
          </div>
        </Resizable>
      </div>
    )
  }
}

export default Window;