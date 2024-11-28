import React from "react";
import Layout from "../../../components/layout/Layout";
import Wheel from "../../../components/wheel/Wheel";
import ButtonSolid from './../../../components/buttonSolid/ButtonSolid';
import styles from "../MenuItem.module.scss";

const Matrix = () => {
    const [issendReq, setIsSendReq] = React.useState(true);
    return (
        <Layout>
            <main className="main">
                <h1 className="title"><span>Матрица судьбы</span></h1>
                <form className={styles.form}>
                    <div className={styles.matrix}>
                        <div className={styles.inputWrapper}>
                            <label htmlFor="date">Дата рождения</label>
                            <div className={styles.input}><input id="date" type="date" placeholder="дд.мм.гггг" /></div>
                        </div>
                        <div className={styles.inputWrapper}>
                            <label htmlFor="date">Имя</label>
                            <div className={styles.input}><input id="date" type="text" placeholder="Валерия" /></div>
                        </div>
                    </div>
                    <div className={styles.areaWrapper}>
                        <textarea placeholder="Задать дополнительный вопрос..." />
                    </div>
                    {
                        issendReq ? (
                            <div className={styles.wrapperBtns}>
                                <ButtonSolid text="Задать вопрос" />
                                <ButtonSolid text="Завершить" />
                            </div>
                        ) : (
                            <ButtonSolid text="Рассчитать матрицу" />
                        )
                    }
                </form>
            </main>
            <Wheel position="center" />
        </Layout>
    );
};

export default Matrix;
