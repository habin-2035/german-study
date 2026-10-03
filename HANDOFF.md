# HANDOFF — german-study (Zusammen A1 독일어 학습 사이트)

새 세션은 이 파일부터 읽으세요.

## 배포
- Railway 프로젝트 `chic-spontaneity` / 서비스 `german-study` / production
- URL: https://german-study-production-6672.up.railway.app
- GitHub `habin-2035/german-study` **main 브랜치에 push하면 자동 배포** (nixpacks, Node 20, standalone 빌드)
- 이 컴퓨터엔 git 사용자 설정이 없음 → 커밋 시 `git -c user.name=habin2035 -c user.email=habin2035@korea.ac.kr commit ...`

## 구조 (Next.js 16 App Router, 전부 클라이언트 컴포넌트, 서버/DB 없음)
- 학습 기록은 전부 브라우저 localStorage (`gs_` 접두사). 기기 간 이동은 학습 현황 → 백업 내려받기/불러오기 (`src/lib/backup.ts`)
- `src/data/curriculum.ts` — 교재 56강 (표현·단어·회화·문법노트). **SRS 덱 키 = 독일어 원문**이라 문장을 고치면 기존 학습 기록과 연결이 끊김
- `src/data/nouns.ts` — 교재 명사 성·복수 사전 (der 파랑 / die 빨강 / das 초록 / 복수 보라)
- `src/data/gloss/band1~8.ts` — 문장 778개 단어별 해석 `[단어, 뜻, 문법정보]` + grammar id + note
- `src/data/grammar.ts`(타입) + `grammar-content.ts` — 문법 사전 38개 주제, `/grammar`, `/grammar/[id]`
- `src/lib/srs.ts` — SM-2 간소화, 오늘의 학습 큐(복습 3장마다 새 카드 1장), 새 카드 강 범위(rangeFrom/To)
- `src/lib/german.ts` — 입력 채점 (ae/oe/ue/ss 허용, 관사 판정, 오타 허용, 대안 표기 `A / B`, `Lehrer(in)`, `...` 틀 문장은 자가채점)
- `src/lib/tokenize.ts` — 문장 토큰화 (gloss 키·단어 순서의 기준)
- `src/components/StudySession.tsx` — 입력/카드 모드 학습 세션, 단축키 Enter / 1–4 / Tab(힌트) / R(듣기)

## gloss 데이터를 고칠 때
- 단어 목록은 `tokenize(문장)` 결과와 정확히 같은 순서·표기여야 함
- grammar id는 `grammar-content.ts`의 id만 사용 (ASCII, 예: `moegen-moechten`)
- curriculum 문장을 바꾸면 gloss 키도 같이 바꿀 것

## 진행 상황 (2026-10-03)
- 완료·배포됨: 입력형 학습 세션, 명사 성·복수, PC 사이드바 레이아웃, 백업, 문장 해부, 문법 사전, 교재 오류 수정 (커밋 dc3837e)
- **완료·미배포**: 오늘의 학습 새 카드 범위 설정 (커밋 ba90649 + 이 문서). main에 push하면 배포됨
- 알려진 미해결: 기존 ESLint `react-hooks/set-state-in-effect` 오류 다수 (localStorage를 effect에서 읽는 기존 패턴, 빌드엔 영향 없음). 모바일 폭 화면은 직접 확인 못 함

## 다음 후보
1. 모든 단어에 예문(+해석) 붙이기 — `VocabItem.example/exampleKorean` 필드가 이미 있고 세션에서 표시됨
2. 회화 역할극 (B 역할을 입력/말하기로)
3. 문법 드릴 (동사 변화, 3·4격)
4. Chrome 음성인식으로 따라 말하기 채점
5. FSRS로 알고리즘 교체, 기기 간 동기화 (Railway Postgres)
