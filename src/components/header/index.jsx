import styles from "./header.module.css";
import { Login, Logo, Lupa } from "../../assets/svg";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerLogo}>
        <img src={Logo} alt="Logo for ProSync" />
        <h1>
          Pro<span>Sync</span>
        </h1>
      </div>
      <nav>
        <a href="#">Find freelancers</a>
        <a href="#">Work with us</a>
      </nav>

      <div className={styles.loginContainer}>
        <a href="#">Login</a>
        <a href="#">Register</a>
      </div>
    </header>
  );
}
