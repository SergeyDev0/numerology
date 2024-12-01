import React from "react";
import styles from "./Input.module.scss";

const Input = ({ text, id, onChange, type }) => {
  return (
    <div className={styles.input}>
        <label htmlFor={id}>{text}</label>
        <div id={id} className={styles.inputWrapper}>
          <input type={type} onChange={onChange}  />
        </div>
    </div>
  )
};

export default Input;
