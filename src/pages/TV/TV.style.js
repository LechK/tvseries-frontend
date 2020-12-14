import styled from "styled-components";

export const TV = styled.div`
  & Section {
    padding-top: 0.2em;
    display: flex;
    border: 1px solid black;
    flex-wrap: wrap;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      padding-top: 0.2em;
      display: flex;
      border: 1px solid black;
    }
  }
`;
