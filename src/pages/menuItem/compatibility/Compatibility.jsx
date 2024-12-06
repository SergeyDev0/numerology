import React from "react";
import Layout from "../../../components/layout/Layout";
import Wheel from "../../../components/wheel/Wheel";
import woman from "../../../assets/woman.png";
import man from "../../../assets/man.png";
import genderArrows from "../../../assets/gender-arrows.svg";
import ButtonSolid from "../../../components/buttonSolid/ButtonSolid";
import styles from "../MenuItem.module.scss";
import { useTranslation } from "react-i18next";
import Markdown from "react-markdown";

const Compatibility = () => {
    const { t } = useTranslation();
    const [dateBirthday, setDateBirthday] = React.useState("");
    const [name, setName] = React.useState("");
    const [dateBirthday1, setDateBirthday1] = React.useState("");
    const [name1, setName1] = React.useState("");
    const [isShowAddRes, setIsShowAddRes] = React.useState(false);
    const [messageAddRes, setMessageAddRes] = React.useState("");
    return (
        <Layout>
            <main className={styles.mainCompatibility}>
                <h1 className="title">
                    <span>{t("Compatibility")}</span>
                </h1>
                <div className={styles.wrapperCompatibility}>
                    {!isShowAddRes ? (
                        <>
                            <div className={styles.col}>
                                <div className={styles.genderWrapper}>
                                    <img src={man} />
                                    <div className={styles.inputWrapper}>
                                        <div className={styles.input}>
                                            <input
                                                id="date1"
                                                type="date"
                                                value="2000-01-01"
                                                onChange={(e) => {
                                                    setDateBirthday(
                                                        e.target.value
                                                    );
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
                                <img
                                    className={styles.genderImg}
                                    src={genderArrows}
                                />
                                <div className={styles.genderWrapper}>
                                    <img src={woman} />
                                    <div className={styles.inputWrapper}>
                                        <div className={styles.input}>
                                            <input
                                                id="date"
                                                type="date"
                                                value="2000-01-01"
                                                onChange={(e) => {
                                                    setDateBirthday1(
                                                        e.target.value
                                                    );
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
                                                    setName1(e.target.value);
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.btnWrapper}>
                                <ButtonSolid
                                    text={t("calculate")}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIsShowAddRes(true);
                                    }}
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className={styles.inputsWrapper}>
                                <div className={styles.response}>
                                    <Markdown>{messageAddRes ? messageAddRes : "Ответ чата"}</Markdown>
                                </div>
                                <div className={styles.inputAdd}>
                                    <textarea
                                        id="addinput"
                                        type="text"
                                        placeholder="Введите дополнительный запрос"
                                        onChange={(e) => {
                                            setAddRes(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                            <div className={styles.btnAddResWrapper}>
                                <ButtonSolid
                                    text={t("back")}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIsShowAddRes(false);
                                    }}
                                />
                                <ButtonSolid
                                    text={t("send")}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIsShowAddRes(false);
                                    }}
                                />
                            </div>
                        </>
                    )}
                </div>
            </main>
            <Wheel position="center" />
        </Layout>
    );
};

export default Compatibility;
