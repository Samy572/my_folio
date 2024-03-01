'use client';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useLayoutEffect, useRef } from 'react';

const RightSide = () => {
	const myPhoto = useRef(null);

	useLayoutEffect(() => {
		gsap.fromTo(
			myPhoto.current,
			{
				y: 30,
				ease: 'power1',
			},
			{
				opacity: 1,
				y: 0,
				delay: 0.2,
				duration: 0.2,
			}
		);
	});
	return (
		<div
			ref={myPhoto}
			className="opacity-0 w-44 h-44 sm:h-fit sm:w-fit  bg-gradient-to-b from-indigo-500 to-purple-100  rounded-full flex justify-center items-center"
		>
			<Image
				className="z-10 overflow-hidden  rounded-full"
				src={'/asset/images/profile.png'}
				width={350}
				height={350}
				loading="lazy"
				priority={false}
				alt="profile Samy"
			/>
		</div>
	);
};
export default RightSide;
