import React, { useState } from "react";
import * as S from "./CharacterBox.style";

function CharacterBox({ photo, fullname, type, color, causeOf }) {
  const [isShown, setIsShown] = useState(false);

  switch (type) {
    case "alive":
      return (
        <S.CharacterBox>
          <S.CharacterName>{fullname}</S.CharacterName>
          <S.Photo photo={photo} alt={fullname} />
          <S.Status>
            STATUS: <S.SPAN color={color}>ALIVE</S.SPAN>
          </S.Status>
        </S.CharacterBox>
      );
    case "deceased":
      return (
        <S.CharacterBox>
          <S.CharacterName>{fullname}</S.CharacterName>

          <S.DeceasedPhoto
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            photo={photo}
            alt={fullname}
          />

          {isShown && <S.CauseOf>{causeOf}</S.CauseOf>}
          <S.Status>
            STATUS: <S.SPAN color={color}>DECEASED</S.SPAN>
          </S.Status>
        </S.CharacterBox>
      );
    default:
      return <>cha cha cha</>;
  }
}

export default CharacterBox;
