import type { SentenceGloss } from "@/lib/gloss";

export const BAND4: Record<string, SentenceGloss> = {
  // ── Lektion 22: 명령형 ──
  "Kommen Sie bitte her.": {
    words: [
      ["Kommen", "오세요", "kommen · Sie 명령형"],
      ["Sie", "당신(은)", "존칭 Sie · 명령형에서 동사 뒤"],
      ["bitte", "부디, ~해 주세요", "공손 표현 부사"],
      ["her", "이쪽으로", "방향 부사 (말하는 사람 쪽)"],
    ],
    grammar: ["imperative", "formal-informal"],
    note: "Sie 명령형은 '동사 + Sie' 순서. 오는 방향이라 hier(여기)가 아니라 her(이리)를 써요.",
  },
  "Komm bitte!": {
    words: [
      ["Komm", "와", "kommen · du 명령형"],
      ["bitte", "부디, 좀", "공손 표현 부사"],
    ],
    grammar: ["imperative"],
    note: "du 명령형은 어간만 쓰고 주어 du를 생략한다.",
  },
  "Kommt bitte!": {
    words: [
      ["Kommt", "(너희) 와", "kommen · ihr 명령형"],
      ["bitte", "부디, 좀", "공손 표현 부사"],
    ],
    grammar: ["imperative"],
    note: "ihr 명령형은 ihr 현재형과 같고 주어 ihr만 뺀다.",
  },
  "Machen Sie das Fenster auf!": {
    words: [
      ["Machen", "여세요", "분리동사 aufmachen · Sie 명령형"],
      ["Sie", "당신(은)", "존칭 Sie"],
      ["das", "그", "4격 중성 정관사"],
      ["Fenster", "창문", "das Fenster (중성)"],
      ["auf", "(열다의) 접두사", "분리동사 aufmachen 의 접두사"],
    ],
    grammar: ["imperative", "separable-verbs"],
    note: "분리동사는 명령형에서도 접두사 auf가 문장 끝으로 간다.",
  },
  "Mach doch mal ein bisschen Sport!": {
    words: [
      ["Mach", "해", "machen · du 명령형"],
      ["doch", "(권유) 좀 ~해 봐", "불변화사 · 권유 강조"],
      ["mal", "한번, 좀", "불변화사 · 어조 완화"],
      ["ein", "(약간의)", "ein bisschen = 조금"],
      ["bisschen", "조금", "ein bisschen 고정 표현"],
      ["Sport", "운동", "der Sport (남성) · 무관사"],
    ],
    grammar: ["imperative"],
    note: "doch mal은 명령을 부드러운 권유('좀 ~해 봐')로 만든다.",
  },
  "Geh doch spazieren!": {
    words: [
      ["Geh", "가", "gehen · du 명령형"],
      ["doch", "(권유) 좀 ~해 봐", "불변화사 · 권유 강조"],
      ["spazieren", "산책하러", "spazieren gehen · 부정사"],
    ],
    grammar: ["imperative"],
    note: "spazieren gehen(산책하러 가다)에서 부정사 spazieren은 문장 끝에 온다.",
  },
  "Iss doch nicht so viel!": {
    words: [
      ["Iss", "먹어", "essen · du 명령형 (e→i)"],
      ["doch", "(강조) 좀", "불변화사"],
      ["nicht", "~하지 마", "부정어"],
      ["so", "그렇게", "정도 부사"],
      ["viel", "많이", "부사"],
    ],
    grammar: ["imperative", "stem-change", "negation"],
    note: "e→i 변화 동사는 du 명령형에도 변화가 남는다: essen → iss (du isst).",
  },
  "Sieh nicht so viel fern!": {
    words: [
      ["Sieh", "봐", "fernsehen · du 명령형 (e→ie)"],
      ["nicht", "~하지 마", "부정어"],
      ["so", "그렇게", "정도 부사"],
      ["viel", "많이", "부사"],
      ["fern", "(TV 보다의) 접두사", "분리동사 fernsehen 의 접두사"],
    ],
    grammar: ["imperative", "separable-verbs", "stem-change"],
    note: "fernsehen → Sieh ... fern! 어간 변화(e→ie)와 분리가 동시에 일어난다.",
  },
  "Hab keine Angst!": {
    words: [
      ["Hab", "가져 (가지지 마)", "haben · du 명령형"],
      ["keine", "어떤 ~도 없는", "부정관사 4격 (여성)"],
      ["Angst", "두려움", "die Angst (여성)"],
    ],
    grammar: ["imperative", "negation"],
    note: "직역은 '두려움을 갖지 마' → '무서워하지 마'. Angst haben = 무서워하다.",
  },
  "Sei nett zu mir!": {
    words: [
      ["Sei", "~해 (돼라)", "sein · du 명령형 (불규칙)"],
      ["nett", "친절한", "형용사 · 서술 용법"],
      ["zu", "~에게", "전치사 (3격 지배)"],
      ["mir", "나", "ich의 3격"],
    ],
    grammar: ["imperative", "sein-haben", "prep-dative"],
    note: "sein의 명령형은 불규칙: du → sei, ihr → seid, Sie → seien Sie.",
  },
  "Seien Sie nett zu mir!": {
    words: [
      ["Seien", "~하세요", "sein · Sie 명령형 (불규칙)"],
      ["Sie", "당신(은)", "존칭 Sie"],
      ["nett", "친절한", "형용사 · 서술 용법"],
      ["zu", "~에게", "전치사 (3격 지배)"],
      ["mir", "나", "ich의 3격"],
    ],
    grammar: ["imperative", "sein-haben", "prep-dative"],
    note: "Sie 명령형 중 sein만 불규칙(Seien Sie). 현재형 sind가 아님에 주의.",
  },
  "Schreib deinen Namen!": {
    words: [
      ["Schreib", "써", "schreiben · du 명령형"],
      ["deinen", "너의", "소유관사 4격 (남성)"],
      ["Namen", "이름", "der Name (남성) · 4격 Namen"],
    ],
    grammar: ["imperative", "possessive", "accusative"],
    note: "der Name는 4격에서 -n이 붙는 특수 명사: den Namen.",
  },
  "Hören Sie bitte zu!": {
    words: [
      ["Hören", "들으세요", "분리동사 zuhören · Sie 명령형"],
      ["Sie", "당신(은)", "존칭 Sie"],
      ["bitte", "부디", "공손 표현 부사"],
      ["zu", "(귀 기울이다의) 접두사", "분리동사 zuhören 의 접두사"],
    ],
    grammar: ["imperative", "separable-verbs"],
  },
  "Öffnen Sie bitte das Buch auf Seite 10.": {
    words: [
      ["Öffnen", "펴세요", "öffnen · Sie 명령형"],
      ["Sie", "당신(은)", "존칭 Sie"],
      ["bitte", "부디", "공손 표현 부사"],
      ["das", "그", "4격 중성 정관사"],
      ["Buch", "책", "das Buch (중성)"],
      ["auf", "~(쪽)에서", "전치사 · 쪽수 표현"],
      ["Seite", "쪽, 페이지", "die Seite (여성) · 무관사"],
      ["10", "10", "숫자 zehn"],
    ],
    grammar: ["imperative", "numbers"],
    note: "auf Seite 10 = 10쪽을(에서). 쪽수 앞에서는 관사를 쓰지 않는다.",
  },

  // ── Lektion 23: 교통수단 ──
  "Wie fahren Sie zur Arbeit?": {
    words: [
      ["Wie", "어떻게", "의문사"],
      ["fahren", "(타고) 가세요", "fahren · Sie 현재형"],
      ["Sie", "당신은", "존칭 Sie 1격"],
      ["zur", "~로", "zu + der 축약 (3격)"],
      ["Arbeit", "직장, 일", "die Arbeit (여성)"],
    ],
    grammar: ["w-questions", "prep-dative", "contractions"],
  },
  "Ich fahre mit dem Bus.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["fahre", "(타고) 간다", "fahren · ich 현재형"],
      ["mit", "~을 타고", "전치사 (3격 지배)"],
      ["dem", "(정관사)", "3격 남성 정관사"],
      ["Bus", "버스", "der Bus (남성)"],
    ],
    grammar: ["prep-dative", "dative"],
    note: "교통수단은 mit + 3격: mit dem Bus / mit der U-Bahn / mit dem Auto.",
  },
  "Ich fahre mit dem Zug nach Busan.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["fahre", "(타고) 간다", "fahren · ich 현재형"],
      ["mit", "~을 타고", "전치사 (3격 지배)"],
      ["dem", "(정관사)", "3격 남성 정관사"],
      ["Zug", "기차", "der Zug (남성)"],
      ["nach", "~로", "전치사 · 도시/나라 방향"],
      ["Busan", "(도시) 부산", "지명 · 무관사"],
    ],
    grammar: ["prep-dative", "place-directions", "word-order"],
    note: "방법(mit dem Zug) → 장소(nach Busan) 순서.",
  },
  "Ich fliege mit dem Flugzeug nach Deutschland.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["fliege", "날아간다", "fliegen · ich 현재형"],
      ["mit", "~을 타고", "전치사 (3격 지배)"],
      ["dem", "(정관사)", "3격 중성 정관사"],
      ["Flugzeug", "비행기", "das Flugzeug (중성)"],
      ["nach", "~로", "전치사 · 도시/나라 방향"],
      ["Deutschland", "독일", "나라 이름 · 무관사"],
    ],
    grammar: ["prep-dative", "place-directions"],
    note: "비행기로 갈 때는 fahren이 아니라 fliegen을 쓴다.",
  },
  "Ich fahre mit dem Fahrrad zur Uni.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["fahre", "(타고) 간다", "fahren · ich 현재형"],
      ["mit", "~을 타고", "전치사 (3격 지배)"],
      ["dem", "(정관사)", "3격 중성 정관사"],
      ["Fahrrad", "자전거", "das Fahrrad (중성)"],
      ["zur", "~로", "zu + der 축약 (3격)"],
      ["Uni", "대학", "die Uni (여성) · Universität 줄임"],
    ],
    grammar: ["prep-dative", "contractions", "place-directions"],
  },
  "Ich gehe zu Fuß.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["gehe", "간다", "gehen · ich 현재형"],
      ["zu", "(도보로의) ~로", "전치사 (3격 지배)"],
      ["Fuß", "발", "der Fuß (남성) · 무관사"],
    ],
    grammar: ["prep-dative", "greetings-phrases"],
    note: "zu Fuß(걸어서)는 고정 표현. mit dem Fuß라고 하지 않는다.",
  },
  "Ich gehe jeden Tag zu Fuß zur Arbeit.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["gehe", "간다", "gehen · ich 현재형"],
      ["jeden", "매, 모든", "jeder · 4격 남성 (시간 4격)"],
      ["Tag", "날", "der Tag (남성)"],
      ["zu", "(도보로의) ~로", "전치사 (3격 지배)"],
      ["Fuß", "발", "der Fuß (남성) · 무관사"],
      ["zur", "~로", "zu + der 축약 (3격)"],
      ["Arbeit", "직장", "die Arbeit (여성)"],
    ],
    grammar: ["word-order", "prep-dative", "contractions"],
    note: "시간(jeden Tag) → 방법(zu Fuß) → 장소(zur Arbeit) 순서의 전형적 예.",
  },
  "Ich nehme die U-Bahn.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["nehme", "탄다 (잡다)", "nehmen · ich 현재형"],
      ["die", "(정관사)", "4격 여성 정관사"],
      ["U-Bahn", "지하철", "die U-Bahn (여성)"],
    ],
    grammar: ["accusative", "stem-change"],
    note: "nehmen + 4격 = (교통수단을) 타다. du nimmst, er nimmt (e→i).",
  },
  "das Auto": {
    words: [
      ["das", "(정관사)", "중성 1격"],
      ["Auto", "자동차", "das Auto (중성)"],
    ],
    grammar: ["articles-gender"],
  },
  "der Bus": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Bus", "버스", "der Bus (남성)"],
    ],
    grammar: ["articles-gender"],
  },
  "die U-Bahn": {
    words: [
      ["die", "(정관사)", "여성 1격"],
      ["U-Bahn", "지하철", "die U-Bahn (여성)"],
    ],
    grammar: ["articles-gender"],
    note: "U = Untergrund(지하). die Bahn이 여성이므로 합성어도 여성.",
  },
  "die S-Bahn": {
    words: [
      ["die", "(정관사)", "여성 1격"],
      ["S-Bahn", "도시 철도", "die S-Bahn (여성)"],
    ],
    grammar: ["articles-gender"],
  },
  "der Zug": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Zug", "기차", "der Zug (남성) · 복수 Züge"],
    ],
    grammar: ["articles-gender"],
  },
  "das Fahrrad": {
    words: [
      ["das", "(정관사)", "중성 1격"],
      ["Fahrrad", "자전거", "das Fahrrad (중성)"],
    ],
    grammar: ["articles-gender"],
  },
  "das Flugzeug": {
    words: [
      ["das", "(정관사)", "중성 1격"],
      ["Flugzeug", "비행기", "das Flugzeug (중성)"],
    ],
    grammar: ["articles-gender"],
  },
  "das Taxi": {
    words: [
      ["das", "(정관사)", "중성 1격"],
      ["Taxi", "택시", "das Taxi (중성)"],
    ],
    grammar: ["articles-gender"],
  },
  "die Straßenbahn": {
    words: [
      ["die", "(정관사)", "여성 1격"],
      ["Straßenbahn", "트램, 노면전차", "die Straßenbahn (여성)"],
    ],
    grammar: ["articles-gender"],
    note: "합성명사의 성은 마지막 명사(die Bahn)를 따른다.",
  },
  "das Motorrad": {
    words: [
      ["das", "(정관사)", "중성 1격"],
      ["Motorrad", "오토바이", "das Motorrad (중성)"],
    ],
    grammar: ["articles-gender"],
  },
  "das Schiff": {
    words: [
      ["das", "(정관사)", "중성 1격"],
      ["Schiff", "배", "das Schiff (중성)"],
    ],
    grammar: ["articles-gender"],
  },
  "zu Fuß": {
    words: [
      ["zu", "(도보로의) ~로", "전치사 (3격 지배)"],
      ["Fuß", "발", "der Fuß (남성) · 무관사"],
    ],
    grammar: ["prep-dative"],
    note: "'걸어서'라는 고정 표현. 관사 없이 쓴다.",
  },
  "Wie kommst du zur Schule?": {
    words: [
      ["Wie", "어떻게", "의문사"],
      ["kommst", "오니, 가니", "kommen · du 현재형"],
      ["du", "너는", "인칭대명사 1격"],
      ["zur", "~로", "zu + der 축약 (3격)"],
      ["Schule", "학교", "die Schule (여성)"],
    ],
    grammar: ["w-questions", "contractions", "prep-dative"],
    note: "kommen은 '(목적지에) 도착하다/가다'의 의미로도 쓴다.",
  },
  "Ich nehme die U-Bahn. Und du?": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["nehme", "탄다", "nehmen · ich 현재형"],
      ["die", "(정관사)", "4격 여성 정관사"],
      ["U-Bahn", "지하철", "die U-Bahn (여성)"],
      ["Und", "그리고", "접속사"],
      ["du", "너는", "인칭대명사 1격"],
    ],
    grammar: ["accusative", "conjunctions"],
  },
  "Ich gehe zu Fuß, es ist nicht weit.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["gehe", "간다", "gehen · ich 현재형"],
      ["zu", "(도보로의) ~로", "전치사 (3격 지배)"],
      ["Fuß", "발", "der Fuß (남성) · 무관사"],
      ["es", "그것은 (거리)", "비인칭 es"],
      ["ist", "~이다", "sein · es 현재형"],
      ["nicht", "~지 않다", "부정어"],
      ["weit", "먼", "형용사 · 서술 용법"],
    ],
    grammar: ["negation", "es-gibt-impersonal", "adjectives-predicative"],
  },

  // ── Lektion 24: 길 찾기 ──
  "Wie komme ich zum Bahnhof?": {
    words: [
      ["Wie", "어떻게", "의문사"],
      ["komme", "가다 (도착하다)", "kommen · ich 현재형"],
      ["ich", "나는", "인칭대명사 1격"],
      ["zum", "~로", "zu + dem 축약 (3격)"],
      ["Bahnhof", "기차역", "der Bahnhof (남성)"],
    ],
    grammar: ["w-questions", "contractions", "place-directions"],
    note: "길 물을 때의 기본 표현. 건물·장소로 가는 방향은 zu + 3격.",
  },
  "Gibt es hier in der Nähe eine Post?": {
    words: [
      ["Gibt", "있다 (주다)", "geben · es 현재형"],
      ["es", "(비인칭 주어)", "비인칭 es · es gibt"],
      ["hier", "여기", "장소 부사"],
      ["in", "~에", "전치사 · 위치라 3격"],
      ["der", "(정관사)", "3격 여성 정관사"],
      ["Nähe", "근처", "die Nähe (여성)"],
      ["eine", "하나의", "4격 여성 부정관사"],
      ["Post", "우체국", "die Post (여성)"],
    ],
    grammar: ["es-gibt-impersonal", "yes-no-questions", "two-way-prepositions"],
    note: "es gibt + 4격 = '~이 있다'. in der Nähe = 근처에.",
  },
  "Wo kann ich hier eine Bank finden?": {
    words: [
      ["Wo", "어디서", "의문사 (위치)"],
      ["kann", "~할 수 있다", "können · ich 형"],
      ["ich", "나는", "인칭대명사 1격"],
      ["hier", "여기", "장소 부사"],
      ["eine", "하나의", "4격 여성 부정관사"],
      ["Bank", "은행", "die Bank (여성)"],
      ["finden", "찾다", "부정사 · 문장 끝"],
    ],
    grammar: ["modal-verbs", "sentence-bracket", "w-questions"],
    note: "화법조동사(kann)는 두 번째 자리, 본동사 부정사(finden)는 문장 끝.",
  },
  "Ich möchte zur Post.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["möchte", "~하고 싶다", "möchten · ich 형"],
      ["zur", "~로", "zu + der 축약 (3격)"],
      ["Post", "우체국", "die Post (여성)"],
    ],
    grammar: ["modal-verbs", "contractions", "moegen-moechten"],
    note: "방향이 분명하면 gehen을 생략할 수 있다: Ich möchte zur Post (gehen).",
  },
  "Die Post ist ganz in der Nähe.": {
    words: [
      ["Die", "(정관사)", "1격 여성 정관사"],
      ["Post", "우체국", "die Post (여성)"],
      ["ist", "있다", "sein · er/sie/es 현재형"],
      ["ganz", "아주, 바로", "강조 부사"],
      ["in", "~에", "전치사 · 위치라 3격"],
      ["der", "(정관사)", "3격 여성 정관사"],
      ["Nähe", "근처", "die Nähe (여성)"],
    ],
    grammar: ["two-way-prepositions", "sein-haben"],
  },
  "Gehen Sie zuerst immer geradeaus.": {
    words: [
      ["Gehen", "가세요", "gehen · Sie 명령형"],
      ["Sie", "당신(은)", "존칭 Sie"],
      ["zuerst", "먼저, 우선", "부사"],
      ["immer", "계속", "부사"],
      ["geradeaus", "곧장, 직진", "방향 부사"],
    ],
    grammar: ["imperative", "place-directions"],
    note: "immer geradeaus = 계속 쭉 직진.",
  },
  "Dann gehen Sie die zweite Straße nach rechts.": {
    words: [
      ["Dann", "그다음", "부사 · 문두 → 도치"],
      ["gehen", "가세요", "gehen · Sie 현재형 (지시)"],
      ["Sie", "당신은", "존칭 Sie 1격"],
      ["die", "(정관사)", "4격 여성 정관사"],
      ["zweite", "두 번째", "서수 · 형용사 어미 -e"],
      ["Straße", "길", "die Straße (여성)"],
      ["nach", "~쪽으로", "전치사 · 방향"],
      ["rechts", "오른쪽", "방향 부사"],
    ],
    grammar: ["word-order", "place-directions", "dates-ordinal"],
    note: "Dann이 문두에 와서 동사가 주어 앞. 길 안내에서 평서문 형태로 지시를 준다.",
  },
  "Auf der linken Seite sehen Sie dann die Post.": {
    words: [
      ["Auf", "~(쪽)에", "전치사 · 위치라 3격"],
      ["der", "(정관사)", "3격 여성 정관사"],
      ["linken", "왼쪽의", "형용사 link- · 3격 어미 -en"],
      ["Seite", "쪽, 편", "die Seite (여성)"],
      ["sehen", "보다", "sehen · Sie 현재형"],
      ["Sie", "당신은", "존칭 Sie 1격"],
      ["dann", "그러면", "부사"],
      ["die", "(정관사)", "4격 여성 정관사"],
      ["Post", "우체국", "die Post (여성)"],
    ],
    grammar: ["two-way-prepositions", "word-order", "accusative"],
    note: "장소 표현이 문두에 와서 동사(sehen)가 두 번째, 주어(Sie)가 그 뒤.",
  },
  "Biegen Sie links ab.": {
    words: [
      ["Biegen", "도세요", "분리동사 abbiegen · Sie 명령형"],
      ["Sie", "당신(은)", "존칭 Sie"],
      ["links", "왼쪽으로", "방향 부사"],
      ["ab", "(꺾다의) 접두사", "분리동사 abbiegen 의 접두사"],
    ],
    grammar: ["imperative", "separable-verbs", "place-directions"],
  },
  "Biegen Sie rechts ab.": {
    words: [
      ["Biegen", "도세요", "분리동사 abbiegen · Sie 명령형"],
      ["Sie", "당신(은)", "존칭 Sie"],
      ["rechts", "오른쪽으로", "방향 부사"],
      ["ab", "(꺾다의) 접두사", "분리동사 abbiegen 의 접두사"],
    ],
    grammar: ["imperative", "separable-verbs", "place-directions"],
  },
  "Gehen Sie über die Kreuzung.": {
    words: [
      ["Gehen", "가세요", "gehen · Sie 명령형"],
      ["Sie", "당신(은)", "존칭 Sie"],
      ["über", "~을 건너", "전치사 · 이동이라 4격"],
      ["die", "(정관사)", "4격 여성 정관사"],
      ["Kreuzung", "교차로", "die Kreuzung (여성)"],
    ],
    grammar: ["imperative", "two-way-prepositions"],
    note: "über + 4격 = ~을 가로질러(건너서). 건너가는 이동이므로 4격.",
  },
  "Das ist weit.": {
    words: [
      ["Das", "그것은", "지시대명사 1격"],
      ["ist", "~이다", "sein · er/sie/es 현재형"],
      ["weit", "먼", "형용사 · 서술 용법"],
    ],
    grammar: ["adjectives-predicative", "sein-haben"],
  },
  "Fahren Sie lieber mit dem Bus.": {
    words: [
      ["Fahren", "가세요 (타고)", "fahren · Sie 명령형"],
      ["Sie", "당신(은)", "존칭 Sie"],
      ["lieber", "차라리, 더 낫게", "gern의 비교급"],
      ["mit", "~을 타고", "전치사 (3격 지배)"],
      ["dem", "(정관사)", "3격 남성 정관사"],
      ["Bus", "버스", "der Bus (남성)"],
    ],
    grammar: ["imperative", "gern", "prep-dative"],
    note: "lieber는 '차라리 ~하는 게 낫다'는 권유를 나타낸다.",
  },
  "Das sind drei Stationen.": {
    words: [
      ["Das", "그것은", "지시대명사 1격"],
      ["sind", "~이다", "sein · 복수형 (sie sind)"],
      ["drei", "셋", "숫자"],
      ["Stationen", "정거장들", "복수형 (die Station → Stationen)"],
    ],
    grammar: ["plural", "sein-haben", "numbers"],
    note: "Das 뒤라도 명사가 복수면 동사는 sind를 쓴다.",
  },
  "Steigen Sie an der Goethestraße aus.": {
    words: [
      ["Steigen", "내리세요", "분리동사 aussteigen · Sie 명령형"],
      ["Sie", "당신(은)", "존칭 Sie"],
      ["an", "~에서", "전치사 · 위치라 3격"],
      ["der", "(정관사)", "3격 여성 정관사"],
      ["Goethestraße", "(거리) 괴테 거리", "die Goethestraße (여성)"],
      ["aus", "(내리다의) 접두사", "분리동사 aussteigen 의 접두사"],
    ],
    grammar: ["imperative", "separable-verbs", "two-way-prepositions"],
    note: "정류장 이름 앞에는 an + 3격. 타다는 einsteigen, 갈아타다는 umsteigen.",
  },
  "Es ist ungefähr 10 Minuten zu Fuß.": {
    words: [
      ["Es", "그것은 (거리)", "비인칭 es"],
      ["ist", "~이다", "sein · es 현재형"],
      ["ungefähr", "약, 대략", "부사"],
      ["10", "10", "숫자 zehn"],
      ["Minuten", "분", "복수형 (die Minute → Minuten)"],
      ["zu", "(도보로의) ~로", "전치사 (3격 지배)"],
      ["Fuß", "발", "der Fuß (남성) · 무관사"],
    ],
    grammar: ["es-gibt-impersonal", "numbers", "plural"],
    note: "거리·시간을 말할 때 비인칭 es를 주어로 쓴다.",
  },
  "die Kreuzung": {
    words: [
      ["die", "(정관사)", "여성 1격"],
      ["Kreuzung", "교차로", "die Kreuzung (여성) · -ung"],
    ],
    grammar: ["articles-gender"],
    note: "-ung으로 끝나는 명사는 항상 여성.",
  },
  "die Ampel": {
    words: [
      ["die", "(정관사)", "여성 1격"],
      ["Ampel", "신호등", "die Ampel (여성)"],
    ],
    grammar: ["articles-gender"],
  },
  "die Brücke": {
    words: [
      ["die", "(정관사)", "여성 1격"],
      ["Brücke", "다리", "die Brücke (여성)"],
    ],
    grammar: ["articles-gender"],
  },
  "die Straße": {
    words: [
      ["die", "(정관사)", "여성 1격"],
      ["Straße", "길, 거리", "die Straße (여성)"],
    ],
    grammar: ["articles-gender"],
  },
  "Entschuldigung, wie komme ich zum Bahnhof?": {
    words: [
      ["Entschuldigung", "실례합니다", "die Entschuldigung · 인사말"],
      ["wie", "어떻게", "의문사"],
      ["komme", "가다 (도착하다)", "kommen · ich 현재형"],
      ["ich", "나는", "인칭대명사 1격"],
      ["zum", "~로", "zu + dem 축약 (3격)"],
      ["Bahnhof", "기차역", "der Bahnhof (남성)"],
    ],
    grammar: ["w-questions", "contractions", "greetings-phrases"],
  },
  "Gehen Sie geradeaus, dann biegen Sie rechts ab.": {
    words: [
      ["Gehen", "가세요", "gehen · Sie 명령형"],
      ["Sie", "당신(은)", "존칭 Sie"],
      ["geradeaus", "직진", "방향 부사"],
      ["dann", "그다음", "부사 · 문두 → 도치"],
      ["biegen", "도세요", "분리동사 abbiegen · Sie 형"],
      ["Sie", "당신(은)", "존칭 Sie"],
      ["rechts", "오른쪽으로", "방향 부사"],
      ["ab", "(꺾다의) 접두사", "분리동사 abbiegen 의 접두사"],
    ],
    grammar: ["imperative", "separable-verbs", "place-directions"],
  },
  "Und wie weit ist das?": {
    words: [
      ["Und", "그리고", "접속사"],
      ["wie", "얼마나", "의문사 · wie + 형용사"],
      ["weit", "먼", "형용사"],
      ["ist", "~이다", "sein · er/sie/es 현재형"],
      ["das", "그것은", "지시대명사 1격"],
    ],
    grammar: ["w-questions", "conjunctions"],
    note: "wie + 형용사 = '얼마나 ~한가': wie weit(얼마나 먼), wie alt(몇 살).",
  },
  "Ungefähr fünf Minuten.": {
    words: [
      ["Ungefähr", "약, 대략", "부사"],
      ["fünf", "다섯", "숫자"],
      ["Minuten", "분", "복수형 (die Minute → Minuten)"],
    ],
    grammar: ["numbers", "plural"],
  },

  // ── Lektion 25: 위치 (Wo? + 3격) ──
  "Das Buch liegt auf dem Tisch.": {
    words: [
      ["Das", "(정관사)", "1격 중성 정관사"],
      ["Buch", "책", "das Buch (중성)"],
      ["liegt", "놓여 있다 (눕혀서)", "liegen · er/sie/es 현재형"],
      ["auf", "~위에", "전치사 · 위치라 3격"],
      ["dem", "(정관사)", "3격 남성 정관사"],
      ["Tisch", "탁자", "der Tisch (남성)"],
    ],
    grammar: ["two-way-prepositions", "dative"],
    note: "liegen(놓여 있다)은 위치 동사 → Wo? → 3격(dem Tisch).",
  },
  "Wo liegt mein Wörterbuch?": {
    words: [
      ["Wo", "어디에", "의문사 (위치)"],
      ["liegt", "놓여 있다", "liegen · er/sie/es 현재형"],
      ["mein", "나의", "소유관사 1격 (중성)"],
      ["Wörterbuch", "사전", "das Wörterbuch (중성)"],
    ],
    grammar: ["w-questions", "possessive", "two-way-prepositions"],
  },
  "Die Katze sitzt unter dem Stuhl.": {
    words: [
      ["Die", "(정관사)", "1격 여성 정관사"],
      ["Katze", "고양이", "die Katze (여성)"],
      ["sitzt", "앉아 있다", "sitzen · er/sie/es 현재형"],
      ["unter", "~아래에", "전치사 · 위치라 3격"],
      ["dem", "(정관사)", "3격 남성 정관사"],
      ["Stuhl", "의자", "der Stuhl (남성)"],
    ],
    grammar: ["two-way-prepositions", "dative"],
  },
  "Wo hängt die Uhr?": {
    words: [
      ["Wo", "어디에", "의문사 (위치)"],
      ["hängt", "걸려 있다", "hängen · er/sie/es 현재형"],
      ["die", "(정관사)", "1격 여성 정관사"],
      ["Uhr", "시계", "die Uhr (여성)"],
    ],
    grammar: ["w-questions", "two-way-prepositions"],
  },
  "Die Uhr hängt an der Wand.": {
    words: [
      ["Die", "(정관사)", "1격 여성 정관사"],
      ["Uhr", "시계", "die Uhr (여성)"],
      ["hängt", "걸려 있다", "hängen · er/sie/es 현재형"],
      ["an", "~에 (붙어)", "전치사 · 위치라 3격"],
      ["der", "(정관사)", "3격 여성 정관사"],
      ["Wand", "벽", "die Wand (여성)"],
    ],
    grammar: ["two-way-prepositions", "dative"],
    note: "an = 수직면에 붙어 있음(벽·문). auf = 위 표면.",
  },
  "Das Hotel ist neben der Bank.": {
    words: [
      ["Das", "(정관사)", "1격 중성 정관사"],
      ["Hotel", "호텔", "das Hotel (중성)"],
      ["ist", "있다", "sein · er/sie/es 현재형"],
      ["neben", "~옆에", "전치사 · 위치라 3격"],
      ["der", "(정관사)", "3격 여성 정관사"],
      ["Bank", "은행", "die Bank (여성)"],
    ],
    grammar: ["two-way-prepositions", "dative"],
  },
  "Er wohnt gegenüber vom Kindergarten.": {
    words: [
      ["Er", "그는", "인칭대명사 1격"],
      ["wohnt", "산다", "wohnen · er 현재형"],
      ["gegenüber", "맞은편에", "전치사/부사 (3격)"],
      ["vom", "~의", "von + dem 축약 (3격)"],
      ["Kindergarten", "유치원", "der Kindergarten (남성)"],
    ],
    grammar: ["prep-dative", "contractions"],
    note: "gegenüber von + 3격 = ~의 맞은편에.",
  },
  "Sie lernt am besten in der Bibliothek.": {
    words: [
      ["Sie", "그녀는", "인칭대명사 1격"],
      ["lernt", "공부한다", "lernen · sie 현재형"],
      ["am", "(최상급)", "am + -sten 최상급 형태"],
      ["besten", "가장 잘", "gut의 최상급 (am besten)"],
      ["in", "~에서", "전치사 · 위치라 3격"],
      ["der", "(정관사)", "3격 여성 정관사"],
      ["Bibliothek", "도서관", "die Bibliothek (여성)"],
    ],
    grammar: ["two-way-prepositions", "gern"],
    note: "gut → besser → am besten. 여기서 am은 전치사 축약이 아니라 최상급 표지.",
  },
  "Wo ist mein Schlüssel?": {
    words: [
      ["Wo", "어디에", "의문사 (위치)"],
      ["ist", "있다", "sein · er/sie/es 현재형"],
      ["mein", "나의", "소유관사 1격 (남성)"],
      ["Schlüssel", "열쇠", "der Schlüssel (남성)"],
    ],
    grammar: ["w-questions", "possessive"],
  },
  "Wo ist mein Handy?": {
    words: [
      ["Wo", "어디에", "의문사 (위치)"],
      ["ist", "있다", "sein · er/sie/es 현재형"],
      ["mein", "나의", "소유관사 1격 (중성)"],
      ["Handy", "휴대폰", "das Handy (중성)"],
    ],
    grammar: ["w-questions", "possessive"],
  },
  "Es liegt auf dem Tisch.": {
    words: [
      ["Es", "그것은", "인칭대명사 1격 (das Handy)"],
      ["liegt", "놓여 있다", "liegen · es 현재형"],
      ["auf", "~위에", "전치사 · 위치라 3격"],
      ["dem", "(정관사)", "3격 남성 정관사"],
      ["Tisch", "탁자", "der Tisch (남성)"],
    ],
    grammar: ["two-way-prepositions", "personal-pronouns"],
    note: "es는 비인칭이 아니라 das Handy(중성)를 받는 대명사.",
  },

  // ── Lektion 26: 이동 (Wohin? + 4격) ──
  "Ich lege das Buch auf den Tisch.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["lege", "놓는다 (눕혀서)", "legen · ich 현재형"],
      ["das", "(정관사)", "4격 중성 정관사"],
      ["Buch", "책", "das Buch (중성)"],
      ["auf", "~위로", "전치사 · 이동이라 4격"],
      ["den", "(정관사)", "4격 남성 정관사"],
      ["Tisch", "탁자", "der Tisch (남성)"],
    ],
    grammar: ["two-way-prepositions", "accusative"],
    note: "legen(놓다)은 이동 동사 → Wohin? → 4격(den Tisch). 결과는 liegen + 3격.",
  },
  "Ich stelle den Fernseher neben das Regal.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["stelle", "세워 놓는다", "stellen · ich 현재형"],
      ["den", "(정관사)", "4격 남성 정관사"],
      ["Fernseher", "텔레비전", "der Fernseher (남성)"],
      ["neben", "~옆으로", "전치사 · 이동이라 4격"],
      ["das", "(정관사)", "4격 중성 정관사"],
      ["Regal", "선반", "das Regal (중성)"],
    ],
    grammar: ["two-way-prepositions", "accusative"],
    note: "stellen(세워 놓다) → 결과 상태는 stehen: Der Fernseher steht neben dem Regal.",
  },
  "Ich setze mein Kind auf den Stuhl.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["setze", "앉힌다", "setzen · ich 현재형"],
      ["mein", "나의", "소유관사 4격 (중성)"],
      ["Kind", "아이", "das Kind (중성)"],
      ["auf", "~위로", "전치사 · 이동이라 4격"],
      ["den", "(정관사)", "4격 남성 정관사"],
      ["Stuhl", "의자", "der Stuhl (남성)"],
    ],
    grammar: ["two-way-prepositions", "accusative", "possessive"],
    note: "setzen(앉히다) → 결과 상태는 sitzen(앉아 있다) + 3격.",
  },
  "Ich hänge das Bild an die Wand.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["hänge", "건다", "hängen · ich 현재형 (타동사)"],
      ["das", "(정관사)", "4격 중성 정관사"],
      ["Bild", "그림", "das Bild (중성)"],
      ["an", "~에 (붙여)", "전치사 · 이동이라 4격"],
      ["die", "(정관사)", "4격 여성 정관사"],
      ["Wand", "벽", "die Wand (여성)"],
    ],
    grammar: ["two-way-prepositions", "accusative"],
    note: "hängen은 '걸다(+4격 목적어, an die Wand)'와 '걸려 있다(an der Wand)' 둘 다 된다.",
  },
  "Ich stecke mein Taschentuch in die Hosentasche.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["stecke", "꽂아 넣는다", "stecken · ich 현재형"],
      ["mein", "나의", "소유관사 4격 (중성)"],
      ["Taschentuch", "손수건", "das Taschentuch (중성)"],
      ["in", "~안으로", "전치사 · 이동이라 4격"],
      ["die", "(정관사)", "4격 여성 정관사"],
      ["Hosentasche", "바지 주머니", "die Hosentasche (여성)"],
    ],
    grammar: ["two-way-prepositions", "accusative", "possessive"],
  },
  "Er geht in die Küche.": {
    words: [
      ["Er", "그는", "인칭대명사 1격"],
      ["geht", "간다", "gehen · er 현재형"],
      ["in", "~안으로", "전치사 · 이동이라 4격"],
      ["die", "(정관사)", "4격 여성 정관사"],
      ["Küche", "부엌", "die Küche (여성)"],
    ],
    grammar: ["two-way-prepositions", "accusative"],
    note: "비교: Er ist in der Küche(부엌에 있다, 3격) / Er geht in die Küche(부엌으로 간다, 4격).",
  },
  "Sie stellt die Vase auf den Tisch.": {
    words: [
      ["Sie", "그녀는", "인칭대명사 1격"],
      ["stellt", "세워 놓는다", "stellen · sie 현재형"],
      ["die", "(정관사)", "4격 여성 정관사"],
      ["Vase", "꽃병", "die Vase (여성)"],
      ["auf", "~위로", "전치사 · 이동이라 4격"],
      ["den", "(정관사)", "4격 남성 정관사"],
      ["Tisch", "탁자", "der Tisch (남성)"],
    ],
    grammar: ["two-way-prepositions", "accusative"],
  },
  "Das Kind läuft hinter das Haus.": {
    words: [
      ["Das", "(정관사)", "1격 중성 정관사"],
      ["Kind", "아이", "das Kind (중성)"],
      ["läuft", "달려간다", "laufen · es 현재형 (au→äu)"],
      ["hinter", "~뒤로", "전치사 · 이동이라 4격"],
      ["das", "(정관사)", "4격 중성 정관사"],
      ["Haus", "집", "das Haus (중성)"],
    ],
    grammar: ["two-way-prepositions", "stem-change"],
    note: "hinter das Haus(4격) = 집 뒤쪽으로 이동. hinter dem Haus(3격)면 집 뒤에서.",
  },
  "Wohin legst du das Buch?": {
    words: [
      ["Wohin", "어디로", "의문사 (방향)"],
      ["legst", "놓니", "legen · du 현재형"],
      ["du", "너는", "인칭대명사 1격"],
      ["das", "(정관사)", "4격 중성 정관사"],
      ["Buch", "책", "das Buch (중성)"],
    ],
    grammar: ["w-questions", "two-way-prepositions"],
    note: "Wohin? 질문에는 4격 전치사구로 답한다.",
  },
  "Ich lege es in die Tasche.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["lege", "놓는다", "legen · ich 현재형"],
      ["es", "그것을", "es 4격 (das Buch)"],
      ["in", "~안으로", "전치사 · 이동이라 4격"],
      ["die", "(정관사)", "4격 여성 정관사"],
      ["Tasche", "가방", "die Tasche (여성)"],
    ],
    grammar: ["two-way-prepositions", "personal-pronouns", "accusative"],
  },

  // ── Lektion 27: 집 ──
  "Meine Wohnung hat drei Zimmer.": {
    words: [
      ["Meine", "나의", "소유관사 1격 (여성)"],
      ["Wohnung", "집 (아파트)", "die Wohnung (여성)"],
      ["hat", "가지고 있다", "haben · er/sie/es 현재형"],
      ["drei", "셋", "숫자"],
      ["Zimmer", "방", "복수형 (das Zimmer → Zimmer)"],
    ],
    grammar: ["possessive", "sein-haben", "plural"],
    note: "das Zimmer는 복수형이 단수와 같다(무변화).",
  },
  "Das Haus hat sechs Zimmer.": {
    words: [
      ["Das", "(정관사)", "1격 중성 정관사"],
      ["Haus", "집", "das Haus (중성)"],
      ["hat", "가지고 있다", "haben · er/sie/es 현재형"],
      ["sechs", "여섯", "숫자"],
      ["Zimmer", "방", "복수형 (das Zimmer → Zimmer)"],
    ],
    grammar: ["sein-haben", "plural", "numbers"],
  },
  "Im Erdgeschoss sind zwei Zimmer.": {
    words: [
      ["Im", "~에", "in + dem 축약 (3격)"],
      ["Erdgeschoss", "1층 (지상층)", "das Erdgeschoss (중성)"],
      ["sind", "있다", "sein · 복수형"],
      ["zwei", "둘", "숫자"],
      ["Zimmer", "방", "복수형 (das Zimmer → Zimmer)"],
    ],
    grammar: ["contractions", "two-way-prepositions", "word-order"],
    note: "주어는 zwei Zimmer(복수)이므로 sind. 장소가 문두라 도치.",
  },
  "Im ersten Stock sind drei Zimmer.": {
    words: [
      ["Im", "~에", "in + dem 축약 (3격)"],
      ["ersten", "첫 번째", "서수 erst- · 3격 어미 -en"],
      ["Stock", "층", "der Stock (남성)"],
      ["sind", "있다", "sein · 복수형"],
      ["drei", "셋", "숫자"],
      ["Zimmer", "방", "복수형 (das Zimmer → Zimmer)"],
    ],
    grammar: ["contractions", "dates-ordinal", "word-order"],
    note: "독일의 erster Stock은 지상층(Erdgeschoss) 바로 위 = 한국식 2층.",
  },
  "Neben dem Haus ist eine Garage.": {
    words: [
      ["Neben", "~옆에", "전치사 · 위치라 3격"],
      ["dem", "(정관사)", "3격 중성 정관사"],
      ["Haus", "집", "das Haus (중성)"],
      ["ist", "있다", "sein · er/sie/es 현재형"],
      ["eine", "하나의", "1격 여성 부정관사"],
      ["Garage", "차고", "die Garage (여성)"],
    ],
    grammar: ["two-way-prepositions", "word-order"],
  },
  "Das Sofa steht vor dem Fernseher.": {
    words: [
      ["Das", "(정관사)", "1격 중성 정관사"],
      ["Sofa", "소파", "das Sofa (중성)"],
      ["steht", "서 있다 (놓여 있다)", "stehen · es 현재형"],
      ["vor", "~앞에", "전치사 · 위치라 3격"],
      ["dem", "(정관사)", "3격 남성 정관사"],
      ["Fernseher", "텔레비전", "der Fernseher (남성)"],
    ],
    grammar: ["two-way-prepositions", "dative"],
    note: "가구처럼 세워진 물건은 stehen으로 '있다'를 표현한다.",
  },
  "Wie gefällt dir meine Wohnung?": {
    words: [
      ["Wie", "어떻게", "의문사"],
      ["gefällt", "마음에 들다", "gefallen · sie 현재형 (a→ä)"],
      ["dir", "너에게", "du의 3격"],
      ["meine", "나의", "소유관사 1격 (여성)"],
      ["Wohnung", "집", "die Wohnung (여성)"],
    ],
    grammar: ["dative", "possessive", "w-questions"],
    note: "gefallen은 '~에게 마음에 들다': 주어는 meine Wohnung, 사람은 3격(dir).",
  },
  "Sie ist sehr schön!": {
    words: [
      ["Sie", "그것은 (집)", "sie 1격 (die Wohnung)"],
      ["ist", "~이다", "sein · sie 현재형"],
      ["sehr", "아주", "정도 부사"],
      ["schön", "예쁜, 멋진", "형용사 · 서술 용법"],
    ],
    grammar: ["adjectives-predicative", "personal-pronouns"],
    note: "Sie는 '그녀'가 아니라 여성명사 die Wohnung을 받는 대명사.",
  },
  "das Wohnzimmer": {
    words: [
      ["das", "(정관사)", "중성 1격"],
      ["Wohnzimmer", "거실", "das Wohnzimmer (중성)"],
    ],
    grammar: ["articles-gender"],
  },
  "das Schlafzimmer": {
    words: [
      ["das", "(정관사)", "중성 1격"],
      ["Schlafzimmer", "침실", "das Schlafzimmer (중성)"],
    ],
    grammar: ["articles-gender"],
  },
  "die Küche": {
    words: [
      ["die", "(정관사)", "여성 1격"],
      ["Küche", "주방", "die Küche (여성)"],
    ],
    grammar: ["articles-gender"],
  },
  "das Badezimmer": {
    words: [
      ["das", "(정관사)", "중성 1격"],
      ["Badezimmer", "욕실", "das Badezimmer (중성)"],
    ],
    grammar: ["articles-gender"],
  },
  "das Arbeitszimmer": {
    words: [
      ["das", "(정관사)", "중성 1격"],
      ["Arbeitszimmer", "서재", "das Arbeitszimmer (중성)"],
    ],
    grammar: ["articles-gender"],
  },
  "das Sofa": {
    words: [
      ["das", "(정관사)", "중성 1격"],
      ["Sofa", "소파", "das Sofa (중성)"],
    ],
    grammar: ["articles-gender"],
  },
  "der Tisch": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Tisch", "탁자", "der Tisch (남성)"],
    ],
    grammar: ["articles-gender"],
  },
  "der Stuhl": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Stuhl", "의자", "der Stuhl (남성)"],
    ],
    grammar: ["articles-gender"],
  },
  "das Bett": {
    words: [
      ["das", "(정관사)", "중성 1격"],
      ["Bett", "침대", "das Bett (중성)"],
    ],
    grammar: ["articles-gender"],
  },
  "der Schrank": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Schrank", "옷장, 장", "der Schrank (남성)"],
    ],
    grammar: ["articles-gender"],
  },
  "das Kinderzimmer": {
    words: [
      ["das", "(정관사)", "중성 1격"],
      ["Kinderzimmer", "아이방", "das Kinderzimmer (중성)"],
    ],
    grammar: ["articles-gender"],
  },
  "der Flur": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Flur", "복도, 현관", "der Flur (남성)"],
    ],
    grammar: ["articles-gender"],
  },
  "der Balkon": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Balkon", "발코니", "der Balkon (남성)"],
    ],
    grammar: ["articles-gender"],
  },
  "die Terrasse": {
    words: [
      ["die", "(정관사)", "여성 1격"],
      ["Terrasse", "테라스", "die Terrasse (여성)"],
    ],
    grammar: ["articles-gender"],
  },
  "der Garten": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Garten", "정원", "der Garten (남성)"],
    ],
    grammar: ["articles-gender"],
  },
  "die Garage": {
    words: [
      ["die", "(정관사)", "여성 1격"],
      ["Garage", "차고", "die Garage (여성)"],
    ],
    grammar: ["articles-gender"],
  },
  "Wie ist deine Wohnung?": {
    words: [
      ["Wie", "어떻게, 어떤", "의문사"],
      ["ist", "~이다", "sein · sie 현재형"],
      ["deine", "너의", "소유관사 1격 (여성)"],
      ["Wohnung", "집", "die Wohnung (여성)"],
    ],
    grammar: ["w-questions", "possessive"],
  },
  "Sie hat ein Wohnzimmer, eine Küche und zwei Schlafzimmer.": {
    words: [
      ["Sie", "그것은 (집)", "sie 1격 (die Wohnung)"],
      ["hat", "가지고 있다", "haben · sie 현재형"],
      ["ein", "하나의", "4격 중성 부정관사"],
      ["Wohnzimmer", "거실", "das Wohnzimmer (중성)"],
      ["eine", "하나의", "4격 여성 부정관사"],
      ["Küche", "주방", "die Küche (여성)"],
      ["und", "그리고", "접속사"],
      ["zwei", "둘", "숫자"],
      ["Schlafzimmer", "침실", "복수형 (무변화)"],
    ],
    grammar: ["accusative", "sein-haben", "plural"],
    note: "haben은 4격을 취한다. 중성·여성 4격은 1격과 모양이 같다.",
  },

  // ── Lektion 28: 도움 요청 ──
  "Können Sie mir bitte helfen?": {
    words: [
      ["Können", "~할 수 있다", "können · Sie 형"],
      ["Sie", "당신은", "존칭 Sie 1격"],
      ["mir", "나를 (나에게)", "ich의 3격"],
      ["bitte", "부디", "공손 표현 부사"],
      ["helfen", "돕다", "부정사 · 문장 끝"],
    ],
    grammar: ["modal-verbs", "dative", "yes-no-questions"],
    note: "helfen은 3격 동사라 '나를 돕다'도 mir(3격)를 쓴다.",
  },
  "Ich brauche Hilfe.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["brauche", "필요하다", "brauchen · ich 현재형"],
      ["Hilfe", "도움", "die Hilfe (여성) · 무관사"],
    ],
    grammar: ["accusative"],
  },
  "Ich brauche Ihre Hilfe.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["brauche", "필요하다", "brauchen · ich 현재형"],
      ["Ihre", "당신의", "소유관사 Ihr · 4격 (여성)"],
      ["Hilfe", "도움", "die Hilfe (여성)"],
    ],
    grammar: ["possessive", "accusative", "formal-informal"],
    note: "대문자 Ihr = 당신의(존칭). 소문자 ihr는 그녀의/그들의.",
  },
  "Entschuldigen Sie, die Heizung funktioniert nicht.": {
    words: [
      ["Entschuldigen", "실례하다, 용서하다", "entschuldigen · Sie 명령형"],
      ["Sie", "당신(은)", "존칭 Sie"],
      ["die", "(정관사)", "1격 여성 정관사"],
      ["Heizung", "난방", "die Heizung (여성)"],
      ["funktioniert", "작동한다", "funktionieren · sie 현재형"],
      ["nicht", "~지 않다", "부정어"],
    ],
    grammar: ["negation", "greetings-phrases", "imperative"],
    note: "Entschuldigen Sie = '실례합니다'의 공손한 형태 (Entschuldigung과 같은 뜻).",
  },
  "Der Fernseher ist kaputt.": {
    words: [
      ["Der", "(정관사)", "1격 남성 정관사"],
      ["Fernseher", "텔레비전", "der Fernseher (남성)"],
      ["ist", "~이다", "sein · er 현재형"],
      ["kaputt", "고장 난", "형용사 · 서술 용법"],
    ],
    grammar: ["adjectives-predicative", "sein-haben"],
  },
  "Können Sie einen Techniker schicken?": {
    words: [
      ["Können", "~할 수 있다", "können · Sie 형"],
      ["Sie", "당신은", "존칭 Sie 1격"],
      ["einen", "한 명의", "4격 남성 부정관사"],
      ["Techniker", "기술자, 기사", "der Techniker (남성)"],
      ["schicken", "보내다", "부정사 · 문장 끝"],
    ],
    grammar: ["modal-verbs", "accusative", "sentence-bracket"],
  },
  "Wir haben hier ein Problem.": {
    words: [
      ["Wir", "우리는", "인칭대명사 1격"],
      ["haben", "가지고 있다", "haben · wir 현재형"],
      ["hier", "여기", "장소 부사"],
      ["ein", "하나의", "4격 중성 부정관사"],
      ["Problem", "문제", "das Problem (중성)"],
    ],
    grammar: ["sein-haben", "accusative"],
  },
  "Wie bitte?": {
    words: [
      ["Wie", "어떻게", "의문사"],
      ["bitte", "(부탁) 제발", "공손 표현 부사"],
    ],
    grammar: ["greetings-phrases"],
    note: "못 알아들었을 때 되묻는 고정 표현 ('뭐라고요?').",
  },
  "Können Sie das bitte wiederholen?": {
    words: [
      ["Können", "~할 수 있다", "können · Sie 형"],
      ["Sie", "당신은", "존칭 Sie 1격"],
      ["das", "그것을", "지시대명사 4격"],
      ["bitte", "부디", "공손 표현 부사"],
      ["wiederholen", "반복하다", "부정사 · 비분리동사"],
    ],
    grammar: ["modal-verbs", "sentence-bracket", "yes-no-questions"],
    note: "wiederholen(반복하다)은 분리되지 않는다: Ich wiederhole.",
  },
  "Ich verstehe nicht.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["verstehe", "이해한다", "verstehen · ich 현재형"],
      ["nicht", "~지 않다", "부정어"],
    ],
    grammar: ["negation", "greetings-phrases"],
  },
  "Was bedeutet ...?": {
    words: [
      ["Was", "무엇을", "의문사"],
      ["bedeutet", "의미한다", "bedeuten · es 현재형 (-et)"],
    ],
    grammar: ["w-questions", "present-regular", "greetings-phrases"],
    note: "어간이 -t로 끝나 er/es형에 -et가 붙는다: bedeuten → bedeutet.",
  },
  "Entschuldigung, ich verstehe nicht. Können Sie das bitte wiederholen?": {
    words: [
      ["Entschuldigung", "실례합니다", "die Entschuldigung · 인사말"],
      ["ich", "나는", "인칭대명사 1격"],
      ["verstehe", "이해한다", "verstehen · ich 현재형"],
      ["nicht", "~지 않다", "부정어"],
      ["Können", "~할 수 있다", "können · Sie 형"],
      ["Sie", "당신은", "존칭 Sie 1격"],
      ["das", "그것을", "지시대명사 4격"],
      ["bitte", "부디", "공손 표현 부사"],
      ["wiederholen", "반복하다", "부정사 · 문장 끝"],
    ],
    grammar: ["modal-verbs", "negation", "greetings-phrases"],
  },
  "Natürlich. Gehen Sie hier links.": {
    words: [
      ["Natürlich", "물론이죠", "부사"],
      ["Gehen", "가세요", "gehen · Sie 명령형"],
      ["Sie", "당신(은)", "존칭 Sie"],
      ["hier", "여기서", "장소 부사"],
      ["links", "왼쪽으로", "방향 부사"],
    ],
    grammar: ["imperative", "place-directions"],
  },
};
