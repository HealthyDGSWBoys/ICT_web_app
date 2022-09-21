import Main from '../components/main'
import Test from '../components/test'
import NotFound from "../common/NotFound"
import Record from '../components/record'
import Introduce from "../components/introduce"
import Recommend from '../components/recommend/Recommend'

export default [
    { path: "", component: <Main />, nav: true, footer: true },
    { path: "*", component: <NotFound />, nav: false, footer: false },
    { path: "test", component: <Test />, nav: true, footer: true },
    { path: "record", component: <Record />, nav: true, footer: true },
    { path: "introduce", component:<Introduce/>, nav:true, footer:true },
    { path: "recommend", component:<Recommend/>, nav:true, footer:true }
]

// �̰��� ������Ʈ�� ����ϸ� �˴ϴ�
// path: ������Ʈ�� ���� url
// component: ����� ������Ʈ
// nav: �׺�ٸ� �������
// footer: Ǫ�͸� �������
