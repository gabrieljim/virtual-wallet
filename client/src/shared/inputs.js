import styled from "styled-components";
import { Link } from "react-router-dom"

export const TextInput = styled.input.attrs(() => ({
	type: "text"
}))`
	padding: 1rem;
	width: 100%;
	font-size: 1.5rem;
	background-color: transparent;
	border: none;
	border-bottom: 3px solid lightgray;
	transition: all 0.2s;
	outline: none;

	&:focus {
		border-bottom-color: ${props => props.theme.contrast};
	}

	@media screen and (max-width: 800px) {
		margin: 20px 0;	
	}
`;

export const Submit = styled.input.attrs(props => ({
	type: "submit",
	value: props.value
}))`
	display: block;
	padding: 1rem;
	font-size: 1.5rem;
	border: 2px solid lightgray;
	border-radius: 20px;
	background-color: ${props => props.theme.background};
	transition: 0.2s;
	margin: ${props => props.center ? "auto" : "0"};

	&:hover {
		cursor: pointer;
		border-color: ${props => props.theme.contrast};
		background-color: ${props => props.theme.contrast};
		color: ${props => props.theme.background};
	}
`;

export const GoBack = styled(Link)`
	display: block;
	padding: 1rem;
	font-size: 1.5rem;
	border: 2px solid lightgray;
	border-radius: 20px;
	background-color: ${props => props.theme.background};
	transition: 0.2s;
	margin: ${props => props.center ? "auto" : "0"};

	&:hover {
		cursor: pointer;
		border-color: ${props => props.theme.contrast};
		background-color: ${props => props.theme.contrast};
		color: ${props => props.theme.background};
	}
`
