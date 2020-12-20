import { storiesOf } from "@storybook/react";
import React from "react";
import CharacterBox from "./CharacterBox";
import theme from "../../theme";
import { ThemeProvider } from "styled-components";

storiesOf("CharacterBox", module)
  .add("Alive Box", () => (
    <ThemeProvider theme={theme}>
      <CharacterBox
        type="alive"
        color="alive"
        fullname="Jon Snow"
        photo="https://static.wikia.nocookie.net/gameofthrones/images/d/d0/JonSnow8x06.PNG"
      />
    </ThemeProvider>
  ))
  .add("Deceased Box", () => (
    <ThemeProvider theme={theme}>
      <CharacterBox
        type="deceased"
        causeOf="SIMPLE DIEDED"
        color="deceased"
        fullname="Jon Snow"
        photo="https://static.wikia.nocookie.net/gameofthrones/images/d/d0/JonSnow8x06.PNG"
      />
    </ThemeProvider>
  ));
