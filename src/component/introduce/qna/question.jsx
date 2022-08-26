import { useState } from "react";
import * as S from "./question.style";
const Render = ({
  questions
}) => {

  let makeQuestion = questions.map((question, i) => {
    return (
      <S.QuestionContainer key={i}>
        <S.Title>{question.title}</S.Title>
        <S.Chat>{question.comment_count}</S.Chat>
        <S.Writer>{question.writer}</S.Writer>
      </S.QuestionContainer>
    );
  });
  return <div>{makeQuestion}</div>;
};
export default Render;
