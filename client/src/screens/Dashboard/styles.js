import styled from "styled-components";

export const Link = styled.p`
	font-size: 1.3rem;
	color: ${props => props.theme.contrast};

	&:hover {
		cursor: pointer;
		text-decoration: underline;
	}

	@media screen and (max-width: 800px) {
		margin-top: 3rem;	
	}
`
