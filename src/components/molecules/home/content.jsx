import React, { Fragment } from "react";
import TitleElement from "../../atoms/home/titleElement";
import TextElement from "../../atoms/home/textElement";
const Content = (props) => (
  <Fragment>
    <div className="content-form">
      <TitleElement titlePage={props.titleP} />
      <TextElement textPage={props.textP} />
      {props.children}
    </div>
  </Fragment>
);

export default Content;
