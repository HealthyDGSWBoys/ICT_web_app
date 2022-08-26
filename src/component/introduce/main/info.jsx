import Recommand from "./recommand";
import Star from "./star/index";
import Explanation from "./explanation";
import * as S from "./info.style";

const Render = ({info}) => {
  return (
    <S.MainContainer>
      <Star 
        readiness={info.readiness} 
        difficulty={info.difficulty}
        risk={info.risk}
      />
      <Explanation />
      <Recommand />
    </S.MainContainer>
  );
};
export default Render;
