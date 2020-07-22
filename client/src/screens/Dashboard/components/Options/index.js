import React from "react";
import { GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";
import { FaMoneyBillWave } from "react-icons/fa";

import * as SC from "./styles";

const Options = () => {
	return (
		<SC.OptionsContainer>
			<SC.Option to="/add-funds">
				<GiReceiveMoney className="icon" />
				<SC.Text>Recargar</SC.Text>
			</SC.Option>
			<SC.Option to="/pay">
				<GiTakeMyMoney className="icon" />
				<SC.Text>Pagar</SC.Text>
			</SC.Option>
			<SC.Option to="status">
				<FaMoneyBillWave className="icon" />
				<SC.Text>Consultar</SC.Text>
			</SC.Option>
		</SC.OptionsContainer>
	);
};

export default Options;
