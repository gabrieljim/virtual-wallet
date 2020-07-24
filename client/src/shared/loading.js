import React from "react";
import Loader from "react-loader-spinner";
import { withTheme } from "styled-components";

const Loading = props => {
	return (
		<Loader
			type="ThreeDots"
			color={props.theme.contrast}
			height={70}
			width={70}
		/>
	);
};

export default withTheme(Loading);
