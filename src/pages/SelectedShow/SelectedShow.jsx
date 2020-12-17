import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Section } from "../../components";
import * as S from "./SelectedShow.style";

function SelectedShow() {
  const history = useHistory();
  const { id } = useParams();
  const [show, setShow] = useState();
  const [seasons, setSeasons] = useState();
  const { seasonid } = useParams();
  console.log(seasonid);

  const [episodes, setEpisodes] = useState();
  console.log(episodes);

  //to display shows
  useEffect(() => {
    fetch(`http://localhost:8080/tvseries/${id}`)
      .then((res) => res.json())
      .then((data) => setShow(data))
      .catch((err) => console.log(err));
  }, [id]);

  //to display seasons in show
  useEffect(() => {
    fetch(`http://localhost:8080/seasons/${id}`)
      .then((res) => res.json())
      .then((data) => setSeasons(data))
      .catch((err) => console.log(err));
  }, [id]);

  //to display episodes

  useEffect(() => {
    fetch(`http://localhost:8080/seasons/${seasonid}/episodes`)
      .then((res) => res.json())
      .then((data) => setEpisodes(data))
      .catch((err) => console.log(err));
  }, [seasonid]);

  return (
    <>
      {show &&
        show.map((item) => {
          return (
            <S.ShowPage key={item.id}>
              <Section background="primary">
                <S.Heading>{item.title}</S.Heading>
              </Section>
              <S.Wallpaper background={item.wallpaper} />
              <Section background="primary">
                <S.H5>
                  <S.Span>CREATOR:</S.Span> {item.creator}
                </S.H5>
                <S.H5>
                  <S.Span>Premiered:</S.Span> {item.premiere}
                </S.H5>
                <S.H5>
                  <S.Span> Network:</S.Span> {item.network}
                </S.H5>
                <S.H4>{item.description}</S.H4>
              </Section>

              <S.SeasonsSection background="primary">
                <S.H3>Select season</S.H3>
                <S.Flex>
                  {seasons &&
                    seasons.map((season) => {
                      return (
                        <div key={season.id}>
                          <S.SeasonBox
                            onClick={() =>
                              history.push(`/shows/${item.id}/${season.id}`)
                            }
                          >
                            <S.Poster src={item.poster} alt={item.title} />
                            <S.Label>{season.season_name}</S.Label>
                          </S.SeasonBox>
                        </div>
                      );
                    })}
                </S.Flex>
              </S.SeasonsSection>
              <S.SeasonsSection background="primary">
                <S.H3>Select pisode</S.H3>
                <S.Flex>
                  {episodes &&
                    episodes.map((episode) => {
                      return (
                        <div key={episode.id}>
                          <S.SeasonBox>
                            <S.EpisodeLabel>
                              Episode: {episode.order_num}
                            </S.EpisodeLabel>
                            <S.EpisodePoster
                              src={item.wallpaper}
                              alt={item.title}
                            />
                            <S.EpisodeLabel>
                              {episode.episode_title}
                            </S.EpisodeLabel>
                          </S.SeasonBox>
                        </div>
                      );
                    })}
                </S.Flex>
              </S.SeasonsSection>
            </S.ShowPage>
          );
        })}
    </>
  );
}

export default SelectedShow;
