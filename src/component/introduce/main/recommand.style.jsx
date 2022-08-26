import styled, { css } from "styled-components";

export const Thumbnail = styled.div`
  width: 100%;
  height: 85%;
  background-color: purple;
`;

export const Main = styled.div`
  width: 90%;
  height: calc(20% - 11px);
  background-color: #cff6ff;
  margin-bottom: 11px;
  display: flex;
  justify-content: space-between;
  border-radius: 15px;
`;

export const Title = styled.h4`
  margin: 5px auto 10px auto;
  text-align: center;
`;

export const RecommandBox = styled.div`
  width: 100%;
  height: 100%;
  background-image: url${({img}) => img};

`;

export const RecommandModalLeft = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: 500ms;
  &:hover {
    background-color: #444b;
  }
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
`
export const RecommandModalRight = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: 500ms;
  &:hover {
    background-color: #444b;
  }
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
`