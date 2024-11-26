import React from "react"
import { Link } from "react-router-dom";
import styles from "./ButtonSolid.module.scss";

const ButtonSolid = ({ url, text }) => {
  return (
    <Link to={url} className={styles.button}>
      {text}
    </Link>
  )
};

export default ButtonSolid;
