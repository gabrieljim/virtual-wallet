import React from "react";
import { TextInput } from "shared/inputs";
import { useField } from "formik";
import { FormError } from "shared/messages";
import * as SC from "./styles";

const FormikInput = props => {
	const [field, meta] = useField(props);
	return (
		<SC.Container>
			<TextInput {...field} {...props} />
			{meta.touched && meta.error ? <FormError>{meta.error}</FormError> : null}
		</SC.Container>
	);
};

export default FormikInput;
