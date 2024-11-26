import React from "react"
import { Link } from "react-router-dom";
import styles from "./ButtonOutline.module.scss";

const ButtonOutline = ({ url, text }) => {
  return (
    <Link to={url} className={styles.button}>  
      {text}
    </Link>
  )
};

export default ButtonOutline;
