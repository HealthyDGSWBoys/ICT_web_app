import React, { useState, useCallback, useEffect } from 'react';
import * as W from "./Write.style"

import DropBox from './DropBox';


const Write = () => {

    // 이미지가 존재하는지
    const [droppedFiles,setDroppedFiles] = useState([])
    const handleFileDrop = useCallback(
        (item) => {
            if (item){
                const file = item.files
                setDroppedFiles(file)
            }
        },[setDroppedFiles]
    )

    return (
        <W.Wrapper>
            <W.Menu>
                {droppedFiles.length > 0 && <button>다음</button>}
            </W.Menu>
            <DropBox onDrop={handleFileDrop} files={droppedFiles}/>
        </W.Wrapper>
    );
};

export default Write;