/*
    모달 창에 대해 저장하는 atom입니다
    기본값은 null
    값: ReactComponent
*/
import { atom } from "recoil"
export default atom({
    key: "modal",
    default: null,
})