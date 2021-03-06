/*global document:false*/
import React from "react";
import ReactDOM from "react-dom";
import Ecology from "../src/index";
import * as docgen from "react-docgen";
import SampleClass from "./sample";

import "./styles.styl";

class Docs extends React.Component {
  render() {
    return (
      <div className="demo">
        <Ecology
          overview={require("!!raw!./ecology.md")}
          source={docgen.parse(require("!!raw!./sample"))}
          scope={{React, ReactDOM, SampleClass}}
          playgroundtheme="blackboard"
          customRenderers={{
            link: (href, title, text) => `<a href=${href} target="_blank">${text}</a>`
          }}
        />
      </div>
    );
  }
}

ReactDOM.render(<Docs/>, document.getElementById("content"));
