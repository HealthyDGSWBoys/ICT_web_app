import Main from "./main";
import QnA from "./qna";
import * as S from "./index.style";
import dummy from "./pushup.json";
import { useEffect } from "react";

const Render = () => {
  return (
    <S.Root>
      <S.Container>
        <Main info={dummy} />
        <QnA />
      </S.Container>
    </S.Root>
  );
};
export default Render;
