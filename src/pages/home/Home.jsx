import React from "react";
import Layout from "./../../components/layout/Layout";
import ButtonSolid from "../../components/buttonSolid/ButtonSolid";
import styles from "./Home.module.scss";
import Wheel from "../../components/wheel/Wheel";
import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation();
    return (
        <Layout>
            <main className="main">
                <div className={styles.textWrapper}>
                    <h1 className="title">
                        <span>{t("homeTitleSpan")}</span>
                        {t("homeTitle")}
                    </h1>
                    <p className="description">{t("homeDescription")}</p>
                </div>
                <div className={styles.btnWrapper}>
                    <ButtonSolid url="/auth" text={t("askQuestion")} />
                </div>
                <p className="subtitle">{t("homeSubscribeText")}</p>
                <div className={styles.linksWrapper}>
                    <a href="/">{t("PrivacyPolicy")}</a>
                    <a href="/">{t("TermsAgreement")}</a>
                </div>
            </main>
            <Wheel position="center" />
        </Layout>
    );
};

export default Home;
