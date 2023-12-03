'use client';
import About from '@/components/About/About';
import Skills from '@/components/Skills/Skills';
import Projects from '@/components/Projects/Projects';
import Navbar from '@/components/Navmenu/RegularNavbar/Navbar';
import MobileNavBar from '@/components/Navmenu/MobileNavBar/MobileNavBar';
import { gsap } from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer';

export default function Home() {
	const lineRef = useRef(null);
	useLayoutEffect(() => {
		gsap.fromTo(
			lineRef.current,
			{
				scaleX: '0%',
				opacity: 0,
			},
			{
				scaleX: '100%',
				opacity: 1,
				delay: 0.4,
				duration: 0.5,
			}
		);
	});

	return (
		<div>
			<div
				ref={lineRef}
				className="
			 h-2 bg-gradient-to-r from-indigo-500 via-red-500 to-purple-500 "
			></div>
			<div className="max-w-7xl mx-auto  px-3 pt-8 ">
				<Navbar />
				<MobileNavBar />
				<About />
				<Skills />
				<Projects />
				<Contact />
				<Footer />
			</div>
		</div>
	);
}
