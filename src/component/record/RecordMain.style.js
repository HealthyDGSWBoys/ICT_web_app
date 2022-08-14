import styled from "styled-components";

export const Wrapper = styled.div`
    width:100vw;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`

export const Content = styled.section`
    margin:100px 30px;
    max-width:1100px; 
    display:grid;
    /* grid-template-rows:repeat(3,30%);
    grid-template-columns:repeat(3,30%); */
    grid-template-rows:repeat(3,1fr);
    grid-template-columns:repeat(3,1fr);
    
    row-gap:30px;
    column-gap:30px;

    @media (max-width:1120px) {
        row-gap:5px;
        column-gap:5px;
    }
`

export const Post = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;    
`