import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Main = styled.div`
  width: 100vw;
  height: 100px;
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: solid 2px black;
`

export const A = styled(Link)`
  margin-left: 25px;
  margin-right: 25px;
  text-decoration: none;
  &:hover{
    text-decoration:underline;
  }
`

export const FooterImgPart = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 100px;
`