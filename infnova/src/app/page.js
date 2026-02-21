// import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import CoursesGrid from "@/components/CoursesGrid";
import Footer from "@/components/Footer"
// import styles from "./page.module.css";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SearchBar />
      <CoursesGrid />
      <Footer />
      {/* <h1>INFNOVA Frontend Challenge</h1> */}
    </main>
  );
}