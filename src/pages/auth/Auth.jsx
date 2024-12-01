import React from "react";
import Layout from "../../components/layout/Layout";
import Input from "../../components/input/Input";
import ButtonSolid from "../../components/buttonSolid/ButtonSolid";
import styles from "./Styles.module.scss";
import Wheel from "../../components/wheel/Wheel";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Auth = () => {
    const { t } = useTranslation();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        let data = {
            "email": email,
            "password": password,
        };

        if ((email.length > 0) && (password.length > 0)) {
            let config = {
                method: "post",
                maxBodyLength: Infinity,
                url: "",
                headers: {
                    "Content-Type": "application/json",
                },
                data: JSON.stringify(data),
            };

            axios
                .request(config)
                .then((response) => {
                    authStore.getEmail(email);
                    // navigate("/code");
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };
    return (
        <Layout>
            <main className="main">
                <h1 className="title">
                    <span>{t("signin")}</span>
                </h1>
                <form className={styles.wrapper} onSubmit={handleSubmit}>
                    <Input text={t("email")} id="email" onChange={(e) => setEmail(e.target.value)} />
                    <Input text={t("password")} id="password" onChange={(e) => setPassword(e.target.value)} />
                    <ButtonSolid
                        type="submit"
                        text={t("signin")}
                        onClick={(e) => e.preveventDefault()}
                    />
                </form>
                <span className={styles.description}>
                    {t("notAccount")}&nbsp;{" "}
                    <Link to="/registration">{t("signup")}</Link>
                </span>
            </main>
            <Wheel position="center" />
        </Layout>
    );
};

export default Auth;
