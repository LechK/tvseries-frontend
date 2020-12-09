import React from "react";
import { bool, func } from "prop-types";
import * as S from "./Burger.style";

function Burger({ open, setOpen }) {
  return (
    <S.StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </S.StyledBurger>
  );
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;
