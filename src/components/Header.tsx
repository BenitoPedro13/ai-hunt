"use client";

import logo from "@/../public/logo.svg";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import style from "@/style/header.module.css";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const headerBackdrop = {
		open: {
			z: 2,
			background: '#000000a6',
			height: "379px",
			transition: {
				type: "spring",
				stiffness: 80,
				// damping: 20
			},
		},
		closed: {
			z: 1,
			height: "62px",
			background: '#00000040',
			transition: {
				type: "spring",
				stiffness: 45,
				// damping: 20
			},
		},
	};

	const logoVariant = {
		open: {
			x: "calc(50vw - 15px - 131.34px/2)",
			transition: {
				type: "spring",
				stiffness: 70,
				// damping: 20
			},
		},
		closed: {
			x: 0,
			transition: {
				type: "spring",
				stiffness: 40,
				// damping: 20
			},
		},
	};

	const menuVariant = {
		open: {
			x: "calc((-50vw + 49px) - 17px)",
			y: "50px",
			transition: {
				type: "spring",
				stiffness: 70,
				// damping: 20
			},
		},
		closed: {
			x: 0,
			y: 0,
			transition: {
				type: "spring",
				stiffness: 40,
				// damping: 20
			},
		},
	};

	const topBarVariants = {
		open: {
			rotate: 45,
			y: 7,
		},
		closed: {
			rotate: 0,
			y: 0,
		},
	};

	const bottomBarVariants = {
		open: {
			rotate: -45,
			y: -8,
		},
		closed: {
			rotate: 0,
			y: 0,
		},
	};

	return (
		<motion.header
			className={style.header}
			variants={headerBackdrop}
			animate={isOpen ? "open" : "closed"}
		>
			<div className={style.headerContainer}>
				<div className={style.headerFirstRow}>
					<motion.div
						className={style.logoContainer}
						variants={logoVariant}
						animate={isOpen ? "open" : "closed"}
					>
						<Link href="/">
							<div className={style.logoContainer}>
								<Image src={logo} width={33} height={33} alt="AI Hunt logo" />{" "}
								<p className={style.logoText}>AI HUNTER™</p>
							</div>
						</Link>
					</motion.div>

					<motion.div
						className={`menu open ${style.menuOpenIcon}`}
						variants={menuVariant}
						animate={isOpen ? "open" : "closed"}
						onClick={() => setIsOpen(!isOpen)}
					>
						<motion.div
							style={{ top: "6px" }}
							className={style.menuBar}
							variants={topBarVariants}
							animate={isOpen ? "open" : "closed"}
						></motion.div>
						<motion.div
							style={{ bottom: "6px" }}
							className={style.menuBar}
							variants={bottomBarVariants}
							animate={isOpen ? "open" : "closed"}
						></motion.div>
					</motion.div>
				</div>

				<nav
					className={style.navbar}
					style={isOpen ? { display: "block" } : { display: "none" }}
				>
					<ul className={style.navLinks}>
						<p className={style.navtitle}>CHOOSE YOUR OUTPUT:</p>
						<li className={style.navLink}>
						<Link href="/">
							<div className={style.logoContainer}>
								<img src="https://framerusercontent.com/images/IrRkK6UMiwiCPbqZcdyrw2rsWs.png" width={31} height={31} alt="IMAGE" className={style.navIcon} />{" "}
								<p className={style.navLinkText}>IMAGE</p>
							</div>
						</Link>
							</li>
							<li className={style.navLink}>
						<Link href="/">
							<div className={style.logoContainer}>
								<img src="https://framerusercontent.com/images/mZRQDgJguK8TXKK0zai7UNWzis.png" width={31} height={31} alt="TEXT" className={style.navIcon} />{" "}
								<p className={style.navLinkText}>TEXT</p>
							</div>
						</Link>
							</li>
						<li className={style.navLink}>
						<Link href="/">
							<div className={style.logoContainer}>
								<img src="https://framerusercontent.com/images/Ca0ol6OsxVxRYX2Nf3j5LHJa59s.png" width={31} height={31} alt="VIDEO" className={style.navIcon} />{" "}
								<p className={style.navLinkText}>VIDEO</p>
							</div>
						</Link>
							</li>
							<li className={style.navLink}>
						<Link href="/">
							<div className={style.logoContainer}>
								<img src="https://framerusercontent.com/images/hI52EbofXYw6bkHESc4y0ZBIqHw.png" width={31} height={31} alt="CODE" className={style.navIcon} />{" "}
								<p className={style.navLinkText}>CODE</p>
							</div>
						</Link>
							</li>
							<li className={style.navLink}>
						<Link href="/">
							<div className={style.logoContainer}>
								<img src="https://framerusercontent.com/images/kUevFsfAgGEFQAXVmlelYeFNhc.png" width={31} height={31} alt="AUDIO" className={style.navIcon} />{" "}
								<p className={style.navLinkText}>AUDIO</p>
							</div>
						</Link>
							</li>
					</ul>
				</nav>
			</div>
		</motion.header>
	);
};

export default Header;
