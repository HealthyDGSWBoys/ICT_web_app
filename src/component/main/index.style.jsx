import styled from "styled-components";
export const Main = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    margin-top: 200px;
    margin-bottom: 100px;
    box-sizing: border-box;
`
export const mainTitle = styled.span`
    font-size: 55px;
    margin-left: 40px;
    margin-bottom: 40px;
`
export const subTitle = styled.span`
    font-size: 25px;
    margin-left: 60px;
    margin-bottom: 5px;
`
export const startButton = styled.div`
    display: flex;
    width: 200px;
    height: 50px;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    color: #eee;
    background-color: gray;
    border-radius: 5px;
    cursor: pointer;
`

// export const MainContent = styled.div`
//     display: flex;
//     width: 1000px;
//     height: 300px;
//     background-color: lightgray;
//     border: 4px solid black;
//     border-radius: 5px;
//     margin-bottom: 50px;
//     box-sizing: border-box;
// `

// export const MyRecord = styled.div`
//     display: flex;
//     width: 80vw;
//     height: 200px;
//     border: 4px solid black;
//     border-radius: 5px;
//     margin-bottom: 50px;
//     box-sizing: border-box;
// `

// export const TrainingList = styled.div`
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-between;
//     width: 450px;
//     row-gap: 20px;
//     box-sizing: border-box;
// `

// export const TestBox = styled.div`
//     display: flex;
//     width: 100px;
//     height: 100px;
//     justify-content: center;
//     align-items: center;
//     border: 1px solid black;
//     word-break: keep-all;
//     transition: .15s ease-in-out;
//     box-sizing: border-box;
//     cursor: pointer;
//     &:hover {
//         box-shadow: 3px 3px 3px grey;
//     }
//     > span {
//         text-align: center;
//         font-size: 16px;
//     }
// `