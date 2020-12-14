import React from "react";
import * as S from "./Section.style";

function Section({ children, background }) {
  return <S.Section background={background}>{children}</S.Section>;
}

export default Section;
