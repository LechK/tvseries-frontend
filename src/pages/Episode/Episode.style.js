import styled from "styled-components";

export const Main = styled.div`
  min-height: calc(100vh - 213px);
  @media (max-width: ${({ theme }) => theme.mobile}) {
    min-height: calc(100vh - 173px);
  }
`;

export const H3 = styled.h3`
  padding: 0.5em 0;
  color: ${({ theme }) => theme.darkGrey};
`;
