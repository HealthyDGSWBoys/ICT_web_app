import styled from "styled-components";

export const Container = styled.div`
    width: calc(100% - 20px);
    height: 22px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    background-color: #E2D2d2;
    box-shadow: inset 1px 1px 1px #00000033;
    padding: 10px;
`
export const icon = styled.div`
    width: 25px;
    height: 25px;
    background-size: cover;
    background-image: url(${({img}) => img});
`