import React from 'react';
import but_id_icon from '../Login/L_img/but_id_icon.png';
import id_img from '../Login/L_img/id_img.png';
import but_password_icon from '../Login/L_img/but_password_icon.png';
import pw_img from '../Login/L_img/pw_img.png';
import Login_icon from '../Login/L_img/Login_icon.png';
import './Login.css';

const Login=()=>{
return(
<div className="top">
  <div className="shooting-stars">
    <div className="shooting-star"></div>
    <div className="shooting-star shooting-star--mid"></div>
    <div className="shooting-star shooting-star--fast"></div>
    <div className="shooting-star shooting-star--meh"></div>
  </div>
  <div className="Main_Login">


    <div className="Box_login">
      <div className="Box_input">
        <h1 className="title">Login</h1>

       <div className="Box_id_text">
        <input type="text" className="id_text" placeholder='Username'></input>
       </div>
      <button type="button" className="id_but">
        <img className="but_id_icon"src={but_id_icon} alt="error"></img>
      </button>
      <img className="id_img"src={id_img} alt="error"></img>

      <div className='Box_password_text'>
      <input type="password" className="password_text"  placeholder='Password'></input>
      </div>
      <button type="button" className="password_but" >
        <img className="but_password_icon"src={but_password_icon} alt="error"></img>
      </button>
      <img className="pw_img" src={pw_img} alt="error"></img>


      <button className="Sign_but">Sign in</button>
      </div>
     </div>
 


    <div className="Box_user">
      <img className="Login_user_icon" src={Login_icon} alt="error"></img>
      <h1 className="Wel">Welcome</h1>
      <h1 className="GIB">GYM in Metaverse</h1>
    </div>
  </div>


</div>

);
};
export default Login;