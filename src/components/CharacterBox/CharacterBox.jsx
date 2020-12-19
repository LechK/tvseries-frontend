import React from "react";
import * as S from "./CharacterBox.style";

function CharacterBox({ photo, fullname, causeOf }) {
  return (
    <S.CharacterBox>
      <S.CharacterName>{fullname}</S.CharacterName>
      <S.Photo src={photo} alt={fullname} />
      <S.Status>{causeOf}</S.Status>
    </S.CharacterBox>
  );
}

export default CharacterBox;
