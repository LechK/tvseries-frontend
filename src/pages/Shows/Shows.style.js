import styled from "styled-components";

export const TV = styled.div`
  min-height: calc(100vh - 194px);
  & Section {
    display: flex;
    flex-wrap: wrap;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      display: flex;
    }
  }
`;
