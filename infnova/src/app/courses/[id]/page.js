import styles from "./CourseDetails.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Detailhero from "@/components/Detailhero";
async function getCourse(id) {
  const res = await fetch(
    `http://localhost:3000/api/courses/${id}`,
    { cache: "no-store" }
  );

  return res.json();
}

export default async function CourseDetails({ params }) {
  const course = await getCourse(params.id);

  const topics = [
    "AWS", "Docker", 
    "CI/CD", "Infrastructure", 
    "System Design"
  ];

    return (
      <div> <Navbar /> 
      <Detailhero />
  <div className={styles.container}>
    
    {/* LEFT SIDE */}
    <div className={styles.left}>

      {/* WHAT YOU'LL LEARN */}
      <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.icon}>📖</span> 
        <h2 className={styles.title}>What You'll Learn</h2>
      </div>
      
      <div className={styles.grid}>
        {topics.map((topic, index) => (
          <div key={index} className={styles.item}>
            <span className={styles.checkIcon}>
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </span>
            <span className={styles.topicText}>{topic}</span>
          </div>
        ))}
      </div>
    </div>

      {/* DESCRIPTION */}
      <div className={styles.card}>
  <h2 className={styles.heading}>Course Description</h2>

  <p className={styles.text}>
    Learn how modern companies deploy and scale applications in the cloud.
    Build resilient infrastructure, automate deployments, and understand
    cost-efficient architecture.
  </p>

  <p className={styles.text}>
    This comprehensive course is designed to provide you with practical,
    hands-on experience and real-world skills. You'll work on projects that
    simulate actual industry scenarios, giving you the confidence to apply
    your knowledge immediately.
  </p>
</div>
      {/* INSTRUCTOR */}
      <div className={styles.card}>
  <h2 className={styles.heading}>Your Instructor</h2>

  <div className={styles.instructorWrapper}>

    {/* Avatar */}
    <div className={styles.avatar}>SG</div>

    {/* Instructor Info */}
    <div>
      <h3 className={styles.instructorName}>
        Samuel Getachew
      </h3>

      <p className={styles.instructorBio}>
        Expert Cloud Computing professional with over 10 years of industry
        experience. Passionate about teaching and helping students achieve
        their career goals.
      </p>
    </div>

  </div>
</div>

    </div>

    {/* RIGHT SIDE */}
    <div className={styles.right}>

      <div className={styles.enroll}>
        <h2>Enroll Today</h2>

        <p className={styles.text}>Join 2,015 students already enrolled</p>

        <button className={styles.enrollBtn}>
          Enroll Now
        </button>

        <button className={styles.wishlistBtn}>
          Add to Wishlist
        </button>

        <hr className={styles.hr}/>
        <h3 className={styles.h3}> This course includes:  </h3>
        <ul className={styles.ul}>
          <li className={styles.li}>✅ 9 weeks of content</li>
          
          <li className={styles.li}>✅ Lifetime access</li>
          <li className={styles.li}>✅ Certificate of completion</li>
          <li className={styles.li}>✅ Access on mobile and desktop</li>
          <li className={styles.li}>✅ Downloadable resources</li>
        </ul>
      </div>

    </div>
</div>
<Footer />
  </div>
);

}