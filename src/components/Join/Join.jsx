import React, { Fragment } from 'react';
import * as st from './join.style';
import backimg from './image/puple_sq.png';
import * as S from './help'

const Join = () => {
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
    </style>
    return (
        <div style={st.body}>
        <div>
            <h1 style={st.title}>GYM in Metaverse</h1>
        </div>
        {/* <S.Container>
            
        </S.Container> */}
        <div style={st.center}>
            <img src={backimg} alt="sign up" width="1058" height="1400"/>
            
            <label htmlFor="join" style={st.label}>JOIN</label>

            <div style={st.idPassword}>
                <st.inputTop placeholder='Id'></st.inputTop>
                <st.inputMid type="password" placeholder='Password'></st.inputMid>
                <st.inputBot type="password" placeholder='Re-enter password'></st.inputBot>
            </div>

            <div style={st.nameBirth}>
                <st.inputTop placeholder='Name'></st.inputTop>
                    <st.inputMidBirth>
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
                    </st.inputMidBirth>
                <st.inputBot type="email" placeholder='Enter email'></st.inputBot>
            </div>
{/* 
            <st.mobile>
                <st.inputTopMobile>
                    <select name="countryCode" id="countryCode">
                        <option value="82">+82</option>
                        <option value="672">+672</option>
                    </select>
                    <input type="tel" placeholder='Phone number'/>
                    <div><st.btn>Send code</st.btn></div>
                </st.inputTopMobile>
                <st.inputBotMobile>
                    <input type="text" placeholder='Enter verification code'></input>
                    <div><st.btn>Check</st.btn></div>
                </st.inputBotMobile>
            </st.mobile> */}

        </div>
        

        <st.SignupBtnDiv>
            <st.signupBtnBtn>SIGN UP</st.signupBtnBtn>
        </st.SignupBtnDiv>

        

        </div>
    );
};

        {/* <footer>
            <label htmlFor="information" style={st.bottom}>회사소개 | 인재채용 | 제휴제안 | 이용약관 | 개인정보처리방침 | 청소년보호정책 | 네이버 정책 | 고객센터 ⓒ OUR TEAM.</label>
        </footer> */}

export default Join;