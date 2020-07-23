import styled from "styled-components";
import { Submit } from "shared/inputs";
import { Content } from "shared/containers";

export const LoginContent = styled(Content)`
	justify-content: flex-start;
`

export const FormContainer = styled.div`
	width: 60%;
	margin: 5rem 0;

	@media screen and (max-width: 800px) {
		width: 100%;	
	}
`

export const FormSubmit = styled(Submit)`
	margin: 2rem auto 0 auto;
`
