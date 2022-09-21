import styled from "styled-components";

export const Main = styled.div`
    height: 50px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    position: absolute;
    background-color: rgba(100, 100, 100, 0.15);
    &:hover {
        & + div {
            display: flex;
        }
    }
`
export const dropdownMenu = styled.div`
    width: 100vw;
    height: 150px;
    display: none;
    position: absolute;
    top: 50px;
    background-color: gray;
    opacity: 0.7;
    z-index: 99;
`