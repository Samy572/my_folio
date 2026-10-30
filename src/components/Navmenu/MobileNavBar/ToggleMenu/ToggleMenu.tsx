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
			type="button"
			onClick={() => setOpenNav(!openNav)}
			aria-label={openNav ? 'Close menu' : 'Open menu'}
			aria-expanded={openNav}
			aria-controls="mobile-menu"
			className="fixed top-5 right-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-neutral-700 bg-[#181818]/80 backdrop-blur cursor-pointer active:scale-95 transition-transform"
		>
			<Image
				className={clsx(
					openNav ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0',
					'absolute transition-all duration-300'
				)}
				src={'/asset/svg/burger.svg'}
				width={26}
				height={26}
				alt=""
			/>
			<Image
				className={clsx(
					openNav ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90',
					'absolute transition-all duration-300'
				)}
				src={'/asset/svg/close.svg'}
				width={26}
				height={26}
				alt=""
			/>
		</button>
	);
};
export default ToggleMenu;
