import Hero from "@/components/Hero";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.main}>
      <Hero />
    </div>
  );
}
