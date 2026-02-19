import styles from "./CourseCard.module.css";

export default function CourseCard({ course }) {
  return (
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
  );
}