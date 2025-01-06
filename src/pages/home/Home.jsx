import React from "react";
import Layout from "./../../components/layout/Layout";
import ButtonSolid from "../../components/buttonSolid/ButtonSolid";
import styles from "./Home.module.scss";
import Wheel from "../../components/wheel/Wheel";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Home = () => {
    const { t } = useTranslation();
    return (
        <Layout>
            <main className="main">
                <div className={styles.textWrapper}>
                    <div className="titleWrapper">
                        <h1 className="title">
                            <span>{t("homeTitleSpan")}</span>
                            {t("homeTitle")}
                        </h1>
                    </div>
                    <p className="description">{t("homeDescription")}</p>
                </div>
                <div className={styles.btnWrapper}>
                    <ButtonSolid url="/menu" text={t("askQuestion")} />
                </div>
                <p className="subtitle">{t("homeSubscribeText")}</p>
                <div className={styles.linksWrapper}>
                    <Link to="/privacy-policy">{t("PrivacyPolicy")}</Link>
                    <Link to="/terms-agreement">{t("TermsAgreement")}</Link>
                </div>
								<div className={styles.copyright}>© All Rights Reserved |&nbsp;<a href="http://webmaxup.ru/" target="_blank">WebMaxUp</a></div>
            </main>
            <Wheel position="center" />
        </Layout>
    );
};

export default Home;
