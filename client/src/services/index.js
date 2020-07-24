import store from "store/store";
import { logout } from "store/authSlice";

export const protectedFetch = async (url, options = {}) => {
	const response = await fetch(url, {
		method: "POST",
		credentials: "include",
		headers: {
			"Content-Type": "application/json",
			Accepts: "application/json"
		},
		...options
	});
	const data = await response.json();
	if (data.logout) {
		store.dispatch(logout(data.logout));
	}
	return data;
};

export const getStatus = async user => {
	const data = await protectedFetch("/api/get-status", {
		body: JSON.stringify(user)
	});
	return data;
};

export const addFunds = async user => {
	const data = await protectedFetch("/api/add-funds", {
		body: JSON.stringify(user)
	});
	return data;
};

export const pay = async user => {
	const data = await protectedFetch("/api/pay", {
		body: JSON.stringify(user)
	});
	return data;
};

export const confirmPay = async user => {
	const data = await protectedFetch("/api/confirm-pay", {
		body: JSON.stringify(user)
	});
	return data;
};
