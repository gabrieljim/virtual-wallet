import styled from "styled-components";
import { Link } from "react-router-dom";
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

	@media screen and (max-height: 700px) {
		height: auto;	
	}
`

export const LinkContainer = styled.div`
	margin: 2rem auto 4rem auto;
	text-align: center;
`

export const ToLogin = styled(Link)`
	color: ${props => props.theme.text};

	&:hover {
		text-decoration: underline;
		color: ${props => props.theme.contrast};
	}
`

export const FormSubmit = styled(Submit)`
	margin: 2rem auto;
`
