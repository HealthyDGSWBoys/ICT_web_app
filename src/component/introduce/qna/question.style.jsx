import styled from "styled-components";

export const QuestionContainer = styled.div`
  width: calc(100% - 20px);
  height: 60%;
  height: 40px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid black;
  text-align: left;
  align-items: center;
  padding: 10px;
  justify-content: center;
  transition: 300ms;
  text-decoration: none;
  &:hover {
    background-color: rgba(10, 30, 64, 0.35);
  }
`;

export const Title = styled.div`
  width: 60%;
  display: flex;
  color: #333;
  align-items: center;
  font-weight: bolder;
`;

export const Chat = styled.div`
  width: 10%;
  text-align: right;
  margin-left: 20px;
  color: orangered;
`;

export const Writer = styled.div`
  color: #555;
  width: 20%;
  padding-left: 10px;
  text-align: right;
  box-sizing: border-box;
`;
