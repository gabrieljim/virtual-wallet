import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components/macro";

import Dashboard from "./Dashboard";
import Pay from "./Pay";
import AddFunds from "./AddFunds";
import Status from "./Status";
import MailSent from "./MailSent";

const Content = styled.div`
	width: 100%;
	height: 100vh;
	padding: 4rem;
`;

const MainRouter = () => {
	return (
		<Content>
			<Switch>
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
		</Content>
	);
};

export default MainRouter;
