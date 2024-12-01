import React from "react";
import Layout from "../../components/layout/Layout";
import Wheel from "../../components/wheel/Wheel";
import styles from "./Menu.module.scss";
import img1 from "../../assets/menu1.png";
import img2 from "../../assets/menu2.png";
import img3 from "../../assets/menu3.png";
import img4 from "../../assets/menu4.png";
import img5 from "../../assets/menu5.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Menu = () => {
    const { t } = useTranslation();
    return (
        <Layout>
            <main className={styles.main}>
                <div className={styles.wrapper}>
                    <div className={styles.col}>
                        <Link to="/matrix">
                            <img src={img1} alt={t("matrixDestiny")} />
                            <p>{t("matrixDestiny")}</p>
                        </Link>
                        <Link to="/periods">
                            <img
                                src={img2}
                                alt={t("periodsTitle")}
                            />
                            <p>{t("periodsTitle")}</p>
                        </Link>
                    </div>
                    <div className={styles.col}>
                        <Link to="/compatibility">
                            <img src={img3} alt={t("Compatibility")} />
                            <p>{t("Compatibility")}</p>
                        </Link>
                        <Link to="/prognosis">
                            <img src={img4} alt={t("Prognosis")} />
                            <p>{t("Prognosis")}</p>
                        </Link>
                        <Link to="/calendar">
                            <img src={img5} alt={t("EventsCalendar")} />
                            <p>{t("EventsCalendar")}</p>
                        </Link>
                    </div>
                </div>
            </main>
            <Wheel position="bottom" />
        </Layout>
    );
};

export default Menu;
