import styled from "styled-components";

export const Wrapper = styled.div`
      width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > * {
  margin:15px;
  }
  > img{
    width:120px;
  }
  >label{
    display: inline-block;
  padding: .5em .75em;
  color:white;
  font-size: inherit;
  line-height: normal;
  vertical-align: middle;
  background-color: #0095f5;
  cursor: pointer;
  border-radius: .25em;
  }
  > input{
    display:none;
  }
`