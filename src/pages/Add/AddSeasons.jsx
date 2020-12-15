import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import { Section, TextField, Button, Notification } from "../../components";
import * as S from "./AddSeries.style";

function newSeason(
  season,
  // history,
  setNotification
) {
  fetch(`http://localhost:8080/addtvseries`, {
    method: "Post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      season: season,
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
  // const history = useHistory();

  return (
    <Section>
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
              // history,
              setNotification
            );
          }}
        >
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
    </Section>
  );
}

export default AddSeasons;
