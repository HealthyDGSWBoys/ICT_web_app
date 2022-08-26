import { useEffect, useRef } from "react";
import { App } from "skeletalmuscle-drawer";
import human from "../../../static/introduce/asset/human.gltf";
import animation from "../../../static/introduce/animation/test.json";
import * as S from "./index.style";
import Info from "./info";

import dummy from '../pushup.json'

const Render = ({ info }) => {
  const { title, muscle } = info;
  const dom = useRef();
  let app;

  useEffect(() => {
    if (app == undefined) {
      app = new App(dom.current, human, animation);
    }
  }, [dom]);

  return (
    <S.MainContainer>
      <S.DisplayContainer>
        <S.AppContainer ref={dom} />
        <S.InfoContainer>
          {muscle.map((element, idx) => {
            return <S.Muscle key={idx}>{element}</S.Muscle>;
          })}
          <S.Title>{title}</S.Title>
        </S.InfoContainer>
      </S.DisplayContainer>
      <Info  info={dummy}/>
    </S.MainContainer>
  );
};

export default Render;
