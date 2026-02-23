"use client";

import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>

      {/* LOGO */}
      <div className={styles.logo}>
        <img src="/imag.png" alt="logo" />
      </div>

      {/* HAMBURGER BUTTON */}
      <div
        className={styles.menuIcon}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* LINKS */}
      <ul
        className={`${styles.navLinks} ${
          menuOpen ? styles.showMenu : ""
        }`}
      >
        <div className={styles.navLink}>
          <li>Courses</li>
          <li>About</li>
          <li>Contact</li>
        </div>
        <div><div className={styles.mobileActions}>
          <a className={styles.signIn}>Sign In</a>
          <button className={styles.enrollBtn}>Enroll Now</button>
        </div></div>

      </ul>
    </nav>
  );
}