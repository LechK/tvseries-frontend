import React, { useContext } from "react";
import { bool } from "prop-types";
import * as S from "./Menu.style";
import { AuthContext } from "../../contexts/AuthContext";

function Menu({ open }) {
  const auth = useContext(AuthContext);

  return (
    <S.StyledMenu open={open}>
      <S.StyledLink to="/">
        <S.Logo>
          <S.Span>tv</S.Span>series
        </S.Logo>
      </S.StyledLink>
      {auth.token && <S.StyledLink to="/tv">TV</S.StyledLink>}
      {!auth.token && <S.StyledLink to="/login">Login</S.StyledLink>}
      {!auth.token && <S.StyledLink to="/register">Register</S.StyledLink>}
      {auth.token && <S.StyledLink to="/addSeries">Add Series</S.StyledLink>}
      {auth.token && (
        <S.StyledLink
          className="Logout"
          to="/login"
          onClick={() => {
            localStorage.removeItem("token");
            auth.setToken(null);
          }}
        >
          Log Out
        </S.StyledLink>
      )}
    </S.StyledMenu>
  );
}

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
