import styled from "styled-components";
import skull from "../../assets/skull.png";

export const CharacterBox = styled.div`
  box-sizing: border-box;
  border-radius: 5px;
  padding: 0 0.3em;
  background-color: ${({ theme }) => theme.lightGrey};
  padding-bottom: 1em;
  &:hover {
    background-color: ${({ theme }) => theme.darkGrey};
  }
  margin: 0.5em;
  width: 165px;
  height: 240px;
  @media (max-width: ${({ theme }) => theme.medium}) {
    margin: 0.5em;
    width: 120px;
    height: 180px;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 0.5em;
    width: 100px;
    height: 150px;
  }
`;

export const CharacterName = styled.h3`
  color: ${({ theme }) => theme.darkGrey};
  ${CharacterBox}:hover & {
    color: ${({ theme }) => theme.lightGrey};
  }
  font-size: smaller;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin: 0.1em;
  padding: 0.3em 0;
  @media (max-width: ${({ theme }) => theme.medium}) {
    font-size: x-small;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: xx-small;
  }
`;

export const Photo = styled.div`
  object-fit: cover;
  position: relative;
  border-radius: 5px;
  background-image: url(${(props) => props.photo});
  mask-position: center;
  mask-size: cover;
  mask-repeat: no-repeat;
  width: 100%;
  height: 85%;
  box-sizing: border-box;
  padding: 0;
`;

export const DeceasedPhoto = styled.div`
  cursor: help;
  object-fit: cover;
  position: relative;
  border-radius: 5px;
  background-image: url(${(props) => props.photo});
  mask-position: center;
  mask-size: cover;
  mask-repeat: no-repeat;
  width: 100%;
  height: 85%;
  box-sizing: border-box;
  padding: 0;
  mask-image: url(${skull}), radial-gradient(rgb(0, 0, 255, 0.7), transparent);
  &:hover {
    mask-image: unset;
  }
`;

export const CauseOf = styled.h5`
  color: ${({ theme }) => theme.darkGrey};
  padding: 2em;
  position: absolute;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.lightGrey};
`;

export const Status = styled.h5`
  text-transform: uppercase;
  color: ${({ theme }) => theme.darkGrey};
  ${CharacterBox}:hover & {
    color: ${({ theme }) => theme.lightGrey};
  }
  margin: 0;
  text-align: right;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: bolder;
  @media (max-width: ${({ theme }) => theme.medium}) {
    font-size: x-small;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: xx-small;
  }
`;

export const SPAN = styled.span`
  color: ${(props) =>
    props.color === "alive" ? props.theme.success : props.theme.error};
`;
