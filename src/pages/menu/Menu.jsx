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

const Menu = () => {
    return (
        <Layout>
            <main className={styles.main}>
                <div className={styles.wrapper}>
                    <div className={styles.col}>
                        <Link to="/matrix">
                            <img src={img1} alt="Матрица судьбы" />
                            <p>Матрица судьбы</p>
                        </Link>
                        <Link to="/">
                            <img
                                src={img2}
                                alt="Жизненные периоды и точки роста"
                            />
                            <p>Жизненные периоды и точки роста</p>
                        </Link>
                    </div>
                    <div className={styles.col}>
                        <Link to="/">
                            <img src={img3} alt="Совместимость" />
                            <p>Совместимость</p>
                        </Link>
                        <Link to="/">
                            <img src={img4} alt="Прогноз на день/неделю" />
                            <p>Прогноз на день/неделю</p>
                        </Link>
                        <Link to="/calendar">
                            <img src={img5} alt="Календарь событий" />
                            <p>Календарь событий</p>
                        </Link>
                    </div>
                </div>
            </main>
            <Wheel position="bottom" />
        </Layout>
    );
};

export default Menu;
