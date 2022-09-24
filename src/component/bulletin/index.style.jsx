import styled from "styled-components";

export const BulletinContainer = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  //제목
  h1 {
    color: black;
    font-size: 60px;
  }
  //운동 종목
  h3 {
  }

  .markdown--container {
    background: rgba(54, 121, 253, 0.05);
    width: 80%;
    min-height: 100vh;

    .markdown {
      padding: 50px;

      font-weight: 400;
      font-size: 20px;

      h1 {
        font-size: 60px;
      }
    }
  }
`;
