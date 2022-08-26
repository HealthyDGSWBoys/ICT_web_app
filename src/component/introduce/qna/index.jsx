import * as S from "./index.style";
import Question from "./question";
import comment from "../comment.json";
import { useState } from "react";

const Render = () => {
  const [getComment, setCommnet] = useState(comment);

  return (
    <S.Root>
      <S.Main>
        <S.Top>
          <S.SearchContainer>
            <S.SearchBar type="text" placeholder="Search"></S.SearchBar>
            {/* <S.Search>검색</S.Search> */}
            <S.Search />
          </S.SearchContainer>

          {/* <S.Options>옵션</S.Options>
          <S.Register>등록</S.Register> */}

          <S.Options />
          <S.Register />
        </S.Top>
        <S.Questions>
          <Question questions={getComment} />
        </S.Questions>
      </S.Main>
    </S.Root>
  );
};
export default Render;
