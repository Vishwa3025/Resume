import React, { Component } from 'react';
import jspdf from 'jspdf';
import "./App.css";
import html2canvas from 'html2canvas';
import Output from './components/output';
import Question from "./components/question";

class App extends Component {

  state = {
    inputData: {},

  };

  handleChange = event => {
    this.setState({
      inputData: { ...this.state.inputData, [event.target.name]: event.target.value }
    });
  }


  handleDownload = () => {
    const node = this.refs.downloadRef;
    html2canvas(node)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jspdf();
        pdf.addImage(imgData, 'PDF', 0, 0);
        pdf.save("download.pdf");
      })
  }

  render() {
    return (
      <div className="m-0 overflow-y-hidden flex">
        <div className="w-1/4 overflow-y-auto p-2 ques h-auto m-2"><Question onChange={this.handleChange} /></div>
        <div className='w-3/4 flex-col'>
          <div className="p-2 shadow-xl mx-40 w-fit h-fit m-2" ref="downloadRef">
            <Output ref="downloadRef" inputData={this.state.inputData} />
          </div>
          <button className='px-3 py-2 mx-2 rounded-md text-white bg-blue-700 mx-96 my-4' onClick={this.handleDownload}>Download</button>
        </div>
      </div >
    )
  }
}

export default App;