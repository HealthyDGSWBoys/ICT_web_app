import styled from "styled-components";
import headerImage from "../../../static/introduce/icons/Header.png";

export const WriteStyle = styled.div`
  display: flex;
  height: 100%;

  .writing {
    min-height: 100vh;
    width: 50%;
    text-align: center;
    font-family: "Arial";

    .header {
      margin: 0 auto;
      margin-top: 34px;
      width: 573px;
      display: flex;
      justify-content: space-between;

      div {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 50px;
      }

      .h1 {
        background: url(${headerImage});
        height: 42px;
        background-position: 10px 0px;
        cursor: pointer;
      }
      .h2 {
        background: url(${headerImage});
        height: 42px;
        background-position: 9% 0px;
        cursor: pointer;
      }
      .h3 {
        background: url(${headerImage});
        height: 42px;
        background-position: 18% 0px;
        cursor: pointer;
      }
      .h4 {
        background: url(${headerImage});
        height: 42px;
        background-position: 27% 0px;
        cursor: pointer;
      }
      .bold {
        background: url(${headerImage});
        height: 42px;
        background-position: 36% -1px;
        cursor: pointer;
      }
      .italic {
        background: url(${headerImage});
        height: 42px;
        background-position: 48% -1px;
        cursor: pointer;
      }
      .pre {
        background: url(${headerImage});
        height: 42px;
        background-position: 60% -1px;
        cursor: pointer;
      }
      .link {
        background: url(${headerImage});
        height: 42px;
        background-position: 71% -3px;
        cursor: pointer;
      }
      .img {
        background: url(${headerImage});
        height: 42px;
        background-position: 81% -3px;
        cursor: pointer;
      }
      .code {
        background: url(${headerImage});
        height: 42px;
        background-position: 90% -3px;
        cursor: pointer;
      }
    }

    .title {
      width: 573px;
      font-style: normal;
      font-weight: 700;
      font-size: 60px;
      margin-top: 73px;
      outline: none;
      border: none;
    }

    .tags {
      margin: 0 auto;
      margin-top: 22px;
      width: 573px;
      min-height: 34px;
      display: flex;
      align-items: center;
      flex-wrap: wrap;

      .tag {
        margin-bottom: 5px;
        padding: 0 10px;
        min-width: 20px;
        height: 45px;
        background: #dfdfdf;
        border-radius: 15px;
        margin-right: 19px;

        flex-shrink: 0;

        display: flex;
        justify-content: center;
        align-items: center;

        font-weight: 700;
        font-size: 20px;
        color: #5077de;
      }

      input {
        outline: none;
        border: none;

        min-width: 100px;
        font-weight: 700;
        font-size: 30px;
        line-height: 34px;

        color: rgba(0, 0, 0, 0.5);
      }
    }

    textarea {
      margin-top: 21px;
      font-family: "Arial";

      min-height: 560px;
      width: 573px;
      resize: none;
      outline: none;
      border: none;

      font-style: normal;
      font-weight: 400;
      font-size: 20px;
    }
  }
  .markdown--container {
    background: rgba(54, 121, 253, 0.05);
    width: 50%;
    min-height: 100vh;

    .markdown {
      padding: 50px;

      font-family: "Arial";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;

      h1 {
        font-size: 60px;
      }
    }
  }
`;

export const WriteTable = styled.div`
  button {
    font-family: "Arial";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;

    border: none;
    background: #ffffff;

    border-radius: 10px;
    width: 129px;
    height: 44px;

    color: #ffffff;
    background: #5077de;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);

    :hover {
      transition: 0.5s;
      background-color: skyblue;
    }

    cursor: pointer;
  }
`;
