const Footer = () => {
	const date = new Date().getFullYear();
	return (
		<footer className="text-center pb-10">
			© Copyright {date} Samy Chabbi. All rights reserved.
		</footer>
	);
};
export default Footer;
