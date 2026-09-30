import type { SentenceGloss } from "@/lib/gloss";

export const BAND1: Record<string, SentenceGloss> = {
  "Guten Morgen!": {
    words: [
      ["Guten", "좋은", "gut · 남성 4격 형용사 어미 -en"],
      ["Morgen", "아침", "der Morgen (남성)"],
    ],
    grammar: ["greetings-phrases"],
    note: "원래 '(Ich wünsche Ihnen einen) guten Morgen'의 줄임이라 4격 어미 -en이 붙어요.",
  },
  "Guten Tag!": {
    words: [
      ["Guten", "좋은", "gut · 남성 4격 형용사 어미 -en"],
      ["Tag", "날, 낮", "der Tag (남성)"],
    ],
    grammar: ["greetings-phrases"],
    note: "낮 시간 대부분에 쓰는 기본 인사 '안녕하세요'.",
  },
  "Guten Abend!": {
    words: [
      ["Guten", "좋은", "gut · 남성 4격 형용사 어미 -en"],
      ["Abend", "저녁", "der Abend (남성)"],
    ],
    grammar: ["greetings-phrases"],
  },
  "Auf Wiedersehen!": {
    words: [
      ["Auf", "~을 (기약하며)", "전치사"],
      ["Wiedersehen", "다시 봄", "das Wiedersehen (중성)"],
    ],
    grammar: ["greetings-phrases"],
    note: "직역은 '다시 만남을 (기약하며)'. 격식 있는 작별 인사.",
  },
  "Bis morgen!": {
    words: [
      ["Bis", "~까지", "전치사 (시간)"],
      ["morgen", "내일", "부사 (소문자)"],
    ],
    grammar: ["greetings-phrases"],
    note: "소문자 morgen은 '내일', 대문자 der Morgen은 '아침'.",
  },
  "Bis bald!": {
    words: [
      ["Bis", "~까지", "전치사 (시간)"],
      ["bald", "곧", "부사"],
    ],
    grammar: ["greetings-phrases"],
  },
  "Gute Nacht!": {
    words: [
      ["Gute", "좋은", "gut · 여성 4격 형용사 어미 -e"],
      ["Nacht", "밤", "die Nacht (여성)"],
    ],
    grammar: ["greetings-phrases"],
    note: "Nacht가 여성명사라 Guten이 아니라 Gute.",
  },
  "Schlaf gut!": {
    words: [
      ["Schlaf", "자라", "schlafen · du 명령형"],
      ["gut", "잘", "부사"],
    ],
    grammar: ["imperative", "greetings-phrases"],
    note: "du에게 하는 명령형이라 반말. 존댓말은 Schlafen Sie gut!",
  },
  "Guten Morgen, Damian.": {
    words: [
      ["Guten", "좋은", "gut · 남성 4격 형용사 어미 -en"],
      ["Morgen", "아침", "der Morgen (남성)"],
      ["Damian", "(이름) 다미안"],
    ],
    grammar: ["greetings-phrases"],
  },
  "Guten Morgen, Elena.": {
    words: [
      ["Guten", "좋은", "gut · 남성 4격 형용사 어미 -en"],
      ["Morgen", "아침", "der Morgen (남성)"],
      ["Elena", "(이름) 엘레나"],
    ],
    grammar: ["greetings-phrases"],
  },
  "Gute Nacht, schlaf gut.": {
    words: [
      ["Gute", "좋은", "gut · 여성 4격 형용사 어미 -e"],
      ["Nacht", "밤", "die Nacht (여성)"],
      ["schlaf", "자라", "schlafen · du 명령형"],
      ["gut", "잘", "부사"],
    ],
    grammar: ["greetings-phrases", "imperative"],
  },
  "Schlaf gut. Bis morgen.": {
    words: [
      ["Schlaf", "자라", "schlafen · du 명령형"],
      ["gut", "잘", "부사"],
      ["Bis", "~까지", "전치사 (시간)"],
      ["morgen", "내일", "부사"],
    ],
    grammar: ["greetings-phrases", "imperative"],
  },
  "Wie geht es Ihnen?": {
    words: [
      ["Wie", "어떻게", "의문사"],
      ["geht", "지내다 (가다)", "gehen · es 현재형"],
      ["es", "(비인칭 주어)", "비인칭 es"],
      ["Ihnen", "당신에게", "Sie의 3격"],
    ],
    grammar: ["dative", "es-gibt-impersonal", "formal-informal"],
    note: "직역하면 '당신에게 어떻게 가나요?' — 안부를 묻는 고정 표현. 친구에게는 Wie geht es dir?",
  },
  "Wie geht es dir?": {
    words: [
      ["Wie", "어떻게", "의문사"],
      ["geht", "지내다 (가다)", "gehen · es 현재형"],
      ["es", "(비인칭 주어)", "비인칭 es"],
      ["dir", "너에게", "du의 3격"],
    ],
    grammar: ["dative", "es-gibt-impersonal", "formal-informal"],
    note: "친구·가족에게 쓰는 반말 안부. 존댓말은 Wie geht es Ihnen?",
  },
  "Wie geht's?": {
    words: [
      ["Wie", "어떻게", "의문사"],
      ["geht's", "지내?", "geht es 의 줄임"],
    ],
    grammar: ["es-gibt-impersonal", "greetings-phrases"],
    note: "geht es를 줄인 구어체. 누구에게나 가볍게 쓸 수 있어요.",
  },
  "Sehr gut.": {
    words: [
      ["Sehr", "매우", "부사"],
      ["gut", "잘, 좋게", "형용사 · 부사적 용법"],
    ],
    grammar: ["greetings-phrases"],
  },
  "Es geht.": {
    words: [
      ["Es", "(비인칭 주어)", "비인칭 es"],
      ["geht", "그럭저럭 된다", "gehen · es 현재형"],
    ],
    grammar: ["es-gibt-impersonal", "greetings-phrases"],
    note: "직역은 '그것은 간다' — '그럭저럭 괜찮다'는 관용 대답.",
  },
  "Nicht so gut.": {
    words: [
      ["Nicht", "~않다", "부정어"],
      ["so", "그렇게", "부사"],
      ["gut", "좋은, 잘", "형용사"],
    ],
    grammar: ["negation", "greetings-phrases"],
  },
  "prima / toll / super": {
    words: [
      ["prima", "아주 좋은", "형용사 (어미 변화 없음)"],
      ["toll", "멋진, 훌륭한", "형용사"],
      ["super", "최고의", "형용사 (어미 변화 없음)"],
    ],
    grammar: ["greetings-phrases", "adjectives-predicative"],
  },
  "Mir geht es fantastisch, danke.": {
    words: [
      ["Mir", "나에게", "ich의 3격"],
      ["geht", "지내다", "gehen · es 현재형"],
      ["es", "(비인칭 주어)", "비인칭 es"],
      ["fantastisch", "환상적으로", "형용사 · 부사적 용법"],
      ["danke", "고마워요", "감사 표현"],
    ],
    grammar: ["dative", "es-gibt-impersonal", "word-order"],
    note: "Mir를 문장 앞에 두어 동사 geht가 두 번째, 주어 es가 그 뒤로 옵니다.",
  },
  "Auch gut.": {
    words: [
      ["Auch", "~도, 역시", "부사"],
      ["gut", "잘, 좋게", "형용사"],
    ],
    grammar: ["greetings-phrases"],
  },
  "Guten Tag. Wie geht es Ihnen?": {
    words: [
      ["Guten", "좋은", "gut · 남성 4격 형용사 어미 -en"],
      ["Tag", "날, 낮", "der Tag (남성)"],
      ["Wie", "어떻게", "의문사"],
      ["geht", "지내다 (가다)", "gehen · es 현재형"],
      ["es", "(비인칭 주어)", "비인칭 es"],
      ["Ihnen", "당신에게", "Sie의 3격"],
    ],
    grammar: ["greetings-phrases", "dative", "formal-informal"],
  },
  "Es geht mir nicht so gut.": {
    words: [
      ["Es", "(비인칭 주어)", "비인칭 es"],
      ["geht", "지내다", "gehen · es 현재형"],
      ["mir", "나에게", "ich의 3격"],
      ["nicht", "~않다", "부정어"],
      ["so", "그렇게", "부사"],
      ["gut", "잘", "형용사 · 부사적 용법"],
    ],
    grammar: ["dative", "es-gibt-impersonal", "negation"],
  },
  "Gut. Wie geht's dir?": {
    words: [
      ["Gut", "잘 (지내)", "형용사"],
      ["Wie", "어떻게", "의문사"],
      ["geht's", "지내?", "geht es 의 줄임"],
      ["dir", "너에게", "du의 3격"],
    ],
    grammar: ["dative", "es-gibt-impersonal", "greetings-phrases"],
  },
  "Wie heißen Sie?": {
    words: [
      ["Wie", "어떻게", "의문사"],
      ["heißen", "~라고 불리다", "heißen · Sie 현재형"],
      ["Sie", "당신은", "존칭 Sie 1격"],
    ],
    grammar: ["w-questions", "present-regular", "formal-informal"],
    note: "이름을 물을 때 was가 아니라 wie(어떻게)를 써요.",
  },
  "Wie heißt du?": {
    words: [
      ["Wie", "어떻게", "의문사"],
      ["heißt", "~라고 불리다", "heißen · du 현재형 (-ßt)"],
      ["du", "너는", "인칭대명사 1격"],
    ],
    grammar: ["w-questions", "present-regular", "formal-informal"],
    note: "어간이 ß로 끝나서 du형이 heißst가 아니라 heißt.",
  },
  "Wie ist Ihr Name?": {
    words: [
      ["Wie", "어떻게", "의문사"],
      ["ist", "~이다", "sein · er/sie/es 형"],
      ["Ihr", "당신의", "소유관사 Ihr · 남성 1격"],
      ["Name", "이름", "der Name (남성)"],
    ],
    grammar: ["w-questions", "possessive", "formal-informal"],
    note: "대문자 Ihr는 '당신의'(존칭), 소문자 ihr는 '그녀의/그들의' 또는 '너희'.",
  },
  "Wie ist dein Name?": {
    words: [
      ["Wie", "어떻게", "의문사"],
      ["ist", "~이다", "sein · er/sie/es 형"],
      ["dein", "너의", "소유관사 · 남성 1격"],
      ["Name", "이름", "der Name (남성)"],
    ],
    grammar: ["w-questions", "possessive", "sein-haben"],
  },
  "Was ist dein Vorname?": {
    words: [
      ["Was", "무엇", "의문사"],
      ["ist", "~이다", "sein · er/sie/es 형"],
      ["dein", "너의", "소유관사 · 남성 1격"],
      ["Vorname", "(성 말고) 이름", "der Vorname (남성)"],
    ],
    grammar: ["w-questions", "possessive"],
  },
  "Was ist dein Nachname?": {
    words: [
      ["Was", "무엇", "의문사"],
      ["ist", "~이다", "sein · er/sie/es 형"],
      ["dein", "너의", "소유관사 · 남성 1격"],
      ["Nachname", "성(姓)", "der Nachname (남성)"],
    ],
    grammar: ["w-questions", "possessive"],
  },
  "Ich bin Pascal.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["bin", "~이다", "sein · ich 형"],
      ["Pascal", "(이름) 파스칼"],
    ],
    grammar: ["sein-haben"],
  },
  "Ich heiße Pascal.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["heiße", "~라고 불린다", "heißen · ich 현재형"],
      ["Pascal", "(이름) 파스칼"],
    ],
    grammar: ["present-regular"],
  },
  "Mein Name ist Pascal.": {
    words: [
      ["Mein", "나의", "소유관사 · 남성 1격"],
      ["Name", "이름", "der Name (남성)"],
      ["ist", "~이다", "sein · er/sie/es 형"],
      ["Pascal", "(이름) 파스칼"],
    ],
    grammar: ["possessive", "sein-haben"],
  },
  "Mein Vorname ist Sarah, mein Familienname ist Schmidt.": {
    words: [
      ["Mein", "나의", "소유관사 · 남성 1격"],
      ["Vorname", "(성 말고) 이름", "der Vorname (남성)"],
      ["ist", "~이다", "sein · er/sie/es 형"],
      ["Sarah", "(이름) 자라"],
      ["mein", "나의", "소유관사 · 남성 1격"],
      ["Familienname", "성(姓)", "der Familienname (남성)"],
      ["ist", "~이다", "sein · er/sie/es 형"],
      ["Schmidt", "(성) 슈미트"],
    ],
    grammar: ["possessive", "sein-haben"],
  },
  "der Name": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Name", "이름", "der Name (남성)"],
    ],
    grammar: ["articles-gender"],
  },
  "der Vorname": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Vorname", "(성 말고) 이름", "der Vorname (남성)"],
    ],
    grammar: ["articles-gender"],
    note: "vor(앞) + Name: 성 앞에 오는 이름.",
  },
  "der Nachname / der Familienname": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Nachname", "성(姓)", "der Nachname (남성)"],
      ["der", "(정관사)", "남성 1격"],
      ["Familienname", "성(姓)", "der Familienname (남성)"],
    ],
    grammar: ["articles-gender"],
    note: "합성명사의 성은 마지막 명사(Name)를 따라서 둘 다 der.",
  },
  "Mein Name ist Damian.": {
    words: [
      ["Mein", "나의", "소유관사 · 남성 1격"],
      ["Name", "이름", "der Name (남성)"],
      ["ist", "~이다", "sein · er/sie/es 형"],
      ["Damian", "(이름) 다미안"],
    ],
    grammar: ["possessive", "sein-haben"],
  },
  "Ich heiße Marie Lübeck. Wie ist Ihr Name?": {
    words: [
      ["Ich", "저는", "인칭대명사 1격"],
      ["heiße", "~라고 불린다", "heißen · ich 현재형"],
      ["Marie", "(이름) 마리"],
      ["Lübeck", "(성) 뤼벡"],
      ["Wie", "어떻게", "의문사"],
      ["ist", "~이다", "sein · er/sie/es 형"],
      ["Ihr", "당신의", "소유관사 Ihr · 남성 1격"],
      ["Name", "이름", "der Name (남성)"],
    ],
    grammar: ["present-regular", "possessive", "formal-informal"],
  },
  "Mein Name ist Frank Luhm.": {
    words: [
      ["Mein", "나의", "소유관사 · 남성 1격"],
      ["Name", "이름", "der Name (남성)"],
      ["ist", "~이다", "sein · er/sie/es 형"],
      ["Frank", "(이름) 프랑크"],
      ["Luhm", "(성) 룸"],
    ],
    grammar: ["possessive", "sein-haben"],
  },
  "Woher kommen Sie?": {
    words: [
      ["Woher", "어디에서", "의문사 (출신·출발점)"],
      ["kommen", "오다", "kommen · Sie 현재형"],
      ["Sie", "당신은", "존칭 Sie 1격"],
    ],
    grammar: ["w-questions", "place-directions", "formal-informal"],
  },
  "Woher kommst du?": {
    words: [
      ["Woher", "어디에서", "의문사 (출신·출발점)"],
      ["kommst", "오다", "kommen · du 현재형"],
      ["du", "너는", "인칭대명사 1격"],
    ],
    grammar: ["w-questions", "place-directions", "present-regular"],
  },
  "Wo kommst du her?": {
    words: [
      ["Wo", "어디", "의문사"],
      ["kommst", "오다", "kommen · du 현재형"],
      ["du", "너는", "인칭대명사 1격"],
      ["her", "~에서 (이쪽으로)", "woher의 her가 분리됨"],
    ],
    grammar: ["w-questions", "place-directions"],
    note: "구어에서는 woher를 wo … her로 쪼개 her를 문장 끝에 둡니다.",
  },
  "Aus welchem Land kommen Sie?": {
    words: [
      ["Aus", "~에서", "3격 전치사"],
      ["welchem", "어느", "welch- · 중성 3격"],
      ["Land", "나라", "das Land (중성)"],
      ["kommen", "오다", "kommen · Sie 현재형"],
      ["Sie", "당신은", "존칭 Sie 1격"],
    ],
    grammar: ["prep-dative", "w-questions", "dative"],
    note: "aus가 3격을 요구해서 welches → welchem.",
  },
  "Was ist dein Heimatland?": {
    words: [
      ["Was", "무엇", "의문사"],
      ["ist", "~이다", "sein · er/sie/es 형"],
      ["dein", "너의", "소유관사 · 중성 1격"],
      ["Heimatland", "고국", "das Heimatland (중성)"],
    ],
    grammar: ["w-questions", "possessive"],
  },
  "Was ist deine Nationalität?": {
    words: [
      ["Was", "무엇", "의문사"],
      ["ist", "~이다", "sein · er/sie/es 형"],
      ["deine", "너의", "소유관사 · 여성 1격"],
      ["Nationalität", "국적", "die Nationalität (여성)"],
    ],
    grammar: ["w-questions", "possessive", "articles-gender"],
    note: "-tät으로 끝나는 명사는 여성이라 dein이 아니라 deine.",
  },
  "Ich komme aus Südkorea.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["komme", "온다", "kommen · ich 현재형"],
      ["aus", "~에서", "3격 전치사 (출신)"],
      ["Südkorea", "(나라) 한국", "das Südkorea (중성, 관사 생략)"],
    ],
    grammar: ["prep-dative", "place-directions", "present-regular"],
  },
  "Ich komme aus Deutschland.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["komme", "온다", "kommen · ich 현재형"],
      ["aus", "~에서", "3격 전치사 (출신)"],
      ["Deutschland", "(나라) 독일", "das Deutschland (중성, 관사 생략)"],
    ],
    grammar: ["prep-dative", "place-directions", "present-regular"],
  },
  "Wo wohnen Sie?": {
    words: [
      ["Wo", "어디에", "의문사 (위치)"],
      ["wohnen", "살다", "wohnen · Sie 현재형"],
      ["Sie", "당신은", "존칭 Sie 1격"],
    ],
    grammar: ["w-questions", "present-regular", "formal-informal"],
  },
  "Ich wohne in Berlin.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["wohne", "산다", "wohnen · ich 현재형"],
      ["in", "~에", "전치사 (위치 → 3격)"],
      ["Berlin", "(도시) 베를린"],
    ],
    grammar: ["present-regular", "place-directions"],
  },
  "Ich bin Koreaner.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["bin", "~이다", "sein · ich 형"],
      ["Koreaner", "한국인 (남성)", "der Koreaner (남성)"],
    ],
    grammar: ["sein-haben", "articles-gender"],
    note: "국적·직업을 말할 때는 관사를 쓰지 않아요.",
  },
  "Ich bin Koreanerin.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["bin", "~이다", "sein · ich 형"],
      ["Koreanerin", "한국인 (여성)", "die Koreanerin (여성, -in)"],
    ],
    grammar: ["sein-haben", "articles-gender"],
    note: "남성형에 -in을 붙이면 여성형이 됩니다.",
  },
  "die Schweiz": {
    words: [
      ["die", "(정관사)", "여성 1격"],
      ["Schweiz", "스위스", "die Schweiz (여성)"],
    ],
    grammar: ["articles-gender", "place-directions"],
    note: "관사가 붙는 나라라서 '스위스에서'는 aus der Schweiz, '스위스로'는 in die Schweiz.",
  },
  "Ich komme aus Korea. Und Sie?": {
    words: [
      ["Ich", "저는", "인칭대명사 1격"],
      ["komme", "온다", "kommen · ich 현재형"],
      ["aus", "~에서", "3격 전치사 (출신)"],
      ["Korea", "(나라) 한국", "das Korea (중성, 관사 생략)"],
      ["Und", "그리고", "접속사"],
      ["Sie", "당신은?", "존칭 Sie 1격"],
    ],
    grammar: ["prep-dative", "place-directions", "formal-informal"],
    note: "Und Sie?는 같은 질문을 되묻는 짧은 표현 (반말은 Und du?).",
  },
  "Wo wohnst du?": {
    words: [
      ["Wo", "어디에", "의문사 (위치)"],
      ["wohnst", "살다", "wohnen · du 현재형"],
      ["du", "너는", "인칭대명사 1격"],
    ],
    grammar: ["w-questions", "present-regular"],
  },
  "Ich wohne in Seoul.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["wohne", "산다", "wohnen · ich 현재형"],
      ["in", "~에", "전치사 (위치 → 3격)"],
      ["Seoul", "(도시) 서울"],
    ],
    grammar: ["present-regular", "place-directions"],
  },
  "Was sind Sie von Beruf?": {
    words: [
      ["Was", "무엇", "의문사"],
      ["sind", "~이다", "sein · Sie 형"],
      ["Sie", "당신은", "존칭 Sie 1격"],
      ["von", "~으로 (말하자면)", "3격 전치사"],
      ["Beruf", "직업", "der Beruf (남성) · 3격"],
    ],
    grammar: ["w-questions", "sein-haben", "formal-informal"],
    note: "von Beruf는 '직업상'이라는 고정 표현.",
  },
  "Was bist du von Beruf?": {
    words: [
      ["Was", "무엇", "의문사"],
      ["bist", "~이다", "sein · du 형"],
      ["du", "너는", "인칭대명사 1격"],
      ["von", "~으로 (말하자면)", "3격 전치사"],
      ["Beruf", "직업", "der Beruf (남성) · 3격"],
    ],
    grammar: ["w-questions", "sein-haben"],
    note: "von Beruf는 '직업상'이라는 고정 표현.",
  },
  "Was machen Sie beruflich?": {
    words: [
      ["Was", "무엇을", "의문사 (4격)"],
      ["machen", "하다", "machen · Sie 현재형"],
      ["Sie", "당신은", "존칭 Sie 1격"],
      ["beruflich", "직업적으로", "부사"],
    ],
    grammar: ["w-questions", "present-regular", "formal-informal"],
  },
  "Was machst du beruflich?": {
    words: [
      ["Was", "무엇을", "의문사 (4격)"],
      ["machst", "하다", "machen · du 현재형"],
      ["du", "너는", "인칭대명사 1격"],
      ["beruflich", "직업적으로", "부사"],
    ],
    grammar: ["w-questions", "present-regular"],
  },
  "Was ist Ihr Beruf?": {
    words: [
      ["Was", "무엇", "의문사"],
      ["ist", "~이다", "sein · er/sie/es 형"],
      ["Ihr", "당신의", "소유관사 Ihr · 남성 1격"],
      ["Beruf", "직업", "der Beruf (남성)"],
    ],
    grammar: ["w-questions", "possessive", "formal-informal"],
  },
  "Was ist dein Beruf?": {
    words: [
      ["Was", "무엇", "의문사"],
      ["ist", "~이다", "sein · er/sie/es 형"],
      ["dein", "너의", "소유관사 · 남성 1격"],
      ["Beruf", "직업", "der Beruf (남성)"],
    ],
    grammar: ["w-questions", "possessive"],
  },
  "Ich bin Lehrer(in) von Beruf.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["bin", "~이다", "sein · ich 형"],
      ["Lehrer(in)", "교사 (남/여)", "der Lehrer / die Lehrerin"],
      ["von", "~으로 (말하자면)", "3격 전치사"],
      ["Beruf", "직업", "der Beruf (남성) · 3격"],
    ],
    grammar: ["sein-haben", "articles-gender"],
    note: "직업 앞에는 관사를 쓰지 않아요. 여성이면 Lehrerin.",
  },
  "Ich arbeite als Arzt.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["arbeite", "일한다", "arbeiten · ich 현재형"],
      ["als", "~로서", "자격을 나타냄"],
      ["Arzt", "의사", "der Arzt (남성) · 관사 없음"],
    ],
    grammar: ["present-regular", "articles-gender"],
    note: "als + 직업: 관사 없이 '~로(서)'.",
  },
  "der Arzt / die Ärztin": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Arzt", "의사 (남성)", "der Arzt (남성)"],
      ["die", "(정관사)", "여성 1격"],
      ["Ärztin", "의사 (여성)", "die Ärztin (여성, 움라우트+in)"],
    ],
    grammar: ["articles-gender"],
  },
  "der Koch / die Köchin": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Koch", "요리사 (남성)", "der Koch (남성)"],
      ["die", "(정관사)", "여성 1격"],
      ["Köchin", "요리사 (여성)", "die Köchin (여성, 움라우트+in)"],
    ],
    grammar: ["articles-gender"],
  },
  "der Fahrer / die Fahrerin": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Fahrer", "운전사 (남성)", "der Fahrer (남성)"],
      ["die", "(정관사)", "여성 1격"],
      ["Fahrerin", "운전사 (여성)", "die Fahrerin (여성)"],
    ],
    grammar: ["articles-gender"],
  },
  "der Schauspieler / die Schauspielerin": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Schauspieler", "배우 (남성)", "der Schauspieler (남성)"],
      ["die", "(정관사)", "여성 1격"],
      ["Schauspielerin", "배우 (여성)", "die Schauspielerin (여성)"],
    ],
    grammar: ["articles-gender"],
  },
  "der Sänger / die Sängerin": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Sänger", "가수 (남성)", "der Sänger (남성)"],
      ["die", "(정관사)", "여성 1격"],
      ["Sängerin", "가수 (여성)", "die Sängerin (여성)"],
    ],
    grammar: ["articles-gender"],
  },
  "der Bäcker / die Bäckerin": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Bäcker", "제빵사 (남성)", "der Bäcker (남성)"],
      ["die", "(정관사)", "여성 1격"],
      ["Bäckerin", "제빵사 (여성)", "die Bäckerin (여성)"],
    ],
    grammar: ["articles-gender"],
  },
  "der Verkäufer / die Verkäuferin": {
    words: [
      ["der", "(정관사)", "남성 1격"],
      ["Verkäufer", "판매원 (남성)", "der Verkäufer (남성)"],
      ["die", "(정관사)", "여성 1격"],
      ["Verkäuferin", "판매원 (여성)", "die Verkäuferin (여성)"],
    ],
    grammar: ["articles-gender"],
  },
  "der/die Angestellte": {
    words: [
      ["der/die", "(정관사) 남/여", "남성 der · 여성 die 1격"],
      ["Angestellte", "직원, 회사원", "형용사에서 온 명사"],
    ],
    grammar: ["articles-gender"],
    note: "형용사형 명사라 관사에 따라 어미가 바뀌어요: der Angestellte, ein Angestellter.",
  },
  "die Krankenschwester": {
    words: [
      ["die", "(정관사)", "여성 1격"],
      ["Krankenschwester", "간호사 (여성)", "die Krankenschwester (여성)"],
    ],
    grammar: ["articles-gender"],
    note: "직역은 '환자의 자매'. 요즘은 성중립적으로 Pflegekraft라고도 해요.",
  },
  "Ich bin Studentin. Und du?": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["bin", "~이다", "sein · ich 형"],
      ["Studentin", "대학생 (여성)", "die Studentin (여성)"],
      ["Und", "그리고", "접속사"],
      ["du", "너는?", "인칭대명사 1격"],
    ],
    grammar: ["sein-haben", "articles-gender"],
  },
  "Ich bin Verkäufer.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["bin", "~이다", "sein · ich 형"],
      ["Verkäufer", "판매원 (남성)", "der Verkäufer · 관사 없음"],
    ],
    grammar: ["sein-haben", "articles-gender"],
  },
  "Ich arbeite als Bäcker.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["arbeite", "일한다", "arbeiten · ich 현재형"],
      ["als", "~로서", "자격을 나타냄"],
      ["Bäcker", "제빵사", "der Bäcker (남성) · 관사 없음"],
    ],
    grammar: ["present-regular", "articles-gender"],
  },
  "Was machen Sie in der Freizeit?": {
    words: [
      ["Was", "무엇을", "의문사 (4격)"],
      ["machen", "하다", "machen · Sie 현재형"],
      ["Sie", "당신은", "존칭 Sie 1격"],
      ["in", "~에", "전치사 (시간 → 3격)"],
      ["der", "(정관사)", "여성 3격"],
      ["Freizeit", "여가 시간", "die Freizeit (여성)"],
    ],
    grammar: ["w-questions", "dative", "formal-informal"],
  },
  "Was machst du in der Freizeit?": {
    words: [
      ["Was", "무엇을", "의문사 (4격)"],
      ["machst", "하다", "machen · du 현재형"],
      ["du", "너는", "인칭대명사 1격"],
      ["in", "~에", "전치사 (시간 → 3격)"],
      ["der", "(정관사)", "여성 3격"],
      ["Freizeit", "여가 시간", "die Freizeit (여성)"],
    ],
    grammar: ["w-questions", "dative", "present-regular"],
  },
  "Ich lese gern.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["lese", "읽는다", "lesen · ich 현재형"],
      ["gern", "즐겨", "부사 (좋아함)"],
    ],
    grammar: ["gern", "stem-change"],
    note: "동사 + gern = '~하는 것을 좋아하다'. lesen은 du liest, er liest (e→ie).",
  },
  "Ich höre gern Musik.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["höre", "듣는다", "hören · ich 현재형"],
      ["gern", "즐겨", "부사 (좋아함)"],
      ["Musik", "음악", "die Musik (여성) · 4격"],
    ],
    grammar: ["gern", "present-regular"],
  },
  "Mein Hobby ist Kochen.": {
    words: [
      ["Mein", "나의", "소유관사 · 중성 1격"],
      ["Hobby", "취미", "das Hobby (중성)"],
      ["ist", "~이다", "sein · er/sie/es 형"],
      ["Kochen", "요리(하기)", "das Kochen · 동사 kochen의 명사화"],
    ],
    grammar: ["possessive", "sein-haben"],
    note: "동사원형을 대문자로 쓰면 '~하기'라는 중성명사가 돼요.",
  },
  "Ich spiele gern Fußball.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["spiele", "(운동을) 한다", "spielen · ich 현재형"],
      ["gern", "즐겨", "부사 (좋아함)"],
      ["Fußball", "축구", "der Fußball (남성) · 관사 없음"],
    ],
    grammar: ["gern", "present-regular"],
  },
  "Musik hören": {
    words: [
      ["Musik", "음악을", "die Musik (여성)"],
      ["hören", "듣다", "동사 원형"],
    ],
    grammar: ["present-regular"],
    note: "독일어 사전식 표현은 목적어가 앞, 동사원형이 맨 끝.",
  },
  "Sport treiben": {
    words: [
      ["Sport", "운동을", "der Sport (남성)"],
      ["treiben", "하다", "동사 원형"],
    ],
    grammar: ["present-regular"],
    note: "treiben은 원래 '몰다'지만 Sport treiben은 '운동하다'라는 고정 표현.",
  },
  "Kino gehen": {
    words: [
      ["Kino", "영화관", "das Kino (중성)"],
      ["gehen", "가다", "동사 원형"],
    ],
    grammar: ["two-way-prepositions", "contractions"],
    note: "완전한 표현은 ins Kino gehen (in + das → ins).",
  },
  "Ich lese gern und ich höre Musik. Und du?": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["lese", "읽는다", "lesen · ich 현재형"],
      ["gern", "즐겨", "부사 (좋아함)"],
      ["und", "그리고", "등위접속사"],
      ["ich", "나는", "인칭대명사 1격"],
      ["höre", "듣는다", "hören · ich 현재형"],
      ["Musik", "음악", "die Musik (여성) · 4격"],
      ["Und", "그리고", "접속사"],
      ["du", "너는?", "인칭대명사 1격"],
    ],
    grammar: ["gern", "conjunctions"],
    note: "und는 어순에 영향을 주지 않아서 뒤 문장도 ich höre 순서.",
  },
  "Ich reise gern.": {
    words: [
      ["Ich", "나는", "인칭대명사 1격"],
      ["reise", "여행한다", "reisen · ich 현재형"],
      ["gern", "즐겨", "부사 (좋아함)"],
    ],
    grammar: ["gern", "present-regular"],
  },
};
