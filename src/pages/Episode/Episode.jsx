import React from "react";
import { Section, CharacterBox } from "../../components";
import * as S from "./Episode.style";

function Episode() {
  return (
    <S.Main>
      <Section>
        <S.H3>Hello Episodes!</S.H3>
        <CharacterBox />
      </Section>
    </S.Main>
  );
}

export default Episode;
