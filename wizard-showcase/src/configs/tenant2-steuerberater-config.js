const config = {
  title: {
    de: "Kundenassessment für GmbH-Umwandlung",
    en: "Customer Assessment for GmbH Conversion",
    zh: "GmbH 转换客户评估",
    hi: "GmbH में परिवर्तन के लिए ग्राहक मूल्यांकन",
    es: "Evaluación de clientes para la conversión a GmbH",
    fr: "Évaluation des clients pour la conversion en GmbH",
    ar: "تقييم العملاء لتحويل GmbH",
    bn: "GmbH রূপান্তরের জন্য গ্রাহক মূল্যায়ন",
    ru: "Оценка клиентов для преобразования в GmbH",
    pt: "Avaliação de Clientes para Conversão em GmbH",
    id: "Penilaian Pelanggan untuk Konversi GmbH"
  },
  theme: {
    primaryColor: "green",
    secondaryColor: "gray"
  },
  demo: true, // For demo mode, answers will be logged to console.
  pages: [
    {
      title: {
        de: "Persönliche Daten",
        en: "Personal Data",
        zh: "个人资料",
        hi: "व्यक्तिगत डेटा",
        es: "Datos Personales",
        fr: "Données Personnelles",
        ar: "البيانات الشخصية",
        bn: "ব্যক্তিগত তথ্য",
        ru: "Личные данные",
        pt: "Dados Pessoais",
        id: "Data Pribadi"
      },
      sections: [
        {
          heading: {
            de: "Kontaktinformationen",
            en: "Contact Information",
            zh: "联系信息",
            hi: "संपर्क जानकारी",
            es: "Información de Contacto",
            fr: "Informations de Contact",
            ar: "معلومات الاتصال",
            bn: "যোগাযোগের তথ্য",
            ru: "Контактная информация",
            pt: "Informações de Contato",
            id: "Informasi Kontak"
          },
          questions: [
            {
              id: "name",
              type: "text",
              label: {
                de: "Vollständiger Name",
                en: "Full Name",
                zh: "全名",
                hi: "पूरा नाम",
                es: "Nombre Completo",
                fr: "Nom Complet",
                ar: "الاسم الكامل",
                bn: "পূর্ণ নাম",
                ru: "Полное имя",
                pt: "Nome Completo",
                id: "Nama Lengkap"
              },
              tooltip: {
                de: "Ihr vollständiger Name, wie im Ausweis.",
                en: "Your full name as on your ID.",
                zh: "您的全名，与身份证上一致。",
                hi: "आपका पूरा नाम जैसा कि आपके आईडी पर है।",
                es: "Tu nombre completo tal como aparece en tu identificación.",
                fr: "Votre nom complet comme indiqué sur votre pièce d'identité.",
                ar: "اسمك الكامل كما هو مدون في هويتك.",
                bn: "আপনার পূর্ণ নাম, যেমনটি আপনার আইডিতে আছে।",
                ru: "Ваше полное имя, как указано в удостоверении личности.",
                pt: "Seu nome completo conforme no seu documento de identidade.",
                id: "Nama lengkap sesuai dengan di KTP Anda."
              },
              info: {
                de: "Bitte geben Sie Ihren Vor- und Nachnamen ein.",
                en: "Please enter your first and last name.",
                zh: "请输入您的姓和名。",
                hi: "कृपया अपना पहला और अंतिम नाम दर्ज करें।",
                es: "Por favor, introduce tu nombre y apellido.",
                fr: "Veuillez saisir votre prénom et nom.",
                ar: "الرجاء إدخال اسمك الأول واسم العائلة.",
                bn: "দয়া করে আপনার প্রথম এবং শেষ নাম লিখুন।",
                ru: "Пожалуйста, введите ваше имя и фамилию.",
                pt: "Por favor, insira seu primeiro e último nome.",
                id: "Silakan masukkan nama depan dan nama belakang Anda."
              },
              required: true
            },
            {
              id: "address",
              type: "multiline",
              label: {
                de: "Adresse",
                en: "Address",
                zh: "地址",
                hi: "पता",
                es: "Dirección",
                fr: "Adresse",
                ar: "العنوان",
                bn: "ঠিকানা",
                ru: "Адрес",
                pt: "Endereço",
                id: "Alamat"
              },
              tooltip: {
                de: "Ihre Wohnadresse.",
                en: "Your residential address.",
                zh: "您的居住地址。",
                hi: "आपका निवास पता",
                es: "Tu dirección residencial.",
                fr: "Votre adresse résidentielle.",
                ar: "عنوان سكنك",
                bn: "আপনার বাসস্থানের ঠিকানা",
                ru: "Ваш домашний адрес",
                pt: "Seu endereço residencial",
                id: "Alamat tempat tinggal Anda"
              },
              info: {
                de: "Straße, Hausnummer, PLZ und Ort.",
                en: "Street, house number, ZIP and city.",
                zh: "街道、门牌号、邮编和城市。",
                hi: "गली, मकान संख्या, ज़िप कोड और शहर",
                es: "Calle, número, código postal y ciudad.",
                fr: "Rue, numéro, code postal et ville.",
                ar: "الشارع، رقم المنزل، الرمز البريدي والمدينة.",
                bn: "রাস্তা, বাড়ির নম্বর, পোস্টকোড এবং শহর",
                ru: "Улица, номер дома, почтовый индекс и город",
                pt: "Rua, número, CEP e cidade",
                id: "Jalan, nomor rumah, kode pos dan kota"
              },
              required: true
            },
            {
              id: "phone",
              type: "text",
              label: {
                de: "Telefonnummer",
                en: "Phone Number",
                zh: "电话号码",
                hi: "फ़ोन नंबर",
                es: "Número de Teléfono",
                fr: "Numéro de Téléphone",
                ar: "رقم الهاتف",
                bn: "ফোন নম্বর",
                ru: "Номер телефона",
                pt: "Número de Telefone",
                id: "Nomor Telepon"
              },
              tooltip: {
                de: "Ihre Telefonnummer.",
                en: "Your phone number.",
                zh: "您的电话号码。",
                hi: "आपका फ़ोन नंबर",
                es: "Tu número de teléfono.",
                fr: "Votre numéro de téléphone.",
                ar: "رقم هاتفك",
                bn: "আপনার ফোন নম্বর",
                ru: "Ваш номер телефона",
                pt: "Seu número de telefone",
                id: "Nomor telepon Anda"
              },
              info: {
                de: "Für Rückfragen erreichbar.",
                en: "We may contact you for follow-up questions.",
                zh: "如有需要，我们可能会联系您。",
                hi: "यदि आवश्यक हो तो हम आपसे संपर्क कर सकते हैं।",
                es: "Podemos contactarte para hacer preguntas adicionales.",
                fr: "Nous pourrions vous contacter pour des questions complémentaires.",
                ar: "قد نتصل بك لمتابعة الاستفسارات.",
                bn: "ফিরে প্রশ্নের জন্য আমরা যোগাযোগ করতে পারি।",
                ru: "Мы можем связаться с вами для дополнительных вопросов.",
                pt: "Podemos entrar em contato para esclarecimentos adicionais.",
                id: "Kami mungkin akan menghubungi Anda untuk pertanyaan lanjutan."
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
                zh: "电子邮件地址",
                hi: "ईमेल पता",
                es: "Dirección de Correo Electrónico",
                fr: "Adresse e-mail",
                ar: "عنوان البريد الإلكتروني",
                bn: "ইমেইল ঠিকানা",
                ru: "Электронная почта",
                pt: "Endereço de E-mail",
                id: "Alamat Email"
              },
              tooltip: {
                de: "Ihre E-Mail-Adresse.",
                en: "Your email address.",
                zh: "您的电子邮件地址。",
                hi: "आपका ईमेल पता",
                es: "Tu dirección de correo electrónico.",
                fr: "Votre adresse e-mail.",
                ar: "عنوان بريدك الإلكتروني",
                bn: "আপনার ইমেইল ঠিকানা",
                ru: "Ваш адрес электронной почты",
                pt: "Seu endereço de e-mail",
                id: "Alamat email Anda"
              },
              info: {
                de: "Wir senden Ihnen weitere Informationen per E-Mail.",
                en: "We will send you further information via email.",
                zh: "我们会通过电子邮件向您发送更多信息。",
                hi: "हम आपको ईमेल के माध्यम से आगे की जानकारी भेजेंगे।",
                es: "Te enviaremos más información por correo electrónico.",
                fr: "Nous vous enverrons plus d'informations par e-mail.",
                ar: "سنرسل لك المزيد من المعلومات عبر البريد الإلكتروني.",
                bn: "আমরা আপনাকে ইমেইলের মাধ্যমে আরও তথ্য পাঠাবো।",
                ru: "Мы отправим вам дополнительную информацию по электронной почте.",
                pt: "Enviaremos mais informações por e-mail.",
                id: "Kami akan mengirimkan informasi lebih lanjut melalui email."
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
        zh: "公司数据",
        hi: "कंपनी डेटा",
        es: "Datos de la Empresa",
        fr: "Données de l'entreprise",
        ar: "بيانات الشركة",
        bn: "কোম্পানির তথ্য",
        ru: "Данные компании",
        pt: "Dados da Empresa",
        id: "Data Perusahaan"
      },
      sections: [
        {
          heading: {
            de: "Betriebsinformationen",
            en: "Business Information",
            zh: "业务信息",
            hi: "व्यापारिक जानकारी",
            es: "Información Comercial",
            fr: "Informations commerciales",
            ar: "معلومات العمل",
            bn: "ব্যবসায়িক তথ্য",
            ru: "Информация о бизнесе",
            pt: "Informações Comerciais",
            id: "Informasi Bisnis"
          },
          questions: [
            {
              id: "companyName",
              type: "text",
              label: {
                de: "Name des Unternehmens",
                en: "Company Name",
                zh: "公司名称",
                hi: "कंपनी का नाम",
                es: "Nombre de la Empresa",
                fr: "Nom de l'entreprise",
                ar: "اسم الشركة",
                bn: "কোম্পানির নাম",
                ru: "Название компании",
                pt: "Nome da Empresa",
                id: "Nama Perusahaan"
              },
              tooltip: {
                de: "Der offizielle Name Ihres Unternehmens.",
                en: "The official name of your company.",
                zh: "您公司的正式名称。",
                hi: "आपकी कंपनी का आधिकारिक नाम",
                es: "El nombre oficial de tu empresa.",
                fr: "Le nom officiel de votre entreprise.",
                ar: "الاسم الرسمي لشركتك",
                bn: "আপনার কোম্পানির আনুষ্ঠানিক নাম",
                ru: "Официальное название вашей компании",
                pt: "O nome oficial da sua empresa",
                id: "Nama resmi perusahaan Anda"
              },
              info: {
                de: "Wie im Handelsregister eingetragen.",
                en: "As registered in the commercial register.",
                zh: "根据商业登记注册。",
                hi: "जिस प्रकार वाणिज्यिक रजिस्टर में दर्ज है",
                es: "Tal como aparece en el registro mercantil.",
                fr: "Tel qu'enregistré au registre du commerce.",
                ar: "كما هو مسجل في السجل التجاري",
                bn: "হ্যান্ডেল রেজিস্টারে যেমন নিবন্ধিত",
                ru: "Как зарегистрировано в торговом реестре",
                pt: "Conforme registrado no registro comercial",
                id: "Seperti yang terdaftar di daftar komersial"
              },
              required: true
            },
            {
              id: "foundingDate",
              type: "date",
              label: {
                de: "Gründungsdatum",
                en: "Founding Date",
                zh: "成立日期",
                hi: "स्थापना तिथि",
                es: "Fecha de Fundación",
                fr: "Date de fondation",
                ar: "تاريخ التأسيس",
                bn: "প্রতিষ্ঠার তারিখ",
                ru: "Дата основания",
                pt: "Data de Fundação",
                id: "Tanggal Pendirian"
              },
              tooltip: {
                de: "Datum der Unternehmensgründung.",
                en: "Date of company founding.",
                zh: "公司成立日期。",
                hi: "कंपनी की स्थापना की तारीख",
                es: "Fecha de fundación de la empresa.",
                fr: "Date de création de l'entreprise.",
                ar: "تاريخ تأسيس الشركة",
                bn: "কোম্পানির প্রতিষ্ঠার তারিখ",
                ru: "Дата основания компании",
                pt: "Data de fundação da empresa",
                id: "Tanggal pendirian perusahaan"
              },
              info: {
                de: "Bitte wählen Sie das Datum aus.",
                en: "Please select the date.",
                zh: "请选择日期。",
                hi: "कृपया तारीख चुनें",
                es: "Por favor, selecciona la fecha.",
                fr: "Veuillez sélectionner la date.",
                ar: "الرجاء اختيار التاريخ",
                bn: "দয়া করে তারিখ নির্বাচন করুন",
                ru: "Пожалуйста, выберите дату.",
                pt: "Por favor, selecione a data.",
                id: "Silakan pilih tanggalnya"
              },
              required: true
            },
            {
              id: "annualRevenue",
              type: "slider",
              label: {
                de: "Jahresumsatz (in €)",
                en: "Annual Revenue (€)",
                zh: "年收入（€）",
                hi: "वार्षिक राजस्व (€)",
                es: "Ingresos Anuales (€)",
                fr: "Chiffre d'affaires annuel (€)",
                ar: "الإيرادات السنوية (€)",
                bn: "বার্ষিক আয় (in €)",
                ru: "Годовой оборот (в €)",
                pt: "Receita Anual (€)",
                id: "Pendapatan Tahunan (€)"
              },
              min: 0,
              max: 1000000,
              tooltip: {
                de: "Schätzen Sie Ihren Jahresumsatz.",
                en: "Estimate your annual revenue.",
                zh: "估计您的年收入。",
                hi: "अपने वार्षिक राजस्व का अनुमान लगाएं",
                es: "Estima tus ingresos anuales.",
                fr: "Estimez votre chiffre d'affaires annuel.",
                ar: "قدّر إيراداتك السنوية",
                bn: "আপনার বার্ষিক আয় অনুমান করুন",
                ru: "Оцените свой годовой оборот",
                pt: "Estime sua receita anual.",
                id: "Perkirakan pendapatan tahunan Anda"
              },
              info: {
                de: "Beispiel: 250000 für 250.000 €.",
                en: "For example: 250000 for €250,000.",
                zh: "例如：250000 表示 €250,000。",
                hi: "उदाहरण: 250000 का मतलब €250,000 है",
                es: "Por ejemplo: 250000 para €250,000.",
                fr: "Par exemple : 250000 pour €250,000.",
                ar: "على سبيل المثال: 250000 لـ €250,000",
                bn: "উদাহরণ: 250000 মানে €250,000",
                ru: "Например: 250000 означает €250,000",
                pt: "Por exemplo: 250000 para €250,000.",
                id: "Misalnya: 250000 untuk €250,000."
              },
              required: false
            },
            {
              id: "employeeCount",
              type: "radio",
              label: {
                de: "Anzahl der Mitarbeiter",
                en: "Number of Employees",
                zh: "员工数量",
                hi: "कर्मचारियों की संख्या",
                es: "Número de Empleados",
                fr: "Nombre d'employés",
                ar: "عدد الموظفين",
                bn: "কর্মচারীদের সংখ্যা",
                ru: "Количество сотрудников",
                pt: "Número de Funcionários",
                id: "Jumlah Karyawan"
              },
              options: ["1-5", "6-10", "11-20", "More than 20"],
              tooltip: {
                de: "Wählen Sie die passende Kategorie.",
                en: "Choose the appropriate category.",
                zh: "选择合适的类别",
                hi: "उपयुक्त श्रेणी चुनें",
                es: "Elige la categoría adecuada",
                fr: "Choisissez la catégorie appropriée",
                ar: "اختر الفئة المناسبة",
                bn: "সঠিক বিভাগ নির্বাচন করুন",
                ru: "Выберите подходящую категорию",
                pt: "Escolha a categoria apropriada",
                id: "Pilih kategori yang tepat"
              },
              info: {
                de: "Kleine bis mittlere Unternehmen.",
                en: "For small to medium-sized enterprises.",
                zh: "适用于中小企业",
                hi: "छोटे से मध्यम आकार के उद्यमों के लिए",
                es: "Para pequeñas y medianas empresas",
                fr: "Pour les petites et moyennes entreprises",
                ar: "للشركات الصغيرة والمتوسطة",
                bn: "ছোট থেকে মাঝারি আকারের প্রতিষ্ঠানগুলোর জন্য",
                ru: "Для малого и среднего бизнеса.",
                pt: "Para pequenas e médias empresas",
                id: "Untuk usaha kecil dan menengah"
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
        zh: "转换详情",
        hi: "परिवर्तन विवरण",
        es: "Detalles de la Conversión",
        fr: "Détails de la conversion",
        ar: "تفاصيل التحويل",
        bn: "রূপান্তরের বিবরণ",
        ru: "Детали преобразования",
        pt: "Detalhes da Conversão",
        id: "Detail Konversi"
      },
      sections: [
        {
          heading: {
            de: "Umwandlung in GmbH",
            en: "Conversion to GmbH",
            zh: "转换为有限公司",
            hi: "GmbH में परिवर्तन",
            es: "Conversión a GmbH",
            fr: "Conversion en GmbH",
            ar: "التحويل إلى GmbH",
            bn: "GmbH-তে রূপান্তর",
            ru: "Преобразование в GmbH",
            pt: "Conversão para GmbH",
            id: "Konversi ke GmbH"
          },
          questions: [
            {
              id: "reason",
              type: "checkbox",
              label: {
                de: "Gründe für die Umwandlung",
                en: "Reasons for Conversion",
                zh: "转换原因",
                hi: "परिवर्तन के कारण",
                es: "Razones para la Conversión",
                fr: "Raisons de la conversion",
                ar: "أسباب التحويل",
                bn: "রূপান্তরের কারণ",
                ru: "Причины преобразования",
                pt: "Razões para a Conversão",
                id: "Alasan untuk Konversi"
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
                zh: "可多选",
                hi: "एक से अधिक विकल्प चुनें",
                es: "Selección múltiple posible",
                fr: "Sélection multiple possible",
                ar: "اختيار متعدد ممكن",
                bn: "একাধিক নির্বাচন সম্ভব",
                ru: "Возможно множественный выбор",
                pt: "Múltiplas seleções possíveis",
                id: "Pilihan ganda memungkinkan"
              },
              info: {
                de: "Wählen Sie alle zutreffenden Gründe aus.",
                en: "Select all applicable reasons.",
                zh: "请选择所有适用的原因",
                hi: "सभी उपयुक्त कारण चुनें",
                es: "Seleccione todas las razones aplicables",
                fr: "Sélectionnez toutes les raisons applicables",
                ar: "اختر كل الأسباب المناسبة",
                bn: "প্রযোজ্য সব কারণ নির্বাচন করুন",
                ru: "Выберите все применимые причины",
                pt: "Selecione todas as razões aplicáveis",
                id: "Pilih semua alasan yang berlaku"
              },
              required: true
            },
            {
              id: "currentForm",
              type: "text",
              label: {
                de: "Bisherige Unternehmensform",
                en: "Current Business Form",
                zh: "当前企业形式",
                hi: "वर्तमान व्यवसाय रूप",
                es: "Forma Empresarial Actual",
                fr: "Forme d'entreprise actuelle",
                ar: "الشكل الحالي للشركة",
                bn: "বর্তমান ব্যবসায়িক ফর্ম",
                ru: "Текущая форма бизнеса",
                pt: "Forma Atual da Empresa",
                id: "Bentuk Perusahaan Saat Ini"
              },
              tooltip: {
                de: "Aktuelle Unternehmensform.",
                en: "Your current business form.",
                zh: "您当前的企业形式",
                hi: "आपका वर्तमान व्यवसाय रूप",
                es: "Tu forma empresarial actual",
                fr: "Votre forme d'entreprise actuelle",
                ar: "شكل شركتك الحالي",
                bn: "বর্তমান কোম্পানির ফর্ম",
                ru: "Ваша текущая форма бизнеса",
                pt: "A forma atual da empresa",
                id: "Bentuk perusahaan Anda saat ini"
              },
              info: {
                de: "Normalerweise 'Einzelunternehmen'.",
                en: "Typically 'Sole Proprietorship'.",
                zh: "通常为“个体户”。",
                hi: "आमतौर पर 'एकल स्वामित्व'।",
                es: "Normalmente 'Empresario Individual'.",
                fr: "Habituellement 'Entreprise individuelle'.",
                ar: "عادةً 'مؤسسة فردية'",
                bn: "সাধারণত 'একক ব্যবসা'",
                ru: "Обычно – индивидуальное предприятие.",
                pt: "Normalmente 'Empresário Individual'.",
                id: "Biasanya 'Usaha Perseorangan'"
              },
              required: true
            },
            {
              id: "desiredDate",
              type: "date",
              label: {
                de: "Angestrebtes Umwandlungsdatum",
                en: "Desired Conversion Date",
                zh: "期望转换日期",
                hi: "इच्छित परिवर्तन तिथि",
                es: "Fecha de Conversión Deseada",
                fr: "Date de conversion souhaitée",
                ar: "تاريخ التحويل المرغوب",
                bn: "প্রত্যাশিত রূপান্তরের তারিখ",
                ru: "Желаемая дата преобразования",
                pt: "Data de Conversão Desejada",
                id: "Tanggal Konversi yang Diinginkan"
              },
              tooltip: {
                de: "Wann soll die Umwandlung erfolgen?",
                en: "When should the conversion occur?",
                zh: "转换应何时进行？",
                hi: "परिवर्तन कब होना चाहिए?",
                es: "¿Cuándo debe ocurrir la conversión?",
                fr: "Quand la conversion doit-elle avoir lieu ?",
                ar: "متى يجب أن يتم التحويل؟",
                bn: "রূপান্তর কখন করা উচিত?",
                ru: "Когда должна произойти конверсия?",
                pt: "Quando a conversão deve ocorrer?",
                id: "Kapan konversi harus dilakukan?"
              },
              info: {
                de: "Wählen Sie ein realistisches Datum.",
                en: "Please choose a realistic date.",
                zh: "请选择一个现实的日期。",
                hi: "कृपया एक यथार्थवादी तिथि चुनें।",
                es: "Por favor, elige una fecha realista.",
                fr: "Veuillez choisir une date réaliste.",
                ar: "الرجاء اختيار تاريخ واقعي.",
                bn: "দয়া করে একটি বাস্তবসম্মত তারিখ নির্বাচন করুন।",
                ru: "Пожалуйста, выберите реалистичную дату.",
                pt: "Por favor, choisissez une date réaliste.",
                id: "Silakan pilih tanggal yang realistis."
              },
              required: true
            },
            {
              id: "additionalInfo",
              type: "rtf",
              label: {
                de: "Zusätzliche Anmerkungen",
                en: "Additional Notes",
                zh: "附加说明",
                hi: "अतिरिक्त नोट्स",
                es: "Notas Adicionales",
                fr: "Notes supplémentaires",
                ar: "ملاحظات إضافية",
                bn: "অতিরিক্ত নোট",
                ru: "Дополнительные примечания",
                pt: "Notas Adicionais",
                id: "Catatan Tambahan"
              },
              tooltip: {
                de: "Weitere Informationen oder Fragen eingeben.",
                en: "Enter any further information or questions.",
                zh: "请输入更多信息或问题。",
                hi: "कृपया अतिरिक्त जानकारी या प्रश्न दर्ज करें।",
                es: "Introduce más información o preguntas.",
                fr: "Saisissez des informations supplémentaires ou des questions.",
                ar: "أدخل أي معلومات أو أسئلة إضافية.",
                bn: "অতিরিক্ত তথ্য বা প্রশ্ন লিখুন।",
                ru: "Введите дополнительные сведения или вопросы.",
                pt: "Digite mais informações ou questions.",
                id: "Masukkan informasi atau pertanyaan tambahan."
              },
              info: {
                de: "Nutzen Sie den Editor für detaillierte Angaben.",
                en: "Use the editor for detailed input.",
                zh: "使用编辑器输入详细信息。",
                hi: "विस्तृत जानकारी के लिए संपादक का उपयोग करें।",
                es: "Utiliza el editor para introducir detalles.",
                fr: "Utilisez l'éditeur pour une saisie détaillée.",
                ar: "استخدم المحرر للإدخال التفصيلي.",
                bn: "বিস্তারিত তথ্যের জন্য এডিটর ব্যবহার করুন।",
                ru: "Используйте редактор для ввода подробной информации.",
                pt: "Utilize o editor para uma entrada détaillée.",
                id: "Gunakan editor untuk input detail."
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
