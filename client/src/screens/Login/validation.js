import * as Yup from "yup";

export default Yup.object({
	email: Yup.string()
		.email("Email inválido")
		.required("Campo requerido"),
});
