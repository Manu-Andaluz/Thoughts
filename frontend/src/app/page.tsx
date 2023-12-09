import CreatePost from "@/components/CreatePost";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main} id="editor">
      <CreatePost />
    </main>
  );
}
