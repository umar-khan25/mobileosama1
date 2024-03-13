import type { NextPage } from "next";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  whatPaymentMethodsDoesOsa?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({
  whatPaymentMethodsDoesOsa,
}) => {
  return (
    <div className={styles.whatPaymentMethodsDoesOsamParent}>
      <div className={styles.whatPaymentMethods}>
        {whatPaymentMethodsDoesOsa}
      </div>
      <img className={styles.buttonIcon} alt="" src="/button1.svg" />
    </div>
  );
};

export default FrameComponent;
