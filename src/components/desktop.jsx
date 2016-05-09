import React from 'react';

import Folder from './folder.jsx';

class Desktop extends React.Component{
  render() {
    console.log(this.props.filesystem)
		return (
  		<div className="desktop">
        { this.props.filesystem.map((item, key)=>{
          console.log(item, key);
          return <Folder key={key} itemData={item}/>
        })}
      </div>
    )
	}
}

export default Desktop;