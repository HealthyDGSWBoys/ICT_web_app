import React,{useMemo} from "react";
import { useDrop } from "react-dnd/dist/hooks";
import { NativeTypes } from "react-dnd-html5-backend";
import * as D from "./DropBox.style";

import fileSvg from "../../../static/record/reciveFile.svg";

const DropBox = ({prop,files}) => {
  const onDrop = prop;
  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: [NativeTypes.FILE],
      drop(item) {
        if (onDrop) {
          onDrop(item);
        }
      },
      canDrop(item) {
        console.log("canDrop", item.files, item.items);
        return true;
      },
      hover(item) {
        console.log("hover", item.files, item.items);
      },
      collect: (monitor) => {
        const item = monitor.getItem();
        if (item) {
          console.log("collect", item.files, item.items);
        }
        return {
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
        };
      },
    }),
    [prop]
  );

    // ------------파일 리스트 출력
    function list(files){
        const label = (file) =>
        `'${file.name}' of size '${file.size}' and type '${file.type}'`;
      return files.map((file) => <li key={file.name}>{label(file)}</li>);
    }

    const fileList = useMemo(() => list(files),[files])

  return (
    <D.Wrapper>
      {canDrop ? "놓으세요" : "파일을 드레그하세요"}
      <img src={fileSvg} />
      <input type="file" />
      <div>{files.length > 0 ? fileList : "ㅂㅇ"}</div>
    </D.Wrapper>
  );
};

export default DropBox;
