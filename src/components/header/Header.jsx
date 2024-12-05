import React from "react";
import styles from "./Header.module.scss";
import ButtonOutline from "./../buttonOutline/ButtonOutline";
import languageStore from "../../stores/LanguageStore";
import { useTranslation } from "react-i18next";
import { observer } from "mobx-react-lite";
import authStore from "../../stores/authStore";

const Header = observer(() => {
    const { t } = useTranslation();

    const handleLanguageChange = () => {
        const newLang = languageStore.language === 'en' ? 'ru' : 'en';
        languageStore.setLanguage(newLang);
    };
    return (
        <header className={styles.header}>
            <div className={styles.headerWrapper}>
                {authStore.accessToken ? (
                    <>
                        <ButtonOutline text="En / Ru" onClick={(e) => {
                            e.preventDefault();
                            handleLanguageChange();
                        }} />
                        <ButtonOutline url="/auth" text={t('exit')} onClick={() => authStore.logout()} />
                        <ButtonOutline url="/subscribe" text={t('subscribe')} />
                    </>
                ) : (
                    <>
                        <ButtonOutline text="En / Ru" onClick={(e) => {
                            e.preventDefault();
                            handleLanguageChange();
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
