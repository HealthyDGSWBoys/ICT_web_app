import { useState } from "react";
import * as S from "./recommand.style";

const Render = () => {
  const [similar, setSimilar] = useState(["딥스", "턱걸이"]);
  const [easy, setEasy] = useState(["스쿼트", "런지"]);

  return (
    <S.Main>
      <S.RecommandBox>
        <S.RecommandModalLeft/>
      </S.RecommandBox>
      <S.RecommandBox>
        <S.RecommandModalRight/>
      </S.RecommandBox>
    </S.Main>
  );
};

export default Render;
