import styled from "styled-components";
import { Submit } from "shared/inputs";

export const FormContainer = styled.div`
	width: 60%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media screen and (max-width: 800px) {
		width: 100%;	
	}
`

export const FormSubmit = styled(Submit)`
	margin: 2rem auto 0 auto;
`
