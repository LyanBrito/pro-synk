import { Workingwoman } from "../../assets/svg";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <main>
      <div className={styles.textWrapper}>
        <h1>
          CONNECTING <span>FREELANCERS </span>
          AND
          <span> COMPANIES</span>
        </h1>
        <p>
          At ProSync, we connect skilled freelancers with companies in need of
          expertise, making collaborations seamless and efficient for both
          sides.
        </p>
        <button>Find Freelancers</button>
        <div className={styles.countText}>
          <div className={styles.countValue}>
            <h3>400+</h3>
            <p>Companies</p>
          </div>
          <div className={styles.countValue}>
            <h3>7000+</h3>
            <p>Freelancers</p>
          </div>
          <div className={styles.countValue}>
            <h3>55,000+</h3>
            <p>Completed Jobs</p>
          </div>
        </div>
      </div>
      <img src={Workingwoman} alt="working-woman" />
    </main>
  );
}
