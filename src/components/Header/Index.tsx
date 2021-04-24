import styles from "./styles.module.scss";
import Dating from "../../utils/Dating";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="Podcastr" />
      <p>O melhor para você ouvir, sempre.</p>
      <span>{Dating.getDate()}</span>
    </header>
  );
}
