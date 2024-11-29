import React from "react";
import OpenAI from "openai";
import Layout from "../../../components/layout/Layout";
import Wheel from "../../../components/wheel/Wheel";
import ButtonSolid from "./../../../components/buttonSolid/ButtonSolid";
import styles from "../MenuItem.module.scss";
import Markdown from "react-markdown";

const Periods = () => {
    const openai = new OpenAI({
        apiKey: "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",
        dangerouslyAllowBrowser: true,
    });
    const [isSendReq, setIsSendReq] = React.useState(false);
    const [messageText, setMessageText] = React.useState("");
    const [dateBirthday, setDateBirthday] = React.useState("");
    const [name, setName] = React.useState("");

    async function message() {
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "Ты нумеролог" },
                {
                    role: "user",
                    content: `Составь подробный нумерологический анализ матрицы судьбы на основе даты рождения и имени. Меня интересуют такие аспекты, как предназначение, кармические задачи, сильные и слабые стороны, а также советы по личностному развитию. Вот данные, которые нужно учесть: Дата рождения: ${dateBirthday}. Полное имя на русском ${name} Задачи на будущее, с которыми хотелось бы разобраться, например: предназначение в карьере, благоприятные периоды для создания семьи и бизнеса, области, где человек может развиваться наиболее успешно. Если возможно, сделай акцент на следующих моментах: Кармические долги и как их можно отработать Какие энергии поддерживают человека в трудные периоды Число жизненного пути и как оно проявляется Подсказки по числу души, внешнему числу, а также рекомендация по отношению к текущему году и предстоящему году (личному году по нумерологическому циклу) Также добавь советы по усилению сильных сторон и проработке слабых качеств, если они есть. Приведи пример действий, которые можно предпринять для гармонизации энергетики и улучшения общей жизненной ситуации.`,
                },
            ],
        });

        setMessageText(completion.choices[0].message.content);
    }
    return (
        <Layout>
            <main className={styles.main}>
                <h1 className="title">
                    <span>Жизненные периоды <br /> и точки роста</span>
                </h1>
                <form className={styles.form}>
                    <div className={styles.matrix}>
                        {!isSendReq ? (
                            <>
                                <div className={styles.inputWrapper}>
                                    <label htmlFor="date">Дата рождения</label>
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
                                    <label htmlFor="date">Имя</label>
                                    <div className={styles.input}>
                                        <input
                                            id="date"
                                            type="text"
                                            placeholder="Ваше имя"
                                            onChange={(e) => {
                                                setName(e.target.value);
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className={styles.btnWrapper}>
                                    <ButtonSolid
                                        text="Рассчитать"
                                        onClick={() => {
                                            setIsSendReq(true);
                                            message();
                                        }}
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className={styles.textWrapper}>
                                    <Markdown>
                                        {messageText
                                            ? messageText
                                            : "Подождите..."}
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

export default Periods;
