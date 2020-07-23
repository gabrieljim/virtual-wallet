import React from "react";
import { Formik, Form } from "formik";
import Title from "components/Title";
import * as SC from "./styles";

import validation from "./validation";
import FormikInput from "components/FormikInput";

const initialValues = {
	email: "",
};

const Login = () => {
	return (
		<SC.LoginContent>
			<Title>Inicia Sesión</Title>
			<SC.FormContainer>
				<Formik initialValues={initialValues} validationSchema={validation}>
					<Form>
						<FormikInput name="email" placeholder="Email" />
						<SC.FormSubmit value="Iniciar Sesión" />
					</Form>
				</Formik>
			</SC.FormContainer>
		</SC.LoginContent>
	);
};

export default Login;
