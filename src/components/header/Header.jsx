import React from "react";
import styles from "./Header.module.scss";
import ButtonOutline from './../buttonOutline/ButtonOutline';

const Header = () => {
  const [isAuth, setIsAuth] = React.useState(true);
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        {isAuth ? (
          <>
            <ButtonOutline text="En / Ru" />
            <ButtonOutline url="/auth" text="Выйти" />
            <ButtonOutline url="/subscribe" text="Подписка" />
          </>
        ) : (
          <>
            <ButtonOutline text="En / Ru" />
            <ButtonOutline url="/auth" text="Вход" />
            <ButtonOutline url="/registration" text="Регистрация" />
          </>
        )}
      </div>
    </header>
  )
};

export default Header;
