import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      
      
      <div className={styles.logo}>
        <img src="/imag.png" alt="logo" />
        {/* <span>INFNOVA</span> */}
      </div>

     
      <ul className={styles.navLinks}>
        <li>Courses</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    
      <div className={styles.actions}>
        <a className={styles.signIn}>Sign In</a>
        <button className={styles.enrollBtn}>Enroll Now</button>
      </div>

    </nav>
  );
}
