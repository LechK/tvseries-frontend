import styled from "styled-components";

export const ShowPage = styled.div`
  background: ${({ theme }) => theme.darkGrey};
  && Section {
    background: ${({ theme }) => theme.darkGrey};
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
