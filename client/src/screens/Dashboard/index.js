import React from "react";
import * as SC from "./styles";

import Options from "./components/Options";

const Dashboard = () => {
	return (
		<SC.Content>
			<h1>¿Qué necesitas?</h1>	
			<Options />
		</SC.Content>
	)		
}

export default Dashboard;
