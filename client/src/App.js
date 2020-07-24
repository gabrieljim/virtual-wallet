import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Provider } from "react-redux";
import store from "store/store";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";
import GlobalStyle from "constants/GlobalStyles";
import theme from "constants/Theme";

import MainRouter from "screens/MainRouter";

function App() {
	return (
		<>
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<GlobalStyle />
					<Router>
						<MainRouter />
					</Router>
				</ThemeProvider>
			</Provider>
		</>
	);
}

export default App;
