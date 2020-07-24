import React, { useEffect, useState } from "react";
import Loading from "shared/loading";
import { getStatus } from "services";
import { useSelector } from "react-redux";
import Title from "components/Title";
import { Content } from "shared/containers";
import * as SC from "./styles";

const Status = () => {
	const user = useSelector(state => state.auth.user);
	const [status, setStatus] = useState(false);

	useEffect(() => {
		const fetchWalletStatus = async () => {
			const data = await getStatus({
				//Se envia el documento y el telefono
				user: { document: user.document, phone: user.phone }
			});
			setStatus(parseInt(data.status));
		};
		fetchWalletStatus();
	}, [user.document, user.phone]);

	return (
		<Content>
			<Title>Su saldo actual:</Title>
			{status || status === 0 ? (
				<SC.MoneyContainer>
					<SC.Money>
						<h1>$ {status.toFixed(2)}</h1>
					</SC.Money>
				</SC.MoneyContainer>
			) : (
				<Loading />
			)}
		</Content>
	);
};

export default Status;
