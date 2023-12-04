'use client';
import { useEffect, useState } from 'react';
import ToggleMenu from './ToggleMenu/ToggleMenu';
import clsx from 'clsx';

const MobileNavBar = () => {
	const [openNav, setOpenNav] = useState(false);

	useEffect(() => {
		if (openNav) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	});

	return (
		<header className="w-full overflow-hidden  lg:hidden  ">
			<ToggleMenu openNav={openNav} setOpenNav={setOpenNav} />
			<ul
				className={clsx(
					openNav
						? 'flexbg-slate-600 translate-x-0  z-30 h-[105vh] fixed top-0 left-0 '
						: 'translate-x-[-120%] z-30 h-[105vh] fixed top-0 left-0',
					'transition-all duration-500  flex-col gap-5 justify-center lg:text-xl w-full  bg-primary   p-0 flex items-start  text-xl px-7 space-y-3'
				)}
			>
				<li onClick={() => setOpenNav(false)} className="w-50 ">
					<a href="#Skills">Skills</a>
				</li>
				<li onClick={() => setOpenNav(false)} className="w-50">
					<a href="#Projects">Projects</a>
				</li>
				<li onClick={() => setOpenNav(false)} className="w-50">
					<a href="#Contact">Contact</a>
				</li>
			</ul>
		</header>
	);
};
export default MobileNavBar;
