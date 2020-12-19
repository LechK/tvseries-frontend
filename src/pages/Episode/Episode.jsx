import React, { useEffect, useState } from "react";
import { Section, CharacterBox } from "../../components";
import * as S from "./Episode.style";

function Episode() {
  const [episodeOrderNumber, setEpisodeOrderNumber] = useState();

  useEffect(() => {
    fetch(
      `http://localhost:8080/shows/id/seasons/seasonId/episodes/${episodeOrderNumber}`
    )
      .then((res) => res.json())
      .then((data) => setEpisodeOrderNumber(data))
      .catch((err) => console.log(err));
  }, [episodeOrderNumber]);

  return (
    <S.Main>
      <Section>
        <S.H3>Check all character status on each episode!</S.H3>
        <S.CharactersSection>
          {episodeOrderNumber &&
            episodeOrderNumber.map((character) => {
              return (
                <div key={character.id}>
                  <CharacterBox
                    fullname={character.fullname}
                    photo={character.photo}
                  />
                </div>
              );
            })}
        </S.CharactersSection>
      </Section>
    </S.Main>
  );
}

export default Episode;
