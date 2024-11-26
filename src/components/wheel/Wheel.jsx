import React from "react";
import wheel from "../../assets/wheel.svg"
import styles from "./Wheel.module.scss";

const Wheel = () => {
  return (
    <div className={styles.wheel}>
      <img src={wheel} />
    </div>
  )
};

export default Wheel;