import Header from "@/components/Header";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "AI Hunter",
	description:
		"AI Hunter é uma plataforma inovadora projetada para ajudar você a navegar pelo mundo da inteligência artificial. É um painel bem elaborado que permite explorar, filtrar e interagir com vários sistemas de IA, tudo em um só lugar.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				{children}
			</body>
		</html>
	);
}
