'use client';
import Badge from '../reusable/Badge';
import { backend } from './getSkills/backend';
import { frontend } from './getSkills/frontend';
import { tools } from './getSkills/tools';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

const Skills = () => {
	gsap.registerPlugin(ScrollTrigger);
	const titleRef = useRef(null);
	const skillRefs = useRef<Array<HTMLDivElement | null>>([]);
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
					once: true,
					start: ' center  ',
				},
			}
		);
		skillRefs.current.forEach((skillRef, index) => {
			gsap.fromTo(
				skillRef,
				{
					opacity: 0,
					y: 100,
					ease: 'power1',
				},
				{
					opacity: 1,
					y: 0,
					duration: 0.3,
					delay: 0.1 * index,
					scrollTrigger: {
						trigger: skillRef,
						toggleActions: 'play resume none none',
						once: true,
						start: ' center ',
					},
				}
			);
		});
	}, []);

	return (
		<section id="Skills" className=" mt-6 py-4 lg:h-[50vh]    w-full ">
			<div className="flex justify-center lg:justify-start pb-10">
				<h2 ref={titleRef} className=" font-bold text-4xl text-border w-fit  ">
					My Skills
				</h2>
			</div>
			<div className=" justify-center  flex items-center  pt-3">
				<div className=" w-full  lg:h-48   grid lg:grid-cols-3 grid-cols-1">
					<div ref={(el) => (skillRefs.current[0] = el)} className="pt-5 ">
						<h3 className="text-2xl font-semibold pb-5">Frontend</h3>
						{frontend.map(({ label, svg, alt, path, className }) => {
							return (
								<Badge
									className={className}
									key={label}
									label={label}
									svg={svg}
									alt={alt}
									path={path}
								/>
							);
						})}
					</div>
					<div className="pt-5 " ref={(el) => (skillRefs.current[1] = el)}>
						<h3 className="text-2xl font-semibold pb-5">Backend</h3>
						{backend.map(({ label, svg, alt, path, className }) => {
							return (
								<Badge
									className={className}
									key={label}
									label={label}
									svg={svg}
									alt={alt}
									path={path}
								/>
							);
						})}
					</div>
					<div className="pt-5  " ref={(el) => (skillRefs.current[2] = el)}>
						<h3 className="text-2xl font-semibold pb-5">Tools</h3>
						{tools.map(({ label, svg, alt, path, className }) => {
							return (
								<Badge
									className={className}
									key={label}
									label={label}
									svg={svg}
									alt={alt}
									path={path}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};
export default Skills;
