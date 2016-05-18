import React from 'react';
import Draggable, {DraggableCore} from 'react-draggable';

import { Resizable, ResizableBox } from 'react-resizable';

import WindowExplorer from './window-explorer.jsx';
import WindowSearch from './window-search.jsx';
import WindowText from './window-text.jsx';

import actions from '../actions/window.js';

class Window extends React.Component{
  // Setting local position for the first time
  constructor(props){
    super(props);
    this.state = {
      position: {
        x: this.props.itemData.viewPos.x,
        y: this.props.itemData.viewPos.y
      },
      size: {
        x: this.props.itemData.viewSize.x,
        y: this.props.itemData.viewSize.y
      },
      index: this.props.itemData.viewIndex
    }
  }

  // Setting local position dynamically
  componentWillReceiveProps(nextProps){
    this.setState({
      position: {
        x: nextProps.itemData.viewPos.x,
        y: nextProps.itemData.viewPos.y
      },
      size: {
        x: nextProps.itemData.viewSize.x,
        y: nextProps.itemData.viewSize.y
      },
      index: nextProps.itemData.viewIndex
    });
  }

  // Handle dragging locally (to prevent excessive statechanges)
  dragStart(e, draggableEvent){
    this.setState((prevState)=>{
      prevState.position.x = prevState.position.x + draggableEvent.position.deltaX;
      prevState.position.y = prevState.position.y + draggableEvent.position.deltaY;
      return prevState
    });
  }

  resizeStart(e, resizeableEvent){
    this.setState((prevState)=>{
      prevState.size.x = resizeableEvent.size.width;
      prevState.size.y = resizeableEvent.size.height;
      return prevState;
    });
  }

  render() {
    let stylePosition = {
      left: this.state.position.x + 'px', 
      top: this.state.position.y + 'px', 
      zIndex: this.state.index
    };
    let styleSize = {
      width: this.state.size.x + 'px', 
      height: this.state.size.y+ 'px'
    };

    let dispatch = this.props.dispatch;
    let windowData = this.props.itemData;

    return (
      <div className="window" style={stylePosition} onClick={dispatch.bind(null, actions.window__tofront(windowData))}>
        <Resizable 
          width={this.state.size.x} 
          height={this.state.size.y}
          minConstraints={[200, 200]} 
          maxConstraints={[1000, 600]}
          onResize={this.resizeStart.bind(this)}
          onResizeStop={dispatch.bind(null, actions.window__resize(windowData, this.state.size))}
          >
          <div style={styleSize}>
            <div className="window__inner">
              <DraggableCore 
              onDrag={this.dragStart.bind(this)}
              onStop={dispatch.bind(null, actions.window__move(windowData, this.state.position))}>
                <header className="window__header">
                  <p className="window__header-text">{this.props.itemData.type}</p>
                  <div className="window__close-button" onClick={dispatch.bind(null, actions.window__close(windowData))}>x</div>
                </header>
              </DraggableCore>
              <main className="window__body">
              {(()=>{
              switch (this.props.itemData.type){
                case "Verkenner": return <WindowExplorer itemData={this.props.itemData} dispatch={dispatch}/> ;
                case "Zoeken": return <WindowSearch state={this.props.state} itemData={this.props.itemData} dispatch={dispatch}/>;
                case "Tekstbestand": return <WindowText itemData={this.props.itemData}/>;
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