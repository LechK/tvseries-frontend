import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Notification,
  DropDownInput,
  DropDownSeason,
} from "../../components";
import * as S from "./AddSeries.style";

function newSeason(season, seriesId, setNotification) {
  fetch(`http://localhost:8080/addseasons`, {
    method: "Post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      season: season,
      seriesId: seriesId,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.msg === "User has been succesfully registered") {
        setNotification(data.msg);
      } else {
        setNotification(data.msg);
      }
    })
    .catch((err) => setNotification(err));
}

function newEpisode(episode, seasonId, setNotification) {
  fetch(`http://localhost:8080/addEpisodes`, {
    method: "Post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      episode: episode,
      seasonId: seasonId,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.msg === "User has been succesfully registered") {
        setNotification(data.msg);
      } else {
        setNotification(data.msg);
      }
    })
    .catch((err) => setNotification(err));
}

function AddSeasons() {
  const [series, setSeries] = useState([]);
  const [seriesId, setSeriesId] = useState();

  const [season, setSeason] = useState();
  const [seasonId, setSeasonId] = useState();
  const [seasonsId, setSeasonsId] = useState();

  const [episode, setEpisode] = useState();

  const [notification, setNotification] = useState();

  //selects all from tvseries to dropdown
  useEffect(() => {
    fetch(`http://localhost:8080/tvseries`)
      .then((res) => res.json())
      .then((data) => {
        setSeries(data);
        setSeriesId(data[0].id);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:8080/seasons/${seriesId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSeasonsId(data);
      })
      .catch((err) => console.log(err));
  }, [seriesId]);

  return (
    <S.StyledSection>
      <S.FormBox>
        <S.Heading>Add new Season</S.Heading>
        {notification && (
          <Notification
            color="error"
            handleChange={() => setNotification(false)}
          >
            {notification}
          </Notification>
        )}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            newSeason(
              season,
              seriesId,
              // history,
              setNotification
            );
          }}
        >
          <DropDownInput
            labelText="SELECT SHOW"
            options={series}
            handleChange={(seriesId) => setSeriesId(seriesId)}
          />
          <TextField
            type="text"
            id="season"
            name="season"
            labelText="Season"
            placeholder="Season 1"
            handleChange={(e) => setSeason(e.target.value)}
          />
          <Button type="submit">Add new Season</Button>
        </form>
      </S.FormBox>

      <S.FormBox>
        <S.Heading>Add new Episode</S.Heading>
        {notification && (
          <Notification
            color="error"
            handleChange={() => setNotification(false)}
          >
            {notification}
          </Notification>
        )}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            newEpisode(
              episode,
              seasonId,
              // history,
              setNotification
            );
          }}
        >
          <DropDownSeason
            labelText="SELECT SEASON"
            options={seasonsId}
            handleChange={(e) => setSeasonId(e.target.value)}
          />
          <TextField
            type="text"
            id="episode"
            name="episode"
            labelText="Episode"
            placeholder="1"
            handleChange={(e) => setEpisode(e.target.value)}
          />
          <Button type="submit">Add Episode</Button>
        </form>
      </S.FormBox>
    </S.StyledSection>
  );
}

export default AddSeasons;
