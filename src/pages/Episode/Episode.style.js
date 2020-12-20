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
  margin: 1em 0;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const DisplayCurrent = styled.button`
  background-color: green;
  border: 0;
  text-align: center;
  font-weight: bold;
  color: ${({ theme }) => theme.lightGrey};
  flex: 2;
  padding: 0 1em;
`;

export const H3 = styled.h2`
  margin-top: 0;
  padding: 0.5em 0.3em;
  color: ${({ theme }) => theme.lightGrey};
`;
