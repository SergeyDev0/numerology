import React from "react"
import { Link } from "react-router-dom";
import styles from "./ButtonOutline.module.scss";

const ButtonOutline = ({ url, text, onClick }) => {
  return (
    <Link to={url} className={styles.button} onClick={onClick}>  
      {text}
    </Link>
  )
};

export default ButtonOutline;
