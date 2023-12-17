import styles from "./page.module.scss";
import Home from "@/components/Home/Home";
import RecentPosts from "@/components/RecentPosts/RecentPosts";

export default function page() {
  return (
    <main className={styles.main} id="editor">
      <Home />
      <RecentPosts />
    </main>
  );
}
