import styles from "./CourseDetails.module.css";

async function getCourse(id) {
  const res = await fetch(
    `http://localhost:3000/api/courses/${id}`,
    { cache: "no-store" }
  );

  return res.json();
}

export default async function CourseDetails({ params }) {
  const course = await getCourse(params.id);

  
    return (
  <div className={styles.container}>

    {/* LEFT SIDE */}
    <div className={styles.left}>

      {/* WHAT YOU'LL LEARN */}
      <div className={styles.card}>
        <h2>What You'll Learn</h2>

        <ul>
          {course.skills?.map((skill) => (
  <li key={skill}>✅ {skill}</li>
))}
        </ul>
      </div>

      {/* DESCRIPTION */}
      <div className={styles.card}>
        <h2>Course Description</h2>
        <p>{course.description}</p>
      </div>

      {/* INSTRUCTOR */}
      <div className={styles.card}>
        <h2>Your Instructor</h2>
        <h3>{course.instructor}</h3>
        <p>
          Expert instructor helping students build real-world skills.
        </p>
      </div>

    </div>

    {/* RIGHT SIDE */}
    <div className={styles.right}>

      <div className={styles.enroll}>
        <h2>Enroll Today</h2>

        <p>{course.enrolled} students already enrolled</p>

        <button className={styles.enrollBtn}>
          Enroll Now
        </button>

        <button className={styles.wishlistBtn}>
          Add to Wishlist
        </button>

        <hr />

        <ul>
          <li>✅ Lifetime access</li>
          <li>✅ Certificate of completion</li>
          <li>✅ Downloadable resources</li>
        </ul>
      </div>

    </div>

  </div>
);

}