import styled from "styled-components";

export const FootStyle = styled.footer`
  text-align: center;
  padding: 2em;
  color: whitesmoke;
  bottom: 0;
  background-color: ${({ theme }) => theme.darkGrey};
  box-shadow: 0 0 7px 0 ${({ theme }) => theme.magenta};
`;
