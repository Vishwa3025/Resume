import React, { Component } from "react";
import jspdf from "jspdf";
import html2canvas from "html2canvas";
import Output from "./output";
import Question from "./question";

class Design extends Component {
  state = {
    inputData: {},
  };

  handleChange = (event) => {
    this.setState({
      inputData: {
        ...this.state.inputData,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleDownload = () => {
    const node = this.refs.downloadRef;
    const componentHeight = node.clientHeight;
    html2canvas(node, { height: componentHeight }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jspdf();
      pdf.addImage(imgData, "PDF", 0, 0);
      pdf.save("Resume.pdf");
    });
  };

  render() {
    return (
      <div className="m-0 overflow-y-hidden flex lg:flex-row flex-col ">
        <div className="md:w-full lg:w-2/6 xl:w-1/4 overflow-y-auto lg:overflow h-auto m-2">
          <Question onChange={this.handleChange} />
        </div>
        <div className="lg:w-4/6 xl:w-3/4 ">
          <div
            className="p-2 shadow-xl md:mx-16 xl:mx-40 w-fit h-fit m-2"
            ref="downloadRef">
            <Output ref="downloadRef" inputData={this.state.inputData} />
          </div>
          <button
            className="px-3 py-2 mx-2 rounded-md text-white bg-blue-700 md:mx-80 lg:mx-96 my-4"
            onClick={this.handleDownload}>
            Download
          </button>
        </div>
      </div>
    );
  }
}

export default Design;
