import React, { useState } from "react";
import { Notice } from "shared/messages";
import { Redirect } from "react-router-dom";
import Loading from "shared/loading";
import { TextInput, Submit } from "shared/inputs";
import { Content } from "shared/containers";
import * as SC from "./styles";

import { confirmPay } from "services";

const ConfirmPay = props => {
	const [token, setToken] = useState("");
	const [error, setError] = useState(false);
	const [paymentDone, setPaymentDone] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const submitForm = async () => {
		if (!token) {
			return;
		}
		setIsSubmitting(true);
		const data = await confirmPay({
			user: {
				value: props.payment,
				email: props.user.email,
				token
			}
		});
		if (data.error) {
			setError(data.error);
			setIsSubmitting(false);
		} else {
			setPaymentDone(true);
		}
	};

	if (paymentDone) {
		return <Redirect to="/status" />;
	}

	return (
		<Content>
			<SC.Notice>
				Se le ha enviado un token a su correo, ingréselo para confirmar su
				compra
			</SC.Notice>
			<Notice condition={error}>{error}</Notice>
			<TextInput value={token} onChange={e => setToken(e.target.value)} />
			{isSubmitting ? (
				<Loading />
			) : (
				<Submit onClick={submitForm} value="Confirmar" />
			)}
		</Content>
	);
};

export default ConfirmPay;
