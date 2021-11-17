import styled from "styled-components/macro";

export const Inner = styled.div `
    display: flex;
      align-items: center;
    // passing props
    flex-direction: ${({ direction}) => direction} 
    justify-content: space-between;
    max-width: 1100px;
    margin:auto;
    width: 100%; 


    @media (max-width: 1000px){
        flex-direction: column;
    }
`;   

export const Pane = styled.div`
width: 50%
`;
  
export const Title = styled.h1` 
font-size:26px;
font-weidth: normal;
line-height:normal;

@media (max-weidth: 600px) {
    font-sixe: 10px;
}
`;


export const SubTitle = styled.h2``;

export const Image = styled.img`
max-width: 100%;
height:auto;
`;

export const Container = styled.div ``;