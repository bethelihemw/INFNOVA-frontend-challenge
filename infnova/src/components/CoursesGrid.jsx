"use client";

import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import styles from "./CoursesGrid.module.css";

export default function CoursesGrid() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const res = await fetch(
          "/api/courses"
        );

        if (!res.ok) {
          throw new Error("Network response failed");
        }

        const data = await res.json();
        setCourses(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load courses");
      } finally {
        setLoading(false);
      }
    }

    fetchCourses();
  }, []);

  if (loading) return <p style={{ textAlign: "center" }}>Loading courses...</p>;
  if (error) return <p style={{ textAlign: "center" }}>{error}</p>;

  return (
    <div> 
    <p className={styles.met}>Showing 8 of 8 courses </p>
    <section className={styles.grid}>
      
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </section>
    </div>
  );
}