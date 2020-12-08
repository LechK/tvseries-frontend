import styled from "styled-components";

export const Input = styled.input`
  background-color: ${({ theme }) => theme.darkGrey};
  display: block;
  width: 100%;
  border: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  padding: 0 0 0.4em;
  color: ${({ theme }) => theme.lightGrey};
  border-bottom: 2px solid ${({ theme }) => theme.magenta};

  &&:focus {
    outline: none;
    border-bottom: 2px solid ${({ theme }) => theme.lightGrey};
    width: 100%;
    transition: width 1s;
    ::placeholder {
      opacity: 0;
    }
  }
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.lightGrey};
  width: 100%;
  text-transform: uppercase;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 0.7em;
  padding-bottom: 0.4em;
  opacity: ${(props) => (props.displayLabel ? 1 : 0)};
  height: ${(props) => (props.displayLabel ? "22px" : 0)};
  line-height: ${(props) => (props.displayLabel ? "14px" : 0)};
  transition: 1s;
`;
