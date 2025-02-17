﻿const config = {
  title: {
    de: "Kundenassessment für GmbH-Umwandlung",
    en: "Customer Assessment for GmbH Conversion",
    ru: "Оценка клиентов для преобразования в GmbH"
  },
  theme: {
    primaryColor: "green",
    secondaryColor: "gray"
  },
  demo: true, // For demo mode, answers will be logged to console.
  consultationMessage: {
    de: "Ihr Dialog ist beendet. Für weitere Hilfe kontaktieren wir Sie persönlich.",
    en: "Your session has ended. For further assistance, we will contact you personally.",
    ru: "Ваша сессия завершена. Для дальнейшей помощи мы свяжемся с вами лично."
  },
  consulationButtonLabel: {
    de: "Kontaktieren Sie uns",
    en: "Contact Us",
    ru: "Свяжитесь с нами"
  },
  contactQuestions: [
    {
      id: "contactEmail",
      type: "text",
      label: {
        de: "E-Mail-Adresse für Rückruf",
        en: "Contact Email",
        ru: "Контактный Email"
      },
      tooltip: {
        de: "Geben Sie Ihre E-Mail-Adresse ein, damit wir Sie kontaktieren können.",
        en: "Enter your email address for us to contact you.",
        ru: "Введите ваш email, чтобы мы могли с вами связаться."
      },
      info: {
        de: "Ihre E-Mail wird ausschließlich zur Kontaktaufnahme verwendet.",
        en: "Your email will only be used to contact you.",
        ru: "Ваш email будет использоваться только для связи с вами."
      },
      validation: { type: "email" },
      required: true
    }
  ],
  pages: [
    {
      title: {
        de: "Persönliche Daten",
        en: "Personal Data",
        ru: "Личные данные"
      },
      sections: [
        {
          heading: {
            de: "Kontaktinformationen",
            en: "Contact Information",
            ru: "Контактная информация"
          },
          questions: [
            {
              id: "name",
              type: "text",
              label: {
                de: "Vollständiger Name",
                en: "Full Name",
                ru: "Полное имя"
              },
              tooltip: {
                de: "Ihr vollständiger Name, wie im Ausweis.",
                en: "Your full name as on your ID.",
                ru: "Ваше полное имя, как указано в удостоверении."
              },
              info: {
                de: "Bitte geben Sie Ihren Vor- und Nachnamen ein.",
                en: "Please enter your first and last name.",
                ru: "Пожалуйста, введите ваше имя и фамилию."
              },
              required: true
            },
            {
              id: "address",
              type: "multiline",
              label: {
                de: "Adresse",
                en: "Address",
                ru: "Адрес"
              },
              tooltip: {
                de: "Ihre Wohnadresse.",
                en: "Your residential address.",
                ru: "Ваш домашний адрес."
              },
              info: {
                de: "Straße, Hausnummer, PLZ und Ort.",
                en: "Street, house number, ZIP and city.",
                ru: "Улица, номер дома, почтовый индекс и город."
              },
              required: true
            },
            {
              id: "phone",
              type: "text",
              label: {
                de: "Telefonnummer",
                en: "Phone Number",
                ru: "Номер телефона"
              },
              tooltip: {
                de: "Ihre Telefonnummer.",
                en: "Your phone number.",
                ru: "Ваш номер телефона."
              },
              info: {
                de: "Für Rückfragen erreichbar.",
                en: "We may contact you for follow-up questions.",
                ru: "Мы можем связаться с вами для дополнительных вопросов."
              },
              keyboard: "tel",
              required: true
            },
            {
              id: "email",
              type: "text",
              label: {
                de: "E-Mail-Adresse",
                en: "Email Address",
                ru: "Электронная почта"
              },
              tooltip: {
                de: "Ihre E-Mail-Adresse.",
                en: "Your email address.",
                ru: "Ваш адрес электронной почты."
              },
              info: {
                de: "Wir senden Ihnen weitere Informationen per E-Mail.",
                en: "We will send you further information via email.",
                ru: "Мы отправим вам дополнительную информацию по электронной почте."
              },
              validation: { type: "email" },
              required: true
            }
          ]
        }
      ]
    },
    {
      title: {
        de: "Unternehmensdaten",
        en: "Company Data",
        ru: "Данные компании"
      },
      sections: [
        {
          heading: {
            de: "Betriebsinformationen",
            en: "Business Information",
            ru: "Информация о бизнесе"
          },
          questions: [
            {
              id: "companyName",
              type: "text",
              label: {
                de: "Name des Unternehmens",
                en: "Company Name",
                ru: "Название компании"
              },
              tooltip: {
                de: "Der offizielle Name Ihres Unternehmens.",
                en: "The official name of your company.",
                ru: "Официальное название вашей компании."
              },
              info: {
                de: "Wie im Handelsregister eingetragen.",
                en: "As registered in the commercial register.",
                ru: "Как зарегистрировано в торговом реестре."
              },
              required: true
            },
            {
              id: "foundingDate",
              type: "date",
              label: {
                de: "Gründungsdatum",
                en: "Founding Date",
                ru: "Дата основания"
              },
              tooltip: {
                de: "Datum der Unternehmensgründung.",
                en: "Date of company founding.",
                ru: "Дата основания компании."
              },
              info: {
                de: "Bitte wählen Sie das Datum aus.",
                en: "Please select the date.",
                ru: "Пожалуйста, выберите дату."
              },
              required: true
            },
            {
              id: "annualRevenue",
              type: "slider",
              label: {
                de: "Jahresumsatz (in €)",
                en: "Annual Revenue (€)",
                ru: "Годовой оборот (в €)"
              },
              min: 0,
              max: 1000000,
              tooltip: {
                de: "Schätzen Sie Ihren Jahresumsatz.",
                en: "Estimate your annual revenue.",
                ru: "Оцените свой годовой оборот."
              },
              info: {
                de: "Beispiel: 250000 für 250.000 €.",
                en: "For example: 250000 for €250,000.",
                ru: "Например: 250000 означает €250,000."
              },
              required: false
            },
            {
              id: "employeeCount",
              type: "radio",
              label: {
                de: "Anzahl der Mitarbeiter",
                en: "Number of Employees",
                ru: "Количество сотрудников"
              },
              options: ["1-5", "6-10", "11-20", "More than 20"],
              tooltip: {
                de: "Wählen Sie die passende Kategorie.",
                en: "Choose the appropriate category.",
                ru: "Выберите подходящую категорию."
              },
              info: {
                de: "Kleine bis mittlere Unternehmen.",
                en: "For small to medium-sized enterprises.",
                ru: "Для малого и среднего бизнеса."
              },
              required: true
            }
          ]
        }
      ]
    },
    {
      title: {
        de: "Umwandlungsdetails",
        en: "Conversion Details",
        ru: "Детали преобразования"
      },
      sections: [
        {
          heading: {
            de: "Umwandlung in GmbH",
            en: "Conversion to GmbH",
            ru: "Преобразование в GmbH"
          },
          questions: [
            {
              id: "reason",
              type: "checkbox",
              label: {
                de: "Gründe für die Umwandlung",
                en: "Reasons for Conversion",
                ru: "Причины преобразования"
              },
              options: [
                "Haftungsbeschränkung",
                "Steueroptimierung",
                "Imageverbesserung",
                "Wachstumsförderung"
              ],
              tooltip: {
                de: "Mehrfachauswahl möglich.",
                en: "Multiple selections possible.",
                ru: "Возможно множественный выбор."
              },
              info: {
                de: "Wählen Sie alle zutreffenden Gründe aus.",
                en: "Select all applicable reasons.",
                ru: "Выберите все применимые причины."
              },
              required: true
            },
            {
              id: "currentForm",
              type: "text",
              label: {
                de: "Bisherige Unternehmensform",
                en: "Current Business Form",
                ru: "Текущая форма бизнеса"
              },
              tooltip: {
                de: "Aktuelle Unternehmensform.",
                en: "Your current business form.",
                ru: "Ваша текущая форма бизнеса."
              },
              info: {
                de: "Normalerweise 'Einzelunternehmen'.",
                en: "Typically 'Sole Proprietorship'.",
                ru: "Обычно – индивидуальное предприятие."
              },
              required: true
            },
            {
              id: "desiredDate",
              type: "date",
              label: {
                de: "Angestrebtes Umwandlungsdatum",
                en: "Desired Conversion Date",
                ru: "Желаемая дата преобразования"
              },
              tooltip: {
                de: "Wann soll die Umwandlung erfolgen?",
                en: "When should the conversion occur?",
                ru: "Когда должна произойти конверсия?"
              },
              info: {
                de: "Wählen Sie ein realistisches Datum.",
                en: "Please choose a realistic date.",
                ru: "Пожалуйста, выберите реалистичную дату."
              },
              required: true
            },
            {
              id: "additionalInfo",
              type: "rtf",
              label: {
                de: "Zusätzliche Anmerkungen",
                en: "Additional Notes",
                ru: "Дополнительные примечания"
              },
              tooltip: {
                de: "Weitere Informationen oder Fragen eingeben.",
                en: "Enter any further information or questions.",
                ru: "Введите дополнительные сведения или вопросы."
              },
              info: {
                de: "Nutzen Sie den Editor für detaillierte Angaben.",
                en: "Use the editor for detailed input.",
                ru: "Используйте редактор для ввода подробной информации."
              },
              required: false
            }
          ]
        }
      ]
    }
  ]
};

export default config;
