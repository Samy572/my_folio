'use client';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const Contact = () => {
	gsap.registerPlugin(ScrollTrigger);
	const titleRef = useRef(null);
	useLayoutEffect(() => {
		gsap.fromTo(
			titleRef.current,
			{
				opacity: 0,
				y: 50,
				ease: 'power1',
			},
			{
				opacity: 1,
				y: 0,
				duration: 0.3,
				scrollTrigger: {
					trigger: titleRef.current,
					toggleActions: 'play resume none none',
					start: 'center 65% ',
					once: true,
				},
			}
		);
	});
	return (
		<section id="Contact" className="h-[50vh] py-10">
			<div className="flex justify-center lg:justify-start  lg:flex-col pb-10 tracking-wide">
				<h2
					ref={titleRef}
					className="font-bold text-4xl text-border w-fit opacity-0 "
				>
					Contact
				</h2>
			</div>
			<div className="flex justify-center lg:justify-start  lg:flex-col pb-10">
				<h3 className="text-2xl  w-fit  ">
					Feel free to contact me by{' '}
					<a
						className="underline font-bold mr-1"
						href="mailto:samy_ch@outlook.fr"
					>
						email
					</a>
					or on{' '}
					<a
						className="underline font-bold"
						href="https://www.linkedin.com/in/samydevfront/"
					>
						Linkedin
					</a>
					.
				</h3>
			</div>
		</section>
	);
};
export default Contact;
