import styles from "./CourseCard.module.css";
import Link from "next/link";
export default function CourseCard({ course }) {
  return (
    <Link href={`/courses/${course.id}`}>
      <div className={styles.card}>
        <img src={course.thumbnail} alt={course.title} />

        <div className={styles.content}>
          <span className={styles.category}>
            {course.category.toUpperCase()}
          </span>

          <h3>{course.title}</h3>

          <p>Instructor: {course.instructor}</p>

          <div className={styles.meta}>
            <span>{course.duration}</span>
            <span>{course.enrolled.toLocaleString()} students</span>
            <span>⭐ {course.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}