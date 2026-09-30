import type { GrammarTopic } from "./grammar";

export const GRAMMAR: GrammarTopic[] = [
  // ─── 기초 ──────────────────────────────────────────────────────────────────
  {
    id: "pronunciation",
    title: "알파벳과 발음",
    summary: "독일어는 거의 쓰인 대로 읽는다 — ei=아이, ie=이, eu=오이, 단어 끝 b·d·g는 무성음",
    category: "기초",
    lessons: [1],
    sections: [
      {
        text: "독일어는 철자와 발음이 거의 1:1로 대응하는 언어예요. 영어처럼 단어마다 발음을 따로 외울 필요가 없고, 몇 가지 글자 조합 규칙만 익히면 처음 보는 단어도 읽을 수 있어요.\n알파벳은 영어와 같은 26자에 움라우트 Ä·Ö·Ü 와 ß(에스체트)가 더해져요. 명사는 문장 어디에 있든 항상 대문자로 시작해요.",
      },
      {
        heading: "알파벳 이름",
        table: {
          head: ["글자", "이름", "글자", "이름"],
          rows: [
            ["A", "아", "O", "오"],
            ["B", "베", "P", "페"],
            ["C", "체", "Q", "쿠"],
            ["D", "데", "R", "에르"],
            ["E", "에", "S", "에스"],
            ["F", "에프", "T", "테"],
            ["G", "게", "U", "우"],
            ["H", "하", "V", "파우"],
            ["I", "이", "W", "베"],
            ["J", "요트", "X", "익스"],
            ["K", "카", "Y", "윕실론"],
            ["L", "엘", "Z", "체트"],
            ["M", "엠", "Ä / Ö / Ü", "에 / 외 / 위"],
            ["N", "엔", "ß", "에스체트"],
          ],
        },
      },
      {
        heading: "꼭 알아야 할 글자 조합",
        table: {
          head: ["철자", "발음", "예"],
          rows: [
            ["ei / ey", "[아이]", "mein, Leipzig, Meyer"],
            ["ie", "[이―] (길게)", "Liebe, sie, vier"],
            ["eu / äu", "[오이]", "Leute, Verkäufer"],
            ["ch (a·o·u·au 뒤)", "[흐] (목 안쪽에서 긁는 소리)", "Bach, Buch, auch"],
            ["ch (그 밖)", "[히]", "ich, Milch, Küche"],
            ["-ig (단어 끝)", "[이히]", "sonnig, wolkig"],
            ["sch", "[슈]", "Schule, Tisch"],
            ["st- / sp- (단어·어간 처음)", "[슈트] / [슈프]", "Straße, Sport, Bleistift"],
            ["tsch", "[취]", "Tschüss, Deutsch"],
            ["z / tz", "[츠]", "Zoo, zehn, Katze"],
            ["v", "[f] (ㅍ/ㅎ 사이)", "Vater, viel, vier"],
            ["w", "[v] (윗니를 입술에 대고 ㅂ)", "Wind, Wasser, wo"],
            ["j", "[y] (이)", "Jahr, ja, Juni"],
            ["s + 모음", "[z] (ㅈ에 가까운 유성음)", "Sonne, Salat, sieben"],
            ["ß / ss", "[ㅆ]", "Straße, Fuß, Tasse"],
            ["-er (단어 끝)", "[어] (r 을 거의 안 굴림)", "Vater, Lehrer, aber"],
          ],
        },
      },
      {
        heading: "모음의 길이",
        text: "모음은 길게 또는 짧게 읽어요. 모음 뒤에 h 가 오거나 자음이 하나만 오면 보통 길게, 자음이 두 개 이상(겹자음 포함) 오면 짧게 읽어요. 모음을 겹쳐 쓴 aa·ee·oo 와 ie 도 길어요.\n길이에 따라 뜻이 달라지기도 하니 처음부터 구분하는 습관을 들이세요.",
        examples: [
          { de: "Tag", ko: "[타―크] 날, 낮", note: "모음 + 자음 1개 → 길게" },
          { de: "Sohn", ko: "[조―ㄴ] 아들", note: "모음 + h → 길게" },
          { de: "Mann", ko: "[만] 남자", note: "모음 + 자음 2개 → 짧게" },
          { de: "Bett", ko: "[벳] 침대", note: "겹자음 → 짧게" },
          { de: "Liebe", ko: "[리―베] 사랑", note: "ie → 긴 [이]" },
        ],
      },
      {
        heading: "단어 끝 b · d · g 는 무성음",
        text: "b, d, g 가 단어(또는 음절) 끝에 오면 힘을 빼고 p, t, k 처럼 읽어요. 이를 어말 무성화라고 해요. 뒤에 모음이 붙어 음절이 바뀌면 원래 소리로 돌아와요 (Tag [타크] → Tage [타게]).",
        examples: [
          { de: "ab", ko: "[압] ~부터" },
          { de: "Hund", ko: "[훈트] 개" },
          { de: "Tag", ko: "[타크] 날" },
          { de: "Kind", ko: "[킨트] 아이" },
          { de: "gelb", ko: "[겔프] 노란" },
        ],
      },
      {
        tip: "st/sp 를 [슈트/슈프]로 읽는 것은 단어(또는 합성어 속 단어)의 처음일 때뿐이에요. Fenster, Hamster 처럼 중간에 오면 그냥 [스트]예요.\n또 v 는 영어 v 가 아니라 f 소리(Vater = 파터), w 가 영어 v 소리(Wasser = 바서)라는 점을 자주 헷갈려요.",
      },
    ],
    related: ["greetings-phrases", "numbers"],
  },
  {
    id: "formal-informal",
    title: "du / ihr / Sie — 반말과 존댓말",
    summary: "친한 사이는 du(너)·ihr(너희), 처음 만난 성인·공적인 자리는 Sie(당신/당신들)",
    category: "기초",
    lessons: [2, 3, 4, 22],
    sections: [
      {
        text: "독일어에는 '너'를 뜻하는 말이 두 가지예요. du 는 가족·친구·아이·같은 반 학생처럼 친한 사람에게 쓰는 반말, Sie 는 처음 만난 어른·가게 점원·선생님·관공서처럼 격식이 필요한 상대에게 쓰는 존댓말이에요.\n여러 명에게 반말할 때는 ihr(너희), 존댓말은 한 명이든 여러 명이든 똑같이 Sie 를 써요. 존댓말 Sie 는 문장 어디에서나 대문자로 써요.",
      },
      {
        heading: "형태 비교",
        table: {
          head: ["상대", "주어", "kommen", "소유 (너의/당신의)", "3격 (너에게)"],
          rows: [
            ["친한 한 명", "du", "kommst", "dein", "dir"],
            ["친한 여러 명", "ihr", "kommt", "euer", "euch"],
            ["격식 (한 명·여러 명)", "Sie", "kommen", "Ihr", "Ihnen"],
          ],
        },
      },
      {
        heading: "같은 질문, 두 가지 말투",
        table: {
          head: ["반말 (du)", "존댓말 (Sie)", "뜻"],
          rows: [
            ["Wie heißt du?", "Wie heißen Sie?", "이름이 뭐예요?"],
            ["Wie ist dein Name?", "Wie ist Ihr Name?", "이름이 뭐예요?"],
            ["Woher kommst du?", "Woher kommen Sie?", "어디서 왔어요?"],
            ["Wie geht es dir?", "Wie geht es Ihnen?", "어떻게 지내요?"],
            ["Kannst du mir helfen?", "Können Sie mir helfen?", "도와줄 수 있어요?"],
            ["Komm bitte!", "Kommen Sie bitte!", "와 주세요!"],
            ["Hallo! / Tschüss!", "Guten Tag! / Auf Wiedersehen!", "안녕! / 안녕히 계세요!"],
          ],
        },
      },
      {
        heading: "Herr / Frau + 성",
        text: "Sie 로 부르는 상대는 이름(Vorname)이 아니라 성(Nachname) 앞에 Herr(남성) 또는 Frau(여성)를 붙여 불러요. Frau 는 결혼 여부와 상관없이 모든 성인 여성에게 써요.\ndu 로 지내는 사이에서는 그냥 이름(Vorname)을 불러요.",
        examples: [
          { de: "Guten Morgen, Herr Schmidt!", ko: "안녕하세요, 슈미트 씨!" },
          { de: "Sehr geehrte Frau Mayer, …", ko: "존경하는 마이어 님께, … (격식 편지)" },
          { de: "Guten Morgen, Damian.", ko: "좋은 아침이야, 다미안." },
          { de: "Wir können uns duzen.", ko: "우리 말 놓아도 돼요.", note: "duzen = du 로 부르다, siezen = Sie 로 부르다" },
        ],
      },
      {
        tip: "sie 는 세 가지로 쓰여요: sie + 3인칭 단수 동사 = 그녀(sie kommt), sie + 복수 동사 = 그들(sie kommen), 대문자 Sie + 복수 동사 = 당신(Sie kommen). 존댓말 Sie 의 동사는 항상 '그들' 형태와 같아요.\n한국어의 '선생님'처럼 직함만 부르지 않아요. 'Herr Lehrer' 대신 'Herr Müller' 처럼 성을 부르세요.",
      },
    ],
    related: ["personal-pronouns", "greetings-phrases", "imperative", "possessive"],
  },
  {
    id: "personal-pronouns",
    title: "인칭대명사",
    summary: "ich·du·er… 는 격에 따라 모양이 바뀐다 — mich(나를), mir(나에게)",
    category: "기초",
    lessons: [3, 4, 19, 20, 21],
    sections: [
      {
        text: "인칭대명사는 '나, 너, 그…'처럼 사람이나 사물을 대신 가리키는 말이에요. 한국어는 '나는/나를/나에게'처럼 조사를 붙이지만, 독일어는 단어 모양 자체가 바뀌어요.\n1격 = 주어(은/는/이/가), 4격 = 직접목적어(을/를), 3격 = 간접목적어(에게)라고 생각하면 돼요.",
      },
      {
        heading: "변화표",
        table: {
          head: ["", "1격 (~은/는)", "4격 (~을/를)", "3격 (~에게)"],
          rows: [
            ["나", "ich", "mich", "mir"],
            ["너", "du", "dich", "dir"],
            ["그 / 그것 (남성)", "er", "ihn", "ihm"],
            ["그녀 / 그것 (여성)", "sie", "sie", "ihr"],
            ["그것 (중성)", "es", "es", "ihm"],
            ["우리", "wir", "uns", "uns"],
            ["너희", "ihr", "euch", "euch"],
            ["그들", "sie", "sie", "ihnen"],
            ["당신(들)", "Sie", "Sie", "Ihnen"],
          ],
        },
      },
      {
        heading: "예문",
        examples: [
          { de: "Ich rufe dich an.", ko: "내가 너한테 전화할게.", note: "anrufen + 4격" },
          { de: "Kannst du mir helfen?", ko: "나를 도와줄 수 있어?", note: "helfen + 3격" },
          { de: "Wie geht es Ihnen?", ko: "어떻게 지내세요?" },
          { de: "Wann rufst du mich an?", ko: "언제 나한테 전화할 거야?" },
          { de: "Kann ich Sie etwas fragen?", ko: "뭐 좀 여쭤봐도 될까요?", note: "fragen + 4격" },
          { de: "Wir möchten euch herzlich einladen.", ko: "너희를 진심으로 초대하고 싶어." },
          { de: "Das gefällt mir.", ko: "그거 마음에 들어요." },
        ],
      },
      {
        heading: "사물도 er / sie / es",
        text: "er·sie·es 는 사람뿐 아니라 사물도 가리켜요. 이때는 그 명사의 문법적 성을 따라요: der-명사 → er, die-명사 → sie, das-명사 → es. 영어처럼 사물은 모두 it 이 아니에요.",
        examples: [
          { de: "Wie findest du diese Lampe? – Sie ist schön.", ko: "이 램프 어때? – 예뻐.", note: "die Lampe → sie" },
          { de: "Wie lange dauert der Flug? – Er dauert ungefähr 12 Stunden.", ko: "비행은 얼마나 걸려? – 약 12시간 걸려.", note: "der Flug → er" },
          { de: "Wo ist mein Handy? – Es liegt auf dem Tisch.", ko: "내 핸드폰 어디 있어? – 탁자 위에 있어.", note: "das Handy → es" },
        ],
      },
      {
        tip: "한국어 조사와 독일어 격이 항상 일치하지는 않아요. helfen(돕다)은 한국어로 '~을 돕다'지만 3격(Ich helfe dir), anrufen(전화하다)·fragen(묻다)은 한국어로 '~에게'지만 4격(Ich rufe dich an)이에요. 동사를 외울 때 격도 함께 외우세요.",
      },
    ],
    related: ["cases-overview", "formal-informal", "dative", "accusative"],
  },

  // ─── 동사 ──────────────────────────────────────────────────────────────────
  {
    id: "present-regular",
    title: "현재형 규칙 동사 변화",
    summary: "어간 + -e, -st, -t, -en, -t, -en — 주어에 따라 동사 어미가 바뀐다",
    category: "동사",
    lessons: [4, 5, 7, 10],
    sections: [
      {
        text: "독일어 동사는 주어에 맞춰 어미가 바뀌어요. 사전에 나오는 원형은 '어간 + -en' 형태(wohn-en, komm-en)이고, 어간 뒤에 주어별 어미를 붙여요.\n현재형 하나로 영어의 현재(I live), 현재진행(I am living), 가까운 미래(I will call)를 모두 나타내요. 예: Ich rufe dich morgen an. (내일 전화할게.)",
      },
      {
        heading: "기본 변화표",
        table: {
          head: ["", "wohnen (살다)", "kommen (오다)", "lernen (배우다)", "어미"],
          rows: [
            ["ich", "wohne", "komme", "lerne", "-e"],
            ["du", "wohnst", "kommst", "lernst", "-st"],
            ["er / sie / es", "wohnt", "kommt", "lernt", "-t"],
            ["wir", "wohnen", "kommen", "lernen", "-en"],
            ["ihr", "wohnt", "kommt", "lernt", "-t"],
            ["sie / Sie", "wohnen", "kommen", "lernen", "-en"],
          ],
        },
      },
      {
        heading: "발음 때문에 어미가 달라지는 동사",
        text: "어간이 -t, -d (또는 자음 + n)로 끝나면 du·er·ihr 에서 -e- 를 넣어 발음하기 쉽게 해요 (arbeitest, findet, öffnet).\n어간이 -s, -ß, -z 로 끝나면 du 에서 s 가 겹치므로 -st 대신 -t 만 붙여요 (du heißt, du tanzt).",
        table: {
          head: ["", "arbeiten (일하다)", "finden (찾다)", "heißen (~라고 불리다)", "tanzen (춤추다)"],
          rows: [
            ["ich", "arbeite", "finde", "heiße", "tanze"],
            ["du", "arbeitest", "findest", "heißt", "tanzt"],
            ["er / sie / es", "arbeitet", "findet", "heißt", "tanzt"],
            ["wir", "arbeiten", "finden", "heißen", "tanzen"],
            ["ihr", "arbeitet", "findet", "heißt", "tanzt"],
            ["sie / Sie", "arbeiten", "finden", "heißen", "tanzen"],
          ],
        },
      },
      {
        heading: "예문",
        examples: [
          { de: "Ich heiße Pascal.", ko: "나는 파스칼이야." },
          { de: "Wie heißt du?", ko: "이름이 뭐야?" },
          { de: "Woher kommen Sie?", ko: "어디서 오셨어요?" },
          { de: "Ich wohne in Berlin.", ko: "나는 베를린에 살아요." },
          { de: "Ich arbeite als Bäcker.", ko: "나는 제빵사로 일해요." },
          { de: "Was machst du in der Freizeit?", ko: "여가 시간에 뭐 해?" },
          { de: "Wir lernen Deutsch.", ko: "우리는 독일어를 배워요." },
        ],
      },
      {
        tip: "wir·sie·Sie 형태는 원형과 똑같고, er 와 ihr 는 둘 다 -t 로 같아요. 그러니 새로 외울 것은 ich(-e)와 du(-st)뿐이에요.\n한국어는 '살아요' 하나로 모든 주어에 쓰지만, 독일어에서 'du wohne' 처럼 어미를 틀리면 바로 어색하게 들려요. 특히 du 의 -st 를 빠뜨리지 않도록 주의하세요.",
      },
    ],
    related: ["sein-haben", "stem-change", "personal-pronouns"],
  },
  {
    id: "sein-haben",
    title: "sein과 haben",
    summary: "sein(~이다)과 haben(가지다) — 가장 중요한 두 불규칙 동사",
    category: "동사",
    lessons: [4, 6, 8, 12, 13],
    sections: [
      {
        text: "sein(~이다, 있다)과 haben(가지다)은 독일어에서 가장 많이 쓰는 동사이자 완전히 불규칙한 동사예요. 현재완료(Perfekt)를 만들 때도 조동사로 쓰이니 변화표를 완벽히 외워 두세요.",
      },
      {
        heading: "변화표",
        table: {
          head: ["", "sein (~이다)", "haben (가지다)"],
          rows: [
            ["ich", "bin", "habe"],
            ["du", "bist", "hast"],
            ["er / sie / es", "ist", "hat"],
            ["wir", "sind", "haben"],
            ["ihr", "seid", "habt"],
            ["sie / Sie", "sind", "haben"],
          ],
        },
      },
      {
        heading: "sein 의 쓰임 — 이름·국적·직업·나이·상태·위치",
        examples: [
          { de: "Ich bin Pascal.", ko: "나는 파스칼이에요." },
          { de: "Ich bin Koreanerin.", ko: "나는 한국인이에요. (여성)" },
          { de: "Ich bin Lehrer von Beruf.", ko: "나는 직업이 교사예요.", note: "= Ich bin Lehrer. = Ich arbeite als Lehrer." },
          { de: "Ich bin 25 Jahre alt.", ko: "나는 25살이에요." },
          { de: "Das ist sehr teuer.", ko: "그거 정말 비싸요." },
          { de: "Die Post ist ganz in der Nähe.", ko: "우체국은 아주 가까이 있어요." },
        ],
      },
      {
        heading: "haben 의 쓰임 — 소유, 그리고 한국어로는 형용사인 표현들",
        text: "haben 은 '가지다' 외에도 배고픔·목마름·시간·통증 같은 상태를 말할 때 써요. 한국어는 '배고프다'처럼 형용사로 말하지만, 독일어는 '배고픔을 가지고 있다'라고 표현해요.",
        examples: [
          { de: "Meine Wohnung hat drei Zimmer.", ko: "내 집에는 방이 세 개 있어요." },
          { de: "Ich habe Hunger.", ko: "배고파요." },
          { de: "Ich habe Durst.", ko: "목말라요." },
          { de: "Hast du am Montag Zeit?", ko: "월요일에 시간 있어?" },
          { de: "Ich habe Kopfschmerzen.", ko: "머리가 아파요." },
          { de: "Ich habe am elften März Geburtstag.", ko: "내 생일은 3월 11일이야." },
          { de: "Hast du Lust?", ko: "할 생각 있어? (하고 싶어?)" },
        ],
      },
      {
        tip: "'Ich bin Hunger' 는 틀려요 → Ich habe Hunger. 반대로 나이는 sein: Ich bin 25 Jahre alt (habe X).\n직업·국적은 관사 없이 말해요: Ich bin Student. (ein Student X)\nihr seid(너희는 ~이다)와 전치사 seit(~이래로)는 발음이 같으니 철자를 구분하세요.",
      },
    ],
    related: ["present-regular", "praeteritum-sein-haben", "perfekt", "articles-gender"],
  },
  {
    id: "stem-change",
    title: "불규칙 현재형 (어간모음 변화)",
    summary: "sprechen → du sprichst, fahren → du fährst — du와 er/sie/es에서만 모음이 바뀐다",
    category: "동사",
    lessons: [10, 11, 12, 22, 54],
    sections: [
      {
        text: "일부 동사는 현재형에서 du 와 er/sie/es 일 때만 어간의 모음이 바뀌어요. 어미(-e, -st, -t …)는 규칙 동사와 같고, ich·wir·ihr·sie/Sie 는 전혀 바뀌지 않아요.\n바뀌는 패턴은 세 가지예요: e → i, e → ie, a → ä (그리고 laufen 의 au → äu).",
      },
      {
        heading: "e → i",
        table: {
          head: ["", "sprechen (말하다)", "essen (먹다)", "nehmen (잡다, 고르다)", "helfen (돕다)"],
          rows: [
            ["ich", "spreche", "esse", "nehme", "helfe"],
            ["du", "sprichst", "isst", "nimmst", "hilfst"],
            ["er / sie / es", "spricht", "isst", "nimmt", "hilft"],
            ["wir", "sprechen", "essen", "nehmen", "helfen"],
            ["ihr", "sprecht", "esst", "nehmt", "helft"],
            ["sie / Sie", "sprechen", "essen", "nehmen", "helfen"],
          ],
        },
      },
      {
        heading: "e → ie, a → ä",
        text: "같은 패턴의 동사: geben (du gibst), treffen (du triffst), vergessen (du vergisst), fernsehen (du siehst fern), laufen (du läufst).",
        table: {
          head: ["", "sehen (보다)", "lesen (읽다)", "fahren (타고 가다)", "schlafen (자다)", "tragen (입다, 들다)"],
          rows: [
            ["ich", "sehe", "lese", "fahre", "schlafe", "trage"],
            ["du", "siehst", "liest", "fährst", "schläfst", "trägst"],
            ["er / sie / es", "sieht", "liest", "fährt", "schläft", "trägt"],
            ["wir", "sehen", "lesen", "fahren", "schlafen", "tragen"],
            ["ihr", "seht", "lest", "fahrt", "schlaft", "tragt"],
            ["sie / Sie", "sehen", "lesen", "fahren", "schlafen", "tragen"],
          ],
        },
      },
      {
        heading: "예문",
        examples: [
          { de: "Welche Sprachen sprichst du?", ko: "어떤 언어들을 해?" },
          { de: "Welche Fremdsprachen spricht er?", ko: "그는 어떤 외국어를 해?" },
          { de: "Was isst du gern zum Frühstück?", ko: "아침으로 뭘 즐겨 먹어?" },
          { de: "Wohin fährst du?", ko: "(타고) 어디 가?" },
          { de: "Er fährt mit dem Bus.", ko: "그는 버스를 타고 가요." },
          { de: "Hilfst du mir gerade mal?", ko: "잠깐 나 좀 도와줄래?" },
          { de: "Der Mann trägt eine Mütze.", ko: "그 남자는 모자를 쓰고 있어요." },
        ],
      },
      {
        tip: "ihr 는 바뀌지 않아요: ihr fahrt (fährt X), ihr esst (isst X).\nessen·lesen 처럼 어간이 s 로 끝나면 du 형은 -t 만 붙어 er 형과 같아요 (du isst / er isst, du liest / er liest).\ne → i/ie 동사는 du 명령형에도 모음이 바뀌어요 (Nimm! Iss! Lies! Sieh!). 하지만 a → ä 동사는 명령형에서 안 바뀌어요 (Fahr! Schlaf!).",
      },
    ],
    related: ["present-regular", "imperative", "sein-haben"],
  },
  {
    id: "modal-verbs",
    title: "화법조동사",
    summary: "können·müssen·wollen·dürfen·sollen·möchten — 조동사는 2번째, 본동사 원형은 문장 끝",
    category: "동사",
    lessons: [19, 36, 37, 38, 39, 40],
    sections: [
      {
        text: "화법조동사는 본동사에 '할 수 있다, 해야 한다, 하고 싶다, 해도 된다' 같은 의미를 더해 줘요. 한국어의 '-ㄹ 수 있다, -해야 한다'와 비슷한 역할이에요.\n어순이 중요해요: 주어에 맞게 변한 조동사가 2번째 자리에 오고, 본동사는 변하지 않은 원형으로 문장 맨 끝에 가요. Ich kann Deutsch sprechen. (나는 독일어를 말할 수 있다.)",
      },
      {
        heading: "변화표",
        table: {
          head: ["", "können", "müssen", "wollen", "dürfen", "sollen", "möchten"],
          rows: [
            ["ich", "kann", "muss", "will", "darf", "soll", "möchte"],
            ["du", "kannst", "musst", "willst", "darfst", "sollst", "möchtest"],
            ["er / sie / es", "kann", "muss", "will", "darf", "soll", "möchte"],
            ["wir", "können", "müssen", "wollen", "dürfen", "sollen", "möchten"],
            ["ihr", "könnt", "müsst", "wollt", "dürft", "sollt", "möchtet"],
            ["sie / Sie", "können", "müssen", "wollen", "dürfen", "sollen", "möchten"],
          ],
        },
      },
      {
        heading: "의미",
        table: {
          head: ["조동사", "의미", "예"],
          rows: [
            ["können", "능력(~할 줄 안다), 가능성, (구어) 허락", "Ich kann schwimmen."],
            ["müssen", "필요·의무 — 상황이나 규칙 때문에", "Ich muss arbeiten."],
            ["dürfen", "허락(~해도 된다) / nicht dürfen = 금지", "Darf ich hier rauchen?"],
            ["sollen", "다른 사람의 지시·요구·충고에 의한 의무", "Du sollst pünktlich kommen."],
            ["wollen", "강한 의지·계획 (~하려고 한다)", "Ich will Deutsch lernen."],
            ["möchten", "부드러운 바람 (~하고 싶다), 공손한 요청", "Ich möchte Arzt werden."],
          ],
        },
      },
      {
        heading: "예문",
        examples: [
          { de: "Kannst du Klavier spielen?", ko: "피아노 칠 줄 알아?" },
          { de: "Ich kann heute nicht zum Arzt gehen.", ko: "나는 오늘 병원에 갈 수 없어요." },
          { de: "Alle Studenten müssen eine Bachelorarbeit schreiben.", ko: "모든 학생은 학사 논문을 써야 해요." },
          { de: "Meine Kinder dürfen nur am Wochenende fernsehen.", ko: "우리 아이들은 주말에만 TV를 볼 수 있어요." },
          { de: "Wir sollen die Hausaufgaben bis Freitag machen.", ko: "우리는 숙제를 금요일까지 해야 해요. (선생님이 시킴)" },
          { de: "Soll ich für dich die Karten holen?", ko: "내가 너 대신 표 사다 줄까?", note: "Soll ich …? = 제가 ~할까요? (제안)" },
          { de: "Sie will Ärztin werden.", ko: "그녀는 의사가 되려고 해요." },
          { de: "Ich möchte einen Kaffee.", ko: "커피 한 잔 주세요/마시고 싶어요.", note: "뜻이 분명하면 본동사 생략" },
        ],
      },
      {
        heading: "헷갈리는 짝: müssen nicht ↔ nicht dürfen, müssen ↔ sollen",
        text: "müssen 의 부정은 '~할 필요 없다'이고, '~하면 안 된다(금지)'는 nicht dürfen 이에요.\nmüssen 은 상황·규칙 때문에 어쩔 수 없는 의무, sollen 은 누군가(선생님, 의사, 부모)가 시켜서 생긴 의무예요.",
        examples: [
          { de: "Du musst nicht traurig sein.", ko: "슬퍼할 필요 없어." },
          { de: "Im Moment muss ich nicht für die Prüfung lernen.", ko: "지금은 시험 공부를 안 해도 돼." },
          { de: "Ihr dürft das nicht essen.", ko: "너희는 그것을 먹으면 안 돼." },
          { de: "Hier darf man nicht rauchen.", ko: "여기서는 담배를 피우면 안 돼요." },
          { de: "Er soll zum Arzt gehen.", ko: "그는 병원에 가야 해. (의사/누군가의 권유)" },
        ],
      },
      {
        tip: "ich 형과 er/sie/es 형이 같아요 — 어미 -t 를 붙이지 않아요 (er kann, er muss; er kannt X).\n본동사는 반드시 원형으로 문장 끝에: Ich kann Deutsch sprechen. ('Ich kann spreche Deutsch', 'Ich kann sprechen Deutsch' 모두 X)\n방향이나 목적어만으로 뜻이 분명하면 본동사를 생략하기도 해요: Ich muss schnell nach Hause. (gehen 생략)",
      },
    ],
    related: ["sentence-bracket", "moegen-moechten", "negation", "man"],
  },
  {
    id: "separable-verbs",
    title: "분리동사",
    summary: "aufstehen → Ich stehe um 7 Uhr auf. — 앞부분(분리전철)은 문장 끝으로",
    category: "동사",
    lessons: [21, 22, 24, 35, 46],
    sections: [
      {
        text: "분리동사는 '전철 + 동사'로 이루어진 동사로, 현재형 문장에서 전철이 떨어져 나가 문장 맨 끝에 가요. aufstehen(일어나다) = auf + stehen → Ich stehe um 7 Uhr auf.\n전철에 강세가 오고(AUF-stehen), 사전에는 auf|stehen 처럼 표시돼요. 전철이 붙느냐에 따라 뜻이 완전히 달라지므로 문장 끝까지 들어야 해요.",
      },
      {
        heading: "자주 쓰는 분리동사",
        table: {
          head: ["원형", "뜻", "현재형 예문"],
          rows: [
            ["aufstehen", "일어나다", "Ich stehe um 7 Uhr auf."],
            ["anrufen", "전화하다 (+4격)", "Ich rufe dich an."],
            ["einkaufen", "장보다", "Wir kaufen zusammen ein."],
            ["fernsehen", "TV 보다", "Er sieht jeden Abend fern."],
            ["einsteigen / aussteigen", "타다 / 내리다", "Wo steigst du aus?"],
            ["umsteigen", "갈아타다", "An der nächsten Station steigen wir um."],
            ["abfahren / ankommen", "출발하다 / 도착하다", "Der Zug kommt um 17 Uhr an."],
            ["abbiegen", "(방향을) 꺾다", "Biegen Sie links ab."],
            ["zuhören", "귀 기울여 듣다", "Hören Sie bitte zu!"],
            ["aussehen", "~해 보이다", "Er sieht glücklich aus."],
            ["aufräumen / absagen", "정리하다 / 취소하다", "Ich sage den Termin ab."],
          ],
        },
      },
      {
        heading: "문장 종류별 위치",
        table: {
          head: ["문장", "예"],
          rows: [
            ["평서문", "Ich stehe um 7 Uhr auf."],
            ["W-의문문", "Wann stehst du auf?"],
            ["예/아니오 의문문", "Stehst du früh auf?"],
            ["명령문", "Steh auf! / Machen Sie das Fenster auf!"],
            ["조동사와 함께 → 붙어서 끝에", "Ich muss um 6 Uhr aufstehen."],
            ["현재완료 → ge 가 가운데", "Ich bin um 7 Uhr aufgestanden."],
          ],
        },
      },
      {
        heading: "예문",
        examples: [
          { de: "Wo steigst du ein?", ko: "어디서 타?" },
          { de: "Wann fährt der Zug nach Berlin ab?", ko: "베를린행 기차는 언제 출발해요?" },
          { de: "Was kauft ihr ein?", ko: "너희 뭐 사?" },
          { de: "Sieh nicht so viel fern!", ko: "TV 좀 그만 봐!" },
          { de: "Kann ich dich anrufen?", ko: "전화해도 돼?" },
          { de: "Steigen Sie an der Goethestraße aus.", ko: "괴테 거리에서 내리세요." },
        ],
      },
      {
        heading: "분리되지 않는 전철",
        text: "be-, ver-, ent-, er-, emp-, ge-, zer- 로 시작하는 동사는 절대 분리되지 않고 강세도 받지 않아요: bekommen, besuchen, verstehen, vergessen, empfehlen, beginnen, bedeuten.",
        examples: [
          { de: "Ich verstehe nicht.", ko: "이해를 못 했어요." },
          { de: "Was empfehlen Sie?", ko: "뭘 추천하세요?" },
          { de: "Michael besucht seinen Onkel in Paris.", ko: "미하엘은 파리에 있는 삼촌을 방문해요." },
        ],
      },
      {
        tip: "'Ich aufstehe um 7 Uhr' 는 틀려요 — 현재형에서는 반드시 떨어져서 끝으로 가요.\n동사 부분은 평소처럼 변화해요: fernsehen → du siehst fern (e → ie), anrufen → er ruft an.\n조동사와 함께 쓰면 다시 한 단어로 붙어서 끝에 와요: Ich muss früh aufstehen. (Ich muss früh stehen auf X)",
      },
    ],
    related: ["sentence-bracket", "perfekt", "modal-verbs", "imperative"],
  },
  {
    id: "imperative",
    title: "명령형",
    summary: "Kommen Sie! / Komm! / Kommt! — 동사가 맨 앞, bitte로 부드럽게",
    category: "동사",
    lessons: [22, 14, 24, 28],
    sections: [
      {
        text: "명령형은 지시뿐 아니라 부탁, 권유, 길 안내에도 두루 써요. 상대가 누구냐(Sie / du / ihr)에 따라 형태가 세 가지이고, 모두 동사가 문장 맨 앞에 와요.\nbitte 를 넣으면 공손해지고, doch·mal 을 넣으면 '좀 ~해 봐' 같은 부드러운 권유가 돼요.",
      },
      {
        heading: "만드는 법",
        table: {
          head: ["상대", "만드는 법", "kommen", "machen", "nehmen", "aufmachen"],
          rows: [
            ["Sie", "원형 + Sie", "Kommen Sie!", "Machen Sie!", "Nehmen Sie!", "Machen Sie auf!"],
            ["du", "du 현재형에서 -st 와 du 를 뺀다", "Komm!", "Mach!", "Nimm!", "Mach auf!"],
            ["ihr", "ihr 현재형에서 ihr 만 뺀다", "Kommt!", "Macht!", "Nehmt!", "Macht auf!"],
          ],
        },
      },
      {
        heading: "주의할 형태",
        text: "e → i/ie 로 바뀌는 동사는 du 명령형에도 바뀐 모음을 써요 (nimm, iss, lies, sieh). a → ä 동사는 바뀌지 않아요 (fahr, schlaf).\n어간이 -t/-d/-n 등으로 끝나면 du 명령형에 -e 를 붙여요 (Arbeite! Warte! Öffne!). 다른 동사도 -e 를 붙일 수 있지만(Komme!) 구어에서는 보통 생략해요.\nsein 은 완전히 불규칙해요.",
        table: {
          head: ["원형", "du", "ihr", "Sie"],
          rows: [
            ["sein", "Sei!", "Seid!", "Seien Sie!"],
            ["haben", "Hab!", "Habt!", "Haben Sie!"],
            ["essen", "Iss!", "Esst!", "Essen Sie!"],
            ["lesen", "Lies!", "Lest!", "Lesen Sie!"],
            ["fernsehen", "Sieh fern!", "Seht fern!", "Sehen Sie fern!"],
            ["fahren", "Fahr!", "Fahrt!", "Fahren Sie!"],
            ["arbeiten", "Arbeite!", "Arbeitet!", "Arbeiten Sie!"],
            ["öffnen", "Öffne!", "Öffnet!", "Öffnen Sie!"],
          ],
        },
      },
      {
        heading: "예문",
        examples: [
          { de: "Gehen Sie geradeaus, dann links.", ko: "직진하다가 왼쪽으로 가세요." },
          { de: "Öffnen Sie bitte das Buch auf Seite 10.", ko: "책 10쪽을 펴 주세요." },
          { de: "Kommen Sie bitte her!", ko: "이쪽으로 와 주세요!" },
          { de: "Mach doch mal ein bisschen Sport!", ko: "운동 좀 해 봐!" },
          { de: "Iss doch nicht so viel!", ko: "그렇게 많이 먹지 마!" },
          { de: "Hab keine Angst!", ko: "무서워하지 마!" },
          { de: "Sei nett zu mir!", ko: "나한테 잘해 줘!" },
          { de: "Seien Sie ruhig!", ko: "조용히 하세요!" },
        ],
      },
      {
        heading: "bitte 의 위치",
        text: "bitte 는 동사 바로 뒤(또는 Sie 뒤), 문장 맨 앞, 문장 끝 어디에나 올 수 있어요: Kommen Sie bitte! / Bitte kommen Sie! / Kommen Sie, bitte!\n더 공손하게 부탁하려면 명령형 대신 의문문을 써요: Können Sie mir helfen? → Könnten Sie bitte etwas langsamer sprechen?",
      },
      {
        tip: "du·ihr 명령형에는 주어를 쓰지 않아요 (Komm du! X → Komm!). 반대로 Sie 명령형은 Sie 를 꼭 써야 해요 (Kommen! X → Kommen Sie!).\n분리동사의 전철은 명령문에서도 끝으로 가요: Hören Sie bitte zu! / Steh auf!",
      },
    ],
    related: ["formal-informal", "stem-change", "separable-verbs", "place-directions"],
  },
  {
    id: "perfekt",
    title: "현재완료 (Perfekt)",
    summary: "haben/sein(2번째) + 과거분사(문장 끝) — 말할 때 쓰는 과거",
    category: "동사",
    lessons: [43, 44, 45, 46, 47, 49],
    sections: [
      {
        text: "독일어로 지난 일을 말할 때는 주로 현재완료(Perfekt)를 써요. 한국어 '-었/았-'에 해당해요.\n형태는 haben 또는 sein 의 현재형을 2번째 자리에 두고, 과거분사(Partizip II)를 문장 맨 끝에 놓는 것이에요: Ich habe Deutsch gelernt. (나는 독일어를 공부했다.)",
      },
      {
        heading: "과거분사 만들기",
        table: {
          head: ["유형", "규칙", "예"],
          rows: [
            ["규칙동사", "ge- + 어간 + -t", "machen → gemacht, kaufen → gekauft, spielen → gespielt, frühstücken → gefrühstückt"],
            ["어간이 -t / -d (또는 자음 + n) 로 끝남", "ge- + 어간 + -et", "arbeiten → gearbeitet, warten → gewartet, regnen → geregnet"],
            ["불규칙동사", "ge- + (모음이 바뀐) 어간 + -en", "sehen → gesehen, lesen → gelesen, essen → gegessen, schlafen → geschlafen, fahren → gefahren, gehen → gegangen, trinken → getrunken, singen → gesungen, helfen → geholfen, treffen → getroffen"],
            ["혼합변화", "ge- + 모음이 바뀐 어간 + -t", "bringen → gebracht, denken → gedacht, kennen → gekannt, nennen → genannt, rennen → gerannt, wissen → gewusst"],
            ["분리동사", "전철 + ge + 과거분사", "aufstehen → aufgestanden, anrufen → angerufen, einkaufen → eingekauft, fernsehen → ferngesehen, ankommen → angekommen"],
            ["ge- 가 없는 동사", "-ieren 동사, 비분리전철(be-, ver-, er-, ent-, emp-)", "telefonieren → telefoniert, studieren → studiert, besuchen → besucht, beantworten → beantwortet, bekommen → bekommen, vergessen → vergessen, verstehen → verstanden"],
          ],
        },
      },
      {
        heading: "haben 일까 sein 일까?",
        text: "대부분의 동사는 haben 과 함께 써요. 다음 동사들만 sein 을 써요.\n① 장소 이동: gehen, kommen, fahren, fliegen, laufen, rennen, ankommen\n② 상태 변화: aufstehen, aufwachen, einschlafen, werden\n③ 그 밖에: sein (→ gewesen), bleiben (→ geblieben), passieren (→ passiert)",
        table: {
          head: ["", "haben + machen", "sein + gehen"],
          rows: [
            ["ich", "habe … gemacht", "bin … gegangen"],
            ["du", "hast … gemacht", "bist … gegangen"],
            ["er / sie / es", "hat … gemacht", "ist … gegangen"],
            ["wir", "haben … gemacht", "sind … gegangen"],
            ["ihr", "habt … gemacht", "seid … gegangen"],
            ["sie / Sie", "haben … gemacht", "sind … gegangen"],
          ],
        },
      },
      {
        heading: "예문",
        examples: [
          { de: "Was hast du gestern gemacht?", ko: "어제 뭐 했어?" },
          { de: "Ich habe um 7 Uhr gefrühstückt.", ko: "나는 7시에 아침을 먹었어요." },
          { de: "Von 9 bis 11 habe ich gearbeitet.", ko: "9시부터 11시까지 일했어요.", note: "시간이 앞에 와도 haben 은 2번째" },
          { de: "Ich habe ein Buch gelesen.", ko: "나는 책을 읽었어요." },
          { de: "Ich bin ins Kino gegangen.", ko: "나는 영화관에 갔어요.", note: "이동 → sein" },
          { de: "Ich bin heute spät aufgestanden.", ko: "나는 오늘 늦게 일어났어요.", note: "상태 변화 → sein" },
          { de: "Dann habe ich meine Freundin angerufen.", ko: "그다음 여자친구한테 전화했어요." },
          { de: "Der Kellner hat dem Gast die Speisekarte gebracht.", ko: "웨이터가 손님에게 메뉴판을 가져다줬어요." },
          { de: "Wir haben uns in Berlin kennengelernt.", ko: "우리는 베를린에서 알게 됐어요.", note: "kennenlernen 은 '서로'를 뜻하는 uns 가 필요" },
        ],
      },
      {
        tip: "자주 하는 실수 세 가지:\n① ge- 를 빠뜨리거나 잘못 붙이기 — gemacht (macht X), 하지만 telefoniert (getelefoniert X), besucht (gebesucht X).\n② 이동 동사에 haben 쓰기 — Ich bin gegangen (habe gegangen X), Sie ist gefahren.\n③ 분리동사의 ge 위치 — aufgestanden (geaufstanden X), eingekauft.\n과거분사는 문장 맨 끝! 중간에 두면 안 돼요: Ich habe gestern einen Film gesehen.",
      },
    ],
    related: ["sentence-bracket", "praeteritum-sein-haben", "separable-verbs", "sein-haben"],
  },
  {
    id: "praeteritum-sein-haben",
    title: "war / hatte",
    summary: "sein·haben은 말할 때도 과거형 — Ich war in Berlin. Ich hatte keine Zeit.",
    category: "동사",
    lessons: [50, 48],
    sections: [
      {
        text: "대부분의 동사는 말할 때 현재완료로 과거를 표현하지만, sein 과 haben 은 과거형(Präteritum) war·hatte 를 더 많이 써요. 'Ich bin in Berlin gewesen' 보다 'Ich war in Berlin' 이 훨씬 자연스러워요.\n화법조동사도 마찬가지로 과거형을 주로 써요 (konnte, musste, wollte).",
      },
      {
        heading: "변화표",
        table: {
          head: ["", "sein → war", "haben → hatte"],
          rows: [
            ["ich", "war", "hatte"],
            ["du", "warst", "hattest"],
            ["er / sie / es", "war", "hatte"],
            ["wir", "waren", "hatten"],
            ["ihr", "wart", "hattet"],
            ["sie / Sie", "waren", "hatten"],
          ],
        },
      },
      {
        heading: "예문",
        examples: [
          { de: "Warst du schon mal in England?", ko: "영국에 가 본 적 있어?" },
          { de: "Ich war noch nie in England.", ko: "나는 영국에 한 번도 가 본 적 없어." },
          { de: "Ja, ich war letztes Jahr in Berlin. Das war toll!", ko: "응, 작년에 베를린에 있었어. 정말 멋졌어!" },
          { de: "Die Musik war toll und die Leute waren sehr nett.", ko: "음악도 좋았고 사람들도 아주 친절했어요." },
          { de: "Das war nicht so gut.", ko: "그다지 좋지 않았어요." },
          { de: "Gestern hatte ich keine Zeit.", ko: "어제는 시간이 없었어요." },
          { de: "Wir hatten Glück.", ko: "우리는 운이 좋았어요." },
        ],
      },
      {
        heading: "경험 말하기: schon mal / noch nie",
        text: "'~해 본 적 있다'는 schon (mal), '한 번도 ~해 본 적 없다'는 noch nie 로 말해요. sein 은 war, 다른 동사는 현재완료와 함께 써요.",
        examples: [
          { de: "Ich habe schon mal Sushi gegessen.", ko: "나는 초밥을 먹어 본 적 있어요." },
          { de: "Sie ist schon zweimal nach Afrika geflogen.", ko: "그녀는 이미 아프리카에 두 번 가 봤어요." },
          { de: "Sie ist schon oft in Asien gewesen.", ko: "그녀는 아시아에 자주 가 봤어요.", note: "= Sie war schon oft in Asien." },
        ],
      },
      {
        tip: "ich 와 er/sie/es 형이 같아요 (ich war, er war / ich hatte, sie hatte) — 조동사처럼 어미가 없어요.\nhatte 는 t 가 두 개예요 (hate X). wart(너희는 ~였다)는 동사 warten(기다리다)과 다른 단어예요.",
      },
    ],
    related: ["perfekt", "sein-haben"],
  },
  {
    id: "gern",
    title: "gern / lieber / am liebsten, Lieblings-",
    summary: "동사 + gern = 즐겨 ~하다 — lieber(더 좋아), am liebsten(제일 좋아)",
    category: "동사",
    lessons: [7, 12, 24, 55],
    sections: [
      {
        text: "'~하는 것을 좋아한다'는 동사 뒤에 gern(또는 gerne)을 붙여 말해요. gern 은 동사가 아니라 '즐겨, 기꺼이'라는 뜻의 부사예요.\nlesen → Ich lese gern. (나는 독서를 즐겨요 = 책 읽는 걸 좋아해요.)",
      },
      {
        heading: "비교: gern → lieber → am liebsten",
        table: {
          head: ["단계", "형태", "예", "뜻"],
          rows: [
            ["좋아함", "gern", "Ich trinke gern Tee.", "나는 차를 즐겨 마셔요."],
            ["더 좋아함", "lieber", "Ich trinke lieber Kaffee.", "나는 커피를 더 좋아해요."],
            ["제일 좋아함", "am liebsten", "Ich trinke am liebsten Wasser.", "나는 물을 제일 좋아해요."],
            ["싫어함", "nicht gern", "Ich tanze nicht gern.", "나는 춤추는 걸 안 좋아해요."],
          ],
        },
      },
      {
        heading: "예문",
        examples: [
          { de: "Ich lese gern und ich höre Musik.", ko: "나는 독서를 즐기고 음악을 들어요." },
          { de: "Ich spiele gern Fußball.", ko: "나는 축구를 즐겨 해요." },
          { de: "Was isst du gern zum Frühstück?", ko: "아침으로 뭘 즐겨 먹어?" },
          { de: "Ich esse gern Brötchen zum Frühstück.", ko: "나는 아침으로 빵을 즐겨 먹어요." },
          { de: "Ich reise gern.", ko: "나는 여행을 좋아해요." },
          { de: "Fahren Sie lieber mit dem Bus.", ko: "차라리 버스를 타세요.", note: "lieber = 차라리, ~하는 편이 낫다" },
          { de: "Ich mag Blau am liebsten.", ko: "나는 파란색이 제일 좋아." },
        ],
      },
      {
        heading: "Lieblings- = 가장 좋아하는 ~",
        text: "명사 앞에 Lieblings- 를 붙이면 '가장 좋아하는 ~'이 돼요. 관사(성)는 뒤에 오는 명사를 따라요: das Essen → das Lieblingsessen, die Farbe → die Lieblingsfarbe, der Film → der Lieblingsfilm.",
        examples: [
          { de: "Was ist dein Lieblingsessen?", ko: "가장 좋아하는 음식이 뭐야?" },
          { de: "Mein Lieblingsessen ist Pizza.", ko: "내가 제일 좋아하는 음식은 피자야." },
          { de: "Meine Lieblingsfarbe ist Grün.", ko: "내가 제일 좋아하는 색은 초록색이야." },
        ],
      },
      {
        tip: "gern 은 변화한 동사 뒤에 와요: Ich lese gern. ('Ich gern lese' X)\ngern 은 동사가 아니므로 'Ich gern Musik' 처럼 쓸 수 없어요. 행동에는 동사 + gern(Ich esse gern Pizza), 사물 자체를 좋아할 때는 mögen(Ich mag Pizza)을 써요.\n취미는 동사를 명사로 만들어 말할 수도 있어요: Mein Hobby ist Kochen.",
      },
    ],
    related: ["moegen-moechten", "word-order", "adjectives-predicative"],
  },
  {
    id: "moegen-moechten",
    title: "mögen과 möchten",
    summary: "mögen = 좋아하다(취향), möchten = ~하고 싶다·원하다(지금의 바람, 공손)",
    category: "동사",
    lessons: [15, 12, 36, 55],
    sections: [
      {
        text: "mögen 과 möchten 은 모양이 비슷하지만 뜻이 달라요. mögen 은 '(평소에) 좋아하다'라는 취향, möchten 은 '(지금) ~하고 싶다, ~을 원하다'라는 바람이에요.\nmöchten 은 원래 mögen 의 접속법 형태라서 영어 'would like'처럼 공손하게 들려요. 주문·부탁할 때 가장 많이 써요.",
      },
      {
        heading: "변화표",
        table: {
          head: ["", "mögen (좋아하다)", "möchten (원하다)"],
          rows: [
            ["ich", "mag", "möchte"],
            ["du", "magst", "möchtest"],
            ["er / sie / es", "mag", "möchte"],
            ["wir", "mögen", "möchten"],
            ["ihr", "mögt", "möchtet"],
            ["sie / Sie", "mögen", "möchten"],
          ],
        },
      },
      {
        heading: "mögen — 취향",
        text: "A1 에서 mögen 은 주로 명사(4격)와 함께 본동사처럼 써요.",
        examples: [
          { de: "Ich mag die blaue Jacke.", ko: "나는 파란 재킷이 좋아요." },
          { de: "Welche Farbe magst du am liebsten?", ko: "무슨 색을 제일 좋아해?" },
          { de: "Magst du Kaffee?", ko: "커피 좋아해?" },
          { de: "Ich mag keinen Fisch.", ko: "나는 생선을 안 좋아해요." },
        ],
      },
      {
        heading: "möchten — 바람·주문",
        examples: [
          { de: "Was möchten Sie trinken?", ko: "무엇을 마시겠어요?" },
          { de: "Ich möchte den Salat und ein Wasser, bitte.", ko: "샐러드랑 물 하나 주세요." },
          { de: "Ich möchte Arzt werden.", ko: "나는 의사가 되고 싶어요." },
          { de: "Er möchte schlafen.", ko: "그는 자고 싶어해요." },
          { de: "Ich möchte zur Post.", ko: "우체국에 가고 싶어요.", note: "본동사(gehen) 생략" },
        ],
      },
      {
        heading: "주문할 때 쓰는 공손한 표현",
        text: "식당·가게에서는 Ich möchte …, Ich hätte gern …(~를 원합니다), Ich nehme …(~로 할게요)를 써요. wollen 은 의지가 강해서 주문할 때 쓰면 무례하게 들릴 수 있어요.",
        examples: [
          { de: "Ich hätte gerne ein Bier.", ko: "맥주 한 잔 주세요." },
          { de: "Ich nehme einen Salat.", ko: "샐러드로 할게요." },
          { de: "Was darf's denn sein?", ko: "무엇을 드릴까요? (점원)" },
          { de: "Ich möchte einen Kaffee.", ko: "커피 한 잔 주세요." },
        ],
      },
      {
        tip: "möchten 도 ich 형과 er 형이 같아요 (er möchte; er möchtet X).\n'Ich mag einen Kaffee' 는 '커피 한 잔을 좋아한다'는 어색한 말이에요. 지금 원하는 것은 möchte: Ich möchte einen Kaffee.\n두 동사 모두 4격 목적어를 받아요: Ich mag den Film. / Ich möchte einen Tee.",
      },
    ],
    related: ["modal-verbs", "gern", "accusative"],
  },

  // ─── 명사·관사 ─────────────────────────────────────────────────────────────
  {
    id: "articles-gender",
    title: "명사의 성과 관사",
    summary: "모든 명사는 남성(der)·여성(die)·중성(das) — 명사는 관사와 함께 외운다",
    category: "명사·관사",
    lessons: [6, 14, 16, 27],
    sections: [
      {
        text: "독일어의 모든 명사에는 문법적 성이 있어요: 남성(der), 여성(die), 중성(das). 실제 성별과는 거의 상관없어서 der Tisch(탁자)는 남성, die Lampe(램프)는 여성, das Mädchen(소녀)은 중성이에요.\n관사로 성과 격이 드러나므로 명사는 항상 관사와 함께(der Tisch, die Tasse) 외우세요. 명사는 항상 대문자로 시작해요.",
      },
      {
        heading: "정관사와 부정관사 (1격)",
        table: {
          head: ["", "남성", "여성", "중성", "복수"],
          rows: [
            ["정관사 (그 ~)", "der Tisch", "die Lampe", "das Buch", "die Bücher"],
            ["부정관사 (한 ~, 어떤 ~)", "ein Tisch", "eine Lampe", "ein Buch", "— Bücher"],
            ["부정 (~이 아닌, 없는)", "kein Tisch", "keine Lampe", "kein Buch", "keine Bücher"],
          ],
        },
      },
      {
        heading: "성을 추측하는 요령",
        table: {
          head: ["단서", "성", "예"],
          rows: [
            ["-ung, -heit, -keit, -ion, -tät, -schaft, -ei", "여성", "die Zeitung, die Freiheit, die Nationalität, die Bäckerei"],
            ["-e 로 끝나는 명사 (대부분)", "여성", "die Tasse, die Straße, die Sprache"],
            ["-in (여성형)", "여성", "die Lehrerin, die Koreanerin"],
            ["-chen, -lein (작은 것)", "중성", "das Mädchen, das Brötchen"],
            ["-um, -ment, 동사원형 명사", "중성", "das Zentrum, das Essen, das Kochen"],
            ["요일·달·계절, -er (사람), -ling", "남성", "der Montag, der Mai, der Sommer, der Lehrer"],
            ["합성명사", "마지막 명사를 따름", "das Haus + die Tür → die Haustür, der Kindergarten"],
          ],
        },
      },
      {
        heading: "ein 과 der 의 차이",
        text: "처음 언급하거나 '어떤 하나'를 말할 때는 부정관사(ein/eine), 이미 알고 있거나 특정한 것을 말할 때는 정관사(der/die/das)를 써요.",
        examples: [
          { de: "Ich suche eine Tasche.", ko: "가방을 하나 찾고 있어요." },
          { de: "Die Tasche ist schön.", ko: "그 가방 예쁘네요." },
          { de: "Gibt es hier in der Nähe eine Post?", ko: "이 근처에 우체국이 있나요?" },
          { de: "Wo ist die Bank?", ko: "(그) 은행이 어디예요?" },
        ],
      },
      {
        heading: "관사 없이 쓰는 경우",
        text: "직업·국적(sein, werden, als 뒤), 언어, 셀 수 없는 물질이나 추상명사, 도시와 대부분의 나라 이름에는 관사를 쓰지 않아요. 부정관사의 복수형도 없어서 '여러 개의 ~'는 관사 없이 복수만 써요.",
        examples: [
          { de: "Ich bin Student.", ko: "나는 대학생이에요.", note: "Ich bin ein Student. 는 부자연스러움" },
          { de: "Ich arbeite als Arzt.", ko: "나는 의사로 일해요." },
          { de: "Ich spreche Deutsch.", ko: "나는 독일어를 해요." },
          { de: "Ich trinke gern Kaffee.", ko: "나는 커피를 즐겨 마셔요." },
          { de: "Ich komme aus Korea.", ko: "나는 한국에서 왔어요." },
          { de: "Ich esse gern Äpfel.", ko: "나는 사과를 즐겨 먹어요." },
        ],
      },
      {
        tip: "성을 규칙만으로 완벽히 맞힐 수는 없어요. 단어장에 der(파랑)·die(빨강)·das(초록)처럼 색깔로 표시해 관사째 외우는 습관을 들이세요.\n직업 앞에 형용사가 붙으면 관사가 필요해요: Er ist ein guter Lehrer.\n여성 직업·국적은 -in 을 붙여요: Lehrer → Lehrerin, Koreaner → Koreanerin.",
      },
    ],
    related: ["plural", "cases-overview", "negation", "possessive"],
  },
  {
    id: "plural",
    title: "복수형",
    summary: "복수 어미는 -e, -er, -(e)n, -s, 무변화 + 움라우트 — 관사는 언제나 die",
    category: "명사·관사",
    lessons: [17, 27, 52, 10],
    sections: [
      {
        text: "독일어 복수형은 한 가지 규칙으로 만들어지지 않고 몇 가지 패턴이 있어요. 다행히 복수의 정관사는 성과 상관없이 항상 die 예요.\n사전에는 'der Tisch, -e'(→ die Tische), 'der Apfel, ¨-'(→ die Äpfel)처럼 표시돼요. 명사를 외울 때 복수형도 같이 외우세요.",
      },
      {
        heading: "복수형 패턴",
        table: {
          head: ["어미", "단수 → 복수", "주로 어떤 명사"],
          rows: [
            ["-e", "der Tisch → die Tische, der Tag → die Tage", "남성·중성 1음절"],
            ["¨-e", "der Stuhl → die Stühle, die Hand → die Hände", "남성 1음절 (움라우트)"],
            ["-er / ¨-er", "das Kind → die Kinder, das Buch → die Bücher, das Haus → die Häuser", "중성 1음절"],
            ["-n / -en", "die Lampe → die Lampen, die Frau → die Frauen, die Zeitung → die Zeitungen", "대부분의 여성명사"],
            ["-nen", "die Lehrerin → die Lehrerinnen", "-in 여성형"],
            ["-s", "das Auto → die Autos, das Handy → die Handys, das Hotel → die Hotels", "외래어, 모음으로 끝나는 말"],
            ["- / ¨-", "der Lehrer → die Lehrer, das Zimmer → die Zimmer, der Apfel → die Äpfel", "-er, -el, -en, -chen 으로 끝나는 말"],
          ],
        },
      },
      {
        heading: "예문",
        examples: [
          { de: "Wie viele Äpfel?", ko: "사과 몇 개요?" },
          { de: "Wie viele Bananen brauchst du?", ko: "바나나 몇 개 필요해?" },
          { de: "Das Haus hat sechs Zimmer.", ko: "이 집은 방이 여섯 개예요." },
          { de: "Ich habe fünf Finger an jeder Hand.", ko: "나는 양손에 손가락이 다섯 개씩 있어요." },
          { de: "Welche Sprachen sprichst du?", ko: "어떤 언어들을 해?" },
          { de: "Zwei Flaschen Wasser, bitte.", ko: "물 두 병 주세요." },
          { de: "Das dauert zwei Stunden.", ko: "두 시간 걸려요." },
        ],
      },
      {
        heading: "3격 복수에는 -n",
        text: "복수 3격에서는 관사가 den 이 되고 명사 끝에 -n 이 붙어요. 이미 -n 이나 -s 로 끝나는 복수형에는 붙이지 않아요.",
        examples: [
          { de: "Man hört mit den Ohren.", ko: "귀로 듣습니다.", note: "die Ohren → mit den Ohren" },
          { de: "Ich lerne Deutsch seit zwei Monaten.", ko: "나는 두 달 전부터 독일어를 배워요.", note: "die Monate → seit zwei Monaten" },
          { de: "Ich spiele mit den Kindern.", ko: "나는 아이들과 놀아요." },
        ],
      },
      {
        tip: "복수 관사 die 를 여성 단수 die 와 헷갈리지 마세요: die Lampe(램프 하나, 여성) / die Tische(탁자들, 복수).\n한국어는 '사과 두 개'처럼 복수를 따로 표시하지 않지만, 독일어는 반드시 복수형을 써요: zwei Äpfel (zwei Apfel X).\n단, 단위 명사 Euro, Kilo, Grad 등은 숫자 뒤에서도 단수 모양이에요: zehn Euro, ein Kilo Äpfel, 35 Grad.",
      },
    ],
    related: ["articles-gender", "dative", "numbers"],
  },
  {
    id: "negation",
    title: "부정: nicht / kein",
    summary: "명사(ein·무관사)는 kein으로, 나머지는 nicht로 부정한다",
    category: "명사·관사",
    lessons: [10, 12, 17, 13, 37],
    sections: [
      {
        text: "독일어의 부정어는 두 가지예요. kein 은 부정관사 ein/eine 가 붙은 명사나 관사 없는 명사를 부정해요('하나도 없는, ~이 아닌'). nicht 는 그 밖의 모든 것 — 동사, 형용사, 부사, 정관사·소유관사가 붙은 명사, 고유명사 — 를 부정해요.\n한국어는 '안/못'을 동사 앞에 붙이면 끝이지만, 독일어는 무엇을 부정하느냐에 따라 골라 써야 해요.",
      },
      {
        heading: "kein 변화 (ein 과 같은 어미)",
        table: {
          head: ["", "남성", "여성", "중성", "복수"],
          rows: [
            ["1격", "kein", "keine", "kein", "keine"],
            ["4격", "keinen", "keine", "kein", "keine"],
            ["3격", "keinem", "keiner", "keinem", "keinen"],
          ],
        },
      },
      {
        heading: "kein 을 쓰는 경우",
        examples: [
          { de: "Ich habe kein Geld.", ko: "나는 돈이 없어." },
          { de: "Ich esse kein Fleisch.", ko: "나는 고기를 안 먹어요." },
          { de: "Ich spreche kein Japanisch.", ko: "나는 일본어를 못 해요." },
          { de: "Ich habe keine Zeit.", ko: "나는 시간이 없어요." },
          { de: "Hab keine Angst!", ko: "무서워하지 마!" },
          { de: "Kein Problem!", ko: "문제없어요!" },
          { de: "Ich will auf keinen Fall Koch werden.", ko: "나는 절대 요리사는 되고 싶지 않아." },
        ],
      },
      {
        heading: "nicht 를 쓰는 경우와 위치",
        text: "문장 전체를 부정할 때 nicht 는 되도록 문장 뒤쪽에 오지만, 문장 끝의 동사 부분(원형·과거분사·분리전철), 방향·장소 표현, 형용사보다는 앞에 와요.\n특정 부분만 부정할 때는 그 말 바로 앞에 놓아요.",
        examples: [
          { de: "Ich verstehe nicht.", ko: "이해를 못 했어요." },
          { de: "Nein, das passt leider nicht.", ko: "아니요, 유감스럽게도 안 돼요." },
          { de: "Das gefällt mir nicht.", ko: "그거 마음에 안 들어요." },
          { de: "Es geht mir nicht so gut.", ko: "그리 잘 지내지 못해." },
          { de: "Ich kann heute nicht zum Arzt gehen.", ko: "나는 오늘 병원에 갈 수 없어요.", note: "장소·원형 앞" },
          { de: "Sie will heute nicht ausgehen.", ko: "그녀는 오늘 나가고 싶지 않아요." },
          { de: "Nein, das ist nicht mein Handy.", ko: "아니, 그건 내 핸드폰이 아니야.", note: "소유관사 명사 → nicht" },
        ],
      },
      {
        heading: "한눈에 비교",
        table: {
          head: ["긍정", "부정", "이유"],
          rows: [
            ["Ich habe ein Auto.", "Ich habe kein Auto.", "ein + 명사 → kein"],
            ["Ich trinke Kaffee.", "Ich trinke keinen Kaffee.", "무관사 명사 → kein"],
            ["Ich habe das Buch.", "Ich habe das Buch nicht.", "정관사 명사 → nicht"],
            ["Ich bin müde.", "Ich bin nicht müde.", "형용사 → nicht"],
            ["Er kommt.", "Er kommt nicht.", "동사 → nicht"],
            ["Ich rufe dich an.", "Ich rufe dich nicht an.", "분리전철 앞에 nicht"],
          ],
        },
      },
      {
        tip: "'Ich habe nicht Geld' 는 틀려요 → Ich habe kein Geld.\nnicht 를 한국어처럼 동사 앞에 두지 마세요: 'Ich nicht verstehe' X → Ich verstehe nicht.\n직업·국적도 관사가 없으니 kein: Ich bin kein Student.\n'A 가 아니라 B' 는 nicht/kein … sondern …: Ich komme nicht aus Japan, sondern aus Korea.",
      },
    ],
    related: ["articles-gender", "yes-no-questions", "conjunctions", "accusative"],
  },
  {
    id: "cases-overview",
    title: "격 한눈에 보기 (1·3·4격)",
    summary: "1격 = 은/는·이/가, 4격 = 을/를, 3격 = 에게 — 조사 대신 관사가 바뀐다",
    category: "명사·관사",
    lessons: [3, 15, 25, 26, 56],
    sections: [
      {
        text: "격(Kasus)은 명사가 문장에서 맡은 역할이에요. 한국어는 명사 뒤에 조사(은/는, 을/를, 에게)를 붙여 역할을 표시하지만, 독일어는 명사 앞의 관사(와 대명사)의 모양을 바꿔서 표시해요.\n1격(Nominativ) = 주어 '은/는, 이/가', 4격(Akkusativ) = 직접목적어 '을/를', 3격(Dativ) = 간접목적어 '에게'. 2격(Genitiv, '~의')은 A1 에서는 거의 쓰지 않아요.",
      },
      {
        heading: "정관사",
        table: {
          head: ["", "남성", "여성", "중성", "복수"],
          rows: [
            ["1격 (은/는)", "der", "die", "das", "die"],
            ["4격 (을/를)", "den", "die", "das", "die"],
            ["3격 (에게)", "dem", "der", "dem", "den (+ 명사 -n)"],
          ],
        },
      },
      {
        heading: "부정관사 · kein · 소유관사",
        table: {
          head: ["", "남성", "여성", "중성", "복수 (kein / mein)"],
          rows: [
            ["1격", "ein / kein / mein", "eine / keine / meine", "ein / kein / mein", "keine / meine"],
            ["4격", "einen / keinen / meinen", "eine / keine / meine", "ein / kein / mein", "keine / meine"],
            ["3격", "einem / keinem / meinem", "einer / keiner / meiner", "einem / keinem / meinem", "keinen / meinen (+ -n)"],
          ],
        },
      },
      {
        heading: "무엇이 격을 정할까?",
        text: "① 문장 속 역할 — 주어는 1격, 목적어는 보통 4격.\n② 동사 — helfen, gefallen 등은 3격을 요구해요.\n③ 전치사 — mit 뒤는 3격, für 뒤는 4격처럼 정해져 있어요.",
        examples: [
          { de: "Der Kellner hat dem Gast die Speisekarte gebracht.", ko: "웨이터가 손님에게 메뉴판을 가져다줬어요.", note: "der Kellner 1격 · dem Gast 3격 · die Speisekarte 4격" },
          { de: "Ich suche einen Tisch.", ko: "나는 탁자를 찾고 있어요.", note: "4격 (목적어)" },
          { de: "Susanne schreibt ihrer Freundin eine E-Mail.", ko: "주자네는 친구에게 이메일을 써요.", note: "3격 + 4격" },
          { de: "Er fährt mit dem Bus.", ko: "그는 버스를 타고 가요.", note: "mit → 3격" },
          { de: "Ich stelle den Fernseher neben das Regal.", ko: "나는 TV를 선반 옆에 놓아요.", note: "4격 목적어 + 4격 전치사구" },
        ],
      },
      {
        heading: "격을 묻는 의문사",
        table: {
          head: ["격", "사람", "사물", "한국어"],
          rows: [
            ["1격", "Wer?", "Was?", "누가? / 무엇이?"],
            ["4격", "Wen?", "Was?", "누구를? / 무엇을?"],
            ["3격", "Wem?", "—", "누구에게?"],
          ],
        },
      },
      {
        tip: "외울 핵심은 두 가지예요: 4격은 남성만 바뀐다(der → den, ein → einen), 3격은 어미가 -m / -r / -m / -n (dem, der, dem, den).\n격이 역할을 알려 주기 때문에 독일어는 어순을 바꿔도 뜻이 유지돼요: Den Mann sieht die Frau. = Die Frau sieht den Mann. (여자가 남자를 본다) — 한국어 '남자를 여자가 본다'와 같은 원리예요.",
      },
    ],
    related: ["accusative", "dative", "personal-pronouns", "articles-gender"],
  },
  {
    id: "accusative",
    title: "4격 (Akkusativ)",
    summary: "직접목적어(을/를) — 남성만 den·einen·keinen·meinen으로 바뀐다",
    category: "명사·관사",
    lessons: [15, 14, 16, 17, 56],
    sections: [
      {
        text: "4격은 동사의 직접목적어, 한국어의 '을/를'에 해당해요. 좋은 소식은 여성·중성·복수는 1격과 모양이 똑같고, 남성만 바뀐다는 점이에요: der → den, ein → einen, kein → keinen, mein → meinen.",
      },
      {
        heading: "변화표",
        table: {
          head: ["", "남성", "여성", "중성", "복수"],
          rows: [
            ["정관사", "den", "die", "das", "die"],
            ["부정관사", "einen", "eine", "ein", "—"],
            ["kein", "keinen", "keine", "kein", "keine"],
            ["소유관사", "meinen", "meine", "mein", "meine"],
            ["대명사 (그것을)", "ihn", "sie", "es", "sie"],
          ],
        },
      },
      {
        heading: "4격을 쓰는 동사",
        text: "haben, brauchen, möchten, mögen, kaufen, nehmen, suchen, finden, sehen, essen, trinken, bestellen, besuchen, lieben, bringen, es gibt 등 대부분의 타동사가 4격 목적어를 가져요.",
        examples: [
          { de: "Ich nehme einen Salat.", ko: "샐러드로 할게요." },
          { de: "Ich suche eine Tasche.", ko: "가방을 찾고 있어요." },
          { de: "Haben Sie auch ein Sofa?", ko: "소파도 있나요?" },
          { de: "Ich finde den Stuhl schick.", ko: "이 의자 멋진 것 같아요." },
          { de: "Ich kann meinen Pass nicht finden.", ko: "내 여권을 못 찾겠어요." },
          { de: "Michael besucht seinen Onkel in Paris.", ko: "미하엘은 파리에 있는 삼촌을 방문해요." },
          { de: "Ich habe nur einen Euro.", ko: "나는 1유로밖에 없어." },
          { de: "Gibt es hier in der Nähe einen Supermarkt?", ko: "이 근처에 슈퍼마켓이 있나요?", note: "es gibt + 4격" },
        ],
      },
      {
        heading: "한국어로는 '~에게'인데 4격인 동사",
        text: "fragen(묻다), anrufen(전화하다)은 한국어로 '~에게'지만 독일어에서는 4격이에요.",
        examples: [
          { de: "Kann ich Sie etwas fragen?", ko: "뭐 좀 여쭤봐도 될까요?" },
          { de: "Ich rufe dich an.", ko: "내가 너한테 전화할게." },
        ],
      },
      {
        heading: "4격이 쓰이는 그 밖의 자리",
        text: "4격 전치사(für, ohne, durch, gegen, um) 뒤, 3·4격 전치사가 방향(Wohin?)을 나타낼 때, 그리고 전치사 없는 시간 표현(jeden Tag, den ganzen Tag, einen Moment)에도 4격을 써요.",
        examples: [
          { de: "Vielen Dank für deinen Brief.", ko: "네 편지 정말 고마워." },
          { de: "Es regnet den ganzen Tag.", ko: "하루 종일 비가 와요." },
          { de: "Einen Moment, bitte.", ko: "잠시만요." },
          { de: "Ich gehe jeden Tag zu Fuß zur Arbeit.", ko: "나는 매일 걸어서 출근해요." },
        ],
      },
      {
        tip: "'Ich habe ein Bruder' 처럼 남성 4격 어미 -en 을 빠뜨리는 실수가 가장 흔해요 → Ich habe einen Bruder.\nsein 동사 뒤는 목적어가 아니라 주어와 같은 것이므로 1격이에요: Das ist ein Tisch. (einen Tisch X)",
      },
    ],
    related: ["cases-overview", "dative", "prep-accusative", "es-gibt-impersonal"],
  },
  {
    id: "dative",
    title: "3격 (Dativ)",
    summary: "간접목적어(에게) — dem·der·dem·den+n, helfen·gefallen 등 3격 동사",
    category: "명사·관사",
    lessons: [3, 23, 25, 34, 44, 56],
    sections: [
      {
        text: "3격은 주로 '~에게', 즉 무언가를 받는 사람이나 행동의 영향을 받는 사람을 나타내요. 또 helfen, gefallen 같은 특정 동사, 그리고 mit, zu, bei 같은 3격 전치사 뒤에서도 3격을 써요.\n어미는 남성·중성 -m, 여성 -r, 복수 -n 이고, 복수 명사 끝에도 -n 을 붙여요.",
      },
      {
        heading: "변화표",
        table: {
          head: ["", "남성", "여성", "중성", "복수"],
          rows: [
            ["정관사", "dem", "der", "dem", "den … -n"],
            ["부정관사", "einem", "einer", "einem", "—"],
            ["kein", "keinem", "keiner", "keinem", "keinen … -n"],
            ["소유관사", "meinem", "meiner", "meinem", "meinen … -n"],
            ["대명사 (그것에게)", "ihm", "ihr", "ihm", "ihnen"],
          ],
        },
      },
      {
        heading: "3격 + 4격: '누구에게 무엇을'",
        text: "geben, bringen, schreiben, zeigen, schicken, schenken, empfehlen 같은 동사는 받는 사람(3격)과 주는 것(4격)을 함께 가져요. 둘 다 명사면 보통 3격이 먼저 와요.",
        examples: [
          { de: "Der Kellner hat dem Gast die Speisekarte gebracht.", ko: "웨이터가 손님에게 메뉴판을 가져다줬어요." },
          { de: "Susanne schreibt ihrer Freundin eine E-Mail.", ko: "주자네는 친구에게 이메일을 써요." },
          { de: "Bitte bringen Sie mir einen Kaffee.", ko: "커피 한 잔 갖다주세요." },
          { de: "Zeigen Sie mir Ihren Arm.", ko: "팔을 보여 주세요." },
        ],
      },
      {
        heading: "3격만 쓰는 동사",
        text: "helfen(돕다), danken(감사하다), gefallen(마음에 들다), gehören(~의 것이다), schmecken(맛있다), passen(맞다, 괜찮다), stehen(어울리다), wehtun(아프다), fehlen(없다, 아프다) 뒤의 사람은 3격이에요.",
        examples: [
          { de: "Kannst du mir helfen?", ko: "나를 도와줄 수 있어?" },
          { de: "Ich habe meiner Oma geholfen.", ko: "나는 할머니를 도와드렸어요." },
          { de: "Wie gefällt dir meine Wohnung?", ko: "내 집 어때? (네 마음에 들어?)" },
          { de: "Passt dir Freitag?", ko: "금요일 괜찮아?" },
          { de: "Das schwarze Kleid steht dir super!", ko: "그 검은 원피스 너한테 정말 잘 어울려!" },
          { de: "Nun tut mir mein Fuß weh.", ko: "이제 발이 아파요." },
          { de: "Was fehlt Ihnen denn?", ko: "어디가 안 좋으세요?" },
        ],
      },
      {
        heading: "Wie geht es + 3격 · Mir ist …",
        text: "안부나 몸 상태를 말할 때는 사람을 3격으로 표현해요. 직역하면 '너에게 (상황이) 어떻게 되어 가니?', '나에게 어지럽다'라는 구조예요.",
        table: {
          head: ["누구", "질문", "대답"],
          rows: [
            ["du", "Wie geht es dir?", "Mir geht es gut."],
            ["Sie", "Wie geht es Ihnen?", "Mir geht es fantastisch, danke."],
            ["er", "Wie geht es ihm?", "Ihm geht es gut."],
            ["sie (그녀)", "Wie geht es ihr?", "Ihr geht es nicht so gut."],
            ["ihr", "Wie geht es euch?", "Uns geht es gut."],
          ],
        },
        examples: [
          { de: "Mir ist schwindelig.", ko: "어지러워요." },
          { de: "Mir ist nicht gut.", ko: "속이 안 좋아요." },
        ],
      },
      {
        tip: "gefallen 은 주어와 목적어가 한국어와 반대예요: Das gefällt mir. = '그것이 나에게 마음에 든다' → 좋아하는 대상이 주어(1격), 나는 3격 mir.\nhelfen 은 한국어로 '~을 돕다'지만 3격이에요: Ich helfe dir. (dich X)\n반대로 anrufen·fragen 은 '~에게'지만 4격이에요: Ich rufe dich an.",
      },
    ],
    related: ["cases-overview", "prep-dative", "personal-pronouns", "accusative"],
  },
  {
    id: "possessive",
    title: "소유관사",
    summary: "mein·dein·sein·ihr·unser·euer·Ihr — 어미는 ein과 똑같이 변한다",
    category: "명사·관사",
    lessons: [56, 4, 8, 30],
    sections: [
      {
        text: "소유관사는 '나의, 너의, 그의…'를 뜻하고 명사 앞에 와요. 어미는 뒤에 오는 명사의 성·수·격에 따라 부정관사 ein 과 똑같이 변해요 (mein Buch, meine Tasche, meinen Pass).\n무엇을 쓸지는 '누구의 것이냐(소유자)'가 정하고, 어미는 '그 물건(명사)'이 정해요.",
      },
      {
        heading: "기본형",
        table: {
          head: ["소유자", "소유관사", "뜻", "예"],
          rows: [
            ["ich", "mein", "나의", "Das ist mein Buch."],
            ["du", "dein", "너의", "Das ist dein Stift."],
            ["er / es", "sein", "그의 / 그것의", "Das ist sein Auto."],
            ["sie (그녀)", "ihr", "그녀의", "Das ist ihr Handy."],
            ["wir", "unser", "우리의", "Das ist unser Haus."],
            ["ihr", "euer", "너희의", "Das ist euer Zimmer."],
            ["sie (그들)", "ihr", "그들의", "Das ist ihr Garten."],
            ["Sie", "Ihr", "당신(들)의", "Das ist Ihr Platz."],
          ],
        },
      },
      {
        heading: "어미 (mein 의 예)",
        table: {
          head: ["", "남성", "여성", "중성", "복수"],
          rows: [
            ["1격", "mein", "meine", "mein", "meine"],
            ["4격", "meinen", "meine", "mein", "meine"],
            ["3격", "meinem", "meiner", "meinem", "meinen"],
          ],
        },
      },
      {
        heading: "예문",
        examples: [
          { de: "Wie ist Ihr Name?", ko: "성함이 어떻게 되세요?" },
          { de: "Was ist deine Nationalität?", ko: "네 국적이 뭐야?", note: "die Nationalität → deine" },
          { de: "Meine Telefonnummer ist 0176 1234567.", ko: "제 전화번호는 0176 1234567이에요." },
          { de: "Ich kann meinen Pass nicht finden.", ko: "내 여권을 못 찾겠어요.", note: "der Pass, 4격 → meinen" },
          { de: "Michael besucht seinen Onkel in Paris.", ko: "미하엘은 파리에 있는 삼촌을 방문해요." },
          { de: "Susanne schreibt ihrer Freundin eine E-Mail.", ko: "주자네는 (그녀의) 친구에게 이메일을 써요.", note: "die Freundin, 3격 → ihrer" },
          { de: "Unser Zug fährt gleich.", ko: "우리 기차가 곧 떠나요." },
        ],
      },
      {
        heading: "euer 와 명사 없이 쓰는 형태",
        text: "euer 는 어미가 붙으면 가운데 e 가 빠져요: eure Wohnung, euren Hund. (unser 는 그대로: unsere Wohnung)\n명사 없이 혼자 '내 것, 네 것'으로 쓸 때는 남성 1격이 -er, 중성이 -(e)s 로 끝나요: Wann ist dein Geburtstag? – Meiner ist am 5. November. (der Geburtstag → meiner)",
      },
      {
        tip: "sein 과 ihr 는 '소유자'의 성으로 골라요: 남자의 것 → sein, 여자의 것 → ihr. 물건의 성과는 관계없어요: seine Mutter (그의 어머니), ihr Vater (그녀의 아버지).\n대문자 Ihr(당신의)와 소문자 ihr(그녀의/그들의/너희는)를 구분하세요.",
      },
    ],
    related: ["articles-gender", "accusative", "dative", "personal-pronouns"],
  },

  // ─── 문장 구조 ─────────────────────────────────────────────────────────────
  {
    id: "word-order",
    title: "평서문 어순 — 동사는 두 번째",
    summary: "변화한 동사는 언제나 2번째 자리 — 시간·장소가 앞에 오면 주어는 동사 뒤로",
    category: "문장 구조",
    lessons: [13, 4, 43, 47, 27],
    sections: [
      {
        text: "독일어 평서문의 가장 중요한 규칙: 주어에 맞게 변한 동사는 항상 두 번째 자리에 온다(V2). 한국어는 동사가 맨 끝에 오지만 독일어는 두 번째예요.\n첫 번째 자리에는 주어뿐 아니라 시간, 장소, 목적어 등 어떤 성분이든 하나가 올 수 있어요. 주어가 아닌 것이 첫 자리에 오면 주어는 동사 바로 뒤로 가요(도치).",
      },
      {
        heading: "자리 표",
        table: {
          head: ["1번째 자리", "2번째 (동사)", "나머지", "문장 끝"],
          rows: [
            ["Ich", "habe", "am Montag Zeit.", ""],
            ["Am Montag", "habe", "ich Zeit.", ""],
            ["Ich", "stehe", "um 7 Uhr", "auf."],
            ["Um 7 Uhr", "stehe", "ich", "auf."],
            ["Heute", "ist", "der 15. Mai.", ""],
            ["Im Erdgeschoss", "sind", "zwei Zimmer.", ""],
            ["Dann", "habe", "ich Deutsch", "gelernt."],
            ["Im Winter", "kann", "ich nicht in den Urlaub", "fahren."],
          ],
        },
      },
      {
        heading: "예문",
        examples: [
          { de: "Ich fahre morgen nach Berlin.", ko: "나는 내일 베를린에 가요." },
          { de: "Morgen fahre ich nach Berlin.", ko: "내일 나는 베를린에 가요.", note: "시간이 앞 → 동사 다음 주어" },
          { de: "Gestern hat es geregnet.", ko: "어제 비가 왔어요." },
          { de: "Neben dem Haus ist eine Garage.", ko: "집 옆에 차고가 있어요." },
          { de: "Möbel finden Sie im 1. Stock.", ko: "가구는 (한국식) 2층에 있습니다.", note: "목적어가 첫 자리" },
        ],
      },
      {
        heading: "가운데 순서: 시간 – 방법 – 장소",
        text: "여러 부사어가 함께 오면 보통 '언제(시간) – 어떻게(방법) – 어디로/어디에(장소)' 순서를 따라요.",
        examples: [
          { de: "Ich fahre morgen mit dem Zug nach Busan.", ko: "나는 내일 기차를 타고 부산에 가요." },
          { de: "Ich gehe jeden Tag zu Fuß zur Arbeit.", ko: "나는 매일 걸어서 출근해요." },
          { de: "Ich wohne seit einem Jahr in Deutschland.", ko: "나는 1년 전부터 독일에 살아요." },
        ],
      },
      {
        heading: "자리를 차지하지 않는 말",
        text: "und, aber, oder, denn, sondern 같은 접속사와 Ja/Nein, 부르는 말은 '0번 자리'라서 순서에 포함되지 않아요: Ja, ich spreche ein bisschen Deutsch.\n반면 dann(그다음에), danach(그 후에)는 부사라서 1번째 자리를 차지해요: Dann habe ich ferngesehen.",
      },
      {
        tip: "영어식으로 'Heute ich gehe ins Kino' 라고 하면 틀려요 → Heute gehe ich ins Kino.\n'두 번째'는 두 번째 단어가 아니라 두 번째 성분이에요. Am Montag, Im ersten Stock 처럼 여러 단어라도 한 덩어리면 하나의 자리예요.",
      },
    ],
    related: ["sentence-bracket", "conjunctions", "yes-no-questions", "w-questions"],
  },
  {
    id: "sentence-bracket",
    title: "문장 틀 (Satzklammer)",
    summary: "동사가 두 부분이면 변한 부분은 2번째, 나머지는 문장 끝 — 괄호처럼 감싼다",
    category: "문장 구조",
    lessons: [19, 21, 43, 36, 46],
    sections: [
      {
        text: "동사가 두 부분으로 이루어질 때 — 조동사 + 원형, 분리동사, haben/sein + 과거분사 — 변화한 부분은 2번째 자리에, 나머지 부분은 문장 맨 끝에 와요. 두 부분이 가운데 내용을 괄호처럼 감싸서 '문장 틀(Satzklammer)'이라고 해요.\n핵심 의미가 문장 끝에 온다는 점은 한국어와 비슷해요. 그래서 독일어는 끝까지 들어야 뜻을 알 수 있어요.",
      },
      {
        heading: "문장 틀의 종류",
        table: {
          head: ["종류", "1", "2 (변한 동사)", "가운데", "문장 끝"],
          rows: [
            ["화법조동사", "Ich", "kann", "gut Deutsch", "sprechen."],
            ["möchten", "Ich", "möchte", "Arzt", "werden."],
            ["분리동사", "Der Zug", "kommt", "um 17 Uhr", "an."],
            ["현재완료", "Ich", "habe", "gestern einen Film", "gesehen."],
            ["현재완료 + 분리동사", "Ich", "bin", "heute spät", "aufgestanden."],
            ["조동사 + 분리동사", "Ich", "muss", "morgen früh", "aufstehen."],
            ["gehen + 원형", "Ich", "gehe", "meine Freundin", "besuchen."],
          ],
        },
      },
      {
        heading: "의문문에서도 틀은 유지",
        text: "예/아니오 의문문은 변한 동사가 1번째로, W-의문문은 의문사 다음 2번째로 가지만, 끝부분은 그대로 문장 끝에 남아요.",
        examples: [
          { de: "Kannst du Klavier spielen?", ko: "피아노 칠 줄 알아?" },
          { de: "Können wir den Termin verschieben?", ko: "약속을 미룰 수 있을까?" },
          { de: "Wann fährt der Zug nach Berlin ab?", ko: "베를린행 기차는 언제 출발해요?" },
          { de: "Was hast du am Wochenende gemacht?", ko: "주말에 뭐 했어?" },
          { de: "Wann bist du heute aufgestanden?", ko: "오늘 언제 일어났어?" },
        ],
      },
      {
        heading: "nicht 는 끝부분 바로 앞",
        examples: [
          { de: "Ich kann leider doch nicht ins Kino gehen.", ko: "아쉽지만 영화관에 못 가겠어." },
          { de: "Ich muss nicht kommen.", ko: "나는 올 필요가 없어요." },
          { de: "Er hat mich nicht angerufen.", ko: "그는 나한테 전화하지 않았어요." },
        ],
      },
      {
        tip: "영어처럼 본동사를 조동사 바로 뒤에 붙이는 실수가 많아요: 'Ich kann sprechen Deutsch' X → Ich kann Deutsch sprechen.\n반대로 문장 끝 부분(원형, 과거분사, 분리전철)을 아예 빠뜨리기도 해요. 말하기 전에 '끝에 뭐가 와야 하지?'를 먼저 떠올리세요.",
      },
    ],
    related: ["word-order", "modal-verbs", "separable-verbs", "perfekt"],
  },
  {
    id: "yes-no-questions",
    title: "예/아니오 의문문",
    summary: "동사를 맨 앞으로 — 대답은 ja / nein, 부정 질문에 긍정하면 doch",
    category: "문장 구조",
    lessons: [10, 13, 19, 38],
    sections: [
      {
        text: "'예/아니오'로 대답하는 질문은 변화한 동사를 문장 맨 앞에 두고, 끝을 올려 읽어요. 한국어는 어미만 '-요?'로 바꾸면 되지만, 독일어는 동사와 주어의 순서가 바뀌어요.",
      },
      {
        heading: "평서문 → 의문문",
        table: {
          head: ["평서문", "의문문"],
          rows: [
            ["Du hast Zeit.", "Hast du Zeit?"],
            ["Sie sprechen Englisch.", "Sprechen Sie Englisch?"],
            ["Du kannst Klavier spielen.", "Kannst du Klavier spielen?"],
            ["Das passt dir.", "Passt dir das?"],
            ["Er steht früh auf.", "Steht er früh auf?"],
            ["Du warst schon mal in England.", "Warst du schon mal in England?"],
          ],
        },
      },
      {
        heading: "ja · nein · doch",
        text: "보통 질문에는 ja(네) / nein(아니요)로 대답해요. 그런데 부정문으로 물었을 때(nicht, kein 이 들어간 질문) 긍정으로 대답하려면 ja 가 아니라 doch 를 써요.",
        table: {
          head: ["질문", "긍정 대답", "부정 대답"],
          rows: [
            ["Hast du Zeit?", "Ja, ich habe Zeit.", "Nein, ich habe keine Zeit."],
            ["Hast du keine Zeit?", "Doch, ich habe Zeit.", "Nein, ich habe keine Zeit."],
            ["Kommst du nicht?", "Doch, ich komme.", "Nein, ich komme nicht."],
          ],
        },
      },
      {
        heading: "예문",
        examples: [
          { de: "Sprechen Sie Deutsch? – Ja, ich spreche ein bisschen Deutsch.", ko: "독일어 하세요? – 네, 조금 해요." },
          { de: "Darf ich das Fenster öffnen? – Ja, natürlich.", ko: "창문 열어도 될까요? – 네, 물론이죠." },
          { de: "Musst du heute arbeiten? – Ja, ich muss bis 18 Uhr arbeiten.", ko: "오늘 일해야 해? – 응, 18시까지 일해야 해." },
          { de: "Ist das dein Handy? – Nein, das ist nicht mein Handy.", ko: "이거 네 핸드폰이야? – 아니, 내 핸드폰 아니야." },
          { de: "Haben Sie das auch in Blau? – Ja, natürlich.", ko: "이거 파란색도 있나요? – 네, 물론이죠." },
        ],
      },
      {
        tip: "부정 질문의 대답은 한국어와 반대로 생각해야 해요. 'Kommst du nicht?(안 와?)'에 한국어로는 '응, 안 가'라고 하지만 독일어는 Nein, ich komme nicht. 가는 경우는 Doch, ich komme! 예요. 이때 Ja 는 쓰지 않아요.",
      },
    ],
    related: ["w-questions", "negation", "word-order"],
  },
  {
    id: "w-questions",
    title: "W-의문문",
    summary: "의문사 + 동사 + 주어 … — Wo wohnst du? Wann kommt er?",
    category: "문장 구조",
    lessons: [35, 4, 5, 17, 18],
    sections: [
      {
        text: "'누가, 무엇을, 어디서, 언제…'를 묻는 의문사는 대부분 W 로 시작해서 W-의문문이라고 해요. 의문사가 1번째, 변화한 동사가 2번째, 그다음에 주어가 와요. 끝은 보통 내려 읽어요.",
      },
      {
        heading: "의문사",
        table: {
          head: ["의문사", "뜻", "예"],
          rows: [
            ["wer / wen / wem", "누가 / 누구를 / 누구에게", "Wer ist das? / Mit wem fährst du nach Berlin?"],
            ["was", "무엇", "Was machst du beruflich?"],
            ["wo", "어디에(서)", "Wo wohnen Sie?"],
            ["woher", "어디로부터", "Woher kommen Sie?"],
            ["wohin", "어디로", "Wohin fährst du?"],
            ["wann", "언제", "Wann hast du Zeit?"],
            ["wie", "어떻게", "Wie heißt du?"],
            ["warum", "왜", "Warum lernst du Deutsch?"],
            ["wie viel / wie viele", "얼마나 / 몇 개", "Wie viel kostet das? / Wie viele Äpfel?"],
            ["wie lange", "얼마나 오래", "Wie lange dauert das?"],
            ["wie oft", "얼마나 자주", "Wie oft besuchst du deine Großmutter?"],
            ["wie alt", "몇 살", "Wie alt bist du?"],
            ["seit wann", "언제부터", "Seit wann wohnst du hier?"],
            ["um wie viel Uhr", "몇 시에", "Um wie viel Uhr beginnt der Kurs?"],
            ["welch-", "어느, 어떤", "Welche Sprachen sprichst du?"],
          ],
        },
      },
      {
        heading: "예문",
        examples: [
          { de: "Wann kommt er?", ko: "그는 언제 와요?" },
          { de: "Wann rufst du mich an?", ko: "언제 나한테 전화할 거야?" },
          { de: "Wo fährt der Zug ab?", ko: "기차는 어디서 출발해?" },
          { de: "Was kauft ihr ein?", ko: "너희 뭐 사?" },
          { de: "Wie findest du diese Lampe?", ko: "이 램프 어때?" },
          { de: "Was hast du gestern gemacht?", ko: "어제 뭐 했어?" },
        ],
      },
      {
        heading: "wie viel 과 wie viele",
        text: "wie viel 은 셀 수 없는 것(돈, 시간, 물, 가격)에, wie viele 는 셀 수 있는 것의 복수형에 써요.",
        examples: [
          { de: "Wie viel Zeit hast du noch?", ko: "시간 얼마나 남았어?" },
          { de: "Wie viel Milch brauchen Sie?", ko: "우유가 얼마나 필요하세요?" },
          { de: "Wie viele Bananen brauchst du?", ko: "바나나 몇 개 필요해?" },
        ],
      },
      {
        heading: "welch- 의 변화 (der 와 같은 어미)",
        table: {
          head: ["", "남성", "여성", "중성", "복수"],
          rows: [
            ["1격", "welcher", "welche", "welches", "welche"],
            ["4격", "welchen", "welche", "welches", "welche"],
            ["3격", "welchem", "welcher", "welchem", "welchen"],
          ],
        },
        examples: [
          { de: "Welches Datum ist heute?", ko: "오늘 날짜가 어떻게 돼요?" },
          { de: "Aus welchem Land kommen Sie?", ko: "어느 나라에서 오셨어요?" },
        ],
      },
      {
        tip: "'Wo du wohnst?' 처럼 한국어·영어식으로 주어를 동사 앞에 두면 틀려요 → Wo wohnst du?\n전치사가 있으면 의문사 앞에 와요: Mit wem? (누구와?), Für wen? (누구를 위해?), Seit wann? (언제부터?)\nwo(어디에) / wohin(어디로) / woher(어디서부터)를 구분하세요.",
      },
    ],
    related: ["yes-no-questions", "word-order", "place-directions", "cases-overview"],
  },
  {
    id: "conjunctions",
    title: "접속사 und / aber / oder / denn / sondern",
    summary: "문장을 잇는 등위접속사 — 어순에 영향 없음 (0번 자리)",
    category: "문장 구조",
    lessons: [7, 15, 29, 38],
    sections: [
      {
        text: "und, aber, oder, denn, sondern 은 두 문장(또는 두 단어)을 대등하게 이어 줘요. 이 접속사들은 '0번 자리'에 있어서 어순에 영향을 주지 않아요. 접속사 뒤 문장은 평소처럼 1번째 성분 + 동사(2번째) 순서예요.",
      },
      {
        heading: "뜻",
        table: {
          head: ["접속사", "뜻", "예"],
          rows: [
            ["und", "그리고", "Ich lese gern und ich höre Musik."],
            ["aber", "그러나", "Sie ist schön. Aber wie viel kostet sie?"],
            ["oder", "또는", "Zusammen oder getrennt?"],
            ["denn", "왜냐하면 (이유)", "Ich muss absagen, denn ich bin krank."],
            ["sondern", "(~이 아니라) ~이다", "Ich komme nicht aus Japan, sondern aus Korea."],
          ],
        },
      },
      {
        heading: "어순",
        table: {
          head: ["앞 문장", "0 (접속사)", "1", "2 (동사)", "나머지"],
          rows: [
            ["Ich lese gern,", "und", "ich", "höre", "Musik."],
            ["Ich will ins Kino gehen,", "aber", "ich", "habe", "keine Zeit."],
            ["Ich kann nicht kommen,", "denn", "ich", "bin", "krank."],
            ["Heute gehe ich ins Kino", "oder", "ich", "sehe", "fern."],
            ["Im Kino darf man essen,", "aber", "im Theater", "darf", "man das nicht."],
          ],
        },
      },
      {
        heading: "예문",
        examples: [
          { de: "Er ist groß und schlank.", ko: "그는 키가 크고 날씬해요." },
          { de: "Trinkst du Kaffee oder Tee?", ko: "커피 마실래, 차 마실래?" },
          { de: "Im Kino darf man etwas essen, aber im Theater nicht.", ko: "영화관에서는 뭘 먹어도 되지만, 극장에서는 안 돼요." },
          { de: "Ich lerne Deutsch, denn ich möchte in Deutschland studieren.", ko: "나는 독일에서 공부하고 싶어서 독일어를 배워요." },
          { de: "Dann habe ich gefrühstückt und bin nach Berlin gefahren.", ko: "그다음 아침을 먹고 베를린에 갔어.", note: "주어가 같으면 und 뒤 주어 생략 가능" },
        ],
      },
      {
        heading: "denn 과 weil",
        text: "같은 '왜냐하면'이라도 weil 은 종속접속사라서 변화한 동사가 문장 맨 끝으로 가요: Warum lernst du Deutsch? – Weil ich in Deutschland studieren möchte. denn 은 어순이 바뀌지 않아요: …, denn ich möchte in Deutschland studieren.",
      },
      {
        tip: "aber 와 sondern 구분: 앞 문장에 nicht/kein 이 있고 '그게 아니라 이것'으로 바로잡을 때는 sondern, 그 밖의 대조는 aber 예요.\n쉼표: aber·denn·sondern 앞에는 쉼표를 찍고, und·oder 앞에는 보통 찍지 않아요.\ndann(그다음에)은 접속사가 아니라 부사라서 1번째 자리를 차지해요: …, dann gehe ich nach Hause.",
      },
    ],
    related: ["word-order", "negation"],
  },
  {
    id: "es-gibt-impersonal",
    title: "es gibt · 비인칭 es",
    summary: "es gibt + 4격(~이 있다), Es regnet, Wie geht es?, Es ist 3 Uhr — 뜻 없는 주어 es",
    category: "문장 구조",
    lessons: [24, 33, 3, 9],
    sections: [
      {
        text: "독일어 문장에는 주어가 꼭 필요해요. 그래서 날씨, 시간, 안부처럼 특별한 주어가 없는 문장에서는 뜻이 없는 형식상의 주어 es 를 써요. 한국어는 '비가 와요'처럼 주어 없이도 말할 수 있지만, 독일어는 Es regnet. 처럼 es 를 빼면 안 돼요.",
      },
      {
        heading: "es gibt + 4격 = ~이 있다",
        text: "어떤 것이 '존재한다, 있다'라고 말할 때 es gibt 를 써요. 뒤에 오는 명사는 4격이고, 복수여도 동사는 항상 gibt(단수)예요.",
        examples: [
          { de: "Gibt es hier in der Nähe eine Post?", ko: "이 근처에 우체국이 있나요?" },
          { de: "Hier gibt es keinen Supermarkt.", ko: "여기에는 슈퍼마켓이 없어요.", note: "der Supermarkt → 4격 keinen" },
          { de: "In Berlin gibt es viele Museen.", ko: "베를린에는 박물관이 많아요.", note: "복수여도 gibt" },
          { de: "Was gibt es heute zum Mittagessen?", ko: "오늘 점심은 뭐가 나와요?" },
        ],
      },
      {
        heading: "날씨",
        examples: [
          { de: "Es regnet.", ko: "비가 와요." },
          { de: "Es schneit.", ko: "눈이 와요." },
          { de: "Es ist sonnig.", ko: "맑아요." },
          { de: "Es ist sehr kalt.", ko: "매우 추워요." },
          { de: "Es sind 35 Grad.", ko: "35도예요.", note: "복수 Grad → sind" },
          { de: "Gestern hat es geregnet.", ko: "어제 비가 왔어요." },
        ],
      },
      {
        heading: "시간 · 안부 · 관용 표현",
        examples: [
          { de: "Wie spät ist es? – Es ist drei Uhr.", ko: "몇 시예요? – 세 시예요." },
          { de: "Wie geht es dir? – Es geht.", ko: "어떻게 지내? – 그저 그래." },
          { de: "Es tut mir leid.", ko: "죄송합니다." },
          { de: "Es ist ungefähr 10 Minuten zu Fuß.", ko: "걸어서 약 10분이에요." },
        ],
      },
      {
        heading: "es gibt 와 sein 의 차이",
        text: "es gibt 는 '그런 것이 있느냐 없느냐(존재)', sein 은 '특정한 그것이 어디에 있느냐(위치)'에 써요: Gibt es hier eine Bank? (여기 은행 있어요?) / Wo ist die Bank? – Die Bank ist neben dem Supermarkt. (그 은행은 어디 있어요?)",
      },
      {
        tip: "es gibt 뒤는 4격이에요: Es gibt einen Park. (ein Park X)\n첫 자리에 다른 말이 오면 es 는 동사 뒤로 가요: Hier gibt es …, Heute regnet es.\n날씨 문장에서 es 를 빼면 안 돼요: 'Regnet.' X → Es regnet.",
      },
    ],
    related: ["accusative", "man", "clock-time", "word-order"],
  },
  {
    id: "man",
    title: "일반 주어 man",
    summary: "man = (일반적인) 사람, 누구나 — 동사는 er/sie/es 형태",
    category: "문장 구조",
    lessons: [38, 42, 52, 41],
    sections: [
      {
        text: "man 은 특정한 누군가가 아니라 '사람들, 누구나, (일반적으로) 우리'를 가리키는 주어예요. 규칙, 일반적인 사실, 방법을 말할 때 많이 써요.\n한국어는 '여기서 담배 피우면 안 돼요'처럼 주어 없이 말하지만, 독일어는 주어가 필요하므로 man 을 넣어요. 동사는 er/sie/es 와 같은 3인칭 단수 형태예요.",
      },
      {
        heading: "예문",
        examples: [
          { de: "Hier darf man nicht rauchen.", ko: "여기서는 담배를 피우면 안 돼요." },
          { de: "Im Kino darf man etwas essen, aber im Theater nicht.", ko: "영화관에서는 뭘 먹어도 되지만, 극장에서는 안 돼요." },
          { de: "Man hört mit den Ohren.", ko: "(사람은) 귀로 듣습니다." },
          { de: "Man muss hier links abbiegen.", ko: "여기서 왼쪽으로 꺾어야 해요." },
          { de: "Wie sagt man das auf Deutsch?", ko: "그걸 독일어로 어떻게 말해요?" },
          { de: "Wie schreibt man das?", ko: "그거 어떻게 써요?" },
          { de: "In Deutschland kann man mit 17 den Führerschein machen.", ko: "독일에서는 17세에 운전면허를 딸 수 있어요." },
        ],
      },
      {
        heading: "man 과 Mann",
        text: "man(소문자, n 하나)은 대명사 '사람들', der Mann(대문자, n 둘)은 명사 '남자'예요. 발음은 같아요.",
      },
      {
        tip: "동사는 3인칭 단수: man muss, man darf, man kann ('man müssen' X).\n문장에서 man 을 다시 가리킬 때도 er 가 아니라 계속 man 을 써요.\n다른 성분이 1번째 자리에 오면 man 도 동사 뒤로 가요: Hier darf man …",
      },
    ],
    related: ["modal-verbs", "es-gibt-impersonal", "personal-pronouns"],
  },
  {
    id: "adjectives-predicative",
    title: "형용사 서술 · finden",
    summary: "Das ist schön. — 서술 형용사는 어미 없음, finden + 4격 + 형용사 = ~라고 생각하다",
    category: "문장 구조",
    lessons: [16, 34, 54, 27, 55],
    sections: [
      {
        text: "형용사가 sein, werden, aussehen, finden 과 함께 '서술어'로 쓰이면 어미가 붙지 않고 기본형 그대로예요. 주어가 남성이든 여성이든 복수든 상관없어요: Der Tisch ist schön. Die Lampe ist schön. Die Stühle sind schön.\n명사 앞에서 꾸밀 때는 어미가 붙어요 (die blaue Jacke, das schwarze Kleid). 이건 A1 후반에 따로 배우니 지금은 서술 용법을 먼저 익히세요.",
      },
      {
        heading: "예문",
        examples: [
          { de: "Das ist sehr teuer.", ko: "정말 비싸요." },
          { de: "Wow, das ist ja billig.", ko: "와, 정말 싸네요." },
          { de: "Der Himmel ist blau.", ko: "하늘이 파래요." },
          { de: "Er ist groß und schlank.", ko: "그는 키가 크고 날씬해요." },
          { de: "Meine Haare sind ganz kurz und braun.", ko: "내 머리카락은 아주 짧고 갈색이에요." },
          { de: "Er sieht glücklich aus.", ko: "그는 행복해 보여요." },
          { de: "Der Fernseher ist kaputt.", ko: "TV가 고장 났어요." },
        ],
      },
      {
        heading: "정도를 나타내는 말",
        table: {
          head: ["말", "뜻", "예"],
          rows: [
            ["sehr", "매우", "Das ist sehr teuer."],
            ["zu", "너무 (지나쳐서 문제)", "Das Bett ist zu klein."],
            ["ganz", "아주, 꽤", "Die Post ist ganz in der Nähe."],
            ["ziemlich", "상당히", "Das ist ziemlich billig."],
            ["ein bisschen", "조금", "Das ist ein bisschen teuer."],
            ["nicht so", "그다지 ~않은", "Es geht mir nicht so gut."],
            ["gar nicht", "전혀 ~않은", "Das finde ich gar nicht gut."],
          ],
        },
      },
      {
        heading: "finden + 4격 + 형용사",
        text: "finden 은 '찾다' 외에 '~을 …하다고 생각하다(여기다)'라는 뜻으로 의견을 말할 때 많이 써요. 대상은 4격이고 형용사는 어미 없이 써요. 의견을 물을 때는 Wie findest du …? (…어때?)",
        examples: [
          { de: "Wie findest du das?", ko: "그거 어때?" },
          { de: "Wie finden Sie den Stuhl?", ko: "이 의자 어떠세요?" },
          { de: "Ich finde den Stuhl schick.", ko: "이 의자 멋진 것 같아요." },
          { de: "Findest du diesen Teppich schön?", ko: "이 카펫 예쁜 것 같아?" },
          { de: "Das finde ich zu teuer.", ko: "그건 너무 비싼 것 같아." },
          { de: "Das finde ich in Ordnung.", ko: "그건 괜찮다고 생각해요." },
        ],
      },
      {
        heading: "자주 쓰는 반대말",
        table: {
          head: ["", ""],
          rows: [
            ["groß (큰)", "klein (작은)"],
            ["teuer (비싼)", "billig / günstig (싼 / 저렴한)"],
            ["neu (새로운)", "alt (낡은, 나이 든)"],
            ["jung (젊은)", "alt (나이 든)"],
            ["lang (긴)", "kurz (짧은)"],
            ["gut (좋은)", "schlecht (나쁜)"],
            ["warm (따뜻한)", "kalt (추운)"],
            ["schön (예쁜)", "hässlich (못생긴)"],
          ],
        },
      },
      {
        tip: "zu 와 sehr 는 달라요. sehr teuer 는 '매우 비싸다'(살 수도 있음), zu teuer 는 '너무 비싸서 안 되겠다'(부정적)예요.\n서술 형용사에 어미를 붙이지 마세요: 'Die Lampe ist schöne' X → Die Lampe ist schön.\nfinden 뒤 남성 명사는 4격: Ich finde den Film gut. (der Film X)",
      },
    ],
    related: ["accusative", "sein-haben", "gern"],
  },

  // ─── 전치사 ────────────────────────────────────────────────────────────────
  {
    id: "prep-dative",
    title: "3격 전치사",
    summary: "aus · bei · mit · nach · seit · von · zu (+ gegenüber) 뒤에는 언제나 3격",
    category: "전치사",
    lessons: [23, 5, 11, 18, 25],
    sections: [
      {
        text: "다음 전치사 뒤의 명사·대명사는 항상 3격이에요: aus, bei, mit, nach, seit, von, zu (그리고 gegenüber). 의미가 이동이든 위치든 상관없이 3격이라서, 리듬을 붙여 'aus-bei-mit-nach-seit-von-zu' 로 통째로 외우면 편해요.",
      },
      {
        heading: "뜻과 예",
        table: {
          head: ["전치사", "뜻", "예"],
          rows: [
            ["aus", "~에서 (나와서), ~ 출신", "Ich komme aus Südkorea. / aus der Schweiz"],
            ["bei", "~의 곁에, ~의 집·회사에서, ~할 때", "Ich wohne bei meinen Eltern. / Bei Husten hilft Tee mit Honig."],
            ["mit", "~와 함께, ~을 타고, ~을 가지고", "Ich fahre mit dem Bus. / Tee mit Honig"],
            ["nach", "~로 (도시·나라), ~ 후에", "Ich fahre nach Seoul. / nach der Vorlesung"],
            ["seit", "~ 이래로 (지금까지)", "seit einem Jahr, seit zwei Monaten"],
            ["von", "~로부터, ~의", "vom 5. bis zum 10. Mai / ein Brief von Anna"],
            ["zu", "~에게, ~로 (사람·건물·목적지)", "Ich gehe zur Arbeit. / Er soll zum Arzt gehen."],
            ["gegenüber (von)", "~의 맞은편에", "Er wohnt gegenüber vom Kindergarten."],
          ],
        },
      },
      {
        heading: "mit + 교통수단",
        text: "탈것을 이용할 때는 mit + 3격을 써요. 걸어갈 때만 예외로 zu Fuß 라고 해요.",
        examples: [
          { de: "Ich fahre mit dem Bus.", ko: "버스를 타고 가요.", note: "der Bus → dem Bus" },
          { de: "Ich fahre mit dem Zug nach Busan.", ko: "기차를 타고 부산에 가요." },
          { de: "Ich fahre mit dem Fahrrad zur Uni.", ko: "자전거를 타고 대학에 가요." },
          { de: "Ich fahre mit der U-Bahn.", ko: "지하철을 타고 가요.", note: "die U-Bahn → der U-Bahn" },
          { de: "Ich gehe zu Fuß.", ko: "걸어서 가요." },
        ],
      },
      {
        heading: "그 밖의 예문",
        examples: [
          { de: "Mit wem fährst du nach Berlin?", ko: "누구랑 베를린에 가?" },
          { de: "Ich wohne seit einem Jahr in Deutschland.", ko: "나는 1년 전부터 독일에 살아요." },
          { de: "Nach der Vorlesung hat sie eine Freundin getroffen.", ko: "강의 후에 그녀는 친구를 만났어요." },
          { de: "Wie komme ich zum Bahnhof?", ko: "기차역까지 어떻게 가나요?" },
        ],
      },
      {
        heading: "zu Hause 와 nach Hause",
        text: "Haus 와 함께 쓰는 고정 표현이에요. zu Hause = 집에 (위치, Wo?), nach Hause = 집으로 (방향, Wohin?).",
        examples: [
          { de: "Ich bin zu Hause.", ko: "나는 집에 있어요." },
          { de: "Ich muss schnell nach Hause.", ko: "빨리 집에 가야 해." },
          { de: "Ich bin gegen 7 Uhr zu Hause angekommen.", ko: "나는 7시쯤 집에 도착했어요.", note: "도착한 결과 '집에 있음' → zu Hause" },
        ],
      },
      {
        tip: "'이동'의 느낌이 있어도 zu, nach, aus 는 언제나 3격이에요: mit den Bus X → mit dem Bus, zu die Post X → zur Post.\nseit 는 과거에 시작해 지금도 계속되는 일이므로 동사는 현재형이에요: Ich wohne seit einem Jahr hier. (한국어 '살았다'에 끌려 과거형을 쓰지 마세요.)",
      },
    ],
    related: ["dative", "contractions", "place-directions", "time-prepositions"],
  },
  {
    id: "prep-accusative",
    title: "4격 전치사",
    summary: "für · durch · ohne · gegen · um (+ bis) 뒤에는 언제나 4격",
    category: "전치사",
    lessons: [31, 32, 34, 41, 53],
    sections: [
      {
        text: "다음 전치사 뒤에는 항상 4격이 와요: für, durch, ohne, gegen, um (그리고 bis). 4격은 남성만 모양이 바뀌므로(den, einen, meinen) 남성 명사에서 특히 주의하세요.",
      },
      {
        heading: "뜻과 예",
        table: {
          head: ["전치사", "뜻", "예"],
          rows: [
            ["für", "~을 위해, ~에 대해, ~ 동안", "Vielen Dank für deinen Brief. / Das ist für dich."],
            ["durch", "~을 통과해서, ~을 가로질러", "Wir gehen durch den Park."],
            ["ohne", "~ 없이", "Kaffee ohne Milch / ohne Visum"],
            ["gegen", "~에 반대하여, ~에 좋은(약), ~쯤(시간)", "Was hilft gegen Husten? / gegen 7 Uhr"],
            ["um", "~ 주위를, ~시에", "um die Ecke / um 3 Uhr"],
            ["bis", "~까지", "bis Freitag, bis 14 Uhr"],
          ],
        },
      },
      {
        heading: "예문",
        examples: [
          { de: "Vielen Dank für deinen Brief.", ko: "네 편지 정말 고마워.", note: "der Brief → deinen" },
          { de: "Koreaner können ohne Visum nach Deutschland reisen.", ko: "한국인은 비자 없이 독일에 갈 수 있어요." },
          { de: "Was hilft gegen Husten?", ko: "기침에는 뭐가 좋아요?" },
          { de: "Ich bin gegen 7 Uhr zu Hause angekommen.", ko: "나는 7시쯤 집에 도착했어요." },
          { de: "Um wie viel Uhr beginnt der Kurs?", ko: "수업은 몇 시에 시작해요?" },
          { de: "Wir gehen durch den Park.", ko: "우리는 공원을 가로질러 가요." },
          { de: "Ich brauche ein Geschenk für meinen Vater.", ko: "아버지께 드릴 선물이 필요해요." },
        ],
      },
      {
        heading: "dafür / dagegen",
        text: "da + 전치사는 '그것에 ~'라는 뜻이에요. 의견을 말할 때 자주 써요: Ich bin dafür. (나는 그것에 찬성이다) / Ich bin dagegen. (나는 그것에 반대다)",
      },
      {
        tip: "für 뒤 남성 명사를 1격으로 쓰는 실수가 많아요: für der Test X → für den Test.\n시각을 말하는 um 도 4격 전치사지만 숫자라서 형태 변화가 보이지 않아요.",
      },
    ],
    related: ["accusative", "prep-dative", "time-prepositions"],
  },
  {
    id: "two-way-prepositions",
    title: "3·4격 전치사 (위치 vs 이동)",
    summary: "in·an·auf·neben·hinter·vor·über·unter·zwischen — Wo?면 3격, Wohin?이면 4격",
    category: "전치사",
    lessons: [25, 26, 11, 14, 27],
    sections: [
      {
        text: "아홉 개의 전치사는 상황에 따라 3격도, 4격도 받아요. 기준은 간단해요: 한 장소에 머물러 있는 '위치(Wo? 어디에?)'면 3격, 다른 곳으로 옮겨 가는 '방향·이동(Wohin? 어디로?)'이면 4격이에요.\nDas Buch liegt auf dem Tisch. (책이 탁자 위에 있다 — 3격) / Ich lege das Buch auf den Tisch. (책을 탁자 위에 놓는다 — 4격)",
      },
      {
        heading: "전치사와 뜻",
        table: {
          head: ["전치사", "뜻", "Wo? + 3격", "Wohin? + 4격"],
          rows: [
            ["in", "~ 안에", "in der Küche", "in die Küche"],
            ["an", "~ 곁에, (벽·가장자리)에 붙어", "an der Wand", "an die Wand"],
            ["auf", "~ 위에 (닿아서)", "auf dem Tisch", "auf den Tisch"],
            ["über", "~ 위에 (떨어져서)", "über dem Sofa", "über das Sofa"],
            ["unter", "~ 아래에", "unter dem Stuhl", "unter den Stuhl"],
            ["vor", "~ 앞에", "vor dem Fernseher", "vor den Fernseher"],
            ["hinter", "~ 뒤에", "hinter dem Haus", "hinter das Haus"],
            ["neben", "~ 옆에", "neben dem Supermarkt", "neben das Regal"],
            ["zwischen", "~ 사이에", "zwischen dem Bett und dem Schrank", "zwischen das Bett und den Schrank"],
          ],
        },
      },
      {
        heading: "위치 동사와 이동 동사",
        text: "'놓여 있다/놓다'처럼 짝을 이루는 동사가 있어요. 위치 동사는 불규칙 동사이고 3격, 이동 동사는 규칙 동사이고 4격 목적어 + 4격 전치사구를 가져요.",
        table: {
          head: ["위치 (Wo? + 3격)", "이동 (Wohin? + 4격)"],
          rows: [
            ["liegen (누워/놓여 있다): Das Buch liegt auf dem Tisch.", "legen (눕혀 놓다): Ich lege das Buch auf den Tisch."],
            ["stehen (서 있다): Das Sofa steht vor dem Fernseher.", "stellen (세워 놓다): Ich stelle den Fernseher neben das Regal."],
            ["sitzen (앉아 있다): Die Katze sitzt unter dem Stuhl.", "setzen (앉히다): Ich setze mein Kind auf den Stuhl."],
            ["hängen (걸려 있다): Die Uhr hängt an der Wand.", "hängen (걸다): Ich hänge das Bild an die Wand."],
            ["sein (있다): Er ist in der Küche.", "gehen (가다): Er geht in die Küche."],
          ],
        },
      },
      {
        heading: "예문",
        examples: [
          { de: "Wo ist mein Handy? – Es liegt auf dem Tisch.", ko: "내 핸드폰 어디 있어? – 탁자 위에 있어." },
          { de: "Wohin legst du das Buch? – Ich lege es in die Tasche.", ko: "책을 어디에 둬? – 가방 안에 넣어." },
          { de: "Die Bank ist neben dem Supermarkt.", ko: "은행은 슈퍼마켓 옆에 있어요." },
          { de: "Sie stellt die Vase auf den Tisch.", ko: "그녀는 꽃병을 탁자 위에 놓아요." },
          { de: "Das Kind läuft hinter das Haus.", ko: "아이가 집 뒤로 달려가요." },
          { de: "Ich stecke mein Taschentuch in die Hosentasche.", ko: "나는 손수건을 바지 주머니에 넣어요." },
          { de: "Sie lernt am besten in der Bibliothek.", ko: "그녀는 도서관에서 제일 잘 공부해요." },
        ],
      },
      {
        tip: "'움직임이 있으면 4격'이 아니라 '장소가 바뀌면 4격'이에요. Ich laufe im Park. (공원 안에서 달린다 — 3격) / Ich laufe in den Park. (공원으로 달려 들어간다 — 4격)\n헷갈리면 Wo? 로 물을 수 있는지, Wohin? 으로 물을 수 있는지 스스로 질문해 보세요.",
      },
    ],
    related: ["dative", "accusative", "contractions", "place-directions"],
  },
  {
    id: "contractions",
    title: "전치사 + 관사 축약",
    summary: "in dem → im, in das → ins, an dem → am, zu dem → zum, zu der → zur, von dem → vom, bei dem → beim",
    category: "전치사",
    lessons: [11, 13, 23, 24, 27],
    sections: [
      {
        text: "일부 전치사는 뒤에 오는 정관사 dem, das, der 와 합쳐져 한 단어가 돼요. 특별히 '바로 그것'을 강조하지 않는 한 축약형이 보통이에요. 특히 날짜·시간 표현(am Montag, im Mai)과 zum Beispiel 같은 고정 표현은 항상 축약형을 써요.",
      },
      {
        heading: "축약표",
        table: {
          head: ["축약형", "원래 형태", "격", "예"],
          rows: [
            ["im", "in dem", "3격", "im Erdgeschoss, im Januar"],
            ["ins", "in das", "4격", "Ich gehe ins Kino."],
            ["am", "an dem", "3격", "am Montag, am Bahnhof"],
            ["ans", "an das", "4격", "Wir fahren ans Meer."],
            ["zum", "zu dem", "3격", "zum Bahnhof, zum Arzt, zum Frühstück"],
            ["zur", "zu der", "3격", "zur Arbeit, zur Post, zur Uni"],
            ["vom", "von dem", "3격", "vom 5. bis zum 10. Mai"],
            ["beim", "bei dem", "3격", "beim Arzt, beim Bäcker"],
          ],
        },
      },
      {
        heading: "예문",
        examples: [
          { de: "Ich gehe ins Kino.", ko: "나는 영화관에 가요." },
          { de: "Wie komme ich zum Bahnhof?", ko: "기차역까지 어떻게 가나요?" },
          { de: "Ich möchte zur Post.", ko: "우체국에 가고 싶어요." },
          { de: "Möbel finden Sie im 1. Stock.", ko: "가구는 (한국식) 2층에 있습니다." },
          { de: "Ich habe am elften März Geburtstag.", ko: "내 생일은 3월 11일이야." },
          { de: "Er wohnt gegenüber vom Kindergarten.", ko: "그는 유치원 맞은편에 살아요." },
          { de: "Ich bin beim Arzt.", ko: "나는 병원에 있어요." },
        ],
      },
      {
        tip: "여성 4격 die 와 복수 die 는 축약되지 않아요: in die Schule, in die Küche (ins Schule X).\nzur 는 여성(zu der), zum 은 남성·중성(zu dem)이에요: zur Arbeit (die Arbeit), zum Arzt (der Arzt).",
      },
    ],
    related: ["two-way-prepositions", "prep-dative", "time-prepositions"],
  },
  {
    id: "place-directions",
    title: "장소·방향 말하기",
    summary: "Wo?(어디에) / Wohin?(어디로) / Woher?(어디서) — in, nach, zu, aus를 골라 쓴다",
    category: "전치사",
    lessons: [5, 11, 14, 24, 23],
    sections: [
      {
        text: "장소에 관한 질문은 세 가지예요: Wo?(어디에 — 위치), Wohin?(어디로 — 방향), Woher?(어디에서 — 출신·출발). 질문에 따라, 그리고 목적지가 도시·나라·건물·사람 중 무엇이냐에 따라 전치사가 달라져요.",
      },
      {
        heading: "무엇을 쓸까?",
        table: {
          head: ["목적지", "Wo? (위치)", "Wohin? (방향)", "Woher? (출신·출발)"],
          rows: [
            ["도시, 관사 없는 나라", "in Berlin, in Korea", "nach Berlin, nach Deutschland", "aus Berlin, aus Korea"],
            ["관사 있는 나라", "in der Schweiz, in den USA", "in die Schweiz, in die USA", "aus der Schweiz, aus den USA"],
            ["건물·장소 (안으로)", "im Kino, in der Schule", "ins Kino, in die Schule", "aus dem Kino"],
            ["건물·목적지 (~까지)", "am Bahnhof, bei der Post", "zum Bahnhof, zur Post", "vom Bahnhof"],
            ["사람", "bei Anna, beim Arzt", "zu Anna, zum Arzt", "von Anna, vom Arzt"],
            ["집", "zu Hause", "nach Hause", "von zu Hause"],
          ],
        },
      },
      {
        heading: "관사가 붙는 나라 이름",
        text: "대부분의 나라·도시 이름은 관사 없이 써요 (aus Korea, in Deutschland, nach Japan). 하지만 여성 나라와 복수 나라는 관사가 필요해서 nach 대신 in + 4격을 써요.\n여성: die Schweiz, die Türkei / 복수: die USA, die Niederlande, die Philippinen",
        examples: [
          { de: "Ich komme aus der Schweiz.", ko: "나는 스위스에서 왔어요." },
          { de: "Wir fliegen in die USA.", ko: "우리는 미국에 (비행기로) 가요." },
          { de: "Er wohnt in der Türkei.", ko: "그는 튀르키예에 살아요." },
        ],
      },
      {
        heading: "gehen · fahren · fliegen",
        text: "gehen 은 걸어서(또는 일반적으로) 가다, fahren 은 탈것을 타고 가다, fliegen 은 비행기로 가다예요. 한국어는 모두 '가다'지만 독일어는 수단에 따라 동사를 구분해요.",
        examples: [
          { de: "Wohin gehst du? – Ich gehe in die Schule.", ko: "어디 가? – 학교에 가." },
          { de: "Wo gehen Sie hin?", ko: "어디 가세요?", note: "wohin 을 wo … hin 으로 나눠 말하기도 함" },
          { de: "Ich fahre nach Seoul.", ko: "나는 (타고) 서울에 가요." },
          { de: "Ich fliege nach Deutschland.", ko: "나는 비행기로 독일에 가요." },
          { de: "Ich wohne in Seoul.", ko: "나는 서울에 살아요." },
        ],
      },
      {
        heading: "길 안내",
        examples: [
          { de: "Entschuldigung, wie komme ich zum Bahnhof?", ko: "실례합니다, 기차역까지 어떻게 가나요?" },
          { de: "Gehen Sie zuerst immer geradeaus.", ko: "우선 계속 직진하세요." },
          { de: "Dann gehen Sie die zweite Straße nach rechts.", ko: "그다음 두 번째 길에서 오른쪽으로 가세요." },
          { de: "Biegen Sie links ab.", ko: "왼쪽으로 도세요." },
          { de: "Gehen Sie über die Kreuzung.", ko: "교차로를 건너세요." },
          { de: "Auf der linken Seite sehen Sie dann die Post.", ko: "그러면 왼쪽에 우체국이 보여요." },
        ],
      },
      {
        tip: "nach 는 관사 없는 도시·나라, 그리고 nach Hause 에만 써요: 'nach Kino' X → ins Kino, 'nach Schweiz' X → in die Schweiz.\n'Ich fahre in Berlin' 은 '베를린 시내에서 운전한다'는 뜻이 돼요. 베를린으로 간다면 nach Berlin.\n방향을 물을 때 Wo 만 쓰면 틀려요: Wo gehst du? X → Wohin gehst du? / Wo gehst du hin?",
      },
    ],
    related: ["prep-dative", "two-way-prepositions", "contractions", "w-questions"],
  },

  // ─── 시간·숫자 ─────────────────────────────────────────────────────────────
  {
    id: "numbers",
    title: "숫자",
    summary: "21 = einundzwanzig (1 + und + 20) — 일의 자리를 먼저 읽는다",
    category: "시간·숫자",
    lessons: [8, 16, 17, 33],
    sections: [
      {
        text: "0–12 는 따로 외우고, 13–19 는 '일의 자리 + zehn'(dreizehn = 3 + 10)이에요. 21–99 는 한국어와 반대로 일의 자리를 먼저 말하고 und 로 십의 자리를 이어요: einundzwanzig = 1 + 20.\n숫자는 아무리 길어도 한 단어로 붙여 써요 (hundertfünfundzwanzig = 125).",
      },
      {
        heading: "0 – 20",
        table: {
          head: ["숫자", "독일어", "숫자", "독일어"],
          rows: [
            ["0", "null", "11", "elf"],
            ["1", "eins", "12", "zwölf"],
            ["2", "zwei", "13", "dreizehn"],
            ["3", "drei", "14", "vierzehn"],
            ["4", "vier", "15", "fünfzehn"],
            ["5", "fünf", "16", "sechzehn"],
            ["6", "sechs", "17", "siebzehn"],
            ["7", "sieben", "18", "achtzehn"],
            ["8", "acht", "19", "neunzehn"],
            ["9", "neun", "20", "zwanzig"],
            ["10", "zehn", "", ""],
          ],
        },
      },
      {
        heading: "십 단위와 큰 수",
        table: {
          head: ["숫자", "독일어", "숫자", "독일어"],
          rows: [
            ["30", "dreißig", "21", "einundzwanzig"],
            ["40", "vierzig", "32", "zweiunddreißig"],
            ["50", "fünfzig", "45", "fünfundvierzig"],
            ["60", "sechzig", "67", "siebenundsechzig"],
            ["70", "siebzig", "97", "siebenundneunzig"],
            ["80", "achtzig", "101", "hunderteins"],
            ["90", "neunzig", "125", "hundertfünfundzwanzig"],
            ["100", "(ein)hundert", "999", "neunhundertneunundneunzig"],
            ["1000", "(ein)tausend", "2026", "zweitausendsechsundzwanzig"],
          ],
        },
      },
      {
        heading: "나이·연도·전화번호·가격",
        text: "연도는 1999년까지 백 단위로 끊어 읽어요: 1987 = neunzehnhundertsiebenundachtzig. 2000년부터는 zweitausend… 로 읽어요. 연도 앞에 in 을 쓰지 않아요.\n전화번호는 한 자리씩 또는 두 자리씩 읽어요. 전화에서는 drei 와 헷갈리지 않게 zwei 를 zwo 라고 하기도 해요.\n가격 2,50 € 는 zwei Euro fünfzig 라고 읽어요.",
        examples: [
          { de: "Ich bin 25 Jahre alt.", ko: "저는 25살이에요. (fünfundzwanzig)" },
          { de: "Ich bin 1987 geboren.", ko: "나는 1987년에 태어났어요. (neunzehnhundertsiebenundachtzig)" },
          { de: "Meine Nummer ist 0176 - 123 45 67.", ko: "제 번호는 0176-123 45 67이에요.", note: "null eins sieben sechs – eins zwei drei – fünfundvierzig – siebenundsechzig" },
          { de: "Die kostet 49 Euro.", ko: "그건 49유로예요. (neunundvierzig)" },
          { de: "Meine Hausnummer ist 21.", ko: "우리 집은 21번지야. (einundzwanzig)" },
          { de: "Wir haben minus 10 Grad.", ko: "영하 10도예요." },
        ],
      },
      {
        tip: "철자 주의: sechzehn·sechzig (sechs 의 s 탈락), siebzehn·siebzig (sieben 의 en 탈락), dreißig (ß, -zig 아님).\n혼자 셀 때는 eins 지만 21 은 einundzwanzig, 101 은 hunderteins, 명사 앞에서는 관사처럼 ein/eine: ein Euro, eine Stunde.\n순서가 한국어와 반대라서 듣기가 어려워요. 97 은 '7 그리고 90'으로 들리니 끝까지 듣고 적는 연습을 하세요.",
      },
    ],
    related: ["clock-time", "dates-ordinal", "plural"],
  },
  {
    id: "clock-time",
    title: "시간 말하기",
    summary: "Wie spät ist es? — Es ist halb vier.(3:30!) / 공식은 24시간제",
    category: "시간·숫자",
    lessons: [9, 13, 21, 32],
    sections: [
      {
        text: "시각은 Wie spät ist es? 또는 Wie viel Uhr ist es? 로 묻고, Es ist … 로 대답해요.\n말하는 방법이 두 가지예요. 방송·역·공식 일정에서는 24시간제로 '시 + Uhr + 분'(fünfzehn Uhr dreißig), 일상 대화에서는 12시간제로 nach(지나서)·vor(전)·Viertel(15분)·halb(반)를 써요.",
      },
      {
        heading: "공식 vs 일상",
        table: {
          head: ["시각", "공식 (24시간제)", "일상 대화"],
          rows: [
            ["3:00", "drei Uhr", "drei (Uhr)"],
            ["3:05", "drei Uhr fünf", "fünf nach drei"],
            ["3:10", "drei Uhr zehn", "zehn nach drei"],
            ["3:15", "drei Uhr fünfzehn", "Viertel nach drei"],
            ["3:20", "drei Uhr zwanzig", "zwanzig nach drei"],
            ["3:25", "drei Uhr fünfundzwanzig", "fünf vor halb vier"],
            ["3:30", "drei Uhr dreißig", "halb vier"],
            ["3:35", "drei Uhr fünfunddreißig", "fünf nach halb vier"],
            ["3:45", "drei Uhr fünfundvierzig", "Viertel vor vier"],
            ["3:50", "drei Uhr fünfzig", "zehn vor vier"],
            ["15:00", "fünfzehn Uhr", "drei (nachmittags)"],
            ["20:30", "zwanzig Uhr dreißig", "halb neun (abends)"],
          ],
        },
      },
      {
        heading: "halb 는 '다음 시각까지 반'",
        text: "halb vier 는 '4시를 향해 절반 왔다', 즉 3시 30분이에요. 한국어 '3시 반'과 숫자가 하나 달라요. 25분·35분도 halb 를 기준으로 fünf vor halb / fünf nach halb 라고 해요.",
      },
      {
        heading: "몇 시에? → um",
        text: "'~시에'는 um 을 써요. '~시쯤'은 gegen, 하루의 때는 morgens(아침에), vormittags, mittags, nachmittags, abends(저녁에), nachts(밤에).",
        examples: [
          { de: "Wie viel Uhr ist es? – Es ist halb drei.", ko: "몇 시예요? – 2시 반이에요." },
          { de: "Es ist Viertel nach drei.", ko: "3시 15분이에요." },
          { de: "Es ist Viertel vor vier.", ko: "4시 15분 전이에요. (3시 45분)" },
          { de: "Es ist zehn nach fünf.", ko: "5시 10분이에요." },
          { de: "Es ist halb neun morgens.", ko: "아침 8시 30분이에요." },
          { de: "Wir haben genau 17 Uhr.", ko: "정확히 17시예요." },
          { de: "Um wie viel Uhr beginnt der Kurs? – Um neun Uhr.", ko: "수업은 몇 시에 시작해요? – 9시에요." },
          { de: "Ich stehe um 7 Uhr auf.", ko: "나는 7시에 일어나요." },
        ],
      },
      {
        tip: "halb vier 를 4시 30분으로 착각하는 실수가 가장 흔해요. halb + 다음 시각!\nUhr 는 '시각', Stunde 는 '시간의 양'이에요: Es ist drei Uhr. (3시다) / Das dauert drei Stunden. (3시간 걸린다)\n일상 표현에는 Uhr 를 붙이지 않아요: halb neun (halb neun Uhr X). 1시는 ein Uhr 또는 eins (eins Uhr X).",
      },
    ],
    related: ["numbers", "time-prepositions", "es-gibt-impersonal"],
  },
  {
    id: "dates-ordinal",
    title: "날짜와 서수",
    summary: "der erste, der dritte… / 날짜 '~일에'는 am + 서수-en — am ersten Mai",
    category: "시간·숫자",
    lessons: [30, 13, 32],
    sections: [
      {
        text: "날짜에는 서수(첫째, 둘째…)를 써요. 1–19 는 숫자에 -te, 20 이상은 -ste 를 붙여요. 글로 쓸 때는 숫자 뒤에 점을 찍어요: 15. = fünfzehnte.\n1(erste), 3(dritte), 7(siebte), 8(achte)는 불규칙이에요.\n날짜를 쓰는 순서는 한국과 반대로 일.월.년이에요: 15.05.2026 = 2026년 5월 15일.",
      },
      {
        heading: "서수",
        table: {
          head: ["숫자", "der … (~일이다)", "am … (~일에)"],
          rows: [
            ["1.", "der erste", "am ersten"],
            ["2.", "der zweite", "am zweiten"],
            ["3.", "der dritte", "am dritten"],
            ["4.", "der vierte", "am vierten"],
            ["5.", "der fünfte", "am fünften"],
            ["7.", "der siebte", "am siebten"],
            ["8.", "der achte", "am achten"],
            ["11.", "der elfte", "am elften"],
            ["19.", "der neunzehnte", "am neunzehnten"],
            ["20.", "der zwanzigste", "am zwanzigsten"],
            ["21.", "der einundzwanzigste", "am einundzwanzigsten"],
            ["31.", "der einunddreißigste", "am einunddreißigsten"],
          ],
        },
      },
      {
        heading: "날짜 묻고 답하기",
        examples: [
          { de: "Der Wievielte ist heute? – Heute ist der 15. Mai.", ko: "오늘 며칠이에요? – 오늘은 5월 15일이에요.", note: "der fünfzehnte Mai" },
          { de: "Den Wievielten haben wir heute? – Wir haben den 15. Mai.", ko: "오늘 며칠이죠? – 5월 15일이에요.", note: "haben + 4격 → den fünfzehnten" },
          { de: "Wann ist dein Geburtstag? – Am 20. Juni.", ko: "생일이 언제야? – 6월 20일이야.", note: "am zwanzigsten Juni" },
          { de: "Ich habe am elften März Geburtstag.", ko: "내 생일은 3월 11일이야." },
          { de: "Ich bin vom 5. bis zum 10. Mai in Berlin.", ko: "나는 5월 5일부터 10일까지 베를린에 있어.", note: "vom fünften bis zum zehnten" },
        ],
      },
      {
        heading: "요일·달·계절 — 모두 남성(der)",
        table: {
          head: ["종류", "단어", "'~에'"],
          rows: [
            ["요일", "Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag", "am Montag"],
            ["하루의 때", "Morgen, Vormittag, Mittag, Nachmittag, Abend (die Nacht)", "am Abend (예외: in der Nacht)"],
            ["주말", "das Wochenende", "am Wochenende"],
            ["날짜", "der erste Mai", "am ersten Mai"],
            ["달", "Januar, Februar, März, April, Mai, Juni, Juli, August, September, Oktober, November, Dezember", "im Mai"],
            ["계절", "Frühling, Sommer, Herbst, Winter", "im Sommer"],
            ["연도", "1987, 2026", "1987 / im Jahr 1987"],
          ],
        },
      },
      {
        tip: "'~일에'는 am + 서수 + -en: am ersten Mai (am erste X). '~일이다'는 der + 서수 + -e: Heute ist der erste Mai.\n1일은 erste(einste X), 3일은 dritte(dreite X), 7일은 siebte(siebente 도 있지만 드묾)예요.\n월을 말할 때는 im, 요일·날짜에는 am — 'in Montag', 'am Mai' 는 틀려요.",
      },
    ],
    related: ["numbers", "time-prepositions", "clock-time"],
  },
  {
    id: "time-prepositions",
    title: "시간 전치사",
    summary: "um(시각) · am(요일·날짜) · im(달·계절) · seit · vor · nach · in · ab · bis · von … bis",
    category: "시간·숫자",
    lessons: [32, 13, 18, 30, 43],
    sections: [
      {
        text: "'언제?'에 답할 때는 시간의 단위에 따라 전치사를 골라요. 가장 기본은 세 개예요: 정확한 시각은 um, 날(요일·날짜·하루의 때)은 am, 그보다 긴 기간(달·계절)은 im.\n그 밖에 seit(~ 이래로), vor(~ 전에), in(~ 후에), ab(~부터), bis(~까지) 같은 전치사도 자주 써요.",
      },
      {
        heading: "정리표",
        table: {
          head: ["전치사", "쓰임", "예"],
          rows: [
            ["um", "정확한 시각", "um 3 Uhr, um Mitternacht"],
            ["am", "요일·날짜·하루의 때·주말", "am Montag, am 15. Mai, am Morgen, am Wochenende"],
            ["im", "달·계절", "im Januar, im Sommer"],
            ["in (+3격)", "(지금부터) ~ 후에", "in einer Woche, in zwei Stunden"],
            ["vor (+3격)", "~ 전에", "vor einer Woche, vor dem Schlafen"],
            ["nach (+3격)", "(어떤 일) 후에", "nach der Vorlesung, nach dem Studium"],
            ["seit (+3격)", "~ 이래로 지금까지", "seit einem Jahr, seit gestern"],
            ["ab", "~부터 (시작점)", "ab 8 Uhr, ab Montag"],
            ["bis", "~까지", "bis 14 Uhr, bis Freitag, Bis morgen!"],
            ["von … bis", "~부터 ~까지", "von 9 bis 11 Uhr, vom 5. bis zum 10. Mai"],
            ["gegen", "~쯤", "gegen 7 Uhr"],
          ],
        },
      },
      {
        heading: "예문",
        examples: [
          { de: "Ich habe am Mittwoch Zeit.", ko: "수요일에 시간이 있어요." },
          { de: "Gut! Um 14 Uhr?", ko: "좋아요! 14시에요?" },
          { de: "Ich wohne seit einem Jahr in Deutschland.", ko: "나는 1년 전부터 독일에 살아요." },
          { de: "Wann geben wir den Bericht ab? – Bis 14 Uhr.", ko: "보고서를 언제 내요? – 14시까지요." },
          { de: "Von 9 bis 11 habe ich gearbeitet.", ko: "9시부터 11시까지 일했어요." },
          { de: "Ab eins habe ich eine Pause gemacht.", ko: "1시부터 쉬었어요." },
          { de: "Was fehlt Ihnen? … – Seit wann? – Seit gestern.", ko: "어디가 안 좋으세요? … – 언제부터요? – 어제부터요." },
        ],
      },
      {
        heading: "seit · vor · in 비교",
        text: "seit 는 과거에 시작해서 지금도 계속되는 일(동사는 현재형), vor 는 과거의 한 시점(동사는 과거), in 은 앞으로의 일이에요.",
        examples: [
          { de: "Ich lerne seit zwei Monaten Deutsch.", ko: "나는 두 달 전부터(두 달째) 독일어를 배우고 있어요." },
          { de: "Ich bin vor zwei Monaten nach Deutschland gekommen.", ko: "나는 두 달 전에 독일에 왔어요." },
          { de: "In einer Woche fahre ich nach Hause.", ko: "일주일 후에 나는 집에 가요." },
        ],
      },
      {
        heading: "전치사 없이 쓰는 시간 표현",
        text: "heute(오늘), morgen(내일), gestern(어제), übermorgen(모레), morgens·abends(아침마다·저녁마다), 그리고 4격 시간 표현 jeden Tag(매일), letztes Jahr(작년), nächste Woche(다음 주), den ganzen Tag(하루 종일)는 전치사 없이 써요.",
      },
      {
        tip: "'1시간 후에 갈게'처럼 지금부터의 미래는 in einer Stunde 예요 (nach einer Stunde 는 과거 이야기에서 '그로부터 1시간 후').\nseit + 현재형: Ich wohne seit 2020 hier. (wohnte X)\n예외: am Morgen/Abend 이지만 밤은 in der Nacht.",
      },
    ],
    related: ["clock-time", "dates-ordinal", "prep-dative", "prep-accusative"],
  },

  // ─── 표현 ──────────────────────────────────────────────────────────────────
  {
    id: "greetings-phrases",
    title: "인사·기본 표현",
    summary: "Guten Morgen/Tag/Abend, Tschüss, Danke, Entschuldigung… — 통째로 외우는 표현",
    category: "표현",
    lessons: [2, 3, 20, 31, 51],
    sections: [
      {
        text: "인사와 기본 표현은 문법을 분석하기보다 통째로 외워서 바로 쓰는 게 좋아요. 다만 격식(Sie)을 차리는 상대인지, 친한 사이(du)인지에 따라 고르는 표현이 달라지니 짝으로 기억하세요.",
      },
      {
        heading: "만날 때 · 헤어질 때",
        table: {
          head: ["상황", "격식", "친근"],
          rows: [
            ["아침 (~10시쯤)", "Guten Morgen!", "Morgen! / Hallo!"],
            ["낮", "Guten Tag!", "Hallo!"],
            ["저녁 (18시쯤~)", "Guten Abend!", "Hallo!"],
            ["헤어질 때", "Auf Wiedersehen!", "Tschüss!"],
            ["전화 끊을 때", "Auf Wiederhören!", "Tschüss!"],
            ["자러 갈 때", "Gute Nacht!", "Gute Nacht! / Schlaf gut!"],
            ["다음에 볼 때", "Bis morgen! / Bis bald!", "Bis morgen! / Bis bald!"],
          ],
        },
      },
      {
        heading: "안부",
        examples: [
          { de: "Guten Tag. Wie geht es Ihnen?", ko: "안녕하세요. 어떻게 지내세요?" },
          { de: "Wie geht's? – Gut. Wie geht's dir? – Auch gut.", ko: "어떻게 지내? – 잘 지내. 너는? – 나도 잘 지내." },
          { de: "Sehr gut. / Gut. / Es geht. / Nicht so gut.", ko: "아주 좋아 / 좋아 / 그저 그래 / 별로야" },
          { de: "Mir geht es fantastisch, danke.", ko: "아주 잘 지내요, 감사합니다." },
        ],
      },
      {
        heading: "감사 · 사과 · 부탁",
        table: {
          head: ["표현", "뜻", "대답"],
          rows: [
            ["Danke! / Danke schön! / Vielen Dank!", "고마워요", "Bitte! / Bitte schön! / Gern geschehen!"],
            ["Entschuldigung! / Entschuldigen Sie!", "실례합니다 / 미안해요", "Kein Problem!"],
            ["Es tut mir leid.", "죄송해요 (유감이에요)", "Das macht nichts."],
            ["Wie bitte?", "뭐라고요? (다시 말씀해 주세요)", ""],
            ["Einen Moment, bitte.", "잠시만요", ""],
            ["Können Sie das bitte wiederholen?", "다시 말씀해 주시겠어요?", "Natürlich!"],
          ],
        },
      },
      {
        heading: "축하 · 기원",
        examples: [
          { de: "Herzlichen Glückwunsch zum Geburtstag!", ko: "생일 진심으로 축하해요!" },
          { de: "Alles Gute!", ko: "모든 일이 잘 되길!" },
          { de: "Gute Besserung!", ko: "빨리 나으세요!" },
          { de: "Guten Appetit!", ko: "맛있게 드세요!" },
          { de: "Frohe Weihnachten! / Guten Rutsch!", ko: "메리 크리스마스! / 새해 잘 맞으세요! (연말 인사)" },
          { de: "Gesundheit!", ko: "(재채기한 사람에게) 건강하세요!" },
        ],
      },
      {
        heading: "편지·이메일",
        text: "받는 사람의 성에 맞춰 Lieber(남성) / Liebe(여성), Sehr geehrter(남성) / Sehr geehrte(여성)를 써요. 인사말 뒤에는 쉼표를 찍고, 다음 줄은 소문자로 시작해요.",
        table: {
          head: ["", "친근", "격식"],
          rows: [
            ["시작", "Liebe Anna, / Lieber Max,", "Sehr geehrte Frau Mayer, / Sehr geehrter Herr Mayer, / Sehr geehrte Damen und Herren,"],
            ["마무리", "Liebe Grüße / Alles Liebe", "Mit freundlichen Grüßen"],
          ],
        },
      },
      {
        tip: "Gute Nacht! 는 자러 갈 때나 헤어져 잠자리에 들 때만 써요. 밤늦게 누군가를 만났을 때는 Guten Abend! 로 인사해요.\nGuten Tag / Guten Abend 는 -en, Gute Nacht 는 -e 예요. '(Ich wünsche Ihnen) einen guten Tag'의 4격이 줄어든 형태라 남성 Tag·Abend·Morgen 은 guten, 여성 Nacht 는 gute 가 돼요.",
      },
    ],
    related: ["formal-informal", "dative", "pronunciation"],
  },
];
