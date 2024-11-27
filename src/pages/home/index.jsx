import styles from "./home.module.css";
import { Carousel, Header, Hero } from "../../components";

export default function Home() {
    return (
        <div className={styles.homeContainer}>
            <Header />
            <Hero />
            <Carousel />
        </div>
    )
}