import styles from "./home.module.css";
import { Carousel, Hero} from "../../components";
import Freelances from "../../components/freelances";


export default function Home() {
    return (
        <div className={styles.homeContainer}>
            <Hero />
            <Carousel />
            <Freelances />
        </div>
    )
}