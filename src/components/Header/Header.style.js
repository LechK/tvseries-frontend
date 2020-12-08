import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 1px 2px ${({ theme }) => theme.magenta};
  padding: 1em;
  background-color: ${({ theme }) => theme.darkGrey};
`;

export const Logo = styled.h1`
  max-height: 45px;
  text-decoration: none;
  max-width: 100%;
  padding: 0 1em 0.3em;
  color: ${({ theme }) => theme.lightGrey};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.magenta};
  text-decoration: none;
`;

export const Actions = styled.nav``;

export const StyledLink = styled(Link)`
  margin-left: 5px;
  color: ${({ theme }) => theme.magenta};
  text-decoration: none;
  &:hover {
    transition: 0.5s;
    color: ${({ theme }) => theme.lightGrey};
  }
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
