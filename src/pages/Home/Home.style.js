import styled from "styled-components";

export const Main = styled.div`
  background-image: url("https://eskipaper.com/images/awesome-game-of-thrones-wallpaper-1.jpg");
  background-position: bottom;
  min-height: calc(100vh - 194px);
  padding: 0 2em;
  background-color: ${({ theme }) => theme.darkGrey};
  @media (max-width: ${({ theme }) => theme.medium}) {
    padding: 0 1em;
    background-position-x: 10%;
    background-position-y: 40%;
    background-size: cover;
    min-height: calc(100vh - 195px);
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 0 1em;
    background-position-x: 10%;
    background-position-y: 73%;
    background-size: cover;
    min-height: calc(100vh - 155px);
  }
`;
export const Section = styled.section`
  max-width: 1280px;
  margin: 0 auto;
`;

export const Heading = styled.h1`
  margin-top: 0;
  padding-top: 1em;
  color: ${({ theme }) => theme.darkGrey};
  @media (max-width: ${({ theme }) => theme.medium}) {
    font-size: 1em;
  }
`;

export const Message = styled.div`
  color: ${({ theme }) => theme.darkGrey};
  font-size: x-large;
  font-weight: normal;
  @media (max-width: ${({ theme }) => theme.medium}) {
    font-size: 1em;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1em;
  }
`;

export const Span = styled.span`
  color: rgb(191, 45, 191);
  text-decoration: none;
`;

export const Wallpaper = styled.img`
  height: 80vh;
`;
