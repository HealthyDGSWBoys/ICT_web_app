import Test from "../components/test";
import NotFound from "../common/NotFound";
import Login from "../components/Login/Login";
import Join from "../components/Join/Join";
import Home from '../components/Home/Home';

export default [
  { path: "ICT_web_app", component:  <Home />, nav: false, footer: false },
  { path: "*", component: <NotFound />, nav: false, footer: false },
  { path: "ICT_web_app/test", component: <Test />, nav: false, footer: true },
  { path:"ICT_web_app/Join", component:<Join />, nav: false, footer:false },
  { path:"ICT_web_app/Login",component: <Login />, nav: false, footer:false},
]