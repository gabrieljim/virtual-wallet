import React, { useState } from "react";
import { TextInput, Submit } from "shared/inputs";
import { Content } from "shared/containers";
import * as SC from "./styles";

const Pay = () => {
	const [payment, setPayment] = useState("");

	const submitForm = () => {
		if (payment) {
			console.log(payment);
		}
	};

	return (
		<Content>
			<h1>¿Cuánto pagará?</h1>
			<SC.PaymentContainer>
				<TextInput
					value={"$ " + payment}
					onChange={e => setPayment(e.target.value.slice(2).replace(/\D/, ""))}
				/>
				<Submit onClick={submitForm} value="Pagar" />
			</SC.PaymentContainer>
		</Content>
	);
};

export default Pay;
