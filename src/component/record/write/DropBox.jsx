import React,{useMemo} from "react";
import { useDrop } from "react-dnd/dist/hooks";
import { NativeTypes } from "react-dnd-html5-backend";
import * as D from "./DropBox.style";

import fileSvg from "../../../static/record/reciveFile.svg";

const DropBox = ({props,files}) => {
  const onDrop = props;
  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: [NativeTypes.FILE],
      drop(item) {
        if (onDrop) {
          onDrop(item)
        }
      },
      canDrop(item) {
        console.log('canDrop', item.files, item.items)
        return true
      },
      hover(item) {
        console.log('hover', item.files, item.items)
      },
      collect: (monitor) => {
        const item = monitor.getItem()
        if (item) {
          console.log('collect', item.files, item.items)
        }
        return {
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
        }
      },
    }),
    [props],
  )

  return (
    <D.Wrapper>
      {canDrop ? "놓으세요" : "파일을 드레그하세요"}
      <img src={fileSvg} />
      <label htmlFor="fileBox">업로드</label>
      <input type="file" id="fileBox"/>
    </D.Wrapper>
  );
};

export default DropBox;
