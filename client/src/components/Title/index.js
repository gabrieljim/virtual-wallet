import React from "react";
import * as SC from "./styles";

const Title = props => {
	return (
		<SC.Text>{props.children}</SC.Text>	
	)		
}

export default Title;
