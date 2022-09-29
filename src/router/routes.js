import Main from "../components/main";
import Test from "../components/test";
import NotFound from "../common/NotFound";

export default [
  { path: "", component: <Main />, nav: true, footer: true },
  { path: "*", component: <NotFound />, nav: false, footer: false },
  { path: "test", component: <Test />, nav: true, footer: true },
]