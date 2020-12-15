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
      {show &&
        show.map((item) => {
          return (
            <S.ShowPage>
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
              {/* unfinished with season fetch */}
              <Section>
                <S.H3>Select season</S.H3>
                <S.Poster src={item.poster} alt={item.title} />
                <S.Poster src={item.poster} alt={item.title} />
                <S.Poster src={item.poster} alt={item.title} />
                <S.Poster src={item.poster} alt={item.title} />
                <S.Poster src={item.poster} alt={item.title} />
                <S.Poster src={item.poster} alt={item.title} />
              </Section>
            </S.ShowPage>
          );
        })}
    </>
  );
}

export default SelectedShow;
