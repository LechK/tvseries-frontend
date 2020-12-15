import styled from "styled-components";

export const TV = styled.div`
  & Section {
    display: flex;
    flex-wrap: wrap;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      display: flex;
    }
  }
`;
