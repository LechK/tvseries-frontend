import styled from "styled-components";

export const ShowPage = styled.div`
  background: ${({ theme }) => theme.darkGrey};
  && Section {
    padding: 0 1em;
  }
`;
export const Wallpaper = styled.img`
  width: 100%;
  height: 60vh;
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 15%;
  @media (max-width: ${({ theme }) => theme.medium}) {
    height: 50vh;
    background-position: center;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 40vh;
    background-position: center;
  }
`;
export const Heading = styled.h1`
  color: whitesmoke;
  margin-top: 0;
  font-size: 3em;
  @media (max-width: ${({ theme }) => theme.medium}) {
    font-size: 2em;
    left: 0.7em;
    top: -0.2em;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1.5em;
    left: 0.7em;
    top: -0.2em;
  }
`;
export const H3 = styled.h3`
  padding: 0.5em 0;
  color: ${({ theme }) => theme.lightGrey};
`;
export const H5 = styled.h5`
  color: ${({ theme }) => theme.lightGrey};
  font-weight: bold;
  margin: 0.7em 0;
`;
export const H4 = styled.h4`
  color: ${({ theme }) => theme.lightGrey};
  font-weight: bold;
  padding-top: 0.5em;
  margin: 0.7em 0;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: small;
  }
`;
export const Span = styled.span`
  color: ${({ theme }) => theme.magenta};
  font-weight: normal;
  font-size: large;
`;
export const Poster = styled.img`
  width: 160px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100px;
  }
`;

export const SeasonsSection = styled.div`
  background: ${(props) =>
    props.background === "primary"
      ? props.theme.darkGrey
      : props.theme.lightGrey};
  max-width: 1280px;
  padding: 0 1em;
  margin: 0 auto;
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    justify-content: space-around;
  }
`;

export const SeasonBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  cursor: pointer;
  box-sizing: border-box;
  padding: 0.6em;
  :hover {
    background-color: ${({ theme }) => theme.lightGrey};
    border-radius: 5px;
    & Label {
      color: ${({ theme }) => theme.darkGrey};
    }
  }
`;

export const Label = styled.label`
  font-size: medium;
  color: whitesmoke;
  font-weight: bolder;
  padding-top: 0.5em;
`;
export const EpisodeLabel = styled.label`
  max-width: 100px;
  font-size: small;
  color: whitesmoke;
  font-weight: bolder;
  padding: 0.3em 0;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    max-width: 70px;
    font-size: x-small;
  }
`;

export const EpisodePoster = styled.img`
  width: 100px;
  height: 150px;
  object-fit: cover;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 70px;
    height: 90px;
  }
`;
