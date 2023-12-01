'use client';

import clsx from 'clsx';
import Image from 'next/image';

type Props = {
	openNav: boolean;
	setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
};

const ToggleMenu = ({ openNav, setOpenNav }: Props) => {
	return (
		<button
			onClick={() => setOpenNav(!openNav)}
			className=" cursor-pointer z-50"
			role="button"
			aria-pressed={openNav}
		>
			<Image
				className={clsx(
					openNav ? 'opacity-0' : 'opacity-1',
					'transition-opacity duration-500  right-5 top-8 fixed '
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
				aria-pressed={openNav}
			/>
		</button>
	);
};
export default ToggleMenu;
