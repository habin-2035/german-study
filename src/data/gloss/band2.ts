import type { SentenceGloss } from "@/lib/gloss";

export const BAND2: Record<string, SentenceGloss> = {
  "Wie ist Ihre Telefonnummer?": {
    words: [
      ["Wie", "어떻게", "의문사"],
      ["ist", "~이다", "sein · er/sie/es 형"],
      ["Ihre", "당신의", "소유관사 Ihr · 여성 1격"],
      ["Telefonnummer", "전화번호", "die Telefonnummer (여성)"],
    ],
    grammar: ["w-questions", "possessive", "formal-informal"],
    note: "번호를 물을 때도 was가 아니라 wie를 써요.",
  },
  "Meine Telefonnummer ist ...": {
    words: [
      ["Meine", "나의", "소유관사 · 여성 1격"],
      ["Telefonnummer", "전화번호", "die Telefonnummer (여성)"],
      ["ist", "~이다", "sein · er/sie/es 형"],
    ],
    grammar: ["possessive", "numbers"],
    note: "전화번호는 보통 숫자를 하나씩 또는 두 자리씩 끊어 읽어요.",
  },
  "Wie alt sind Sie?": {
    words: [
      ["Wie", "얼마나", "의문사"],
      ["alt", "나이 든", "형용사"],
      ["sind", "~이다", "sein · Sie 형"],
      ["Sie", "당신은", "존칭 Sie 1격"],
    ],
    grammar: ["w-questions", "sein-haben", "formal-informal"],
    note: "직역은 '당신은 얼마나 늙었나요?' — 나이를 묻는 기본 표현.",
  },
  "Wie alt bist du?": {
    words: [
      ["Wie", "얼마나", "의문사"],
      ["alt", "나이 든", "형용사"],
      ["bist", "~이다", "sein · du 형"],
      ["du", "너는", "인칭대명사 1격"],
    ],
    grammar: ["w-questions", "sein-haben"],
  },
  "Ich bin 25 Jahre alt.": {
    words: [
      ["Ich", "저는", "인칭대명사 1격"],
      ["bin", "~이다", "sein · ich 형"],
      ["25", "25 (fünfundzwanzig)", "숫자"],
      ["Jahre", "해, 년", "복수형 (das Jahr → Jahre)"],
      ["alt", "~살인", "형용사 · 서술 용법"],
    ],
    grammar: ["numbers", "sein-haben", "plural"],
    note: "25는 fünfundzwanzig — 일의 자리를 먼저 읽어요.",
  },
  "Wann bist du geboren?": {
    words: [
      ["Wann", "언제", "의문사"],
      ["bist", "~이다", "sein · du 형"],
      ["du", "너는", "인칭대명사 1격"],
      ["geboren", "태어난", "과거분사 (gebären)"],
    ],
    grammar: ["w-questions", "sein-haben"],
    note: "'태어났다'는 sein + geboren으로 고정해서 외워 두세요.",
  },
  "Ich bin 1987 geboren.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["bin", "~이다", "sein · ich 형"],
      ["1987", "1987년에 (neunzehnhundertsiebenundachtzig)", "연도 · 전치사 없이"],
      ["geboren", "태어난", "과거분사 (gebären)"],
    ],
    grammar: ["numbers", "sein-haben", "dates-ordinal"],
    note: "연도는 전치사 없이 쓰거나 im Jahr 1987. 'in 1987'은 틀린 표현.",
  },
  "Was ist deine Hausnummer?": {
    words: [
      ["Was", "무엇", "의문사"],
      ["ist", "~이다", "sein · er/sie/es 형"],
      ["deine", "너의", "소유관사 · 여성 1격"],
      ["Hausnummer", "집 번지", "die Hausnummer (여성)"],
    ],
    grammar: ["w-questions", "possessive"],
  },
  "Meine Hausnummer ist 21.": {
    words: [
      ["Meine", "나의", "소유관사 · 여성 1격"],
      ["Hausnummer", "집 번지", "die Hausnummer (여성)"],
      ["ist", "~이다", "sein · er/sie/es 형"],
      ["21", "21 (einundzwanzig)", "숫자"],
    ],
    grammar: ["numbers", "possessive"],
  },
  "Meine Nummer ist 0176 - 123 45 67.": {
    words: [
      ["Meine", "나의", "소유관사 · 여성 1격"],
      ["Nummer", "번호", "die Nummer (여성)"],
      ["ist", "~이다", "sein · er/sie/es 형"],
      ["0176", "0176 (null eins sieben sechs)", "휴대폰 지역번호"],
      ["-", "(구분 기호)"],
      ["123", "123 (eins zwei drei)", "숫자"],
      ["45", "45 (fünfundvierzig)", "숫자"],
      ["67", "67 (siebenundsechzig)", "숫자"],
    ],
    grammar: ["numbers", "possessive"],
    note: "전화번호는 한 자리씩 또는 두 자리씩 묶어 읽어요.",
  },
  "Wie viel Uhr ist es?": {
    words: [
      ["Wie", "얼마나", "의문사"],
      ["viel", "많이", "wie viel = 얼마"],
      ["Uhr", "시", "die Uhr (여성)"],
      ["ist", "~이다", "sein · er/sie/es 형"],
      ["es", "(비인칭 주어)", "비인칭 es"],
    ],
    grammar: ["clock-time", "es-gibt-impersonal", "w-questions"],
  },
  "Wie viel Uhr haben wir jetzt?": {
    words: [
      ["Wie", "얼마나", "의문사"],
      ["viel", "많이", "wie viel = 얼마"],
      ["Uhr", "시", "die Uhr (여성)"],
      ["haben", "가지다", "haben · wir 형"],
      ["wir", "우리는", "인칭대명사 1격"],
      ["jetzt", "지금", "부사"],
    ],
    grammar: ["clock-time", "sein-haben", "w-questions"],
    note: "직역은 '우리는 지금 몇 시를 가지고 있나요?' — 시간을 묻는 관용 표현.",
  },
  "Wie spät ist es?": {
    words: [
      ["Wie", "얼마나", "의문사"],
      ["spät", "늦은", "형용사"],
      ["ist", "~이다", "sein · er/sie/es 형"],
      ["es", "(비인칭 주어)", "비인칭 es"],
    ],
    grammar: ["clock-time", "es-gibt-impersonal"],
    note: "직역은 '얼마나 늦었나요?' — 몇 시냐고 묻는 가장 흔한 표현.",
  },
  "Es ist drei Uhr.": {
    words: [
      ["Es", "(비인칭 주어)", "비인칭 es"],
      ["ist", "~이다", "sein · er/sie/es 형"],
      ["drei", "3", "숫자"],
      ["Uhr", "시", "die Uhr (여성)"],
    ],
    grammar: ["clock-time", "es-gibt-impersonal"],
  },
  "Es ist halb neun morgens.": {
    words: [
      ["Es", "(비인칭 주어)", "비인칭 es"],
      ["ist", "~이다", "sein · er/sie/es 형"],
      ["halb", "(~시) 반 전", "halb + 다음 시각"],
      ["neun", "9", "숫자"],
      ["morgens", "아침에", "부사 (-s: ~에)"],
    ],
    grammar: ["clock-time", "es-gibt-impersonal"],
    note: "halb neun = 9시를 향한 절반 = 8시 30분. halb 뒤에는 보통 Uhr를 붙이지 않아요.",
  },
  "Wir haben genau 17 Uhr.": {
    words: [
      ["Wir", "우리는", "인칭대명사 1격"],
      ["haben", "가지다", "haben · wir 형"],
      ["genau", "정확히", "부사"],
      ["17", "17 (siebzehn)", "숫자"],
      ["Uhr", "시", "die Uhr (여성)"],
    ],
    grammar: ["clock-time", "sein-haben"],
    note: "Wir haben + 시각은 Es ist + 시각과 같은 뜻. 17 Uhr는 공식(24시간) 표현.",
  },
  "Es ist halb vier.": {
    words: [
      ["Es", "(비인칭 주어)", "비인칭 es"],
      ["ist", "~이다", "sein · er/sie/es 형"],
      ["halb", "(~시) 반 전", "halb + 다음 시각"],
      ["vier", "4", "숫자"],
    ],
    grammar: ["clock-time", "es-gibt-impersonal"],
    note: "halb vier = 4시를 향한 절반 = 3시 30분.",
  },
  "Es ist Viertel nach drei.": {
    words: [
      ["Es", "(비인칭 주어)", "비인칭 es"],
      ["ist", "~이다", "sein · er/sie/es 형"],
      ["Viertel", "15분 (4분의 1)", "das Viertel (중성)"],
      ["nach", "~지나서", "전치사 (시각)"],
      ["drei", "3", "숫자"],
    ],
    grammar: ["clock-time", "es-gibt-impersonal"],
  },
  "Es ist Viertel vor vier.": {
    words: [
      ["Es", "(비인칭 주어)", "비인칭 es"],
      ["ist", "~이다", "sein · er/sie/es 형"],
      ["Viertel", "15분 (4분의 1)", "das Viertel (중성)"],
      ["vor", "~전", "전치사 (시각)"],
      ["vier", "4", "숫자"],
    ],
    grammar: ["clock-time", "es-gibt-impersonal"],
    note: "4시 15분 전 = 3시 45분.",
  },
  "Es ist zehn nach fünf.": {
    words: [
      ["Es", "(비인칭 주어)", "비인칭 es"],
      ["ist", "~이다", "sein · er/sie/es 형"],
      ["zehn", "10 (분)", "숫자"],
      ["nach", "~지나서", "전치사 (시각)"],
      ["fünf", "5 (시)", "숫자"],
    ],
    grammar: ["clock-time", "es-gibt-impersonal"],
  },
  "Um wie viel Uhr?": {
    words: [
      ["Um", "~시에", "전치사 (정확한 시각)"],
      ["wie", "얼마나", "의문사"],
      ["viel", "많이", "wie viel = 얼마"],
      ["Uhr", "시", "die Uhr (여성)"],
    ],
    grammar: ["clock-time", "time-prepositions"],
  },
  "die Uhr": {
    words: [
      ["die", "(정관사)", "여성 1격"],
      ["Uhr", "시계 / ~시", "die Uhr (여성)"],
    ],
    grammar: ["articles-gender", "clock-time"],
    note: "'몇 시간'의 시간은 Stunde, 시각의 '~시'는 Uhr.",
  },
  "die Minute": {
    words: [
      ["die", "(정관사)", "여성 1격"],
      ["Minute", "분", "die Minute (여성)"],
    ],
    grammar: ["articles-gender"],
  },
  "die Stunde": {
    words: [
      ["die", "(정관사)", "여성 1격"],
      ["Stunde", "시간 (60분)", "die Stunde (여성)"],
    ],
    grammar: ["articles-gender"],
  },
  "der Morgen": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Morgen", "아침", "der Morgen (남성)"],
    ],
    grammar: ["articles-gender", "time-prepositions"],
    note: "'아침에'는 am Morgen 또는 morgens.",
  },
  "der Mittag": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Mittag", "정오, 점심", "der Mittag (남성)"],
    ],
    grammar: ["articles-gender"],
  },
  "der Nachmittag": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Nachmittag", "오후", "der Nachmittag (남성)"],
    ],
    grammar: ["articles-gender"],
  },
  "der Abend": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Abend", "저녁", "der Abend (남성)"],
    ],
    grammar: ["articles-gender"],
  },
  "die Nacht": {
    words: [
      ["die", "(정관사)", "여성 1격"],
      ["Nacht", "밤", "die Nacht (여성)"],
    ],
    grammar: ["articles-gender", "time-prepositions"],
    note: "하루의 때 중 Nacht만 여성이고, '밤에'도 am이 아니라 in der Nacht.",
  },
  "Es ist halb drei.": {
    words: [
      ["Es", "(비인칭 주어)", "비인칭 es"],
      ["ist", "~이다", "sein · er/sie/es 형"],
      ["halb", "(~시) 반 전", "halb + 다음 시각"],
      ["drei", "3", "숫자"],
    ],
    grammar: ["clock-time", "es-gibt-impersonal"],
    note: "halb drei = 2시 30분.",
  },
  "Um wie viel Uhr beginnt der Kurs?": {
    words: [
      ["Um", "~시에", "전치사 (정확한 시각)"],
      ["wie", "얼마나", "의문사"],
      ["viel", "많이", "wie viel = 얼마"],
      ["Uhr", "시", "die Uhr (여성)"],
      ["beginnt", "시작하다", "beginnen · er/sie/es 현재형"],
      ["der", "(정관사)", "남성 1격"],
      ["Kurs", "강좌, 수업", "der Kurs (남성)"],
    ],
    grammar: ["clock-time", "time-prepositions", "w-questions"],
  },
  "Um neun Uhr.": {
    words: [
      ["Um", "~시에", "전치사 (정확한 시각)"],
      ["neun", "9", "숫자"],
      ["Uhr", "시", "die Uhr (여성)"],
    ],
    grammar: ["clock-time", "time-prepositions"],
  },
  "Welche Sprachen sprichst du?": {
    words: [
      ["Welche", "어떤", "welch- · 복수 4격"],
      ["Sprachen", "언어들", "복수형 (die Sprache → Sprachen)"],
      ["sprichst", "말하다", "sprechen · du 현재형 (e→i)"],
      ["du", "너는", "인칭대명사 1격"],
    ],
    grammar: ["stem-change", "w-questions", "plural"],
  },
  "Welche Fremdsprachen spricht er?": {
    words: [
      ["Welche", "어떤", "welch- · 복수 4격"],
      ["Fremdsprachen", "외국어들", "복수형 (die Fremdsprache)"],
      ["spricht", "말하다", "sprechen · er 현재형 (e→i)"],
      ["er", "그는", "인칭대명사 1격"],
    ],
    grammar: ["stem-change", "w-questions", "plural"],
  },
  "Meine Muttersprache ist Koreanisch.": {
    words: [
      ["Meine", "나의", "소유관사 · 여성 1격"],
      ["Muttersprache", "모국어", "die Muttersprache (여성)"],
      ["ist", "~이다", "sein · er/sie/es 형"],
      ["Koreanisch", "한국어", "das Koreanisch · 관사 없음"],
    ],
    grammar: ["possessive", "sein-haben"],
    note: "언어 이름은 대문자로 쓰고 보통 관사 없이 써요.",
  },
  "Ich spreche Deutsch.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["spreche", "말한다", "sprechen · ich 현재형"],
      ["Deutsch", "독일어", "das Deutsch · 관사 없음"],
    ],
    grammar: ["stem-change"],
    note: "ich형은 규칙적(spreche). 모음이 바뀌는 건 du/er뿐.",
  },
  "Sprechen Sie Englisch?": {
    words: [
      ["Sprechen", "말하다", "sprechen · Sie 현재형"],
      ["Sie", "당신은", "존칭 Sie 1격"],
      ["Englisch", "영어", "das Englisch · 관사 없음"],
    ],
    grammar: ["yes-no-questions", "formal-informal"],
  },
  "Ich spreche gut Deutsch.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["spreche", "말한다", "sprechen · ich 현재형"],
      ["gut", "잘", "부사적 용법"],
      ["Deutsch", "독일어", "das Deutsch · 관사 없음"],
    ],
    grammar: ["stem-change", "word-order"],
  },
  "Ich spreche ein bisschen Deutsch.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["spreche", "말한다", "sprechen · ich 현재형"],
      ["ein", "(조금)", "ein bisschen = 조금"],
      ["bisschen", "약간", "ein bisschen (고정 표현)"],
      ["Deutsch", "독일어", "das Deutsch · 관사 없음"],
    ],
    grammar: ["stem-change"],
    note: "ein bisschen은 변하지 않는 '조금'이라는 한 덩어리 표현.",
  },
  "Ich spreche kaum Russisch.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["spreche", "말한다", "sprechen · ich 현재형"],
      ["kaum", "거의 ~않다", "부사"],
      ["Russisch", "러시아어", "das Russisch · 관사 없음"],
    ],
    grammar: ["stem-change", "negation"],
  },
  "Ich spreche kein Japanisch.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["spreche", "말한다", "sprechen · ich 현재형"],
      ["kein", "(전혀) ~않는", "부정관사 kein · 중성 4격"],
      ["Japanisch", "일본어", "das Japanisch (중성)"],
    ],
    grammar: ["negation", "stem-change"],
    note: "관사 없는 명사를 부정할 때는 nicht가 아니라 kein.",
  },
  "die Muttersprache": {
    words: [
      ["die", "(정관사)", "여성 1격"],
      ["Muttersprache", "모국어", "die Muttersprache (여성)"],
    ],
    grammar: ["articles-gender"],
    note: "Mutter(어머니) + Sprache(언어) — 성은 마지막 명사 Sprache를 따라 여성.",
  },
  "die Fremdsprache": {
    words: [
      ["die", "(정관사)", "여성 1격"],
      ["Fremdsprache", "외국어", "die Fremdsprache (여성)"],
    ],
    grammar: ["articles-gender"],
    note: "fremd(낯선) + Sprache(언어).",
  },
  "Sprechen Sie Deutsch?": {
    words: [
      ["Sprechen", "말하다", "sprechen · Sie 현재형"],
      ["Sie", "당신은", "존칭 Sie 1격"],
      ["Deutsch", "독일어", "das Deutsch · 관사 없음"],
    ],
    grammar: ["yes-no-questions", "formal-informal"],
  },
  "Ja, ich spreche ein bisschen Deutsch.": {
    words: [
      ["Ja", "네", "대답"],
      ["ich", "나는", "인칭대명사 1격"],
      ["spreche", "말한다", "sprechen · ich 현재형"],
      ["ein", "(조금)", "ein bisschen = 조금"],
      ["bisschen", "약간", "ein bisschen (고정 표현)"],
      ["Deutsch", "독일어", "das Deutsch · 관사 없음"],
    ],
    grammar: ["yes-no-questions", "stem-change"],
    note: "Ja는 문장 성분으로 세지 않아서 뒤에 ich spreche 어순 그대로.",
  },
  "Wohin gehst du?": {
    words: [
      ["Wohin", "어디로", "의문사 (방향)"],
      ["gehst", "가다", "gehen · du 현재형"],
      ["du", "너는", "인칭대명사 1격"],
    ],
    grammar: ["place-directions", "w-questions"],
  },
  "Wo gehen Sie hin?": {
    words: [
      ["Wo", "어디", "의문사"],
      ["gehen", "가다", "gehen · Sie 현재형"],
      ["Sie", "당신은", "존칭 Sie 1격"],
      ["hin", "~로 (저쪽으로)", "wohin의 hin이 분리됨"],
    ],
    grammar: ["place-directions", "w-questions", "formal-informal"],
    note: "구어에서는 wohin을 wo … hin으로 쪼개 hin을 문장 끝에 둡니다.",
  },
  "Wohin fährst du?": {
    words: [
      ["Wohin", "어디로", "의문사 (방향)"],
      ["fährst", "(타고) 가다", "fahren · du 현재형 (a→ä)"],
      ["du", "너는", "인칭대명사 1격"],
    ],
    grammar: ["stem-change", "place-directions", "w-questions"],
  },
  "Wohin fliegst du?": {
    words: [
      ["Wohin", "어디로", "의문사 (방향)"],
      ["fliegst", "날아가다", "fliegen · du 현재형"],
      ["du", "너는", "인칭대명사 1격"],
    ],
    grammar: ["place-directions", "w-questions"],
  },
  "Ich gehe ins Kino.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["gehe", "간다", "gehen · ich 현재형"],
      ["ins", "~(안)으로", "in + das 축약 · 이동이라 4격"],
      ["Kino", "영화관", "das Kino (중성)"],
    ],
    grammar: ["two-way-prepositions", "contractions"],
  },
  "Ich gehe auf den Markt.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["gehe", "간다", "gehen · ich 현재형"],
      ["auf", "~(위)로", "전치사 · 이동이라 4격"],
      ["den", "(정관사)", "4격 남성 정관사"],
      ["Markt", "시장", "der Markt (남성)"],
    ],
    grammar: ["two-way-prepositions", "accusative", "place-directions"],
    note: "열린 장소인 시장·광장에는 in 대신 auf를 써요.",
  },
  "Ich gehe in die Schule.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["gehe", "간다", "gehen · ich 현재형"],
      ["in", "~(안)으로", "전치사 · 이동이라 4격"],
      ["die", "(정관사)", "4격 여성 정관사"],
      ["Schule", "학교", "die Schule (여성)"],
    ],
    grammar: ["two-way-prepositions", "place-directions"],
    note: "in die Schule gehen = 학교에 다니다/수업 받으러 가다.",
  },
  "Ich gehe zur Arbeit.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["gehe", "간다", "gehen · ich 현재형"],
      ["zur", "~로", "zu + der 축약 (3격)"],
      ["Arbeit", "직장, 일", "die Arbeit (여성)"],
    ],
    grammar: ["prep-dative", "contractions", "place-directions"],
  },
  "Ich gehe spazieren.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["gehe", "간다", "gehen · ich 현재형"],
      ["spazieren", "산책하러", "동사 원형 (spazieren)"],
    ],
    grammar: ["sentence-bracket", "word-order"],
    note: "gehen + 동사원형 = '~하러 가다'. 원형은 문장 끝에.",
  },
  "Ich gehe meine Freundin besuchen.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["gehe", "간다", "gehen · ich 현재형"],
      ["meine", "나의", "소유관사 · 여성 4격"],
      ["Freundin", "여자친구", "die Freundin (여성)"],
      ["besuchen", "방문하러", "동사 원형 · 문장 끝"],
    ],
    grammar: ["sentence-bracket", "possessive", "accusative"],
    note: "gehen + 동사원형 = '~하러 가다'. meine Freundin은 친구(여)일 수도 있어요.",
  },
  "Ich fahre nach Seoul.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["fahre", "(타고) 간다", "fahren · ich 현재형"],
      ["nach", "~로", "3격 전치사 (도시·나라)"],
      ["Seoul", "(도시) 서울"],
    ],
    grammar: ["place-directions", "prep-dative"],
    note: "관사 없는 도시·나라로 갈 때는 nach.",
  },
  "Ich fliege nach Deutschland.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["fliege", "비행기로 간다", "fliegen · ich 현재형"],
      ["nach", "~로", "3격 전치사 (도시·나라)"],
      ["Deutschland", "(나라) 독일"],
    ],
    grammar: ["place-directions", "prep-dative"],
  },
  "Er fährt mit dem Bus.": {
    words: [
      ["Er", "그는", "인칭대명사 1격"],
      ["fährt", "(타고) 간다", "fahren · er 현재형 (a→ä)"],
      ["mit", "~을 타고", "3격 전치사 (수단)"],
      ["dem", "(정관사)", "3격 남성 정관사"],
      ["Bus", "버스", "der Bus (남성)"],
    ],
    grammar: ["prep-dative", "stem-change", "dative"],
    note: "교통수단은 mit + 3격: mit dem Bus / mit der U-Bahn.",
  },
  "die Schule": {
    words: [
      ["die", "(정관사)", "여성 1격"],
      ["Schule", "학교", "die Schule (여성)"],
    ],
    grammar: ["articles-gender"],
  },
  "die Arbeit": {
    words: [
      ["die", "(정관사)", "여성 1격"],
      ["Arbeit", "일, 직장", "die Arbeit (여성)"],
    ],
    grammar: ["articles-gender"],
  },
  "der Supermarkt": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Supermarkt", "슈퍼마켓", "der Supermarkt (남성)"],
    ],
    grammar: ["articles-gender"],
  },
  "der Bahnhof": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Bahnhof", "기차역", "der Bahnhof (남성)"],
    ],
    grammar: ["articles-gender"],
  },
  "das Kino": {
    words: [
      ["das", "(정관사)", "중성 1격"],
      ["Kino", "영화관", "das Kino (중성)"],
    ],
    grammar: ["articles-gender"],
  },
  "Ich gehe in die Schule. Und du?": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["gehe", "간다", "gehen · ich 현재형"],
      ["in", "~(안)으로", "전치사 · 이동이라 4격"],
      ["die", "(정관사)", "4격 여성 정관사"],
      ["Schule", "학교", "die Schule (여성)"],
      ["Und", "그리고", "접속사"],
      ["du", "너는?", "인칭대명사 1격"],
    ],
    grammar: ["two-way-prepositions", "place-directions"],
  },
  "Ich fahre in die Stadt.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["fahre", "(타고) 간다", "fahren · ich 현재형"],
      ["in", "~(안)으로", "전치사 · 이동이라 4격"],
      ["die", "(정관사)", "4격 여성 정관사"],
      ["Stadt", "시내, 도시", "die Stadt (여성)"],
    ],
    grammar: ["two-way-prepositions", "place-directions"],
  },
  "Was isst du gern zum Frühstück?": {
    words: [
      ["Was", "무엇을", "의문사 (4격)"],
      ["isst", "먹다", "essen · du 현재형 (e→i)"],
      ["du", "너는", "인칭대명사 1격"],
      ["gern", "즐겨", "부사 (좋아함)"],
      ["zum", "~으로", "zu + dem 축약 (3격)"],
      ["Frühstück", "아침 식사", "das Frühstück (중성)"],
    ],
    grammar: ["stem-change", "gern", "contractions"],
    note: "essen의 du형은 isst (어간이 s로 끝나 -t만 붙음).",
  },
  "Was frühstückst du immer?": {
    words: [
      ["Was", "무엇을", "의문사 (4격)"],
      ["frühstückst", "아침으로 먹다", "frühstücken · du 현재형"],
      ["du", "너는", "인칭대명사 1격"],
      ["immer", "항상", "부사"],
    ],
    grammar: ["present-regular", "w-questions"],
  },
  "Was ist dein Lieblingsessen?": {
    words: [
      ["Was", "무엇", "의문사"],
      ["ist", "~이다", "sein · er/sie/es 형"],
      ["dein", "너의", "소유관사 · 중성 1격"],
      ["Lieblingsessen", "가장 좋아하는 음식", "das Lieblingsessen (중성)"],
    ],
    grammar: ["gern", "possessive"],
    note: "Lieblings- + 명사 = '가장 좋아하는 ~'.",
  },
  "Was möchten Sie essen?": {
    words: [
      ["Was", "무엇을", "의문사 (4격)"],
      ["möchten", "~하고 싶다", "möchten · Sie 형"],
      ["Sie", "당신은", "존칭 Sie 1격"],
      ["essen", "먹다", "동사 원형 · 문장 끝"],
    ],
    grammar: ["modal-verbs", "sentence-bracket", "moegen-moechten"],
  },
  "Ich frühstücke.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["frühstücke", "아침을 먹는다", "frühstücken · ich 현재형"],
    ],
    grammar: ["present-regular"],
  },
  "Ich esse zu Mittag.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["esse", "먹는다", "essen · ich 현재형"],
      ["zu", "(식사로서의) ~", "zu Mittag essen (고정)"],
      ["Mittag", "점심", "der Mittag (남성) · 관사 없음"],
    ],
    grammar: ["prep-dative"],
    note: "zu Mittag essen = 점심을 먹다 (관사 없이 고정 표현).",
  },
  "Ich esse zu Abend.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["esse", "먹는다", "essen · ich 현재형"],
      ["zu", "(식사로서의) ~", "zu Abend essen (고정)"],
      ["Abend", "저녁", "der Abend (남성) · 관사 없음"],
    ],
    grammar: ["prep-dative"],
    note: "zu Abend essen = 저녁을 먹다 (관사 없이 고정 표현).",
  },
  "Ich esse gern Brötchen zum Frühstück.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["esse", "먹는다", "essen · ich 현재형"],
      ["gern", "즐겨", "부사 (좋아함)"],
      ["Brötchen", "작은 빵(들)", "das Brötchen · 복수 동형"],
      ["zum", "~으로", "zu + dem 축약 (3격)"],
      ["Frühstück", "아침 식사", "das Frühstück (중성)"],
    ],
    grammar: ["gern", "contractions", "plural"],
  },
  "Ich esse gern Pizza.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["esse", "먹는다", "essen · ich 현재형"],
      ["gern", "즐겨", "부사 (좋아함)"],
      ["Pizza", "피자", "die Pizza (여성) · 관사 없음"],
    ],
    grammar: ["gern"],
  },
  "Ich esse kein Fleisch.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["esse", "먹는다", "essen · ich 현재형"],
      ["kein", "(전혀) ~않는", "부정관사 kein · 중성 4격"],
      ["Fleisch", "고기", "das Fleisch (중성)"],
    ],
    grammar: ["negation", "accusative"],
    note: "관사 없는 명사(Fleisch)를 부정하니 nicht가 아니라 kein.",
  },
  "Ich trinke gern Kaffee.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["trinke", "마신다", "trinken · ich 현재형"],
      ["gern", "즐겨", "부사 (좋아함)"],
      ["Kaffee", "커피", "der Kaffee (남성) · 관사 없음"],
    ],
    grammar: ["gern", "present-regular"],
  },
  "Guten Appetit!": {
    words: [
      ["Guten", "좋은", "gut · 남성 4격 형용사 어미 -en"],
      ["Appetit", "식욕", "der Appetit (남성)"],
    ],
    grammar: ["greetings-phrases"],
    note: "직역은 '좋은 식욕을!' — 식사 전에 하는 인사.",
  },
  "Ich habe Hunger.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["habe", "가지고 있다", "haben · ich 형"],
      ["Hunger", "배고픔", "der Hunger (남성) · 관사 없음"],
    ],
    grammar: ["sein-haben"],
    note: "직역 '나는 배고픔을 가지고 있다'. Ich bin hungrig보다 훨씬 자연스러워요.",
  },
  "Ich habe Durst.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["habe", "가지고 있다", "haben · ich 형"],
      ["Durst", "갈증", "der Durst (남성) · 관사 없음"],
    ],
    grammar: ["sein-haben"],
    note: "직역 '나는 갈증을 가지고 있다'.",
  },
  "Ich möchte was essen.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["möchte", "~하고 싶다", "möchten · ich 형"],
      ["was", "뭔가", "etwas의 구어체"],
      ["essen", "먹다", "동사 원형 · 문장 끝"],
    ],
    grammar: ["modal-verbs", "sentence-bracket", "moegen-moechten"],
    note: "여기서 was는 의문사가 아니라 etwas(무언가)의 줄임말.",
  },
  "Ich möchte was trinken.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["möchte", "~하고 싶다", "möchten · ich 형"],
      ["was", "뭔가", "etwas의 구어체"],
      ["trinken", "마시다", "동사 원형 · 문장 끝"],
    ],
    grammar: ["modal-verbs", "sentence-bracket", "moegen-moechten"],
    note: "여기서 was는 의문사가 아니라 etwas(무언가)의 줄임말.",
  },
  "das Brot": {
    words: [
      ["das", "(정관사)", "중성 1격"],
      ["Brot", "빵", "das Brot (중성)"],
    ],
    grammar: ["articles-gender"],
  },
  "der Käse": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Käse", "치즈", "der Käse (남성)"],
    ],
    grammar: ["articles-gender"],
  },
  "das Fleisch": {
    words: [
      ["das", "(정관사)", "중성 1격"],
      ["Fleisch", "고기", "das Fleisch (중성)"],
    ],
    grammar: ["articles-gender"],
  },
  "der Fisch": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Fisch", "생선, 물고기", "der Fisch (남성)"],
    ],
    grammar: ["articles-gender"],
  },
  "das Gemüse": {
    words: [
      ["das", "(정관사)", "중성 1격"],
      ["Gemüse", "채소", "das Gemüse (중성)"],
    ],
    grammar: ["articles-gender"],
  },
  "das Obst": {
    words: [
      ["das", "(정관사)", "중성 1격"],
      ["Obst", "과일", "das Obst (중성)"],
    ],
    grammar: ["articles-gender"],
    note: "Obst는 과일 전체를 가리키는 집합명사라 복수형이 없어요.",
  },
  "der Salat": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Salat", "샐러드, 상추", "der Salat (남성)"],
    ],
    grammar: ["articles-gender"],
  },
  "die Suppe": {
    words: [
      ["die", "(정관사)", "여성 1격"],
      ["Suppe", "수프", "die Suppe (여성)"],
    ],
    grammar: ["articles-gender"],
  },
  "das Wasser": {
    words: [
      ["das", "(정관사)", "중성 1격"],
      ["Wasser", "물", "das Wasser (중성)"],
    ],
    grammar: ["articles-gender"],
  },
  "der Kaffee": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Kaffee", "커피", "der Kaffee (남성)"],
    ],
    grammar: ["articles-gender"],
  },
  "das Frühstück": {
    words: [
      ["das", "(정관사)", "중성 1격"],
      ["Frühstück", "아침 식사", "das Frühstück (중성)"],
    ],
    grammar: ["articles-gender"],
    note: "früh(이른) + Stück(조각) — 동사는 frühstücken.",
  },
  "das Brötchen": {
    words: [
      ["das", "(정관사)", "중성 1격"],
      ["Brötchen", "작은 빵", "das Brötchen (중성)"],
    ],
    grammar: ["articles-gender"],
    note: "-chen으로 끝나는 명사는 항상 중성 (Brot + chen).",
  },
  "das Lieblingsessen": {
    words: [
      ["das", "(정관사)", "중성 1격"],
      ["Lieblingsessen", "가장 좋아하는 음식", "das Lieblingsessen (중성)"],
    ],
    grammar: ["articles-gender", "gern"],
  },
  "der Hunger": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Hunger", "배고픔", "der Hunger (남성)"],
    ],
    grammar: ["articles-gender"],
  },
  "der Durst": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Durst", "갈증", "der Durst (남성)"],
    ],
    grammar: ["articles-gender"],
  },
  "Was isst du gern?": {
    words: [
      ["Was", "무엇을", "의문사 (4격)"],
      ["isst", "먹다", "essen · du 현재형 (e→i)"],
      ["du", "너는", "인칭대명사 1격"],
      ["gern", "즐겨", "부사 (좋아함)"],
    ],
    grammar: ["stem-change", "gern", "w-questions"],
  },
  "Ich esse gern Salat und Fisch. Und du?": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["esse", "먹는다", "essen · ich 현재형"],
      ["gern", "즐겨", "부사 (좋아함)"],
      ["Salat", "샐러드", "der Salat (남성) · 관사 없음"],
      ["und", "그리고", "등위접속사"],
      ["Fisch", "생선", "der Fisch (남성) · 관사 없음"],
      ["Und", "그리고", "접속사"],
      ["du", "너는?", "인칭대명사 1격"],
    ],
    grammar: ["gern", "conjunctions"],
  },
  "Ich esse gern Fleisch.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["esse", "먹는다", "essen · ich 현재형"],
      ["gern", "즐겨", "부사 (좋아함)"],
      ["Fleisch", "고기", "das Fleisch (중성) · 관사 없음"],
    ],
    grammar: ["gern"],
  },
  "Hast du Zeit?": {
    words: [
      ["Hast", "가지고 있다", "haben · du 형"],
      ["du", "너는", "인칭대명사 1격"],
      ["Zeit", "시간", "die Zeit (여성) · 관사 없음"],
    ],
    grammar: ["sein-haben", "yes-no-questions"],
  },
  "Hast du am Montag Zeit?": {
    words: [
      ["Hast", "가지고 있다", "haben · du 형"],
      ["du", "너는", "인칭대명사 1격"],
      ["am", "~에", "an + dem 축약 (요일)"],
      ["Montag", "월요일", "der Montag (남성)"],
      ["Zeit", "시간", "die Zeit (여성) · 관사 없음"],
    ],
    grammar: ["time-prepositions", "contractions", "yes-no-questions"],
    note: "요일 앞에는 am. 시간 표현(am Montag)이 Zeit보다 앞에 와요.",
  },
  "Wann hast du Zeit?": {
    words: [
      ["Wann", "언제", "의문사"],
      ["hast", "가지고 있다", "haben · du 형"],
      ["du", "너는", "인칭대명사 1격"],
      ["Zeit", "시간", "die Zeit (여성)"],
    ],
    grammar: ["w-questions", "sein-haben"],
  },
  "Wann haben Sie Zeit?": {
    words: [
      ["Wann", "언제", "의문사"],
      ["haben", "가지고 있다", "haben · Sie 형"],
      ["Sie", "당신은", "존칭 Sie 1격"],
      ["Zeit", "시간", "die Zeit (여성)"],
    ],
    grammar: ["w-questions", "sein-haben", "formal-informal"],
  },
  "Wann haben Sie frei?": {
    words: [
      ["Wann", "언제", "의문사"],
      ["haben", "가지고 있다", "haben · Sie 형"],
      ["Sie", "당신은", "존칭 Sie 1격"],
      ["frei", "쉬는, 자유로운", "형용사 · frei haben"],
    ],
    grammar: ["w-questions", "sein-haben", "formal-informal"],
    note: "frei haben = (일·수업이) 쉬는 날이다.",
  },
  "Wann passt es Ihnen?": {
    words: [
      ["Wann", "언제", "의문사"],
      ["passt", "맞다, 괜찮다", "passen · es 현재형"],
      ["es", "그것이 (약속)", "비인칭 es"],
      ["Ihnen", "당신에게", "Sie의 3격"],
    ],
    grammar: ["dative", "w-questions", "formal-informal"],
    note: "passen은 3격을 받아요: '당신에게 언제 맞나요?'",
  },
  "Ich habe am Montag Zeit.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["habe", "가지고 있다", "haben · ich 형"],
      ["am", "~에", "an + dem 축약 (요일)"],
      ["Montag", "월요일", "der Montag (남성)"],
      ["Zeit", "시간", "die Zeit (여성) · 관사 없음"],
    ],
    grammar: ["time-prepositions", "contractions", "sein-haben"],
  },
  "Passt dir Freitag?": {
    words: [
      ["Passt", "맞다, 괜찮다", "passen · er/sie/es 현재형"],
      ["dir", "너에게", "du의 3격"],
      ["Freitag", "금요일", "der Freitag (남성) · 주어"],
    ],
    grammar: ["dative", "yes-no-questions"],
    note: "주어는 Freitag, dir는 3격. '금요일이 너에게 맞니?'",
  },
  "Ja, das passt gut.": {
    words: [
      ["Ja", "네", "대답"],
      ["das", "그것", "지시대명사 1격"],
      ["passt", "맞다, 괜찮다", "passen · er/sie/es 현재형"],
      ["gut", "잘", "부사적 용법"],
    ],
    grammar: ["yes-no-questions"],
  },
  "Nein, das passt leider nicht.": {
    words: [
      ["Nein", "아니요", "대답"],
      ["das", "그것", "지시대명사 1격"],
      ["passt", "맞다, 괜찮다", "passen · er/sie/es 현재형"],
      ["leider", "유감스럽게도", "부사"],
      ["nicht", "~않다", "부정어 · 문장 끝"],
    ],
    grammar: ["negation", "yes-no-questions"],
    note: "동사 전체를 부정하는 nicht는 문장 끝에 와요.",
  },
  "Ich habe am Mittwoch Zeit.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["habe", "가지고 있다", "haben · ich 형"],
      ["am", "~에", "an + dem 축약 (요일)"],
      ["Mittwoch", "수요일", "der Mittwoch (남성)"],
      ["Zeit", "시간", "die Zeit (여성) · 관사 없음"],
    ],
    grammar: ["time-prepositions", "contractions", "sein-haben"],
  },
  "Gut! Um 14 Uhr?": {
    words: [
      ["Gut", "좋아요", "형용사"],
      ["Um", "~시에", "전치사 (정확한 시각)"],
      ["14", "14 (vierzehn)", "숫자"],
      ["Uhr", "시", "die Uhr (여성)"],
    ],
    grammar: ["clock-time", "time-prepositions"],
  },
  "Wo ist die Bank?": {
    words: [
      ["Wo", "어디에", "의문사 (위치)"],
      ["ist", "있다", "sein · er/sie/es 형"],
      ["die", "(정관사)", "여성 1격"],
      ["Bank", "은행", "die Bank (여성)"],
    ],
    grammar: ["w-questions", "place-directions"],
    note: "die Bank는 '은행' 외에 '벤치'라는 뜻도 있어요.",
  },
  "Entschuldigung, wo ist ...?": {
    words: [
      ["Entschuldigung", "실례합니다", "die Entschuldigung (여성)"],
      ["wo", "어디에", "의문사 (위치)"],
      ["ist", "있다", "sein · er/sie/es 형"],
    ],
    grammar: ["greetings-phrases", "w-questions"],
    note: "Entschuldigung은 '사과'라는 명사지만 말을 걸 때 '실례합니다'로 써요.",
  },
  "Gehen Sie links.": {
    words: [
      ["Gehen", "가세요", "gehen · Sie 명령형"],
      ["Sie", "당신은", "존칭 Sie"],
      ["links", "왼쪽으로", "부사"],
    ],
    grammar: ["imperative", "place-directions"],
    note: "Sie 명령형은 동사 + Sie 순서 (의문문과 같지만 억양이 내려감).",
  },
  "Gehen Sie geradeaus.": {
    words: [
      ["Gehen", "가세요", "gehen · Sie 명령형"],
      ["Sie", "당신은", "존칭 Sie"],
      ["geradeaus", "곧장, 직진", "부사"],
    ],
    grammar: ["imperative", "place-directions"],
  },
  "Die Bank ist neben dem Supermarkt.": {
    words: [
      ["Die", "(정관사)", "여성 1격"],
      ["Bank", "은행", "die Bank (여성)"],
      ["ist", "있다", "sein · er/sie/es 형"],
      ["neben", "~옆에", "3·4격 전치사 · 위치라 3격"],
      ["dem", "(정관사)", "3격 남성 정관사"],
      ["Supermarkt", "슈퍼마켓", "der Supermarkt (남성)"],
    ],
    grammar: ["two-way-prepositions", "dative"],
    note: "Wo?(위치)를 말하므로 neben + 3격 → dem Supermarkt.",
  },
  "Wo finde ich hier Küchenwaren?": {
    words: [
      ["Wo", "어디에서", "의문사 (위치)"],
      ["finde", "찾다", "finden · ich 현재형"],
      ["ich", "나는", "인칭대명사 1격"],
      ["hier", "여기서", "부사"],
      ["Küchenwaren", "주방용품", "복수형 (die Küchenware)"],
    ],
    grammar: ["w-questions", "present-regular"],
  },
  "Möbel finden Sie im 1. Stock.": {
    words: [
      ["Möbel", "가구", "복수명사 (die Möbel) · 4격"],
      ["finden", "찾다", "finden · Sie 현재형"],
      ["Sie", "당신은", "존칭 Sie 1격"],
      ["im", "~에", "in + dem 축약 (3격)"],
      ["1", "첫 번째 (ersten)", "서수 1. = ersten"],
      ["Stock", "층", "der Stock (남성)"],
    ],
    grammar: ["word-order", "contractions", "dates-ordinal"],
    note: "목적어 Möbel이 앞에 와도 동사는 두 번째. 독일의 1. Stock은 한국식 2층.",
  },
  "Die Sportabteilung ist im Erdgeschoss.": {
    words: [
      ["Die", "(정관사)", "여성 1격"],
      ["Sportabteilung", "스포츠용품 매장", "die Sportabteilung (여성)"],
      ["ist", "있다", "sein · er/sie/es 형"],
      ["im", "~에", "in + dem 축약 (3격)"],
      ["Erdgeschoss", "지상층", "das Erdgeschoss (중성)"],
    ],
    grammar: ["contractions", "two-way-prepositions"],
    note: "Erdgeschoss(EG)는 땅(Erde)과 같은 높이의 층 = 한국식 1층.",
  },
  "Ich suche eine Tasche.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["suche", "찾는다", "suchen · ich 현재형"],
      ["eine", "하나의", "4격 여성 부정관사"],
      ["Tasche", "가방", "die Tasche (여성)"],
    ],
    grammar: ["accusative", "present-regular"],
  },
  "Haben Sie auch ein Sofa?": {
    words: [
      ["Haben", "가지고 있다", "haben · Sie 형"],
      ["Sie", "당신은", "존칭 Sie 1격"],
      ["auch", "~도", "부사"],
      ["ein", "하나의", "4격 중성 부정관사"],
      ["Sofa", "소파", "das Sofa (중성)"],
    ],
    grammar: ["yes-no-questions", "accusative", "sein-haben"],
    note: "가게에서 Haben Sie …? = '…이 있나요?(파나요?)'.",
  },
  "Gern geschehen.": {
    words: [
      ["Gern", "기꺼이", "부사"],
      ["geschehen", "일어난", "과거분사 (geschehen)"],
    ],
    grammar: ["greetings-phrases"],
    note: "직역 '기꺼이 일어난 일이에요' — Danke에 대한 대답 '천만에요'.",
  },
  "die Bank": {
    words: [
      ["die", "(정관사)", "여성 1격"],
      ["Bank", "은행", "die Bank (여성)"],
    ],
    grammar: ["articles-gender"],
    note: "복수형: 은행은 Banken, 벤치는 Bänke.",
  },
  "das Krankenhaus": {
    words: [
      ["das", "(정관사)", "중성 1격"],
      ["Krankenhaus", "병원", "das Krankenhaus (중성)"],
    ],
    grammar: ["articles-gender"],
    note: "krank(아픈) + Haus(집) — 성은 Haus를 따라 중성.",
  },
  "das Hotel": {
    words: [
      ["das", "(정관사)", "중성 1격"],
      ["Hotel", "호텔", "das Hotel (중성)"],
    ],
    grammar: ["articles-gender"],
  },
  "das Restaurant": {
    words: [
      ["das", "(정관사)", "중성 1격"],
      ["Restaurant", "식당", "das Restaurant (중성)"],
    ],
    grammar: ["articles-gender"],
  },
  "die Apotheke": {
    words: [
      ["die", "(정관사)", "여성 1격"],
      ["Apotheke", "약국", "die Apotheke (여성)"],
    ],
    grammar: ["articles-gender"],
  },
  "das Erdgeschoss": {
    words: [
      ["das", "(정관사)", "중성 1격"],
      ["Erdgeschoss", "지상층 (한국식 1층)", "das Erdgeschoss (중성)"],
    ],
    grammar: ["articles-gender"],
  },
  "der Stock / die Etage": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Stock", "층", "der Stock (남성)"],
      ["die", "(정관사)", "여성 1격"],
      ["Etage", "층", "die Etage (여성)"],
    ],
    grammar: ["articles-gender"],
    note: "뜻은 같지만 성이 달라요: im 1. Stock / in der 1. Etage.",
  },
  "die Abteilung": {
    words: [
      ["die", "(정관사)", "여성 1격"],
      ["Abteilung", "매장, 부서", "die Abteilung (여성)"],
    ],
    grammar: ["articles-gender"],
    note: "-ung으로 끝나는 명사는 항상 여성.",
  },
  "die Möbel": {
    words: [
      ["die", "(정관사)", "복수 1격"],
      ["Möbel", "가구", "복수형 (das Möbel → Möbel)"],
    ],
    grammar: ["plural", "articles-gender"],
    note: "여기의 die는 여성이 아니라 복수 관사. 가구는 보통 복수로 써요.",
  },
  "Entschuldigung, wo ist die nächste Apotheke?": {
    words: [
      ["Entschuldigung", "실례합니다", "die Entschuldigung (여성)"],
      ["wo", "어디에", "의문사 (위치)"],
      ["ist", "있다", "sein · er/sie/es 형"],
      ["die", "(정관사)", "여성 1격"],
      ["nächste", "가장 가까운", "nah 최상급 · 여성 1격 -e"],
      ["Apotheke", "약국", "die Apotheke (여성)"],
    ],
    grammar: ["w-questions", "greetings-phrases"],
  },
  "Gehen Sie geradeaus, dann links.": {
    words: [
      ["Gehen", "가세요", "gehen · Sie 명령형"],
      ["Sie", "당신은", "존칭 Sie"],
      ["geradeaus", "곧장, 직진", "부사"],
      ["dann", "그다음에", "부사"],
      ["links", "왼쪽으로", "부사"],
    ],
    grammar: ["imperative", "place-directions"],
  },
};
