import Recommand from "./recommand";
import Star from "./star/index";
import Explanation from "./explanation";
import * as S from "./info.style";
import { useEffect } from "react";

const Render = ({ info }) => {
  return (
    <S.MainContainer>
      <Star readiness={info.readiness} difficulty={info.difficulty} risk={info.risk} />
      <Explanation explanation={info.explanation} precautions={info.precautions} />
      <Recommand />
    </S.MainContainer>
  );
};
export default Render;
