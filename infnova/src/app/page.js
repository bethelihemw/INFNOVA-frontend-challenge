// import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import CoursesGrid from "@/components/CoursesGrid";
// import styles from "./page.module.css";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SearchBar />
      <CoursesGrid />
      {/* <h1>INFNOVA Frontend Challenge</h1> */}
    </main>
  );
}