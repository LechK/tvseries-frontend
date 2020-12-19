import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) =>
    props.color === "primary" ? props.theme.darkGrey : props.theme.lightGrey};
  color: ${(props) =>
    props.color === "primary" ? props.theme.lightGrey : props.theme.darkGrey};
  border-radius: 5px;
  padding: 0.5em 2em;
  border: none;
  font-weight: bolder;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.color === "primary" ? props.theme.magenta : props.theme.magenta};
    color: ${(props) =>
      props.color === "primary" ? props.theme.darkGrey : props.theme.darkGrey};
    font-weight: bolder;
  }
`;
