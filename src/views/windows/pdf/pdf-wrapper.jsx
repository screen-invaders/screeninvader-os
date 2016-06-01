import React from 'react';
import ReactDOM from 'react-dom';

class Pdf extends React.Component{
  constructor(props){
    super(props)
    this.state = {};
  }

  static defaultProps = {
    page: 1, 
    scale: 2.0
  };

  static propTypes = {
    file: React.PropTypes.string,
    content: React.PropTypes.string,
    page: React.PropTypes.number,
    scale: React.PropTypes.number,
    onDocumentComplete: React.PropTypes.func,
    onPageComplete: React.PropTypes.func
  };

  componentDidMount() {
    this._loadPDFDocument(this.props);
  }

  _loadByteArray(byteArray) {
    PDFJS.getDocument(byteArray).then(this._onDocumentComplete);
  }

  _loadPDFDocument(props) {
    if(!!props.file){
      if (typeof props.file === 'string') return PDFJS.getDocument(props.file).then(this._onDocumentComplete.bind(this));
      // Is a File object
      var reader = new FileReader(), self = this;
      reader.onloadend = function() {
        self._loadByteArray(new Uint8Array(reader.result));
      };
      reader.readAsArrayBuffer(props.file);
    }
    else if(!!props.content){
      var bytes = window.atob(props.content);
      var byteLength = bytes.length;
      var byteArray = new Uint8Array(new ArrayBuffer(byteLength));
      for(index = 0; index < byteLength; index++) {
        byteArray[index] = bytes.charCodeAt(index);
      }
      this._loadByteArray(byteArray);
    }
    else {
      console.error('React_Pdf works with a file(URL) or (base64)content. At least one needs to be provided!');
    }
  }

  componentWillReceiveProps(newProps) {
    if ((newProps.file && newProps.file !== this.props.file) || (newProps.content && newProps.content !== this.props.content)) {
      this._loadPDFDocument(newProps);
    }
    if (!!this.state.pdf && !!newProps.page && newProps.page !== this.props.page) {
      this.setState({page: null});
      this.state.pdf.getPage(newProps.page).then(this._onPageComplete);
    }
  }

  _onDocumentComplete(pdf){
    this.setState({ pdf: pdf });
    if(!!this.props.onDocumentComplete && typeof this.props.onDocumentComplete === 'function'){
      this.props.onDocumentComplete(pdf.numPages);
    }
    pdf.getPage(this.props.page).then(this._onPageComplete.bind(this));
  }

  _onPageComplete(page){
    this.setState({ page: page });
    if(!!this.props.onPageComplete && typeof this.props.onPageComplete === 'function'){
      this.props.onPageComplete(page.pageIndex + 1);
    }
  }

  render() {
    if (!!this.state.page){
      setTimeout(()=>{
        console.log(this.props.page)
        let canvas = ReactDOM.findDOMNode(this.refs["pdfCanvas-" + this.props.page]);
        let context = canvas.getContext('2d');
        let scale = this.props.scale;
        let viewport = this.state.page.getViewport(scale);
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        var renderContext = {
          canvasContext: context,
          viewport: viewport
        };
        this.state.page.render(renderContext);
      });
      return (
        <canvas ref={"pdfCanvas-" + this.props.page} className="pdf__page"/>
      )
    }
    return (this.props.loading || <div>Loading pdf....</div>);
  }
}

export default Pdf;