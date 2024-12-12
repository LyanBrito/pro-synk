import styles from "./free.module.css";
import {
  Star,
  HfStar,
  Bigdatacard,
  Onlinestorecard,
  Changecontrolcard,
} from "../../assets/svg/index";

export default function Freelances() {
  return (
    <section>
      <h1>FREELANCES</h1>
      <div className={styles.products}>
        <div className={styles.card}>
          <img src={Bigdatacard} alt="mapa-mundi-on-a-monitor" />

          <div className={styles.name}>
            <h5>Big Data Analysis</h5>
            <div className={styles.rate}>
              <div className={styles.stars}>
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={HfStar} alt="half-star" />
              </div>

              <h6>
                4.5/<span>5</span>
              </h6>
            </div>
            <p>
              I provide freelance big data analysis, turning data into
              actionable insights to drive business growth.
            </p>
            <h4>$180</h4>
          </div>
        </div>
        <div className={styles.card}>
          <img src={Onlinestorecard} alt="notebook-on-a-table" />

          <div className={styles.name}>
            <h5>Online Store Design</h5>
            <div className={styles.rate}>
              <div className={styles.stars}>
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={HfStar} alt="half-star" />
              </div>

              <h6>
                4.5/<span>5</span>
              </h6>
            </div>
            <p>
              Need a custom online store design? I create user-friendly,
              high-converting e-commerce websites.
            </p>
            <h4>$180</h4>
          </div>
        </div>
        <div className={styles.card}>
          <img src={Changecontrolcard} alt="someone-working-on-a-notebook" />

          <div className={styles.name}>
            <h5>Change Control</h5>
            <div className={styles.rate}>
              <div className={styles.stars}>
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={HfStar} alt="half-star" />
              </div>

              <h6>
                4.5/<span>5</span>
              </h6>
            </div>
            <p>
              My change control services ensure smooth transitions and minimal
              risk during system updates.
            </p>
            <h4>$180</h4>
          </div>
        </div>
      </div>
      <button></button>
    </section>
  );
}
