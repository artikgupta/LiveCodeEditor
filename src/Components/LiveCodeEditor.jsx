import React, { Component } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/theme/neat.css";
import "codemirror/mode/xml/xml.js";
import "codemirror/mode/javascript/javascript.js";

import { UnControlled as CodeMirror } from "react-codemirror2";

export default class LiveCodeEditor extends Component {
  state = {
    htmlCode: "",
    cssCode: "",
  };
  render() {
    const options = {
      mode: "xml",
      theme: "material",
      lineNumbers: true,
    };
    return (
      <div>
        <CodeMirror
          value={this.state.htmlCode}
          options={{ ...options }}
          onChange={(editor, value) => {
            this.setState({ htmlCode: value.value });
            console.log("uncontrolled", { value });
          }}
        />
        <CodeMirror
          value={this.state.cssCode}
          options={{ ...options, mode: "css" }}
          onChange={(editor, value) => {
            this.setState({ cssCode: value.value });
            console.log("uncontrolled", { value });
          }}
        />
      </div>
    );
  }
}
