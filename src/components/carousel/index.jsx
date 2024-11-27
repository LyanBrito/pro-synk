import styles from "./carousel.module.css"

export default function Carousel() {
    return (
        <section className={styles.carouselContainer}>
            <div className={styles.carouselItens}>
                <a href="#">WEBSITE</a>
                <a href="#">DESIGN</a>
                <a href="#">MARKETING</a>
                <a href="#">EDITING</a>
                <a href="#">SCRIPTS</a>
                <a href="#">WEBSITE</a>
                <a href="#">DESIGN</a>
                <a href="#">MARKETING</a>
                <a href="#">EDITING</a>
                <a href="#">SCRIPTS</a>
                <a href="#">WEBSITE</a>
                <a href="#">DESIGN</a>
                <a href="#">MARKETING</a>
                <a href="#">EDITING</a>
                <a href="#">SCRIPTS</a>
            </div>
        </section>
    )

}