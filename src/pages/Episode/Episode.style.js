import styled from "styled-components";

export const Main = styled.div`
  background-color: ${({ theme }) => theme.darkGrey};
  min-height: calc(100vh - 213px);
  @media (max-width: ${({ theme }) => theme.mobile}) {
    min-height: calc(100vh - 173px);
  }
`;

export const CharactersSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  &&CharacterBox {
    padding: 0 0.5em;
  }
`;

export const EpisodeNav = styled.div`
  height: 3em;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const DisplayCurrent = styled.button`
  background-color: green;
  border: 0;
  width: 100%;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
  color: ${({ theme }) => theme.lightGrey};
  flex: 2;
  padding: 0 1em;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: x-small;
    font-weight: bold;
  }
`;

export const H3 = styled.h2`
  margin-top: 0;
  padding: 0.5em 0.3em;
  color: ${({ theme }) => theme.lightGrey};
`;
