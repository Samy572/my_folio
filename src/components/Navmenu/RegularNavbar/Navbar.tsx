'use client';
import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

const Navbar = () => {
	const portFolioRef = useRef(null);
	const linksRefs = useRef<Array<HTMLLIElement | null>>([]);

	useLayoutEffect(() => {
		gsap.fromTo(
			portFolioRef.current,
			{ y: -50, ease: 'power1' },
			{
				opacity: 1,
				y: 0,
				duration: 0.2,
			}
		);

		linksRefs.current.forEach((linkRef, index) => {
			gsap.fromTo(
				linkRef,
				{
					y: -100,
					ease: 'power1',
				},
				{
					opacity: 1,
					y: 0,
					duration: 0.2,
					delay: 0.05 * index,
				}
			);
		});
	}, []);

	return (
		<header className="w-full hidden lg:block">
			<nav className="lg:flex justify-between">
				<h1
					ref={portFolioRef}
					className="opacity-0 text-3xl tracking-wider font-semibold"
				>
					<strong>Portfolio.</strong>
				</h1>
				<ul className="flex lg:gap-14 gap-5 justify-around lg:text-xl">
					<li
						className="nav-to-section opacity-0"
						ref={(el) => (linksRefs.current[0] = el)}
					>
						<Link href="#Skills">Skills</Link>
					</li>
					<li
						className="nav-to-section opacity-0"
						ref={(el) => (linksRefs.current[1] = el)}
					>
						<Link href="#Projects">Projects</Link>
					</li>
					<li
						className="nav-to-section opacity-0"
						ref={(el) => (linksRefs.current[2] = el)}
					>
						<Link href="#Contact">Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
