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

const Register = () => {
	return (
		<Content>
			<Title>Regístrate</Title>
			<SC.FormContainer>
				<Formik initialValues={initialValues} validationSchema={validation}>
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
