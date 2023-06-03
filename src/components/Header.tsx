'use client'

import styles from '@/app/page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href='/'>
            <Image src='/logo.svg' alt='Juicy Logo' width='142' height='32' />
          </Link>
        </div>
        <div className={`${styles.menuMobile} ${isMenuOpen ? 'open' : ''}`}>
          <div className={`${styles.hamburger}`} onClick={toggleMenu}>
            <span className={styles.hamburgerSpan}></span>
            <span className={styles.hamburgerSpan}></span>
            <span className={styles.hamburgerSpan}></span>
          </div>
          {isMenuOpen &&
            <nav className={`${styles.menuLinks}`}>
              <ul>
                <li>
                  <Link href="/page1">
                    Page 1
                  </Link>
                </li>
                <li>
                  <Link href="/page2">
                    Page 2
                  </Link>
                </li>
                <li>
                  <Link href="/page3">
                    Page 3
                  </Link>
                </li>
                {/* Add more links here */}
              </ul>
            </nav>
          }
        </div>
      </div>
    </header>
  );
};

export default Header;
