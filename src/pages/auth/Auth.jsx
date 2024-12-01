import React from "react";
import Layout from "../../components/layout/Layout";
import Input from "../../components/input/Input";
import ButtonSolid from "../../components/buttonSolid/ButtonSolid";
import styles from "./Styles.module.scss";
import Wheel from "../../components/wheel/Wheel";
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const Auth = () => {
    const { t } = useTranslation();
    return (
        <Layout>
            <main className="main">
                <h1 className="title"><span>{t("signin")}</span></h1>
                <form className={styles.wrapper}>
                    <Input text={t("email")} id="email" />
                    <Input text={t("password")} id="password" />
                    <ButtonSolid
                        type="submit"
                        text={t("signin")}
                        onClick={e => e.preveventDefault()}
                    />
                </form>
                <span className={styles.description}>{t("notAccount")}&nbsp; <Link to="/registration">{t("signup")}</Link></span>
            </main>
            <Wheel position="center" />
        </Layout>
    );
};

export default Auth;
