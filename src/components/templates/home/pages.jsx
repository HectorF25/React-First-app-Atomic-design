import React from "react";
import HeaderComponent from "../../organisms/header/headerComponent";
import FooterComponent from "../../organisms/footer/footerComponent";
import TitlePage from "../../atoms/titlePages/titlePages";
import CardComponent from "../../organisms/home/cardComponent";
import "../../../assets/css/home.css";

const TemplateViews = (props) => {
  return (
    <>
      <HeaderComponent />
      <TitlePage name={props.name} />
        <div className="contenedor">
        <CardComponent TitleP={props.TitleP} TextP={props.TextP} />
            {props.children}
        </div>
      <FooterComponent />
    </>
  );
};

export default TemplateViews;
