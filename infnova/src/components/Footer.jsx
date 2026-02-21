import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>

        {/* LEFT */}
        <div>
          <h3>INFNOVA Academy</h3>
          <p>
            Empowering learners worldwide with cutting-edge technology courses.
            Start your journey to success with expert-led training.
          </p>
        </div>

        {/* MIDDLE */}
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>About Us</li>
            <li>Courses</li>
            <li>Instructors</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <h4>Support</h4>
          <ul>
            <li>Help Center</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>FAQ</li>
          </ul>
        </div>

      </div>

      <div className={styles.bottom}>
        © 2026 INFNOVA Technologies. All rights reserved.
      </div>
    </footer>
  );
}