import React from "react";
import H_img from '../Home/H_img/H_img.png'
import './Home.css';

function GoLogin(e){
window.location.href='/Login'
}

function GoJoin(e){
  window.location.href='/Join'
}


const Home=()=>{
return(
<div className="container">
  <div className="container_1">
    <div className="img_1"></div>
    <img className="back_img" src={H_img} alt="error"></img>
  </div>
 

  <div className="container_2">
    <h1 className="text_1">DGSW</h1>
    <h1 className="text_2">GYM in Metaverse</h1>
    <button className="Login" onClick={GoLogin}>Login</button>
    <button className="Join"onClick={GoJoin}>Join</button>
  </div>

  
   
</div>
)

};
export default Home;