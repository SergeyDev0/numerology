import React from "react";
import styles from "./Header.module.scss";
import ButtonOutline from './../buttonOutline/ButtonOutline';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <ButtonOutline to="/" text="Вход" />
        <ButtonOutline to="/" text="Регистрация" />
      </div>
    </header>
  )
};

export default Header;
