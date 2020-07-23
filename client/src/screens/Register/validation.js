import * as Yup from "yup";

export default Yup.object({
	document: Yup.string().required("Campo requerido"),
	firstName: Yup.string().required("Campo requerido"),
	lastName: Yup.string().required("Campo requerido"),
	email: Yup.string()
		.email("Email inválido")
		.required("Campo requerido"),
	phone: Yup.number()
		.typeError("Sólo números")
		.required("Campo requerido")
});
