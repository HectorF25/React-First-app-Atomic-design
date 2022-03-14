import React from "react";
import EstudianteCard from "./estudianteComponent";
import EstudiantesArray from "../../atoms/home/estudiantesArray";
import Content from "../../molecules/home/content";

const CardComponent = (props) => (
    <Content titleP={props.TitleP} textP={props.TextP}>
        {
        EstudiantesArray.map ( item => <EstudianteCard nombre = { item.nombre } edad = { item.edad } genero = { item.genero } id = {item.id}/>)
        }
    </Content>
);

export default CardComponent;