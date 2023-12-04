import Image from 'next/image';

type Props = {
	label: string;
	svg: string;
	alt: string;
	path: string;
	className?: string;
};

const Badge = ({ label, svg, alt, path, className }: Props) => {
	return (
		<a href={path} target="_blank" className={className}>
			{svg && (
				<div className="mr-2 ">
					<Image
						width={5}
						height={5}
						className="w-5 h-5 "
						src={svg}
						alt={alt}
					/>
				</div>
			)}{' '}
			<span>{label}</span>
		</a>
	);
};
export default Badge;
