import styles from "./CourseCard.module.css";
import Link from "next/link";
export default function CourseCard({ course }) {
  return (
    <div> 
      
    <Link className={styles.link} href={`/courses/${course.id}`}>
      <div className={styles.card}>
        <img className={styles.cardimg} src={course.thumbnail} alt={course.title} />

        <div className={styles.content}>
          <span className={styles.category}>
            {course.category.toUpperCase()}
          </span>

          <h3>{course.title}</h3>

          <p>Instructor: {course.instructor}</p>

          <div className={styles.meta}>
            <span><img className={styles.iconi} src="/clock (2).png" alt="Duration icon" /> {course.duration}</span>
            <span><img className={styles.iconi} src="/user (4).png" alt="Duration icon" />{course.enrolled.toLocaleString()} </span>
            <span><img className={styles.iconi} src="/star.png" alt="Duration icon" /> {course.rating}</span>
          </div>
        </div>
      </div>
    </Link>
</div>
  );
}