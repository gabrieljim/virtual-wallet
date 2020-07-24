import styled from "styled-components";
import { motion } from "framer-motion";

export const Notice = styled(motion.p).attrs(props => ({
	variants: {
		hidden: {
			opacity: 0,
			y: -100
		},
		visible: {
			opacity: 1,
			y: 0
		}
	},
	animate: props.condition ? "visible" : "hidden"
}))`
	color: ${props => props.theme.contrast};
	font-size: 1.2rem;
	margin: 10px 0;
`;
