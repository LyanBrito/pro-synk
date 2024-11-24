import styles from "./header.module.css";
import { Logo } from "../../assets/svg";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <a href="#" className={styles.headerLogo}>
        <img src={Logo} alt="Logo for ProSync" />
        <h1>
          Pro<span>Sync</span>
        </h1>
      </a>
      <nav>
        <a href="#">Find freelancers</a>
        <a href="#">Work with us</a>
      </nav>
      <div className={styles.loginContainer}>
        <button>Login</button>
        <button>Register</button>
      </div>
    </header>
  );
}