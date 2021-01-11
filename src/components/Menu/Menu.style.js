import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledMenu = styled.nav`
  display: none;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: ${({ theme }) => theme.darkGrey};
    height: 100vh;
    width: 45%;
    text-align: left;
    box-shadow: ${({ open }) => (open ? "0px 0px 9px 2px #000000" : "0")};
    padding: 0 2rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
  }
`;
export const StyledLink = styled(Link)`
  margin-left: 5px;
  color: ${({ theme }) => theme.lightGrey};
  padding: 0.5em 0;
  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  &:hover {
    font-weight: bold;
    transition: 0.25s;
    color: ${({ theme }) => theme.magenta};
  }
  &.Logout {
    color: rgb(255, 0, 0);
  }
`;

export const Logo = styled.h1`
  font-weight: initial;
  margin: 2px 0;
  padding: 0.45em 0;
  color: ${({ theme }) => theme.lightGrey};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const Span = styled.span`
  color: rgb(191, 45, 191);
  text-decoration: none;
`;
