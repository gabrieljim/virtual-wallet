import styled from "styled-components";
import { motion } from "framer-motion";

export const Content = styled(motion.div).attrs(() => ({
	variants: {
		hidden: {
			opacity: 0
		},
		visible: {
			opacity: 1
		}
	},
	initial: "hidden",
	animate: "visible",
	exit: {
		x: -100,
		opacity: 0,
		transition: { ease: "easeInOut" }
	}
}))`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	text-align: center;
`;
