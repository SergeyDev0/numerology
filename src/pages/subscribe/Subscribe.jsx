import React from "react";
import Layout from "../../components/layout/Layout";
import styles from "./Subscribe.module.scss";
import ButtonSolid from "../../components/buttonSolid/ButtonSolid";
import Wheel from "../../components/wheel/Wheel";
import { useTranslation } from "react-i18next";
import authStore from "../../stores/authStore";

const Subscribe = () => {
    const { t } = useTranslation();
    let handleClick = async (e) => {
        e.preventDefault();
        let data = {
            "amount": 990,
            "description": "Subscription numerology-ai.ru for 30 calendar days",
            "email": authStore.email,
        };

        fetch("https://numerology-ai.ru/user/api/payment/createPayment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${authStore.accessToken}`,
            },
            body: JSON.stringify(data),
        })
            .then(async (response) => {
                const contentType = response.headers.get("Content-Type");

                if (contentType.includes("application/json")) {
                    return await response.json();
                } else if (contentType.includes("text/plain")) {
                    return await response.text();
                } else {
                    throw new Error("Unknown response format");
                }
            })
            .then((data) => {
                if(data.url) {
                    window.location.href = data.url;
                }
            })
            .catch((error) => {
                console.error("Error:", error.message);
            });
    };
    return (
        <Layout>
            <main className="main">
                <h1 className="title">
                    <span>{t("SubscribeTitle")}</span>
                </h1>
                <ul className={styles.list}>
                    <li className={styles.item}>{t("SubscribeItem1")}</li>
                    <li className={styles.item}>{t("SubscribeItem2")}</li>
                    <li className={styles.item}>{t("SubscribeItem3")}</li>
                    <li className={styles.item}>{t("SubscribeItem4")}</li>
                    <li className={styles.item}>{t("SubscribeItem5")}</li>
                </ul>
                <div className={styles.subscribeBtn}><ButtonSolid url="/" text={t("SubscribeBtn")} onClick={handleClick} /></div>
            </main>
            <Wheel position="center" />
        </Layout>
    );
};

export default Subscribe;
