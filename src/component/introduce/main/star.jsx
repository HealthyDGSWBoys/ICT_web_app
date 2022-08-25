import * as S from "./star.style";
import Dummy from "../pushup.json";
import { useState } from "react";

const Render = () => {
  const [data, setData] = useState(Dummy);

  let makeDifficult = () => {
    let Img = "";
    for (let i = 0; i < data.difficulty; i++) {
      Img += "❗";
    }
    return ` ${Img}`;
  };

  let makeDangerous = () => {
    let Img = "";
    for (let i = 0; i < data.dangerously; i++) {
      Img += "☣️";
    }
    return `${Img}`;
  };

  let makeAverage = () => {
    let Img = "";
    for (let i = 0; i < data.average; i++) {
      Img += "⭐️";
    }
    return ` ${Img}`;
  };

  return (
    <S.MainContainer>
      <S.StarContainer>
        <h4> 평균 : </h4>
        <p>{makeAverage()}</p>
      </S.StarContainer>

      <S.StarContainer>
        <h4> 난이도 : </h4>
        <p>{makeDifficult()}</p>
      </S.StarContainer>

      <S.StarContainer>
        <h4> 위험도 : </h4>
        <p>{makeDangerous()}</p>
      </S.StarContainer>
    </S.MainContainer>
  );
};
export default Render;
