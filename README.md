# DevPulse

개발 프로젝트의 Git 활동 내역과 API 서버 상태를 통합 관리하고 모니터링하는 대시보드입니다.

## 주요 기능

- **Project Management** — 개발 프로젝트 등록 및 관리
- **Git Monitoring** — GitHub 저장소, 커밋 및 브랜치 활동 조회
- **API Monitoring** — API 상태 및 응답 시간 모니터링
- **Dashboard** — 프로젝트 활동 및 서버 상태 시각화

## 기술 스택

| 영역 | 기술 |
|---|---|
| Frontend | React, TypeScript, Vite |
| Backend | Node.js, Express |
| Database | PostgreSQL |
| ORM | Prisma |
| Monitoring | node-cron |
| Deployment | Docker, AWS |

## 프로젝트 구조

```text
DevPulse/
├── .github/            # 이슈/PR 템플릿, CI 워크플로우
├── backend/
│   ├── prisma/         # Prisma 스키마, 마이그레이션
│   └── src/
│       ├── config/     # 환경변수, Prisma 클라이언트
│       ├── controllers/
│       ├── errors/
│       ├── middlewares/
│       ├── routes/
│       ├── services/
│       ├── utils/
│       ├── app.js      # Express 앱 정의
│       └── server.js   # 서버 실행 진입점
├── frontend/
├── docker-compose.yml  # 로컬 PostgreSQL
└── README.md
```

## 실행 방법

### 1. Database (PostgreSQL)

```bash
docker compose up -d
```

로컬 PostgreSQL이 `localhost:5434`에서 실행됩니다.

### 2. Backend

```bash
cd backend
cp .env.example .env
npm install          # postinstall에서 Prisma Client 자동 생성
npm run db:migrate   # 마이그레이션 적용 (모델 정의 후)
npm run dev
```

| 스크립트 | 설명 |
|---|---|
| `npm run dev` | nodemon으로 개발 서버 실행 |
| `npm start` | 서버 실행 |
| `npm run db:migrate` | 마이그레이션 생성 및 적용 |
| `npm run db:generate` | Prisma Client 재생성 |
| `npm run db:studio` | Prisma Studio 실행 |

### 3. Frontend

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

## 환경 변수

### Backend (`backend/.env`)

| 변수 | 설명 | 기본값 |
|---|---|---|
| `NODE_ENV` | 실행 환경 (`production`에서는 `/test` 라우트 비활성화) | `development` |
| `PORT` | 서버 포트 | `3000` |
| `CORS_ORIGIN` | 허용할 프론트엔드 주소 (여러 개면 쉼표로 구분) | `http://localhost:5173` |
| `DATABASE_URL` | PostgreSQL 연결 문자열 (**필수**, 없으면 서버가 시작되지 않음) | - |

### Frontend (`frontend/.env`)

| 변수 | 설명 | 기본값 |
|---|---|---|
| `VITE_API_URL` | Backend API 주소 | `http://localhost:3000` |

## 개발 참고 사항

- **DB 포트는 `5434`입니다.** 다른 로컬 프로젝트와 겹치지 않도록 기본 포트(5432) 대신 사용하며, `127.0.0.1`에서만 접근할 수 있습니다. 바꾸려면 `docker-compose.yml`의 `ports`와 `DATABASE_URL`을 함께 수정하세요.
- **Prisma 버전은 `7.10.1`로 고정되어 있습니다.** npm의 `prisma` `latest` 태그가 RC 버전(8.x)을 가리키므로, 업그레이드할 때는 `prisma`, `@prisma/client`, `@prisma/adapter-pg`의 버전을 함께 맞춰 주세요.
- **Prisma 7부터 DB 연결 정보는 `backend/prisma.config.ts`에서 관리합니다.** `schema.prisma`에는 `url`을 적지 않으며, 클라이언트는 `@prisma/adapter-pg` 드라이버 어댑터로 연결합니다(`src/config/prisma.js`).
- **스키마를 수정한 뒤**에는 `npm run db:migrate`를 실행하세요. 마이그레이션 파일은 `backend/prisma/migrations/`에 생성되며 커밋 대상입니다.
- **`npm audit`의 `effect`, `minimatch` 경고**는 개발 도구(`prisma` CLI, `nodemon`)에만 해당하며 서버 런타임에는 영향이 없습니다. `npm audit fix --force`는 버전을 내리므로 실행하지 마세요.

## 협업 규칙

### 브랜치 전략

- `main` — 배포 브랜치
- `dev` — 개발 통합 브랜치
- `feat/*`, `fix/*`, `chore/*`, `refactor/*` — 작업 브랜치 (`dev`에서 분기 후 PR로 병합)

### 커밋 메시지

```text
<type>: <내용>
```

| type | 설명 |
|---|---|
| `feat` | 새로운 기능 |
| `fix` | 버그 수정 |
| `refactor` | 리팩토링 |
| `docs` | 문서 수정 |
| `chore` | 설정, 패키지 등 기타 작업 |
| `test` | 테스트 코드 |

### Issue / PR

- 이슈는 템플릿(Feature / Bug / Refactor)으로 작성합니다.
- PR은 템플릿의 체크리스트를 확인한 뒤 올리고, 관련 이슈를 `close #번호`로 연결합니다.
- `main`, `dev`로의 push와 PR마다 GitHub Actions CI가 실행됩니다 (Backend: 설치·테스트, Frontend: lint·build).
- Dependabot이 의존성 업데이트 PR을 주기적으로 생성합니다.

## 개발 상태

<text>🚧 현재 개발 진행 중입니다.</text>

## License

TBD