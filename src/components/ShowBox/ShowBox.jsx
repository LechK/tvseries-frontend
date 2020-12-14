import React from "react";
import * as S from "./ShowBox.style";

function ShowBox({ src, title, year }) {
  return (
    <S.Box>
      <S.ImgBox src={src} alt={title} />
      <S.Title>
        {title} <S.Span>{year}</S.Span>
      </S.Title>
    </S.Box>
  );
}

export default ShowBox;
