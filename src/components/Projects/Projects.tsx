'use client';
import { GetProjectDesktop } from '@/components/Projects/getProject/GetProjectDesktop';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Badge from '../reusable/Badge';
import Link from 'next/link';
import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';
import useMobileLayout from '@/hooks/useMobileLayout';
import { GetProjectMobile } from './getProject/GetProjectMobile';

const Projects = () => {
	gsap.registerPlugin(ScrollTrigger);
	const titleRef = useRef(null);
	const projectRefs = useRef<Array<HTMLDivElement | null>>([]);
	const { windowWidth } = useMobileLayout();
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
					start: 'top 65% ',
					once: true,
				},
			}
		);
		projectRefs.current.forEach((projectRef, index) => {
			gsap.fromTo(
				projectRef,
				{
					opacity: 0,
					y: 50,
					ease: 'power1',
				},
				{
					opacity: 1,
					y: 0,
					duration: 0.3,
					delay: 0.1 * index,
					scrollTrigger: {
						trigger: projectRef,
						toggleActions: 'play resume none none',
						start: 'top 70%',
						once: true,
					},
				}
			);
		});
	}, []);

	const getProjectDeskotp = GetProjectDesktop();
	const getProjectMobile = GetProjectMobile();

	return (
		<section id="Projects" className="  py-10 w-full  ">
			<div className="flex justify-center lg:justify-start  lg:flex-col pb-10">
				<h2
					ref={titleRef}
					className="font-bold text-4xl text-border w-fit  opacity-0"
				>
					My Projects
				</h2>
			</div>
			<div
				className="flex h-full  items-center justify-ce
			  pt-3 w-full "
			>
				<div className="w-full grid lg:grid-cols-3 grid-cols-1 relative gap-4">
					{windowWidth === true
						? getProjectDeskotp.map(
								(
									{ label, png, description, path, language, github, id },
									index
								) => (
									<div
										ref={(el) => (projectRefs.current[index] = el)}
										key={id}
										className="relative  text-white  bg-[#36363b] h-64 w-full p-3 rounded-3xl grid opacity-0 "
									>
										<div className="flex gap-2 items-center relative">
											<h3 className="text-2xl font-semibold">{label}</h3>
											<div className="flex items-center">
												<Image src={png} width={40} height={40} alt={label} />
											</div>
										</div>
										<p>{description}</p>
										<Link
											className="absolute right-3 top-3 w-fit h-fit"
											href={path}
											target="_blank"
										>
											<Image
												className="transition-transform transform hover:scale-110"
												src={'/asset/svg/arrow-up-right.svg'}
												width={25}
												height={25}
												alt="go to project"
											/>
										</Link>
										<Link className="w-fit h-fit" href={github} target="_blank">
											<Image
												src={'/asset/svg/github.svg'}
												width={25}
												height={25}
												alt="go to code project"
											/>
										</Link>
										<div className="flex h-fit">
											{language.map(
												({ label, svg, alt, path, className }, id) => (
													<Badge
														key={id}
														className={className}
														label={label}
														svg={svg}
														alt={alt}
														path={path}
													/>
												)
											)}
										</div>
									</div>
								)
						  )
						: getProjectMobile.map(
								(
									{ label, png, description, path, language, github, id },
									index
								) => (
									<div
										ref={(el) => (projectRefs.current[index] = el)}
										key={id}
										className="relative  text-white  bg-[#36363b] h-64 w-full p-3 rounded-3xl grid opacity-0 "
									>
										<div className="flex w-full gap-2 items-center relative">
											<h3 className="text-2xl font-semibold">{label}</h3>
											<div className="flex items-center">
												<Image src={png} width={40} height={40} alt={label} />
											</div>
										</div>
										<p>{description}</p>
										<Link
											className="absolute right-3 top-3 w-fit h-fit"
											href={path}
											target="_blank"
										>
											<Image
												className="transition-transform transform hover:scale-110"
												src={'/asset/svg/arrow-up-right.svg'}
												width={25}
												height={25}
												alt="go to project"
											/>
										</Link>
										<Link
											className="w-fit h-fit flex"
											href={github}
											target="_blank"
										>
											<Image
												src={'/asset/svg/github.svg'}
												width={25}
												height={25}
												alt="go to code project"
											/>
										</Link>
										<div className="flex h-fit">
											{language.map(
												({ label, svg, alt, path, className }, id) => (
													<Badge
														key={id}
														className={className}
														label={label}
														svg={svg}
														alt={alt}
														path={path}
													/>
												)
											)}
										</div>
									</div>
								)
						  )}
				</div>
			</div>
		</section>
	);
};
export default Projects;
