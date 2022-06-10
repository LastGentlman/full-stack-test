import { createGlobalStyle } from 'styled-components'

export const GlabalStyle = createGlobalStyle`
  *, html,body {
    padding: 0;
    margin: 0;
    user-select: none;
  }

  img {
    pointer-events: none;
  }
  
`;
