import React from 'react';
import Draggable, {DraggableCore} from 'react-draggable';

import { Resizable, ResizableBox } from 'react-resizable';

import WindowExplorer from './window-explorer.jsx';
import WindowSearch from './window-search.jsx';
import WindowText from './window-text.jsx';

import { window__tofront, window__close, window__resize, window__move } from '../actions/window.js';

class Window extends React.Component{
  // Setting local state (to prevent excessive rendering)
  constructor(props){
    super(props);
    this.state = this.localStateModel(this.props);
  }

  componentWillReceiveProps(nextProps){
    this.setState(this.localStateModel(nextProps));
  }

  localStateModel(props){
    return {
      position: {
        x: props.windowData.viewPos.x,
        y: props.windowData.viewPos.y
      },
      size: {
        x: props.windowData.viewSize.x,
        y: props.windowData.viewSize.y
      },
      index: props.windowData.viewIndex
    };
  }

  // Handle dragging locally (to prevent excessive rendering)
  onDrag(e, draggableEvent){
    this.setState((prevState)=>{
      prevState.position.x = prevState.position.x + draggableEvent.position.deltaX;
      prevState.position.y = prevState.position.y + draggableEvent.position.deltaY;
      return prevState
    });
  }

  onResize(e, resizeableEvent){
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
      height: this.state.size.y + 'px'
    };

    let dispatch = this.props.dispatch;
    let windowData = this.props.windowData;

    return (
      <div className="window" style={stylePosition} onClick={dispatch.bind(null, window__tofront(windowData))}>
        <Resizable 
          width={this.state.size.x} 
          height={this.state.size.y}
          minConstraints={[200, 200]} 
          maxConstraints={[1000, 600]}
          onResize={this.onResize.bind(this)}
          onResizeStop={dispatch.bind(null, window__resize(windowData, this.state.size))}
          >
          <div style={styleSize}>
            <div className="window__inner">
              <DraggableCore 
              onDrag={this.onDrag.bind(this)}
              onStop={dispatch.bind(null, window__move(windowData, this.state.position))}>
                <header className="window__header">
                  <p className="window__header-text">{this.props.windowData.type}</p>
                  <div className="window__close-button" onClick={dispatch.bind(null, window__close(windowData))}>x</div>
                </header>
              </DraggableCore>
              <main className="window__body">
              {(()=>{
              switch (windowData.type){
                case "Verkenner": 
                  return <WindowExplorer windowData={windowData} dispatch={dispatch}/> ;
                case "Zoeken": 
                  return <WindowSearch state={this.props.state} windowData={windowData} dispatch={dispatch}/>;
                case "Tekstbestand": 
                  return <WindowText windowData={windowData}/>;
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