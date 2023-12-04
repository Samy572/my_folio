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
			className="opacity-0 w-72 h-72  bg-gradient-to-b from-indigo-500 to-purple-100  rounded-full flex justify-center items-center"
		>
			<Image
				className="z-10 overflow-hidden w-72 h-72 rounded-full"
				src={'/asset/images/profile.png'}
				width={150}
				height={150}
				alt="profile"
			/>
		</div>
	);
};
export default RightSide;
