import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import clsx from 'clsx';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Porfolio Samy',
	description: 'My personnal portfolio',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<meta name="robots" content="index, follow"></meta>
			<body
				suppressHydrationWarning={true}
				className={clsx(inter.className, 'select-none bg-primary')}
			>
				{children}
			</body>
		</html>
	);
}
