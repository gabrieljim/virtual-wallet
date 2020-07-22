import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	html {
		font-size: 16px;
	}
	
  body {
    background-color: ${props => props.theme.background};
		color: ${props => props.theme.text};
		font-family: 'Montserrat', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.text}
  }
`;

export default GlobalStyle;
