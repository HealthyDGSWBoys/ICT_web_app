import Main from "../components/main";
import Test from "../components/test";
import NotFound from "../common/NotFound";
import Login from "../components/Login/Login";
import Join from "../components/Join/Join";

export default [
  { path: "", component: <Main />, nav: true, footer: true },
  { path: "*", component: <NotFound />, nav: false, footer: false },
  { path: "test", component: <Test />, nav: true, footer: true },
  { path:"join", component:<Join />, nav: false, footer:false },
  {path:"login",component: <Login />, nav: false, footer:false}
]