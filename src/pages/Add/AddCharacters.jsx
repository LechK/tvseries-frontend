import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Notification,
  DropDownInput,
} from "../../components";
import * as S from "./AddSeries.style";

function newCharacter(
  fullname,
  seriesId,
  appearedAt,
  vanishedAt,
  causeOf,
  photoURL,
  setNotification
) {
  fetch(`http://localhost:8080/addCharacters`, {
    method: "Post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      fullname: fullname,
      seriesId: seriesId,
      appearedAt: appearedAt,
      vanishedAt: vanishedAt,
      causeOf: causeOf,
      photoURL: photoURL,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.msg) {
        setNotification(data.msg);
      } else {
        setNotification(data.msg);
      }
    })
    .catch((err) => setNotification(err));
}

function AddCharacters() {
  const [series, setSeries] = useState([]);
  const [seriesId, setSeriesId] = useState();

  const [fullname, setFullname] = useState();
  const [appearedAt, setAppearedAt] = useState(null);
  const [vanishedAt, setVanishedAt] = useState(null);
  const [causeOf, setCauseOf] = useState();
  const [photoURL, setPhotoURL] = useState();

  const [notification, setNotification] = useState();

  useEffect(() => {
    fetch(`http://localhost:8080/shows`)
      .then((res) => res.json())
      .then((data) => {
        setSeries(data);
        setSeriesId(data[0].id);
      });
  }, []);

  return (
    <S.StyledSection>
      <S.FormBox>
        <S.Heading>Add new Character to the Show</S.Heading>
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
            newCharacter(
              fullname,
              seriesId,
              appearedAt,
              vanishedAt,
              causeOf,
              photoURL,
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
            id="fullname"
            name="fullname"
            labelText="Fullname"
            placeholder="John Snow"
            handleChange={(e) => setFullname(e.target.value)}
          />

          <TextField
            type="number"
            id="appearedAt"
            name="appearedAt"
            labelText="Appeared at episode number"
            placeholder="1"
            handleChange={(e) => setAppearedAt(e.target.value)}
          />
          <TextField
            type="number"
            id="vanishedAt"
            name="vanishedAt"
            labelText="Dissappeared or died episode number"
            placeholder="45"
            handleChange={(e) => setVanishedAt(e.target.value)}
          />
          <TextField
            type="text"
            id="causeOf"
            name="causeOf"
            labelText="Cause of Death (if alive, write alive)"
            placeholder="Killed by Lannisters"
            handleChange={(e) => setCauseOf(e.target.value)}
          />
          <TextField
            type="text"
            id="photoURL"
            name="photoURL"
            labelText="Photo url"
            placeholder="http://johnsnow.jpg"
            handleChange={(e) => setPhotoURL(e.target.value)}
          />
          <Button type="submit">Add new Character</Button>
        </form>
      </S.FormBox>
    </S.StyledSection>
  );
}

export default AddCharacters;
