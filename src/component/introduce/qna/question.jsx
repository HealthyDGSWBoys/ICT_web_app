import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as S from "./question.style";

const Render = ({ questions }) => {
  const navigate = useNavigate();

  let makeQuestion = questions.map((question, i) => {
    const goBulletin = () => {
      navigate(`/introduce/${question.id}`);
    };

    return (
      <S.QuestionContainer key={i} onClick={goBulletin}>
        <S.Title>{question.title}</S.Title>
        <S.Chat>{question.comment_count}</S.Chat>
        <S.Writer>{question.writer}</S.Writer>
      </S.QuestionContainer>
    );
  });

  return <div>{makeQuestion}</div>;
};

export default Render;
