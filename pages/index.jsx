import styles from "./Home.module.scss";
import Sidebar from "@/components/Sidebar";
import Main from "@/components/Main";

export default function Home() {
  return (
    <div className={styles.container}>
        <Sidebar />
        <Main />
    </div>
  );
}
