import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "./SelectedShow.style";

function SelectedShow() {
  const { id } = useParams();
  const [show, setShow] = useState();

  useEffect(() => {
    fetch(`http://localhost:8080/tvseries/${id}`)
      .then((res) => res.json())
      .then((data) => setShow(data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      {show && show.id}
      <S.ShowPage>
        <S.Wallpaper src="https://walter.trakt.tv/images/shows/000/139/960/fanarts/full/cae156577f.jpg.webp" />
      </S.ShowPage>
    </>
  );
}

export default SelectedShow;
