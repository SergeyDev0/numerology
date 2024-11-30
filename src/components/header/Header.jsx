import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Header.module.scss";
import ButtonOutline from "./../buttonOutline/ButtonOutline";

const Header = () => {
    const [isAuth, setIsAuth] = React.useState(true);
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = React.useState(i18n.language);

    const handleChangeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setLanguage(lng);
    };
    return (
        <header className={styles.header}>
            <div className={styles.headerWrapper}>
                {isAuth ? (
                    <>
                        <button onClick={() => handleChangeLanguage('en')}>English</button>
      <button onClick={() => handleChangeLanguage('ru')}>Русский</button>
                        <ButtonOutline url="/auth" text={i18n.t('welcomeMessage')} />
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
    );
};

export default Header;
