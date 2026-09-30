import type { SentenceGloss } from "@/lib/gloss";

export const BAND6: Record<string, SentenceGloss> = {
  // ── Lektion 36 ──
  "Ich will Deutsch lernen.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["will", "~하고 싶다 (하려고 한다)", "wollen · ich 형"],
      ["Deutsch", "독일어", "das Deutsch · 관사 없이"],
      ["lernen", "배우다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "sentence-bracket"],
    note: "wollen은 강한 의지·계획. 영어 will(미래)과 헷갈리지 말 것.",
  },
  "Ich will mit Peter ins Konzert gehen.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["will", "~하고 싶다", "wollen · ich 형"],
      ["mit", "~와 함께", "전치사 (+3격)"],
      ["Peter", "(이름) 페터", "인명"],
      ["ins", "~(안)으로", "in + das 축약 · 이동이라 4격"],
      ["Konzert", "콘서트", "das Konzert (중성)"],
      ["gehen", "가다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "contractions", "two-way-prepositions"],
  },
  "Ich möchte Arzt werden.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["möchte", "~하고 싶다", "möchten · ich 형"],
      ["Arzt", "의사", "der Arzt (남성) · 직업은 관사 없음"],
      ["werden", "~이 되다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "articles-gender"],
    note: "직업을 말할 때는 관사를 쓰지 않는다: Arzt werden (의사가 되다).",
  },
  "Sie möchte unbedingt einmal nach Lanzarote fahren.": {
    words: [
      ["Sie", "그녀는", "인칭대명사 1격"],
      ["möchte", "~하고 싶다", "möchten · sie 형 (= ich)"],
      ["unbedingt", "꼭, 반드시", "부사"],
      ["einmal", "한번", "부사"],
      ["nach", "~로", "전치사 (섬·도시, +3격)"],
      ["Lanzarote", "(섬) 란사로테", "지명 (스페인 카나리아 제도)"],
      ["fahren", "가다 (타고)", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "place-directions"],
    note: "möchten은 ich와 er/sie 형태가 같다 (ich möchte, sie möchte).",
  },
  "Wir möchten euch herzlich einladen.": {
    words: [
      ["Wir", "우리는", "인칭대명사 1격"],
      ["möchten", "~하고 싶다", "möchten · wir 형"],
      ["euch", "너희를", "ihr의 4격"],
      ["herzlich", "진심으로", "부사"],
      ["einladen", "초대하다", "분리동사 원형 (붙여 씀)"],
    ],
    grammar: ["modal-verbs", "separable-verbs", "personal-pronouns"],
    note: "조동사와 함께 쓰면 분리동사는 분리되지 않고 원형(einladen)으로 끝에 온다.",
  },
  "Was willst du mal werden?": {
    words: [
      ["Was", "무엇이", "의문사"],
      ["willst", "~하고 싶다", "wollen · du 형"],
      ["du", "너는", "인칭대명사 1격"],
      ["mal", "나중에, 언젠가", "부사 (einmal)"],
      ["werden", "~이 되다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "w-questions"],
    note: "장래 희망을 묻는 표현. 여기서 mal은 '언젠가(장차)'.",
  },
  "Was willst du machen?": {
    words: [
      ["Was", "무엇을", "의문사 (4격)"],
      ["willst", "~하고 싶다", "wollen · du 형"],
      ["du", "너는", "인칭대명사 1격"],
      ["machen", "하다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "w-questions"],
  },
  "Ich möchte einen Kaffee.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["möchte", "원하다", "möchten · ich 형 (본동사처럼)"],
      ["einen", "(한 잔의)", "부정관사 4격 (남성)"],
      ["Kaffee", "커피", "der Kaffee (남성)"],
    ],
    grammar: ["moegen-moechten", "accusative"],
    note: "möchte는 동사원형 없이 4격 목적어만으로도 쓸 수 있다.",
  },
  "Was möchtest du nach dem Studium machen?": {
    words: [
      ["Was", "무엇을", "의문사 (4격)"],
      ["möchtest", "~하고 싶다", "möchten · du 형"],
      ["du", "너는", "인칭대명사 1격"],
      ["nach", "~ 후에", "전치사 (시간, +3격)"],
      ["dem", "(그)", "중성 정관사 3격"],
      ["Studium", "대학 공부", "das Studium (중성)"],
      ["machen", "하다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "prep-dative", "time-prepositions"],
    note: "nach는 장소(~로)뿐 아니라 시간(~ 후에)에도 쓰이며 항상 3격.",
  },
  "Ich will in Deutschland arbeiten.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["will", "~하고 싶다", "wollen · ich 형"],
      ["in", "~에서", "전치사 (위치)"],
      ["Deutschland", "(나라) 독일", "국가명 · 관사 없음"],
      ["arbeiten", "일하다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "sentence-bracket"],
  },

  // ── Lektion 37 ──
  "Ich muss arbeiten.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["muss", "~해야 한다", "müssen · ich 형"],
      ["arbeiten", "일하다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "sentence-bracket"],
  },
  "Es ist schon zu spät. Ich muss schnell nach Hause.": {
    words: [
      ["Es", "(비인칭 주어)", "비인칭 es"],
      ["ist", "~이다", "sein · es 현재형"],
      ["schon", "벌써", "부사"],
      ["zu", "너무", "부사 (정도가 지나침)"],
      ["spät", "늦은", "형용사 · 서술 용법"],
      ["Ich", "나는", "인칭대명사 1격"],
      ["muss", "~해야 한다", "müssen · ich 형"],
      ["schnell", "빨리", "부사"],
      ["nach", "(집)으로", "nach Hause = 집으로"],
      ["Hause", "집", "das Haus · 옛 3격형 (고정)"],
    ],
    grammar: ["modal-verbs", "es-gibt-impersonal", "prep-dative"],
    note: "방향이 분명하면 이동 동사(gehen)를 생략할 수 있다: Ich muss nach Hause (gehen).",
  },
  "Du musst das machen.": {
    words: [
      ["Du", "너는", "인칭대명사 1격"],
      ["musst", "~해야 한다", "müssen · du 형"],
      ["das", "그것을", "지시대명사 4격"],
      ["machen", "하다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "sentence-bracket"],
  },
  "Du musst nicht traurig sein.": {
    words: [
      ["Du", "너는", "인칭대명사 1격"],
      ["musst", "~해야 한다", "müssen · du 형"],
      ["nicht", "않다", "부정어"],
      ["traurig", "슬픈", "형용사 · 서술 용법"],
      ["sein", "~이다", "sein · 동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "negation"],
    note: "nicht müssen = '~할 필요 없다' (금지가 아님). 금지는 nicht dürfen.",
  },
  "Im Moment muss ich nicht für die Prüfung lernen.": {
    words: [
      ["Im", "~에 (지금)", "in + dem 축약 (3격)"],
      ["Moment", "순간", "der Moment (남성)"],
      ["muss", "~해야 한다", "müssen · ich 형"],
      ["ich", "나는", "인칭대명사 1격"],
      ["nicht", "않다", "부정어"],
      ["für", "~을 위해", "전치사 (+4격)"],
      ["die", "(그)", "여성 정관사 4격"],
      ["Prüfung", "시험", "die Prüfung (여성)"],
      ["lernen", "공부하다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "prep-accusative", "word-order"],
    note: "im Moment = 지금은. 시간이 앞에 와서 동사 뒤에 주어(ich)가 온다. nicht müssen = 할 필요 없다.",
  },
  "Alle Studenten müssen eine Bachelorarbeit schreiben.": {
    words: [
      ["Alle", "모든", "all- · 복수 1격"],
      ["Studenten", "학생들", "복수형 (der Student → Studenten)"],
      ["müssen", "~해야 한다", "müssen · sie(복수) 형"],
      ["eine", "(하나의)", "부정관사 4격 (여성)"],
      ["Bachelorarbeit", "학사 논문", "die Bachelorarbeit (여성)"],
      ["schreiben", "쓰다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "plural", "accusative"],
  },
  "Wir müssen pünktlich sein.": {
    words: [
      ["Wir", "우리는", "인칭대명사 1격"],
      ["müssen", "~해야 한다", "müssen · wir 형"],
      ["pünktlich", "시간을 지키는", "형용사 · 서술 용법"],
      ["sein", "~이다", "sein · 동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "adjectives-predicative"],
  },
  "Ich muss nicht kommen.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["muss", "~해야 한다", "müssen · ich 형"],
      ["nicht", "않다", "부정어"],
      ["kommen", "오다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "negation"],
    note: "nicht müssen은 '~하면 안 된다'가 아니라 '~할 필요 없다'.",
  },
  "Musst du heute arbeiten?": {
    words: [
      ["Musst", "~해야 하니", "müssen · du 형"],
      ["du", "너는", "인칭대명사 1격"],
      ["heute", "오늘", "부사"],
      ["arbeiten", "일하다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "yes-no-questions"],
  },
  "Ja, ich muss bis 18 Uhr arbeiten.": {
    words: [
      ["Ja", "응", "대답"],
      ["ich", "나는", "인칭대명사 1격"],
      ["muss", "~해야 한다", "müssen · ich 형"],
      ["bis", "~까지", "전치사 (시간)"],
      ["18", "18 (achtzehn)", "숫자"],
      ["Uhr", "시", "die Uhr (시각)"],
      ["arbeiten", "일하다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "time-prepositions", "clock-time"],
  },

  // ── Lektion 38 ──
  "Darf ich hier rauchen?": {
    words: [
      ["Darf", "~해도 되다", "dürfen · ich 형"],
      ["ich", "나는", "인칭대명사 1격"],
      ["hier", "여기에서", "부사"],
      ["rauchen", "담배 피우다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "yes-no-questions"],
  },
  "Darf ich mit Peter ins Konzert gehen?": {
    words: [
      ["Darf", "~해도 되다", "dürfen · ich 형"],
      ["ich", "나는", "인칭대명사 1격"],
      ["mit", "~와 함께", "전치사 (+3격)"],
      ["Peter", "(이름) 페터", "인명"],
      ["ins", "~(안)으로", "in + das 축약 · 이동이라 4격"],
      ["Konzert", "콘서트", "das Konzert (중성)"],
      ["gehen", "가다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "contractions", "yes-no-questions"],
  },
  "Hier darf man nicht rauchen.": {
    words: [
      ["Hier", "여기에서", "부사"],
      ["darf", "~해도 되다", "dürfen · man(3인칭 단수) 형"],
      ["man", "사람들은", "일반 주어 man"],
      ["nicht", "안 된다", "부정어"],
      ["rauchen", "담배 피우다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "man", "negation"],
    note: "nicht dürfen = 금지 ('~하면 안 된다'). Hier가 앞에 와서 동사 뒤에 주어 man.",
  },
  "Niemand darf das noch wissen.": {
    words: [
      ["Niemand", "아무도 (~않다)", "부정대명사 1격"],
      ["darf", "~해도 되다", "dürfen · 3인칭 단수 형"],
      ["das", "그것을", "지시대명사 4격"],
      ["noch", "아직", "부사"],
      ["wissen", "알다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "negation"],
    note: "niemand 자체에 부정이 들어 있어 nicht가 필요 없다.",
  },
  "Meine Kinder dürfen nur am Wochenende fernsehen.": {
    words: [
      ["Meine", "나의", "소유관사 mein · 복수 1격"],
      ["Kinder", "아이들", "복수형 (das Kind → Kinder)"],
      ["dürfen", "~해도 되다", "dürfen · sie(복수) 형"],
      ["nur", "~만", "부사"],
      ["am", "~에", "an + dem 축약 (3격)"],
      ["Wochenende", "주말", "das Wochenende (중성)"],
      ["fernsehen", "TV를 보다", "분리동사 원형 (붙여 씀)"],
    ],
    grammar: ["modal-verbs", "separable-verbs", "possessive"],
    note: "조동사와 함께 쓰면 분리동사는 붙은 원형으로 문장 끝에 온다.",
  },
  "Im Kino darf man etwas essen, aber im Theater nicht.": {
    words: [
      ["Im", "~에서", "in + dem 축약 (3격)"],
      ["Kino", "영화관", "das Kino (중성)"],
      ["darf", "~해도 되다", "dürfen · man 형"],
      ["man", "사람들은", "일반 주어 man"],
      ["etwas", "무언가", "부정대명사 (4격)"],
      ["essen", "먹다", "동사원형"],
      ["aber", "하지만", "접속사"],
      ["im", "~에서", "in + dem 축약 (3격)"],
      ["Theater", "극장", "das Theater (중성)"],
      ["nicht", "안 된다", "부정어"],
    ],
    grammar: ["modal-verbs", "man", "contractions"],
    note: "aber 뒤는 반복되는 부분(darf man etwas essen)을 생략했다.",
  },
  "Darf ich Sie etwas fragen?": {
    words: [
      ["Darf", "~해도 되다", "dürfen · ich 형"],
      ["ich", "나는", "인칭대명사 1격"],
      ["Sie", "당신에게", "존칭 Sie 4격"],
      ["etwas", "무언가", "부정대명사 (4격)"],
      ["fragen", "묻다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "accusative", "formal-informal"],
    note: "fragen은 묻는 상대를 4격으로 쓴다 (Sie = 4격).",
  },
  "Natürlich dürfen Sie.": {
    words: [
      ["Natürlich", "물론", "부사"],
      ["dürfen", "~해도 되다", "dürfen · Sie 형"],
      ["Sie", "당신은", "존칭 Sie 1격"],
    ],
    grammar: ["modal-verbs", "word-order"],
    note: "Natürlich가 1번 자리라 동사 dürfen 뒤에 주어 Sie. 본동사는 생략됨.",
  },
  "Darf ich das Fenster öffnen?": {
    words: [
      ["Darf", "~해도 되다", "dürfen · ich 형"],
      ["ich", "나는", "인칭대명사 1격"],
      ["das", "(그)", "중성 정관사 4격"],
      ["Fenster", "창문", "das Fenster (중성)"],
      ["öffnen", "열다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "yes-no-questions"],
  },

  // ── Lektion 39 ──
  "Du sollst pünktlich kommen.": {
    words: [
      ["Du", "너는", "인칭대명사 1격"],
      ["sollst", "~해야 한다 (시킴)", "sollen · du 형"],
      ["pünktlich", "제시간에", "부사"],
      ["kommen", "오다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "sentence-bracket"],
    note: "sollen = 다른 사람의 요구·지시에 따른 의무.",
  },
  "Soll ich für dich die Karten holen?": {
    words: [
      ["Soll", "~할까", "sollen · ich 형 (제안)"],
      ["ich", "나는", "인칭대명사 1격"],
      ["für", "~을 위해 (대신)", "전치사 (+4격)"],
      ["dich", "너를", "du의 4격"],
      ["die", "(그)", "복수 정관사 4격"],
      ["Karten", "표, 티켓", "복수형 (die Karte → Karten)"],
      ["holen", "가져오다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "prep-accusative", "plural"],
    note: "Soll ich ...? = '내가 ~해 줄까?' 하고 제안할 때 쓴다.",
  },
  "Du sollst doch das Zimmer aufräumen.": {
    words: [
      ["Du", "너는", "인칭대명사 1격"],
      ["sollst", "~해야 한다 (시킴)", "sollen · du 형"],
      ["doch", "(~라니까)", "강조 불변화사"],
      ["das", "(그)", "중성 정관사 4격"],
      ["Zimmer", "방", "das Zimmer (중성)"],
      ["aufräumen", "치우다", "분리동사 원형 (붙여 씀)"],
    ],
    grammar: ["modal-verbs", "separable-verbs"],
    note: "doch는 '이미 말했잖아'라는 재촉·질책의 뉘앙스를 더한다.",
  },
  "Er soll zum Arzt gehen.": {
    words: [
      ["Er", "그는", "인칭대명사 1격"],
      ["soll", "~해야 한다 (권유받음)", "sollen · er 형"],
      ["zum", "~에게로", "zu + dem 축약 (3격)"],
      ["Arzt", "의사", "der Arzt (남성)"],
      ["gehen", "가다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "contractions", "place-directions"],
    note: "사람(의사)에게 갈 때는 zu: zum Arzt gehen = 병원에 가다.",
  },
  "Denkst du, ich soll mein Fach wechseln?": {
    words: [
      ["Denkst", "생각하다", "denken · du 현재형"],
      ["du", "너는", "인칭대명사 1격"],
      ["ich", "나는", "인칭대명사 1격"],
      ["soll", "~해야 한다", "sollen · ich 형"],
      ["mein", "나의", "소유관사 · 중성 4격"],
      ["Fach", "전공, 과목", "das Fach (중성)"],
      ["wechseln", "바꾸다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "possessive", "yes-no-questions"],
    note: "쉼표 뒤는 dass 없이 이어진 주문장이라 평서문 어순(동사 두 번째)을 그대로 쓴다.",
  },
  "Was soll ich tun?": {
    words: [
      ["Was", "무엇을", "의문사 (4격)"],
      ["soll", "~해야 하다", "sollen · ich 형"],
      ["ich", "나는", "인칭대명사 1격"],
      ["tun", "하다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "w-questions"],
  },
  "Sie sollen warten.": {
    words: [
      ["Sie", "당신은", "존칭 Sie 1격"],
      ["sollen", "~해야 한다 (전달된 지시)", "sollen · Sie 형"],
      ["warten", "기다리다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "formal-informal"],
    note: "제3자의 지시를 전달하는 말: '(누가) 기다리시래요'. Sie는 문맥상 '그들'일 수도 있다.",
  },
  "Was hat die Lehrerin gesagt?": {
    words: [
      ["Was", "무엇을", "의문사 (4격)"],
      ["hat", "(완료 조동사)", "haben · 완료 조동사"],
      ["die", "(그)", "여성 정관사 1격"],
      ["Lehrerin", "여자 선생님", "die Lehrerin (여성)"],
      ["gesagt", "말했다", "과거분사 (sagen)"],
    ],
    grammar: ["perfekt", "w-questions", "sentence-bracket"],
    note: "Perfekt: haben(두 번째 자리) + 과거분사(문장 끝).",
  },
  "Wir sollen die Hausaufgaben bis Freitag machen.": {
    words: [
      ["Wir", "우리는", "인칭대명사 1격"],
      ["sollen", "~해야 한다 (시킴)", "sollen · wir 형"],
      ["die", "(그)", "복수 정관사 4격"],
      ["Hausaufgaben", "숙제", "복수형 (die Hausaufgabe)"],
      ["bis", "~까지", "전치사 (시간)"],
      ["Freitag", "금요일", "der Freitag (남성)"],
      ["machen", "하다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "time-prepositions", "plural"],
    note: "선생님이 시킨 일이라 müssen이 아니라 sollen. Hausaufgaben machen = 숙제하다.",
  },

  // ── Lektion 40 ──
  "Ich kann schwimmen.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["kann", "~할 수 있다", "können · ich 형"],
      ["schwimmen", "수영하다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs"],
  },
  "Stefan und ich wollen heute Abend ins Theater gehen.": {
    words: [
      ["Stefan", "(이름) 슈테판", "인명"],
      ["und", "그리고", "접속사"],
      ["ich", "나는", "인칭대명사 1격"],
      ["wollen", "~하려고 하다", "wollen · wir 형 (주어 = 우리)"],
      ["heute", "오늘", "부사"],
      ["Abend", "저녁", "heute Abend = 오늘 저녁"],
      ["ins", "~(안)으로", "in + das 축약 · 이동이라 4격"],
      ["Theater", "극장", "das Theater (중성)"],
      ["gehen", "가다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "contractions", "word-order"],
    note: "Stefan und ich = wir 이므로 동사는 wollen (복수형). 시간(heute Abend) → 장소(ins Theater).",
  },
  "Ich kann heute nicht zum Arzt gehen.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["kann", "~할 수 있다", "können · ich 형"],
      ["heute", "오늘", "부사"],
      ["nicht", "못", "부정어"],
      ["zum", "~에게로", "zu + dem 축약 (3격)"],
      ["Arzt", "의사", "der Arzt (남성)"],
      ["gehen", "가다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "contractions", "negation"],
  },
  "Mein Bruder muss übermorgen für die Mathearbeit lernen.": {
    words: [
      ["Mein", "나의", "소유관사 · 남성 1격"],
      ["Bruder", "형/오빠/남동생", "der Bruder (남성)"],
      ["muss", "~해야 한다", "müssen · er 형"],
      ["übermorgen", "모레", "부사"],
      ["für", "~을 위해", "전치사 (+4격)"],
      ["die", "(그)", "여성 정관사 4격"],
      ["Mathearbeit", "수학 시험", "die Mathearbeit (여성)"],
      ["lernen", "공부하다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "possessive", "prep-accusative"],
    note: "Klassenarbeit/Mathearbeit = 학교의 필기 시험.",
  },
  "Er muss heute arbeiten.": {
    words: [
      ["Er", "그는", "인칭대명사 1격"],
      ["muss", "~해야 한다", "müssen · er 형 (= ich)"],
      ["heute", "오늘", "부사"],
      ["arbeiten", "일하다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs"],
  },
  "Darf ich reinkommen?": {
    words: [
      ["Darf", "~해도 되다", "dürfen · ich 형"],
      ["ich", "나는", "인칭대명사 1격"],
      ["reinkommen", "들어오다/들어가다", "분리동사 원형 (herein 의 구어형)"],
    ],
    grammar: ["modal-verbs", "separable-verbs", "yes-no-questions"],
  },
  "Sie will Ärztin werden.": {
    words: [
      ["Sie", "그녀는", "인칭대명사 1격"],
      ["will", "~하고 싶다", "wollen · sie 형 (= ich)"],
      ["Ärztin", "여의사", "die Ärztin (여성) · 직업은 관사 없음"],
      ["werden", "~이 되다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "articles-gender"],
  },

  // ── Lektion 41 ──
  "Wir sollen ruhig sein.": {
    words: [
      ["Wir", "우리는", "인칭대명사 1격"],
      ["sollen", "~해야 한다 (시킴)", "sollen · wir 형"],
      ["ruhig", "조용한", "형용사 · 서술 용법"],
      ["sein", "~이다", "sein · 동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "adjectives-predicative"],
  },
  "Im Winter kann ich nicht in den Urlaub fahren.": {
    words: [
      ["Im", "~에", "in + dem 축약 (3격)"],
      ["Winter", "겨울", "der Winter (남성)"],
      ["kann", "~할 수 있다", "können · ich 형"],
      ["ich", "나는", "인칭대명사 1격"],
      ["nicht", "못", "부정어"],
      ["in", "~(으)로", "전치사 (이동 → 4격)"],
      ["den", "(그)", "남성 정관사 4격"],
      ["Urlaub", "휴가", "der Urlaub (남성)"],
      ["fahren", "가다 (타고)", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "two-way-prepositions", "dates-ordinal"],
    note: "im Winter(계절, 3격) vs in den Urlaub(방향, 4격). 시간이 앞에 와서 동사 뒤에 주어.",
  },
  "In Deutschland kannst du deinen Führerschein mit 17 machen.": {
    words: [
      ["In", "~에서", "전치사 (위치)"],
      ["Deutschland", "(나라) 독일", "국가명 · 관사 없음"],
      ["kannst", "~할 수 있다", "können · du 형"],
      ["du", "너는 (사람은)", "인칭대명사 1격 (일반적 du)"],
      ["deinen", "너의", "소유관사 · 남성 4격"],
      ["Führerschein", "운전면허", "der Führerschein (남성)"],
      ["mit", "~(살)에", "전치사 (나이, +3격)"],
      ["17", "17 (siebzehn)", "숫자"],
      ["machen", "(면허를) 따다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "possessive", "word-order"],
    note: "mit + 나이 = '~살에'. 여기서 du는 특정인이 아니라 '누구나'(man과 비슷).",
  },
  "In den USA kannst du erst mit 21 Jahren Alkohol kaufen.": {
    words: [
      ["In", "~에서", "전치사 (위치 → 3격)"],
      ["den", "(그)", "복수 정관사 3격"],
      ["USA", "(나라) 미국", "die USA (복수)"],
      ["kannst", "~할 수 있다", "können · du 형"],
      ["du", "너는 (사람은)", "인칭대명사 1격 (일반적 du)"],
      ["erst", "~가 되어서야", "부사"],
      ["mit", "~(살)에", "전치사 (나이, +3격)"],
      ["21", "21 (einundzwanzig)", "숫자"],
      ["Jahren", "년, 살", "복수 3격 (das Jahr → Jahre + n)"],
      ["Alkohol", "술", "der Alkohol · 관사 없이"],
      ["kaufen", "사다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "prep-dative", "articles-gender"],
    note: "die USA는 복수 국가명이라 관사가 붙는다: in den USA (3격 복수).",
  },
  "Koreaner können ohne Visum nach Deutschland reisen.": {
    words: [
      ["Koreaner", "한국인들", "복수형 (der Koreaner, 무변화)"],
      ["können", "~할 수 있다", "können · sie(복수) 형"],
      ["ohne", "~없이", "전치사 (+4격)"],
      ["Visum", "비자", "das Visum (중성) · 관사 생략"],
      ["nach", "~로", "전치사 (나라, +3격)"],
      ["Deutschland", "(나라) 독일", "국가명 · 관사 없음"],
      ["reisen", "여행하다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "prep-accusative", "place-directions"],
  },
  "Er möchte schlafen.": {
    words: [
      ["Er", "그는", "인칭대명사 1격"],
      ["möchte", "~하고 싶다", "möchten · er 형 (= ich)"],
      ["schlafen", "자다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "moegen-moechten"],
  },
  "Ihr dürft das nicht essen.": {
    words: [
      ["Ihr", "너희는", "인칭대명사 1격 (복수 친칭)"],
      ["dürft", "~해도 되다", "dürfen · ihr 형"],
      ["das", "그것을", "지시대명사 4격"],
      ["nicht", "안 된다", "부정어"],
      ["essen", "먹다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "negation"],
    note: "nicht dürfen = 금지.",
  },

  // ── Lektion 42 ──
  "Man muss hier links abbiegen.": {
    words: [
      ["Man", "(사람은)", "일반 주어 man"],
      ["muss", "~해야 한다", "müssen · man 형"],
      ["hier", "여기에서", "부사"],
      ["links", "왼쪽으로", "부사"],
      ["abbiegen", "꺾다, 방향을 틀다", "분리동사 원형 (붙여 씀)"],
    ],
    grammar: ["man", "modal-verbs", "place-directions"],
  },
  "Was möchtest du mal werden?": {
    words: [
      ["Was", "무엇이", "의문사"],
      ["möchtest", "~하고 싶다", "möchten · du 형"],
      ["du", "너는", "인칭대명사 1격"],
      ["mal", "나중에, 언젠가", "부사 (einmal)"],
      ["werden", "~이 되다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "w-questions"],
    note: "장래 희망을 묻는 표현. willst보다 부드럽다.",
  },
  "Ich will ein Buch schreiben.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["will", "~하고 싶다", "wollen · ich 형"],
      ["ein", "(한 권의)", "부정관사 4격 (중성)"],
      ["Buch", "책", "das Buch (중성)"],
      ["schreiben", "쓰다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "accusative"],
  },
  "Ich will viel Geld verdienen.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["will", "~하고 싶다", "wollen · ich 형"],
      ["viel", "많은", "형용사 (셀 수 없는 명사 앞)"],
      ["Geld", "돈", "das Geld (중성)"],
      ["verdienen", "(돈을) 벌다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "sentence-bracket"],
  },
  "Ich will im Ausland leben.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["will", "~하고 싶다", "wollen · ich 형"],
      ["im", "~에서", "in + dem 축약 (3격)"],
      ["Ausland", "외국", "das Ausland (중성)"],
      ["leben", "살다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "contractions", "two-way-prepositions"],
  },
  "Ich will berühmt werden.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["will", "~하고 싶다", "wollen · ich 형"],
      ["berühmt", "유명한", "형용사 · 서술 용법"],
      ["werden", "~해지다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "adjectives-predicative"],
  },
  "Ich will auf keinen Fall Koch werden.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["will", "~하고 싶다", "wollen · ich 형"],
      ["auf", "(절대)", "auf keinen Fall = 절대 ~않다"],
      ["keinen", "어떤 ~도 아닌", "kein · 남성 4격"],
      ["Fall", "경우", "der Fall (남성)"],
      ["Koch", "요리사", "der Koch (남성) · 직업은 관사 없음"],
      ["werden", "~이 되다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "negation"],
    note: "auf keinen Fall = '어떤 경우에도 ~않다' (절대 안 돼). 고정 표현.",
  },
  "Kann ich dich anrufen?": {
    words: [
      ["Kann", "~해도 되다", "können · ich 형 (허락)"],
      ["ich", "나는", "인칭대명사 1격"],
      ["dich", "너에게", "du의 4격"],
      ["anrufen", "전화하다", "분리동사 원형 (붙여 씀)"],
    ],
    grammar: ["modal-verbs", "separable-verbs", "accusative"],
    note: "anrufen은 4격을 취한다 (dich). 조동사와 쓰면 분리되지 않는다.",
  },
  "Sie will heute nicht ausgehen.": {
    words: [
      ["Sie", "그녀는", "인칭대명사 1격"],
      ["will", "~하고 싶다", "wollen · sie 형"],
      ["heute", "오늘", "부사"],
      ["nicht", "않다", "부정어"],
      ["ausgehen", "외출하다", "분리동사 원형 (붙여 씀)"],
    ],
    grammar: ["modal-verbs", "separable-verbs", "negation"],
  },
  "Wir müssen mehr üben.": {
    words: [
      ["Wir", "우리는", "인칭대명사 1격"],
      ["müssen", "~해야 한다", "müssen · wir 형"],
      ["mehr", "더 많이", "viel의 비교급"],
      ["üben", "연습하다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs"],
  },
};
