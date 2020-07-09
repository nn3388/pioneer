import React from "react";
import "./SpectrumTemplate.scss";

const SpectrumTemplate = ({ children }) => {
  return (
      <div className="SpectrumContainer">
        <div className="SpectrumRightLayout">
          <p>left_layout</p>
        </div>
        <div className="SpectrumCentralLayout">{children}</div>
        <div className="SpectrumRightLayout">
          <p>right_layout</p>
        </div>
      </div>
  );
};

export default SpectrumTemplate;
