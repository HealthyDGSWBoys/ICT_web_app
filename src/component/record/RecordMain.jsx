import React, { useState } from "react";
import * as R from "./RecordMain.style";
import { Link } from "react-router-dom";

const RecordMain = () => {
  // 실제에서는 배열에 날짜가 들어가야 한다
  const dum = [
    "220805",
    "220806",
    "220807",
    "220808",
    "220809",
    "220810",
    "220811",
  ];
  const username = "codingbotPark";

  // 오늘 일기를 썻는가
  const [writed, setWrited] = useState(false);

  const [showInfo, setShowInfo] = useState(-1);

  function makeDateForm(key) {
    return [
      Number(key.slice(0, 2)),
      Number(key.slice(2, 4)),
      Number(key.slice(4, 6)),
    ].join(" . ");
  }

  return (
    <R.Wrapper>
      <R.Content>
        {/* <Link to={`${username}/write`}>
          <R.WriteB>d</R.WriteB>
        </Link> */}
        {dum.map((i, idx) => (
          <Link key={i} to={`${username}/${i}`}>
            <R.PostWrapper
              onMouseOver={() => setShowInfo(idx)}
              onMouseLeave={() => setShowInfo(-1)}
            >
              <R.PostImg src={require(`./testimgs/${i}.jpg`).default} />
              {showInfo === idx && <R.PostInfo>{makeDateForm(i)}</R.PostInfo>}
            </R.PostWrapper>
          </Link>
        ))}
      </R.Content>
    </R.Wrapper>
  );
};

export default RecordMain;
