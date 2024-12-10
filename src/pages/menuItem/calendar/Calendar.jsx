import React from "react";
import Layout from "../../../components/layout/Layout";
import Wheel from "../../../components/wheel/Wheel";
import ButtonSolid from "./../../../components/buttonSolid/ButtonSolid";
import Markdown from "react-markdown";
import matrix from "../../../assets/matrix-small.png";
import star from "../../../assets/star.png";
import { useTranslation } from "react-i18next";
import styles from "../MenuItem.module.scss";
import authStore from "../../../stores/authStore";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { getCurrentDate } from './../../../utils/getCurrentDate';

const Calendar = observer(() => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isSendReq, setIsSendReq] = React.useState(false);
  const [startAnimation, setStartAnimation] = React.useState(false);
  const [isAddResClick, setIsAddResClick] = React.useState(false);
  const [isShowAddRes, setIsShowAddRes] = React.useState(false);
  const [messageAddRes, setMessageAddRes] = React.useState("");
  const [addRes, setAddRes] = React.useState("");
  const [dateBirthday, setDateBirthday] = React.useState("");
  const [name, setName] = React.useState("");
  const [messageText, setMessageText] = React.useState("");
	const [isWaitRes, setIsWaitRes] = React.useState(false);

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
        })
        .catch((error) => {
          console.error("Error:", error.message);
					setIsWaitRes(false);
        });
    }
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      text: `напиши календарь благоприятных событий в нумерологии на дату ${getCurrentDate()} (в формать день и месяц текстом) для человека, рожденного ${dateBirthday} перечисли благоприятные дни в месяце, напиши их расшифроку для чего этот день благоприятен так же если есть опасные или негативные дни укажи их и дай рекомендации что лучше в эти дни не делать`,
    };

    if (name !== "") {
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
					setIsWaitRes(false);
          console.log(data);
        })
        .catch((error) => {
          console.error("Error:", error.message);
					setIsWaitRes(false);
        });
    }
  };
  return (
    <Layout>
      <main className={styles.main}>
        <h1 className="title">
          <span>{t("EventsCalendar")}</span>
        </h1>
        <form className={styles.form}>
          <div className={styles.matrixCalendar}>
            <div className={styles.calendar}>
              <h3 className={styles.calendarName}>{name.slice(0, 10)}</h3>
              <div
                className={
                  `${styles.calendarLoader}` +
                  (startAnimation ? ` ${styles.start}` : "")
                }
              >
                <img className={styles.matrixIcon} src={matrix} />
                <img className={styles.starIcon} src={star} />
              </div>
            </div>
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
                <div className={styles.btnWrapper}>
                  {authStore.accessToken ? (
                    <ButtonSolid
                      button={"true"}
                      type="submit"
                      text={isWaitRes ? t("loading") : t("calculate")}
                      onClick={(e) => {
                        handleSubmit(e);
                        if (name !== "") {
													setStartAnimation(true);
													setIsWaitRes(true);
												};
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
                      <Markdown>
                        {messageText ? messageText : ""}
                      </Markdown>
                    </div>
                    <div className={styles.btnWrapper}>
                      <ButtonSolid
                        button={"true"}
                        onClick={() => {
                          setMessageText("");
                          setIsSendReq(false);
                          setStartAnimation(false);
													setIsWaitRes(true);
													setIsWaitRes(false);
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
                        }}
                      >
                        {t("addResponse")}
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    {!isShowAddRes ? (
                      <>
                        <div className={styles.textWrapper}>
                          <textarea
													className={styles.textArea}
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
                          <Markdown>{messageAddRes}</Markdown>
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
                            text={t("back")}
                          />
                          {!messageAddRes && (
                            <button
                              button={"true"}
                              className={styles.addButton}
                              onClick={(e) => {
																postAddResponse(e);
																setIsWaitRes(true);
															}}
                            >
                              {t("loading")}
                            </button>
                          )}
                        </div>
                      </>
                    )}
                  </>
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

export default Calendar;
