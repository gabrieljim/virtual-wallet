import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components/macro";

import Register from "./Register";
import Login from "./Login";
import Dashboard from "./Dashboard";
import AddFunds from "./AddFunds";
import Pay from "./Pay";
import Status from "./Status";
import MailSent from "./MailSent";

const Content = styled.div`
	width: 100%;
	height: 100vh;
	padding: 4rem;

	@media screen and (max-width: 800px) {
		height: auto;	
	}
`;

const MainRouter = () => {
	const location = useLocation();

	return (
		<Content>
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.pathname}>
					<Route exact path="/register">
						<Register />
					</Route>
					<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path="/">
						<Dashboard />
					</Route>
					<Route path="/add-funds">
						<AddFunds />
					</Route>
					<Route path="/pay">
						<Pay />
					</Route>
					<Route path="/status">
						<Status />
					</Route>
					<Route path="/mail-sent">
						<MailSent />
					</Route>
				</Switch>
			</AnimatePresence>
		</Content>
	);
};

export default MainRouter;
