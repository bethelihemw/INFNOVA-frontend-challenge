import styles from "./Detailhero.module.css";

export default function Detailhero() {
  return (
    <div><div className={styles.backLink}>← Back to Courses</div> 
    <section className={styles.hero}>
      
      <div className={styles.container}>
        
        
        <div className={styles.contentWrapper}>
          <div className={styles.textSide}>
            <span className={styles.category}>CLOUD COMPUTING</span>
            <h3 className={styles.title}>Cloud Engineering with AWS</h3>
            <p className={styles.description}>
              Learn how modern companies deploy and scale applications in the cloud. 
              Build resilient infrastructure, automate deployments, and understand cost-efficient architecture.
            </p>
            
            <div className={styles.stats}>
              <span> <img src="/reward.png" alt="" />
                 Instructor: <strong>Samuel Getachew</strong></span>
              <span><img src="/reward.png" alt="" /> 9 weeks</span>
              <span><img src="/user (5).png" alt="" /> 2,015 enrolled</span>
              <span><img src="/star.png" alt="" /> 4.6 rating</span>
            </div>
            
            <div className={styles.badge}>Intermediate Level</div>
          </div>

          <div className={styles.imageSide}>
            <img src="/image.png" alt="Cloud View" className={styles.heroImg} />
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
