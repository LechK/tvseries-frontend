import styled from "styled-components";

export const Main = styled.div`
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

export const H3 = styled.h2`
  padding: 0.5em 0.3em;
  color: ${({ theme }) => theme.darkGrey};
`;
