import { GetProject } from '@/components/Projects/getProject/GetProject';
import Badge from '../reusable/Badge';
import Link from 'next/link';
import Image from 'next/image';
const Projects = () => {
	const getProject = GetProject();
	return (
		<section id="Projects" className=" h-[50vh]  w-full  ">
			<div className="flex justify-center lg:justify-start ">
				<h2 className="font-bold text-4xl text-border w-fit ">My Projects</h2>
			</div>
			<div
				className="hidden lg:flex h-full  items-center justify-ce
			  pt-3 w-full "
			>
				<div className="w-full grid grid-cols-3 relative gap-4">
					{getProject.map(
						({ label, png, description, path, language, github, id }) => (
							<div
								key={id}
								className="relative z-10 text-white  bg-[#36363b] h-64 w-full p-3 rounded-3xl grid "
							>
								<div className="flex gap-2 items-center relative">
									<h3 className="text-2xl font-semibold">{label}</h3>
									<div className="flex items-center">
										<Image src={png} width={40} height={40} alt={label} />
									</div>
								</div>
								<p>{description}</p>
								<Link
									className="absolute right-3 top-3"
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
								<Link className="" href={github} target="_blank">
									<Image
										src={'/asset/svg/github.svg'}
										width={25}
										height={25}
										alt="go to code project"
									/>
								</Link>
								<div className="flex h-fit">
									{language.map(({ label, svg, alt, path, className }, id) => (
										<Badge
											key={id}
											className={className}
											label={label}
											svg={svg}
											alt={alt}
											path={path}
										/>
									))}
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
