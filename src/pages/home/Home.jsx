import React from "react";
import Layout from "./../../components/layout/Layout";
import ButtonSolid from "../../components/buttonSolid/ButtonSolid";
import styles from "./Home.module.scss";
import Wheel from "../../components/wheel/Wheel";

const Home = () => {
    return (
        <Layout>
            <main className="main">
                <div className={styles.textWrapper}>
                    <h1 className="title">
                        <span>Исследуй себя в помощью нумерологии</span>, где
                        числа станут вашими проводниками к самопознанию и успеху
                    </h1>
                    <p className="description">
                        Позвольте расскрыть Ваши тайны, скрытые в Вашем имени и
                        дате рождения. У Вас есть три бесплатных вопроса, чтобы
                        Вы могли принимать более осознанные решения и проживать
                        жизнь в полной мере.
                    </p>
                </div>
                <div className={styles.btnWrapper}>
                    <ButtonSolid url="/auth" text="Задать свой вопрос" />
                </div>
                <p className="subtitle">
                    Наша подписка может быть ключом успеху!
                </p>
                <div className={styles.linksWrapper}>
                    <a href="/">Политика конфиденциальности</a>
                    <a href="/">Условия соглашения</a>
                </div>
            </main>
            <Wheel position="center" />
        </Layout>
    );
};

export default Home;
