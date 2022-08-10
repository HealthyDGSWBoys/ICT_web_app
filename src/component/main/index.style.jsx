import styled from "styled-components";
export const Main = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 100px;
    margin-bottom: 100px;
    box-sizing: border-box;
`

export const MainContent = styled.div`
    display: flex;
    width: 1000px;
    height: 300px;
    background-color: lightgray;
    border: 4px solid black;
    border-radius: 5px;
    margin-bottom: 50px;
    box-sizing: border-box;
`

export const MyRecord = styled.div`
    display: flex;
    width: 80vw;
    height: 200px;
    border: 4px solid black;
    border-radius: 5px;
    margin-bottom: 50px;
    box-sizing: border-box;
`

export const TrainingList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 720px;
    border: 4px solid black;   
    box-sizing: border-box;
`

export const TestBox = styled.div`
    display: flex;
    width: 100px;
    height: 100px;
    border: 2px solid black;
    box-sizing: border-box;
`