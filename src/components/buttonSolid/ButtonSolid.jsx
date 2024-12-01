import React from "react";
import { Link } from "react-router-dom";
import styles from "./ButtonSolid.module.scss";

const ButtonSolid = ({ url, text, type, onClick, button }) => {
    if (!button) {
        return (
            <Link
                to={url}
                type={type}
                className={styles.button}
                onClick={onClick}
            >
                {text}
            </Link>
        );
    } else {
        return (
            <button
                type={type}
                className={styles.button}
                onClick={onClick}
            >
                {text}
            </button>
        );
    }
};

export default ButtonSolid;
