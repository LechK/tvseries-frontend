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
  const [maxNumber, setMaxNumber] = useState();

  //fetch to display characters by episode number
  useEffect(() => {
    fetch(
      `http://localhost:8080/shows/${id}/seasons/${seasonId}/episodes/${episodeNum}`
    )
      .then((res) => res.json())
      .then((data) => setCharacters(data))
      .catch((err) => console.log(err));
  }, [id, seasonId, episodeNum]);

  //GET FOR MAX EPISODE NUMBER
  useEffect(() => {
    fetch(`http://localhost:8080/max/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const max = data[0].max;
        setMaxNumber(max);
      })
      .catch((err) => console.log(err));
  }, [id]);

  function hideButton() {
    if (maxNumber > episodeNum) {
      return (
        <Button
          color="secondary"
          handleClick={() => {
            history.push(
              `/shows/${id}/seasons/${seasonId}/episodes/${
                Number(episodeNum) + Number(1)
              }`
            );
          }}
        >
          Episode {Number(episodeNum) + Number(1)}
        </Button>
      );
    }
  }

  function hideLeftButton() {
    if (episodeNum >= 2) {
      return (
        <Button
          color="secondary"
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
      );
    }
  }

  return (
    <S.Main>
      <Section background="primary">
        <S.H3>
          Check all characters' status on each episode! Click buttons to
          navigate!
        </S.H3>
        <S.EpisodeNav>
          {hideLeftButton()}
          <S.DisplayCurrent>
            Current episode: {Number(episodeNum)}
          </S.DisplayCurrent>
          {hideButton()}
        </S.EpisodeNav>
        <S.CharactersSection>
          {characters &&
            characters.map((character) => {
              if (character.vanished_at <= episodeNum) {
                return (
                  <div key={character.id}>
                    <CharacterBox
                      type="deceased"
                      causeOf={character.cause_of}
                      alt={character.fullname}
                      fullname={character.fullname}
                      photo={character.photo}
                    />
                  </div>
                );
              } else {
                return (
                  <div key={character.id}>
                    <CharacterBox
                      color="alive"
                      type="alive"
                      fullname={character.fullname}
                      alt={character.fullname}
                      photo={character.photo}
                    />
                  </div>
                );
              }
            })}
        </S.CharactersSection>
      </Section>
    </S.Main>
  );
}

export default Episode;
