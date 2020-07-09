import React, { Component } from "react";
import "./Intro.css";
import SpectrumTemplate from "../components/SpectrumTemplate";
import IntroCentralView from "../components/IntroCentralView";

class Intro extends Component {
  render() {
    return (
      <SpectrumTemplate>
        <IntroCentralView />
      </SpectrumTemplate>
    );
  }
}

export default Intro;
