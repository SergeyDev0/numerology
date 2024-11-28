import React from "react";
import Layout from "../../components/layout/Layout";
import styles from "./Subscribe.module.scss";
import ButtonSolid from '../../components/buttonSolid/ButtonSolid';
import Wheel from "../../components/wheel/Wheel";

const Subscribe = () => {
    return (
        <Layout>
            <main className="main">
                <h1 className="title"><span>Оформи подписку на 30 календарных дней</span></h1>
                <ul className={styles.list}>
                    <li className={styles.item}>Неограниченное количество гаданий</li>
                    <li className={styles.item}>Предсказание дня</li>
                    <li className={styles.item}>Прогноз на месяц</li>
                    <li className={styles.item}>Анонимно</li>
                    <li className={styles.item}>Постоянные обновления!</li>
                </ul>
                <ButtonSolid url="/" text="Оформить подписку" />
            </main>
            <Wheel position="center" />
        </Layout>
    );
};

export default Subscribe;
