import React from "react";
import * as S from "./Header.style";
import { Link } from "react-router-dom";

function Header() {
  return (
    <S.Header>
      <S.Actions>
        <S.StyledLink to="/">Home</S.StyledLink>
        <S.StyledLink to="/about">About</S.StyledLink>
      </S.Actions>
      <Link to="/">
        <S.Logo>
          <S.Span>tv</S.Span>series
        </S.Logo>
      </Link>

      <S.Actions>
        <S.StyledLink to="/login">Login</S.StyledLink>
        <S.StyledLink to="/register">Register</S.StyledLink>
        <S.StyledLink to="/logout">Logout</S.StyledLink>
      </S.Actions>
    </S.Header>
  );
}

export default Header;
