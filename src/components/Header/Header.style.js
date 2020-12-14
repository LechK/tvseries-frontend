import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 1px 1px 2px ${({ theme }) => theme.magenta};
  padding: 1em;
  background-color: ${({ theme }) => theme.darkGrey};
`;

export const Logo = styled.h1`
  margin: 0 auto;
  max-height: 45px;
  text-decoration: none;
  max-width: 100%;
  padding: 0 1em 0.3em;
  color: ${({ theme }) => theme.lightGrey};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  &:hover {
    font-weight: bolder;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding-bottom: 0;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.magenta};
  text-decoration: none;
`;

export const Line = styled.div`
  width: 120%;
  height: 1px;
  background-color: ${({ theme }) => theme.magenta};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;

export const Actions = styled.nav`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
  padding-top: 0.5em;
`;

export const StyledLink = styled(Link)`
  margin-left: 5px;
  font-size: 1.1em;
  color: ${({ theme }) => theme.magenta};
  text-decoration: none;
  &:hover {
    transition: 0.5s;
    color: ${({ theme }) => theme.lightGrey};
  }
  &:not(:last-child) {
    margin-right: 10px;
  }
  &.Logout {
    color: rgb(255, 0, 0);
    &:hover {
      transition: 0.5s;
      color: rgb(199, 0, 0);
    }
  }
`;
