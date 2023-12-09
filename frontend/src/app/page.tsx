import CreatePost from "@/components/CreatePost";
import styles from "./page.module.scss";
import Home from "@/components/Home/Home";

export default function page() {
  return (
    <main className={styles.main} id="editor">
      <Home />
    </main>
  );
}
