import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledSection = styled.div`
  max-width: 760px;
  padding: 0 0.7em;
  margin: 0 auto;
`;

export const FormBox = styled.div`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 1em;
    padding: 0.5em;
  }
  background-color: ${({ theme }) => theme.darkGrey};
  margin: 0 auto;
  margin-top: 1em;
  padding: 1em 2em 3em;
  border-radius: 7px;
  box-shadow: 1px 2px 1px 1px ${({ theme }) => theme.magenta};
  & Button {
    margin-top: 1.5em;
  }
`;

export const Heading = styled.h2`
  color: ${({ theme }) => theme.lightGrey};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 0.5em 0;
    font-size: 1.3em;
  }
`;

export const P = styled.p`
  color: red;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  padding-right: 1em;
`;

export const StyledLink = styled(Link)`
  width: 100%;
  color: ${({ theme }) => theme.darkGrey};
  padding: 0.5em 0;
  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  &:hover {
    transition: 0.25s;
    color: ${({ theme }) => theme.magenta};
  }
`;
