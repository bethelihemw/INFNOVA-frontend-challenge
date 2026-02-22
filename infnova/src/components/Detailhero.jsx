import styles from "./Hero.module.css";

export default function Detailhero() {
  return (
    
    <section className={styles.hero}>
      <h6>CLOUD COMPUTING</h6>
      <h1>Cloud Engineering with AWS</h1>
      <p>
       Learn how modern companies deploy and scale applications in the cloud. 
       Build resilient infrastructure, automate deployments, and understand cost-efficient architecture.
      </p>
      <div className={styles.infoRow}>
            <span>👨‍🏫 Instructor: <strong>Samuel Getachew</strong></span>
            <span>⏱ 9 weeks</span>
            <span>👥 2,015 enrolled</span>
            <span>⭐ 4.6 rating</span>
          </div>
          <span className={styles.level}>
            Intermediate Level
          </span>
    </section>
  );
}
