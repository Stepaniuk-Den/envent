import Hero from "@/components/Hero";
import styles from "./page.module.scss";
import ProjectSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <div className={styles.main}>
      <Hero />
      <ProjectSection />
    </div>
  );
}
