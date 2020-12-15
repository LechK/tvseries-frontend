import styled from "styled-components";

export const Section = styled.section`
  background: ${(props) =>
    props.background === "primary"
      ? props.theme.darkGrey
      : props.theme.lightGrey};
  max-width: 1280px;
  margin: 0 auto;
`;
