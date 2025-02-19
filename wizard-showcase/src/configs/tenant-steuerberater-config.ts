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
      de: "Sind Sie Einzelunternehmer?",
      en: "Are You a Single Entrepreneur?"
    },
    [
      new Section(
        {
          de: "Überprüfung",
          en: "Check"
        },
        [
          new Question(
            "qSingleEntrepreneur",
            QuestionType.BigTileChoice,
            {
              de: "Handelt es sich um ein Einzelunternehmen (genau 1 Inhaber)?",
              en: "Is this a single-entrepreneur business (exactly 1 owner)?"
            },
            true,
            {
              de: "Wählen Sie die zutreffende Option.",
              en: "Select the applicable option."
            },
            {
              de: "Nur ein Einzelunternehmen kann ggf. in vereinfachter Form umgewandelt werden. Siehe auch [Wikipedia: Einzelunternehmen](https://de.wikipedia.org/wiki/Einzelunternehmen).",
              en: "Only a single-entrepreneur business can potentially be transformed in a simplified manner. See also [Wikipedia: Sole Proprietorship](https://en.wikipedia.org/wiki/Sole_proprietorship)."
            },
            undefined,
            undefined,
            [
              new Option("yes", "Ja", "Ein einziger Inhaber"),
              new Option("no", "Nein", "Mehrere Inhaber oder andere Rechtsform")
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
      en: "Scope of Transfer"
    },
    [
      new Section(
        {
          de: "Übertragen Sie Ihr gesamtes Unternehmen oder nur Teile?",
          en: "Are you transferring your entire business or only parts?"
        },
        [
          new Question(
            "qTransferScope",
            QuestionType.BigTileChoice,
            {
              de: "Umfang der geplanten Einbringung",
              en: "Scope of the planned contribution"
            },
            true,
            {
              de: "Wählen Sie eine der Kacheln aus.",
              en: "Select one of the tiles."
            },
            {
              de: "Die Ausgliederung im Ganzen kann in bestimmten Fällen weniger komplex sein. Vgl. §§ 152 ff. UmwG (Ausgliederung).",
              en: "A full spin-off can be less complex in certain cases. Compare §§ 152 ff. German Transformation Act (UmwG)."
            },
            undefined,
            undefined,
            [
              new Option("entire", "Gesamtes Unternehmen", "Nichts wird zurückbehalten."),
              new Option("partial", "Nur Teilbetrieb / Teilassets", "Nur ein Teil oder ein Betriebsteil wird übertragen.")
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
      en: "Special Assets"
    },
    [
      new Section(
        {
          de: "Prüfen Sie auf besondere Vermögenswerte.",
          en: "Check for special assets."
        },
        [
          new Question(
            "qRealEstate",
            QuestionType.BigTileChoice,
            {
              de: "Gehören Immobilien zum Unternehmen?",
              en: "Does the business own real estate?"
            },
            true,
            {
              de: "Wählen Sie die passende Option.",
              en: "Select the appropriate option."
            },
            {
              de: "Die Einbringung von Immobilien erfordert besondere Beurkundungen. Vgl. [BGB § 311b](https://www.gesetze-im-internet.de/bgb/__311b.html).",
              en: "The contribution of real estate requires special notarization. Compare [German Civil Code § 311b](https://www.gesetze-im-internet.de/englisch_bgb/englisch_bgb.html#p1199)."
            },
            undefined,
            undefined,
            [
              new Option("yes", "Ja", "Grundstücke oder Immobilienbesitz vorhanden."),
              new Option("no", "Nein", "Kein Immobilienbesitz.")
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
      en: "Other Special Considerations"
    },
    [
      new Section(
        {
          de: "Prüfen Sie auf immaterielle Vermögenswerte.",
          en: "Check for intangible assets."
        },
        [
          new Question(
            "qIntangible",
            QuestionType.BigTileChoice,
            {
              de: "Verfügt das Unternehmen über eingetragene Marken, Patente oder vergleichbare Rechte?",
              en: "Does the business hold registered trademarks, patents or similar rights?"
            },
            true,
            {
              de: "Wählen Sie die passende Option.",
              en: "Select the appropriate option."
            },
            {
              de: "Immaterialgüterrechte wie Patente oder Marken können eine eigene Bewertung nötig machen. Siehe [Wikipedia: Immaterialgüterrecht](https://de.wikipedia.org/wiki/Immaterialg%C3%BCterrecht).",
              en: "Intellectual property rights such as patents or trademarks may require valuation. See [Wikipedia: Intellectual property](https://en.wikipedia.org/wiki/Intellectual_property)."
            },
            undefined,
            undefined,
            [
              new Option("yes", "Ja", "Marken, Patente, Lizenzen oder ähnliche Rechte."),
              new Option("no", "Nein", "Keine eingetragenen IP-Rechte.")
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
      en: "Liabilities"
    },
    [
      new Section(
        {
          de: "Prüfen Sie Ihre Kredite und Sicherheiten.",
          en: "Check your loans and securities."
        },
        [
          new Question(
            "qLiabilities",
            QuestionType.BigTileChoice,
            {
              de: "Verfügen Sie über größere Kredite mit Sicherheiten (z.B. Grundschuld)?",
              en: "Do you have significant loans with securities (e.g. mortgage)?"
            },
            true,
            {
              de: "Wählen Sie die zutreffende Option.",
              en: "Select the applicable option."
            },
            {
              de: "Eine Einbringung mit umfangreichen Verbindlichkeiten kann juristisch und steuerlich komplex sein. Vgl. [Wikipedia: Sicherungsrechte](https://de.wikipedia.org/wiki/Sicherungsmittel_im_Kreditsicherungsrecht).",
              en: "A contribution with extensive liabilities can be legally and tax-wise complex. See [Wikipedia: Security (finance)](https://en.wikipedia.org/wiki/Security_(finance))."
            },
            undefined,
            undefined,
            [
              new Option("yes", "Ja", "Entsprechende Kredite und Sicherheiten vorhanden."),
              new Option("no", "Nein", "Keine umfangreichen Verbindlichkeiten mit Sicherheiten.")
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
  ),
  new Page(
    {
      de: "Ergebnis",
      en: "Result"
    },
    [
      new Section(
        {
          de: "Betriebswirtschaftliche Hintergründe",
          en: "Business and Economic Background"
        },
        [
          new Question(
            "qConclusion",
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
    en: "Customer Assessment for GmbH Conversion"
  },
  {
    primaryColor: "green",
    secondaryColor: "gray"
  },
  true, // Demo mode is now true
  pages,
  {
    de: "Ihr Dialog ist beendet. Für weitere Hilfe kontaktieren wir Sie persönlich.",
    en: "Your session has ended. For further assistance, we will contact you personally."
  },
  {
    de: "Kontaktieren Sie uns",
    en: "Contact Us"
  },
  contactQuestions
);

export default config;
