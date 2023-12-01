import Badge from '@/components/reusable/Badge';
import { GetBadge } from './GetBadge';

const LeftSide = () => {
	const Badges = GetBadge();

	return (
		<div className=" px-1 ">
			<p className="text-2xl ">Hi there, I’m from </p>
			<h1 className="md:text-6xl text-4xl font-bold bg-gradient-to-r from-indigo-500 via-purple-300  bg-clip-text text-transparent">
				Samy Chabbi
			</h1>
			<div className="space-y-4">
				<h2 className="md:text-3xl text-xl font-bold">
					<strong>Front end Web developer </strong>from France
				</h2>
				<h3 className="md:text-xl text-lg ">
					I love creating great user experiences.
				</h3>
			</div>
			<div className=" pt-3">
				{Badges.map(({ path, label, svg, alt, className }) => {
					return (
						<Badge
							key={path}
							path={path}
							label={label}
							svg={svg}
							alt={alt}
							className={className}
						/>
					);
				})}
			</div>
		</div>
	);
};
export default LeftSide;
