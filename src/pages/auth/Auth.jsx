import React from "react";
import Layout from "../../components/layout/Layout";
import Input from "../../components/input/Input";
import ButtonSolid from "../../components/buttonSolid/ButtonSolid";
import styles from "./Styles.module.scss";
import Wheel from "../../components/wheel/Wheel";
import { Link } from 'react-router-dom';
import i18n from "../../i18n.js";

const Auth = () => {
    return (
        <Layout>
            <main className="main">
                <h1 className="title"><span>{i18n.t('appTitle')}</span></h1>
                <form className={styles.wrapper}>
                    <Input text="Почта" id="email" />
                    <Input text="Пароль" id="password" />
                    <ButtonSolid
                        type="submit"
                        text="Войти"
                        onClick={e => e.preveventDefault()}
                    />
                </form>
                <span className={styles.description}>Нет аккаунта?&nbsp; <Link to="/registration">Регистрация</Link></span>
            </main>
            <Wheel position="center" />
        </Layout>
    );
};

export default Auth;
