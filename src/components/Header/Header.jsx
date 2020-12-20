import React from "react";
import * as S from "./Header.style";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Header() {
  const auth = useContext(AuthContext);

  return (
    <S.Header>
      <S.StyledLink to="/">
        <S.Logo>
          <S.Span>tv</S.Span>status
        </S.Logo>
      </S.StyledLink>
      <S.Line />
      <S.Actions>
        {auth.token && <S.StyledLink to="/shows">Shows</S.StyledLink>}

        {auth.token && <S.StyledLink to="/addSeries">Add Series</S.StyledLink>}
        {auth.token && (
          <S.StyledLink to="/addCharacters">Add Characters</S.StyledLink>
        )}
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
