import styles from "./home.module.css";
import { Header } from "../../components";

export default function Home() {
    return (
        <div className={styles.homeContainer}>
            <Header />
        </div>
    )
}