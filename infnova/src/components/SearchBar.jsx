import styles from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <div className={styles.wrapper}>
      <input placeholder="Search courses, instructors..." />
      <input placeholder="Category" />
      <input placeholder="Level" />
    </div>
  );
}
