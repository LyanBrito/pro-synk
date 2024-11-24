import styles from "./header.module.css";
import { Logo } from "../../assets/svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <Link to="/">
        <p className={styles.headerLogo}>
          <img src={Logo} alt="Logo for ProSync" />
          <h1>
            Pro<span>Sync</span>
          </h1>
        </p>
      </Link>
      <nav>
        <Link to="#">
          <p>Find freelancers</p>
        </Link>
        <Link to="#">
          <p>Work with us</p>
        </Link>
      </nav>
      <div className={styles.loginContainer}>
        <button>Login</button>
        <button>Register</button>
      </div>
    </header>
  );
}