import React, { useState } from "react";
import { Notice } from "shared/messages";
import Loading from "shared/loading";
import Title from "components/Title";
import { useSelector } from "react-redux";
import { TextInput, Submit, GoBack } from "shared/inputs";
import { Content } from "shared/containers";
import * as SC from "./styles";
import { pay } from "services";
import ConfirmPay from "./ConfirmPay";

const Pay = () => {
	const user = useSelector(state => state.auth.user);
	const [payment, setPayment] = useState("");
	const [error, setError] = useState(false);
	const [paymentSent, setPaymentSent] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const submitForm = async () => {
		if (!payment || parseInt(payment) < 1) {
			return;
		}
		setError(false);
		setIsSubmitting(true);
		//Se envia el email del usuario y el valor a pagar
		const data = await pay({
			user: {
				value: payment,
				email: user.email
			}
		});
		if (data.error) {
			setError(data.error);
		} else {
			setPaymentSent(true);
		}
		setIsSubmitting(false);
	};

	if (paymentSent) {
		return <ConfirmPay user={user} payment={payment} />;
	}

	return (
		<Content>
			<Title>¿Cuánto pagará?</Title>
			<Notice condition={error}>{error}</Notice>
			<SC.PaymentContainer>
				<TextInput
					value={"$ " + payment}
					onChange={e => setPayment(e.target.value.slice(2).replace(/\D/, ""))}
				/>
				{isSubmitting ? (
					<Loading />
				) : (
					<Submit onClick={submitForm} value="Pagar" />
				)}
			</SC.PaymentContainer>
			<GoBack to="/">Volver</GoBack>
		</Content>
	);
};

export default Pay;
