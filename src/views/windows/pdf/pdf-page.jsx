import React from 'react';
import ReactDOM from 'react-dom';

class PdfPage extends React.Component{
  render() {
    let {page, scale, loading} = this.props;
    if (!!page){
      setTimeout(()=>{
        let canvas = ReactDOM.findDOMNode(this.refs["pdfCanvas"]);
        let context = canvas.getContext('2d');
        let viewport = page.getViewport(scale);
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        var renderContext = {
          canvasContext: context,
          viewport: viewport
        };
        page.render(renderContext);
      });
      return (
        <canvas ref="pdfCanvas" className="pdf__page"/>
      )
    }
    return (loading || <div>Loading pdf....</div>);
  }
}

export default PdfPage;