import { useState, useEffect } from 'react';
import { GetProjectMobile } from '@/components/Projects/getProject/GetProjectMobile';
import { GetProjectDesktop } from '@/components/Projects/getProject/GetProjectDesktop';

export default function useMobileLayout() {
	const [openNav, setOpenNav] = useState(false);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [project, setProject] = useState(GetProjectMobile);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
			window.innerWidth > 1024
				? setProject(GetProjectDesktop)
				: setProject(GetProjectMobile);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
		openNav
			? (document.body.style.overflow = 'hidden')
			: (document.body.style.overflow = 'unset');
	}, [openNav]);

	useEffect(() => {
		window.innerWidth > 1024
			? setProject(GetProjectDesktop)
			: setProject(GetProjectMobile);
	}, [windowWidth]);

	return {
		openNav,
		setOpenNav,
		windowWidth,
		project,
	};
}
