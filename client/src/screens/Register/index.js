import React from "react";
import Title from "components/Title";
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
};

const Register = () => {
	return (
		<Content>
			<Title>Regístrate</Title>
			<SC.FormContainer>
				<Formik
					initialValues={initialValues}
					validationSchema={validation}
					onSubmit={submitHandler}
				>
					<Form>
						<FormikInput name="firstName" placeholder="Nombre" />
						<FormikInput name="lastName" placeholder="Apellido" />
						<FormikInput name="email" placeholder="Email" />
						<FormikInput name="document" placeholder="Documento" />
						<FormikInput name="phone" placeholder="Teléfono" />
						<SC.FormSubmit value="Registrarme" />
					</Form>
				</Formik>
			</SC.FormContainer>
		</Content>
	);
};

export default Register;
