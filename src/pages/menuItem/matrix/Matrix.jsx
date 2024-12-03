import React from "react";
import Layout from "../../../components/layout/Layout";
import Wheel from "../../../components/wheel/Wheel";
import ButtonSolid from "./../../../components/buttonSolid/ButtonSolid";
import styles from "../MenuItem.module.scss";
import Markdown from "react-markdown";
import { useTranslation } from "react-i18next";
import authStore from "../../../stores/authStore";

const Matrix = () => {
    const { t } = useTranslation();
    const [isSendReq, setIsSendReq] = React.useState(false);
    const [messageText, setMessageText] = React.useState("");
    const [dateBirthday, setDateBirthday] = React.useState("");
    const [name, setName] = React.useState("");
    const [text, setText] = React.useState("");

    React.useEffect(() => {
        if((name.length > 0) && (dateBirthday.length > 0)) {
            setText(`Составь подробный нумерологический анализ матрицы судьбы на основе даты рождения и имени. Меня интересуют такие аспекты, как предназначение, кармические задачи, сильные и слабые стороны, а также советы по личностному развитию. Вот данные, которые нужно учесть: Дата рождения: ${dateBirthday}. Полное имя на русском ${name} Задачи на будущее, с которыми хотелось бы разобраться, например: предназначение в карьере, благоприятные периоды для создания семьи и бизнеса, области, где человек может развиваться наиболее успешно. Если возможно, сделай акцент на следующих моментах: Кармические долги и как их можно отработать Какие энергии поддерживают человека в трудные периоды Число жизненного пути и как оно проявляется Подсказки по числу души, внешнему числу, а также рекомендация по отношению к текущему году и предстоящему году (личному году по нумерологическому циклу) Также добавь советы по усилению сильных сторон и проработке слабых качеств, если они есть. Приведи пример действий, которые можно предпринять для гармонизации энергетики и улучшения общей жизненной ситуации`);
        } else {
            setText("");
        }
    }, [name, dateBirthday]);

    let handleSubmit = async (e) => {
        e.preventDefault();
        let data = {
            "text": text,
        };

        if (text.length > 0) {
            fetch("https://numerology-ai.ru/user/api/Promt", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${authStore.accessToken}`
                },
                body: JSON.stringify(data),
                
            })
            .then(async (response) => {
                // Проверяем тип контента
                const contentType = response.headers.get('Content-Type');
            
                if (contentType.includes('application/json')) {
                  // Если приходит JSON
                  return await response.json();
                } else if (contentType.includes('text/plain')) {
                  // Если приходит plain text
                  return await response.text();
                } else {
                  throw new Error('Unknown response format');
                }
              })
              .then((data) => {
                setMessageText(data);
                setIsSendReq(true);
                console.log(data)
              })
              .catch((error) => {
                console.error('Error:', error.message);
              });
        }
    };
    return (
        <Layout>
            <main className={styles.main}>
                <h1 className="title">
                    <span>{t("matrixDestiny")}</span>
                </h1>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.matrix}>
                        {!isSendReq ? (
                            <>
                                <div className={styles.inputWrapper}>
                                    <label htmlFor="date">{t("DateBirth")}</label>
                                    <div className={styles.input}>
                                        <input
                                            id="date"
                                            type="date"
                                            defaultValue="2000-01-01"
                                            onChange={(e) => {
                                                setDateBirthday(e.target.value);
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className={styles.inputWrapper}>
                                    <label htmlFor="name">{t("yourName")}</label>
                                    <div className={styles.input}>
                                        <input
                                            id="name"
                                            type="text"
                                            placeholder={t("girlName")}
                                            onChange={(e) => {
                                                setName(e.target.value);
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className={styles.btnWrapper}>
                                    <ButtonSolid
                                        button={true}
                                        type="submit"
                                        text={t("calculate")}
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className={styles.textWrapper}>
                                    <Markdown>
                                        {
                                            messageText
                                            ? messageText
                                            : "Подождите..."
                                        }
                                    </Markdown>
                                </div>
                            </>
                            // <div className={styles.wrapperBtns}>
                            //     <ButtonSolid text="Задать вопрос" />
                            //     <ButtonSolid text="Завершить" />
                            // </div>
                        )}
                    </div>
                </form>
            </main>
            <Wheel position="bottom" />
        </Layout>
    );
};

export default Matrix;
