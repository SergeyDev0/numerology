import React from "react";
import Layout from "../../../components/layout/Layout";
import Wheel from "../../../components/wheel/Wheel";
import ButtonSolid from "./../../../components/buttonSolid/ButtonSolid";
import Markdown from "react-markdown";
import AdditionalIcon from "../../../assets/additional.svg";
import { useTranslation } from "react-i18next";
import authStore from "../../../stores/authStore";
import SendIcon from "../../../assets/send.svg";
import styles from "../MenuItem.module.scss";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

const Matrix = observer(() => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isSendReq, setIsSendReq] = React.useState(false);
  const [isAddResClick, setIsAddResClick] = React.useState(false);
  const [isShowAddRes, setIsShowAddRes] = React.useState(false);
  const [messageAddRes, setMessageAddRes] = React.useState("");
  const [messageText, setMessageText] = React.useState("");
  const [addRes, setAddRes] = React.useState("");
  const [dateBirthday, setDateBirthday] = React.useState("01.01.2020");
  const [name, setName] = React.useState("");
  const [isWaitRes, setIsWaitRes] = React.useState(false);
  const [isWaitRes2, setIsWaitRes2] = React.useState(false);
  const [isWaitRes3, setIsWaitRes3] = React.useState(false);
  const [isWaitRes4, setIsWaitRes4] = React.useState(false);
  const [isWaitRes5, setIsWaitRes5] = React.useState(false);
	const [prompt, setPrompt] = React.useState("1");
  const [isMobile, setIsMobile] = React.useState(
    window.matchMedia("(max-width: 970px)").matches
  );

  let postAddResponse = async (e) => {
    e.preventDefault();
    let data = {
      text: `Ты в роли нумеролога. Ответь на вопрос: ${addRes} для человека, которому составили подробный нумерологический анализ матрицы судьбы на основе даты рождения и имени, если бы ты являлся нумерологом. Меня интересуют такие аспекты, как предназначение, кармические задачи, сильные и слабые стороны, а также советы по личностному развитию. Вот данные, которые нужно учесть: Дата рождения: ${dateBirthday}. Полное имя на русском ${name} Задачи на будущее, с которыми хотелось бы разобраться, например: предназначение в карьере, благоприятные периоды для создания семьи и бизнеса, области, где человек может развиваться наиболее успешно. Если возможно, сделай акцент на следующих моментах: Кармические долги и как их можно отработать Какие энергии поддерживают человека в трудные периоды Число жизненного пути и как оно проявляется Подсказки по числу души, внешнему числу, а также рекомендация по отношению к текущему году и предстоящему году (личному году по нумерологическому циклу) Также добавь советы по усилению сильных сторон и проработке слабых качеств, если они есть. Приведи пример действий, которые можно предпринять для гармонизации энергетики и улучшения общей жизненной ситуации. Не расписывай анализ матрицы судьбы, ответь только на вопрос на основе того, ответа который ты бы дал.`,
    };

    if (addRes.length > 0) {
      fetch("https://numerology-ai.ru/user/api/Promt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authStore.accessToken}`,
        },
        body: JSON.stringify(data),
      })
        .then(async (response) => {
          // Проверяем тип контента
          const contentType = response.headers.get("Content-Type");

          if (contentType.includes("application/json")) {
            // Если приходит JSON
            return await response.json();
          } else if (contentType.includes("text/plain")) {
            // Если приходит plain text
            return await response.text();
          } else {
            throw new Error("Unknown response format");
          }
        })
        .then((data) => {
          if (data.description === "Бесплатные попытки закончились!") {
            navigate("/subscribe");
          }
          setMessageAddRes(data.response);
          setIsShowAddRes(true);
          setIsWaitRes(false);
          setIsWaitRes2(false);
          setIsWaitRes3(false);
          setIsWaitRes4(false);
          setIsWaitRes5(false);
        })
        .catch((error) => {
          console.error("Error:", error.message);
          setIsWaitRes(false);
          setIsWaitRes2(false);
          setIsWaitRes3(false);
          setIsWaitRes4(false);
          setIsWaitRes5(false);
        });
    }
  };

  let handleSubmit = async (e, handlePrompt) => {
    e.preventDefault();
		let data = {};

		let isPrompt = handlePrompt ? handlePrompt : prompt

    switch (isPrompt) {
      case "1":
        data = {
          text: `Ты профессиональный нумеролог. Составь подробный нумерологический анализ для матрицы судьбы, рассчитай и опиши детально число жизненного пути на основе даты рождения и имени. Для человека рожденного ${dateBirthday}. По имени ${name}.  Дай советы  советы по личностному развитию на основе числа жизненного пути  так же на основании числа жизненного пути дай рекомендации в карьере, благоприятные периоды для создания семьи и бизнеса, области, где человек может развиваться наиболее успешно.  Отвечай подробно.`,
        };
        break;
      case "2":
        data = {
          text: `Ты профессиональный нумеролог. Составь подробный нумерологический анализ для матрицы судьбы, рассчитай и опиши детально число личности на основе даты рождения и имени. Для человека рожденного ${dateBirthday}. По имени ${name}.  Распиши  как это число влияет на  судьбу и личностные качества человека, его характер, опиши детально. Распиши каким этот человек будет в жизни, в карьере, в отношениях, дай рекомендации как ему достичь успехов в этих областях исходя из его  числа личности.`,
        };
        break;
      case "3":
        data = {
          text: `Ты профессиональный нумеролог. Составь подробный нумерологический анализ для матрицы судьбы, рассчитай и опиши детально число судьбы на основе даты рождения и имени. Для человека рожденного ${dateBirthday}. По имени ${name}. распиши сильные стороны человека исходя из его числа судьбы, что еду дается легко и где он может преуспеть, а так же укажи на слабые стороны на которые следует обратить внимание и усилить их, чтобы добить успеха во всех поставленных задачах. Опиши детально.`,
        };
        break;
      case "4":
        data = {
          text: `Ты профессиональный нумеролог. Составь подробный нумерологический анализ для матрицы судьбы, рассчитай и опиши детально число души на основе даты рождения и имени. Для человека рожденного ${dateBirthday}. По имени ${name}. Распиши, как оно влияет на внутренний мир и стремления человека. Дай советы по личностному развитию на основе числа жизненного пути  так же на основании числа жизненного пути дай рекомендации в карьере, благоприятные периоды для создания семьи и бизнеса, области, где человек может развиваться наиболее успешно.  Отвечай подробно.`,
        };
        break;
      case "5":
        data = {
          text: `Ты профессиональный нумеролог. Составь подробный анализ для матрицы судьбы, рассчитай  кармическую миссию и кармические долги для человека по имени ${name}. рожденного ${dateBirthday}. Поясни, какие уроки этому человеку предстоит пройти в этой жизни, какие качества он должен(-на) развить, и какие кармические долги ему нужно отработать. Предоставьте детальный анализ и рекомендации по каждому пункту. Отвечай подробно`,
        };
        break;
    }

    if ((name !== "") && (data)) {
      fetch("https://numerology-ai.ru/user/api/Promt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authStore.accessToken}`,
        },
        body: JSON.stringify(data),
      })
        .then(async (response) => {
          // Проверяем тип контента
          const contentType = response.headers.get("Content-Type");

          if (contentType.includes("application/json")) {
            // Если приходит JSON
            return await response.json();
          } else if (contentType.includes("text/plain")) {
            // Если приходит plain text
            return await response.text();
          } else {
            throw new Error("Unknown response format");
          }
        })
        .then((data) => {
          if (data.description === "Бесплатные попытки закончились!") {
            navigate("/subscribe");
          }
          setMessageText(data.response);
          setIsSendReq(true);
          console.log(data);
          setIsWaitRes(false);
          setIsWaitRes(false);
          setIsWaitRes2(false);
          setIsWaitRes3(false);
          setIsWaitRes4(false);
          setIsWaitRes5(false);
        })
        .catch((error) => {
          console.error("Error:", error.message);
          setIsWaitRes(false);
          setIsWaitRes(false);
          setIsWaitRes2(false);
          setIsWaitRes3(false);
          setIsWaitRes4(false);
          setIsWaitRes5(false);
        });
    }
  };
  return (
    <Layout>
      <main className={styles.main}>
        <div className="titleWrapper">
          <h1 className="title">
            <span>{t("matrixDestiny")}</span>
          </h1>
        </div>
        <form className={styles.form}>
          <div
            className={
              `${styles.matrix}` + (messageText && ` ${styles.response}`)
            }
          >
            {!isSendReq ? (
              <>
                <div className={styles.inputWrapper}>
                  <label htmlFor="date">{t("DateBirth")}</label>
                  <div className={styles.input}>
                    <input
                      id="date"
                      type="date"
                      defaultValue="2000-01-01"
                      onChange={(e) => {
                        setDateBirthday(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className={styles.inputWrapper}>
                  <label htmlFor="name">{t("yourName")}</label>
                  <div className={styles.input}>
                    <input
                      id="name"
                      type="text"
                      placeholder={t("girlName")}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                </div>
                {isMobile && (
                  <div className={styles.inputWrapper}>
                    <label htmlFor="name">{t("yourName")}</label>
                    <div className={styles.input}>
                      <select
                        id="name"
                        type="text"
                        onChange={(e) => {
                          setPrompt(e.target.value);
                        }}
                      >
                        <option defaultChecked value="1">{t("matrixDestinyTab1")}</option>
                        <option value="2">{t("matrixDestinyTab2")}</option>
                        <option value="3">{t("matrixDestinyTab3")}</option>
                        <option value="4">{t("matrixDestinyTab4")}</option>
                        <option value="5">{t("matrixDestinyTab5")}</option>
                      </select>
                    </div>
                  </div>
                )}

                <div className={styles.btnWrapper}>
                  {authStore.accessToken ? (
                    <ButtonSolid
                      button={"true"}
                      type="submit"
                      text={isWaitRes ? t("loading") : t("calculate")}
                      onClick={(e) => {
                        handleSubmit(e, prompt);
												if(name !== "") {
													setIsWaitRes(true);
												}
												console.log(prompt)
                      }}
                    />
                  ) : (
                    <ButtonSolid url="/auth" text={t("calculate")} />
                  )}
                </div>
              </>
            ) : (
              <>
                {!isAddResClick ? (
                  <>
                    <div className={styles.textWrapper}>
                      <Markdown>{messageText ? messageText : ""}</Markdown>
                    </div>
                    <div className={styles.btnWrapper}>
                      <ButtonSolid
                        button={"true"}
                        onClick={() => {
													setName("");
                          setMessageText("");
                          setIsSendReq(false);
                          setIsWaitRes(false);
													setPrompt("1");
                        }}
                        type="submit"
                        text={t("back")}
                      />
                      <button
                        className={styles.button}
                        button={"true"}
                        onClick={(e) => {
                          e.preventDefault();
                          setIsAddResClick(true);
                          setIsWaitRes(true);
                        }}
                      >
                        {t("addResponse")}
                      </button>
                    </div>
                    <ul className={styles.btnPromtList}>
                      <li className={styles.btnPromptItem}>
                        <div className={styles.btnWrapper}>
                          <ButtonSolid
                            button={"true"}
                            onClick={(e) => {
                              e.preventDefault();
                              handleSubmit(e, "2");
                              setIsWaitRes2(true);
                              console.log(dateBirthday);
                            }}
                            text={
                              isWaitRes2 ? t("loading") : t("matrixDestinyTab2")
                            }
                          />
                        </div>
                      </li>
                      <li className={styles.btnPromptItem}>
                        <div className={styles.btnWrapper}>
                          <ButtonSolid
                            button={"true"}
                            onClick={(e) => {
                              e.preventDefault();
                              handleSubmit(e, "3");
                              setIsWaitRes3(true);
                            }}
                            text={isWaitRes3 ? t("loading") : t("matrixDestinyTab3")}
                          />
                        </div>
                      </li>
                      <li className={styles.btnPromptItem}>
                        <div className={styles.btnWrapper}>
                          <ButtonSolid
                            button={"true"}
                            onClick={(e) => {
                              e.preventDefault();
                              handleSubmit(e, "4");
                              setIsWaitRes4(true);
                            }}
                            text={isWaitRes4 ? t("loading") : t("matrixDestinyTab4")}
                          />
                        </div>
                      </li>
                      <li className={styles.btnPromptItem}>
                        <div className={styles.btnWrapper}>
                          <ButtonSolid
                            button={"true"}
                            onClick={(e) => {
                              e.preventDefault();
                              handleSubmit(e, "5");
                              setIsWaitRes5(true);
                            }}
                            text={
                              isWaitRes5
                                ? t("loading")
                                : t("matrixDestinyTab5")
                            }
                          />
                        </div>
                      </li>
                    </ul>
                  </>
                ) : (
                  <div className={styles.additional}>
                    {!isShowAddRes ? (
                      <>
                        <div className={styles.inputAdd}>
                          <textarea
                            id="addinput"
                            type="text"
                            placeholder="Введите дополнительный запрос"
                            onChange={(e) => {
                              setAddRes(e.target.value);
                            }}
                          />
                        </div>
                        <div className={styles.btnWrapper}>
                          <ButtonSolid
                            button={"true"}
                            onClick={(e) => {
                              e.preventDefault();
                              setIsShowAddRes(false);
                              setMessageAddRes("");
                              setIsAddResClick(false);
                              setIsWaitRes(false);
                            }}
                            text={t("back")}
                          />
                          {!messageAddRes && (
                            <button
                              button={"true"}
                              className={styles.addButton}
                              onClick={(e) => {
                                postAddResponse(e);
                                setIsShowAddRes(true);
                                setIsWaitRes(true);
                              }}
                            >
                              {t("send")}
                            </button>
                          )}
                        </div>
                      </>
                    ) : (
                      <>
                        <div className={styles.textWrapper}>
                          <Markdown>
                            {messageAddRes ? messageAddRes : ""}
                          </Markdown>
                        </div>
                        <div className={styles.btnWrapper}>
                          <ButtonSolid
                            button={"true"}
                            onClick={(e) => {
                              e.preventDefault();
                              setMessageAddRes("");
                              setIsShowAddRes(false);
                              setIsWaitRes(false);
                            }}
                            text={isWaitRes ? t("loading") : t("back")}
                          />
                        </div>
                      </>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </form>
      </main>
      <Wheel position="bottom" />
    </Layout>
  );
});

export default Matrix;
