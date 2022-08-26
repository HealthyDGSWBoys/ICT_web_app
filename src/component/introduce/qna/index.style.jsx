import styled from "styled-components";

import search from "../../../static/introduce/icons/search.svg";
import filter from "../../../static/introduce/icons/filter.svg";
import edit from "../../../static/introduce/icons/edit.svg";

export const Root = styled.div`
  width: 100%;
  margin-top: 100px;
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
`;

export const Main = styled.div`
  width: 80%;
`;

export const Top = styled.div`
  width: 100%;
  height: 40px;
  padding-bottom: 10px;
  border-bottom: 3px solid black;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const SearchContainer = styled.div`
  width: 60%;
  height: 100%;
`;

export const SearchBar = styled.input`
  width: 80%;
  height: 100%;

  border: none;
  border-bottom: 2px solid #0a1e40;
  padding-left: 10px;
  box-sizing: border-box;
  outline: none;
  font-size: 15px;
`;

export const Search = styled.button`
  width: 20%;
  height: 100%;
  background-color: #0a1e40;
  color: #eee;
  border: none;
  border-radius: 0px 15px 15px 0px;
  padding-right: 8px;
  box-sizing: border-box;
  cursor: pointer;

  background-image: url(${search});
  background-repeat: no-repeat;
  background-position: center;
`;

export const Register = styled.button`
  width: 10%;
  height: 100%;
  background-color: #0a1e40;
  color: white;
  border: none;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 10px;
  cursor: pointer;

  background-image: url(${edit});
  background-repeat: no-repeat;
  background-position: center;
`;

export const Options = styled.button`
  width: 10%;
  height: 100%;
  background-color: #0a1e40;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;

  background-image: url(${filter});
  background-repeat: no-repeat;
  background-position: center;
`;

export const Questions = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
