type Props = {
	position: { x: number; y: number };
};

const HoverCard = ({ position }: Props) => {
	return (
		<div
			className="w-[120px] h-[120px] rounded-full bg-gradient-radial from-white to-slate-300 z-30 absolute  blur-xl opacity-20"
			style={{
				transform: `translate(${position?.x - 60}px, ${position?.y - 60}px)`,
			}}
		></div>
	);
};
export default HoverCard;
