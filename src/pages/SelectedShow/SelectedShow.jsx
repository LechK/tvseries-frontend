import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Section } from "../../components";
import * as S from "./SelectedShow.style";

function SelectedShow() {
  const history = useHistory();
  const { id } = useParams();
  console.log(id);
  const { seasonId } = useParams();
  const { episodeId } = useParams();

  const [show, setShow] = useState();
  const [seasons, setSeasons] = useState();
  const [episodes, setEpisodes] = useState();

  //TO DISPLAY SINGLE SHOW FROM ALL SHOWS BY ID
  useEffect(() => {
    fetch(`http://localhost:8080/shows/${id}`)
      .then((res) => res.json())
      .then((data) => setShow(data))
      .catch((err) => console.log(err));
  }, [id]);

  //TO DISPLAY ALL SEASONS BY SHOW ID
  useEffect(() => {
    fetch(`http://localhost:8080/shows/${id}/seasons`)
      .then((res) => res.json())
      .then((data) => {
        setSeasons(data);
        setSeasons(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  //TO DISPLAY ALL EPISODES BY SEASON ID
  useEffect(() => {
    fetch(`http://localhost:8080/shows/id/seasons/${seasonId}/episodes`)
      .then((res) => res.json())
      .then((data) => setEpisodes(data))
      .catch((err) => console.log(err));
  }, [seasonId]);

  useEffect(() => {
    fetch(
      `http://localhost:8080/shows/id/seasons/seasonId/episodes/${episodeId}`
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, [episodeId]);

  return (
    <S.Page>
      {show &&
        show.map((item) => {
          return (
            <S.ShowPage key={item.id}>
              {/* displayed show section */}
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
                              history.push(
                                `/shows/${item.id}/seasons/${season.id}/episodes`
                              )
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
              <S.EpisodeSection background="primary">
                <S.H3>Select episode</S.H3>
                <S.Flex>
                  {episodes &&
                    episodes.map((episode) => {
                      return (
                        <div key={episode.id}>
                          <S.EpisodeBox
                            onClick={() =>
                              history.push(
                                `/shows/${item.id}/seasons/${seasonId}/episodes/${episode.order_num}`
                              )
                            }
                          >
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
                          </S.EpisodeBox>
                        </div>
                      );
                    })}
                </S.Flex>
              </S.EpisodeSection>
            </S.ShowPage>
          );
        })}
    </S.Page>
  );
}

export default SelectedShow;
