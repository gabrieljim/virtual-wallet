import styled from "styled-components";
import { motion } from "framer-motion";
import * as variants from "./variants";
import { Link } from "react-router-dom";

export const OptionsContainer = styled(motion.div).attrs(() => ({
	variants: variants.container,
	initial: "hidden",
	animate: "visible"
}))`
	display: flex;
	height: 100%;
	align-items: center;
	justify-content: space-evenly;

	@media screen and (max-width: 800px) {
		flex-direction: column;
		height: auto;
	}
`;

export const Option = styled(Link)`
	color: ${props => props.theme.text};
	text-align: center;
	margin: 3rem;
	transition: transform 0.2s;

	& .icon {
		font-size: 5rem;
		color: ${props => props.theme.contrast};

		@media screen and (max-width: 800px) {
			font-size: 4rem;	
		}
	}

	&:hover {
		transform: scale(1.1);
	}

	@media screen and (max-width: 800px) {
		margin: 1.5rem;	
	}
`;

export const Text = styled.p`
	margin-top: 1.5rem;
	font-size: 2rem;

	@media screen and (max-width: 800px) {
		font-size: 1.5rem;
	}
`;
