import Image from 'next/image';

const RightSide = () => {
	return (
		<div className="w-72 h-72  bg-gradient-to-b from-indigo-500 to-purple-100  rounded-full flex justify-center items-center">
			<Image
				className="z-10 overflow-hidden w-72 h-72 rounded-full"
				src={'/asset/images/profile.png'}
				width={150}
				height={150}
				alt="profile"
			/>
		</div>
	);
};
export default RightSide;
