# Todo Tutorial

[Claude Code Playbook](https://docs.claude-hunt.com) 강의의 실습용 저장소입니다. Next.js 와 shadcn/ui 로 시작하는 작은 Todo 앱을 단계별로 발전시키며 Claude Code 사용법을 익힙니다.

## 관련 링크

- 강의 본문: https://docs.claude-hunt.com
- 수강생 결과물 공유: https://claude-hunt.com

## 주요 기능

- 할 일 추가 / 완료 토글 / 수정 / 삭제 (`components/todo-list.tsx`, `hooks/use-todos.ts`)
- 우선순위 지정 (높음 / 보통 / 낮음)
- 마감일 지정
- 카테고리 태그 (업무 / 개인 / 쇼핑) 및 카테고리별 필터
- 제목 검색
- 상태별 필터 (전체 / 진행중 / 완료)
- 정렬 (생성일순 / 이름순 / 마감일순)
- 다크 모드 토글 (`d` 키)
- localStorage 기반 로컬 저장 (별도 백엔드 없음)

## 기술 스택

- Next.js 16 (App Router, Turbopack)
- React 19
- Tailwind CSS v4
- shadcn/ui (radix-mira 스타일, taupe 베이스, Phosphor 아이콘)
- TypeScript / ESLint / Prettier
- Vitest + Testing Library (컴포넌트/훅 단위 테스트)
- 패키지 매니저: bun 1.3.14

## 시작하기

```bash
bun install
bun dev
```

개발 서버는 기본적으로 [http://localhost:3000](http://localhost:3000) 에서 열립니다.

자주 쓰는 스크립트:

```bash
bun dev            # 개발 서버 실행
bun run build      # 프로덕션 빌드
bun run start      # 빌드 결과 실행
bun run lint       # ESLint
bun run typecheck  # tsc --noEmit
bun run test       # Vitest 실행
bun run test:watch # Vitest watch 모드
bun run format     # Prettier 포맷팅
```

## 프로젝트 구조

```
app/                 # App Router 엔트리 (page.tsx, layout.tsx, globals.css)
components/          # Todo 기능 컴포넌트 (입력, 목록, 검색, 필터, 정렬 등)
components/ui/       # shadcn/ui 컴포넌트 (직접 수정하지 않고 래퍼로 확장)
hooks/               # useTodos 등 상태 관리 훅
lib/                 # 타입 정의(types.ts)와 유틸 함수(todo-utils.ts)
```

## 컴포넌트 추가

shadcn/ui 컴포넌트는 다음과 같이 추가합니다.

```bash
bunx --bun shadcn@latest add button
```

`components/ui` 디렉토리에 컴포넌트가 추가됩니다.

## 컴포넌트 사용

```tsx
import { Button } from "@/components/ui/button";
```

## Contributors

- 토이크레인 - Frontend Developer
