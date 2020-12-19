import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Section, CharacterBox, Button } from "../../components";
import * as S from "./Episode.style";

function Episode() {
  const { episodeNum } = useParams();
  const { id } = useParams();
  const { seasonId } = useParams();
  const history = useHistory();
  const [characters, setCharacters] = useState();

  //fetch to display characters by episode number
  useEffect(() => {
    fetch(
      `http://localhost:8080/shows/${id}/seasons/${seasonId}/episodes/${episodeNum}`
    )
      .then((res) => res.json())
      .then((data) => setCharacters(data))
      .catch((err) => console.log(err));
  }, [id, seasonId, episodeNum]);

  console.log(episodeNum);
  return (
    <S.Main>
      <Section>
        <S.H3>
          Check all character status on each episode! Click buttons to navigate!
        </S.H3>
        <S.EpisodeNav>
          <Button
            color="primary"
            handleClick={() =>
              history.push(
                `/shows/${id}/seasons/${seasonId}/episodes/${
                  Number(episodeNum) - Number(1)
                }`
              )
            }
          >
            Episode {Number(episodeNum) - Number(1)}
          </Button>
          <S.DisplayCurrent>
            Current episode: {Number(episodeNum)}
          </S.DisplayCurrent>
          <Button
            color="primary"
            handleClick={() =>
              history.push(
                `/shows/${id}/seasons/${seasonId}/episodes/${
                  Number(episodeNum) + Number(1)
                }`
              )
            }
          >
            Episode {Number(episodeNum) + Number(1)}
          </Button>
        </S.EpisodeNav>
        <S.CharactersSection>
          {characters &&
            characters.map((character) => {
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
