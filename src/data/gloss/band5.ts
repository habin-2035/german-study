import type { SentenceGloss } from "@/lib/gloss";

export const BAND5: Record<string, SentenceGloss> = {
  // ── Lektion 29: 약속 취소·변경 ──
  "Ich muss leider absagen.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["muss", "~해야 한다", "müssen · ich 형"],
      ["leider", "유감스럽게도", "부사"],
      ["absagen", "취소하다", "분리동사 absagen · 원형"],
    ],
    grammar: ["modal-verbs", "separable-verbs", "sentence-bracket"],
    note: "화법조동사와 함께 쓰면 분리동사는 분리되지 않고 원형 그대로 문장 끝에 온다.",
  },
  "Ich kann leider doch nicht ins Kino gehen.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["kann", "~할 수 있다", "können · ich 형"],
      ["leider", "아쉽게도", "부사"],
      ["doch", "(예정과 달리) 결국", "부사 · 기대와 반대"],
      ["nicht", "~않다", "부정어"],
      ["ins", "~(안)으로", "in + das 축약 · 이동 4격"],
      ["Kino", "영화관", "das Kino (중성)"],
      ["gehen", "가다", "gehen · 원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "negation", "contractions"],
    note: "doch는 '원래 가기로 했지만 결국'이라는 뉘앙스를 더한다.",
  },
  "Können wir den Termin verschieben?": {
    words: [
      ["Können", "~할 수 있다", "können · wir 형"],
      ["wir", "우리가", "인칭대명사 1격"],
      ["den", "그 (약속을)", "4격 남성 정관사"],
      ["Termin", "약속, 일정", "der Termin (남성)"],
      ["verschieben", "미루다", "verschieben · 원형"],
    ],
    grammar: ["modal-verbs", "yes-no-questions", "accusative"],
  },
  "Können wir es verschieben?": {
    words: [
      ["Können", "~할 수 있다", "können · wir 형"],
      ["wir", "우리가", "인칭대명사 1격"],
      ["es", "그것을", "인칭대명사 4격 (중성)"],
      ["verschieben", "미루다", "verschieben · 원형"],
    ],
    grammar: ["modal-verbs", "yes-no-questions", "personal-pronouns"],
  },
  "Passt dir das?": {
    words: [
      ["Passt", "맞다, 괜찮다", "passen · es 현재형"],
      ["dir", "너에게", "du의 3격"],
      ["das", "그것이", "지시대명사 1격 (주어)"],
    ],
    grammar: ["dative", "yes-no-questions"],
    note: "passen은 3격을 취한다: '그게 너에게 맞니?' → 시간/일정이 괜찮은지 묻는 표현.",
  },
  "Hast du Lust?": {
    words: [
      ["Hast", "가지고 있다", "haben · du 현재형"],
      ["du", "너는", "인칭대명사 1격"],
      ["Lust", "하고 싶은 마음", "die Lust (여성)"],
    ],
    grammar: ["sein-haben", "yes-no-questions", "greetings-phrases"],
    note: "직역 '너 의욕 있어?' → '할래?/생각 있어?'라는 제안 표현. 뒤에 auf + 4격이나 zu + 원형을 붙일 수 있다.",
  },
  "Was ist denn passiert?": {
    words: [
      ["Was", "무엇이", "의문사 (주어)"],
      ["ist", "(완료 조동사)", "sein · 완료 조동사"],
      ["denn", "도대체", "어감 첨가어 (의문문)"],
      ["passiert", "일어났다", "과거분사 (passieren)"],
    ],
    grammar: ["perfekt", "w-questions"],
    note: "passieren은 -ieren 동사라 ge- 없이 passiert, 상태 변화라 sein과 완료형을 만든다.",
  },
  "Das tut mir leid.": {
    words: [
      ["Das", "그것이", "지시대명사 1격"],
      ["tut", "(~하게) 하다", "tun · es 현재형"],
      ["mir", "나에게", "ich의 3격"],
      ["leid", "유감스러운", "leidtun 의 일부"],
    ],
    grammar: ["greetings-phrases", "dative"],
    note: "leidtun + 3격: '그것이 나에게 유감이다' → 미안해요/안타깝네요. 사과와 위로 모두에 쓴다.",
  },
  "Kein Problem!": {
    words: [
      ["Kein", "없는", "부정관사 kein · 중성 1격"],
      ["Problem", "문제", "das Problem (중성)"],
    ],
    grammar: ["greetings-phrases", "negation"],
  },
  "Ich muss unsere Verabredung leider absagen. Ich bin krank.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["muss", "~해야 한다", "müssen · ich 형"],
      ["unsere", "우리의", "소유관사 unser · 여성 4격"],
      ["Verabredung", "약속", "die Verabredung (여성)"],
      ["leider", "유감스럽게도", "부사"],
      ["absagen", "취소하다", "분리동사 absagen · 원형"],
      ["Ich", "나는", "인칭대명사 1격"],
      ["bin", "~이다", "sein · ich 현재형"],
      ["krank", "아픈", "형용사 · 서술 용법"],
    ],
    grammar: ["modal-verbs", "possessive", "sentence-bracket"],
  },
  "Das tut mir leid. Gute Besserung!": {
    words: [
      ["Das", "그것이", "지시대명사 1격"],
      ["tut", "(~하게) 하다", "tun · es 현재형"],
      ["mir", "나에게", "ich의 3격"],
      ["leid", "유감스러운", "leidtun 의 일부"],
      ["Gute", "좋은", "형용사 · 여성 4격 어미 -e"],
      ["Besserung", "회복", "die Besserung (여성)"],
    ],
    grammar: ["greetings-phrases", "dative"],
    note: "Gute Besserung!은 '(당신에게) 좋은 회복을 (빈다)'의 줄임 — 아픈 사람에게 하는 인사.",
  },

  // ── Lektion 30: 날짜 ──
  "Welches Datum ist heute?": {
    words: [
      ["Welches", "어느, 무슨", "의문사 welch- · 중성 1격"],
      ["Datum", "날짜", "das Datum (중성)"],
      ["ist", "~이다", "sein · es 현재형"],
      ["heute", "오늘", "시간 부사"],
    ],
    grammar: ["dates-ordinal", "w-questions"],
  },
  "Der Wievielte ist heute?": {
    words: [
      ["Der", "(정관사)", "남성 1격 (der Tag 생략)"],
      ["Wievielte", "몇 번째 (날)", "의문 서수 · 명사화"],
      ["ist", "~이다", "sein · es 현재형"],
      ["heute", "오늘", "시간 부사"],
    ],
    grammar: ["dates-ordinal", "w-questions"],
    note: "'오늘은 몇 번째 (날)인가?' — 대답도 서수로: Heute ist der fünfzehnte.",
  },
  "Den Wievielten haben wir heute?": {
    words: [
      ["Den", "(정관사)", "남성 4격"],
      ["Wievielten", "몇 번째 (날)를", "의문 서수 · 4격 어미 -en"],
      ["haben", "가지고 있다", "haben · wir 현재형"],
      ["wir", "우리는", "인칭대명사 1격"],
      ["heute", "오늘", "시간 부사"],
    ],
    grammar: ["dates-ordinal", "accusative"],
    note: "haben의 목적어라 4격 den ...-en. 대답: Heute haben wir den fünfzehnten.",
  },
  "Heute ist der 15. Mai.": {
    words: [
      ["Heute", "오늘", "시간 부사 (문두 → 도치)"],
      ["ist", "~이다", "sein · es 현재형"],
      ["der", "(정관사)", "남성 1격"],
      ["15", "15번째 (날)", "서수 fünfzehnte"],
      ["Mai", "5월", "der Mai (남성)"],
    ],
    grammar: ["dates-ordinal", "word-order"],
    note: "숫자 뒤 점(15.)은 서수 표시 — 'der fünfzehnte Mai'라고 읽는다.",
  },
  "Wann ist dein Geburtstag?": {
    words: [
      ["Wann", "언제", "의문사"],
      ["ist", "~이다", "sein · er 현재형"],
      ["dein", "너의", "소유관사 dein · 남성 1격"],
      ["Geburtstag", "생일", "der Geburtstag (남성)"],
    ],
    grammar: ["w-questions", "possessive", "dates-ordinal"],
  },
  "Ich habe am elften März Geburtstag.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["habe", "가지다", "haben · ich 현재형"],
      ["am", "~에 (날짜)", "an + dem 축약 (3격)"],
      ["elften", "11번째", "서수 elft- · 3격 어미 -en"],
      ["März", "3월", "der März (남성)"],
      ["Geburtstag", "생일", "der Geburtstag (남성) · 무관사"],
    ],
    grammar: ["dates-ordinal", "time-prepositions", "contractions"],
    note: "'Geburtstag haben' = 생일이다. 날짜 앞에는 am + 서수 -en.",
  },
  "Mein Geburtstag ist am 3. März.": {
    words: [
      ["Mein", "나의", "소유관사 mein · 남성 1격"],
      ["Geburtstag", "생일", "der Geburtstag (남성)"],
      ["ist", "~이다", "sein · er 현재형"],
      ["am", "~에 (날짜)", "an + dem 축약 (3격)"],
      ["3", "3번째 (날)", "서수 dritten (am 뒤 -en)"],
      ["März", "3월", "der März (남성)"],
    ],
    grammar: ["dates-ordinal", "possessive", "time-prepositions"],
    note: "am 3. März는 'am dritten März'로 읽는다 (dritt- 불규칙 서수).",
  },
  "Ich bin vom 5. bis zum 10. Mai in Berlin.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["bin", "있다", "sein · ich 현재형"],
      ["vom", "~부터", "von + dem 축약 (3격)"],
      ["5", "5번째 (날)", "서수 fünften"],
      ["bis", "~까지", "전치사"],
      ["zum", "~까지 (그 날)", "zu + dem 축약 (3격)"],
      ["10", "10번째 (날)", "서수 zehnten"],
      ["Mai", "5월", "der Mai (남성)"],
      ["in", "~에 (장소)", "전치사 in + 3격 (도시)"],
      ["Berlin", "(도시) 베를린", "지명 · 무관사"],
    ],
    grammar: ["time-prepositions", "dates-ordinal", "contractions"],
    note: "읽을 때: vom fünften bis zum zehnten Mai.",
  },
  "Am 20. Juni. Und deiner?": {
    words: [
      ["Am", "~에 (날짜)", "an + dem 축약 (3격)"],
      ["20", "20번째 (날)", "서수 zwanzigsten"],
      ["Juni", "6월", "der Juni (남성)"],
      ["Und", "그리고", "접속사"],
      ["deiner", "너의 것은", "소유대명사 · 남성 1격"],
    ],
    grammar: ["dates-ordinal", "possessive"],
    note: "deiner = dein Geburtstag. 명사 없이 홀로 쓰면 남성 1격은 -er 어미가 붙는다.",
  },
  "Meiner ist am 5. November.": {
    words: [
      ["Meiner", "내 것은", "소유대명사 · 남성 1격"],
      ["ist", "~이다", "sein · er 현재형"],
      ["am", "~에 (날짜)", "an + dem 축약 (3격)"],
      ["5", "5번째 (날)", "서수 fünften"],
      ["November", "11월", "der November (남성)"],
    ],
    grammar: ["possessive", "dates-ordinal"],
    note: "Meiner = mein Geburtstag (남성 명사를 대신하므로 -er).",
  },

  // ── Lektion 31: 편지·이메일 ──
  "Liebe Anna,": {
    words: [
      ["Liebe", "친애하는", "lieb · 여성 1격 어미 -e"],
      ["Anna", "(이름) 안나", "여성 이름"],
    ],
    grammar: ["greetings-phrases"],
    note: "여자에게는 Liebe, 남자에게는 Lieber — 친한 사이의 편지 첫인사.",
  },
  "Lieber Max,": {
    words: [
      ["Lieber", "친애하는", "lieb · 남성 1격 어미 -er"],
      ["Max", "(이름) 막스", "남성 이름"],
    ],
    grammar: ["greetings-phrases"],
  },
  "Sehr geehrte Frau Mayer,": {
    words: [
      ["Sehr", "매우", "부사"],
      ["geehrte", "존경하는", "geehrt · 여성 어미 -e"],
      ["Frau", "~씨 (여성)", "die Frau (여성) · 호칭"],
      ["Mayer", "(성) 마이어", "성(姓)"],
    ],
    grammar: ["greetings-phrases", "formal-informal"],
    note: "격식 편지 첫인사. 성(姓)과 함께 쓰고, 여성은 geehrte, 남성은 geehrter.",
  },
  "Sehr geehrter Herr Mayer,": {
    words: [
      ["Sehr", "매우", "부사"],
      ["geehrter", "존경하는", "geehrt · 남성 어미 -er"],
      ["Herr", "~씨 (남성)", "der Herr (남성) · 호칭"],
      ["Mayer", "(성) 마이어", "성(姓)"],
    ],
    grammar: ["greetings-phrases", "formal-informal"],
  },
  "Sehr geehrte Damen und Herren,": {
    words: [
      ["Sehr", "매우", "부사"],
      ["geehrte", "존경하는", "geehrt · 복수 어미 -e"],
      ["Damen", "숙녀분들", "복수형 (die Dame → Damen)"],
      ["und", "그리고", "접속사"],
      ["Herren", "신사분들", "복수형 (der Herr → Herren)"],
    ],
    grammar: ["greetings-phrases", "formal-informal"],
    note: "받는 사람 이름을 모를 때 쓰는 격식 인사 ('관계자분께').",
  },
  "Vielen Dank für deinen Brief.": {
    words: [
      ["Vielen", "많은", "viel · 남성 4격 어미 -en"],
      ["Dank", "감사", "der Dank (남성)"],
      ["für", "~에 대해", "4격 전치사"],
      ["deinen", "너의", "소유관사 dein · 남성 4격"],
      ["Brief", "편지", "der Brief (남성)"],
    ],
    grammar: ["prep-accusative", "possessive", "greetings-phrases"],
    note: "Vielen Dank는 '(Ich sage) vielen Dank'의 줄임이라 4격 -en 어미가 붙는다.",
  },
  "Ich freue mich auf deine Antwort.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["freue", "기뻐하다", "sich freuen · ich 현재형"],
      ["mich", "(나 자신을)", "재귀대명사 4격"],
      ["auf", "~을 (기대하며)", "auf + 4격 (freuen auf)"],
      ["deine", "너의", "소유관사 dein · 여성 4격"],
      ["Antwort", "답장", "die Antwort (여성)"],
    ],
    grammar: ["personal-pronouns", "possessive", "accusative"],
    note: "sich freuen auf + 4격 = (앞으로 올 일을) 고대하다. sich freuen über는 이미 일어난 일에 기뻐하다.",
  },
  "Liebe Grüße / Alles Liebe": {
    words: [
      ["Liebe", "다정한", "lieb · 복수 4격 어미 -e"],
      ["Grüße", "안부 인사들", "복수형 (der Gruß → Grüße)"],
      ["Alles", "모든 것", "부정대명사 · 중성"],
      ["Liebe", "사랑스러운 (것)", "명사화 형용사 (das Liebe)"],
    ],
    grammar: ["greetings-phrases"],
    note: "친한 사이의 편지·메시지 끝인사. Alles Liebe의 Liebe는 '사랑(die Liebe)'이 아니라 '좋은 것'이라는 명사화 형용사.",
  },
  "Mit freundlichen Grüßen": {
    words: [
      ["Mit", "~와 함께", "3격 전치사"],
      ["freundlichen", "친절한", "freundlich · 복수 3격 어미 -en"],
      ["Grüßen", "인사들", "복수 3격 (Grüße + n)"],
    ],
    grammar: ["greetings-phrases", "prep-dative"],
    note: "격식 편지의 끝인사. 독일어 편지에서는 이 뒤에 쉼표를 찍지 않고 줄을 바꿔 이름을 써요.",
  },
  "der Brief": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Brief", "편지", "der Brief (남성)"],
    ],
    grammar: ["articles-gender"],
  },
  "die E-Mail": {
    words: [
      ["die", "(정관사)", "여성 1격"],
      ["E-Mail", "이메일", "die E-Mail (여성)"],
    ],
    grammar: ["articles-gender"],
  },
  "Liebe/Lieber ...": {
    words: [["Liebe/Lieber", "친애하는 (여성/남성)", "lieb · 여성 -e / 남성 -er"]],
    grammar: ["greetings-phrases"],
  },
  "Viele Grüße": {
    words: [
      ["Viele", "많은", "viel · 복수 어미 -e"],
      ["Grüße", "안부 인사들", "복수형 (der Gruß → Grüße)"],
    ],
    grammar: ["greetings-phrases", "plural"],
  },

  // ── Lektion 32: 시간 전치사 ──
  "um 3 Uhr": {
    words: [
      ["um", "~시에", "시간 전치사 (정각 시각)"],
      ["3", "3", "숫자 drei"],
      ["Uhr", "시", "die Uhr (여성) · 시각"],
    ],
    grammar: ["time-prepositions", "clock-time"],
  },
  "am Montag": {
    words: [
      ["am", "~에 (요일)", "an + dem 축약 (3격)"],
      ["Montag", "월요일", "der Montag (남성)"],
    ],
    grammar: ["time-prepositions", "contractions"],
  },
  "am Morgen / morgens": {
    words: [
      ["am", "~에 (하루 중 때)", "an + dem 축약 (3격)"],
      ["Morgen", "아침", "der Morgen (남성)"],
      ["morgens", "아침마다", "부사 (-s: 반복)"],
    ],
    grammar: ["time-prepositions", "contractions"],
    note: "morgens는 소문자 부사로 '아침에(늘)'라는 반복·습관의 뜻이 강하다.",
  },
  "im Januar": {
    words: [
      ["im", "~에 (달)", "in + dem 축약 (3격)"],
      ["Januar", "1월", "der Januar (남성)"],
    ],
    grammar: ["time-prepositions", "contractions"],
  },
  "im Sommer": {
    words: [
      ["im", "~에 (계절)", "in + dem 축약 (3격)"],
      ["Sommer", "여름", "der Sommer (남성)"],
    ],
    grammar: ["time-prepositions", "contractions"],
  },
  "in einer Woche": {
    words: [
      ["in", "~후에", "시간 전치사 in + 3격"],
      ["einer", "한, 하나의", "3격 여성 부정관사"],
      ["Woche", "주", "die Woche (여성)"],
    ],
    grammar: ["time-prepositions", "dative"],
    note: "시간의 in + 3격은 '지금부터 ~ 후에'라는 뜻.",
  },
  "vor einer Woche": {
    words: [
      ["vor", "~전에", "시간 전치사 vor + 3격"],
      ["einer", "한, 하나의", "3격 여성 부정관사"],
      ["Woche", "주", "die Woche (여성)"],
    ],
    grammar: ["time-prepositions", "dative"],
  },
  "seit einem Jahr": {
    words: [
      ["seit", "~전부터 (지금까지)", "3격 전치사"],
      ["einem", "한, 하나의", "3격 중성 부정관사"],
      ["Jahr", "해, 년", "das Jahr (중성)"],
    ],
    grammar: ["time-prepositions", "prep-dative"],
    note: "seit는 과거에 시작해 지금도 계속되는 일에 쓰며, 동사는 현재형: Ich lerne seit einem Jahr Deutsch.",
  },
  "ab 8 Uhr": {
    words: [
      ["ab", "~부터", "시간 전치사 (시작점)"],
      ["8", "8", "숫자 acht"],
      ["Uhr", "시", "die Uhr (여성) · 시각"],
    ],
    grammar: ["time-prepositions", "clock-time"],
  },
  "bis 14 Uhr": {
    words: [
      ["bis", "~까지", "시간 전치사"],
      ["14", "14", "숫자 vierzehn"],
      ["Uhr", "시", "die Uhr (여성) · 시각"],
    ],
    grammar: ["time-prepositions", "clock-time"],
  },
  "von ... bis ...": {
    words: [
      ["von", "~부터", "3격 전치사"],
      ["bis", "~까지", "전치사"],
    ],
    grammar: ["time-prepositions"],
  },
  "Wann geben wir den Bericht ab?": {
    words: [
      ["Wann", "언제", "의문사"],
      ["geben", "제출하다 (주다)", "abgeben · wir 현재형"],
      ["wir", "우리가", "인칭대명사 1격"],
      ["den", "그 (보고서를)", "4격 남성 정관사"],
      ["Bericht", "보고서", "der Bericht (남성)"],
      ["ab", "(제출)", "분리동사 abgeben 의 접두사"],
    ],
    grammar: ["separable-verbs", "w-questions", "accusative"],
  },
  "Bis 14 Uhr.": {
    words: [
      ["Bis", "~까지", "시간 전치사"],
      ["14", "14", "숫자 vierzehn"],
      ["Uhr", "시", "die Uhr (여성) · 시각"],
    ],
    grammar: ["time-prepositions", "clock-time"],
  },

  // ── Lektion 33: 날씨 ──
  "Wie ist das Wetter heute?": {
    words: [
      ["Wie", "어떻게", "의문사"],
      ["ist", "~이다", "sein · es 현재형"],
      ["das", "(정관사)", "중성 1격"],
      ["Wetter", "날씨", "das Wetter (중성)"],
      ["heute", "오늘", "시간 부사"],
    ],
    grammar: ["w-questions", "articles-gender"],
  },
  "Es ist sonnig.": {
    words: [
      ["Es", "(비인칭 주어)", "비인칭 es"],
      ["ist", "~이다", "sein · es 현재형"],
      ["sonnig", "해가 나는, 맑은", "형용사 · 서술 용법"],
    ],
    grammar: ["es-gibt-impersonal", "adjectives-predicative"],
  },
  "Es regnet.": {
    words: [
      ["Es", "(비인칭 주어)", "비인칭 es"],
      ["regnet", "비가 온다", "regnen · es 현재형 (-et)"],
    ],
    grammar: ["es-gibt-impersonal", "present-regular"],
    note: "날씨 동사는 항상 es를 주어로 쓴다. 어간이 -n으로 끝나 regn-e-t.",
  },
  "Es schneit.": {
    words: [
      ["Es", "(비인칭 주어)", "비인칭 es"],
      ["schneit", "눈이 온다", "schneien · es 현재형"],
    ],
    grammar: ["es-gibt-impersonal"],
  },
  "Es ist wolkig (bewölkt).": {
    words: [
      ["Es", "(비인칭 주어)", "비인칭 es"],
      ["ist", "~이다", "sein · es 현재형"],
      ["wolkig", "구름 낀", "형용사 · 서술 용법"],
      ["bewölkt", "흐린", "형용사 · wolkig 와 같은 뜻"],
    ],
    grammar: ["es-gibt-impersonal", "adjectives-predicative"],
  },
  "Es ist neblig.": {
    words: [
      ["Es", "(비인칭 주어)", "비인칭 es"],
      ["ist", "~이다", "sein · es 현재형"],
      ["neblig", "안개 낀", "형용사 (der Nebel)"],
    ],
    grammar: ["es-gibt-impersonal", "adjectives-predicative"],
  },
  "Es ist schwül.": {
    words: [
      ["Es", "(비인칭 주어)", "비인칭 es"],
      ["ist", "~이다", "sein · es 현재형"],
      ["schwül", "후텁지근한", "형용사 · 서술 용법"],
    ],
    grammar: ["es-gibt-impersonal", "adjectives-predicative"],
  },
  "Es ist sehr kalt.": {
    words: [
      ["Es", "(비인칭 주어)", "비인칭 es"],
      ["ist", "~이다", "sein · es 현재형"],
      ["sehr", "매우", "정도 부사"],
      ["kalt", "추운", "형용사 · 서술 용법"],
    ],
    grammar: ["es-gibt-impersonal", "adjectives-predicative"],
  },
  "Es sind 35 Grad.": {
    words: [
      ["Es", "(비인칭 주어)", "비인칭 es"],
      ["sind", "~이다", "sein · 복수형 (35 Grad에 맞춤)"],
      ["35", "35", "숫자 fünfunddreißig"],
      ["Grad", "도", "der Grad · 수사 뒤 단수형"],
    ],
    grammar: ["es-gibt-impersonal", "numbers"],
    note: "동사는 뒤의 '35 Grad'(복수 의미)에 맞춰 sind. Grad는 숫자 뒤에서도 형태가 변하지 않는다.",
  },
  "Wir haben minus 10 Grad.": {
    words: [
      ["Wir", "우리는", "인칭대명사 1격"],
      ["haben", "가지다", "haben · wir 현재형"],
      ["minus", "영하, 마이너스", "부사"],
      ["10", "10", "숫자 zehn"],
      ["Grad", "도", "der Grad · 수사 뒤 단수형"],
    ],
    grammar: ["sein-haben", "numbers"],
    note: "'우리는 영하 10도를 가지고 있다' → '(여기) 영하 10도다'. 기온·날짜를 말할 때 wir haben을 흔히 쓴다.",
  },
  "die Sonne": {
    words: [
      ["die", "(정관사)", "여성 1격"],
      ["Sonne", "태양", "die Sonne (여성)"],
    ],
    grammar: ["articles-gender"],
  },
  "der Regen": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Regen", "비", "der Regen (남성)"],
    ],
    grammar: ["articles-gender"],
  },
  "der Schnee": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Schnee", "눈", "der Schnee (남성)"],
    ],
    grammar: ["articles-gender"],
  },
  "der Wind": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Wind", "바람", "der Wind (남성)"],
    ],
    grammar: ["articles-gender"],
  },
  "die Wolke": {
    words: [
      ["die", "(정관사)", "여성 1격"],
      ["Wolke", "구름", "die Wolke (여성)"],
    ],
    grammar: ["articles-gender"],
  },
  "bewölkt / wolkig": {
    words: [
      ["bewölkt", "흐린, 구름 낀", "형용사"],
      ["wolkig", "구름 낀", "형용사 (die Wolke + -ig)"],
    ],
    grammar: ["adjectives-predicative"],
  },
  "der Grad": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Grad", "(온도의) 도", "der Grad (남성)"],
    ],
    grammar: ["articles-gender"],
    note: "숫자와 함께 쓰면 복수여도 형태가 그대로예요: 20 Grad.",
  },
  "Wie ist das Wetter bei euch?": {
    words: [
      ["Wie", "어떻게", "의문사"],
      ["ist", "~이다", "sein · es 현재형"],
      ["das", "(정관사)", "중성 1격"],
      ["Wetter", "날씨", "das Wetter (중성)"],
      ["bei", "~쪽에서, ~가 있는 곳", "3격 전치사"],
      ["euch", "너희", "ihr의 3격"],
    ],
    grammar: ["w-questions", "prep-dative", "personal-pronouns"],
    note: "bei + 사람 = 그 사람이 있는 곳 (bei euch = 너희 동네/집에서는).",
  },
  "Es regnet den ganzen Tag.": {
    words: [
      ["Es", "(비인칭 주어)", "비인칭 es"],
      ["regnet", "비가 온다", "regnen · es 현재형"],
      ["den", "(정관사)", "4격 남성 정관사"],
      ["ganzen", "온, 전체의", "ganz · 남성 4격 어미 -en"],
      ["Tag", "하루, 날", "der Tag (남성)"],
    ],
    grammar: ["es-gibt-impersonal", "accusative"],
    note: "기간을 나타내는 시간 표현은 전치사 없이 4격으로 쓴다 (den ganzen Tag = 하루 종일).",
  },

  // ── Lektion 34: 의견 말하기 ──
  "Ich bin dafür.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["bin", "~이다", "sein · ich 현재형"],
      ["dafür", "그것에 찬성하는", "da + für (für: ~을 위해·찬성)"],
    ],
    grammar: ["sein-haben", "prep-accusative"],
    note: "für는 '찬성', gegen은 '반대'. 앞에 da-를 붙여 '그것에'라는 뜻이 된다.",
  },
  "Ich bin dagegen.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["bin", "~이다", "sein · ich 현재형"],
      ["dagegen", "그것에 반대하는", "da + gegen"],
    ],
    grammar: ["sein-haben", "prep-accusative"],
  },
  "Das ist richtig.": {
    words: [
      ["Das", "그것은", "지시대명사 1격"],
      ["ist", "~이다", "sein · es 현재형"],
      ["richtig", "맞는, 옳은", "형용사 · 서술 용법"],
    ],
    grammar: ["adjectives-predicative"],
  },
  "Das ist falsch.": {
    words: [
      ["Das", "그것은", "지시대명사 1격"],
      ["ist", "~이다", "sein · es 현재형"],
      ["falsch", "틀린", "형용사 · 서술 용법"],
    ],
    grammar: ["adjectives-predicative"],
  },
  "Das finde ich in Ordnung.": {
    words: [
      ["Das", "그것을", "지시대명사 4격 (문두)"],
      ["finde", "~라고 생각하다", "finden · ich 현재형"],
      ["ich", "나는", "인칭대명사 1격"],
      ["in", "~안에", "전치사 in + 3격"],
      ["Ordnung", "질서, 정돈", "die Ordnung (여성)"],
    ],
    grammar: ["adjectives-predicative", "word-order"],
    note: "in Ordnung = 괜찮은, 문제없는. 목적어 Das가 앞에 나와 동사 다음에 주어 ich가 온다.",
  },
  "Das finde ich sehr gut.": {
    words: [
      ["Das", "그것을", "지시대명사 4격 (문두)"],
      ["finde", "~라고 생각하다", "finden · ich 현재형"],
      ["ich", "나는", "인칭대명사 1격"],
      ["sehr", "매우", "정도 부사"],
      ["gut", "좋은", "형용사 · 서술 용법"],
    ],
    grammar: ["adjectives-predicative", "word-order"],
  },
  "Das finde ich gar nicht gut.": {
    words: [
      ["Das", "그것을", "지시대명사 4격 (문두)"],
      ["finde", "~라고 생각하다", "finden · ich 현재형"],
      ["ich", "나는", "인칭대명사 1격"],
      ["gar", "전혀", "부정 강조 (gar nicht)"],
      ["nicht", "~않다", "부정어"],
      ["gut", "좋은", "형용사 · 서술 용법"],
    ],
    grammar: ["adjectives-predicative", "negation", "word-order"],
  },
  "Das gefällt mir.": {
    words: [
      ["Das", "그것이", "지시대명사 1격 (주어)"],
      ["gefällt", "마음에 든다", "gefallen · es 현재형 (a→ä)"],
      ["mir", "나에게", "ich의 3격"],
    ],
    grammar: ["dative", "stem-change"],
    note: "좋아하는 대상이 주어, 좋아하는 사람이 3격: '그것이 나에게 마음에 든다'.",
  },
  "Das gefällt mir nicht.": {
    words: [
      ["Das", "그것이", "지시대명사 1격 (주어)"],
      ["gefällt", "마음에 든다", "gefallen · es 현재형 (a→ä)"],
      ["mir", "나에게", "ich의 3격"],
      ["nicht", "~않다", "부정어 (문장 끝)"],
    ],
    grammar: ["dative", "negation"],
  },
  "Das finde ich problematisch.": {
    words: [
      ["Das", "그것을", "지시대명사 4격 (문두)"],
      ["finde", "~라고 생각하다", "finden · ich 현재형"],
      ["ich", "나는", "인칭대명사 1격"],
      ["problematisch", "문제가 있는", "형용사 · 서술 용법"],
    ],
    grammar: ["adjectives-predicative", "word-order"],
  },
  "Ich stimme zu.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["stimme", "(동의)하다", "zustimmen · ich 현재형"],
      ["zu", "(동의)", "분리동사 zustimmen 의 접두사"],
    ],
    grammar: ["separable-verbs"],
    note: "zustimmen + 3격: Ich stimme dir zu. (네 말에 동의해.)",
  },
  "Das stimmt nicht.": {
    words: [
      ["Das", "그것은", "지시대명사 1격"],
      ["stimmt", "맞다, 사실이다", "stimmen · es 현재형"],
      ["nicht", "~않다", "부정어"],
    ],
    grammar: ["negation"],
  },
  "Sollen wir ins Kino gehen?": {
    words: [
      ["Sollen", "~할까", "sollen · wir 형"],
      ["wir", "우리가", "인칭대명사 1격"],
      ["ins", "~(안)으로", "in + das 축약 · 이동 4격"],
      ["Kino", "영화관", "das Kino (중성)"],
      ["gehen", "가다", "gehen · 원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "yes-no-questions", "contractions"],
    note: "Sollen wir ...? = '우리 ~할까?' 하고 제안하는 표현.",
  },
  "Ja, ich bin dafür! Ich liebe Kino.": {
    words: [
      ["Ja", "응", "대답"],
      ["ich", "나는", "인칭대명사 1격"],
      ["bin", "~이다", "sein · ich 현재형"],
      ["dafür", "그것에 찬성하는", "da + für"],
      ["Ich", "나는", "인칭대명사 1격"],
      ["liebe", "매우 좋아하다", "lieben · ich 현재형"],
      ["Kino", "영화 (보기)", "das Kino (중성) · 무관사"],
    ],
    grammar: ["sein-haben", "present-regular"],
    note: "무관사 Kino는 특정 영화관이 아니라 '영화 보러 가는 것' 전반을 가리킨다.",
  },

  // ── Lektion 35: 의문문 ──
  "Wer? / Wem? / Wen?": {
    words: [
      ["Wer", "누가", "의문사 1격"],
      ["Wem", "누구에게", "의문사 3격"],
      ["Wen", "누구를", "의문사 4격"],
    ],
    grammar: ["w-questions", "cases-overview"],
    note: "der/dem/den 과 끝소리가 같다: wer–der, wem–dem, wen–den.",
  },
  "Wie viel(e)?": {
    words: [
      ["Wie", "얼마나", "의문사"],
      ["viel(e)", "많이 (많은)", "viel 셀 수 없음 / viele 복수"],
    ],
    grammar: ["w-questions"],
    note: "셀 수 없는 것은 wie viel (Wie viel Geld?), 셀 수 있는 복수는 wie viele (Wie viele Kinder?).",
  },
  "Wann rufst du mich an?": {
    words: [
      ["Wann", "언제", "의문사"],
      ["rufst", "전화하다", "anrufen · du 현재형"],
      ["du", "너는", "인칭대명사 1격"],
      ["mich", "나에게 (나를)", "ich의 4격"],
      ["an", "(전화)", "분리동사 anrufen 의 접두사"],
    ],
    grammar: ["separable-verbs", "w-questions", "personal-pronouns"],
    note: "anrufen은 4격을 취한다 — 한국어 '~에게'와 달리 mich (4격).",
  },
  "Wo fährt der Zug ab?": {
    words: [
      ["Wo", "어디에서", "의문사 (장소)"],
      ["fährt", "출발하다", "abfahren · er 현재형 (a→ä)"],
      ["der", "그", "남성 1격 정관사"],
      ["Zug", "기차", "der Zug (남성)"],
      ["ab", "(출발)", "분리동사 abfahren 의 접두사"],
    ],
    grammar: ["separable-verbs", "w-questions", "stem-change"],
  },
  "Was kauft ihr ein?": {
    words: [
      ["Was", "무엇을", "의문사 (4격)"],
      ["kauft", "사다", "einkaufen · ihr 현재형"],
      ["ihr", "너희는", "인칭대명사 1격"],
      ["ein", "(장보기)", "분리동사 einkaufen 의 접두사"],
    ],
    grammar: ["separable-verbs", "w-questions"],
  },
  "Mit wem fährst du nach Berlin?": {
    words: [
      ["Mit", "~와 함께", "3격 전치사"],
      ["wem", "누구", "의문사 wer 의 3격"],
      ["fährst", "(타고) 가다", "fahren · du 현재형 (a→ä)"],
      ["du", "너는", "인칭대명사 1격"],
      ["nach", "~로 (도시)", "3격 전치사 · 도시·나라"],
      ["Berlin", "(도시) 베를린", "지명 · 무관사"],
    ],
    grammar: ["w-questions", "prep-dative", "place-directions"],
    note: "전치사가 붙은 의문사는 전치사째 문장 맨 앞으로: Mit wem ...?",
  },
  "Wie oft besuchst du deine Großmutter?": {
    words: [
      ["Wie", "얼마나", "의문사"],
      ["oft", "자주", "부사"],
      ["besuchst", "방문하다", "besuchen · du 현재형"],
      ["du", "너는", "인칭대명사 1격"],
      ["deine", "너의", "소유관사 dein · 여성 4격"],
      ["Großmutter", "할머니", "die Großmutter (여성)"],
    ],
    grammar: ["w-questions", "possessive", "accusative"],
  },
  "Warum weint das Kind draußen?": {
    words: [
      ["Warum", "왜", "의문사"],
      ["weint", "울다", "weinen · es 현재형"],
      ["das", "그", "중성 1격 정관사"],
      ["Kind", "아이", "das Kind (중성)"],
      ["draußen", "밖에서", "장소 부사"],
    ],
    grammar: ["w-questions", "present-regular"],
  },
  "Warum lernst du Deutsch?": {
    words: [
      ["Warum", "왜", "의문사"],
      ["lernst", "배우다", "lernen · du 현재형"],
      ["du", "너는", "인칭대명사 1격"],
      ["Deutsch", "독일어", "das Deutsch · 무관사"],
    ],
    grammar: ["w-questions", "present-regular"],
  },
  "Weil ich in Deutschland studieren möchte.": {
    words: [
      ["Weil", "~하기 때문에", "종속접속사 (동사 맨 끝)"],
      ["ich", "나는", "인칭대명사 1격"],
      ["in", "~에서", "전치사 in + 3격 (나라)"],
      ["Deutschland", "(나라) 독일", "das Deutschland · 무관사"],
      ["studieren", "(대학에서) 공부하다", "studieren · 원형"],
      ["möchte", "~하고 싶다", "möchten · ich 형 (문장 끝)"],
    ],
    grammar: ["conjunctions", "modal-verbs", "place-directions"],
    note: "weil은 denn과 달리 종속접속사라 변화된 동사(möchte)가 문장 맨 끝으로 간다.",
  },
};
