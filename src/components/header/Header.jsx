import React from "react";
import styles from "./Header.module.scss";
import ButtonOutline from "./../buttonOutline/ButtonOutline";
import languageStore from "../../stores/LanguageStore";
import arrowIcon from "../../assets/arrow-small.svg";
import bigArrowIcon from "../../assets/arrow.svg";
import { useTranslation } from "react-i18next";
import { observer } from "mobx-react-lite";
import authStore from "../../stores/authStore";
import { Link, useLocation } from "react-router-dom";

const Header = observer(() => {
    const { t } = useTranslation();
    let location = useLocation();

    const handleLanguageChange = () => {
        const newLang = languageStore.language === "ru" ? "en" : "ru";
        languageStore.setLanguage(newLang);
    };

    const shouldShowLink = () => {
        return ![
            "/menu", 
            "/auth", 
            "/registration", 
            "/"
        ].includes(location.pathname);
    };
    return (
        <header className={styles.header}>
            <div className={styles.headerWrapper}>
                {authStore.accessToken ? (
                    <>
                        {shouldShowLink() && (
                            <div className={styles.headerBackWrapper}>
                                <Link to="/menu" className={styles.headerBack}>
                                    <img
                                        className={styles.mobile}
                                        src={arrowIcon}
                                        alt="Назад"
                                    />
                                    <div className={styles.desktop}>На главную</div>
                                </Link>
                            </div>
                        )}
                        <nav className={styles.headerNav}>
                            <ButtonOutline
                                text={
                                    languageStore.language === "ru"
                                        ? "Eng"
                                        : "Rus"
                                }
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleLanguageChange();
                                }}
                            />
                            <ButtonOutline
                                url="/auth"
                                text={t("exit")}
                                onClick={() => authStore.logout()}
                            />
                            <ButtonOutline
                                url="/subscribe"
                                text={t("subscribe")}
                            />
                        </nav>
                    </>
                ) : (
                    <>
                        {shouldShowLink() && (
                            <div className={styles.headerBackWrapper}>
                                <Link to="/menu" className={styles.headerBack}>
                                    <img
                                        className={styles.mobile}
                                        src={arrowIcon}
                                        alt="Назад"
                                    />
                                    <div className={styles.desktop}>На главную</div>
                                </Link>
                            </div>
                        )}
                        <nav className={styles.headerNav}>
                            <ButtonOutline
                                text={
                                    languageStore.language === "ru"
                                        ? "Eng"
                                        : "Rus"
                                }
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleLanguageChange();
                                }}
                            />
                            <ButtonOutline url="/auth" text={t("signin")} />
                            <ButtonOutline
                                url="/registration"
                                text={t("signup")}
                            />
                        </nav>
                    </>
                )}
            </div>
        </header>
    );
});

export default Header;
