import { useState, useEffect } from "react";

export function useOS() {
	const [os, setOS] = useState("Windows");
	useEffect(() => {
		async function fetchOS() {
			try {
				if (navigator.userAgentData) {
					const uaData =
						await navigator.userAgentData.getHighEntropyValues([
							"platform",
						]);

					if (uaData.platform) {
						setOS(uaData.platform);
					}
				}
			} catch (e) {
				setOS("Windows");
			}
		}
		fetchOS();
	}, []);
	return os;
}
