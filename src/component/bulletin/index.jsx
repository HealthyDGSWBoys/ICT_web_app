import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import * as B from "./index.style";

const Render = () => {
  window.scrollTo(0,0);
  const [paper, setPaper] = useState(
    "dfas&nbsp;&nbsp;&nbsp;dfsafdasdfsafsafsadf\n ## fsadf\n### fsadfsadf\n#### fsadfasd\n# adfsadfasdfsdfadfsad"
  );

  const [title, setTitle] = useState("asdasdadasdasd");

  return (
    <B.BulletinContainer>
      <div className="markdown--container">
        <div className="markdown">
          <h1>{title}</h1>
          <br />
          <ReactMarkdown>{paper}</ReactMarkdown>
        </div>
      </div>
    </B.BulletinContainer>
  );
};

export default Render;
