import React, { useState } from "react";
import { TextInput, Submit } from "shared/inputs";
import { Content } from "shared/containers";
import * as SC from "./styles";

const AddFunds = () => {
	const [funds, setFunds] = useState("");

	const submitForm = () => {
		if (funds) {
			console.log(funds);
		}
	};

	return (
		<Content>
			<h1>¿Cuánto va a recargar?</h1>
			<SC.FundsContainer>
				<TextInput
					value={"$ " + funds}
					onChange={e => setFunds(e.target.value.slice(2).replace(/\D/, ""))}
				/>
				<Submit onClick={submitForm} value="Recargar" />
			</SC.FundsContainer>
		</Content>
	);
};

export default AddFunds;