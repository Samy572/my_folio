import About from '@/components/About/About';
import Skills from '@/components/Skills/Skills';
import Projects from '@/components/Projects/Projects';
import Navbar from '@/components/Navmenu/RegularNavbar/Navbar';
import MobileNavBar from '@/components/Navmenu/MobileNavBar/MobileNavBar';

export default function Home() {
	return (
		<div className="w-full h-2 bg-gradient-to-r from-indigo-500 via-red-500 to-purple-500 ">
			<div className="max-w-7xl mx-auto  px-3 pt-8 ">
				<Navbar />

				<MobileNavBar />
				<About />
				<Skills />
				<Projects />
			</div>
		</div>
	);
}
