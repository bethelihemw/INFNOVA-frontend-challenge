import styles from "./CourseCard.module.css";
import Link from "next/link";
export default function CourseCard({ course }) {
  return (
    <div> 
      
    <Link className={styles.link} href={`/courses/${course.id}`}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
        <img className={styles.cardimg} src={course.thumbnail} alt={course.title} />
          <span className={`${styles.badge} ${styles[course.level.toLowerCase()]}`}>
            {course.level}
          </span>
          </div>
        <div className={styles.content}>
          <span className={styles.category}>
            {course.category.toUpperCase()}
          </span>

          <h3>{course.title}</h3>

          <p>Instructor: {course.instructor}</p>

          <div className={styles.meta}>
            <div className={styles.first}>
              <span><img className={styles.iconi} src="/clock (2).png" alt="Duration icon" /> {course.duration}</span>
            <span><img className={styles.iconi} src="/user (4).png" alt="Duration icon" />{course.enrolled.toLocaleString()} </span>
            </div>
            <div className={styles.second}><span><img className={styles.iconii} src="/star.png" alt="Duration icon" /> {course.rating}</span> </div>
            
          </div>
        </div>
      </div>
    </Link>
</div>
  );
}