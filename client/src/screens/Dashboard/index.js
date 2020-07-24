import React from "react";
import Title from "components/Title";
import { Content } from "shared/containers";

import Options from "./components/Options";
import { useDispatch } from "react-redux";
import { logout } from "store/authSlice";

import * as SC from "./styles";

const Dashboard = () => {
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logout());
	};

	return (
		<Content>
			<Title>¿Qué necesitas?</Title>
			<Options />
			<SC.Link onClick={handleLogout}>Cerrar sesión</SC.Link>
		</Content>
	);
};

export default Dashboard;
