import React from "react";
import ButtonSolid from "../../components/buttonSolid/ButtonSolid";
import authStore from "../../stores/authStore";
import Markdown from "react-markdown";
import Layout from "../../components/layout/Layout";
import styles from "./Test.module.scss";

const Test = () => {
  const [text, setText] = React.useState("");
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {}, [authStore.email]);

  let handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      text: text,
    };

    fetch("https://numerology-ai.ru/user/api/Promt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authStore.accessToken}`,
      },
      body: JSON.stringify(data),
    })
      .then(async (response) => {
        const contentType = response.headers.get("Content-Type");

        if (contentType.includes("application/json")) {
          return await response.json();
        } else if (contentType.includes("text/plain")) {
          return await response.text();
        } else {
          throw new Error("Unknown response format");
        }
      })
      .then((data) => {
        console.log(data);
        setMessage(data.response);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };

  if (localStorage.getItem('email') === "makarkapar@gmail.com") {
    return (
      <Layout>
        <main className={styles.main}>
          <div className={styles.wrapper}>
            <form onSubmit={handleSubmit}>
              <textarea
                id="name"
                type="text"
                className={styles.input}
                placeholder={"Введи запрос"}
                autoComplete="false"
                onChange={(e) => {
                  setText(e.target.value);
                }}
              />
              <div className={styles.btnWrapper}>
                <ButtonSolid button={"true"} type="submit" text={"Отправить"} />
              </div>
            </form>
            <Markdown className={styles.output}>{message}</Markdown>
          </div>
        </main>
      </Layout>
    );
  }
};

export default Test;
