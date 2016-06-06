import React from 'react';
import ReactDOM from 'react-dom';

import PdfPage from './pdf-page.jsx';

class Pdf extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      pages: []
    };
  }

  static defaultProps = {
    scale: 2.0
  };

  static propTypes = {
    file: React.PropTypes.string,
    content: React.PropTypes.string,
    scale: React.PropTypes.number
  };

  componentDidMount() {
    this._loadPDFDocument(this.props);
  }

  _loadPDFDocument(props) {
    if(!!props.file){

      if (typeof props.file === 'string') {
        return PDFJS.getDocument(props.file).then(this._onDocumentComplete.bind(this));
      }

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

  _loadByteArray(byteArray) {
    PDFJS.getDocument(byteArray).then(this._onDocumentComplete);
  }

  componentWillReceiveProps(newProps) {
    if ((newProps.file && newProps.file !== this.props.file) || (newProps.content && newProps.content !== this.props.content)) {
      this._loadPDFDocument(newProps);
    }
  }

  _onDocumentComplete(pdf){
    this.setState({ pdf: pdf });
    for (var i = 1; i <= pdf.numPages; i++){
      pdf.getPage(i).then(this._onPageComplete.bind(this));
    }
  }

  _onPageComplete(page){
    this.setState((prevState)=>{
      prevState.pages.push(page)
      return prevState
    });
  }

  render() {
    if (!!this.state.pdf){
      if (this.state.pdf.numPages == this.state.pages.length){
      return (
        <div className="pdf__pages">
          {this.state.pages.map((page, key)=>{
            return <PdfPage key={key} page={page} scale={this.props.scale} loading={this.props.loading} />
          })}
        </div>
      )
      }
    }
    return (this.props.loading || <div>Ophalen PDF</div>);
  }
}

export default Pdf;