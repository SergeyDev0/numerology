import React from "react";
import Layout from "../../components/layout/Layout";
import Input from "../../components/input/Input";
import ButtonSolid from "../../components/buttonSolid/ButtonSolid";
import styles from "./Styles.module.scss";
import Wheel from "../../components/wheel/Wheel";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import authStore from "../../stores/authStore";

const Reg = () => {
    const navigate = useNavigate();
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
            fetch("https://numerology-ai.ru/user/api/User/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
                
            })
                .then((response) => {
                    authStore.getEmail(email);
                    navigate("/auth");
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
                    <span>{t("signup")}</span>
                </h1>
                <form className={styles.wrapper} onSubmit={handleSubmit}>
                    <Input
                        text={t("email")}
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        text={t("password")}
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                    />
                    <ButtonSolid
                        button={true}
                        type="submit"
                        text={t("signup")}
                    />
                </form>
                <span className={styles.description}>
                    {t("haveAccount")}&nbsp;{" "}
                    <Link to="/auth">{t("signin")}</Link>
                </span>
                <p className="description">{t("regEmail")}</p>
            </main>
            <Wheel position="center" />
        </Layout>
    );
};

export default Reg;
