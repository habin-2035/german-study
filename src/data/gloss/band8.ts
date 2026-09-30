import type { SentenceGloss } from "@/lib/gloss";

export const BAND8: Record<string, SentenceGloss> = {
  // ── Lektion 50: 경험 말하기 ──
  "Ich habe schon ... gemacht.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["habe", "(완료 조동사)", "haben · 완료 조동사"],
      ["schon", "이미, 벌써", "부사"],
      ["gemacht", "했다", "과거분사 (machen)"],
    ],
    grammar: ["perfekt", "sentence-bracket"],
  },
  "Ich habe noch nie ... gemacht.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["habe", "(완료 조동사)", "haben · 완료 조동사"],
      ["noch", "아직", "부사"],
      ["nie", "한 번도 ~않다", "부정 부사"],
      ["gemacht", "했다", "과거분사 (machen)"],
    ],
    grammar: ["perfekt", "negation", "sentence-bracket"],
    note: "noch nie = 아직 한 번도 ~한 적 없다 (경험 부정).",
  },
  "Warst du schon mal in England?": {
    words: [
      ["Warst", "있었다", "sein 과거형 · du"],
      ["du", "너는", "인칭대명사 1격"],
      ["schon", "이미, 벌써", "부사"],
      ["mal", "한 번", "부사 (= einmal)"],
      ["in", "~에", "전치사 in + 3격 (나라)"],
      ["England", "(나라) 영국", "das England · 무관사"],
    ],
    grammar: ["praeteritum-sein-haben", "yes-no-questions"],
    note: "schon mal ~? = '~해 본 적 있어?' 경험을 묻는 표현. sein은 구어에서도 과거형 war를 쓴다.",
  },
  "Ich war noch nie in England.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["war", "있었다", "sein 과거형 · ich"],
      ["noch", "아직", "부사"],
      ["nie", "한 번도 ~않다", "부정 부사"],
      ["in", "~에", "전치사 in + 3격 (나라)"],
      ["England", "(나라) 영국", "das England · 무관사"],
    ],
    grammar: ["praeteritum-sein-haben", "negation"],
  },
  "Sie ist schon zweimal nach Afrika geflogen.": {
    words: [
      ["Sie", "그녀는", "인칭대명사 1격 (sie)"],
      ["ist", "(완료 조동사)", "sein · 완료 조동사"],
      ["schon", "이미", "부사"],
      ["zweimal", "두 번", "횟수 부사"],
      ["nach", "~로 (대륙·나라)", "3격 전치사 · 방향"],
      ["Afrika", "(대륙) 아프리카", "das Afrika · 무관사"],
      ["geflogen", "비행기로 갔다", "과거분사 (fliegen)"],
    ],
    grammar: ["perfekt", "place-directions", "sentence-bracket"],
    note: "fliegen은 장소 이동 동사라 완료 조동사로 sein을 쓴다.",
  },
  "Sie ist schon oft in Asien gewesen.": {
    words: [
      ["Sie", "그녀는", "인칭대명사 1격 (sie)"],
      ["ist", "(완료 조동사)", "sein · 완료 조동사"],
      ["schon", "이미", "부사"],
      ["oft", "자주", "빈도 부사"],
      ["in", "~에", "전치사 in + 3격"],
      ["Asien", "(대륙) 아시아", "das Asien · 무관사"],
      ["gewesen", "있었다", "과거분사 (sein)"],
    ],
    grammar: ["perfekt", "sentence-bracket"],
    note: "sein의 완료형은 ist ... gewesen이지만, 구어에서는 과거형 Sie war schon oft in Asien.을 더 흔히 쓴다.",
  },
  "Das war toll!": {
    words: [
      ["Das", "그것은", "지시대명사 1격"],
      ["war", "~이었다", "sein 과거형 · es"],
      ["toll", "멋진", "형용사 · 서술 용법"],
    ],
    grammar: ["praeteritum-sein-haben", "adjectives-predicative"],
  },
  "Das war nicht so gut.": {
    words: [
      ["Das", "그것은", "지시대명사 1격"],
      ["war", "~이었다", "sein 과거형 · es"],
      ["nicht", "~않다", "부정어"],
      ["so", "그다지, 그렇게", "정도 부사"],
      ["gut", "좋은", "형용사 · 서술 용법"],
    ],
    grammar: ["praeteritum-sein-haben", "adjectives-predicative", "negation"],
    note: "nicht so gut = '그다지 좋지 않은' — schlecht보다 부드러운 표현.",
  },
  "Warst du schon mal in Deutschland?": {
    words: [
      ["Warst", "있었다", "sein 과거형 · du"],
      ["du", "너는", "인칭대명사 1격"],
      ["schon", "이미, 벌써", "부사"],
      ["mal", "한 번", "부사 (= einmal)"],
      ["in", "~에", "전치사 in + 3격 (나라)"],
      ["Deutschland", "(나라) 독일", "das Deutschland · 무관사"],
    ],
    grammar: ["praeteritum-sein-haben", "yes-no-questions"],
  },
  "Ja, ich war letztes Jahr in Berlin. Das war toll!": {
    words: [
      ["Ja", "응", "대답"],
      ["ich", "나는", "인칭대명사 1격"],
      ["war", "있었다", "sein 과거형 · ich"],
      ["letztes", "지난", "letzt · 중성 4격 어미 -es"],
      ["Jahr", "해", "das Jahr (중성)"],
      ["in", "~에", "전치사 in + 3격 (도시)"],
      ["Berlin", "(도시) 베를린", "지명 · 무관사"],
      ["Das", "그것은", "지시대명사 1격"],
      ["war", "~이었다", "sein 과거형 · es"],
      ["toll", "멋진", "형용사 · 서술 용법"],
    ],
    grammar: ["praeteritum-sein-haben", "word-order"],
    note: "letztes Jahr는 전치사 없이 4격으로 쓰는 시간 표현 ('작년에').",
  },

  // ── Lektion 51: 축하·인사 ──
  "Herzlichen Glückwunsch!": {
    words: [
      ["Herzlichen", "진심 어린", "herzlich · 남성 4격 어미 -en"],
      ["Glückwunsch", "축하", "der Glückwunsch (남성)"],
    ],
    grammar: ["greetings-phrases"],
    note: "'(Ich wünsche) herzlichen Glückwunsch'의 줄임이라 4격 어미 -en이 붙는다.",
  },
  "Herzlichen Glückwunsch zum Geburtstag!": {
    words: [
      ["Herzlichen", "진심 어린", "herzlich · 남성 4격 어미 -en"],
      ["Glückwunsch", "축하", "der Glückwunsch (남성)"],
      ["zum", "~에 대한", "zu + dem 축약 (3격)"],
      ["Geburtstag", "생일", "der Geburtstag (남성)"],
    ],
    grammar: ["greetings-phrases", "contractions"],
  },
  "Herzlichen Glückwunsch zur Hochzeit!": {
    words: [
      ["Herzlichen", "진심 어린", "herzlich · 남성 4격 어미 -en"],
      ["Glückwunsch", "축하", "der Glückwunsch (남성)"],
      ["zur", "~에 대한", "zu + der 축약 (3격)"],
      ["Hochzeit", "결혼(식)", "die Hochzeit (여성)"],
    ],
    grammar: ["greetings-phrases", "contractions"],
  },
  "Alles Gute!": {
    words: [
      ["Alles", "모든", "부정대명사 · 중성"],
      ["Gute", "좋은 것", "명사화 형용사 (das Gute)"],
    ],
    grammar: ["greetings-phrases"],
  },
  "Alles Gute zum Geburtstag!": {
    words: [
      ["Alles", "모든", "부정대명사 · 중성"],
      ["Gute", "좋은 것", "명사화 형용사 (das Gute)"],
      ["zum", "~에 (맞아)", "zu + dem 축약 (3격)"],
      ["Geburtstag", "생일", "der Geburtstag (남성)"],
    ],
    grammar: ["greetings-phrases", "contractions"],
  },
  "Frohe Weihnachten!": {
    words: [
      ["Frohe", "즐거운", "froh · 복수 어미 -e"],
      ["Weihnachten", "크리스마스", "Weihnachten (보통 복수 취급)"],
    ],
    grammar: ["greetings-phrases"],
  },
  "Gutes neues Jahr!": {
    words: [
      ["Gutes", "좋은", "gut · 중성 어미 -es"],
      ["neues", "새로운", "neu · 중성 어미 -es"],
      ["Jahr", "해", "das Jahr (중성)"],
    ],
    grammar: ["greetings-phrases"],
    note: "흔히 Frohes neues Jahr! 또는 Ein gutes neues Jahr!라고도 한다.",
  },
  "Guten Rutsch!": {
    words: [
      ["Guten", "좋은", "gut · 남성 4격 어미 -en"],
      ["Rutsch", "미끄러짐 (넘어감)", "der Rutsch (남성)"],
    ],
    grammar: ["greetings-phrases"],
    note: "'(새해로) 잘 미끄러져 넘어가라'는 뜻으로, 새해가 되기 전(연말)에만 쓰는 인사.",
  },
  "Gute Besserung!": {
    words: [
      ["Gute", "좋은", "gut · 여성 4격 어미 -e"],
      ["Besserung", "회복", "die Besserung (여성)"],
    ],
    grammar: ["greetings-phrases"],
  },
  "Danke schön!": {
    words: [
      ["Danke", "고마워요", "danken에서 온 감탄사"],
      ["schön", "(정중히) 정말", "강조 부사"],
    ],
    grammar: ["greetings-phrases"],
  },
  "Danke schön! Das ist sehr nett von dir.": {
    words: [
      ["Danke", "고마워요", "danken에서 온 감탄사"],
      ["schön", "(정중히) 정말", "강조 부사"],
      ["Das", "그것은", "지시대명사 1격"],
      ["ist", "~이다", "sein · es 현재형"],
      ["sehr", "매우", "정도 부사"],
      ["nett", "친절한", "형용사 · 서술 용법"],
      ["von", "~의 (행동으로서)", "3격 전치사"],
      ["dir", "너", "du의 3격"],
    ],
    grammar: ["greetings-phrases", "prep-dative", "adjectives-predicative"],
    note: "von dir는 반말 — 존댓말이면 Das ist sehr nett von Ihnen.",
  },

  // ── Lektion 52: 신체 ──
  "Man hört mit den Ohren.": {
    words: [
      ["Man", "사람은", "일반 주어 man"],
      ["hört", "듣는다", "hören · man(=er) 현재형"],
      ["mit", "~로 (도구)", "3격 전치사"],
      ["den", "(정관사)", "복수 3격 정관사"],
      ["Ohren", "귀", "복수 3격 (das Ohr → Ohren)"],
    ],
    grammar: ["man", "prep-dative", "plural"],
  },
  "Ich habe fünf Finger an jeder Hand.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["habe", "가지고 있다", "haben · ich 현재형"],
      ["fünf", "다섯", "숫자"],
      ["Finger", "손가락", "복수형 (der Finger → Finger)"],
      ["an", "~에 (붙어)", "전치사 an + 3격 (위치)"],
      ["jeder", "각각의", "jed- · 여성 3격"],
      ["Hand", "손", "die Hand (여성)"],
    ],
    grammar: ["two-way-prepositions", "plural", "dative"],
    note: "an은 위치(Wo?)를 나타내므로 3격: an jeder Hand.",
  },
  "Meine Haare sind ganz kurz und braun.": {
    words: [
      ["Meine", "나의", "소유관사 mein · 복수 1격"],
      ["Haare", "머리카락", "복수형 (das Haar → Haare)"],
      ["sind", "~이다", "sein · 복수 현재형"],
      ["ganz", "아주", "정도 부사"],
      ["kurz", "짧은", "형용사 · 서술 용법"],
      ["und", "그리고", "접속사"],
      ["braun", "갈색인", "형용사 · 서술 용법"],
    ],
    grammar: ["possessive", "adjectives-predicative", "plural"],
  },
  "Meine Augen sind blaugrün.": {
    words: [
      ["Meine", "나의", "소유관사 mein · 복수 1격"],
      ["Augen", "눈", "복수형 (das Auge → Augen)"],
      ["sind", "~이다", "sein · 복수 현재형"],
      ["blaugrün", "청록색인", "형용사 · 서술 용법"],
    ],
    grammar: ["possessive", "adjectives-predicative", "plural"],
  },
  "Zeigen Sie mir Ihren Arm.": {
    words: [
      ["Zeigen", "보여 주세요", "zeigen · Sie 명령형"],
      ["Sie", "당신이", "존칭 Sie (명령형)"],
      ["mir", "나에게", "ich의 3격"],
      ["Ihren", "당신의", "소유관사 Ihr · 남성 4격"],
      ["Arm", "팔", "der Arm (남성)"],
    ],
    grammar: ["imperative", "dative", "possessive"],
    note: "zeigen은 '누구에게(3격) 무엇을(4격)' 두 목적어를 취한다.",
  },
  "Öffnen Sie den Mund.": {
    words: [
      ["Öffnen", "여세요", "öffnen · Sie 명령형"],
      ["Sie", "당신이", "존칭 Sie (명령형)"],
      ["den", "(정관사)", "4격 남성 정관사"],
      ["Mund", "입", "der Mund (남성)"],
    ],
    grammar: ["imperative", "accusative"],
    note: "신체 부위에는 소유관사 대신 정관사를 흔히 쓴다 (den Mund = 당신의 입).",
  },
  "der Kopf": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Kopf", "머리", "der Kopf (남성)"],
    ],
    grammar: ["articles-gender"],
  },
  "das Gesicht": {
    words: [
      ["das", "(정관사)", "중성 1격"],
      ["Gesicht", "얼굴", "das Gesicht (중성)"],
    ],
    grammar: ["articles-gender"],
  },
  "das Auge (-n)": {
    words: [
      ["das", "(정관사)", "중성 1격"],
      ["Auge", "눈", "das Auge (중성)"],
      ["-n", "(복수 어미)", "복수 die Augen"],
    ],
    grammar: ["articles-gender", "plural"],
  },
  "die Nase": {
    words: [
      ["die", "(정관사)", "여성 1격"],
      ["Nase", "코", "die Nase (여성)"],
    ],
    grammar: ["articles-gender"],
  },
  "der Mund": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Mund", "입", "der Mund (남성)"],
    ],
    grammar: ["articles-gender"],
  },
  "das Ohr (-en)": {
    words: [
      ["das", "(정관사)", "중성 1격"],
      ["Ohr", "귀", "das Ohr (중성)"],
      ["-en", "(복수 어미)", "복수 die Ohren"],
    ],
    grammar: ["articles-gender", "plural"],
  },
  "der Hals": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Hals", "목", "der Hals (남성)"],
    ],
    grammar: ["articles-gender"],
  },
  "die Hand (¨-e)": {
    words: [
      ["die", "(정관사)", "여성 1격"],
      ["Hand", "손", "die Hand (여성)"],
      ["¨-e", "(복수 표시)", "움라우트 + e → die Hände"],
    ],
    grammar: ["articles-gender", "plural"],
    note: "사전식 복수 표시: ¨ 는 움라우트, -e 는 어미. Hand → Hände.",
  },
  "der Arm (-e)": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Arm", "팔", "der Arm (남성)"],
      ["-e", "(복수 어미)", "복수 die Arme"],
    ],
    grammar: ["articles-gender", "plural"],
  },
  "das Bein (-e)": {
    words: [
      ["das", "(정관사)", "중성 1격"],
      ["Bein", "다리", "das Bein (중성)"],
      ["-e", "(복수 어미)", "복수 die Beine"],
    ],
    grammar: ["articles-gender", "plural"],
  },
  "der Fuß (¨-e)": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Fuß", "발", "der Fuß (남성)"],
      ["¨-e", "(복수 표시)", "움라우트 + e → die Füße"],
    ],
    grammar: ["articles-gender", "plural"],
    note: "사전식 복수 표시: ¨ 는 움라우트, -e 는 어미. Fuß → Füße.",
  },
  "der Bauch": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Bauch", "배", "der Bauch (남성)"],
    ],
    grammar: ["articles-gender"],
  },
  "der Rücken": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Rücken", "등", "der Rücken (남성)"],
    ],
    grammar: ["articles-gender"],
  },
  "der Finger": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Finger", "손가락", "der Finger (남성)"],
    ],
    grammar: ["articles-gender"],
  },
  "das Knie": {
    words: [
      ["das", "(정관사)", "중성 1격"],
      ["Knie", "무릎", "das Knie (중성)"],
    ],
    grammar: ["articles-gender"],
  },
  "die Haare": {
    words: [
      ["die", "(정관사)", "복수 1격"],
      ["Haare", "머리카락", "복수형 (das Haar → Haare)"],
    ],
    grammar: ["plural"],
  },
  "die Lippen": {
    words: [
      ["die", "(정관사)", "복수 1격"],
      ["Lippen", "입술", "복수형 (die Lippe → Lippen)"],
    ],
    grammar: ["plural"],
  },
  "die Zunge": {
    words: [
      ["die", "(정관사)", "여성 1격"],
      ["Zunge", "혀", "die Zunge (여성)"],
    ],
    grammar: ["articles-gender"],
  },
  "der Oberschenkel": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Oberschenkel", "허벅지", "der Oberschenkel (남성)"],
    ],
    grammar: ["articles-gender"],
  },

  // ── Lektion 53: 병원·증상 ──
  "Was fehlt Ihnen denn?": {
    words: [
      ["Was", "무엇이", "의문사 (주어)"],
      ["fehlt", "부족하다, 탈이 나다", "fehlen · es 현재형"],
      ["Ihnen", "당신에게", "Sie의 3격"],
      ["denn", "(대체)", "어감 첨가어 (의문문)"],
    ],
    grammar: ["dative", "w-questions"],
    note: "직역 '당신에게 무엇이 모자랍니까?' → 의사가 '어디가 불편하세요?'라고 묻는 표현.",
  },
  "Ich habe Kopfschmerzen.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["habe", "가지고 있다", "haben · ich 현재형"],
      ["Kopfschmerzen", "두통", "복수형 (der Kopfschmerz)"],
    ],
    grammar: ["sein-haben", "plural"],
    note: "통증은 보통 복수형 -schmerzen으로 말한다.",
  },
  "Mein Kopf tut weh.": {
    words: [
      ["Mein", "나의", "소유관사 mein · 남성 1격"],
      ["Kopf", "머리", "der Kopf (남성)"],
      ["tut", "(아프게) 하다", "wehtun · er 현재형"],
      ["weh", "아프게", "분리동사 wehtun 의 일부"],
    ],
    grammar: ["separable-verbs", "possessive"],
    note: "아픈 신체 부위가 주어: '내 머리가 아프다'.",
  },
  "Ich habe einen schwachen Magen.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["habe", "가지고 있다", "haben · ich 현재형"],
      ["einen", "하나의", "부정관사 4격 (남성)"],
      ["schwachen", "약한", "schwach · 남성 4격 어미 -en"],
      ["Magen", "위(胃)", "der Magen (남성)"],
    ],
    grammar: ["accusative", "sein-haben"],
  },
  "Mir ist schwindelig.": {
    words: [
      ["Mir", "나에게", "ich의 3격"],
      ["ist", "~이다", "sein · es 현재형"],
      ["schwindelig", "어지러운", "형용사 · 서술 용법"],
    ],
    grammar: ["dative", "es-gibt-impersonal"],
    note: "주어 없이 3격으로 느낌을 말하는 구조 (= Es ist mir schwindelig). Ich bin schwindelig라고 하지 않는다.",
  },
  "Mir ist nicht gut.": {
    words: [
      ["Mir", "나에게", "ich의 3격"],
      ["ist", "~이다", "sein · es 현재형"],
      ["nicht", "~않다", "부정어"],
      ["gut", "좋은", "형용사 · 서술 용법"],
    ],
    grammar: ["dative", "negation"],
    note: "Mir ist nicht gut = 몸(속)이 안 좋다. Ich bin nicht gut은 '나는 (실력이) 좋지 않다'는 다른 뜻.",
  },
  "Ich bin hingefallen und nun tut mir mein Fuß weh.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["bin", "(완료 조동사)", "sein · 완료 조동사"],
      ["hingefallen", "넘어졌다", "과거분사 (hinfallen)"],
      ["und", "그리고", "접속사"],
      ["nun", "이제", "시간 부사 (문두 → 도치)"],
      ["tut", "(아프게) 하다", "wehtun · er 현재형"],
      ["mir", "나에게", "ich의 3격"],
      ["mein", "나의", "소유관사 mein · 남성 1격"],
      ["Fuß", "발", "der Fuß (남성)"],
      ["weh", "아프게", "분리동사 wehtun 의 일부"],
    ],
    grammar: ["perfekt", "separable-verbs", "word-order"],
    note: "hinfallen은 분리동사라 과거분사가 hin-ge-fallen. und 뒤에서 nun이 앞에 와 동사 tut가 주어보다 먼저 온다.",
  },
  "Ich habe Fieber.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["habe", "가지고 있다", "haben · ich 현재형"],
      ["Fieber", "열", "das Fieber (중성) · 무관사"],
    ],
    grammar: ["sein-haben"],
  },
  "Was hilft gegen Husten?": {
    words: [
      ["Was", "무엇이", "의문사 (주어)"],
      ["hilft", "도움이 되다", "helfen · es 현재형 (e→i)"],
      ["gegen", "~에 맞서, ~에", "4격 전치사"],
      ["Husten", "기침", "der Husten (남성) · 무관사"],
    ],
    grammar: ["prep-accusative", "stem-change", "w-questions"],
  },
  "Bei Husten hilft Tee mit Honig.": {
    words: [
      ["Bei", "~일 때", "3격 전치사"],
      ["Husten", "기침", "der Husten (남성) · 무관사"],
      ["hilft", "도움이 되다", "helfen · er 현재형 (e→i)"],
      ["Tee", "차", "der Tee (남성) · 무관사"],
      ["mit", "~을 넣은", "3격 전치사"],
      ["Honig", "꿀", "der Honig (남성) · 무관사"],
    ],
    grammar: ["prep-dative", "stem-change", "word-order"],
    note: "Bei Husten이 문두에 와서 동사 hilft 뒤에 주어 Tee가 온다.",
  },
  "Tut es weh?": {
    words: [
      ["Tut", "(아프게) 하다", "wehtun · es 현재형"],
      ["es", "그것이", "인칭대명사 1격 (중성)"],
      ["weh", "아프게", "분리동사 wehtun 의 일부"],
    ],
    grammar: ["separable-verbs", "yes-no-questions"],
  },
  "die Schmerzen": {
    words: [
      ["die", "(정관사)", "복수 1격"],
      ["Schmerzen", "통증", "복수형 (der Schmerz → Schmerzen)"],
    ],
    grammar: ["plural"],
  },
  "der Kopfschmerz": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Kopfschmerz", "두통", "der Kopfschmerz (남성)"],
    ],
    grammar: ["articles-gender"],
    note: "합성명사의 성은 마지막 명사(der Schmerz)를 따른다.",
  },
  "der Bauchschmerz": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Bauchschmerz", "복통", "der Bauchschmerz (남성)"],
    ],
    grammar: ["articles-gender"],
  },
  "der Rückenschmerz": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Rückenschmerz", "등·허리 통증", "der Rückenschmerz (남성)"],
    ],
    grammar: ["articles-gender"],
  },
  "das Fieber": {
    words: [
      ["das", "(정관사)", "중성 1격"],
      ["Fieber", "열", "das Fieber (중성)"],
    ],
    grammar: ["articles-gender"],
  },
  "der Husten": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Husten", "기침", "der Husten (남성)"],
    ],
    grammar: ["articles-gender"],
  },
  "der Schnupfen": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Schnupfen", "코감기, 콧물", "der Schnupfen (남성)"],
    ],
    grammar: ["articles-gender"],
  },
  "der Magen": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Magen", "위(胃)", "der Magen (남성)"],
    ],
    grammar: ["articles-gender"],
  },
  "Was fehlt Ihnen?": {
    words: [
      ["Was", "무엇이", "의문사 (주어)"],
      ["fehlt", "부족하다, 탈이 나다", "fehlen · es 현재형"],
      ["Ihnen", "당신에게", "Sie의 3격"],
    ],
    grammar: ["dative", "w-questions"],
    note: "의사가 증상을 물을 때 쓰는 고정 표현.",
  },
  "Ich habe starke Kopfschmerzen und Fieber.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["habe", "가지고 있다", "haben · ich 현재형"],
      ["starke", "심한", "stark · 복수 4격 어미 -e"],
      ["Kopfschmerzen", "두통", "복수형 (der Kopfschmerz)"],
      ["und", "그리고", "접속사"],
      ["Fieber", "열", "das Fieber (중성) · 무관사"],
    ],
    grammar: ["sein-haben", "plural", "accusative"],
  },
  "Seit wann?": {
    words: [
      ["Seit", "~부터", "3격 전치사"],
      ["wann", "언제", "의문사"],
    ],
    grammar: ["time-prepositions", "w-questions"],
  },
  "Seit gestern.": {
    words: [
      ["Seit", "~부터", "3격 전치사"],
      ["gestern", "어제", "시간 부사"],
    ],
    grammar: ["time-prepositions"],
  },

  // ── Lektion 54: 외모 묘사 ──
  "Wie sieht er/sie aus?": {
    words: [
      ["Wie", "어떻게", "의문사"],
      ["sieht", "보이다", "aussehen · er 현재형 (e→ie)"],
      ["er/sie", "그는 / 그녀는", "인칭대명사 1격"],
      ["aus", "(생김새)", "분리동사 aussehen 의 접두사"],
    ],
    grammar: ["separable-verbs", "stem-change", "w-questions"],
  },
  "Er ist groß und schlank.": {
    words: [
      ["Er", "그는", "인칭대명사 1격"],
      ["ist", "~이다", "sein · er 현재형"],
      ["groß", "키가 큰", "형용사 · 서술 용법"],
      ["und", "그리고", "접속사"],
      ["schlank", "날씬한", "형용사 · 서술 용법"],
    ],
    grammar: ["adjectives-predicative", "sein-haben"],
  },
  "Sie hat lange, blonde Haare.": {
    words: [
      ["Sie", "그녀는", "인칭대명사 1격 (sie)"],
      ["hat", "가지고 있다", "haben · sie 현재형"],
      ["lange", "긴", "lang · 복수 4격 어미 -e"],
      ["blonde", "금발의", "blond · 복수 4격 어미 -e"],
      ["Haare", "머리카락", "복수형 (das Haar → Haare)"],
    ],
    grammar: ["sein-haben", "plural", "accusative"],
    note: "명사 앞에 오는 형용사는 어미가 붙는다 (관사 없는 복수 → -e).",
  },
  "Sie hat welliges Haar.": {
    words: [
      ["Sie", "그녀는", "인칭대명사 1격 (sie)"],
      ["hat", "가지고 있다", "haben · sie 현재형"],
      ["welliges", "웨이브진", "wellig · 중성 4격 어미 -es"],
      ["Haar", "머리(카락)", "das Haar (중성) · 단수 집합"],
    ],
    grammar: ["sein-haben", "accusative"],
    note: "머리카락 전체를 단수 das Haar로도, 복수 die Haare로도 말한다.",
  },
  "Er hat Locken.": {
    words: [
      ["Er", "그는", "인칭대명사 1격"],
      ["hat", "가지고 있다", "haben · er 현재형"],
      ["Locken", "곱슬머리", "복수형 (die Locke → Locken)"],
    ],
    grammar: ["sein-haben", "plural"],
  },
  "Er hat eine Brille.": {
    words: [
      ["Er", "그는", "인칭대명사 1격"],
      ["hat", "가지고 있다", "haben · er 현재형"],
      ["eine", "하나의", "부정관사 4격 (여성)"],
      ["Brille", "안경", "die Brille (여성)"],
    ],
    grammar: ["sein-haben", "accusative"],
    note: "Er trägt eine Brille (안경을 쓰고 있다)라고도 한다. Brille는 단수 여성명사.",
  },
  "Der Mann trägt eine Mütze.": {
    words: [
      ["Der", "그", "남성 1격 정관사"],
      ["Mann", "남자", "der Mann (남성)"],
      ["trägt", "착용하다, 쓰다", "tragen · er 현재형 (a→ä)"],
      ["eine", "하나의", "부정관사 4격 (여성)"],
      ["Mütze", "(털)모자", "die Mütze (여성)"],
    ],
    grammar: ["stem-change", "accusative"],
    note: "tragen은 옷·모자·안경 등 몸에 걸치는 모든 것에 쓴다 (입다/쓰다/끼다).",
  },
  "Er sieht glücklich aus.": {
    words: [
      ["Er", "그는", "인칭대명사 1격"],
      ["sieht", "보이다", "aussehen · er 현재형 (e→ie)"],
      ["glücklich", "행복한", "형용사 · 서술 용법"],
      ["aus", "(~해 보이다)", "분리동사 aussehen 의 접두사"],
    ],
    grammar: ["separable-verbs", "stem-change", "adjectives-predicative"],
  },
  "Er sieht traurig aus.": {
    words: [
      ["Er", "그는", "인칭대명사 1격"],
      ["sieht", "보이다", "aussehen · er 현재형 (e→ie)"],
      ["traurig", "슬픈", "형용사 · 서술 용법"],
      ["aus", "(~해 보이다)", "분리동사 aussehen 의 접두사"],
    ],
    grammar: ["separable-verbs", "stem-change", "adjectives-predicative"],
  },
  "Er hat blaue Augen.": {
    words: [
      ["Er", "그는", "인칭대명사 1격"],
      ["hat", "가지고 있다", "haben · er 현재형"],
      ["blaue", "파란", "blau · 복수 4격 어미 -e"],
      ["Augen", "눈", "복수형 (das Auge → Augen)"],
    ],
    grammar: ["sein-haben", "plural", "accusative"],
  },
  "das Haar": {
    words: [
      ["das", "(정관사)", "중성 1격"],
      ["Haar", "머리카락", "das Haar (중성)"],
    ],
    grammar: ["articles-gender"],
  },
  "die Brille": {
    words: [
      ["die", "(정관사)", "여성 1격"],
      ["Brille", "안경", "die Brille (여성)"],
    ],
    grammar: ["articles-gender"],
  },
  "die Locken": {
    words: [
      ["die", "(정관사)", "복수 1격"],
      ["Locken", "곱슬머리", "복수형 (die Locke → Locken)"],
    ],
    grammar: ["plural"],
  },
  "Wie sieht dein Freund aus?": {
    words: [
      ["Wie", "어떻게", "의문사"],
      ["sieht", "보이다", "aussehen · er 현재형 (e→ie)"],
      ["dein", "너의", "소유관사 dein · 남성 1격"],
      ["Freund", "남자친구", "der Freund (남성)"],
      ["aus", "(생김새)", "분리동사 aussehen 의 접두사"],
    ],
    grammar: ["separable-verbs", "possessive", "w-questions"],
    note: "mein/dein Freund는 문맥에 따라 '남자친구' 또는 그냥 '(남자인) 친구'.",
  },
  "Er ist groß, hat kurze, dunkle Haare und braune Augen.": {
    words: [
      ["Er", "그는", "인칭대명사 1격"],
      ["ist", "~이다", "sein · er 현재형"],
      ["groß", "키가 큰", "형용사 · 서술 용법"],
      ["hat", "가지고 있다", "haben · er 현재형"],
      ["kurze", "짧은", "kurz · 복수 4격 어미 -e"],
      ["dunkle", "어두운 색의", "dunkel · 복수 4격 (e 탈락)"],
      ["Haare", "머리카락", "복수형 (das Haar → Haare)"],
      ["und", "그리고", "접속사"],
      ["braune", "갈색의", "braun · 복수 4격 어미 -e"],
      ["Augen", "눈", "복수형 (das Auge → Augen)"],
    ],
    grammar: ["adjectives-predicative", "sein-haben", "plural"],
    note: "dunkel + -e → dunkle (어간의 e가 빠진다).",
  },

  // ── Lektion 55: 색깔 ──
  "Welche Farbe hat ...?": {
    words: [
      ["Welche", "어떤", "의문사 welch- · 여성 4격"],
      ["Farbe", "색깔", "die Farbe (여성)"],
      ["hat", "가지고 있다", "haben · er/es 현재형"],
    ],
    grammar: ["w-questions", "sein-haben"],
    note: "직역 '…은 어떤 색을 가지고 있나요?' — 색을 물을 때 haben을 쓴다.",
  },
  "Es ist rot.": {
    words: [
      ["Es", "그것은", "인칭대명사 1격 (중성)"],
      ["ist", "~이다", "sein · es 현재형"],
      ["rot", "빨간", "형용사 · 서술 용법"],
    ],
    grammar: ["adjectives-predicative"],
  },
  "Ich mag die blaue Jacke.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["mag", "좋아하다", "mögen · ich 형"],
      ["die", "그", "4격 여성 정관사"],
      ["blaue", "파란", "blau · 정관사 뒤 여성 4격 -e"],
      ["Jacke", "재킷", "die Jacke (여성)"],
    ],
    grammar: ["moegen-moechten", "accusative"],
  },
  "Das schwarze Kleid steht dir super!": {
    words: [
      ["Das", "그", "중성 1격 정관사"],
      ["schwarze", "검은", "schwarz · 정관사 뒤 중성 1격 -e"],
      ["Kleid", "원피스", "das Kleid (중성)"],
      ["steht", "어울리다", "stehen · es 현재형"],
      ["dir", "너에게", "du의 3격"],
      ["super", "아주 잘", "부사 (구어)"],
    ],
    grammar: ["dative"],
    note: "stehen + 3격 = (옷 등이) ~에게 어울리다. 옷이 주어, 사람이 3격.",
  },
  "Der Himmel ist blau.": {
    words: [
      ["Der", "(정관사)", "남성 1격"],
      ["Himmel", "하늘", "der Himmel (남성)"],
      ["ist", "~이다", "sein · er 현재형"],
      ["blau", "파란", "형용사 · 서술 용법"],
    ],
    grammar: ["adjectives-predicative"],
  },
  "Das Brot ist braun.": {
    words: [
      ["Das", "(정관사)", "중성 1격"],
      ["Brot", "빵", "das Brot (중성)"],
      ["ist", "~이다", "sein · es 현재형"],
      ["braun", "갈색인", "형용사 · 서술 용법"],
    ],
    grammar: ["adjectives-predicative"],
  },
  "lila / violett": {
    words: [
      ["lila", "보라색의", "형용사 (어미 안 붙음)"],
      ["violett", "보라색의", "형용사"],
    ],
    grammar: ["adjectives-predicative"],
  },
  "Welche Farbe magst du am liebsten?": {
    words: [
      ["Welche", "어떤", "의문사 welch- · 여성 4격"],
      ["Farbe", "색깔", "die Farbe (여성)"],
      ["magst", "좋아하다", "mögen · du 형"],
      ["du", "너는", "인칭대명사 1격"],
      ["am", "(최상급)", "am + -sten 최상급"],
      ["liebsten", "가장 좋아하여", "gern 의 최상급"],
    ],
    grammar: ["gern", "moegen-moechten", "w-questions"],
  },
  "Ich mag Blau am liebsten. Und du?": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["mag", "좋아하다", "mögen · ich 형"],
      ["Blau", "파란색", "das Blau (중성) · 색 명사"],
      ["am", "(최상급)", "am + -sten 최상급"],
      ["liebsten", "가장 좋아하여", "gern 의 최상급"],
      ["Und", "그리고", "접속사"],
      ["du", "너는", "인칭대명사 1격"],
    ],
    grammar: ["gern", "moegen-moechten"],
    note: "색 이름을 명사로 쓰면 대문자: das Blau, das Grün.",
  },
  "Ich mag Grün.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["mag", "좋아하다", "mögen · ich 형"],
      ["Grün", "초록색", "das Grün (중성) · 색 명사"],
    ],
    grammar: ["moegen-moechten"],
  },

  // ── Lektion 56: 소유관사 ──
  "Das ist mein Buch.": {
    words: [
      ["Das", "이것은", "지시대명사 1격"],
      ["ist", "~이다", "sein · es 현재형"],
      ["mein", "나의", "소유관사 mein · 중성 1격"],
      ["Buch", "책", "das Buch (중성)"],
    ],
    grammar: ["possessive"],
  },
  "Das ist dein Stift.": {
    words: [
      ["Das", "이것은", "지시대명사 1격"],
      ["ist", "~이다", "sein · es 현재형"],
      ["dein", "너의", "소유관사 dein · 남성 1격"],
      ["Stift", "펜", "der Stift (남성)"],
    ],
    grammar: ["possessive"],
  },
  "Das ist sein Auto.": {
    words: [
      ["Das", "이것은", "지시대명사 1격"],
      ["ist", "~이다", "sein · es 현재형"],
      ["sein", "그의", "소유관사 sein · 중성 1격"],
      ["Auto", "자동차", "das Auto (중성)"],
    ],
    grammar: ["possessive"],
    note: "여기서 sein은 동사 '~이다'가 아니라 소유관사 '그의'.",
  },
  "Das ist ihr Handy.": {
    words: [
      ["Das", "이것은", "지시대명사 1격"],
      ["ist", "~이다", "sein · es 현재형"],
      ["ihr", "그녀의", "소유관사 ihr · 중성 1격"],
      ["Handy", "휴대폰", "das Handy (중성)"],
    ],
    grammar: ["possessive"],
    note: "소문자 ihr = 그녀의/그들의, 대문자 Ihr = 당신의.",
  },
  "Das ist unser Haus.": {
    words: [
      ["Das", "이것은", "지시대명사 1격"],
      ["ist", "~이다", "sein · es 현재형"],
      ["unser", "우리의", "소유관사 unser · 중성 1격"],
      ["Haus", "집", "das Haus (중성)"],
    ],
    grammar: ["possessive"],
  },
  "Das ist Ihr Platz.": {
    words: [
      ["Das", "이것은", "지시대명사 1격"],
      ["ist", "~이다", "sein · es 현재형"],
      ["Ihr", "당신의", "소유관사 Ihr · 남성 1격"],
      ["Platz", "자리", "der Platz (남성)"],
    ],
    grammar: ["possessive", "formal-informal"],
  },
  "Ich kann meinen Pass nicht finden.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["kann", "~할 수 있다", "können · ich 형"],
      ["meinen", "나의", "소유관사 mein · 남성 4격"],
      ["Pass", "여권", "der Pass (남성)"],
      ["nicht", "~않다", "부정어"],
      ["finden", "찾다", "finden · 원형 (문장 끝)"],
    ],
    grammar: ["possessive", "modal-verbs", "negation"],
  },
  "Michael besucht seinen Onkel in Paris.": {
    words: [
      ["Michael", "(이름) 미하엘", "남성 이름"],
      ["besucht", "방문하다", "besuchen · er 현재형"],
      ["seinen", "그의", "소유관사 sein · 남성 4격"],
      ["Onkel", "삼촌", "der Onkel (남성)"],
      ["in", "~에 (있는)", "전치사 in + 3격 (도시)"],
      ["Paris", "(도시) 파리", "지명 · 무관사"],
    ],
    grammar: ["possessive", "accusative"],
  },
  "Susanne schreibt ihrer Freundin eine E-Mail.": {
    words: [
      ["Susanne", "(이름) 주자네", "여성 이름"],
      ["schreibt", "쓰다", "schreiben · sie 현재형"],
      ["ihrer", "그녀의 (~에게)", "소유관사 ihr · 여성 3격"],
      ["Freundin", "(여자) 친구", "die Freundin (여성)"],
      ["eine", "한 통의", "부정관사 4격 (여성)"],
      ["E-Mail", "이메일", "die E-Mail (여성)"],
    ],
    grammar: ["possessive", "dative", "accusative"],
    note: "받는 사람은 3격(ihrer Freundin), 보내는 것은 4격(eine E-Mail). 3격이 4격 명사보다 앞에 온다.",
  },
  "Unser Zug fährt gleich.": {
    words: [
      ["Unser", "우리의", "소유관사 unser · 남성 1격"],
      ["Zug", "기차", "der Zug (남성)"],
      ["fährt", "떠나다", "fahren · er 현재형 (a→ä)"],
      ["gleich", "곧", "시간 부사"],
    ],
    grammar: ["possessive", "stem-change"],
  },
  "Ist das dein Handy?": {
    words: [
      ["Ist", "~이다", "sein · es 현재형"],
      ["das", "이것은", "지시대명사 1격"],
      ["dein", "너의", "소유관사 dein · 중성 1격"],
      ["Handy", "휴대폰", "das Handy (중성)"],
    ],
    grammar: ["possessive", "yes-no-questions"],
  },
  "Nein, das ist nicht mein Handy. Mein Handy ist schwarz.": {
    words: [
      ["Nein", "아니", "대답"],
      ["das", "이것은", "지시대명사 1격"],
      ["ist", "~이다", "sein · es 현재형"],
      ["nicht", "~아니다", "부정어"],
      ["mein", "나의", "소유관사 mein · 중성 1격"],
      ["Handy", "휴대폰", "das Handy (중성)"],
      ["Mein", "나의", "소유관사 mein · 중성 1격"],
      ["Handy", "휴대폰", "das Handy (중성)"],
      ["ist", "~이다", "sein · es 현재형"],
      ["schwarz", "검은", "형용사 · 서술 용법"],
    ],
    grammar: ["possessive", "negation", "adjectives-predicative"],
    note: "소유관사가 붙은 명사는 kein이 아니라 nicht로 부정한다.",
  },
};
