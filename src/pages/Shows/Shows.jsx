import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Section, ShowBox } from "../../components";
import * as S from "./Shows.style";

function Shows() {
  const [series, setSeries] = useState();
  const history = useHistory();

  useEffect(() => {
    fetch(`http://localhost:8080/shows`)
      .then((res) => res.json())
      .then((data) => setSeries(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <S.TV>
      <Section>
        {series &&
          series.map((show) => {
            return (
              <ShowBox
                key={show.id}
                src={show.wallpaper}
                title={show.title}
                year={show.premiere}
                handleClick={() => history.push(`/shows/${show.id}`)}
              />
            );
          })}
      </Section>
    </S.TV>
  );
}

export default Shows;
