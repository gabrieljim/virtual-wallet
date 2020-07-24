import React, { useState } from "react";
import Loading from "shared/loading";
import { addFunds } from "services";
import { Notice } from "shared/messages";
import { TextInput, Submit, GoBack } from "shared/inputs";
import { useSelector } from "react-redux";
import Title from "components/Title";
import { Content } from "shared/containers";
import * as SC from "./styles";

const AddFunds = () => {
	const user = useSelector(state => state.auth.user);
	const [funds, setFunds] = useState("");
	const [response, setResponse] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const submitForm = async () => {
		if (!funds) {
			return;
		}
		setResponse(false);
		setIsSubmitting(true);
		//Se envia el documento, el telefono y el valor a cargar
		const result = await addFunds({
			user: { document: user.document, phone: user.phone, value: funds }
		});
		if (result.error) {
			setResponse(result.error);
		} else {
			setResponse(result.msg);
		}
		setIsSubmitting(false);
	};

	return (
		<Content>
			<Title>¿Cuánto va a recargar?</Title>
			<Notice condition={response}>{response}</Notice>
			<SC.FundsContainer>
				<TextInput
					value={"$ " + funds}
					onChange={e => setFunds(e.target.value.slice(2).replace(/\D/, ""))}
				/>
				{isSubmitting ? (
					<Loading />
				) : (
					<Submit onClick={submitForm} value="Recargar" />
				)}
			</SC.FundsContainer>
			<GoBack to="/">Volver</GoBack>
		</Content>
	);
};

export default AddFunds;
