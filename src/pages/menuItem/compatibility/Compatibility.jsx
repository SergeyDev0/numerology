import React from "react";
import Layout from "../../../components/layout/Layout";
import Wheel from "../../../components/wheel/Wheel";
import woman from "../../../assets/woman.png";
import man from "../../../assets/man.png";
import genderArrows from "../../../assets/gender-arrows.svg";
import ButtonSolid from "../../../components/buttonSolid/ButtonSolid";
import styles from "../MenuItem.module.scss";
import { useTranslation } from "react-i18next";

const Compatibility = () => {
    const { t } = useTranslation();
    return (
        <Layout>
            <main className={styles.mainCompatibility}>
                <h1 className="title">
                    <span>{t("Compatibility")}</span>
                </h1>
                <div className={styles.wrapperCompatibility}>
                    <div className={styles.col}>
                        <div className={styles.genderWrapper}>
                            <img src={man} />
                            <div className={styles.inputWrapper}>
                                <div className={styles.input}>
                                    <input
                                        id="date"
                                        type="date"
                                        value="2000-01-01"
                                        onChange={(e) => {
                                            setDateBirthday(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                            <div className={styles.inputWrapper}>
                                <div className={styles.input}>
                                    <input
                                        id="date"
                                        type="text"
                                        placeholder={t("manName")}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <img className={styles.genderImg} src={genderArrows} />
                        <div className={styles.genderWrapper}>
                            <img src={woman} />
                            <div className={styles.inputWrapper}>
                                <div className={styles.input}>
                                    <input
                                        id="date"
                                        type="date"
                                        value="2000-01-01"
                                        onChange={(e) => {
                                            setDateBirthday(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                            <div className={styles.inputWrapper}>
                                <div className={styles.input}>
                                    <input
                                        id="date"
                                        type="text"
                                        placeholder={t("girlName")}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.btnWrapper}>
                        <ButtonSolid
                            text={t("calculate")}
                            onClick={() => {
                            }}
                        />
                    </div>
                </div>
            </main>
            <Wheel position="center" />
        </Layout>
    );
};

export default Compatibility;
