import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';

const About = () => {
	return (
		<section className="  w-full h-[100vh] about mt-4 flex md:justify-between md:flex-row flex-col-reverse ">
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
