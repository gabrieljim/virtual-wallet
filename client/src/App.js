import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";
import GlobalStyle from "constants/GlobalStyles";
import theme from "constants/Theme";

import MainRouter from "./screens/MainRouter";

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Router>
					<MainRouter />
				</Router>
			</ThemeProvider>
		</>
	);
}

export default App;
