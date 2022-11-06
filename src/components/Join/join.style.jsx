import React from "react"
import Join from './Join'
import styled from "styled-components"

export const title = {
    color: "#F5F5F5",
    fontWeight: "900",
    fontFamily: "'Inter', sans-serif",
    display : "flex",
    justifyContent : "center",
    width: "400px",
    margin: "50px"
}

export const body = {
    height : "100%",
    backgroundImage : "linear-gradient(155deg, #37228A 45%, #FF4BDD)",
    fontWeight: "900",
    fontFamily: "'Inter', sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}

export const center = {
    position : "relative",
    display : "flex",
    justifyContent : "center",
    alignItems : "center"
}

// export const bottom = {
//     display : "flex",
//     justifyContent : "center",
//     alignItems : "end" 
// }

export const label = {
    // position : "absolute",
    // top : "3%",
    // left : "25%",
    color : "#ffffff",
    fontSize : "50px",
    fontWeight: "900",
    fontFamily: "'Inter', sans-serif",
}

export const idPassword = {
    display : "flex",
    flexDirection : "column",
}

export const nameBirth = {
    display : "flex",
    flexDirection : "column",
}



export const inputTop = styled.input`
    ${({idExist}) => idExist ? "background-color: #fc7c77" : null};
    width : 800px;
    height : 98px;
    border : 1px solid;
    border-left : hidden; border-right : hidden; border-top : hidden; border-bottom : hidden;
    border-radius : 20px 20px 0px 0px;
    font-weight: 700;
    font-family: 'Inter', sans-serif;
    font-size : 30px;
    text-indent : 3%;
    border-bottom : 1px solid;
    border-color : #C2B5F8;
`

export const inputMid = styled.input`
:: placeholder {
    color : #C5C5C5;
}
    width : 800px;
    height : 98px;
    border : 1px solid;
    border-color : #C2B5F8;
    border-left : hidden; border-right : hidden;
    font-weight: 700;
    font-family: 'Inter', sans-serif;
    font-size : 30px;
    text-indent : 3%;
`

export const inputBot = styled.input`
:: placeholder {
    color : #C5C5C5;
}
width : 800px;
height : 98px;
border : 1px solid;
border-radius : 0px 0px 20px 20px;
border-left : hidden; border-right : hidden; border-top : hidden; border-bottom : hidden;
font-weight: 700;
font-family: 'Inter', sans-serif;
font-size : 30px;
text-indent : 3%;
`

export const inputMidBirth = styled.div`
width : 800px;
height : 98px;
display : flex;
#birth {
    flex-basis : 15%;
    background-color : #EDEDED;
    font-size : 30px;
    font-weight: 700;
    font-family: 'Inter', sans-serif;
    color : #C5C5C5;
    border : 1px solid #C2B5F8;
    border-left : hidden; border-right : hidden;
}
input {
    font-size : 30px;
    width : 30%;
    font-weight: 700;
    font-family: 'Inter', sans-serif;
    text-indent : 7%;
    :: placeholder {
        color : #C5C5C5;
    }
    border : 1px solid #C2B5F8;
    border-left : hidden; border-right : hidden;
    }
select {
    flex-grow : 1;
    font-size : 30px;
    font-weight: 700;
    font-family: 'Inter', sans-serif;
    text-indent : 7%;
    border : 1px solid #C2B5F8;
    border-left : hidden; border-right : hidden;
}
`
export const birth = {
    textAlign : "center",
    padding : "3.5% 0px"
}

export const mobile = styled.div`
position : absolute;
display : flex;
flex-direction : column;
top : 70%;
left : 25%;
`

export const inputTopMobile = styled.div`
    width : 800px;
    height : 98px;
    display : flex;
    font-weight: 700;
    font-family: 'Inter', sans-serif;
    div {
        flex-grow : 1;
    }
    select {
        flex-basis : 25%;
        border : 1px solid #C2B5F8;
        border-left : hidden; border-right : hidden; border-top : hidden;
        border-radius : 20px 0px 0px 0px;

        font-size : 30px;
        font-weight: 700;
        font-family: 'Inter', sans-serif;
        text-indent : 10%;
    }
    input {
        flex-basis : 50%;
        border : 1px solid #C2B5F8;
        border-left : hidden; border-right : hidden; border-top : hidden;

        font-size : 30px;
        font-weight: 700;
        font-family: 'Inter', sans-serif;
        text-indent : 7%;
        :: placeholder {
            color : #C5C5C5;
        }
    }
    div {
        background-color : #F5F5F5;
        border : 1px solid #C2B5F8;
        border-left : hidden; border-right : hidden; border-top : hidden;
        border-radius : 0px 20px 0px 0px;
    }
`
export const btn =  styled.button`
    width : 149px;
    height : 48px;
    margin : 12% 14%;
    border : 2px solid #DBD5F6;
    background-color : #F5F5F5;

    font-size : 23px;
    font-weight: 700;
    font-family: 'Inter', sans-serif;
    color : #58565A;
`

export const inputBotMobile = styled.div`
    width : 800px;
    height : 98px;
    display : flex;
    fontWeight: 900;
    fontFamily: 'Inter', sans-serif;
    input {
        flex-basis : 75%;
        border : solid;
        border-left : hidden; border-right : hidden; border-top : hidden; border-bottom : hidden;
        border-radius : 0px 0px 0px 20px;

        font-size : 30px;
        font-weight: 700;
        font-family: 'Inter', sans-serif;
        text-indent : 7%;
        :: placeholder {
            color : #C5C5C5;
        }
    }
    div {
        flex-grow : 1;
        background-color : #F5F5F5;
        border : solid;
        border-left : hidden; border-right : hidden; border-top : hidden; border-bottom : hidden;
        border-radius : 0px 0px 20px 0px;
    }
`

/*export const signupBtnDiv = {
    display : "flex",
    justifyContent : "center",
    margin : "5%"
}*/

export const SignupBtnDiv = styled.div `
    display : flex;
    justify-content : center;
    margin : 5%;
`;

export const signupBtnBtn = styled.button `
    cursor: pointer;
    padding : 41px 250px;
    border : 1px solid #872DF0;
    border-radius : 30px;
    background-color : #872DF0;
    font-weight: 900;
    font-family: 'Inter', sans-serif;
    color : #F5F5F5;
    font-size : 30px;
    box-shadow: 6px 6px 4px 0 rgba(0, 0, 0, 0.25), 6px 6px 20px 0 rgba(0, 0, 0, 0.19);
`;




export const inputOnclick = {

}
