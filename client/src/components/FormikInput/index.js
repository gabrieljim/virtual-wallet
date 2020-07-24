import React from "react";
import { TextInput } from "shared/inputs";
import { useField } from "formik";
import { Notice } from "shared/messages";
import * as SC from "./styles";

const FormikInput = props => {
	const [field, meta] = useField(props);

	const shouldShow = meta.touched && meta.error;
	return (
		<SC.Container>
			<TextInput {...field} {...props} />
			<Notice condition={shouldShow}>{meta.error}</Notice>
		</SC.Container>
	);
};

export default FormikInput;
