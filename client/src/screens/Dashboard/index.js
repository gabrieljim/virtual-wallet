import React from "react";
import Title from "components/Title";
import { Content } from "shared/containers";

import Options from "./components/Options";

const Dashboard = () => {
	return (
		<Content>
			<Title>¿Qué necesitas?</Title>
			<Options />
		</Content>
	);
};

export default Dashboard;
