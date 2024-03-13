import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./buyback-operations-container.module.css";

export type BuybackOperationsContainerType = {
  buybackOperations?: string;
  strategicBuybackMissionsE?: string;
  fCB7EABB534485BB0E9B79CBD?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
};

const BuybackOperationsContainer: NextPage<BuybackOperationsContainerType> = ({
  buybackOperations,
  strategicBuybackMissionsE,
  fCB7EABB534485BB0E9B79CBD,
  propLeft,
  propWidth,
}) => {
  const fCB7EABB534485BB0E9B79CBDAIconStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
      width: propWidth,
    };
  }, [propLeft, propWidth]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.buybackOperationsParent}>
        <div className={styles.buybackOperations}>{buybackOperations}</div>
        <div className={styles.strategicBuybackMissions}>
          {strategicBuybackMissionsE}
        </div>
      </div>
      <img
        className={styles.fcb7eabB534485bB0e9B79cbdaIcon}
        alt=""
        src={fCB7EABB534485BB0E9B79CBD}
        style={fCB7EABB534485BB0E9B79CBDAIconStyle}
      />
    </div>
  );
};

export default BuybackOperationsContainer;
