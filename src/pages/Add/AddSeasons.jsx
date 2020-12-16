import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import {
  TextField,
  Button,
  Notification,
  DropDownInput,
} from "../../components";
import * as S from "./AddSeries.style";

function newSeason(
  season,
  seriesId,
  // history,
  setNotification
) {
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
        // history.push("/addSeasons");
      } else {
        setNotification(data.msg);
      }
    })
    .catch((err) => setNotification(err));
}

function AddSeasons() {
  const [season, setSeason] = useState();
  const [notification, setNotification] = useState();
  const [series, setSeries] = useState();
  const [seriesId, setSeriesId] = useState();
  // const history = useHistory();

  useEffect(() => {
    fetch(`http://localhost:8080/tvseries`)
      .then((res) => res.json())
      .then((data) => {
        setSeries(data);
      });
  }, []);

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
            handleChange={(e) => setSeriesId(e.target.value)}
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
      <S.LinkContainer>
        <S.StyledLink to="/addEpisodes">
          Already added all seasons? <strong>Add episodes</strong>.
        </S.StyledLink>
      </S.LinkContainer>
    </S.StyledSection>
  );
}

export default AddSeasons;
