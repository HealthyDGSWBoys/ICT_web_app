import * as S from "./explanation.style";
import Data from "../pushup.json";

const Render = () => {
  return (
    <>
      <S.Explanation>
        <h3>운동 설명</h3>
        <S.Text>{Data.explanation}</S.Text>
      </S.Explanation>

      <S.Explanation>
        <h3>운동 시 주의점</h3>
        <S.Text>{Data.precautions}</S.Text>
      </S.Explanation>
    </>
  );
};

export default Render;
