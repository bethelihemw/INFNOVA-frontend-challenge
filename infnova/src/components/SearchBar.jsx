import styles from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.long}>
        <input className={styles.searchInput} placeholder="Search courses, instructors..." />
      </div>
      <div className={styles.short}>
        <input className={styles.categoryInput} placeholder="Category" />
        <input className={styles.levelInput} placeholder="Level" />
      </div>
      
    </div>
  );
}
