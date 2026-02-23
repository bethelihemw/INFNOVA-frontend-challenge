import Link from 'next/link';
import styles from "./CourseDetails.module.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
export default async function CourseDetailPage({ params }) {
  
  const { id } = await params;

  try {
    
    const res = await fetch(`https://infnova-course-api.vercel.app/api/courses/${id}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      return <div className="p-20 text-center">Course not found. <Link href="/" className="text-orange-500 underline">Go back</Link></div>;
    }

    const course = await res.json();

    
    return (
      <div>
        <Navbar/>
        
      <div className={styles.container}>
        
        <Link href="/" className={styles.backlink}>

              ← Back to Courses

            </Link>
        <section className={styles.section}>
          <div className={styles.insidecontainer}>
            
            
            <div className={styles.hero}>
              <div className={styles.herocontent}>
                <p className={styles.catagory}>{course.category || "Cloud Computing"}</p>
                <h1 className={styles.title}>{course.title}</h1>
                <p className={styles.description}>{course.description}</p>
                
                <div className={styles.lists}>
                  <span className={styles.instr}><img src="/reward.png" alt="Instructor Icon" /> Instructor: <strong>{course.instructor}</strong></span>
                  <span className={styles.duration}><img src="/clock (1).png" alt="Duration Icon" /> {course.duration}</span>
                  <span className={styles.enrolled}><img src="/user (5).png" alt="Instructor Icon" /> {course.enrolled?.toLocaleString()} enrolled</span>
                  <span className={styles.rating}><img src="/star.png" alt="Instructor Icon" /> {course.rating} rating</span>
                </div>

                <div className={styles.level}>
                  {course.level} Level
                </div>
              </div>

              
              <div className={styles.imageWrapper}>
                 <img src={course.thumbnail} alt="course" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

      
        <main className={styles.main}>
          
          <div className={styles.section1}>
            
            <div className={styles.learn}>
              <h2 className={styles.h2}>
                <span className={styles.span}><img className={styles.img} src="/book.png" alt="Instructor Icon" /></span> What You'll Learn
              </h2>
              <div className={styles.skills}>
                {course.skills?.map((skill, i) => (
                  <div key={i} className={styles.check}>
                    <span className={styles.checkIcon}>
              <img src="/image2.png" alt="Check Icon" />
            </span>
                    <span className={styles.skill}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

          
            <div className={styles.descriptionSection}>
              <h2 className={styles.h2}>Course Description</h2>
              <div className={styles.descriptionContent}>
                <p>{course.description}</p>
                <p>This comprehensive course is designed to provide you with practical, hands-on experience and real-world skills. You'll work on projects that simulate actual industry scenarios, giving you the confidence to apply your knowledge immediately.</p>
              </div>
            </div>

           
            <div className={styles.instructor}>
              <h2 className={styles.h2}>Your Instructor</h2>
              <div className={styles.profile}>
                <div className={styles.course}>
                  {course.instructor?.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className={styles.h3}>{course.instructor}</h3>
                  <p className={styles.disc}>Expert Professional • 10+ years experience</p>
                </div>
              </div>
            </div>
          </div>

          
          <aside className={styles.aside}>
            <div className={styles.enrollCard}>
              <h3 className={styles.h3}>Enroll Today</h3>
              <p className={styles.enrollText}>Join {course.enrolled} students already enrolled</p>
              
              <button className={styles.btn}>
                Enroll Now
              </button>
              <button className={styles.whishlist}>
                Add to Wishlist
              </button>

              <hr className={styles.hr} />
              <div className={styles.includeContainer}>
                 <p className={styles.include}>This course includes:</p>
                 <ul className={styles.ul}>
                    {[
                      { icon:<span className={styles.checkIcon}>
              <img src="/image2.png" alt="Check Icon" />
            </span>, text: `${course.duration} of content` },
                      { icon: <span className={styles.checkIcon}>
              <img src="/image2.png" alt="Check Icon" />
            </span>, text: 'Lifetime access' },
                      { icon: <span className={styles.checkIcon}>
              <img src="/image2.png" alt="Check Icon" />
            </span>, text: 'Certificate of completion' },
                      { icon: <span className={styles.checkIcon}>
              <img src="/image2.png" alt="Check Icon" />
            </span>, text: 'Access on mobile and desktop' },
                      { icon: <span className={styles.checkIcon}>
             <img src="/image2.png" alt="Check Icon" />
            </span>, text: 'Downloadable resources' }
                    ].map((item, idx) => (
                      <li key={idx} className={styles.icon}>
                        <span>{item.icon}</span> {item.text}
                      </li>
                    ))}
                 </ul>
              </div>
            </div>
          </aside>

        </main>
      </div>
      <Footer/>
      </div>
    );
  } catch (error) {
    return <div className={styles.error}>Something went wrong. Check your console.</div>;
  }
}