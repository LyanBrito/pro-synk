import styles from "./home.module.css";
import { Hero } from "../../components";

export default function Home() {
    return (
        <div className={styles.homeContainer}>
            <Hero />

        </div>
    )
}