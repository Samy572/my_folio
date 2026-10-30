import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';

const About = () => {
	return (
		<section className="about w-full mt-4 md:py-12 flex justify-center gap-6 md:gap-0 md:justify-between md:flex-row flex-col-reverse">
			<div className="h-full w-full flex md:justify-between justify-center items-center pt-2 col-span-2 ">
				<LeftSide />{' '}
			</div>
			<div className="w-full h-full flex md:justify-end justify-center md:items-center items-center p-3">
				<RightSide />
			</div>
		</section>
	);
};
export default About;
