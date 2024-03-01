import { useEffect, useState } from 'react';
import { GetProjectMobile } from '@/components/Projects/getProject/GetProjectMobile';
import { GetProjectDesktop } from '@/components/Projects/getProject/GetProjectDesktop';

export default function useMobileLayout() {
	const [openNav, setOpenNav] = useState<boolean>(false);
	const [windowWidth, setWindowWidth] = useState<boolean>(false);
	const [project, setProject] = useState(GetProjectMobile);

	useEffect(() => {
		window.innerWidth > 1024 ? setWindowWidth(true) : setWindowWidth(false);
		window.innerWidth > 1024
			? setProject(GetProjectDesktop)
			: setProject(GetProjectMobile);
		openNav
			? (document.body.style.overflow = 'hidden')
			: (document.body.style.overflow = 'unset');
	}, [windowWidth, openNav]);

	return {
		openNav,
		setOpenNav,
		windowWidth,
		project,
	};
}
