import React, { Fragment } from 'react';
import * as st from './join.style';
import backimg from './image/puple_sq.png';
import * as S from './help'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Join = () => {
    const navigator = useNavigate()
    const [values, setValues] = useState({
        id: "",
        password: "",
        rePassword: "",
        name: "",
        email: ""
    })
    const [idExist, setExist] = useState(false)
    const onChange = (event, name) => {
        const v = event.target.value
        if(name === "id" && v != "") {
            axios.get('/user/idexist/' + event.target.value)
            .then((res) => {
                setExist(res.data.exist)
            })
        }
        const temp = { ...values }
        temp[name] = v
        setValues(temp)
    }
    const onClick = () => {
        if(
            values.id != "" &&
            values.password != "" &&
            values.rePassword != "" &&
            values.name != "" &&
            values.email != ""
        ) {
            if(values.password === values.rePassword) {
                axios.post(
                    '/user/signup',
                    values
                ).then((res) => {
                    alert("회원가입 성공")
                    navigator('/Login')
                })  
            }
            else {
                alert("비밀번호가 일치하지 않습니다")
            }
        }
        else {
            alert("빈칸을 마저 채워주세요")
        }
    }
    return (
        <div style={st.body}>
        <S.Container>
            <label htmlFor="join" style={st.label}>JOIN</label>

            <div style={st.idPassword}>
                <st.inputTop idExist={idExist} placeholder='Id' onChange={(e) => onChange(e, "id")}></st.inputTop>
                <st.inputMid type="password" onChange={(e) => onChange(e, "password")} placeholder='Password'></st.inputMid>
                <st.inputBot type="password" onChange={(e) => onChange(e, "rePassword")} placeholder='Re-enter password'></st.inputBot>
            </div>

            <div style={st.nameBirth}>
                <st.inputTop placeholder='Name' onChange={(e) => onChange(e, "name")}></st.inputTop>
                    {/* <st.inputMidBirth>
                      <label htmlFor="birth" id='birth' style={st.birth}>Birth</label>
                      <input type="number" placeholder='Year' />
                       <select name="birthMon" id="mon">
                            <option value="mon">월</option> <option value="01">1</option>
                            <option value="02">2</option> <option value="03">3</option>
                            <option value="04">4</option> <option value="05">5</option>
                            <option value="06">6</option> <option value="07">7</option>
                            <option value="08">8</option> <option value="09">9</option>
                            <option value="10">10</option> <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                        <select name="birthDay" id="day">
                            <option value="day">일</option> <option value="01">1</option>
                            <option value="02">2</option> <option value="03">3</option>
                            <option value="04">4</option> <option value="05">5</option>
                            <option value="06">6</option> <option value="07">7</option>
                            <option value="08">8</option> <option value="09">9</option>
                            <option value="10">10</option> <option value="11">11</option>
                            <option value="12">12</option> <option value="13">13</option>
                            <option value="14">14</option> <option value="15">15</option>
                            <option value="16">16</option> <option value="17">17</option>
                            <option value="18">18</option> <option value="19">19</option>
                            <option value="20">20</option> <option value="21">21</option>
                            <option value="22">22</option> <option value="23">23</option>
                            <option value="24">24</option> <option value="25">25</option>
                            <option value="26">26</option> <option value="27">27</option>
                            <option value="28">28</option> <option value="29">29</option>
                            <option value="30">30</option> <option value="31">31</option>
                        </select>
                    </st.inputMidBirth> */}
                <st.inputBot type="email" placeholder='Enter email' onChange={(e) => onChange(e, "email")}></st.inputBot>
            </div>
        </S.Container>

        <st.SignupBtnDiv>
            <st.signupBtnBtn onClick={onClick}>JOIN</st.signupBtnBtn>
        </st.SignupBtnDiv>

        

        </div>
    );
};

        {/* <footer>
            <label htmlFor="information" style={st.bottom}>회사소개 | 인재채용 | 제휴제안 | 이용약관 | 개인정보처리방침 | 청소년보호정책 | 네이버 정책 | 고객센터 ⓒ OUR TEAM.</label>
        </footer> */}

export default Join;