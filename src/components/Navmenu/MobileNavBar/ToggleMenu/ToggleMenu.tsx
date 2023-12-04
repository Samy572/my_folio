'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type Props = {
	openNav: boolean;
	setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
};

const ToggleMenu = ({ openNav, setOpenNav }: Props) => {
	// Watch scroll position
	const [scrolling, setScrolling] = useState(false);
	const [scrollTop, setScrollTop] = useState(0);

	useEffect(() => {
		const onScroll = (e: any) => {
			setScrollTop(e.target.documentElement.scrollTop);
			setScrolling(e.target.documentElement.scrollTop > scrollTop);
		};
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, [scrollTop]);

	return (
		<>
			{scrolling === false ? (
				<button
					onClick={() => setOpenNav(!openNav)}
					className=" cursor-pointer z-50"
					role="button"
				>
					<Image
						className={clsx(
							openNav ? 'opacity-0' : 'opacity-1 ',
							'transition-opacity duration-500 fixed  right-5 top-8  z-50  '
						)}
						src={'/asset/svg/burger.svg'}
						width={35}
						height={35}
						alt="menu"
					/>

					<Image
						className={clsx(
							openNav === false ? 'opacity-0' : 'opacity-1',
							'transition-opacity duration-500 fixed top-8 right-5 z-50  '
						)}
						src={'/asset/svg/close.svg'}
						width={35}
						height={35}
						alt="close-menu"
					/>
				</button>
			) : null}
		</>
	);
};
export default ToggleMenu;
