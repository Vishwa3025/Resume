import React, { Component } from 'react';
import jspdf from 'jspdf';
import "./App.css";
import html2canvas from 'html2canvas';
import Output from './components/output';
import Question from "./components/question";


class App extends Component {

  state = {
    inputData: { job: "", firstName: "", lastName: "" }
  };

  handleChange = event => {
    this.setState({
      inputData: { ...this.state.inputData, [event.target.name]: event.target.value }
    });
  };


  handleDownload = () => {
    const node = this.refs.downloadRef;
    html2canvas(node)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jspdf();
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save("download.pdf");
      })
  }

  render() {
    return (
      <div className="m-0 flex">
        <div className="w-1/4 p-2 ques h-auto m-2"><Question onChange={this.handleChange} /></div>
        <div className='w-3/4 flex-col'>
          <div className="p-2 border-4 w-fit h-fit m-2" ref="downloadRef">
            <Output ref="downloadRef" inputData={this.state.inputData} />
          </div>
          <button onClick={this.handleDownload}>Download</button>
        </div>
      </div >
    )
  }
}

export default App;
