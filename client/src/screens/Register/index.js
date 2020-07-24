import React, { useState } from "react";
import Loading from "shared/loading";
import { Notice } from "shared/messages";
import { Redirect } from "react-router-dom";
import { authenticate } from "store/authSlice";
import Title from "components/Title";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import { Content } from "shared/containers";
import * as SC from "./styles";

import validation from "./validation";
import FormikInput from "components/FormikInput";

const initialValues = {
	document: "",
	firstName: "",
	lastName: "",
	email: "",
	phone: ""
};

const Register = () => {
	const [error, setError] = useState();
	const dispatch = useDispatch();
	const isLogged = useSelector(state => state.auth.isLogged);

	const submitHandler = async values => {
		const response = await fetch("/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accepts: "application/json"
			},
			body: JSON.stringify(values)
		});
		const data = await response.json();
		if (data.error) {
			setError(data.error);
		} else {
			dispatch(authenticate({ token: data.token, user: data.user }));
		}
	};

	if (isLogged) {
		return <Redirect to="/" />;
	}

	return (
		<Content>
			<Title>Regístrate</Title>
			<Notice condition={error}>{error}</Notice>
			<SC.FormContainer>
				<Formik
					initialValues={initialValues}
					validationSchema={validation}
					onSubmit={submitHandler}
				>
					{({ isSubmitting }) => (
						<Form>
							<FormikInput name="firstName" placeholder="Nombre" />
							<FormikInput name="lastName" placeholder="Apellido" />
							<FormikInput name="email" placeholder="Email" />
							<FormikInput name="document" placeholder="Documento" />
							<FormikInput name="phone" placeholder="Teléfono" />
							{isSubmitting ? (
								<Loading />
							) : (
								<SC.FormSubmit value="Registrarme" />
							)}
						</Form>
					)}
				</Formik>
				<SC.LinkContainer>
					<SC.ToLogin to="/login">Ya tienes cuenta?</SC.ToLogin>
				</SC.LinkContainer>
			</SC.FormContainer>
		</Content>
	);
};

export default Register;
