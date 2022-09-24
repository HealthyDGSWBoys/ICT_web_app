import * as S from "./index.style";
import Member from "./member";
import { useEffect, useState } from "react";

import readinessIcon from "../../../../static/introduce/icons/readiness.svg";
import difficultyIcon from "../../../../static/introduce/icons/difficulty.svg";
import riskIcon from "../../../../static/introduce/icons/risk.svg";

const Render = ({ readiness, difficulty, risk }) => {
  const [getData, setData] = useState([
    {
      icon: readinessIcon,
      explanation: "준비도",
      count: null,
    },
    {
      icon: difficultyIcon,
      explanation: "난이도",
      count: null,
    },
    {
      icon: riskIcon,
      explanation: "위험도",
      count: null,
    },
  ]);

  useEffect(() => {
    const temp = [...getData];
    temp[0].count = readiness;
    temp[1].count = difficulty;
    temp[2].count = risk;
    setData(temp);
  }, []);

  return (
    <S.MainContainer>
      {getData.map((element, idx) => {
        return <Member icon={element.icon} count={element.count} key={idx} />;
      })}
    </S.MainContainer>
  );
};
export default Render;
