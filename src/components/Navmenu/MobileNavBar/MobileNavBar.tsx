'use client';
import { useEffect } from 'react';
import ToggleMenu from './ToggleMenu/ToggleMenu';
import clsx from 'clsx';
import useMobileLayout from '@/hooks/useMobileLayout';

const links = [
	{ href: '#Skills', label: 'Skills' },
	{ href: '#Projects', label: 'Projects' },
	{ href: '#Contact', label: 'Contact' },
];

const MobileNavBar = () => {
	const { openNav, setOpenNav } = useMobileLayout();

	useEffect(() => {
		if (!openNav) return;
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setOpenNav(false);
		};
		window.addEventListener('keydown', onKeyDown);
		return () => window.removeEventListener('keydown', onKeyDown);
	}, [openNav, setOpenNav]);

	return (
		<header className="lg:hidden">
			<ToggleMenu openNav={openNav} setOpenNav={setOpenNav} />

			<nav
				id="mobile-menu"
				aria-label="Main navigation"
				aria-hidden={!openNav}
				className={clsx(
					openNav
						? 'visible opacity-100'
						: 'invisible opacity-0 pointer-events-none',
					'fixed inset-0 z-30 flex flex-col items-center justify-center bg-[#181818]/95 backdrop-blur-xl transition-all duration-300 ease-in-out'
				)}
			>
				<p className="absolute top-6 left-4 text-2xl tracking-wider font-semibold">
					Portfolio.
				</p>
				<ul className="flex flex-col items-center gap-6 text-3xl font-semibold">
					{links.map(({ href, label }, index) => (
						<li
							key={href}
							style={{ transitionDelay: openNav ? `${100 + index * 70}ms` : '0ms' }}
							className={clsx(
								openNav ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
								'transition-all duration-300'
							)}
						>
							<a
								href={href}
								onClick={() => setOpenNav(false)}
								className="nav-to-section px-6 py-3"
							>
								{label}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};
export default MobileNavBar;
