import * as S from './index.style'
import image from './www.png'
const Render = () => {
    return(
        <S.Main>
            메인페이지 입니다
            <img src={image} width='200'></img>
        </S.Main>
    )
}
export default Render