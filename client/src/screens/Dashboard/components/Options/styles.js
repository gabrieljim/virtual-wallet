import styled from "styled-components";
import { Link } from "react-router-dom";

export const OptionsContainer = styled.div`
	display: flex;
	height: 100%;
	align-items: center;
	justify-content: space-evenly;
`;

export const Option = styled(Link)`
	color: ${props => props.theme.text};
	text-align: center;
	margin: 3rem;
	transition: transform 0.2s;

	& .icon {
		font-size: 5rem;
		color: ${props => props.theme.contrast};
	}

	&:hover {
		transform: scale(1.1);
	}
`;

export const Text = styled.p`
	margin-top: 1.5rem;
	font-size: 2rem;
`;
