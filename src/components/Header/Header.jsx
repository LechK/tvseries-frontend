import React from "react";
import * as S from "./Header.style";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Header() {
  const auth = useContext(AuthContext);

  return (
    <S.Header>
      <S.Actions>
        <S.StyledLink to="/">Home</S.StyledLink>
        {auth.token && <S.StyledLink to="/about">About</S.StyledLink>}
      </S.Actions>
      <Link to="/">
        <S.Logo>
          <S.Span>tv</S.Span>series
        </S.Logo>
      </Link>

      <S.Actions>
        {!auth.token && <S.StyledLink to="/login">Login</S.StyledLink>}
        {!auth.token && <S.StyledLink to="/register">Register</S.StyledLink>}
        {auth.token && (
          <S.StyledLink
            className="Logout"
            to="/login"
            onClick={() => {
              localStorage.removeItem("token");
              auth.setToken(null);
            }}
          >
            Logout
          </S.StyledLink>
        )}
      </S.Actions>
    </S.Header>
  );
}

export default Header;
