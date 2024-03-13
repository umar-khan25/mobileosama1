import type { NextPage } from "next";
import styles from "./frame-component1.module.css";

const FrameComponent1: NextPage = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.welcomeToOwifOsamaWifHaParent}>
          <div className={styles.welcomeToOwifContainer}>
            <span className={styles.welcomeToOwifContainer1}>
              <p className={styles.welcomeToOwif}>{`Welcome to OWIF - `}</p>
              <p className={styles.osamaWifHat}>{`Osama WIF Hat  `}</p>
              <p className={styles.welcomeToOwif}>Victory in Bankanistan!</p>
            </span>
          </div>
          <div className={styles.warAgainstBanks}>
            WAR AGAINST BANKS IT’s HAPPENING NOW
          </div>
        </div>
        <div className={styles.linkBuyIphone15}>
          <div className={styles.buyNowOnContainer}>
            <p className={styles.welcomeToOwif}>BUY NOW On UNISWAP</p>
            <p className={styles.welcomeToOwif}>Contract is 0x98935892384234</p>
          </div>
        </div>
      </div>
      <div className={styles.enlistInThe}>
        Enlist in the Victory of Finance - Join the Osama WIF HAT Revolution!
      </div>
    </div>
  );
};

export default FrameComponent1;
