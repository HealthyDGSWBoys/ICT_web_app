import styled from "styled-components";

export const Main = styled.div`
    height: 75px;
    width: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0.1));
    position: absolute;
    bottom: 0;
    z-index: 1;
    transition: 0.3s;
    opacity: ${({hide}) => hide ? 0 : 1};
`
export const ProgressBarContainer = styled.div`
    width: 97%;
    height: 6px;
    position: absolute;
    background-color:#999;
    top: 20px;
    left: 1.5%;
`

export const ProgressBar = styled.div`
    width: ${({width}) => width}%;
    height: 6px;
    position: absolute;
    background-color: blue;
    > div {
        z-index: 10;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color:   blue;
        position: absolute;
        right: -6px;
        bottom: -3px;
        cursor: pointer;
        z-index: 0;
    }
`
export const ProgressBall = styled.div`

`

//     .MomentBall {
//         width: $diameter;
//         height: $diameter;
//         border-radius: 50%;
//         background-color: green;
//         position: absolute;
//         bottom: -3px;
//         cursor: pointer;
//     }
//     .ProgressBar {

//         .ProgressBall {

//         }
//     }
// }
// .FunctionContainer {
//     width: 100%;
//     height: 50px;
//     position: absolute;
//     bottom: 0;
//     display: flex;
//     justify-content: space-around;
//     align-items: center;
//     display: flex;
//     .Functions {
//         width: 96%;
//         height: 50px;
//         display: flex;
//         align-items: center;
//         gap: 5px;
//         .Function {
//             width: 30px;
//             height: 30px;
//             background-repeat : no-repeat;
//             background-size : cover;
//             cursor: pointer;
//         }
//         .TimeProgress {
//             margin-left: 10px;
//             font-size: 20px;
//             font-family: "Roboto";
//             color: #eee;
//         }
//     }
//     .left {
//         width: 60%;
//         justify-content: flex-start;
//     }
//     .right {
//         width: 30%;
//         justify-content: flex-end;
//     }
// }
// }