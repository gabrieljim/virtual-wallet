import React, { useState } from "react";
import Loading from "shared/loading";
import { Notice } from "shared/messages";
import { Redirect } from "react-router-dom";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "store/authSlice";
import Title from "components/Title";
import * as SC from "./styles";

import validation from "./validation";
import FormikInput from "components/FormikInput";

const initialValues = {
	email: ""
};

const Login = () => {
	const serverError = useSelector(state => state.auth.error);
	const [error, setError] = useState();
	const dispatch = useDispatch();
	const isLogged = useSelector(state => state.auth.isLogged);

	const submitHandler = async (values, dispatch) => {
		const response = await fetch("/api/login", {
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
		<SC.LoginContent>
			<Title>Inicia Sesión</Title>
			<Notice condition={error}>{error}</Notice>
			<Notice condition={serverError}>{serverError}</Notice>
			<SC.FormContainer>
				<Formik
					initialValues={initialValues}
					validationSchema={validation}
					onSubmit={values => submitHandler(values, dispatch)}
				>
					{({ isSubmitting }) => (
						<Form>
							<FormikInput name="email" placeholder="Email" />
							{isSubmitting ? (
								<Loading />
							) : (
								<SC.FormSubmit value="Iniciar sesión" />
							)}
						</Form>
					)}
				</Formik>
				<SC.ToRegister to="/register">
					No tienes cuenta? Hazte una!
				</SC.ToRegister>
			</SC.FormContainer>
		</SC.LoginContent>
	);
};

export default Login;
