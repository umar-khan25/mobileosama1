import type { NextPage } from "next";
import styles from "./s-v-g-icon.module.css";

const SVGIcon: NextPage = () => {
  return (
    <div className={styles.svg}>
      <svg width="47" height="3" viewBox="0 0 47 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.44141 1.41699H45.7747" stroke="#141414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg width="47" height="3" viewBox="0 0 47 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.44141 1.16699H45.7747" stroke="#141414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      <div className={styles.linkBuyIphone15}>
        <div className={styles.buyOwif}>Buy OWIF</div>
      </div>
    </div>
  );
};

export default SVGIcon;
