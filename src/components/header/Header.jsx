import React from "react";
import styles from "./Header.module.scss";
import ButtonOutline from "./../buttonOutline/ButtonOutline";
import languageStore from "../../stores/LanguageStore";
import { useTranslation } from "react-i18next";
import { observer } from "mobx-react-lite";

const Header = observer(() => {
    const [isAuth, setIsAuth] = React.useState(true);
    const { t } = useTranslation();

    const handleLanguageChange = () => {
        const newLang = languageStore.language === 'en' ? 'ru' : 'en';
        languageStore.setLanguage(newLang);
    };
    return (
        <header className={styles.header}>
            <div className={styles.headerWrapper}>
                {isAuth ? (
                    <>
                        <ButtonOutline text="En / Ru" onClick={(e) => {
                            e.preventDefault();
                            handleLanguageChange();
                        }} />
                        <ButtonOutline url="/auth" text={t('exit')} />
                        <ButtonOutline url="/subscribe" text={t('subscribe')} />
                    </>
                ) : (
                    <>
                        <ButtonOutline text="En / Ru" onClick={(e) => {
                            e.preventDefault();

                        }} />
                        <ButtonOutline url="/auth" text={t('signin')} />
                        <ButtonOutline url="/registration" text={t('signup')} />
                    </>
                )}
            </div>
        </header>
    );
});

export default Header;
