"use client";

import logo from "@/../public/logo.svg";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import style from "@/style/header.module.css";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

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

  const headerContainerVariants = {
		open: {
			height: "200px",
      display: 'flex',
      transition: { 
        type: 'spring',
        stiffness: 80,
        // damping: 20
      }
		},
		closed: {
      display: 'none',
			height: "auto",
      transition: { 
        type: 'spring',
        stiffness: 80,
        // damping: 20
      }
		},
	};

	return (
		<header className={style.header}>
			<div className={style.headerContainer}>
				<div className={style.headerFirstRow}>
					<Link href="/">
						<div className={style.logoContainer}>
							<Image src={logo} width={33} height={33} alt="AI Hunt logo" />{" "}
							<p className={style.logoText}>AI HUNTER™</p>
						</div>
					</Link>

					<div
						className={`menu open ${style.menuOpenIcon}`}
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
					</div>
				</div>

				<motion.nav
					variants={headerContainerVariants}
					animate={isOpen ? "open" : "closed"}
          initial={false}
          className={style.navbar}
				>
					<ul className={style.navLinks}>
            <p className={style.navtext}>CHOOSE YOUR OUTPUT:</p>
            <li className={style.navLink}>IMAGE</li>
            <li className={style.navLink}>TEXT</li>
            <li className={style.navLink}>VIDEO</li>
            <li className={style.navLink}>CODE</li>
            <li className={style.navLink}>AUDIO</li>
          </ul>
				</motion.nav>
			</div>
		</header>
	);
};

export default Header;
