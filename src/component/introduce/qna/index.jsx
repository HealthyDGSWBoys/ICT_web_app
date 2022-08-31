import * as S from "./index.style";
import Question from "./question";
import comment from "../comment.json";
import { useState } from "react";

import search from "../../../static/introduce/icons/search.svg";
import filter from "../../../static/introduce/icons/filter.svg";
import edit from "../../../static/introduce/icons/edit.svg";
const Render = () => {
  const [getComment, setCommnet] = useState(comment);

  return (
    <S.Root>
      <S.Main>
        <S.Top>
          <S.SearchContainer>
            <S.SearchBar type="text" placeholder="Search"></S.SearchBar>
            <S.SearchButton image={search}/>
          </S.SearchContainer>
          <S.FunctionButton image={filter}/>
          <S.FunctionButton image={edit}/>
        </S.Top>
        <S.Questions>
          <Question questions={getComment} />
        </S.Questions>
      </S.Main>
    </S.Root>
  );
};
export default Render;
