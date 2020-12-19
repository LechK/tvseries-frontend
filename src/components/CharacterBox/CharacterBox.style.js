import styled from "styled-components";

export const CharacterBox = styled.div`
  box-sizing: border-box;
  border-radius: 5px;
  padding: 0 0.3em;
  cursor: help;
  background-color: lightgrey;
  &:hover {
    background-color: darkgray;
  }
  margin: 0.5em;
  width: 165px;
  height: 240px;
  @media (max-width: ${({ theme }) => theme.medium}) {
    margin: 0.5em;
    width: 120px;
    height: 180px;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 0.5em;
    width: 100px;
    height: 150px;
  }
`;

export const CharacterName = styled.h3`
  font-size: smaller;
  margin: 0.1em;
  padding: 0.3em 0;
  @media (max-width: ${({ theme }) => theme.medium}) {
    font-size: x-small;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: xx-small;
  }
`;

export const Photo = styled.img`
  object-fit: cover;
  border-radius: 5px;
  width: 100%;
  height: 85%;
  box-sizing: border-box;
  padding: 0;
`;

export const Status = styled.h5`
  text-transform: uppercase;
  margin: 0;
  text-align: right;
  color: green;
`;
