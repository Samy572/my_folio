'use client';
import { useEffect, useState } from 'react';
import ToggleMenu from './ToggleMenu/ToggleMenu';
import clsx from 'clsx';
import useMobileLayout from '@/hooks/useMobileLayout';

const MobileNavBar = () => {
	const { openNav, setOpenNav } = useMobileLayout();

	return (
		<header className="w-full overflow-hidden  lg:hidden  ">
			<ToggleMenu openNav={openNav} setOpenNav={setOpenNav} />

			<ul
				className={clsx(
					openNav
						? 'flexbg-slate-600 translate-y-0  z-30 h-[50vh] fixed  top-0 left-0 '
						: 'translate-y-[-120%] z-30 h-[110vh] fixed left-0',
					'transition-all duration-300 ease-in-out  flex-col gap-5 justify-center lg:text-xl w-full  backdrop-blur-2xl flex items-start  text-xl px-7 space-y-3 '
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
