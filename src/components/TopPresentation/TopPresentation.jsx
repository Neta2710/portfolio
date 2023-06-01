import React, { useEffect, useState } from "react";
import "./TopPresentation.css";

const TopPresentation = () => {
  return (
    <div className="top-presentation">
      <div>
        <divc className="septre">
          <div className="cercleViolet"></div>
          <div className="tigeFade"></div>
        </divc>
        <h1>
          <h1 id="title">
           Bonjour, nous sommes 
            <span id="cacheTech"> CacheTech</span>
          </h1>
          <p id="presentationTop">
            Nous sommes une entreprise de création de site web et d'application,
            <br />
            Cela grâce à nos attribus de développer FullStack
          </p>
        </h1>
      </div>
    </div>
  );
};

export default TopPresentation;
