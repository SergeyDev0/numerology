import React from "react";
import Layout from "../../../components/layout/Layout";
import Wheel from "../../../components/wheel/Wheel";
import woman from "../../../assets/woman.png";
import man from "../../../assets/man.png";
import genderArrows from "../../../assets/gender-arrows.svg";
import styles from "../MenuItem.module.scss";
import ButtonSolid from "../../../components/buttonSolid/ButtonSolid";

const Compatibility = () => {
    return (
        <Layout>
            <main className={styles.mainCompatibility}>
                <h1 className="title">
                    <span>Совместимость</span>
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
                                        placeholder="Никита"
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
                                        placeholder="Валерия"
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
                            text="Рассчитать"
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
