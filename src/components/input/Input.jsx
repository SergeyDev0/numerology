import React from "react";
import styles from "./Input.module.scss";

const Input = ({ text, id }) => {
  return (
    <div className={styles.input}>
        <label htmlFor={id}>{text}</label>
        <div id={id} className={styles.inputWrapper}>
          <input type="text" />
        </div>
    </div>
  )
};

export default Input;
