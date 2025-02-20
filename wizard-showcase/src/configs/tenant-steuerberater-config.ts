import {
  Config,
  Page,
  Section,
  Question,
  QuestionType,
  Option,
  AbortCondition,
  Comparer
} from "../configTypes";

const pages: Page[] = [
  new Page(
    {
      de: "Willkommen",
      en: "Welcome"
    },
    [
      new Section(
        {
          de: "Betriebswirtschaftliche Hintergründe",
          en: "Business and Economic Background"
        },
        [
          new Question(
            "qIntro",
            QuestionType.Explaination,
            {
              de: "Eine Umwandlung des Einzelunternehmens in eine GmbH kann verschiedene Vorteile bieten, z. B. Haftungsbeschränkung oder steuerliche Optimierung. Weitere Informationen finden Sie etwa unter [Wikipedia: GmbH](https://de.wikipedia.org/wiki/Gesellschaft_mit_beschr%C3%A4nkter_Haftung) oder im [Umwandlungsgesetz (UmwG)](https://www.gesetze-im-internet.de/umwg/BJNR321010994.html).",
              en: "Converting a sole proprietorship into a GmbH can offer several advantages, such as limited liability or tax optimization. For more details, see for example [Wikipedia: GmbH](https://en.wikipedia.org/wiki/Company_with_limited_liability) or consult the [German Transformation Act (UmwG)](https://www.gesetze-im-internet.de/umwg/)."
            },
            false
          )
        ]
      )
    ]
  ),
  new Page(
    {
      de: "Sind Sie Einzelunternehmer?",
      en: "Are You a Single Entrepreneur?",
      ru: "Является ли бизнес индивидуальным предприятием?"
    },
    [
      new Section(
        {
          de: "Überprüfung",
          en: "Check",
          ru: "Проверка"
        },
        [
          new Question(
            "qSingleEntrepreneur",
            QuestionType.BigTileChoice,
            {
              de: "Handelt es sich um ein Einzelunternehmen (genau 1 Inhaber)?",
              en: "Is this a single-entrepreneur business (exactly 1 owner)?",
              ru: "Является ли бизнес индивидуальным предприятием (ровно 1 владелец)?"
            },
            true,
            {
              de: "Wählen Sie die zutreffende Option.",
              en: "Select the applicable option.",
              ru: "Выберите подходящий вариант."
            },
            {
              de: "Nur ein Einzelunternehmen kann in vereinfachter Form umgewandelt werden.",
              en: "Only a single-entrepreneur business can be transformed in a simplified manner.",
              ru: "Только индивидуальное предпринимательство может быть преобразовано в упрощенной форме."
            },
            undefined,
            undefined,
            [
              new Option(
                "yes",
                "Ja",
                "Ein einziger Inhaber"
              ),
              new Option(
                "no",
                "Nein",
                "Mehrere Inhaber oder andere Rechtsform"
              )
            ],
            undefined,
            undefined,
            new AbortCondition(
              Comparer.Equal,
              "no",
              "Ihr Fall benötigt eine individuelle Prüfung, da kein Einzelunternehmen vorliegt."
            )
          )
        ]
      )
    ]
  ),
  new Page(
    {
      de: "Umfang der Übertragung",
      en: "Scope of Transfer",
      ru: "Объём передачи"
    },
    [
      new Section(
        {
          de: "Übertragen Sie Ihr gesamtes Unternehmen oder nur Teile?",
          en: "Are you transferring your entire business or only parts?",
          ru: "Передаете ли вы весь бизнес или только его части?"
        },
        [
          new Question(
            "qTransferScope",
            QuestionType.BigTileChoice,
            {
              de: "Umfang der geplanten Einbringung",
              en: "Scope of the planned contribution",
              ru: "Объём планируемого вклада"
            },
            true,
            {
              de: "Wählen Sie eine der Kacheln aus.",
              en: "Select one of the tiles.",
              ru: "Выберите один из вариантов."
            },
            {
              de: "Die vollständige Übertragung eines Unternehmensbereichs kann oft einfacher organisiert werden.",
              en: "A full transfer of business operations can often be more straightforward.",
              ru: "Полная передача бизнеса может быть проще организована."
            },
            undefined,
            undefined,
            [
              new Option(
                "entire",
                "Gesamtes Unternehmen",
                "Nichts wird zurückbehalten."
              ),
              new Option(
                "partial",
                "Nur Teilbetrieb / Teilassets",
                "Nur ein Teil oder ein Betriebsteil wird übertragen."
              )
            ],
            undefined,
            undefined,
            new AbortCondition(
              Comparer.Equal,
              "partial",
              "Eine teilweise Einbringung ist komplexer und bedarf individueller Beratung."
            )
          )
        ]
      )
    ]
  ),
  new Page(
    {
      de: "Besondere Vermögenswerte",
      en: "Special Assets",
      ru: "Специальные активы"
    },
    [
      new Section(
        {
          de: "Prüfen Sie auf besondere Vermögenswerte.",
          en: "Check for special assets.",
          ru: "Проверьте наличие особых активов."
        },
        [
          new Question(
            "qRealEstate",
            QuestionType.BigTileChoice,
            {
              de: "Gehören Immobilien zum Unternehmen?",
              en: "Does the business own real estate?",
              ru: "Принадлежат ли недвижимые имущества бизнесу?"
            },
            true,
            {
              de: "Wählen Sie die passende Option.",
              en: "Select the appropriate option.",
              ru: "Выберите подходящий вариант."
            },
            {
              de: "Immobilienübertragungen sind mit besonderen Formalitäten verbunden.",
              en: "Transferring real estate involves special formalities.",
              ru: "Передача недвижимости требует особых формальностей."
            },
            undefined,
            undefined,
            [
              new Option(
                "yes",
                "Ja",
                "Grundstücke oder Immobilienbesitz vorhanden."
              ),
              new Option(
                "no",
                "Nein",
                "Kein Immobilienbesitz."
              )
            ],
            undefined,
            undefined,
            new AbortCondition(
              Comparer.Equal,
              "yes",
              "Bei Immobilieneinbringung ist eine individuelle Beratung erforderlich."
            )
          )
        ]
      )
    ]
  ),
  new Page(
    {
      de: "Weitere Besonderheiten",
      en: "Other Special Considerations",
      ru: "Другие особые соображения"
    },
    [
      new Section(
        {
          de: "Prüfen Sie auf immaterielle Vermögenswerte.",
          en: "Check for intangible assets.",
          ru: "Проверьте наличие нематериальных активов."
        },
        [
          new Question(
            "qIntangible",
            QuestionType.BigTileChoice,
            {
              de: "Verfügt das Unternehmen über eingetragene Marken, Patente oder vergleichbare Rechte?",
              en: "Does the business hold registered trademarks, patents or similar rights?",
              ru: "Обладает ли бизнес зарегистрированными торговыми марками, патентами или аналогичными правами?"
            },
            true,
            {
              de: "Wählen Sie die passende Option.",
              en: "Select the appropriate option.",
              ru: "Выберите подходящий вариант."
            },
            {
              de: "Die Bewertung von immateriellen Gütern ist oft komplex.",
              en: "Valuing intangible assets can be complex.",
              ru: "Оценка нематериальных активов может быть сложной."
            },
            undefined,
            undefined,
            [
              new Option(
                "yes",
                "Ja",
                "Marken, Patente, Lizenzen oder ähnliche Rechte."
              ),
              new Option(
                "no",
                "Nein",
                "Keine eingetragenen IP-Rechte."
              )
            ],
            undefined,
            undefined,
            new AbortCondition(
              Comparer.Equal,
              "yes",
              "Bei eingetragenen immateriellen Rechten ist eine individuelle Prüfung notwendig."
            )
          )
        ]
      )
    ]
  ),
  new Page(
    {
      de: "Verbindlichkeiten",
      en: "Liabilities",
      ru: "Обязательства"
    },
    [
      new Section(
        {
          de: "Prüfen Sie Ihre Kredite und Sicherheiten.",
          en: "Check your loans and securities.",
          ru: "Проверьте свои кредиты и залоги."
        },
        [
          new Question(
            "qLiabilities",
            QuestionType.BigTileChoice,
            {
              de: "Verfügen Sie über größere Kredite mit Sicherheiten (z.B. Grundschuld)?",
              en: "Do you have significant loans with securities (e.g. mortgage)?",
              ru: "Есть ли у вас значительные кредиты с залогом (например, ипотека)?"
            },
            true,
            {
              de: "Wählen Sie die zutreffende Option.",
              en: "Select the applicable option.",
              ru: "Выберите подходящий вариант."
            },
            {
              de: "Hohe Verbindlichkeiten im Unternehmen erfordern eine sorgfältige Prüfung.",
              en: "High liabilities within a business require careful review.",
              ru: "Высокие обязательства компании требуют тщательной проверки."
            },
            undefined,
            undefined,
            [
              new Option(
                "yes",
                "Ja",
                "Entsprechende Kredite und Sicherheiten vorhanden."
              ),
              new Option(
                "no",
                "Nein",
                "Keine umfangreichen Verbindlichkeiten mit Sicherheiten."
              )
            ],
            undefined,
            undefined,
            new AbortCondition(
              Comparer.Equal,
              "yes",
              "Bei wesentlichen Verbindlichkeiten mit Sicherheiten ist eine individuelle Beratung nötig."
            )
          )
        ]
      )
    ]
  )
];

const contactQuestions = [
  new Question(
    "contactName",
    QuestionType.Text,
    {
      de: "Ihr Name",
      en: "Your Name"
    },
    true
  ),
  new Question(
    "contactPhone",
    QuestionType.Phone,
    {
      de: "Telefonnummer",
      en: "Phone Number"
    },
    true
  ),
  new Question(
    "contactEmail",
    QuestionType.Email,
    {
      de: "E-Mail-Adresse",
      en: "Email Address"
    },
    true
  )
];

const config: Config = new Config(
  {
    de: "Kundenassessment für GmbH-Umwandlung",
    en: "Customer Assessment for GmbH Conversion",
    ru: "Оценка клиентов для преобразования в GmbH"
  },
  {
    primaryColor: "green",
    secondaryColor: "gray"
  },
  false,
  pages,
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
  contactQuestions
);

export default config;
