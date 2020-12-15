import React from "react";
import * as S from "./ShowBox.style";

function ShowBox({ handleClick, src, title, year }) {
  return (
    <S.Box onClick={handleClick}>
      <S.ImgBox src={src} alt={title} />
      <S.Title>
        {title} <S.Span>{year}</S.Span>
      </S.Title>
    </S.Box>
  );
}

export default ShowBox;
