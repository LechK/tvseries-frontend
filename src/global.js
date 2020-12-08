import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle` 
  body {    
    background: ${({ theme }) => theme.lightGrey};
    color: ${({ theme }) => theme.darkGrey};    
    text-rendering: optimizeLegibility;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;  
  }
`;
