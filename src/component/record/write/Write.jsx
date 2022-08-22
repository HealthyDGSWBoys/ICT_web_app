import React, { useState } from 'react';
import * as W from "./Write.style"
import fileSvg from "../../../static/record/reciveFile.svg"

const Write = () => {

    // 이미지가 존재하는지
    const [imgExist,setImgExist] = useState(false);

    return (
        <W.Wrapper>
            <W.Menu>
                {imgExist && <button>다음</button>}
            </W.Menu>
            <W.ImgPlace>
               <img src={fileSvg}/> 
               <input type="file"/>
            </W.ImgPlace>
        </W.Wrapper>
    );
};

export default Write;