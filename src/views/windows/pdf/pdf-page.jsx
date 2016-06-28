import React from 'react';
import ReactDOM from 'react-dom';

class PdfPage extends React.Component{
  render() {
    let {page, scale, loading} = this.props;
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
    console.log(page);
    return (
      <div className="pdf__page-container">
        <canvas className="pdf__page" ref="pdfCanvas"/>
        <p className="pdf__pagenum" style={{display: "none"}}>{page.pageIndex + 137}</p>
      </div>
    )
  }
}

export default PdfPage;