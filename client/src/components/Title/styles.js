import styled from "styled-components";
import { motion } from "framer-motion"
import titleVariants from "./variants";

export const Text = styled(motion.h1).attrs(() => ({
	variants: titleVariants,
	initial: "hidden",
	animate: "visible"
}))`
	font-size: 2.5rem;
`
