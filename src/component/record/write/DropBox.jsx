import React,{ useRef, useState} from "react";
import * as D from "./DropBox.style";

import fileSvg from "../../../static/record/reciveFile.svg";

const DropBox = ({setIsExist}) => {
  const [isDragging,setIsDragging] = useState(false);

  // 선택했던 파일들의 고유값
  const filedId = useRef(0);

  // 드래그 이벤트를 감지하는 ref참조 변수
  const dragRef = useRef(null);

  return (
    <D.Wrapper>
      <img src={fileSvg} />
      <div>{isDragging ? "요기 놓으세요" : "파일을 드레그하세요"}</div>
      <label htmlFor="fileBox">업로드</label>
      <input type="file" id="fileBox"/>
    </D.Wrapper>
  );
};

export default DropBox;
