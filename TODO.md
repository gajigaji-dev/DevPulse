# DevPulse 개발 로드맵

> 개발 프로젝트의 Git 활동 내역과 API 서버 상태를 통합 관리하고 모니터링하는 개인 개발자용 대시보드

## 프로젝트 목표

Node.js 생태계를 중심으로 백엔드 시스템 설계부터 프론트엔드, 데이터베이스, 비동기 작업, 모니터링, 배포까지 경험한다.

단순 기능 구현에 그치지 않고 다음 내용을 포트폴리오에서 설명할 수 있도록 개발한다.

- REST API 설계 및 예외 처리
- 비동기 프로그래밍과 이벤트 기반 처리
- 데이터베이스 모델링 및 쿼리 최적화
- 캐싱 및 작업 큐 기반 비동기 처리
- 외부 API 연동 및 장애 대응
- 테스트 자동화 및 CI/CD
- 컨테이너 기반 배포 및 운영 모니터링

---

# Phase 0. 프로젝트 초기 환경 구성

- [x] GitHub 저장소 생성
- [x] Node.js + Express 초기화
- [x] React + Vite 초기화
- [x] ESLint 설정
- [x] `.gitignore` 설정
- [x] 프로젝트 기본 README 작성
- [x] 프론트엔드 실행 확인
- [x] 백엔드 실행 확인
- [x] 개발 환경 변수 분리 (`.env`, `.env.example`)
- [x] Node.js 버전 관리 및 고정 (`.nvmrc` 또는 Volta)

# Phase 1. 백엔드 기본 아키텍처

## 1-1. Express 구조 분리

- [x] Express 서버 기본 실행
- [x] Routes / Controllers 분리
- [x] Services 계층 분리
- [x] Middleware 구성
- [x] Config 환경 설정 분리
- [ ] 공통 응답 유틸리티 구현
- [ ] 공통 에러 처리 미들웨어 구현
- [ ] 404 Not Found 처리
- [ ] 비동기 예외 처리 방식 정리
- [ ] Health Check API 구현 (`/health`)

## 1-2. TypeScript 적용

- [ ] Backend JavaScript → TypeScript 전환
- [ ] `tsconfig.json` 구성
- [ ] Express Request / Response 타입 적용
- [ ] DTO 및 도메인 타입 정의
- [ ] 환경 변수 타입 관리
- [ ] 개발 및 빌드 스크립트 구성

## 1-3. API 설계

- [ ] RESTful API 규칙 정리
- [ ] API 버전 관리 (`/api/v1`)
- [ ] 공통 성공 응답 규격
- [ ] 공통 에러 응답 규격
- [ ] 요청 데이터 검증 (Zod)
- [ ] 페이지네이션 및 정렬
- [ ] API 문서 자동화 (OpenAPI / Swagger)

# Phase 2. 데이터베이스 및 프로젝트 관리

## 2-1. PostgreSQL + Prisma

- [ ] PostgreSQL 환경 구성
- [ ] Docker Compose로 DB 실행
- [ ] Prisma ORM 설치 및 초기화
- [ ] Prisma Schema 설계
- [ ] Migration 적용
- [ ] Seed 데이터 구성
- [ ] DB 연결 및 예외 처리
- [ ] Repository 계층 구현
- [ ] 트랜잭션 처리 방식 학습

## 2-2. 프로젝트 관리 API

- [ ] 프로젝트 등록 API
- [ ] 프로젝트 목록 조회 API
- [ ] 프로젝트 상세 조회 API
- [ ] 프로젝트 수정 API
- [ ] 프로젝트 삭제 API
- [ ] 프로젝트별 모니터링 대상 관리
- [ ] 요청 데이터 검증
- [ ] API 통합 테스트

## 2-3. 데이터베이스 개선

- [ ] 인덱스 설계
- [ ] EXPLAIN을 활용한 쿼리 분석
- [ ] N+1 및 불필요한 조회 방지
- [ ] 페이지네이션 성능 개선
- [ ] Connection Pool 설정 및 확인

# Phase 3. GitHub 프로젝트 연동

## 3-1. GitHub API 연동

- [ ] GitHub REST API 연동
- [ ] Axios 또는 Fetch 기반 HTTP 클라이언트 구성
- [ ] GitHub Repository 정보 조회
- [ ] 최근 Commit 목록 조회
- [ ] Branch 목록 조회
- [ ] Commit 활동 통계 조회
- [ ] GitHub API Rate Limit 처리
- [ ] API 호출 실패 및 Timeout 처리

## 3-2. Git 데이터 관리

- [ ] GitHub Repository URL 등록
- [ ] Repository 정보 동기화
- [ ] Commit 이력 조회
- [ ] 프로젝트별 Git 활동 데이터 저장
- [ ] 중복 데이터 방지
- [ ] 동기화 실패 이력 관리

## 3-3. 로컬 Git 분석

- [ ] `simple-git` 또는 Git CLI 연동
- [ ] 로컬 Repository 경로 등록
- [ ] 현재 Branch 조회
- [ ] 최근 Commit 조회
- [ ] 변경 파일 및 Uncommitted 변경 확인
- [ ] Remote 및 Push 상태 확인
- [ ] Git 명령 실행 오류 처리
- [ ] 허용된 로컬 경로만 접근하도록 보안 처리

# Phase 4. API 모니터링 시스템

## 4-1. 모니터링 대상 관리

- [ ] 모니터링 URL 등록 API
- [ ] 모니터링 대상 목록 조회
- [ ] 모니터링 설정 수정
- [ ] 모니터링 대상 삭제
- [ ] 점검 주기 설정
- [ ] Timeout 설정
- [ ] HTTP Method 및 요청 헤더 설정

## 4-2. API 상태 점검

- [ ] HTTP 요청 및 응답 시간 측정
- [ ] HTTP Status Code 수집
- [ ] 성공 / 실패 판정
- [ ] Timeout 처리
- [ ] 연결 오류 처리
- [ ] 점검 결과 DB 저장
- [ ] 응답 시간 통계 계산
- [ ] 연속 실패 및 복구 상태 관리

## 4-3. Node.js 비동기 작업

- [ ] `node-cron`을 이용한 주기적 점검
- [ ] Promise / async-await 기반 처리
- [ ] 동시 요청 수 제한
- [ ] 작업 중복 실행 방지
- [ ] Graceful Shutdown
- [ ] Event Loop 및 비동기 I/O 동작 이해

## 4-4. 장애 이력 관리

- [ ] API 장애 발생 기록
- [ ] 장애 시작 시간 기록
- [ ] 장애 복구 시간 기록
- [ ] 장애 지속 시간 계산
- [ ] 장애 이력 조회 API
- [ ] 장애 발생 및 복구 이벤트 관리

# Phase 5. 비동기 작업 및 이벤트 기반 아키텍처

## 5-1. Redis

- [ ] Redis 환경 구성
- [ ] Redis 연결 및 예외 처리
- [ ] GitHub Repository 정보 캐싱
- [ ] API 조회 결과 캐싱
- [ ] TTL 설정
- [ ] Cache Invalidation 처리
- [ ] Cache Hit / Miss 측정

## 5-2. BullMQ + Redis

- [ ] BullMQ 도입
- [ ] Producer / Worker 구조 분리
- [ ] API 모니터링 작업을 Queue로 처리
- [ ] 동시 실행 작업 수 제한
- [ ] Retry 및 Backoff 정책
- [ ] 실패 작업 관리
- [ ] 작업 중복 방지
- [ ] 작업 처리 상태 조회
- [ ] Queue 대기 시간 및 처리 시간 측정

## 5-3. 이벤트 기반 처리

- [ ] 장애 발생 이벤트 정의
- [ ] 장애 복구 이벤트 정의
- [ ] 이벤트 기반 알림 처리
- [ ] Discord Webhook 연동
- [ ] 알림 발송 실패 처리
- [ ] 알림 재시도 정책

# Phase 6. 프론트엔드 대시보드

## 6-1. 기본 화면

- [ ] React 기본 레이아웃 구성
- [ ] 프로젝트 목록 화면
- [ ] 프로젝트 등록 및 수정 화면
- [ ] 프로젝트 상세 화면
- [ ] API 모니터링 대상 관리 화면
- [ ] 반응형 레이아웃

## 6-2. API 연동

- [ ] Axios 기반 API 클라이언트 구성
- [ ] 공통 API 응답 타입 정의
- [ ] API 요청 및 에러 처리
- [ ] 로딩 / 빈 화면 / 오류 상태 처리
- [ ] React Router 구성
- [ ] TanStack Query 도입
- [ ] 서버 상태 캐싱 및 무효화

## 6-3. 데이터 시각화

- [ ] Recharts 도입
- [ ] 프로젝트별 Git 활동 그래프
- [ ] API 응답 시간 그래프
- [ ] API 성공률 그래프
- [ ] 장애 발생 현황
- [ ] 최근 Commit 목록
- [ ] 프로젝트별 통합 현황

## 6-4. 실시간 업데이트

- [ ] WebSocket 또는 SSE 도입 검토
- [ ] API 상태 변경 실시간 반영
- [ ] 장애 발생 알림 실시간 표시
- [ ] 연결 끊김 및 재연결 처리

# Phase 7. 인증 및 보안

- [ ] 회원가입 및 로그인
- [ ] JWT 기반 인증
- [ ] Access Token / Refresh Token 관리
- [ ] 비밀번호 해싱 (Argon2 또는 bcrypt)
- [ ] 인증 Middleware
- [ ] 사용자별 프로젝트 접근 권한
- [ ] Helmet 적용
- [ ] CORS 정책 설정
- [ ] Rate Limiting
- [ ] 요청 데이터 검증
- [ ] SQL Injection 대응
- [ ] XSS 및 CSRF 대응
- [ ] 민감 정보 및 API Token 암호화
- [ ] SSRF 방어 (모니터링 URL 검증)
- [ ] 로컬 Git 경로 접근 제한
- [ ] 보안 관련 테스트

# Phase 8. 테스트 및 품질 관리

## 8-1. 테스트 자동화

- [ ] Vitest 또는 Jest 도입
- [ ] Supertest 기반 API 테스트
- [ ] Unit Test 작성
- [ ] Integration Test 작성
- [ ] E2E Test 작성
- [ ] Prisma 테스트 DB 구성
- [ ] Redis 및 Queue 테스트
- [ ] 외부 API Mock 처리
- [ ] 예외 상황 및 장애 테스트
- [ ] 테스트 커버리지 측정

## 8-2. 코드 품질

- [ ] ESLint 규칙 정리
- [ ] Prettier 적용
- [ ] TypeScript Strict Mode
- [ ] 환경 변수 검증
- [ ] 중복 코드 리팩터링
- [ ] 코드 리뷰 체크리스트 작성

# Phase 9. 로깅 및 모니터링

- [ ] Pino 기반 구조화 로깅
- [ ] HTTP 요청 로그 기록
- [ ] 에러 로그 및 Stack Trace 관리
- [ ] Request ID / Correlation ID 적용
- [ ] 민감 정보 로그 마스킹
- [ ] 로그 레벨 분리
- [ ] Prometheus 메트릭 수집
- [ ] Grafana 대시보드 구성
- [ ] API 응답 시간 측정
- [ ] CPU / Memory 사용량 확인
- [ ] Event Loop 지연 측정
- [ ] Queue 처리 현황 모니터링

# Phase 10. 배포 및 운영 환경

## 10-1. Docker

- [ ] Backend Dockerfile 작성
- [ ] Frontend Dockerfile 작성
- [ ] Multi-stage Build 적용
- [ ] Docker Compose 구성
- [ ] PostgreSQL / Redis 컨테이너 구성
- [ ] 개발 및 운영 환경 분리
- [ ] Health Check 설정
- [ ] 컨테이너 로그 및 볼륨 관리

## 10-2. CI/CD

- [ ] GitHub Actions 구성
- [ ] Push / Pull Request 시 Lint 실행
- [ ] 자동 테스트 실행
- [ ] TypeScript Build 검증
- [ ] Docker Image Build
- [ ] 배포 자동화
- [ ] 환경 변수 및 Secret 관리

## 10-3. AWS 배포

- [ ] AWS 인프라 구성
- [ ] EC2 또는 ECS 배포 방식 선택
- [ ] RDS PostgreSQL 구성
- [ ] Redis 운영 환경 구성
- [ ] 도메인 및 HTTPS 적용
- [ ] Nginx 또는 Load Balancer 구성
- [ ] 운영 환경 로그 확인
- [ ] 장애 대응 및 복구 절차 정리

# Phase 11. 성능 개선 및 고도화

- [ ] API 부하 테스트 (k6)
- [ ] 동시 모니터링 작업 부하 테스트
- [ ] Queue 처리량 측정
- [ ] Redis 캐싱 전후 성능 비교
- [ ] DB 쿼리 및 인덱스 개선
- [ ] Event Loop Blocking 분석
- [ ] 메모리 사용량 분석
- [ ] Worker Threads 적용 필요성 검토
- [ ] 모니터링 데이터 보관 기간 정책
- [ ] 대량 데이터 조회 성능 개선
- [ ] 장애 상황 및 복구 테스트

# Phase 12. 포트폴리오 정리

- [ ] 프로젝트 아키텍처 다이어그램
- [ ] ERD 작성
- [ ] API 명세서 정리
- [ ] 기술 스택 및 도입 이유 정리
- [ ] 주요 기술적 의사결정 기록
- [ ] 트러블슈팅 문서 작성
- [ ] 성능 테스트 결과 정리
- [ ] 장애 대응 시나리오 정리
- [ ] GitHub README 업데이트
- [ ] 서비스 데모 및 스크린샷
- [ ] 배포 URL 정리
- [ ] 포트폴리오 문서 작성

---

## 기술 스택 후보

| 영역 | 기술 |
|---|---|
| Runtime | Node.js |
| Language | TypeScript |
| Backend | Express |
| Frontend | React, Vite, TypeScript |
| Validation | Zod |
| Database | PostgreSQL |
| ORM | Prisma |
| Cache | Redis |
| Job Queue | BullMQ |
| HTTP Client | Axios |
| API Documentation | OpenAPI, Swagger |
| Frontend State | TanStack Query |
| Routing | React Router |
| Chart | Recharts |
| Testing | Vitest, Supertest, Playwright |
| Logging | Pino |
| Security | Helmet, CORS, Rate Limit |
| Monitoring | Prometheus, Grafana |
| Realtime | SSE 또는 WebSocket |
| Container | Docker, Docker Compose |
| CI/CD | GitHub Actions |
| Load Testing | k6 |
| Deployment | AWS |

## 개발 우선순위

1. **MVP:** Express 구조, TypeScript, PostgreSQL, Prisma, 프로젝트 CRUD
2. **핵심 기능:** GitHub API 연동, API 모니터링
3. **비동기 처리:** Redis, BullMQ, 장애 알림
4. **대시보드:** React, TanStack Query, Recharts
5. **운영 수준:** 인증, 보안, 테스트, 로깅
6. **배포:** Docker, GitHub Actions, AWS
7. **고도화:** 성능 테스트, Prometheus, Grafana, 실시간 업데이트

> 기술 도입은 기능 요구사항이 생기는 시점에 진행한다. 모든 기술을 무조건 도입하기보다 도입 전후의 차이와 선택 근거를 기록한다.