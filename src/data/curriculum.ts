import type { LektionData } from "@/types";

export const curriculum: LektionData[] = [
  // ─── BAND 1 ───────────────────────────────────────────────────────────────
  {
    id: 1,
    band: 1,
    title: "알파벳과 발음 익히기",
    vocabulary: [
      { german: "Auto", korean: "자동차" },
      { german: "Baum", korean: "나무" },
      { german: "CD", korean: "시디" },
      { german: "Dorf", korean: "마을" },
      { german: "Ente", korean: "오리" },
      { german: "Fenster", korean: "창문" },
      { german: "Geld", korean: "돈" },
      { german: "Haus", korean: "집" },
      { german: "Igel", korean: "고슴도치" },
      { german: "Jahr", korean: "해, 년" },
      { german: "Konto", korean: "계좌" },
      { german: "Lager", korean: "창고" },
      { german: "Mann", korean: "남자" },
      { german: "Nachmittag", korean: "오후" },
      { german: "Obst", korean: "과일" },
      { german: "Post", korean: "우체국" },
      { german: "Quelle", korean: "원천" },
      { german: "Rat", korean: "조언" },
      { german: "Sprache", korean: "언어" },
      { german: "Tasse", korean: "잔" },
      { german: "Uhr", korean: "시계" },
      { german: "Vater", korean: "아버지" },
      { german: "Wind", korean: "바람" },
      { german: "Taxi", korean: "택시" },
      { german: "Yacht", korean: "요트" },
      { german: "Zoo", korean: "동물원" },
      { german: "Käse", korean: "치즈" },
      { german: "Öl", korean: "기름" },
      { german: "Übung", korean: "연습" },
      { german: "Fuß", korean: "발" },
    ],
    expressions: [
      { german: "A, B, C, D, E ...", korean: "알파벳은 26자 (+ Ä, Ö, Ü, ß)" },
      { german: "ei / ey → [아이]", korean: "예: Leipzig, Meyer" },
      { german: "eu / äu → [오이]", korean: "예: Leute, Verkäufer" },
      { german: "ch → [히/하흐]", korean: "예: ich (히), Bach (하흐)" },
      { german: "sch → [슈]", korean: "예: Schule" },
      { german: "st/sp → [슈트/슈프]", korean: "단어 처음에서만. 예: Sport, Straße" },
    ],
    conversations: [],
    grammarNotes: [
      {
        title: "독일어 알파벳 이름",
        content:
          "A(아), B(베), C(체), D(데), E(에), F(에프), G(게), H(하), I(이), J(욧), K(카), L(엘), M(엠), N(엔), O(오), P(페), Q(쿠), R(에르), S(에스), T(테), U(우), V(파우), W(베), X(익스), Y(윕실론), Z(체트)",
      },
      {
        title: "모음 길이",
        content: "모음 + h 또는 자음 1개 → 길게 / 모음 + 자음 2개 → 짧게",
      },
      {
        title: "단어 끝 b, d, g 무성화",
        content: "ab → 압, Hund → 훈트, Tag → 타크",
      },
    ],
  },
  {
    id: 2,
    band: 1,
    title: "자기소개 1",
    subtitle: "인사하기",
    vocabulary: [],
    expressions: [
      { german: "Hallo!", korean: "안녕!", note: "비공식" },
      { german: "Guten Morgen!", korean: "좋은 아침입니다!", note: "아침 인사" },
      { german: "Guten Tag!", korean: "좋은 날입니다!", note: "낮 인사" },
      { german: "Guten Abend!", korean: "좋은 저녁입니다!", note: "저녁 인사" },
      { german: "Auf Wiedersehen!", korean: "안녕히 계세요!", note: "공식 작별" },
      { german: "Tschüss!", korean: "잘 가!", note: "비공식 작별" },
      { german: "Bis morgen!", korean: "내일 봐!" },
      { german: "Bis bald!", korean: "곧 보자!" },
      { german: "Gute Nacht!", korean: "안녕히 주무세요!/잘 자!", note: "잠자리 인사" },
      { german: "Schlaf gut!", korean: "잘 자!" },
    ],
    conversations: [
      [
        { speaker: "A", german: "Guten Morgen, Damian.", korean: "좋은 아침이야, 다미안." },
        { speaker: "B", german: "Guten Morgen, Elena.", korean: "좋은 아침, 엘레나." },
      ],
      [
        { speaker: "A", german: "Gute Nacht, schlaf gut.", korean: "좋은 밤 보내, 잘 자." },
        { speaker: "B", german: "Schlaf gut. Bis morgen.", korean: "잘 자. 내일 보자." },
      ],
    ],
    grammarNotes: [
      {
        title: "Herr / Frau",
        content:
          "Herr는 남자의 성 앞에, Frau는 여자의 성 앞에 붙여 쓰는 존칭입니다. 예: Guten Morgen, Herr Schmidt!",
      },
      {
        title: "Gute Nacht 주의",
        content:
          "밤에 길을 마주쳤을 때는 Gute Nacht!로 인사하지 않아요. 아무리 높은 밤이라도 Guten Abend!로 인사합니다.",
      },
    ],
  },
  {
    id: 3,
    band: 1,
    title: "자기소개 2",
    subtitle: "안부",
    vocabulary: [],
    expressions: [
      { german: "Wie geht es Ihnen?", korean: "어떻게 지내세요?", note: "존댓말" },
      { german: "Wie geht es dir?", korean: "어떻게 지내?", note: "반말" },
      { german: "Wie geht's?", korean: "어떻게 지내?", note: "구어체 줄임" },
      { german: "Sehr gut.", korean: "매우 잘 지내." },
      { german: "Gut.", korean: "잘 지내." },
      { german: "Es geht.", korean: "그저 그래." },
      { german: "Nicht so gut.", korean: "그리 좋지는 않아." },
      { german: "prima / toll / super", korean: "매우 좋아 / 훌륭해 / 최고야" },
      { german: "Mir geht es fantastisch, danke.", korean: "아주 잘 지내요, 감사합니다." },
      { german: "Auch gut.", korean: "나도 잘 지내." },
    ],
    conversations: [
      [
        { speaker: "A", german: "Guten Tag. Wie geht es Ihnen?", korean: "안녕하세요. 어떻게 지내세요?" },
        { speaker: "B", german: "Mir geht es fantastisch, danke.", korean: "아주 잘 지내요, 감사합니다." },
      ],
      [
        { speaker: "A", german: "Wie geht es dir?", korean: "어떻게 지내?" },
        { speaker: "B", german: "Es geht mir nicht so gut.", korean: "그리 좋지 않아." },
      ],
      [
        { speaker: "A", german: "Wie geht's?", korean: "어떻게 지내?" },
        { speaker: "B", german: "Gut. Wie geht's dir?", korean: "잘 지내. 너는 어떻게 지내?" },
        { speaker: "A", german: "Auch gut.", korean: "나도 잘 지내." },
      ],
    ],
    grammarNotes: [
      {
        title: "Wie geht es + 3격",
        content:
          "Wie geht es mir? (나는), Wie geht es dir? (너는), Wie geht es ihm? (그는), Wie geht es ihr? (그녀는), Wie geht es Ihnen? (당신은)",
      },
    ],
  },
  {
    id: 4,
    band: 1,
    title: "자기소개 3",
    subtitle: "이름",
    vocabulary: [],
    expressions: [
      { german: "Wie heißen Sie?", korean: "성함이 어떻게 되세요?", note: "존댓말" },
      { german: "Wie heißt du?", korean: "이름이 어떻게 돼?", note: "반말" },
      { german: "Wie ist Ihr Name?", korean: "성함이 어떻게 되세요?", note: "존댓말" },
      { german: "Wie ist dein Name?", korean: "이름이 어떻게 돼?", note: "반말" },
      { german: "Ich bin Pascal.", korean: "나는 Pascal입니다." },
      { german: "Ich heiße Pascal.", korean: "나는 Pascal이야." },
      { german: "Mein Name ist Pascal.", korean: "나의 이름은 Pascal이야." },
    ],
    conversations: [
      [
        { speaker: "A", german: "Wie ist dein Name?", korean: "너 이름이 뭐니?" },
        { speaker: "B", german: "Mein Name ist Damian.", korean: "내 이름은 다미안이야." },
      ],
      [
        { speaker: "A", german: "Wie heißen Sie?", korean: "성함이 어떻게 되세요?" },
        { speaker: "B", german: "Ich heiße Marie Lübeck. Wie ist Ihr Name?", korean: "저는 Marie Lübeck입니다. 성함이 어떻게 되세요?" },
        { speaker: "A", german: "Mein Name ist Frank Luhm.", korean: "제 이름은 Frank Luhm입니다." },
      ],
    ],
    grammarNotes: [
      {
        title: "heißen 동사 변화",
        content: "ich heiße, du heißt, er/sie heißt, wir heißen, ihr heißt, sie/Sie heißen",
      },
    ],
  },
  {
    id: 5,
    band: 1,
    title: "자기소개 4",
    subtitle: "국적",
    vocabulary: [
      { german: "Deutschland", korean: "독일" },
      { german: "Korea", korean: "한국" },
      { german: "Japan", korean: "일본" },
      { german: "China", korean: "중국" },
      { german: "Amerika", korean: "미국" },
      { german: "Frankreich", korean: "프랑스" },
      { german: "England", korean: "영국" },
      { german: "Österreich", korean: "오스트리아" },
      { german: "die Schweiz", korean: "스위스" },
      { german: "Italien", korean: "이탈리아" },
      { german: "Spanien", korean: "스페인" },
      { german: "Türkei", korean: "터키" },
    ],
    expressions: [
      { german: "Woher kommen Sie?", korean: "어디서 오셨나요?", note: "존댓말" },
      { german: "Woher kommst du?", korean: "어디서 왔어?", note: "반말" },
      { german: "Ich komme aus Korea.", korean: "나는 한국에서 왔어요." },
      { german: "Ich komme aus Deutschland.", korean: "나는 독일에서 왔어요." },
      { german: "Wo wohnen Sie?", korean: "어디에 사세요?", note: "존댓말" },
      { german: "Ich wohne in Berlin.", korean: "나는 베를린에 살아요." },
      { german: "Ich bin Koreaner.", korean: "나는 한국인이에요. (남성)" },
      { german: "Ich bin Koreanerin.", korean: "나는 한국인이에요. (여성)" },
    ],
    conversations: [
      [
        { speaker: "A", german: "Woher kommen Sie?", korean: "어디서 오셨나요?" },
        { speaker: "B", german: "Ich komme aus Korea. Und Sie?", korean: "한국에서 왔어요. 당신은요?" },
        { speaker: "A", german: "Ich komme aus Deutschland.", korean: "저는 독일에서 왔어요." },
      ],
      [
        { speaker: "A", german: "Wo wohnst du?", korean: "어디 살아?" },
        { speaker: "B", german: "Ich wohne in Seoul.", korean: "서울에 살아." },
      ],
    ],
    grammarNotes: [
      {
        title: "kommen aus + 나라",
        content: "aus는 국가 앞에 사용. 예: aus Korea, aus Deutschland, aus Japan",
      },
      {
        title: "wohnen in + 도시",
        content: "in은 도시 앞에 사용. 예: in Seoul, in Berlin, in Tokyo",
      },
    ],
  },
  {
    id: 6,
    band: 1,
    title: "자기소개 5",
    subtitle: "직업",
    vocabulary: [
      { german: "der Student / die Studentin", korean: "학생 (대학생)" },
      { german: "der Lehrer / die Lehrerin", korean: "선생님" },
      { german: "der Arzt / die Ärztin", korean: "의사" },
      { german: "der Koch / die Köchin", korean: "요리사" },
      { german: "der Ingenieur / die Ingenieurin", korean: "엔지니어" },
      { german: "der Manager / die Managerin", korean: "매니저" },
      { german: "der Musiker / die Musikerin", korean: "음악가" },
      { german: "der Journalist / die Journalistin", korean: "기자" },
      { german: "der Schauspieler / die Schauspielerin", korean: "배우" },
      { german: "der Programmierer / die Programmiererin", korean: "프로그래머" },
    ],
    expressions: [
      { german: "Was sind Sie von Beruf?", korean: "직업이 뭐예요?", note: "존댓말" },
      { german: "Was bist du von Beruf?", korean: "직업이 뭐야?", note: "반말" },
      { german: "Ich bin Student.", korean: "나는 학생이에요." },
      { german: "Ich bin Lehrerin.", korean: "나는 선생님이에요." },
      { german: "Ich arbeite bei [회사명].", korean: "나는 [회사]에서 일해요." },
      { german: "Ich arbeite als Arzt.", korean: "나는 의사로 일해요." },
    ],
    conversations: [
      [
        { speaker: "A", german: "Was sind Sie von Beruf?", korean: "직업이 뭐예요?" },
        { speaker: "B", german: "Ich bin Lehrerin. Und Sie?", korean: "저는 선생님이에요. 당신은요?" },
        { speaker: "A", german: "Ich bin Student.", korean: "저는 학생이에요." },
      ],
    ],
    grammarNotes: [
      {
        title: "직업 표현 – 관사 없이",
        content: "Ich bin Student. (O) / Ich bin ein Student. (X) — 직업을 말할 때는 부정관사 ein/eine를 사용하지 않습니다.",
      },
    ],
  },
  {
    id: 7,
    band: 1,
    title: "자기소개 6",
    subtitle: "취미",
    vocabulary: [
      { german: "lesen", korean: "독서" },
      { german: "Musik hören", korean: "음악 듣기" },
      { german: "reisen", korean: "여행" },
      { german: "kochen", korean: "요리" },
      { german: "Sport treiben", korean: "운동" },
      { german: "tanzen", korean: "춤추기" },
      { german: "malen", korean: "그림 그리기" },
      { german: "fotografieren", korean: "사진 찍기" },
      { german: "Kino gehen", korean: "영화 보러 가기" },
      { german: "wandern", korean: "하이킹" },
      { german: "schwimmen", korean: "수영" },
      { german: "spielen", korean: "게임/악기 연주" },
    ],
    expressions: [
      { german: "Was machen Sie in der Freizeit?", korean: "여가 시간에 뭘 하세요?", note: "존댓말" },
      { german: "Was machst du in der Freizeit?", korean: "여가 시간에 뭘 해?", note: "반말" },
      { german: "Ich lese gern.", korean: "나는 독서를 즐겨요." },
      { german: "Ich höre gern Musik.", korean: "나는 음악 듣기를 즐겨요." },
      { german: "Mein Hobby ist Kochen.", korean: "내 취미는 요리예요." },
      { german: "Ich spiele gern Fußball.", korean: "나는 축구를 즐겨요." },
    ],
    conversations: [
      [
        { speaker: "A", german: "Was machst du in der Freizeit?", korean: "여가 시간에 뭘 해?" },
        { speaker: "B", german: "Ich lese gern und ich höre Musik. Und du?", korean: "독서를 즐기고 음악을 들어. 너는?" },
        { speaker: "A", german: "Ich reise gern.", korean: "나는 여행을 즐겨." },
      ],
    ],
    grammarNotes: [
      {
        title: "gern – 즐겨 ~하다",
        content: "동사 뒤에 gern을 붙이면 '즐겨 ~하다'의 의미가 됩니다. 예: lesen → Ich lese gern. (나는 독서를 즐겨요.)",
      },
    ],
  },

  // ─── BAND 2 ───────────────────────────────────────────────────────────────
  {
    id: 8,
    band: 2,
    title: "숫자",
    vocabulary: [
      { german: "null", korean: "0" },
      { german: "eins", korean: "1" },
      { german: "zwei", korean: "2" },
      { german: "drei", korean: "3" },
      { german: "vier", korean: "4" },
      { german: "fünf", korean: "5" },
      { german: "sechs", korean: "6" },
      { german: "sieben", korean: "7" },
      { german: "acht", korean: "8" },
      { german: "neun", korean: "9" },
      { german: "zehn", korean: "10" },
      { german: "elf", korean: "11" },
      { german: "zwölf", korean: "12" },
      { german: "dreizehn", korean: "13" },
      { german: "zwanzig", korean: "20" },
      { german: "dreißig", korean: "30" },
      { german: "vierzig", korean: "40" },
      { german: "fünfzig", korean: "50" },
      { german: "hundert", korean: "100" },
      { german: "tausend", korean: "1,000" },
    ],
    expressions: [
      { german: "Wie ist Ihre Telefonnummer?", korean: "전화번호가 어떻게 되세요?" },
      { german: "Meine Nummer ist ...", korean: "제 번호는 ...이에요." },
      { german: "einundzwanzig", korean: "21 (20+1)" },
      { german: "zweiunddreißig", korean: "32 (30+2)" },
    ],
    conversations: [
      [
        { speaker: "A", german: "Wie ist Ihre Telefonnummer?", korean: "전화번호가 어떻게 되세요?" },
        { speaker: "B", german: "Meine Nummer ist 0176 - 123 45 67.", korean: "제 번호는 0176 - 123 45 67이에요." },
      ],
    ],
    grammarNotes: [
      {
        title: "21~99 숫자 만들기",
        content: "1의 자리 + und + 10의 자리. 예: einundzwanzig (21), dreiunddreißig (33), siebenundneunzig (97)",
      },
    ],
  },
  {
    id: 9,
    band: 2,
    title: "시간/시각",
    vocabulary: [
      { german: "die Uhr", korean: "시계 / ~시" },
      { german: "die Minute", korean: "분" },
      { german: "die Stunde", korean: "시간" },
      { german: "der Morgen", korean: "아침" },
      { german: "der Mittag", korean: "점심" },
      { german: "der Nachmittag", korean: "오후" },
      { german: "der Abend", korean: "저녁" },
      { german: "die Nacht", korean: "밤" },
    ],
    expressions: [
      { german: "Wie viel Uhr ist es?", korean: "몇 시예요?" },
      { german: "Wie spät ist es?", korean: "몇 시예요?" },
      { german: "Es ist drei Uhr.", korean: "세 시예요." },
      { german: "Es ist halb vier.", korean: "세 시 반이에요. (4시의 절반)" },
      { german: "Es ist Viertel nach drei.", korean: "세 시 십오 분이에요." },
      { german: "Es ist Viertel vor vier.", korean: "네 시 십오 분 전이에요." },
      { german: "Es ist zehn nach fünf.", korean: "다섯 시 십 분이에요." },
      { german: "Um wie viel Uhr?", korean: "몇 시에?" },
    ],
    conversations: [
      [
        { speaker: "A", german: "Wie viel Uhr ist es?", korean: "몇 시예요?" },
        { speaker: "B", german: "Es ist halb drei.", korean: "두 시 반이에요." },
      ],
      [
        { speaker: "A", german: "Um wie viel Uhr beginnt der Kurs?", korean: "강좌가 몇 시에 시작해요?" },
        { speaker: "B", german: "Um neun Uhr.", korean: "아홉 시에요." },
      ],
    ],
    grammarNotes: [
      {
        title: "halb의 독특한 용법",
        content: "halb vier = 3:30 (4시의 절반). 한국어 '3시 반'과 다르게 '4시의 절반'이라는 의미입니다.",
      },
    ],
  },
  {
    id: 10,
    band: 2,
    title: "동사 sprechen",
    subtitle: "말하다",
    vocabulary: [
      { german: "sprechen", korean: "말하다, 이야기하다" },
      { german: "Deutsch", korean: "독일어" },
      { german: "Englisch", korean: "영어" },
      { german: "Koreanisch", korean: "한국어" },
      { german: "Japanisch", korean: "일본어" },
      { german: "Chinesisch", korean: "중국어" },
      { german: "Französisch", korean: "프랑스어" },
    ],
    expressions: [
      { german: "Ich spreche Deutsch.", korean: "나는 독일어를 말해요." },
      { german: "Sprechen Sie Englisch?", korean: "영어 하세요?", note: "존댓말" },
      { german: "Ich spreche ein bisschen Deutsch.", korean: "나는 독일어를 조금 해요." },
      { german: "Ich spreche kein Japanisch.", korean: "나는 일본어를 못 해요." },
    ],
    conversations: [
      [
        { speaker: "A", german: "Sprechen Sie Deutsch?", korean: "독일어 하세요?" },
        { speaker: "B", german: "Ja, ich spreche ein bisschen Deutsch.", korean: "네, 독일어를 조금 해요." },
      ],
    ],
    grammarNotes: [
      {
        title: "sprechen 변화 (불규칙)",
        content: "ich spreche / du sprichst / er·sie spricht / wir sprechen / ihr sprecht / sie·Sie sprechen",
      },
    ],
  },
  {
    id: 11,
    band: 2,
    title: "이동을 나타내는 동사",
    subtitle: "gehen, fahren, fliegen",
    vocabulary: [
      { german: "gehen", korean: "걸어가다" },
      { german: "fahren", korean: "타고 가다 (차/자전거/기차)" },
      { german: "fliegen", korean: "날아가다 (비행기)" },
      { german: "die Schule", korean: "학교" },
      { german: "die Arbeit", korean: "직장" },
      { german: "der Supermarkt", korean: "슈퍼마켓" },
      { german: "der Bahnhof", korean: "기차역" },
      { german: "das Kino", korean: "영화관" },
    ],
    expressions: [
      { german: "Ich gehe in die Schule.", korean: "나는 학교에 가요." },
      { german: "Er fährt mit dem Bus.", korean: "그는 버스를 타요." },
      { german: "Wir fliegen nach Berlin.", korean: "우리는 베를린으로 날아가요." },
      { german: "Wohin gehst du?", korean: "어디 가?" },
      { german: "Ich gehe in die Stadt.", korean: "나는 시내에 가요." },
    ],
    conversations: [
      [
        { speaker: "A", german: "Wohin gehst du?", korean: "어디 가?" },
        { speaker: "B", german: "Ich gehe in die Schule. Und du?", korean: "학교 가. 너는?" },
        { speaker: "A", german: "Ich fahre in die Stadt.", korean: "나는 시내에 가." },
      ],
    ],
    grammarNotes: [
      {
        title: "fahren 변화 (불규칙)",
        content: "ich fahre / du fährst / er·sie fährt / wir fahren / ihr fahrt / sie·Sie fahren",
      },
    ],
  },
  {
    id: 12,
    band: 2,
    title: "동사 essen",
    subtitle: "먹다",
    vocabulary: [
      { german: "das Brot", korean: "빵" },
      { german: "der Käse", korean: "치즈" },
      { german: "das Fleisch", korean: "고기" },
      { german: "der Fisch", korean: "생선" },
      { german: "das Gemüse", korean: "채소" },
      { german: "das Obst", korean: "과일" },
      { german: "der Salat", korean: "샐러드" },
      { german: "die Suppe", korean: "수프" },
      { german: "das Wasser", korean: "물" },
      { german: "der Kaffee", korean: "커피" },
    ],
    expressions: [
      { german: "Was möchten Sie essen?", korean: "뭘 드시고 싶으세요?", note: "존댓말" },
      { german: "Ich esse gern Pizza.", korean: "나는 피자를 즐겨 먹어요." },
      { german: "Ich esse kein Fleisch.", korean: "나는 고기를 안 먹어요." },
      { german: "Ich trinke gern Kaffee.", korean: "나는 커피를 즐겨 마셔요." },
    ],
    conversations: [
      [
        { speaker: "A", german: "Was isst du gern?", korean: "뭘 즐겨 먹어?" },
        { speaker: "B", german: "Ich esse gern Salat und Fisch. Und du?", korean: "샐러드랑 생선을 즐겨 먹어. 너는?" },
        { speaker: "A", german: "Ich esse gern Fleisch.", korean: "나는 고기를 즐겨 먹어." },
      ],
    ],
    grammarNotes: [
      {
        title: "essen 변화 (불규칙)",
        content: "ich esse / du isst / er·sie isst / wir essen / ihr esst / sie·Sie essen",
      },
    ],
  },
  {
    id: 13,
    band: 2,
    title: "약속하기",
    vocabulary: [
      { german: "Montag", korean: "월요일" },
      { german: "Dienstag", korean: "화요일" },
      { german: "Mittwoch", korean: "수요일" },
      { german: "Donnerstag", korean: "목요일" },
      { german: "Freitag", korean: "금요일" },
      { german: "Samstag", korean: "토요일" },
      { german: "Sonntag", korean: "일요일" },
      { german: "heute", korean: "오늘" },
      { german: "morgen", korean: "내일" },
      { german: "übermorgen", korean: "모레" },
    ],
    expressions: [
      { german: "Wann haben Sie Zeit?", korean: "언제 시간 있으세요?", note: "존댓말" },
      { german: "Ich habe am Montag Zeit.", korean: "월요일에 시간이 있어요." },
      { german: "Passt dir Freitag?", korean: "금요일 괜찮아?", note: "반말" },
      { german: "Ja, das passt gut.", korean: "네, 좋아요." },
      { german: "Nein, das passt leider nicht.", korean: "아니요, 유감스럽게도 안 돼요." },
      { german: "Um wie viel Uhr?", korean: "몇 시에?" },
    ],
    conversations: [
      [
        { speaker: "A", german: "Wann haben Sie Zeit?", korean: "언제 시간 있으세요?" },
        { speaker: "B", german: "Ich habe am Mittwoch Zeit.", korean: "수요일에 시간이 있어요." },
        { speaker: "A", german: "Gut! Um 14 Uhr?", korean: "좋아요! 14시에요?" },
        { speaker: "B", german: "Ja, das passt gut.", korean: "네, 좋아요." },
      ],
    ],
    grammarNotes: [
      {
        title: "am + 요일",
        content: "요일 앞에는 am을 사용합니다. 예: am Montag (월요일에), am Freitag (금요일에)",
      },
    ],
  },
  {
    id: 14,
    band: 2,
    title: "위치 찾기",
    vocabulary: [
      { german: "die Bank", korean: "은행" },
      { german: "das Krankenhaus", korean: "병원" },
      { german: "das Hotel", korean: "호텔" },
      { german: "das Restaurant", korean: "식당" },
      { german: "der Supermarkt", korean: "슈퍼마켓" },
      { german: "die Apotheke", korean: "약국" },
      { german: "links", korean: "왼쪽으로" },
      { german: "rechts", korean: "오른쪽으로" },
      { german: "geradeaus", korean: "직진" },
      { german: "neben", korean: "옆에" },
    ],
    expressions: [
      { german: "Wo ist die Bank?", korean: "은행이 어디예요?" },
      { german: "Entschuldigung, wo ist ...?", korean: "실례합니다, ...이 어디예요?" },
      { german: "Gehen Sie links.", korean: "왼쪽으로 가세요." },
      { german: "Gehen Sie geradeaus.", korean: "직진하세요." },
      { german: "Die Bank ist neben dem Supermarkt.", korean: "은행은 슈퍼마켓 옆에 있어요." },
    ],
    conversations: [
      [
        { speaker: "A", german: "Entschuldigung, wo ist die nächste Apotheke?", korean: "실례합니다, 가장 가까운 약국이 어디예요?" },
        { speaker: "B", german: "Gehen Sie geradeaus, dann links.", korean: "직진하시다가 왼쪽으로 가세요." },
        { speaker: "A", german: "Danke!", korean: "감사합니다!" },
      ],
    ],
    grammarNotes: [
      {
        title: "Wo ist ...? vs Wohin gehst du?",
        content: "wo = 어디에 (위치). wohin = 어디로 (방향). Wo ist die Bank? / Wohin gehen Sie?",
      },
    ],
  },

  // ─── BAND 3 ───────────────────────────────────────────────────────────────
  {
    id: 15,
    band: 3,
    title: "주문하기",
    vocabulary: [
      { german: "die Speisekarte", korean: "메뉴판" },
      { german: "das Gericht", korean: "요리, 음식" },
      { german: "die Vorspeise", korean: "전채 요리" },
      { german: "das Hauptgericht", korean: "메인 요리" },
      { german: "der Nachtisch", korean: "후식" },
      { german: "das Getränk", korean: "음료" },
      { german: "die Rechnung", korean: "계산서" },
    ],
    expressions: [
      { german: "Ich möchte ... bestellen.", korean: "...을 주문하고 싶어요." },
      { german: "Was empfehlen Sie?", korean: "뭘 추천하세요?" },
      { german: "Die Rechnung, bitte.", korean: "계산서 주세요." },
      { german: "Zusammen oder getrennt?", korean: "같이 내실 건가요, 따로따로 내실 건가요?" },
      { german: "Getrennt, bitte.", korean: "따로따로 부탁해요." },
    ],
    conversations: [
      [
        { speaker: "A", german: "Was möchten Sie bestellen?", korean: "무엇을 주문하시겠어요?" },
        { speaker: "B", german: "Ich möchte den Salat und ein Wasser, bitte.", korean: "샐러드랑 물 한 잔 주세요." },
        { speaker: "A", german: "Sehr gern.", korean: "알겠습니다." },
      ],
    ],
    grammarNotes: [
      {
        title: "möchten – 원하다 (화법조동사)",
        content: "ich möchte / du möchtest / er·sie möchte / wir möchten / ihr möchtet / sie·Sie möchten",
      },
    ],
  },
  {
    id: 16,
    band: 3,
    title: "물건 사기",
    vocabulary: [
      { german: "das Geschäft", korean: "가게" },
      { german: "der Preis", korean: "가격" },
      { german: "teuer", korean: "비싼" },
      { german: "billig / günstig", korean: "저렴한" },
      { german: "kaufen", korean: "사다" },
      { german: "bezahlen", korean: "지불하다" },
      { german: "die Größe", korean: "사이즈" },
      { german: "die Farbe", korean: "색깔" },
    ],
    expressions: [
      { german: "Was kostet das?", korean: "이게 얼마예요?" },
      { german: "Wie viel kostet ...?", korean: "...이 얼마예요?" },
      { german: "Das kostet 20 Euro.", korean: "20유로예요." },
      { german: "Haben Sie das in Größe M?", korean: "M 사이즈 있어요?" },
      { german: "Ich nehme das.", korean: "이거 살게요." },
    ],
    conversations: [
      [
        { speaker: "A", german: "Guten Tag! Was kostet diese Jacke?", korean: "안녕하세요! 이 재킷 얼마예요?" },
        { speaker: "B", german: "Die kostet 49 Euro.", korean: "49유로예요." },
        { speaker: "A", german: "Haben Sie das auch in Blau?", korean: "파란색도 있나요?" },
        { speaker: "B", german: "Ja, natürlich.", korean: "네, 물론이죠." },
      ],
    ],
    grammarNotes: [],
  },
  {
    id: 17,
    band: 3,
    title: "수량/양을 묻는 의문문",
    subtitle: "Wie viel(e) ~",
    vocabulary: [
      { german: "das Kilogramm (kg)", korean: "킬로그램" },
      { german: "das Gramm (g)", korean: "그램" },
      { german: "der Liter (l)", korean: "리터" },
      { german: "das Stück", korean: "개, 조각" },
      { german: "die Flasche", korean: "병" },
      { german: "die Packung", korean: "팩, 봉지" },
    ],
    expressions: [
      { german: "Wie viel kostet das?", korean: "얼마예요? (셀 수 없는 것)" },
      { german: "Wie viele Äpfel?", korean: "사과 몇 개? (셀 수 있는 것)" },
      { german: "Ein Kilo Äpfel, bitte.", korean: "사과 1킬로 주세요." },
      { german: "Zwei Flaschen Wasser, bitte.", korean: "물 두 병 주세요." },
    ],
    conversations: [
      [
        { speaker: "A", german: "Wie viel Milch brauchen Sie?", korean: "우유가 얼마나 필요하세요?" },
        { speaker: "B", german: "Einen Liter, bitte.", korean: "1리터요." },
      ],
    ],
    grammarNotes: [
      {
        title: "Wie viel vs Wie viele",
        content: "wie viel = 셀 수 없는 것 (wie viel Wasser?), wie viele = 셀 수 있는 것 (wie viele Äpfel?)",
      },
    ],
  },
  {
    id: 18,
    band: 3,
    title: "기간을 묻는 의문문",
    subtitle: "Wie lange ~",
    vocabulary: [
      { german: "die Woche", korean: "주, 일주일" },
      { german: "der Monat", korean: "달, 월" },
      { german: "das Jahr", korean: "년, 해" },
      { german: "der Tag", korean: "날, 일" },
      { german: "die Stunde", korean: "시간" },
      { german: "die Minute", korean: "분" },
    ],
    expressions: [
      { german: "Wie lange dauert das?", korean: "얼마나 걸려요?" },
      { german: "Wie lange bleiben Sie?", korean: "얼마나 머무르실 거예요?" },
      { german: "Das dauert zwei Stunden.", korean: "두 시간 걸려요." },
      { german: "Ich bleibe eine Woche.", korean: "일주일 머물러요." },
    ],
    conversations: [
      [
        { speaker: "A", german: "Wie lange dauert der Flug?", korean: "비행이 얼마나 걸려요?" },
        { speaker: "B", german: "Er dauert ungefähr 12 Stunden.", korean: "약 12시간 걸려요." },
      ],
    ],
    grammarNotes: [],
  },
  {
    id: 19,
    band: 3,
    title: "화법조동사 können",
    subtitle: "능력과 가능성 나타내기",
    vocabulary: [],
    expressions: [
      { german: "Ich kann Deutsch sprechen.", korean: "나는 독일어를 말할 수 있어요." },
      { german: "Kannst du mir helfen?", korean: "나를 도와줄 수 있어?" },
      { german: "Ich kann das nicht.", korean: "나는 그것을 할 수 없어요." },
      { german: "Können Sie das wiederholen?", korean: "다시 말씀해 주실 수 있어요?", note: "존댓말" },
    ],
    conversations: [
      [
        { speaker: "A", german: "Kannst du Klavier spielen?", korean: "피아노 칠 수 있어?" },
        { speaker: "B", german: "Ja, ich kann ein bisschen Klavier spielen.", korean: "응, 피아노를 조금 칠 수 있어." },
      ],
    ],
    grammarNotes: [
      {
        title: "können 변화",
        content: "ich kann / du kannst / er·sie kann / wir können / ihr könnt / sie·Sie können",
      },
      {
        title: "화법조동사 어순",
        content: "화법조동사는 2위치에 오고 동사 원형은 문장 맨 끝에 옵니다. 예: Ich kann Deutsch sprechen.",
      },
    ],
  },
  {
    id: 20,
    band: 3,
    title: "부탁 및 요청하기",
    vocabulary: [],
    expressions: [
      { german: "Können Sie mir helfen?", korean: "저를 도와주실 수 있으세요?", note: "존댓말" },
      { german: "Bitte ...", korean: "...해 주세요." },
      { german: "Könnten Sie bitte ...?", korean: "...해 주실 수 있으세요? (정중한 부탁)" },
      { german: "Natürlich!", korean: "물론이죠!" },
      { german: "Es tut mir leid.", korean: "죄송합니다." },
      { german: "Kein Problem.", korean: "문제없어요." },
    ],
    conversations: [
      [
        { speaker: "A", german: "Könnten Sie bitte etwas langsamer sprechen?", korean: "조금 더 천천히 말씀해 주실 수 있으세요?" },
        { speaker: "B", german: "Natürlich, kein Problem.", korean: "물론이죠, 문제없어요." },
      ],
    ],
    grammarNotes: [],
  },
  {
    id: 21,
    band: 3,
    title: "분리동사",
    vocabulary: [
      { german: "aufstehen", korean: "일어나다" },
      { german: "ankommen", korean: "도착하다" },
      { german: "abfahren", korean: "출발하다" },
      { german: "anrufen", korean: "전화하다" },
      { german: "einkaufen", korean: "장보다, 쇼핑하다" },
      { german: "aufmachen", korean: "열다" },
      { german: "zumachen", korean: "닫다" },
      { german: "mitkommen", korean: "함께 오다" },
    ],
    expressions: [
      { german: "Ich stehe um 7 Uhr auf.", korean: "나는 7시에 일어나요." },
      { german: "Der Zug kommt um 10 Uhr an.", korean: "기차가 10시에 도착해요." },
      { german: "Ich rufe dich an.", korean: "내가 너한테 전화할게." },
      { german: "Wir kaufen zusammen ein.", korean: "우리는 같이 장을 봐요." },
    ],
    conversations: [
      [
        { speaker: "A", german: "Wann stehst du auf?", korean: "몇 시에 일어나?" },
        { speaker: "B", german: "Ich stehe um 6 Uhr auf.", korean: "6시에 일어나." },
      ],
    ],
    grammarNotes: [
      {
        title: "분리동사 규칙",
        content: "분리전철(auf-, an-, ab-, ein- 등)이 문장 끝으로 이동합니다. 예: aufstehen → Ich stehe auf.",
      },
    ],
  },

  // ─── BAND 4 ───────────────────────────────────────────────────────────────
  {
    id: 22,
    band: 4,
    title: "명령법",
    vocabulary: [],
    expressions: [
      { german: "Kommen Sie bitte hier.", korean: "여기로 오세요.", note: "Sie-명령형" },
      { german: "Komm bitte!", korean: "와!", note: "du-명령형" },
      { german: "Kommt bitte!", korean: "와!", note: "ihr-명령형" },
      { german: "Machen Sie das Fenster auf!", korean: "창문을 여세요!" },
      { german: "Schreib deinen Namen!", korean: "이름을 써!" },
      { german: "Hören Sie bitte zu!", korean: "들어주세요!" },
    ],
    conversations: [
      [
        { speaker: "A", german: "Öffnen Sie bitte das Buch auf Seite 10.", korean: "책 10쪽을 펴주세요." },
        { speaker: "B", german: "Ja, natürlich.", korean: "네, 물론이죠." },
      ],
    ],
    grammarNotes: [
      {
        title: "명령형 만들기 (Sie)",
        content: "동사 원형 + Sie. 예: gehen → Gehen Sie! / öffnen → Öffnen Sie!",
      },
      {
        title: "명령형 만들기 (du)",
        content: "동사 어간 (보통 -e 생략 가능). 예: kommen → Komm(e)! / nehmen → Nimm!",
      },
    ],
  },
  {
    id: 23,
    band: 4,
    title: "교통수단",
    vocabulary: [
      { german: "das Auto", korean: "자동차" },
      { german: "der Bus", korean: "버스" },
      { german: "die U-Bahn", korean: "지하철" },
      { german: "die S-Bahn", korean: "도시 철도" },
      { german: "der Zug", korean: "기차" },
      { german: "das Fahrrad", korean: "자전거" },
      { german: "das Flugzeug", korean: "비행기" },
      { german: "das Taxi", korean: "택시" },
      { german: "zu Fuß", korean: "걸어서" },
    ],
    expressions: [
      { german: "Wie fahren Sie zur Arbeit?", korean: "직장까지 어떻게 가세요?" },
      { german: "Ich fahre mit dem Bus.", korean: "버스를 타고 가요." },
      { german: "Ich gehe zu Fuß.", korean: "걸어서 가요." },
      { german: "Ich nehme die U-Bahn.", korean: "지하철을 타요." },
    ],
    conversations: [
      [
        { speaker: "A", german: "Wie kommst du zur Schule?", korean: "어떻게 학교에 와?" },
        { speaker: "B", german: "Ich nehme die U-Bahn. Und du?", korean: "지하철 타. 너는?" },
        { speaker: "A", german: "Ich gehe zu Fuß, es ist nicht weit.", korean: "걸어서 가, 멀지 않아." },
      ],
    ],
    grammarNotes: [
      {
        title: "mit + 교통수단 (3격)",
        content: "mit dem Bus / mit dem Zug / mit dem Fahrrad / mit dem Auto (단, zu Fuß는 mit 없음)",
      },
    ],
  },
  {
    id: 24,
    band: 4,
    title: "길 묻기",
    vocabulary: [
      { german: "die Kreuzung", korean: "교차로" },
      { german: "die Ampel", korean: "신호등" },
      { german: "die Brücke", korean: "다리" },
      { german: "biegen", korean: "돌다, 꺾다" },
      { german: "überqueren", korean: "건너다" },
      { german: "die Straße", korean: "길, 거리" },
    ],
    expressions: [
      { german: "Wie komme ich zum Bahnhof?", korean: "기차역까지 어떻게 가나요?" },
      { german: "Biegen Sie links ab.", korean: "왼쪽으로 도세요." },
      { german: "Biegen Sie rechts ab.", korean: "오른쪽으로 도세요." },
      { german: "Gehen Sie über die Kreuzung.", korean: "교차로를 건너세요." },
      { german: "Es ist ungefähr 10 Minuten zu Fuß.", korean: "걸어서 약 10분이에요." },
    ],
    conversations: [
      [
        { speaker: "A", german: "Entschuldigung, wie komme ich zum Bahnhof?", korean: "실례합니다, 기차역까지 어떻게 가나요?" },
        { speaker: "B", german: "Gehen Sie geradeaus, dann biegen Sie rechts ab.", korean: "직진하시다가 오른쪽으로 도세요." },
        { speaker: "A", german: "Und wie weit ist das?", korean: "얼마나 멀어요?" },
        { speaker: "B", german: "Ungefähr fünf Minuten.", korean: "약 5분이요." },
      ],
    ],
    grammarNotes: [],
  },
  {
    id: 25,
    band: 4,
    title: "위치를 나타내는 전치사",
    vocabulary: [
      { german: "auf", korean: "위에" },
      { german: "in", korean: "안에" },
      { german: "unter", korean: "아래에" },
      { german: "über", korean: "위에 (떨어져서)" },
      { german: "neben", korean: "옆에" },
      { german: "vor", korean: "앞에" },
      { german: "hinter", korean: "뒤에" },
      { german: "zwischen", korean: "사이에" },
      { german: "an", korean: "~에 붙어서" },
    ],
    expressions: [
      { german: "Das Buch liegt auf dem Tisch.", korean: "책이 탁자 위에 있어요." },
      { german: "Die Katze sitzt unter dem Stuhl.", korean: "고양이가 의자 아래에 앉아 있어요." },
      { german: "Das Hotel ist neben der Bank.", korean: "호텔이 은행 옆에 있어요." },
      { german: "Wo ist mein Schlüssel?", korean: "내 열쇠가 어디 있어?" },
    ],
    conversations: [
      [
        { speaker: "A", german: "Wo ist mein Handy?", korean: "내 핸드폰이 어디 있어?" },
        { speaker: "B", german: "Es liegt auf dem Tisch.", korean: "탁자 위에 있어." },
      ],
    ],
    grammarNotes: [
      {
        title: "위치 전치사 + 3격 (Dativ)",
        content: "위치(정지)를 나타낼 때: auf dem Tisch, in der Küche, neben dem Fenster",
      },
    ],
  },
  {
    id: 26,
    band: 4,
    title: "위치의 이동을 나타내는 전치사",
    vocabulary: [],
    expressions: [
      { german: "Ich lege das Buch auf den Tisch.", korean: "나는 책을 탁자 위에 놓아요." },
      { german: "Er geht in die Küche.", korean: "그는 부엌으로 가요." },
      { german: "Sie stellt die Vase auf den Tisch.", korean: "그녀는 꽃병을 탁자 위에 놓아요." },
      { german: "Das Kind läuft hinter das Haus.", korean: "아이가 집 뒤로 달려가요." },
    ],
    conversations: [
      [
        { speaker: "A", german: "Wohin legst du das Buch?", korean: "책을 어디에 놓아?" },
        { speaker: "B", german: "Ich lege es in die Tasche.", korean: "가방 안에 넣어." },
      ],
    ],
    grammarNotes: [
      {
        title: "이동 전치사 + 4격 (Akkusativ)",
        content: "이동(방향)을 나타낼 때: auf den Tisch, in die Küche, neben das Fenster",
      },
    ],
  },
  {
    id: 27,
    band: 4,
    title: "방 묘사하기",
    vocabulary: [
      { german: "das Wohnzimmer", korean: "거실" },
      { german: "das Schlafzimmer", korean: "침실" },
      { german: "die Küche", korean: "주방" },
      { german: "das Badezimmer", korean: "욕실" },
      { german: "das Arbeitszimmer", korean: "서재" },
      { german: "das Sofa", korean: "소파" },
      { german: "der Tisch", korean: "탁자" },
      { german: "der Stuhl", korean: "의자" },
      { german: "das Bett", korean: "침대" },
      { german: "der Schrank", korean: "옷장" },
    ],
    expressions: [
      { german: "Meine Wohnung hat drei Zimmer.", korean: "내 집에는 방이 세 개 있어요." },
      { german: "Das Sofa steht vor dem Fernseher.", korean: "소파가 TV 앞에 있어요." },
      { german: "Wie gefällt dir meine Wohnung?", korean: "내 집 어때?" },
      { german: "Sie ist sehr schön!", korean: "정말 예쁘다!" },
    ],
    conversations: [
      [
        { speaker: "A", german: "Wie ist deine Wohnung?", korean: "집이 어때?" },
        { speaker: "B", german: "Sie hat ein Wohnzimmer, eine Küche und zwei Schlafzimmer.", korean: "거실, 주방, 침실 두 개 있어." },
      ],
    ],
    grammarNotes: [],
  },
  {
    id: 28,
    band: 4,
    title: "도움 요청하기",
    vocabulary: [],
    expressions: [
      { german: "Können Sie mir bitte helfen?", korean: "도와주실 수 있으세요?" },
      { german: "Ich brauche Hilfe.", korean: "도움이 필요해요." },
      { german: "Wie bitte?", korean: "다시 말씀해 주세요? / 뭐라고요?" },
      { german: "Können Sie das bitte wiederholen?", korean: "다시 한 번 말씀해 주실 수 있어요?" },
      { german: "Ich verstehe nicht.", korean: "이해를 못 했어요." },
      { german: "Was bedeutet ...?", korean: "...이 무슨 뜻이에요?" },
    ],
    conversations: [
      [
        { speaker: "A", german: "Entschuldigung, ich verstehe nicht. Können Sie das bitte wiederholen?", korean: "실례합니다, 이해를 못 했어요. 다시 한 번 말씀해 주실 수 있어요?" },
        { speaker: "B", german: "Natürlich. Gehen Sie hier links.", korean: "물론이죠. 여기서 왼쪽으로 가세요." },
      ],
    ],
    grammarNotes: [],
  },

  // ─── BAND 5 ───────────────────────────────────────────────────────────────
  {
    id: 29, band: 5, title: "약속 취소 및 연기",
    vocabulary: [
      { german: "absagen", korean: "취소하다" },
      { german: "verschieben", korean: "미루다, 연기하다" },
      { german: "leider", korean: "유감스럽게도" },
      { german: "krank", korean: "아픈" },
    ],
    expressions: [
      { german: "Ich muss leider absagen.", korean: "유감스럽게도 취소해야 해요." },
      { german: "Können wir es verschieben?", korean: "미룰 수 있을까요?" },
      { german: "Das tut mir leid.", korean: "정말 미안해요." },
      { german: "Kein Problem!", korean: "괜찮아요!" },
    ],
    conversations: [
      [
        { speaker: "A", german: "Ich muss unsere Verabredung leider absagen. Ich bin krank.", korean: "유감스럽게도 우리 약속을 취소해야 해. 아파." },
        { speaker: "B", german: "Das tut mir leid. Gute Besserung!", korean: "정말 미안해. 빨리 낫길!" },
      ],
    ],
    grammarNotes: [],
  },
  {
    id: 30, band: 5, title: "날짜",
    vocabulary: [
      { german: "Januar", korean: "1월" },
      { german: "Februar", korean: "2월" },
      { german: "März", korean: "3월" },
      { german: "April", korean: "4월" },
      { german: "Mai", korean: "5월" },
      { german: "Juni", korean: "6월" },
      { german: "Juli", korean: "7월" },
      { german: "August", korean: "8월" },
      { german: "September", korean: "9월" },
      { german: "Oktober", korean: "10월" },
      { german: "November", korean: "11월" },
      { german: "Dezember", korean: "12월" },
    ],
    expressions: [
      { german: "Welches Datum ist heute?", korean: "오늘 날짜가 어떻게 돼요?" },
      { german: "Heute ist der 15. Mai.", korean: "오늘은 5월 15일이에요." },
      { german: "Wann ist dein Geburtstag?", korean: "생일이 언제야?" },
      { german: "Mein Geburtstag ist am 3. März.", korean: "내 생일은 3월 3일이야." },
    ],
    conversations: [
      [
        { speaker: "A", german: "Wann ist dein Geburtstag?", korean: "생일이 언제야?" },
        { speaker: "B", german: "Am 20. Juni. Und deiner?", korean: "6월 20일. 너는?" },
        { speaker: "A", german: "Meiner ist am 5. November.", korean: "내 거는 11월 5일이야." },
      ],
    ],
    grammarNotes: [
      {
        title: "날짜 읽기",
        content: "der 1. (erste), der 2. (zweite), der 3. (dritte), der 4. (vierte)... 서수에 -e를 붙입니다.",
      },
    ],
  },
  {
    id: 31, band: 5, title: "편지/이메일 쓰기",
    vocabulary: [
      { german: "der Brief", korean: "편지" },
      { german: "die E-Mail", korean: "이메일" },
      { german: "Liebe/Lieber ...", korean: "친애하는 ... (여성/남성)" },
      { german: "Mit freundlichen Grüßen", korean: "안녕히 계세요 (정중한 마무리)" },
      { german: "Viele Grüße", korean: "안녕 (친근한 마무리)" },
    ],
    expressions: [
      { german: "Liebe Anna,", korean: "친애하는 Anna에게," },
      { german: "Lieber Max,", korean: "친애하는 Max에게," },
      { german: "Wie geht es dir?", korean: "어떻게 지내?" },
      { german: "Ich freue mich auf deine Antwort.", korean: "답장 기다릴게." },
      { german: "Mit freundlichen Grüßen,", korean: "안녕히 계세요," },
    ],
    conversations: [],
    grammarNotes: [],
  },
  {
    id: 32, band: 5, title: "시간전치사",
    vocabulary: [],
    expressions: [
      { german: "um 3 Uhr", korean: "3시에 (정확한 시간)" },
      { german: "am Montag", korean: "월요일에 (요일)" },
      { german: "am Morgen / morgens", korean: "아침에" },
      { german: "im Januar", korean: "1월에 (월)" },
      { german: "im Sommer", korean: "여름에 (계절)" },
      { german: "in einer Woche", korean: "일주일 후에" },
      { german: "vor einer Woche", korean: "일주일 전에" },
      { german: "seit einem Jahr", korean: "1년 전부터 (지금까지)" },
    ],
    conversations: [],
    grammarNotes: [
      {
        title: "시간 전치사 정리",
        content: "um = 정확한 시간 / am = 요일·하루의 때 / im = 월·계절 / in = ~후에 / vor = ~전에 / seit = ~이래로",
      },
    ],
  },
  {
    id: 33, band: 5, title: "날씨",
    vocabulary: [
      { german: "die Sonne", korean: "태양" },
      { german: "der Regen", korean: "비" },
      { german: "der Schnee", korean: "눈" },
      { german: "der Wind", korean: "바람" },
      { german: "die Wolke", korean: "구름" },
      { german: "sonnig", korean: "맑은" },
      { german: "regnerisch", korean: "비가 오는" },
      { german: "bewölkt", korean: "흐린" },
      { german: "kalt", korean: "추운" },
      { german: "warm", korean: "따뜻한" },
      { german: "heiß", korean: "더운" },
    ],
    expressions: [
      { german: "Wie ist das Wetter heute?", korean: "오늘 날씨 어때요?" },
      { german: "Es ist sonnig.", korean: "맑아요." },
      { german: "Es regnet.", korean: "비가 와요." },
      { german: "Es schneit.", korean: "눈이 와요." },
      { german: "Es ist sehr kalt.", korean: "매우 추워요." },
    ],
    conversations: [
      [
        { speaker: "A", german: "Wie ist das Wetter bei euch?", korean: "너희 쪽 날씨는 어때?" },
        { speaker: "B", german: "Es regnet den ganzen Tag.", korean: "하루 종일 비가 와." },
      ],
    ],
    grammarNotes: [],
  },
  {
    id: 34, band: 5, title: "찬성/반대 의견 말하기",
    vocabulary: [],
    expressions: [
      { german: "Ich bin dafür.", korean: "저는 찬성이에요." },
      { german: "Ich bin dagegen.", korean: "저는 반대예요." },
      { german: "Ich finde das gut.", korean: "좋다고 생각해요." },
      { german: "Das finde ich nicht so gut.", korean: "그건 별로라고 생각해요." },
      { german: "Ich stimme zu.", korean: "동의해요." },
      { german: "Das stimmt nicht.", korean: "그건 사실이 아니에요." },
    ],
    conversations: [
      [
        { speaker: "A", german: "Sollen wir ins Kino gehen?", korean: "영화 보러 갈까?" },
        { speaker: "B", german: "Ja, ich bin dafür! Ich liebe Kino.", korean: "응, 찬성! 영화관 정말 좋아해." },
      ],
    ],
    grammarNotes: [],
  },
  {
    id: 35, band: 5, title: "W-의문문 만들기",
    vocabulary: [],
    expressions: [
      { german: "Wer? / Wem? / Wen?", korean: "누가? / 누구에게? / 누구를?" },
      { german: "Was?", korean: "무엇을?" },
      { german: "Wann?", korean: "언제?" },
      { german: "Wo?", korean: "어디서?" },
      { german: "Wohin?", korean: "어디로?" },
      { german: "Woher?", korean: "어디서부터?" },
      { german: "Wie?", korean: "어떻게?" },
      { german: "Wie viel(e)?", korean: "얼마나?" },
      { german: "Warum?", korean: "왜?" },
    ],
    conversations: [
      [
        { speaker: "A", german: "Warum lernst du Deutsch?", korean: "왜 독일어를 배워?" },
        { speaker: "B", german: "Weil ich in Deutschland studieren möchte.", korean: "독일에서 공부하고 싶어서." },
      ],
    ],
    grammarNotes: [
      {
        title: "W-의문문 어순",
        content: "W-의문사 + 동사 + 주어 + ... 예: Wann kommt er? (그가 언제 오나요?)",
      },
    ],
  },

  // ─── BAND 6 ───────────────────────────────────────────────────────────────
  {
    id: 36, band: 6, title: "화법조동사 wollen, möchten",
    subtitle: "의지와 바람",
    vocabulary: [],
    expressions: [
      { german: "Ich will Deutsch lernen.", korean: "나는 독일어를 배우고 싶어요. (강한 의지)" },
      { german: "Ich möchte Arzt werden.", korean: "나는 의사가 되고 싶어요. (부드러운 바람)" },
      { german: "Was willst du machen?", korean: "뭘 하고 싶어?" },
      { german: "Ich möchte einen Kaffee.", korean: "커피 한 잔 마시고 싶어요." },
    ],
    conversations: [
      [
        { speaker: "A", german: "Was möchtest du nach dem Studium machen?", korean: "졸업 후에 뭘 하고 싶어?" },
        { speaker: "B", german: "Ich will in Deutschland arbeiten.", korean: "독일에서 일하고 싶어." },
      ],
    ],
    grammarNotes: [
      {
        title: "wollen 변화",
        content: "ich will / du willst / er·sie will / wir wollen / ihr wollt / sie·Sie wollen",
      },
      {
        title: "möchten 변화",
        content: "ich möchte / du möchtest / er·sie möchte / wir möchten / ihr möchtet / sie·Sie möchten",
      },
    ],
  },
  {
    id: 37, band: 6, title: "화법조동사 müssen",
    subtitle: "의무와 당위",
    vocabulary: [],
    expressions: [
      { german: "Ich muss arbeiten.", korean: "나는 일해야 해요." },
      { german: "Du musst das machen.", korean: "너는 그것을 해야 해." },
      { german: "Wir müssen pünktlich sein.", korean: "우리는 시간을 지켜야 해요." },
      { german: "Ich muss nicht kommen.", korean: "나는 올 필요가 없어요." },
    ],
    conversations: [
      [
        { speaker: "A", german: "Musst du heute arbeiten?", korean: "오늘 일해야 해?" },
        { speaker: "B", german: "Ja, ich muss bis 18 Uhr arbeiten.", korean: "응, 6시까지 일해야 해." },
      ],
    ],
    grammarNotes: [
      {
        title: "müssen 변화",
        content: "ich muss / du musst / er·sie muss / wir müssen / ihr müsst / sie·Sie müssen",
      },
    ],
  },
  {
    id: 38, band: 6, title: "화법조동사 dürfen",
    subtitle: "허락/허가",
    vocabulary: [],
    expressions: [
      { german: "Darf ich hier rauchen?", korean: "여기서 흡연해도 되나요?" },
      { german: "Hier darf man nicht rauchen.", korean: "여기서는 흡연하면 안 돼요." },
      { german: "Darf ich Sie etwas fragen?", korean: "질문해도 될까요?" },
      { german: "Natürlich dürfen Sie.", korean: "물론 되죠." },
    ],
    conversations: [
      [
        { speaker: "A", german: "Darf ich das Fenster öffnen?", korean: "창문 열어도 돼요?" },
        { speaker: "B", german: "Ja, natürlich.", korean: "네, 물론이죠." },
      ],
    ],
    grammarNotes: [
      {
        title: "dürfen 변화",
        content: "ich darf / du darfst / er·sie darf / wir dürfen / ihr dürft / sie·Sie dürfen",
      },
    ],
  },
  {
    id: 39, band: 6, title: "화법조동사 sollen",
    subtitle: "제3자의 요청/요구에 의한 의무",
    vocabulary: [],
    expressions: [
      { german: "Du sollst pünktlich kommen.", korean: "너는 제시간에 와야 해." },
      { german: "Er soll das Buch lesen.", korean: "그는 책을 읽어야 해." },
      { german: "Was soll ich tun?", korean: "내가 뭘 해야 하나요?" },
      { german: "Sie sollen warten.", korean: "기다리세요. (다른 사람이 시켜서)" },
    ],
    conversations: [
      [
        { speaker: "A", german: "Was hat die Lehrerin gesagt?", korean: "선생님이 뭐라고 했어?" },
        { speaker: "B", german: "Wir sollen die Hausaufgaben bis Freitag machen.", korean: "금요일까지 숙제를 해야 한대." },
      ],
    ],
    grammarNotes: [
      {
        title: "sollen vs müssen",
        content: "müssen = 상황/규칙에 의한 의무. sollen = 다른 사람의 지시/요청에 의한 의무.",
      },
    ],
  },
  {
    id: 40, band: 6, title: "화법조동사 연습 1",
    vocabulary: [],
    expressions: [
      { german: "Ich kann schwimmen.", korean: "나는 수영할 수 있어요." },
      { german: "Er muss heute arbeiten.", korean: "그는 오늘 일해야 해요." },
      { german: "Darf ich reinkommen?", korean: "들어가도 되나요?" },
      { german: "Sie will Ärztin werden.", korean: "그녀는 의사가 되고 싶어요." },
    ],
    conversations: [],
    grammarNotes: [],
  },
  {
    id: 41, band: 6, title: "화법조동사 연습 2",
    vocabulary: [],
    expressions: [
      { german: "Wir sollen ruhig sein.", korean: "우리는 조용히 해야 해요." },
      { german: "Kannst du mir helfen?", korean: "나를 도와줄 수 있어?" },
      { german: "Er möchte schlafen.", korean: "그는 자고 싶어요." },
      { german: "Ihr dürft das nicht essen.", korean: "너희는 그것을 먹으면 안 돼." },
    ],
    conversations: [],
    grammarNotes: [],
  },
  {
    id: 42, band: 6, title: "화법조동사 연습 3",
    vocabulary: [],
    expressions: [
      { german: "Man muss hier links abbiegen.", korean: "여기서 왼쪽으로 꺾어야 해요." },
      { german: "Kann ich dich anrufen?", korean: "전화해도 돼?" },
      { german: "Sie will heute nicht ausgehen.", korean: "그녀는 오늘 나가고 싶지 않아요." },
      { german: "Wir müssen mehr üben.", korean: "우리는 더 연습해야 해요." },
    ],
    conversations: [],
    grammarNotes: [],
  },

  // ─── BAND 7 ───────────────────────────────────────────────────────────────
  {
    id: 43, band: 7, title: "과거 표현 (규칙변화)",
    vocabulary: [],
    expressions: [
      { german: "Ich habe gearbeitet.", korean: "나는 일했어요." },
      { german: "Sie hat gekauft.", korean: "그녀는 샀어요." },
      { german: "Wir haben gespielt.", korean: "우리는 놀았어요." },
      { german: "Er hat gefragt.", korean: "그는 물었어요." },
    ],
    conversations: [],
    grammarNotes: [
      {
        title: "현재완료 (Perfekt) – 규칙동사",
        content: "haben + ge-[어간]-t. 예: arbeiten → gearbeitet, kaufen → gekauft, spielen → gespielt",
      },
    ],
  },
  {
    id: 44, band: 7, title: "과거 표현 (불규칙변화)",
    vocabulary: [],
    expressions: [
      { german: "Ich habe gegessen.", korean: "나는 먹었어요." },
      { german: "Er hat geschlafen.", korean: "그는 잤어요." },
      { german: "Wir haben getrunken.", korean: "우리는 마셨어요." },
      { german: "Sie ist gefahren.", korean: "그녀는 (차를 타고) 갔어요." },
    ],
    conversations: [
      [
        { speaker: "A", german: "Was hast du gestern gemacht?", korean: "어제 뭐 했어?" },
        { speaker: "B", german: "Ich habe viel geschlafen und einen Film gesehen.", korean: "많이 자고 영화 봤어." },
      ],
    ],
    grammarNotes: [
      {
        title: "이동동사는 sein과 함께",
        content: "gehen, kommen, fahren, fliegen 등 이동동사는 sein을 사용. 예: Ich bin gegangen.",
      },
    ],
  },
  {
    id: 45, band: 7, title: "과거 표현 (혼합변화)",
    vocabulary: [],
    expressions: [
      { german: "Ich habe gewusst.", korean: "나는 알았어요." },
      { german: "Er hat gedacht.", korean: "그는 생각했어요." },
      { german: "Sie hat gebracht.", korean: "그녀는 가져왔어요." },
      { german: "Wir haben kennen gelernt.", korean: "우리는 알게 됐어요." },
    ],
    conversations: [],
    grammarNotes: [
      {
        title: "혼합변화 패턴",
        content: "규칙변화처럼 ge-...-t를 붙이지만, 어간 모음이 바뀝니다. 예: denken → gedacht, wissen → gewusst",
      },
    ],
  },
  {
    id: 46, band: 7, title: "과거 표현 (분리동사)",
    vocabulary: [],
    expressions: [
      { german: "Ich bin aufgestanden.", korean: "나는 일어났어요." },
      { german: "Er hat angerufen.", korean: "그는 전화했어요." },
      { german: "Wir haben eingekauft.", korean: "우리는 장을 봤어요." },
      { german: "Sie ist angekommen.", korean: "그녀는 도착했어요." },
    ],
    conversations: [
      [
        { speaker: "A", german: "Wann bist du heute aufgestanden?", korean: "오늘 몇 시에 일어났어?" },
        { speaker: "B", german: "Ich bin um 7 Uhr aufgestanden.", korean: "7시에 일어났어." },
      ],
    ],
    grammarNotes: [
      {
        title: "분리동사 과거분사",
        content: "분리전철 + ge + 어간 + t/en. 예: aufstehen → aufgestanden, anrufen → angerufen",
      },
    ],
  },
  {
    id: 47, band: 7, title: "과거 표현 연습 1",
    vocabulary: [],
    expressions: [
      { german: "Was hast du am Wochenende gemacht?", korean: "주말에 뭐 했어?" },
      { german: "Ich bin ins Kino gegangen.", korean: "영화관에 갔어." },
      { german: "Wir haben Freunde getroffen.", korean: "친구들을 만났어." },
    ],
    conversations: [
      [
        { speaker: "A", german: "Was hast du am Wochenende gemacht?", korean: "주말에 뭐 했어?" },
        { speaker: "B", german: "Ich bin ins Kino gegangen und habe einen Film gesehen.", korean: "영화관에 가서 영화를 봤어." },
      ],
    ],
    grammarNotes: [],
  },
  {
    id: 48, band: 7, title: "과거 표현 연습 2",
    vocabulary: [],
    expressions: [
      { german: "Gestern hat es geregnet.", korean: "어제 비가 왔어요." },
      { german: "Wir sind spazieren gegangen.", korean: "우리는 산책했어요." },
      { german: "Ich habe die Hausaufgaben gemacht.", korean: "숙제를 했어요." },
    ],
    conversations: [],
    grammarNotes: [],
  },
  {
    id: 49, band: 7, title: "과거 표현 연습 3",
    vocabulary: [],
    expressions: [
      { german: "Ich habe lange geschlafen.", korean: "오래 잤어요." },
      { german: "Sie hat gut gegessen.", korean: "그녀는 잘 먹었어요." },
      { german: "Wir sind mit dem Bus gefahren.", korean: "우리는 버스를 타고 갔어요." },
    ],
    conversations: [],
    grammarNotes: [],
  },

  // ─── BAND 8 ───────────────────────────────────────────────────────────────
  {
    id: 50, band: 8, title: "경험 말하기",
    vocabulary: [],
    expressions: [
      { german: "Ich habe schon ... gemacht.", korean: "나는 이미 ...을 해 봤어요." },
      { german: "Ich habe noch nie ... gemacht.", korean: "나는 아직 한 번도 ...을 해 본 적 없어요." },
      { german: "Das war toll!", korean: "정말 멋졌어!" },
      { german: "Das war nicht so gut.", korean: "그다지 좋지 않았어요." },
    ],
    conversations: [
      [
        { speaker: "A", german: "Warst du schon mal in Deutschland?", korean: "독일에 가 본 적 있어?" },
        { speaker: "B", german: "Ja, ich war letztes Jahr in Berlin. Das war toll!", korean: "응, 작년에 베를린에 갔어. 정말 멋졌어!" },
      ],
    ],
    grammarNotes: [],
  },
  {
    id: 51, band: 8, title: "축하하기",
    vocabulary: [],
    expressions: [
      { german: "Herzlichen Glückwunsch!", korean: "진심으로 축하해요!" },
      { german: "Alles Gute!", korean: "모든 일이 잘 되길!" },
      { german: "Alles Gute zum Geburtstag!", korean: "생일 축하해요!" },
      { german: "Frohe Weihnachten!", korean: "메리 크리스마스!" },
      { german: "Gutes neues Jahr!", korean: "새해 복 많이 받으세요!" },
      { german: "Danke schön!", korean: "감사합니다!" },
    ],
    conversations: [
      [
        { speaker: "A", german: "Herzlichen Glückwunsch zum Geburtstag!", korean: "생일 진심으로 축하해요!" },
        { speaker: "B", german: "Danke schön! Das ist sehr nett von dir.", korean: "감사해요! 정말 친절하시네요." },
      ],
    ],
    grammarNotes: [],
  },
  {
    id: 52, band: 8, title: "몸",
    vocabulary: [
      { german: "der Kopf", korean: "머리" },
      { german: "das Gesicht", korean: "얼굴" },
      { german: "das Auge (-n)", korean: "눈" },
      { german: "die Nase", korean: "코" },
      { german: "der Mund", korean: "입" },
      { german: "das Ohr (-en)", korean: "귀" },
      { german: "der Hals", korean: "목" },
      { german: "die Hand (-e)", korean: "손" },
      { german: "der Arm (-e)", korean: "팔" },
      { german: "das Bein (-e)", korean: "다리" },
      { german: "der Fuß (-e)", korean: "발" },
      { german: "der Bauch", korean: "배" },
      { german: "der Rücken", korean: "등" },
    ],
    expressions: [
      { german: "Zeigen Sie mir Ihren Arm.", korean: "팔을 보여주세요." },
      { german: "Öffnen Sie den Mund.", korean: "입을 벌려주세요." },
    ],
    conversations: [],
    grammarNotes: [],
  },
  {
    id: 53, band: 8, title: "통증",
    vocabulary: [
      { german: "die Schmerzen", korean: "통증, 아픔" },
      { german: "der Kopfschmerz", korean: "두통" },
      { german: "der Bauchschmerz", korean: "복통" },
      { german: "der Rückenschmerz", korean: "허리 통증" },
      { german: "das Fieber", korean: "열" },
      { german: "der Husten", korean: "기침" },
      { german: "der Schnupfen", korean: "콧물" },
    ],
    expressions: [
      { german: "Ich habe Kopfschmerzen.", korean: "두통이 있어요." },
      { german: "Mir ist schlecht.", korean: "속이 안 좋아요." },
      { german: "Ich habe Fieber.", korean: "열이 있어요." },
      { german: "Tut es weh?", korean: "아파요?" },
      { german: "Ja, es tut weh.", korean: "네, 아파요." },
    ],
    conversations: [
      [
        { speaker: "A", german: "Was fehlt Ihnen?", korean: "어디가 안 좋으세요?" },
        { speaker: "B", german: "Ich habe starke Kopfschmerzen und Fieber.", korean: "심한 두통과 열이 있어요." },
        { speaker: "A", german: "Seit wann?", korean: "언제부터요?" },
        { speaker: "B", german: "Seit gestern.", korean: "어제부터요." },
      ],
    ],
    grammarNotes: [],
  },
  {
    id: 54, band: 8, title: "사람 묘사",
    vocabulary: [
      { german: "groß", korean: "키가 큰" },
      { german: "klein", korean: "키가 작은" },
      { german: "jung", korean: "젊은" },
      { german: "alt", korean: "나이 든" },
      { german: "schlank", korean: "날씬한" },
      { german: "das Haar", korean: "머리카락" },
      { german: "die Augen", korean: "눈들" },
      { german: "freundlich", korean: "친절한" },
      { german: "lustig", korean: "재미있는" },
    ],
    expressions: [
      { german: "Wie sieht er/sie aus?", korean: "그/그녀는 어떻게 생겼어요?" },
      { german: "Er ist groß und schlank.", korean: "그는 키가 크고 날씬해요." },
      { german: "Sie hat lange, blonde Haare.", korean: "그녀는 긴 금발 머리카락을 가졌어요." },
      { german: "Er hat blaue Augen.", korean: "그는 파란 눈을 가졌어요." },
    ],
    conversations: [
      [
        { speaker: "A", german: "Wie sieht dein Freund aus?", korean: "네 남자친구는 어떻게 생겼어?" },
        { speaker: "B", german: "Er ist groß, hat kurze, dunkle Haare und braune Augen.", korean: "키 크고, 짧고 검은 머리에 갈색 눈이야." },
      ],
    ],
    grammarNotes: [],
  },
  {
    id: 55, band: 8, title: "색깔",
    vocabulary: [
      { german: "rot", korean: "빨간" },
      { german: "blau", korean: "파란" },
      { german: "grün", korean: "초록" },
      { german: "gelb", korean: "노란" },
      { german: "orange", korean: "주황" },
      { german: "lila / violett", korean: "보라" },
      { german: "rosa", korean: "분홍" },
      { german: "weiß", korean: "하얀" },
      { german: "schwarz", korean: "검은" },
      { german: "grau", korean: "회색" },
      { german: "braun", korean: "갈색" },
    ],
    expressions: [
      { german: "Welche Farbe hat ...?", korean: "...은 무슨 색이에요?" },
      { german: "Es ist rot.", korean: "빨간색이에요." },
      { german: "Ich mag die blaue Jacke.", korean: "나는 파란 재킷이 좋아요." },
    ],
    conversations: [
      [
        { speaker: "A", german: "Welche Farbe magst du am liebsten?", korean: "어떤 색을 제일 좋아해?" },
        { speaker: "B", german: "Ich mag Blau am liebsten. Und du?", korean: "파란색을 제일 좋아해. 너는?" },
        { speaker: "A", german: "Ich mag Grün.", korean: "초록색이 좋아." },
      ],
    ],
    grammarNotes: [],
  },
  {
    id: 56, band: 8, title: "소유 표현하기",
    vocabulary: [],
    expressions: [
      { german: "Das ist mein Buch.", korean: "이것은 내 책이에요." },
      { german: "Das ist dein Stift.", korean: "이것은 네 펜이야." },
      { german: "Das ist sein Auto.", korean: "이것은 그의 자동차예요." },
      { german: "Das ist ihr Handy.", korean: "이것은 그녀의 핸드폰이에요." },
      { german: "Das ist unser Haus.", korean: "이것은 우리 집이에요." },
      { german: "Das ist Ihr Platz.", korean: "이것은 당신의 자리예요." },
    ],
    conversations: [
      [
        { speaker: "A", german: "Ist das dein Handy?", korean: "이게 네 핸드폰이야?" },
        { speaker: "B", german: "Nein, das ist nicht mein Handy. Mein Handy ist schwarz.", korean: "아니, 내 핸드폰이 아니야. 내 핸드폰은 검은색이야." },
      ],
    ],
    grammarNotes: [
      {
        title: "소유관사",
        content: "mein(내), dein(네), sein(그의), ihr(그녀의), unser(우리의), euer(너희의), ihr(그들의), Ihr(당신의)",
      },
    ],
  },
];

export const BAND_TITLES: Record<number, string> = {
  1: "자기소개",
  2: "일상생활",
  3: "쇼핑과 음식",
  4: "방향과 공간",
  5: "시간과 날씨",
  6: "화법조동사",
  7: "과거 표현",
  8: "몸과 경험",
};

export function getLektionById(id: number): LektionData | undefined {
  return curriculum.find((l) => l.id === id);
}

export function getLektionsByBand(band: number): LektionData[] {
  return curriculum.filter((l) => l.band === band);
}

export const TOTAL_BANDS = 8;
export const TOTAL_LEKTIONS = curriculum.length;
