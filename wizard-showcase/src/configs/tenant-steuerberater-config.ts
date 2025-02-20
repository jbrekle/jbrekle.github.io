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
              de: "Nur ein Einzelunternehmen kann in vereinfachter Form umgewandelt werden. In einfacher Sprache: Eine Umwandlung eines Einzelunternehmens in eine GmbH bietet den Vorteil, dass das private Vermögen besser geschützt ist und das wirtschaftliche Risiko begrenzt bleibt. Dies kann zu verbesserten Finanzierungsmöglichkeiten und einer klareren Unternehmensstruktur führen. Zudem kann die steuerliche Belastung durch unterschiedliche Steuersätze reduziert werden. In juristischer Sprache: Gemäß den Bestimmungen des Umwandlungsgesetzes (UmwG) ist die Umwandlung eines Einzelunternehmens in eine GmbH zulässig, sofern die gesetzlichen Voraussetzungen erfüllt sind. Die Einhaltung der rechtlichen Rahmenbedingungen und steuerlichen Sonderregelungen ist verpflichtend.",
              en: "Only a single-entrepreneur business can potentially be transformed in a simplified manner. In plain language: Converting a sole proprietorship into a limited liability company can protect personal assets and limit financial risks. It may lead to improved financing options and a more defined business structure. Additionally, tax burdens can be reduced through different rates and deductions. In legal language: Pursuant to the provisions of the Transformation Act (UmwG), the conversion of a sole proprietorship into a GmbH is permitted if the statutory requirements are met. Compliance with the legal framework and applicable tax regulations is mandatory."
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
              de: "Die vollständige Übertragung eines Unternehmensbereichs kann oft einfacher organisiert werden. In einfacher Sprache: Wenn das gesamte Unternehmen übertragen wird, sind die Verantwortlichkeiten klar geregelt und die Abläufe werden vereinfacht. Dies kann zu einer stabileren finanziellen Struktur beitragen und betriebliche Risiken minimieren. Zudem ermöglicht es einen einheitlichen Umgang mit steuerlichen Regelungen. In juristischer Sprache: Die Vorschriften der §§ 152 ff. UmwG bieten einen Rahmen für eine vereinfachte Ausgliederung unter Beachtung spezifischer gesetzlicher Anforderungen.",
              en: "A full transfer of business operations can often be more straightforward. In plain language: When the entire business is transferred, responsibilities are clearly defined and processes are simplified. This can contribute to a more stable financial structure and minimize operational risks. It also allows for a unified approach to tax matters. In legal language: The provisions in §§ 152 ff. of the German Transformation Act provide a framework for a simplified spin-off, subject to specific legal requirements."
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
              de: "Immobilienübertragungen sind mit besonderen Formalitäten verbunden. In einfacher Sprache: Der Verkauf oder die Übertragung von Immobilien muss notariell beurkundet werden, um alle rechtlichen Anforderungen zu erfüllen. Dies schützt sowohl Käufer als auch Verkäufer vor zukünftigen Streitigkeiten. Alle Dokumente müssen sorgfältig erstellt und geprüft werden. In juristischer Sprache: Nach § 311b BGB ist für Immobilienverträge eine notarielle Beurkundung zwingend vorgeschrieben, um die Rechtssicherheit zu gewährleisten.",
              en: "Transferring real estate involves special formalities. In plain language: The sale or transfer of property must be notarized to ensure that all legal requirements are met, protecting both buyers and sellers from future disputes. All documents must be properly prepared and reviewed. In legal language: According to § 311b of the German Civil Code, notarization is mandatory for real estate contracts to ensure legal certainty."
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
              de: "Die Bewertung von immateriellen Gütern ist oft komplex. In einfacher Sprache: Rechte an Patenten, Marken oder Lizenzen sind wichtig für den wirtschaftlichen Erfolg eines Unternehmens. Eine präzise Bewertung dieser Rechte hilft, den tatsächlichen Unternehmenswert zu ermitteln und unterstützt Finanzierungsentscheidungen. Zudem können solche Bewertungen zur Optimierung der Steuerlast beitragen. In juristischer Sprache: Die Bewertung immaterieller Vermögenswerte erfolgt unter Beachtung handelsrechtlicher und steuerrechtlicher Bewertungsgrundsätze.",
              en: "Valuing intangible assets can be complex. In plain language: Rights such as patents, trademarks, or licenses play a crucial role in a company's economic success. A precise valuation of these rights helps determine the true value of the business and supports financing decisions. It can also contribute to optimizing tax liabilities. In legal language: The valuation of intangible assets is conducted in accordance with relevant commercial and tax principles."
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
              de: "Hohe Verbindlichkeiten im Unternehmen erfordern eine sorgfältige Prüfung. In einfacher Sprache: Wenn ein Unternehmen viele Schulden und Sicherheiten hat, kann dies den Geschäftsbetrieb erheblich beeinflussen. Es ist wichtig, dass alle finanziellen Verpflichtungen klar dokumentiert und bewertet werden, um Risiken zu minimieren und eine stabile wirtschaftliche Basis zu schaffen. In juristischer Sprache: Die Übertragung eines Unternehmens mit erheblichen Verbindlichkeiten unterliegt strengen rechtlichen und steuerlichen Vorschriften. Eine detaillierte Prüfung der finanziellen Situation und die Einhaltung spezifischer Formvorschriften sind erforderlich.",
              en: "High liabilities within a business require careful review. In plain language: When a company has significant debts and securities, these can greatly affect its operations. It is important that all financial obligations are clearly documented and evaluated to minimize risks and establish a stable economic foundation. In legal language: The transfer of a business with substantial liabilities is subject to strict legal and tax regulations. A detailed assessment of the financial situation and compliance with specific formal requirements are necessary."
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
  true, // Demo mode means nothing is sent to server, just logged to console
  pages,
  {
    de: "Ihr Fall lässt sich nicht über unsere Online Funktion automatisiert bearbeitent, wir kontaktieren  Sie persönlich.",
    en: "Your case cannot be processed automatically using our online tool; we will contact you personally."
  },
  {
    de: "Kontaktieren Sie uns",
    en: "Contact Us"
  },
  contactQuestions
);

export default config;
