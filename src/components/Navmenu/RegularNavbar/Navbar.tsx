'use client';
import Link from 'next/link';

const Navbar = () => {
	return (
		<header className="w-full hidden lg:block ">
			<nav className=" lg:flex justify-between">
				<h1 className="text-3xl  tracking-wider font-semibold  ">
					<strong>Portfolio.</strong>
				</h1>
				<ul className="flex lg:gap-14 gap-5 justify-around lg:text-xl">
					<li className="nav-to-section ">
						<Link href="#Skills">Skills</Link>
					</li>
					<li className="nav-to-section">
						<Link href="#Projects">Projects</Link>
					</li>
					<li className="nav-to-section">
						<Link href="#Contact">Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
export default Navbar;
