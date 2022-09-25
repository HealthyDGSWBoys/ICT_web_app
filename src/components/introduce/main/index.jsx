import Core from "../core";
import * as S from "./index.style";
import Info from "./info";


const Render = ({ info }) => {
  return (
    <S.MainContainer>
      <S.DisplayContainer>
        <Core/>
        <S.InfoContainer>
          {info.muscle.map((element, idx) => {
            return <S.Muscle key={idx}>{element}</S.Muscle>;
          })}
          <S.Title>{info.title}</S.Title>
        </S.InfoContainer>
      </S.DisplayContainer>
      <Info info={info} />
    </S.MainContainer>
  );
};

export default Render;
