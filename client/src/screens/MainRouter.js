import React from "react";
import { useSelector } from "react-redux";
import {
	Route,
	Redirect,
	Switch,
	useLocation
} from "react-router-dom";
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

const ProtectedRoute = ({ component: Component, ...rest }) => {
	const isLogged = useSelector(state => state.auth.isLogged);
	return isLogged ? (
		<Route {...rest}>
			<Component />
		</Route>
	) : (
		<Redirect to="/login" />
	);
};

const MainRouter = () => {
	const location = useLocation();

	return (
		<Content>
			<Switch location={location} key={location.pathname}>
				<Route path="/register">
					<Register />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<ProtectedRoute exact path="/" component={Dashboard} />
				<ProtectedRoute path="/add-funds" component={AddFunds} />
				<ProtectedRoute path="/pay" component={Pay} />
				<ProtectedRoute path="/status" component={Status} />
				<ProtectedRoute path="/mail-sent" component={MailSent} />
			</Switch>
		</Content>
	);
};

export default MainRouter;
