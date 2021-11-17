import React from "react";
import {Container, Pane, Inner, Title, SubTitle, Image } from "./styles/jumbotron";


export default function Jumbotron({children, direction = 'row', ...reatProps}) {
    return (
        <Inner direction ={direction}>
             {children}
        </Inner>
       
        );
}

Jumbotron.Container = function jumbotronContainer({ children, ...restProps }){
    return <Container {...restProps}>{children }</Container>
} 

Jumbotron.Pane = function jumbotronPane({ children, ...restProps }){
    return <Pane {...restProps}>{children }</Pane>
} 

Jumbotron.Title = function jumbotronTitle({ children, ...restProps }){
    return <Title {...restProps}>{children }</Title>
} 

Jumbotron.SubTitle = function jumbotronSubTitle({ children, ...restProps }){
    return <SubTitle {...restProps}>{children }</SubTitle>
} 

Jumbotron.Image = function jumbotronImage({ children, ...restProps }){
    return <Image {...restProps}></Image>
} 