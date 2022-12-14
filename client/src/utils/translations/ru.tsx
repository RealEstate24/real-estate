/* eslint-disable react/no-unescaped-entities */
import { DeepPartial, ITranslation } from "@declarations";

export const ru: DeepPartial<ITranslation> = {
  meta: {
    title: "Недвижимость в Турции",
    description: "Описание сайта"
  },
  alt: {
    logo: "Логотип Turnate"
  },
  ariaLabel: {
    telegram: "Перейти в Телеграм",
    whatsapp: "Перейти в Whatsapp",
    viber: "Перейти в Вайбер",
    openContacts: "Открыть контакты",
    closeContacts: "Закрыть контакты",
    openBurger: "Открыть навигационное меню",
    closeBurger: "Закрыть навигационное меню"
  },
  navigation: {
    seeEstate: "Смотреть недвижимость",
    why: "Почему Турция?",
    steps: "Этапы оформления",
    reviews: "Отзывы"
  },
  form: {
    labels: {
      name: "Имя",
      phone: "Телефон"
    }
  },
  common: {
    callback: "Заказать звонок",
    selectProperty: "Подобрать Недвижимость",
    getSelection: "Получить подборку",
    submitting: "Отправка...",
    submit: "Оставить заявку",
    sent: "Ваше письмо было успешно отправлено!",
    connection: "Связь через соц. сети",
    credentials: "@2022 Все права защищены",
    smthWrong: "Что-то пошло не так!",
    aggrement:
      "Нажимая на кнопку, я даю согласие на обработку персональных данных",
    consultation: (
      <>
        Бесплатные <span>консультации</span> от эксперта по недвижимости
      </>
    ),
    managerConsultation:
      "Наш менеджер проконсультирует вас и ответит на вс вопросы",
    leaveYourContacts: "Оставьте свои контакты"
  },
  pages: {
    home: {
      main: {
        title: (
          <>
            Подберем <span>недвижимость в Турции</span> именно для ваc
          </>
        ),
        text: "Мы предлагаем услуги подбора и покупки недвижимости инвесторам по всему миру. Наш большой опыт позволяет максимально точно понимать ожидания инвесторов и предлагать уникальные решения по приятной цене.",
        advantages: [
          {
            title: "$350.000",
            caption: "Стоимость апартаментов (от)"
          },
          {
            title: "24%",
            caption: "Первый взнос"
          },
          {
            title: "30%",
            caption: "Доходность (за год)"
          },
          {
            title: "0%",
            caption: "Рассрочка"
          }
        ]
      },
      advantages: {
        title: (
          <>
            Почему стоит выбрать <span>именно нас?</span>
          </>
        ),
        slides: [
          {
            caption: "Мы несколько лет на рынке и имеем",
            title: (
              <>
                <span>100 положительных</span> отзывов{" "}
              </>
            ),
            paragraph: "от наших клиентов"
          },
          {
            caption: "Работаем напрямую только с",
            title: (
              <>
                <span>проверенными</span> подрядчиками
              </>
            )
          },
          {
            caption: "Предлагаем",
            title: (
              <>
                <span>самые выгодные</span> предложения
              </>
            ),
            paragraph: "Еще на моменте проектирования новостроя"
          },
          {
            caption: "Гарантируем",
            title: (
              <>
                <span>качество и полное</span> обслуживание недвижимости
              </>
            )
          },
          {
            caption: "Современный",
            title: (
              <>
                <span>подход к</span> инвестициям
              </>
            )
          }
        ]
      },
      offer: {
        title: (
          <>
            Мы собрали для вас <span>лучшие предложения</span>
          </>
        ),
        description: "В нашей коллекции точно найдется то, что Вас заинтересует"
      },
      benefit: {
        title: (
          <>
            Почему это <span>выгодно?</span>
          </>
        ),
        description: [
          "Инвестиции в сектор строительства и недвижимости в Турции становятся центром притяжения для корпоративных и индивидуальных инвесторов.",
          "В этом процессе страна предлагает значительные возможности иностранным вкладчикам.",
          "Чтобы удовлетворить потребности наших клиентов и помочь им добиться больших успехов в инвестиционных решениях, мы предоставляем инвесторам индивидуальные предложения. Наша минимальная сумма вложения - $70 000."
        ],
        statistic: [
          {
            title: "$90.000",
            caption: "Стартовая цена"
          },
          {
            title: "$99 000 (+10%)",
            caption: "Цена через 3 месяца"
          },
          {
            title: "$108 900 (+20%)",
            caption: "Цена через 6 месяцев"
          }
        ],
        captionTitle: (
          <>
            Инвестирую с нами, Вы получаете от <span>10% “чистого” дохода</span>{" "}
            каждые <span>3 месяца.</span>
          </>
        ),
        captionDescription:
          "Также клиент имеет возможность не только заработать на недвижимости, а и получить ВНЖ или гражданство в Турции."
      },
      security: {
        title: <span>Безопасность</span>,
        description:
          "Большинство тех, кто задумывался хотя бы раз о покупке недвижимости в Турции, задаёт себе вопрос, а стоит ли? Давайте рассмотрим некоторые моменты, и убедимся, почему делать это у нас - безопасно.",
        problemsTitle: (
          <>
            Возможные <span>проблемы</span> при покупке напрямую
          </>
        ),
        problems: [
          {
            title: (
              <>
                Недобросовестные <span>застройщики</span>
              </>
            ),
            description:
              "“На бумаге” Вам могут предложить очень выгодную новостройку по низкой цене, а по итогу - ни постройки, ни ваших денег"
          },
          {
            title: (
              <>
                Покупка <span>“чужого” имущества</span>
              </>
            ),
            description:
              "Одна из главных ошибок - покупка недвижимости “по картинке”. В таком случае, попытка “обойти систему” может очень плохо закончиться"
          },
          {
            title: (
              <>
                <span>Мошенничество</span>
              </>
            ),
            description:
              "Особо не разбираясь в сфере инвестиций, можно легко напороться на мошенников. Поэтому стоит тщательно подходить к выбору посредника"
          }
        ],
        guaranteesTitle: (
          <>
            Наши <span style={{ display: "block" }}>гарантии</span>
          </>
        ),
        guarantees: [
          {
            title: (
              <>
                Наша компания является <span>легальным застройщиком</span> на
                территории Турции
              </>
            )
          },
          {
            title: (
              <>
                Мы имеем большой <span>опыт в работе с инвестициями</span> в
                недвижимость
              </>
            )
          },
          {
            title: (
              <>
                <span>Гарантируем безопасность</span> ваших средств от начала
                сотрудничества и до самого конца
              </>
            )
          }
        ]
      },
      services: {
        title: (
          <>
            Что вы <span>получаете</span>, работая с нами
          </>
        ),
        cards: [
          {
            title: (
              <>
                Полное <span>обслуживание</span>
              </>
            ),
            description: [
              <>
                Инвестируя с нами, клиента{" "}
                <span>консультируют наши менеджеры</span> начиная с этапа выбора
                недвижимости.
              </>,
              <>
                Мы готовы ответить на <span>все вопросы</span> и{" "}
                <span>помочь разобраться</span> во всех тонкостях.
              </>
            ]
          },
          {
            title: (
              <>
                В Турции — <span>как дома</span>
              </>
            ),
            description: [
              <>
                Наша команда делает все возможное, чтобы наши инвесторы{" "}
                <span>не испытывали трудностей.</span> Нужна помощь с
                оформлением ВНЖ?
              </>,
              <>
                Хотите сделать ремонт? Не проблема!{" "}
                <span>Мы в этом вам поможем.</span>
              </>
            ]
          },
          {
            title: (
              <>
                Постоянный <span>доход</span>
              </>
            ),
            description: [
              <>
                Мы также занимаемся <span>перепродажей недвижимости</span> своих
                инвесторов.
              </>,
              <>
                Таким образом, ваши средства всегда в “работе”, и вы получаете
                <span>стабильную прибыль</span> с инвестиций.
              </>
            ]
          }
        ]
      }
    }
  }
};
