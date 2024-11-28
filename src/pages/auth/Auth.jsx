import React from "react";
import Layout from "../../components/layout/Layout";
import Input from "../../components/input/Input";
import ButtonSolid from "../../components/buttonSolid/ButtonSolid";
import styles from "./Styles.module.scss";
import Wheel from "../../components/wheel/Wheel";

const Auth = () => {
    return (
        <Layout>
            <main className="main">
                <h1 className="title"><span>Авторизация</span></h1>
                <form className={styles.wrapper}>
                    <Input text="Почта" id="email" />
                    <Input text="Пароль" id="password" />
                    <ButtonSolid
                        type="submit"
                        text="Войти"
                        onClick={e => e.preveventDefault()}
                    />
                </form>
                <p className="description">
                    После регистрации, вам прийдет на почту ссылка для
                    подтверждения вашей учётной записи, пожалуйста проверьте
                    папку «спам» иногда подтверждение e-mail попадает туда
                </p>
            </main>
            <Wheel position="center" />
        </Layout>
    );
};

export default Auth;
