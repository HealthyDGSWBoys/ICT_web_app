import * as S from "./explanation.style";
import Data from "../pushup.json";

const Render = ({ explanation, precautions }) => {
  return (
    <>
      <S.Explanation>
        <S.Text>{explanation}</S.Text>
      </S.Explanation>

      <S.Explanation>
        <h3>주의점</h3>
        <S.Text>{precautions}</S.Text>
      </S.Explanation>
    </>
  );
};

export default Render;
