import { Config, Page, Section, Question, QuestionType } from "../configTypes";

/**
 * CHANGES:
 * - Added contactQuestions with name (Text), phone (Phone), and email (Email).
 */

const config: Config = new Config(
  {
    de: "Kundenassessment für GmbH-Umwandlung",
    en: "Customer Assessment for GmbH Conversion",
    ru: "Оценка клиентов для преобразования в GmbH"
  },
  {
    primaryColor: "green",
    secondaryColor: "gray",
  },
  false, // Not in demo mode.
  [
    new Page(
      {
        de: "Persönliche Daten",
        en: "Personal Data",
        ru: "Личные данные"
      },
      [
        new Section(
          {
            de: "Kontaktinformationen",
            en: "Contact Information",
            ru: "Контактная информация"
          },
          [
            new Question(
              "name",
              QuestionType.Text,
              {
                de: "Vollständiger Name",
                en: "Full Name",
                ru: "Полное имя"
              },
              true,
              {
                de: "Ihr vollständiger Name, wie im Ausweis.",
                en: "Your full name as on your ID.",
                ru: "Ваше полное имя, как указано в удостоверении."
              },
              {
                de: "Bitte geben Sie Ihren Vor- und Nachnamen ein.",
                en: "Please enter your first and last name.",
                ru: "Пожалуйста, введите ваше имя и фамилию."
              }
            )
          ]
        )
      ]
    ),
    new Page(
      {
        de: "Unternehmensdaten",
        en: "Company Data",
        ru: "Данные компании"
      },
      [
        new Section(
          {
            de: "Betriebsinformationen",
            en: "Business Information",
            ru: "Информация о бизнесе"
          },
          [
            new Question(
              "companyName",
              QuestionType.Text,
              {
                de: "Name des Unternehmens",
                en: "Company Name",
                ru: "Название компании"
              },
              true,
              {
                de: "Der offizielle Name Ihres Unternehmens.",
                en: "The official name of your company.",
                ru: "Официальное название вашей компании."
              },
              {
                de: "Wie im Handelsregister eingetragen.",
                en: "As registered in the commercial register.",
                ru: "Как зарегистрировано в торговом реестре."
              }
            ),
            new Question(
              "foundingDate",
              QuestionType.Date,
              {
                de: "Gründungsdatum",
                en: "Founding Date",
                ru: "Дата основания"
              },
              true,
              {
                de: "Datum der Unternehmensgründung.",
                en: "Date of company founding.",
                ru: "Дата основания компании."
              },
              {
                de: "Bitte wählen Sie das Datum aus.",
                en: "Please select the date.",
                ru: "Пожалуйста, выберите дату."
              }
            )
          ]
        )
      ]
    )
  ],
  {
    de: "Ihr Dialog ist beendet. Für weitere Hilfe kontaktieren wir Sie persönlich.",
    en: "Your session has ended. For further assistance, we will contact you personally.",
    ru: "Ваша сессия завершена. Для дальнейшей помощи мы свяжемся с вами лично."
  },
  {
    de: "Kontaktieren Sie uns",
    en: "Contact Us",
    ru: "Свяжитесь с нами"
  },
  // New contact questions
  [
    new Question(
      "contactName",
      QuestionType.Text,
      {
        de: "Ihr Name",
        en: "Your Name",
        ru: "Ваше имя"
      },
      true
    ),
    new Question(
      "contactPhone",
      QuestionType.Phone,
      {
        de: "Telefonnummer",
        en: "Phone Number",
        ru: "Номер телефона"
      },
      true
    ),
    new Question(
      "contactEmail",
      QuestionType.Email,
      {
        de: "E-Mail-Adresse",
        en: "Email Address",
        ru: "Адрес электронной почты"
      },
      true
    )
  ]
);

export default config;
