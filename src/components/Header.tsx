import logo from "@/../public/logo.svg";
import Image from "next/image";
import Link from "next/link";

import style from '@/style/header.module.css';

const Header = () => {
	return (
		<header
      className={
        style.header
      }
		>
			<div
				className={style.headerContainer}
			>
				<Link href="/">
					<div
						className={style.logoContainer}
					>
						<Image src={logo} width={33} height={33} alt="AI Hunt logo" />{" "}
						<p
							className={style.logoText}
						>
							AI HUNTER™
						</p>
					</div>
				</Link>

				<div
					className={`menu open ${style.menuOpenIcon}`}
				>
					<div
						className={style.menuBar}
            style={{top: '6px'}}
					></div>
					<div
						className={style.menuBar}
            style={{bottom: '6px'}}
					></div>
				</div>
			</div>
		</header>
	);
};

export default Header;
