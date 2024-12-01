import React from "react";
import Layout from "../../components/layout/Layout";
import Input from "../../components/input/Input";
import ButtonSolid from "../../components/buttonSolid/ButtonSolid";
import styles from "./Styles.module.scss";
import Wheel from "../../components/wheel/Wheel";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Reg = () => {
    const { t } = useTranslation();
    return (
        <Layout>
            <main className="main">
                <h1 className="title"><span>{t("signup")}</span></h1>
                <form className={styles.wrapper}>
                    <Input text={t("email")} id="email" />
                    <Input text={t("password")} id="password" />
                    <ButtonSolid
                        type="submit"
                        text={t("signup")}
                        onClick={e => e.preveventDefault()}
                    />
                </form>
                <span className={styles.description}>{t("haveAccount")}&nbsp; <Link to="/auth">{t("signin")}</Link></span>
                <p className="description">{t("regEmail")}</p>
            </main>
            <Wheel position="center" />
        </Layout>
    );
};

export default Reg;
