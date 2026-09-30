import type { SentenceGloss } from "@/lib/gloss";

export const BAND3: Record<string, SentenceGloss> = {
  // ── Lektion 15 ──
  "Was darf's denn sein?": {
    words: [
      ["Was", "무엇", "의문사"],
      ["darf's", "~해도 될까 (+그것이)", "dürfen · es 형 + es 축약"],
      ["denn", "(그래서, 부드럽게)", "의문문 불변화사"],
      ["sein", "~이다", "sein · 동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "greetings-phrases"],
    note: "darf's = darf es. 직역 '무엇이어도 될까요?' — 가게·식당에서 점원이 주문을 받는 고정 표현.",
  },
  "Was möchten Sie trinken?": {
    words: [
      ["Was", "무엇을", "의문사 (4격)"],
      ["möchten", "~하고 싶다", "möchten · Sie 형"],
      ["Sie", "당신은", "존칭 Sie 1격"],
      ["trinken", "마시다", "동사원형 (문장 끝)"],
    ],
    grammar: ["moegen-moechten", "w-questions", "sentence-bracket"],
  },
  "Was möchten Sie bestellen?": {
    words: [
      ["Was", "무엇을", "의문사 (4격)"],
      ["möchten", "~하고 싶다", "möchten · Sie 형"],
      ["Sie", "당신은", "존칭 Sie 1격"],
      ["bestellen", "주문하다", "동사원형 (문장 끝)"],
    ],
    grammar: ["moegen-moechten", "w-questions", "sentence-bracket"],
  },
  "Sonst noch etwas?": {
    words: [
      ["Sonst", "그 밖에", "부사"],
      ["noch", "더", "부사"],
      ["etwas", "무언가", "부정대명사"],
    ],
    grammar: ["greetings-phrases"],
    note: "동사가 생략된 짧은 질문. 점원이 추가 주문을 물을 때 쓰는 고정 표현.",
  },
  "Ich möchte ... bestellen.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["möchte", "~하고 싶다", "möchten · ich 형"],
      ["bestellen", "주문하다", "동사원형 (문장 끝)"],
    ],
    grammar: ["moegen-moechten", "modal-verbs", "sentence-bracket"],
    note: "... 자리에 주문할 음식(4격)을 넣는다: Ich möchte einen Salat bestellen.",
  },
  "Ich nehme einen Salat.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["nehme", "(주문으로) 고르다, 먹겠다", "nehmen · ich 현재형"],
      ["einen", "(하나의)", "부정관사 4격 (남성)"],
      ["Salat", "샐러드", "der Salat (남성)"],
    ],
    grammar: ["accusative", "stem-change"],
    note: "nehmen은 du nimmst, er nimmt (e→i). 주문할 때 '~로 할게요'.",
  },
  "Ich hätte gerne ein Bier.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["hätte", "가졌으면 한다", "haben · 접속법 2식 (ich)"],
      ["gerne", "기꺼이", "부사 (= gern)"],
      ["ein", "(하나의)", "부정관사 4격 (중성)"],
      ["Bier", "맥주", "das Bier (중성)"],
    ],
    grammar: ["moegen-moechten", "accusative", "gern"],
    note: "Ich hätte gern(e) + 4격 = '~ 주세요'. möchte와 같은 공손한 주문 표현.",
  },
  "Bitte bringen Sie mir einen Kaffee.": {
    words: [
      ["Bitte", "~해 주세요", "공손 부사"],
      ["bringen", "가져오다", "bringen · Sie 명령형"],
      ["Sie", "당신이", "존칭 Sie"],
      ["mir", "나에게", "ich의 3격"],
      ["einen", "(한 잔의)", "부정관사 4격 (남성)"],
      ["Kaffee", "커피", "der Kaffee (남성)"],
    ],
    grammar: ["imperative", "dative", "accusative"],
    note: "Sie 명령형은 동사 + Sie 순서. 3격(mir, 받는 사람) + 4격(einen Kaffee, 물건).",
  },
  "Was empfehlen Sie?": {
    words: [
      ["Was", "무엇을", "의문사 (4격)"],
      ["empfehlen", "추천하다", "empfehlen · Sie 현재형"],
      ["Sie", "당신은", "존칭 Sie 1격"],
    ],
    grammar: ["w-questions", "stem-change"],
    note: "empfehlen은 du empfiehlst, er empfiehlt (e→ie).",
  },
  "Die Rechnung, bitte.": {
    words: [
      ["Die", "(그)", "여성 정관사 4격"],
      ["Rechnung", "계산서", "die Rechnung (여성)"],
      ["bitte", "부탁합니다", "공손 부사"],
    ],
    grammar: ["greetings-phrases"],
    note: "명사 + bitte = '~ 주세요'. 식당에서 계산할 때 쓰는 고정 표현.",
  },
  "Zusammen oder getrennt?": {
    words: [
      ["Zusammen", "함께 (한 번에)", "부사"],
      ["oder", "아니면", "접속사"],
      ["getrennt", "따로", "형용사/부사 (trennen의 과거분사)"],
    ],
    grammar: ["greetings-phrases", "conjunctions"],
    note: "독일 식당에서 계산 방식(한꺼번에/각자)을 묻는 표현.",
  },
  "Getrennt, bitte.": {
    words: [
      ["Getrennt", "따로", "부사 (trennen의 과거분사)"],
      ["bitte", "부탁합니다", "공손 부사"],
    ],
    grammar: ["greetings-phrases"],
  },
  "die Speisekarte": {
    words: [
      ["die", "(정관사)", "여성 1격"],
      ["Speisekarte", "메뉴판", "die Speisekarte (여성)"],
    ],
    grammar: ["articles-gender"],
    note: "합성명사의 성은 마지막 명사(die Karte)를 따른다.",
  },
  "das Gericht": {
    words: [
      ["das", "(정관사)", "중성 1격"],
      ["Gericht", "요리", "das Gericht (중성)"],
    ],
    grammar: ["articles-gender"],
  },
  "die Vorspeise": {
    words: [
      ["die", "(정관사)", "여성 1격"],
      ["Vorspeise", "전채 요리", "die Vorspeise (여성)"],
    ],
    grammar: ["articles-gender"],
  },
  "das Hauptgericht": {
    words: [
      ["das", "(정관사)", "중성 1격"],
      ["Hauptgericht", "메인 요리", "das Hauptgericht (중성)"],
    ],
    grammar: ["articles-gender"],
    note: "Haupt(주된) + das Gericht → 성은 마지막 명사를 따라 중성.",
  },
  "der Nachtisch": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Nachtisch", "후식", "der Nachtisch (남성)"],
    ],
    grammar: ["articles-gender"],
  },
  "das Getränk": {
    words: [
      ["das", "(정관사)", "중성 1격"],
      ["Getränk", "음료", "das Getränk (중성)"],
    ],
    grammar: ["articles-gender"],
  },
  "die Rechnung": {
    words: [
      ["die", "(정관사)", "여성 1격"],
      ["Rechnung", "계산서", "die Rechnung (여성)"],
    ],
    grammar: ["articles-gender"],
    note: "-ung으로 끝나는 명사는 항상 여성.",
  },
  "Ich möchte den Salat und ein Wasser, bitte.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["möchte", "원하다", "möchten · ich 형"],
      ["den", "(그)", "남성 정관사 4격"],
      ["Salat", "샐러드", "der Salat (남성)"],
      ["und", "그리고", "접속사"],
      ["ein", "(한 잔의)", "부정관사 4격 (중성)"],
      ["Wasser", "물", "das Wasser (중성)"],
      ["bitte", "부탁합니다", "공손 부사"],
    ],
    grammar: ["moegen-moechten", "accusative"],
    note: "möchte는 동사 없이 4격 목적어만 써도 된다. 남성만 der→den으로 바뀐다.",
  },
  "Sehr gern.": {
    words: [
      ["Sehr", "아주", "부사"],
      ["gern", "기꺼이", "부사"],
    ],
    grammar: ["greetings-phrases"],
    note: "'기꺼이요, 알겠습니다' — 부탁·주문에 대한 공손한 대답.",
  },

  // ── Lektion 16 ──
  "Was kostet das?": {
    words: [
      ["Was", "얼마 (무엇)", "의문사"],
      ["kostet", "값이 ~이다", "kosten · es 현재형 (-et)"],
      ["das", "이것", "지시대명사 1격"],
    ],
    grammar: ["w-questions", "present-regular", "numbers"],
    note: "어간이 -t로 끝나서 er/sie/es 형에 -et가 붙는다 (kostet).",
  },
  "Wie viel kostet der Tisch?": {
    words: [
      ["Wie", "얼마나", "의문사"],
      ["viel", "많이", "wie viel = 얼마"],
      ["kostet", "값이 ~이다", "kosten · er 현재형"],
      ["der", "(이)", "남성 정관사 1격"],
      ["Tisch", "탁자", "der Tisch (남성)"],
    ],
    grammar: ["w-questions", "numbers"],
  },
  "Wie teuer ist es?": {
    words: [
      ["Wie", "얼마나", "의문사"],
      ["teuer", "비싼", "형용사 · 서술 용법"],
      ["ist", "~이다", "sein · es 현재형"],
      ["es", "그것", "인칭대명사 1격 (중성)"],
    ],
    grammar: ["w-questions", "adjectives-predicative"],
  },
  "Das kostet 20 Euro.": {
    words: [
      ["Das", "이것은", "지시대명사 1격"],
      ["kostet", "값이 ~이다", "kosten · es 현재형"],
      ["20", "20 (zwanzig)", "숫자"],
      ["Euro", "유로", "der Euro · 수량 뒤 단수형"],
    ],
    grammar: ["numbers"],
    note: "가격에서 Euro는 복수여도 형태가 바뀌지 않는다 (20 Euro).",
  },
  "Das ist sehr teuer.": {
    words: [
      ["Das", "이것은", "지시대명사 1격"],
      ["ist", "~이다", "sein · es 현재형"],
      ["sehr", "아주", "부사"],
      ["teuer", "비싼", "형용사 · 서술 용법"],
    ],
    grammar: ["adjectives-predicative", "sein-haben"],
  },
  "Wow, das ist ja billig.": {
    words: [
      ["Wow", "와", "감탄사"],
      ["das", "이것은", "지시대명사 1격"],
      ["ist", "~이다", "sein · es 현재형"],
      ["ja", "정말, ~네", "놀람의 불변화사"],
      ["billig", "싼", "형용사 · 서술 용법"],
    ],
    grammar: ["adjectives-predicative"],
    note: "여기서 ja는 '예'가 아니라 놀람·강조를 나타내는 말(정말 ~네).",
  },
  "Sehr günstig.": {
    words: [
      ["Sehr", "아주", "부사"],
      ["günstig", "저렴한", "형용사 · 서술 용법"],
    ],
    grammar: ["adjectives-predicative"],
    note: "billig는 '싸구려' 느낌도 있지만 günstig는 '가격이 좋은'이라는 긍정적 뉘앙스.",
  },
  "Das ist ein super Angebot.": {
    words: [
      ["Das", "이것은", "지시대명사 1격"],
      ["ist", "~이다", "sein · es 현재형"],
      ["ein", "(하나의)", "부정관사 1격 (중성)"],
      ["super", "굉장한", "형용사 (어미 변화 없음)"],
      ["Angebot", "특가, 제안", "das Angebot (중성)"],
    ],
    grammar: ["sein-haben", "articles-gender"],
    note: "super는 명사 앞에서도 어미가 붙지 않는 특별한 형용사.",
  },
  "Wie finden Sie den Stuhl?": {
    words: [
      ["Wie", "어떻게", "의문사"],
      ["finden", "생각하다 (여기다)", "finden · Sie 현재형"],
      ["Sie", "당신은", "존칭 Sie 1격"],
      ["den", "(이)", "남성 정관사 4격"],
      ["Stuhl", "의자", "der Stuhl (남성)"],
    ],
    grammar: ["adjectives-predicative", "accusative", "w-questions"],
    note: "finden + 4격 + 형용사 = '~을 …하다고 생각하다'. 의견을 묻는 표현.",
  },
  "Findest du diesen Teppich schön?": {
    words: [
      ["Findest", "생각하다 (여기다)", "finden · du 현재형 (-est)"],
      ["du", "너는", "인칭대명사 1격"],
      ["diesen", "이", "dieser · 남성 4격"],
      ["Teppich", "카펫", "der Teppich (남성)"],
      ["schön", "예쁜", "형용사 · 서술 용법"],
    ],
    grammar: ["adjectives-predicative", "accusative", "yes-no-questions"],
    note: "어간이 -d로 끝나 du findest (-est). dies-는 정관사처럼 변한다 (den → diesen).",
  },
  "Ich finde den Stuhl schick.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["finde", "생각하다 (여기다)", "finden · ich 현재형"],
      ["den", "(이)", "남성 정관사 4격"],
      ["Stuhl", "의자", "der Stuhl (남성)"],
      ["schick", "멋진, 세련된", "형용사 · 서술 용법"],
    ],
    grammar: ["adjectives-predicative", "accusative"],
  },
  "Das Bett ist zu klein.": {
    words: [
      ["Das", "(이)", "중성 정관사 1격"],
      ["Bett", "침대", "das Bett (중성)"],
      ["ist", "~이다", "sein · es 현재형"],
      ["zu", "너무", "부사 (정도가 지나침)"],
      ["klein", "작은", "형용사 · 서술 용법"],
    ],
    grammar: ["adjectives-predicative"],
    note: "형용사 앞의 zu는 전치사가 아니라 '너무(지나치게)'라는 뜻.",
  },
  "Haben Sie das in Größe M?": {
    words: [
      ["Haben", "가지고 있다", "haben · Sie 현재형"],
      ["Sie", "당신은", "존칭 Sie 1격"],
      ["das", "이것을", "지시대명사 4격"],
      ["in", "~(으)로", "전치사 (+3격)"],
      ["Größe", "사이즈", "die Größe (여성) · 관사 생략"],
      ["M", "M", "사이즈 이름"],
    ],
    grammar: ["yes-no-questions", "sein-haben"],
  },
  "Ich nehme das.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["nehme", "사다 (고르다)", "nehmen · ich 현재형"],
      ["das", "이것을", "지시대명사 4격"],
    ],
    grammar: ["stem-change", "accusative"],
    note: "가게에서 nehmen은 '(이걸로) 살게요'라는 뜻.",
  },
  "das Geschäft": {
    words: [
      ["das", "(정관사)", "중성 1격"],
      ["Geschäft", "가게", "das Geschäft (중성)"],
    ],
    grammar: ["articles-gender"],
  },
  "der Preis": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Preis", "가격", "der Preis (남성)"],
    ],
    grammar: ["articles-gender"],
  },
  "billig / günstig": {
    words: [
      ["billig", "싼", "형용사"],
      ["günstig", "저렴한 (가성비 좋은)", "형용사"],
    ],
    grammar: ["adjectives-predicative"],
    note: "billig는 '싸구려'의 부정적 뉘앙스가 있을 수 있고, günstig는 긍정적이다.",
  },
  "die Größe": {
    words: [
      ["die", "(정관사)", "여성 1격"],
      ["Größe", "사이즈, 크기", "die Größe (여성)"],
    ],
    grammar: ["articles-gender"],
  },
  "die Farbe": {
    words: [
      ["die", "(정관사)", "여성 1격"],
      ["Farbe", "색깔", "die Farbe (여성)"],
    ],
    grammar: ["articles-gender"],
  },
  "Guten Tag! Was kostet diese Jacke?": {
    words: [
      ["Guten", "좋은", "형용사 4격 (남성)"],
      ["Tag", "하루, 날", "der Tag (남성)"],
      ["Was", "얼마 (무엇)", "의문사"],
      ["kostet", "값이 ~이다", "kosten · sie 현재형"],
      ["diese", "이", "dieser · 여성 1격"],
      ["Jacke", "재킷", "die Jacke (여성)"],
    ],
    grammar: ["greetings-phrases", "w-questions"],
    note: "Guten Tag는 (Ich wünsche Ihnen einen) guten Tag에서 온 말이라 4격 형태다.",
  },
  "Die kostet 49 Euro.": {
    words: [
      ["Die", "그것은", "지시대명사 1격 (여성)"],
      ["kostet", "값이 ~이다", "kosten · sie 현재형"],
      ["49", "49 (neunundvierzig)", "숫자"],
      ["Euro", "유로", "der Euro · 수량 뒤 단수형"],
    ],
    grammar: ["numbers", "articles-gender"],
    note: "여기서 Die는 관사가 아니라 die Jacke를 받는 지시대명사(구어에서 자주 쓴다).",
  },
  "Haben Sie das auch in Blau?": {
    words: [
      ["Haben", "가지고 있다", "haben · Sie 현재형"],
      ["Sie", "당신은", "존칭 Sie 1격"],
      ["das", "이것을", "지시대명사 4격"],
      ["auch", "~도", "부사"],
      ["in", "~(색)으로", "전치사 (+3격)"],
      ["Blau", "파란색", "das Blau (중성) · 색 명사"],
    ],
    grammar: ["yes-no-questions", "sein-haben"],
    note: "색이 명사로 쓰이면 대문자: in Blau (파란색으로).",
  },
  "Ja, natürlich.": {
    words: [
      ["Ja", "네", "대답"],
      ["natürlich", "물론", "부사"],
    ],
    grammar: ["greetings-phrases", "yes-no-questions"],
  },
  "Wie findest du diese Lampe?": {
    words: [
      ["Wie", "어떻게", "의문사"],
      ["findest", "생각하다 (여기다)", "finden · du 현재형 (-est)"],
      ["du", "너는", "인칭대명사 1격"],
      ["diese", "이", "dieser · 여성 4격"],
      ["Lampe", "램프", "die Lampe (여성)"],
    ],
    grammar: ["adjectives-predicative", "w-questions"],
  },
  "Sie ist schön. Aber wie viel kostet sie?": {
    words: [
      ["Sie", "그것은", "인칭대명사 1격 (die Lampe)"],
      ["ist", "~이다", "sein · sie 현재형"],
      ["schön", "예쁜", "형용사 · 서술 용법"],
      ["Aber", "그런데", "접속사"],
      ["wie", "얼마나", "의문사"],
      ["viel", "많이", "wie viel = 얼마"],
      ["kostet", "값이 ~이다", "kosten · sie 현재형"],
      ["sie", "그것은", "인칭대명사 1격 (die Lampe)"],
    ],
    grammar: ["personal-pronouns", "conjunctions", "w-questions"],
    note: "die Lampe가 여성이라 사물이어도 sie(그녀→그것)로 받는다.",
  },
  "80 Euro.": {
    words: [
      ["80", "80 (achtzig)", "숫자"],
      ["Euro", "유로", "der Euro · 수량 뒤 단수형"],
    ],
    grammar: ["numbers"],
  },
  "Das finde ich zu teuer.": {
    words: [
      ["Das", "그것을", "지시대명사 4격"],
      ["finde", "생각하다 (여기다)", "finden · ich 현재형"],
      ["ich", "나는", "인칭대명사 1격"],
      ["zu", "너무", "부사 (정도가 지나침)"],
      ["teuer", "비싼", "형용사 · 서술 용법"],
    ],
    grammar: ["adjectives-predicative", "word-order"],
    note: "목적어 Das가 맨 앞에 와서 동사(finde) 다음에 주어(ich)가 온다 (V2 도치).",
  },

  // ── Lektion 17 ──
  "Wie viel kostet das?": {
    words: [
      ["Wie", "얼마나", "의문사"],
      ["viel", "많이", "wie viel = 얼마"],
      ["kostet", "값이 ~이다", "kosten · es 현재형"],
      ["das", "이것", "지시대명사 1격"],
    ],
    grammar: ["w-questions", "numbers"],
  },
  "Wie viele Äpfel?": {
    words: [
      ["Wie", "얼마나", "의문사"],
      ["viele", "많은 (개수)", "viel · 복수형 (셀 수 있음)"],
      ["Äpfel", "사과들", "복수형 (der Apfel → Äpfel)"],
    ],
    grammar: ["w-questions", "plural"],
    note: "셀 수 있는 복수 명사에는 wie viele, 셀 수 없는 것에는 wie viel.",
  },
  "Wie viel Geld hast du?": {
    words: [
      ["Wie", "얼마나", "의문사"],
      ["viel", "많은 (양)", "wie viel · 셀 수 없는 명사"],
      ["Geld", "돈", "das Geld (중성)"],
      ["hast", "가지고 있다", "haben · du 현재형"],
      ["du", "너는", "인칭대명사 1격"],
    ],
    grammar: ["w-questions", "sein-haben"],
  },
  "Wie viel Zeit hast du noch?": {
    words: [
      ["Wie", "얼마나", "의문사"],
      ["viel", "많은 (양)", "wie viel · 셀 수 없는 명사"],
      ["Zeit", "시간", "die Zeit (여성)"],
      ["hast", "가지고 있다", "haben · du 현재형"],
      ["du", "너는", "인칭대명사 1격"],
      ["noch", "아직, 남아", "부사"],
    ],
    grammar: ["w-questions", "sein-haben"],
  },
  "Wie viele Bananen brauchst du?": {
    words: [
      ["Wie", "얼마나", "의문사"],
      ["viele", "많은 (개수)", "viel · 복수형"],
      ["Bananen", "바나나들", "복수형 (die Banane → Bananen)"],
      ["brauchst", "필요하다", "brauchen · du 현재형"],
      ["du", "너는", "인칭대명사 1격"],
    ],
    grammar: ["w-questions", "plural", "accusative"],
  },
  "Ich habe nur einen Euro.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["habe", "가지고 있다", "haben · ich 현재형"],
      ["nur", "~만, ~밖에", "부사"],
      ["einen", "1 (하나의)", "부정관사 4격 (남성)"],
      ["Euro", "유로", "der Euro (남성)"],
    ],
    grammar: ["accusative", "sein-haben"],
    note: "haben은 4격을 취하므로 ein → einen (der Euro가 남성).",
  },
  "Ich habe kein Geld.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["habe", "가지고 있다", "haben · ich 현재형"],
      ["kein", "없는 (어떤 ~도 아닌)", "부정관사 kein · 4격 중성"],
      ["Geld", "돈", "das Geld (중성)"],
    ],
    grammar: ["negation", "accusative"],
    note: "명사를 부정할 때는 nicht가 아니라 kein을 쓴다.",
  },
  "Ich habe nur 10 Minuten Zeit.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["habe", "가지고 있다", "haben · ich 현재형"],
      ["nur", "~밖에", "부사"],
      ["10", "10 (zehn)", "숫자"],
      ["Minuten", "분", "복수형 (die Minute → Minuten)"],
      ["Zeit", "시간", "die Zeit (여성)"],
    ],
    grammar: ["sein-haben", "numbers", "plural"],
    note: "Zeit haben = 시간이 있다. '10분'이 Zeit를 꾸미는 구조.",
  },
  "Ein Kilo Äpfel, bitte.": {
    words: [
      ["Ein", "1 (하나의)", "부정관사 (중성)"],
      ["Kilo", "킬로", "das Kilo (중성)"],
      ["Äpfel", "사과", "복수형 (der Apfel → Äpfel)"],
      ["bitte", "부탁합니다", "공손 부사"],
    ],
    grammar: ["plural", "numbers"],
    note: "단위 + 명사: 독일어는 '사과의 1킬로'처럼 von 없이 바로 이어 쓴다.",
  },
  "Zwei Flaschen Wasser, bitte.": {
    words: [
      ["Zwei", "2", "숫자"],
      ["Flaschen", "병", "복수형 (die Flasche → Flaschen)"],
      ["Wasser", "물", "das Wasser (중성)"],
      ["bitte", "부탁합니다", "공손 부사"],
    ],
    grammar: ["plural", "numbers"],
  },
  "das Kilogramm (kg)": {
    words: [
      ["das", "(정관사)", "중성 1격"],
      ["Kilogramm", "킬로그램", "das Kilogramm (중성)"],
      ["kg", "kg", "약어"],
    ],
    grammar: ["articles-gender"],
  },
  "das Gramm (g)": {
    words: [
      ["das", "(정관사)", "중성 1격"],
      ["Gramm", "그램", "das Gramm (중성)"],
      ["g", "g", "약어"],
    ],
    grammar: ["articles-gender"],
  },
  "der Liter (l)": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Liter", "리터", "der Liter (남성)"],
      ["l", "l", "약어"],
    ],
    grammar: ["articles-gender"],
  },
  "das Stück": {
    words: [
      ["das", "(정관사)", "중성 1격"],
      ["Stück", "개, 조각", "das Stück (중성)"],
    ],
    grammar: ["articles-gender"],
  },
  "die Flasche": {
    words: [
      ["die", "(정관사)", "여성 1격"],
      ["Flasche", "병", "die Flasche (여성)"],
    ],
    grammar: ["articles-gender"],
  },
  "die Packung": {
    words: [
      ["die", "(정관사)", "여성 1격"],
      ["Packung", "팩, 봉지", "die Packung (여성)"],
    ],
    grammar: ["articles-gender"],
  },
  "Wie viel Milch brauchen Sie?": {
    words: [
      ["Wie", "얼마나", "의문사"],
      ["viel", "많은 (양)", "wie viel · 셀 수 없는 명사"],
      ["Milch", "우유", "die Milch (여성)"],
      ["brauchen", "필요하다", "brauchen · Sie 현재형"],
      ["Sie", "당신은", "존칭 Sie 1격"],
    ],
    grammar: ["w-questions", "accusative"],
  },
  "Einen Liter, bitte.": {
    words: [
      ["Einen", "1 (하나의)", "부정관사 4격 (남성)"],
      ["Liter", "리터", "der Liter (남성)"],
      ["bitte", "부탁합니다", "공손 부사"],
    ],
    grammar: ["accusative", "numbers"],
    note: "(Ich brauche) einen Liter의 생략형이라 4격 einen.",
  },

  // ── Lektion 18 ──
  "Wie lange dauert das?": {
    words: [
      ["Wie", "얼마나", "의문사"],
      ["lange", "오래", "부사 · wie lange = 얼마 동안"],
      ["dauert", "걸리다, 지속되다", "dauern · es 현재형"],
      ["das", "그것", "지시대명사 1격"],
    ],
    grammar: ["w-questions", "time-prepositions"],
  },
  "Wie lange bleiben Sie?": {
    words: [
      ["Wie", "얼마나", "의문사"],
      ["lange", "오래", "wie lange = 얼마 동안"],
      ["bleiben", "머무르다", "bleiben · Sie 현재형"],
      ["Sie", "당신은", "존칭 Sie 1격"],
    ],
    grammar: ["w-questions"],
    note: "현재형이 가까운 미래(머무를 예정)를 나타낸다.",
  },
  "Das dauert zwei Stunden.": {
    words: [
      ["Das", "그것은", "지시대명사 1격"],
      ["dauert", "걸리다", "dauern · es 현재형"],
      ["zwei", "2", "숫자"],
      ["Stunden", "시간", "복수형 (die Stunde → Stunden)"],
    ],
    grammar: ["numbers", "plural"],
    note: "die Stunde = 시간(60분), die Uhr = 시각(몇 시).",
  },
  "Ich bleibe eine Woche.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["bleibe", "머무르다", "bleiben · ich 현재형"],
      ["eine", "1 (하나의)", "부정관사 4격 (여성)"],
      ["Woche", "주", "die Woche (여성)"],
    ],
    grammar: ["accusative", "present-regular"],
    note: "기간을 나타낼 때 전치사 없이 4격을 쓴다 (eine Woche = 일주일 동안).",
  },
  "Wie lange wohnst du schon hier?": {
    words: [
      ["Wie", "얼마나", "의문사"],
      ["lange", "오래", "wie lange = 얼마 동안"],
      ["wohnst", "살다", "wohnen · du 현재형"],
      ["du", "너는", "인칭대명사 1격"],
      ["schon", "벌써, 이미", "부사"],
      ["hier", "여기에", "부사"],
    ],
    grammar: ["w-questions", "present-regular"],
    note: "지금까지 계속되는 일은 독일어에서 현재형 + schon으로 표현한다 (한국어 '~한 지 얼마').",
  },
  "Seit wann wohnst du hier?": {
    words: [
      ["Seit", "~부터 (계속)", "전치사 (+3격)"],
      ["wann", "언제", "의문사"],
      ["wohnst", "살다", "wohnen · du 현재형"],
      ["du", "너는", "인칭대명사 1격"],
      ["hier", "여기에", "부사"],
    ],
    grammar: ["time-prepositions", "w-questions"],
    note: "seit + 현재형 = 과거에 시작해 지금도 계속되는 일.",
  },
  "Wie lange lernst du schon Deutsch?": {
    words: [
      ["Wie", "얼마나", "의문사"],
      ["lange", "오래", "wie lange = 얼마 동안"],
      ["lernst", "배우다", "lernen · du 현재형"],
      ["du", "너는", "인칭대명사 1격"],
      ["schon", "벌써", "부사"],
      ["Deutsch", "독일어", "das Deutsch · 관사 없이"],
    ],
    grammar: ["w-questions", "present-regular"],
  },
  "Ich wohne seit einem Jahr in Deutschland.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["wohne", "살다", "wohnen · ich 현재형"],
      ["seit", "~전부터 (계속)", "전치사 (+3격)"],
      ["einem", "1 (하나의)", "부정관사 3격 (중성)"],
      ["Jahr", "년", "das Jahr (중성)"],
      ["in", "~에", "전치사 (위치 → 3격)"],
      ["Deutschland", "(나라) 독일", "국가명 · 관사 없음"],
    ],
    grammar: ["time-prepositions", "prep-dative", "word-order"],
    note: "seit는 3격 지배: das Jahr → seit einem Jahr. 시간(seit…) → 장소(in…) 순서.",
  },
  "Ich lerne Deutsch seit zwei Monaten.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["lerne", "배우다", "lernen · ich 현재형"],
      ["Deutsch", "독일어", "das Deutsch · 관사 없이"],
      ["seit", "~전부터 (계속)", "전치사 (+3격)"],
      ["zwei", "2", "숫자"],
      ["Monaten", "달", "복수 3격 (der Monat → Monate + n)"],
    ],
    grammar: ["time-prepositions", "prep-dative", "plural"],
    note: "복수 3격에는 명사 끝에 -n이 붙는다: Monate → seit zwei Monaten.",
  },
  "die Woche": {
    words: [
      ["die", "(정관사)", "여성 1격"],
      ["Woche", "주, 일주일", "die Woche (여성)"],
    ],
    grammar: ["articles-gender"],
  },
  "der Monat": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Monat", "달, 월", "der Monat (남성)"],
    ],
    grammar: ["articles-gender"],
  },
  "das Jahr": {
    words: [
      ["das", "(정관사)", "중성 1격"],
      ["Jahr", "년, 해", "das Jahr (중성)"],
    ],
    grammar: ["articles-gender"],
  },
  "der Tag": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Tag", "날, 일", "der Tag (남성)"],
    ],
    grammar: ["articles-gender"],
  },
  "Wie lange dauert der Flug?": {
    words: [
      ["Wie", "얼마나", "의문사"],
      ["lange", "오래", "wie lange = 얼마 동안"],
      ["dauert", "걸리다", "dauern · er 현재형"],
      ["der", "(그)", "남성 정관사 1격"],
      ["Flug", "비행", "der Flug (남성)"],
    ],
    grammar: ["w-questions"],
  },
  "Er dauert ungefähr 12 Stunden.": {
    words: [
      ["Er", "그것은", "인칭대명사 1격 (der Flug)"],
      ["dauert", "걸리다", "dauern · er 현재형"],
      ["ungefähr", "약, 대략", "부사"],
      ["12", "12 (zwölf)", "숫자"],
      ["Stunden", "시간", "복수형 (die Stunde → Stunden)"],
    ],
    grammar: ["personal-pronouns", "numbers"],
    note: "der Flug가 남성이라 사물이어도 er로 받는다.",
  },
  "Seit wann wohnst du in Hamburg?": {
    words: [
      ["Seit", "~부터 (계속)", "전치사 (+3격)"],
      ["wann", "언제", "의문사"],
      ["wohnst", "살다", "wohnen · du 현재형"],
      ["du", "너는", "인칭대명사 1격"],
      ["in", "~에", "전치사 (위치)"],
      ["Hamburg", "(도시) 함부르크", "도시명"],
    ],
    grammar: ["time-prepositions", "w-questions"],
  },
  "Seit letztem Monat.": {
    words: [
      ["Seit", "~부터", "전치사 (+3격)"],
      ["letztem", "지난", "형용사 3격 (남성, 관사 없음)"],
      ["Monat", "달", "der Monat (남성)"],
    ],
    grammar: ["time-prepositions", "prep-dative"],
    note: "관사가 없으면 형용사가 3격 어미 -em을 대신 받는다 (seit dem letzten Monat와 같은 뜻).",
  },
  "Ach, erst so kurz.": {
    words: [
      ["Ach", "아", "감탄사"],
      ["erst", "겨우, 아직 ~밖에", "부사"],
      ["so", "그렇게", "부사"],
      ["kurz", "짧은", "형용사"],
    ],
    grammar: ["adjectives-predicative"],
    note: "erst = '(예상보다) 겨우/이제야'. schon(벌써)의 반대 느낌.",
  },

  // ── Lektion 19 ──
  "Ich kann Deutsch sprechen.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["kann", "~할 수 있다", "können · ich 형"],
      ["Deutsch", "독일어", "das Deutsch · 관사 없이"],
      ["sprechen", "말하다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "sentence-bracket"],
    note: "화법조동사는 두 번째 자리, 본동사 원형은 문장 끝.",
  },
  "Ich kann nicht tanzen.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["kann", "~할 수 있다", "können · ich 형"],
      ["nicht", "~ 못 (않다)", "부정어"],
      ["tanzen", "춤추다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "negation"],
  },
  "Er kann ein bisschen Klavier spielen.": {
    words: [
      ["Er", "그는", "인칭대명사 1격"],
      ["kann", "~할 수 있다", "können · er 형 (= ich)"],
      ["ein", "(조금)", "ein bisschen = 조금"],
      ["bisschen", "조금", "ein bisschen (고정 표현)"],
      ["Klavier", "피아노", "das Klavier · 관사 없이"],
      ["spielen", "연주하다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "sentence-bracket"],
    note: "악기를 연주할 때 Klavier spielen처럼 관사 없이 쓴다.",
  },
  "Ihr könnt sehr gut fotografieren.": {
    words: [
      ["Ihr", "너희는", "인칭대명사 1격 (복수 친칭)"],
      ["könnt", "~할 수 있다", "können · ihr 형"],
      ["sehr", "아주", "부사"],
      ["gut", "잘", "부사"],
      ["fotografieren", "사진을 찍다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "sentence-bracket"],
  },
  "Ich kann die Frage nicht verstehen.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["kann", "~할 수 있다", "können · ich 형"],
      ["die", "(그)", "여성 정관사 4격"],
      ["Frage", "질문", "die Frage (여성)"],
      ["nicht", "~ 못", "부정어"],
      ["verstehen", "이해하다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "negation", "sentence-bracket"],
    note: "nicht는 목적어(die Frage) 뒤, 문장 끝 동사 앞에 온다.",
  },
  "Kannst du mir helfen?": {
    words: [
      ["Kannst", "~할 수 있니", "können · du 형"],
      ["du", "너는", "인칭대명사 1격"],
      ["mir", "나를 (나에게)", "ich의 3격"],
      ["helfen", "돕다", "동사원형 (3격 지배)"],
    ],
    grammar: ["modal-verbs", "dative", "yes-no-questions"],
    note: "helfen은 3격을 취한다: '나를 돕다'도 mich가 아니라 mir.",
  },
  "Kann ich mal telefonieren?": {
    words: [
      ["Kann", "~해도 되다", "können · ich 형 (허락)"],
      ["ich", "나는", "인칭대명사 1격"],
      ["mal", "잠깐, 좀", "불변화사 (부드럽게)"],
      ["telefonieren", "전화하다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "yes-no-questions"],
    note: "können은 능력뿐 아니라 허락(~해도 돼요?)도 나타낸다.",
  },
  "Kann ich hier parken?": {
    words: [
      ["Kann", "~해도 되다", "können · ich 형 (허락)"],
      ["ich", "나는", "인칭대명사 1격"],
      ["hier", "여기에", "부사"],
      ["parken", "주차하다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "yes-no-questions"],
  },
  "Ich kann das nicht.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["kann", "할 수 있다", "können · ich 형 (본동사처럼)"],
      ["das", "그것을", "지시대명사 4격"],
      ["nicht", "못", "부정어"],
    ],
    grammar: ["modal-verbs", "negation"],
    note: "können은 동사원형 없이 단독으로도 쓸 수 있다 (= 그걸 할 줄 몰라요).",
  },
  "Können Sie das wiederholen?": {
    words: [
      ["Können", "~해 주실 수 있다", "können · Sie 형"],
      ["Sie", "당신은", "존칭 Sie 1격"],
      ["das", "그것을", "지시대명사 4격"],
      ["wiederholen", "반복하다", "동사원형 (비분리)"],
    ],
    grammar: ["modal-verbs", "yes-no-questions"],
    note: "Können Sie ...? 는 공손한 부탁 표현.",
  },
  "Kannst du Klavier spielen?": {
    words: [
      ["Kannst", "~할 수 있니", "können · du 형"],
      ["du", "너는", "인칭대명사 1격"],
      ["Klavier", "피아노", "das Klavier · 관사 없이"],
      ["spielen", "연주하다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "yes-no-questions"],
  },
  "Ja, ich kann ein bisschen Klavier spielen.": {
    words: [
      ["Ja", "응", "대답"],
      ["ich", "나는", "인칭대명사 1격"],
      ["kann", "~할 수 있다", "können · ich 형"],
      ["ein", "(조금)", "ein bisschen = 조금"],
      ["bisschen", "조금", "ein bisschen (고정 표현)"],
      ["Klavier", "피아노", "das Klavier · 관사 없이"],
      ["spielen", "연주하다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "sentence-bracket"],
    note: "Ja 뒤에 쉼표가 있어 Ja는 어순에 포함되지 않는다 (ich가 1번 자리).",
  },

  // ── Lektion 20 ──
  "Können Sie mir helfen?": {
    words: [
      ["Können", "~해 주실 수 있다", "können · Sie 형"],
      ["Sie", "당신은", "존칭 Sie 1격"],
      ["mir", "저를 (저에게)", "ich의 3격"],
      ["helfen", "돕다", "동사원형 (3격 지배)"],
    ],
    grammar: ["modal-verbs", "dative", "formal-informal"],
    note: "helfen은 3격 동사라 mich가 아니라 mir.",
  },
  "Hilfst du mir gerade mal?": {
    words: [
      ["Hilfst", "돕다", "helfen · du 현재형 (e→i)"],
      ["du", "너는", "인칭대명사 1격"],
      ["mir", "나를 (나에게)", "ich의 3격"],
      ["gerade", "지금 잠깐", "부사"],
      ["mal", "좀", "불변화사 (부드럽게)"],
    ],
    grammar: ["stem-change", "dative", "yes-no-questions"],
    note: "gerade mal은 부탁을 가볍고 부드럽게 만드는 구어 표현.",
  },
  "Tust du mir einen Gefallen?": {
    words: [
      ["Tust", "하다 (들어주다)", "tun · du 현재형"],
      ["du", "너는", "인칭대명사 1격"],
      ["mir", "나에게", "ich의 3격"],
      ["einen", "(하나의)", "부정관사 4격 (남성)"],
      ["Gefallen", "호의, 부탁", "der Gefallen (남성)"],
    ],
    grammar: ["dative", "accusative", "yes-no-questions"],
    note: "jemandem einen Gefallen tun = 누구에게 호의를 베풀다 → '부탁 좀 들어줄래?'",
  },
  "Haben Sie einen Moment Zeit?": {
    words: [
      ["Haben", "가지고 있다", "haben · Sie 현재형"],
      ["Sie", "당신은", "존칭 Sie 1격"],
      ["einen", "(잠깐의)", "부정관사 4격 (남성)"],
      ["Moment", "순간, 잠깐", "der Moment (남성)"],
      ["Zeit", "시간", "die Zeit (여성)"],
    ],
    grammar: ["sein-haben", "accusative", "yes-no-questions"],
  },
  "Kann ich Sie etwas fragen?": {
    words: [
      ["Kann", "~해도 되다", "können · ich 형 (허락)"],
      ["ich", "나는", "인칭대명사 1격"],
      ["Sie", "당신에게", "존칭 Sie 4격"],
      ["etwas", "무언가", "부정대명사 (4격)"],
      ["fragen", "묻다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "accusative", "formal-informal"],
    note: "fragen은 묻는 상대를 4격으로 쓴다 (한국어 '~에게'와 다름).",
  },
  "Eine Frage, bitte.": {
    words: [
      ["Eine", "하나의", "부정관사 (여성)"],
      ["Frage", "질문", "die Frage (여성)"],
      ["bitte", "부탁합니다", "공손 부사"],
    ],
    grammar: ["greetings-phrases"],
  },
  "Einen Moment, bitte.": {
    words: [
      ["Einen", "(한)", "부정관사 4격 (남성)"],
      ["Moment", "순간, 잠깐", "der Moment (남성)"],
      ["bitte", "부탁합니다", "공손 부사"],
    ],
    grammar: ["greetings-phrases", "accusative"],
    note: "'잠깐만 기다려 주세요'라는 고정 표현. (Warten Sie) einen Moment의 줄임이라 4격.",
  },
  "Bitte ...": {
    words: [["Bitte", "~해 주세요", "공손 부사"]],
    grammar: ["imperative", "greetings-phrases"],
    note: "뒤에 명령문이 이어진다: Bitte warten Sie! 부탁을 공손하게 만든다.",
  },
  "Könnten Sie bitte ...?": {
    words: [
      ["Könnten", "~해 주실 수 있을까요", "können · 접속법 2식 (Sie)"],
      ["Sie", "당신은", "존칭 Sie 1격"],
      ["bitte", "부디", "공손 부사"],
    ],
    grammar: ["modal-verbs", "formal-informal"],
    note: "Können Sie보다 더 정중한 부탁. 뒤에 동사원형이 문장 끝에 온다.",
  },
  "Es tut mir leid.": {
    words: [
      ["Es", "(비인칭 주어)", "비인칭 es"],
      ["tut", "하다", "tun · es 현재형"],
      ["mir", "나에게", "ich의 3격"],
      ["leid", "유감스러운", "leidtun 의 일부"],
    ],
    grammar: ["greetings-phrases", "dative", "es-gibt-impersonal"],
    note: "직역 '그것이 나에게 유감을 준다' — 사과·유감을 나타내는 고정 표현.",
  },
  "Kein Problem.": {
    words: [
      ["Kein", "없는", "부정관사 kein (중성 1격)"],
      ["Problem", "문제", "das Problem (중성)"],
    ],
    grammar: ["greetings-phrases", "negation"],
  },
  "Könnten Sie bitte etwas langsamer sprechen?": {
    words: [
      ["Könnten", "~해 주실 수 있을까요", "können · 접속법 2식 (Sie)"],
      ["Sie", "당신은", "존칭 Sie 1격"],
      ["bitte", "부디", "공손 부사"],
      ["etwas", "조금", "부사"],
      ["langsamer", "더 천천히", "langsam의 비교급"],
      ["sprechen", "말하다", "동사원형 (문장 끝)"],
    ],
    grammar: ["modal-verbs", "formal-informal", "sentence-bracket"],
    note: "형용사 + -er = 비교급 (langsam → langsamer).",
  },
  "Natürlich, kein Problem.": {
    words: [
      ["Natürlich", "물론", "부사"],
      ["kein", "없는", "부정관사 kein (중성 1격)"],
      ["Problem", "문제", "das Problem (중성)"],
    ],
    grammar: ["greetings-phrases", "negation"],
  },

  // ── Lektion 21 ──
  "Ich stehe um 7 Uhr auf.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["stehe", "일어나다", "aufstehen · ich 현재형"],
      ["um", "~시에", "전치사 (시각)"],
      ["7", "7 (sieben)", "숫자"],
      ["Uhr", "시", "die Uhr (시각)"],
      ["auf", "(일어나다의 일부)", "분리동사 aufstehen 의 접두사"],
    ],
    grammar: ["separable-verbs", "clock-time", "sentence-bracket"],
    note: "분리동사는 접두사(auf)가 문장 끝으로 간다.",
  },
  "Wo steigst du ein?": {
    words: [
      ["Wo", "어디에서", "의문사 (위치)"],
      ["steigst", "타다", "einsteigen · du 현재형"],
      ["du", "너는", "인칭대명사 1격"],
      ["ein", "(타다의 일부)", "분리동사 einsteigen 의 접두사"],
    ],
    grammar: ["separable-verbs", "w-questions"],
  },
  "Ich steige auf Gleis 5 ein.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["steige", "타다", "einsteigen · ich 현재형"],
      ["auf", "~에서", "전치사 (위치 → 3격)"],
      ["Gleis", "승강장, 선로", "das Gleis (중성) · 관사 생략"],
      ["5", "5 (fünf)", "숫자"],
      ["ein", "(타다의 일부)", "분리동사 einsteigen 의 접두사"],
    ],
    grammar: ["separable-verbs", "two-way-prepositions"],
    note: "auf Gleis 5 처럼 번호가 붙으면 관사를 생략한다.",
  },
  "Wo steigst du aus?": {
    words: [
      ["Wo", "어디에서", "의문사 (위치)"],
      ["steigst", "내리다", "aussteigen · du 현재형"],
      ["du", "너는", "인칭대명사 1격"],
      ["aus", "(내리다의 일부)", "분리동사 aussteigen 의 접두사"],
    ],
    grammar: ["separable-verbs", "w-questions"],
  },
  "An der nächsten Station steigen wir um.": {
    words: [
      ["An", "~에서", "전치사 (위치 → 3격)"],
      ["der", "(그)", "여성 정관사 3격"],
      ["nächsten", "다음의", "형용사 3격 어미 -en"],
      ["Station", "역, 정류장", "die Station (여성)"],
      ["steigen", "갈아타다", "umsteigen · wir 현재형"],
      ["wir", "우리는", "인칭대명사 1격"],
      ["um", "(갈아타다의 일부)", "분리동사 umsteigen 의 접두사"],
    ],
    grammar: ["separable-verbs", "two-way-prepositions", "word-order"],
    note: "장소가 앞으로 나와서 동사(steigen) 다음에 주어(wir)가 온다.",
  },
  "Wann fährt der Zug nach Berlin ab?": {
    words: [
      ["Wann", "언제", "의문사"],
      ["fährt", "출발하다", "abfahren · er 현재형 (a→ä)"],
      ["der", "(그)", "남성 정관사 1격"],
      ["Zug", "기차", "der Zug (남성)"],
      ["nach", "~행 (~로)", "전치사 (도시·나라, +3격)"],
      ["Berlin", "(도시) 베를린", "도시명"],
      ["ab", "(출발하다의 일부)", "분리동사 abfahren 의 접두사"],
    ],
    grammar: ["separable-verbs", "stem-change", "place-directions"],
  },
  "Der Zug kommt um 17 Uhr an.": {
    words: [
      ["Der", "(그)", "남성 정관사 1격"],
      ["Zug", "기차", "der Zug (남성)"],
      ["kommt", "도착하다", "ankommen · er 현재형"],
      ["um", "~시에", "전치사 (시각)"],
      ["17", "17 (siebzehn)", "숫자"],
      ["Uhr", "시", "die Uhr (시각)"],
      ["an", "(도착하다의 일부)", "분리동사 ankommen 의 접두사"],
    ],
    grammar: ["separable-verbs", "clock-time"],
  },
  "Ich rufe dich an.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["rufe", "전화하다", "anrufen · ich 현재형"],
      ["dich", "너에게", "du의 4격"],
      ["an", "(전화하다의 일부)", "분리동사 anrufen 의 접두사"],
    ],
    grammar: ["separable-verbs", "accusative", "personal-pronouns"],
    note: "anrufen은 4격을 취한다: '너에게 전화하다'도 dir가 아니라 dich.",
  },
  "Wir kaufen zusammen ein.": {
    words: [
      ["Wir", "우리는", "인칭대명사 1격"],
      ["kaufen", "장을 보다", "einkaufen · wir 현재형"],
      ["zusammen", "함께", "부사"],
      ["ein", "(장보다의 일부)", "분리동사 einkaufen 의 접두사"],
    ],
    grammar: ["separable-verbs", "sentence-bracket"],
  },
  "Wann stehst du auf?": {
    words: [
      ["Wann", "언제", "의문사"],
      ["stehst", "일어나다", "aufstehen · du 현재형"],
      ["du", "너는", "인칭대명사 1격"],
      ["auf", "(일어나다의 일부)", "분리동사 aufstehen 의 접두사"],
    ],
    grammar: ["separable-verbs", "w-questions"],
  },
  "Ich stehe um 6 Uhr auf.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["stehe", "일어나다", "aufstehen · ich 현재형"],
      ["um", "~시에", "전치사 (시각)"],
      ["6", "6 (sechs)", "숫자"],
      ["Uhr", "시", "die Uhr (시각)"],
      ["auf", "(일어나다의 일부)", "분리동사 aufstehen 의 접두사"],
    ],
    grammar: ["separable-verbs", "clock-time"],
  },
};
