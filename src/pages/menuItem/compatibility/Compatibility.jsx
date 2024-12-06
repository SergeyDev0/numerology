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

    let handleSubmit = async () => {
        let data = {
            text: `проведи Расширенный и детальный нумерологический анализ совместимости пар, Мужчина рожден ${dateBirthday} года имя ${name}, девушка рождена ${dateBirthday1} года имя ${name1}, анализ включающий описание их личных и жизненных чисел. В настоящее время они определяют свое предпочтение в романтических и семейных отношениях, а также в том, как их энергия взаимодействует с другими жизненными понятиями, такими как дружба, работа и духовное развитие. Основывай свой анализ чисел: Число жизненных путей каждого из партнеров и его влияние на характер, цели и мировоззрение. Число судьбы (судьбоносное число) и то, как оно отражается на основных чертах личности каждого человека. Размер выражений (внешнего проявления), подчеркивая, как каждый из них выглядит и как его воспринимают окружающие. Число души, которое раскроет скрытые желания, мечты и мотивацию каждого партнера. Дайте подробный обзор совместимости этих цифр и описаний, какие аспекты имеют значение, и какие могут быть вызваны на должность. Предоставь рекомендации по тому, как каждый партнер может взаимодействовать с другим, чтобы построить крепкие, устойчивые взаимные и обогащающие отношения. Если возможны ошибочные советы, основанные на их нумерологических характеристиках, также укажите их.`,
        };

        if ((name1 !== "") && (name !== "")) {
            fetch("https://numerology-ai.ru/user/api/Promt", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authStore.accessToken}`,
                },
                body: JSON.stringify(data),
            })
                .then(async (response) => {
                    // Проверяем тип контента
                    const contentType = response.headers.get("Content-Type");

                    if (contentType.includes("application/json")) {
                        // Если приходит JSON
                        return await response.json();
                    } else if (contentType.includes("text/plain")) {
                        // Если приходит plain text
                        return await response.text();
                    } else {
                        throw new Error("Unknown response format");
                    }
                })
                .then((data) => {
                    setMessageText(data.response);
                    setIsSendReq(true);
                    console.log(data);
                })
                .catch((error) => {
                    console.error("Error:", error.message);
                });
        }
    };

    function clearForm() {
        setName("");
        setName1("");
        setDateBirthday("");
        setDateBirthday1("");
    }
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
                                        e.preventDefault()
                                        if ((name1 !== "") && (name !== "")) {
                                            setIsShowAddRes(true);
                                            handleSubmit();
                                        }
                                    }}
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className={styles.inputsWrapper}>
                                <div className={styles.response}>
                                    <Markdown>
                                        {messageAddRes
                                            ? messageAddRes
                                            : "Подождите"}
                                    </Markdown>
                                </div>
                            </div>
                            <div className={styles.btnAddResWrapper}>
                                <ButtonSolid
                                    text={t("back")}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIsShowAddRes(false);
                                        clearForm();
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
