import styled from "styled-components";

export const MoneyContainer = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
`

export const Money = styled.div`
	background-color: ${props => props.theme.text};
	font-size: 2.5rem;

	&:hover {
		background-color: transparent;
	}
`;
