import React from "react";
import Layout from "../../components/layout/Layout";
import styles from "./Subscribe.module.scss";
import ButtonSolid from '../../components/buttonSolid/ButtonSolid';
import Wheel from "../../components/wheel/Wheel";
import { useTranslation } from "react-i18next";

const Subscribe = () => {
    const { t } = useTranslation();
    return (
        <Layout>
            <main className="main">
                <h1 className="title"><span>{t("SubscribeTitle")}</span></h1>
                <ul className={styles.list}>
                    <li className={styles.item}>{t("SubscribeItem1")}</li>
                    <li className={styles.item}>{t("SubscribeItem2")}</li>
                    <li className={styles.item}>{t("SubscribeItem3")}</li>
                    <li className={styles.item}>{t("SubscribeItem4")}</li>
                    <li className={styles.item}>{t("SubscribeItem5")}</li>
                </ul>
                <ButtonSolid url="/" text={t("SubscribeBtn")} />
            </main>
            <Wheel position="center" />
        </Layout>
    );
};

export default Subscribe;
