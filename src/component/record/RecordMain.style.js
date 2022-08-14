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
    /* grid-template-rows:repeat(3,30%); */
    /* grid-template-columns:repeat(3,30%); */
    grid-template-rows:repeat(3,1fr);
    grid-template-columns:repeat(3,1fr);
    
    row-gap:30px;
    column-gap:30px;

    @media (max-width:1120px) {
        row-gap:5px;
        column-gap:5px;
    }
`

export const WriteB = styled.div`
    width:100%;
    height:100%;
    background-color:#ebebeb;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:100px;
    font-weight:bold;
    color:gray;
    text-decoration:none;
`

export const PostWrapper = styled.div`
    position:relative;
`

export const PostImg = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;    
`

export const PostInfo = styled.div`
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,0.5);
    position:absolute;
    top:0px;
    left:0px; 
    color:white;  
    font-weight:bold;
    font-size:x-large;
    display:flex;
    justify-content:center;
    align-items:center;
`