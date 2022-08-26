import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
`
export const icon = styled.div`
    width: 30px;
    height: 30px;
    background-size: cover;
    background-image: url(${({img}) => img});
`