import React from "react";
import Layout from "../../../components/layout/Layout";
import Wheel from "../../../components/wheel/Wheel";
import styles from "../MenuItem.module.scss";

const Compatibility = () => {
    return (
        <Layout>
            <main className={styles.main}>
                <h1 className="title">
                    <span>Календарь событий</span>
                </h1>
                
            </main>
            <Wheel position="bottom" />
        </Layout>
    );
};

export default Compatibility;
