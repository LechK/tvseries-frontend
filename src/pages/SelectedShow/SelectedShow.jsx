import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Section } from "../../components";
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
        <Section>
          <S.Heading>The Boys</S.Heading>
        </Section>
        <S.Wallpaper background="https://walter.trakt.tv/images/shows/000/139/960/fanarts/full/cae156577f.jpg.webp" />
        <Section>
          <S.H5>
            <S.Span>CREATOR:</S.Span> Simon Rabbits
          </S.H5>
          <S.H5>
            <S.Span>Premiered:</S.Span> 2019
          </S.H5>
          <S.H5>
            <S.Span> Network:</S.Span> HBO
          </S.H5>
          <S.H4>
            Description: Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sit deleniti at neque accusamus ipsa harum repellendus, nisi
            error sapiente quas laborum exercitationem dolorem quia repudiandae
            error sapiente quas laborum exercitationem dolorem quia repudiandae
            error sapiente quas laborum exercitationem dolorem quia repudiandae
            error sapiente quas laborum exercitationem dolorem quia repudiandae
          </S.H4>
          <img src="" alt="" />
        </Section>
      </S.ShowPage>
    </>
  );
}

export default SelectedShow;
