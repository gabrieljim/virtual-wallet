import React from "react";
import Title from "components/Title";
import { Content } from "shared/containers";
import * as SC from "./styles";

const Status = () => {
	return (
		<Content>
			<Title>Su saldo actual:</Title>
			<SC.MoneyContainer>
				<SC.Money>
					<h1>$ 50.00</h1>
				</SC.Money>
			</SC.MoneyContainer>
		</Content>
	);
};

export default Status;
