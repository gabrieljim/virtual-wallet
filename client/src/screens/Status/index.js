import React from "react";
import { Content } from "shared/containers";
import * as SC from "./styles";

const Status = () => {
	return (
		<Content>
			<h1>Su saldo actual:</h1>
			<SC.MoneyContainer>
				<SC.Money>
					<h1>$ 50.00</h1>
				</SC.Money>
			</SC.MoneyContainer>
		</Content>
	);
};

export default Status;
