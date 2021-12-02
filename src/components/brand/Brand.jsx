import React from "react";
import "./brand.css";
import { google, dropbox, shopify, slack, atlassian } from "./import";

function Brand() {
  return (
    <>
      <div className="gpt3__brand section_padding">
        <div>
          <img src={google} alt="" />
        </div>
        <div>
          <img src={dropbox} alt="" />
        </div>
        <div>
          <img src={shopify} alt="" />
        </div>
        <div>
          <img src={slack} alt="" />
        </div>
        <div>
          <img src={atlassian} alt="" />
        </div>
      </div>
    </>
  );
}

export default Brand;
