import React from "react";
import wheel from "../../assets/wheel.svg"
import styles from "./Wheel.module.scss";

const Wheel = ({ position }) => {
  return (
    <div className={position === "center" ? `${styles.wheel}` : `${styles.wheelBottom}`}>
      <img src={wheel} />
    </div>
  )
};

export default Wheel;