import { useEffect, useState } from 'react';

export default function useMobileLayout() {
	const [openNav, setOpenNav] = useState<boolean>(false);
	const [windowWidth, setWindowWidth] = useState<boolean>(false);

	useEffect(() => {
		window.innerWidth > 1024 ? setWindowWidth(true) : setWindowWidth(false);
		openNav
			? (document.body.style.overflow = 'hidden')
			: (document.body.style.overflow = 'unset');
	}, [windowWidth, openNav]);

	return {
		openNav,
		setOpenNav,
		windowWidth,
	};
}
