import React from "react"
import { Link } from "react-router-dom";
import styles from "./ButtonSolid.module.scss";

const ButtonSolid = ({ url, text, type, onClick }) => {
  
  return (
    <Link 
      to={url} 
      type={type} 
      className={styles.button}
      onClick={onClick}
    >
      {text}
    </Link>
  )
};

export default ButtonSolid;
