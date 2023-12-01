import Badge from '../reusable/Badge';
import { backend } from './getSkills/backend';
import { frontend } from './getSkills/frontend';
import { tools } from './getSkills/tools';

const Skills = () => {
	return (
		<section id="Skills" className=" mt-6 pt-3 lg:h-[50vh]    w-full ">
			<div className="flex justify-center lg:justify-start pb-10">
				<h2 className="font-bold text-4xl text-border w-fit ">My Skills</h2>
			</div>
			<div className=" justify-center  flex items-center  pt-3">
				<div className="w-full  lg:h-48   grid lg:grid-cols-3 grid-cols-1">
					<div className="pt-5">
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
					<div className="pt-5">
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
					<div className="pt-5 mb-20">
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
