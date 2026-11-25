<p align="center">
  <img src="public/favicon.svg" width="88" alt="AirPass">
</p>

<h1 align="center">AirPass</h1>

<p align="center">
  Mac, Windows, Linux 사이에서 파일을 바로 보내고 받는 데스크톱 앱입니다.<br>
  같은 네트워크에 있으면 주소 입력도, 계정도 필요 없습니다.
</p>

<p align="center">
  <a href="https://airpass-dev.github.io/airpass-site/"><b>airpass-dev.github.io/airpass-site</b></a>
  &nbsp;·&nbsp;
  <a href="https://github.com/airpass-dev/airpass-site/releases">다운로드</a>
</p>

---

## AirPass는

- **운영체제가 달라도 됩니다.** Mac과 Windows PC, Linux PC 사이에서 그대로 주고받습니다.
- **켜면 바로 보입니다.** 같은 네트워크의 기기가 자동으로 목록에 나타납니다. IP 주소를 찾을 필요가 없습니다.
- **계정이 없습니다.** 가입도 로그인도 없고, 파일은 클라우드를 거치지 않고 기기에서 기기로 갑니다.
- **파일 내용은 암호화됩니다.** 연결할 때마다 새로 만든 키로 암호화합니다.
- 폴더 전송, 중단된 전송 이어 받기, 전송 기록, QR 페어링, 한국어·English를 지원합니다.

## 다운로드

설치 파일은 [Releases](https://github.com/airpass-dev/airpass-site/releases)와
[소개 페이지](https://airpass-dev.github.io/airpass-site/#download)에서 받을 수 있습니다.
첫 정식 버전은 준비 중입니다.

## 이 레포에 대해

AirPass 앱의 소스는 비공개 레포에 있습니다. 이 레포는 두 가지를 공개합니다.

1. **소개 페이지 소스** — Vite + React로 만든 정적 사이트이며, GitHub Pages로 배포합니다.
2. **설치 파일과 자동 업데이트 피드** — 앱의 릴리스(설치 파일과 `latest*.yml`)가 이 레포의
   Releases로 올라갑니다. 앱은 여기서 업데이트를 확인합니다.

### 개발

```bash
pnpm install
pnpm dev      # 최신 릴리스 정보를 받아 온 뒤 개발 서버 실행
pnpm test
pnpm build    # dist/ 에 정적 파일 생성
```

`pnpm dev`와 `pnpm build`는 먼저 `scripts/fetch-release.ts`로 이 레포의 최신 릴리스를 읽어
`src/generated/release.json`을 만듭니다. 릴리스가 없으면 다운로드 영역은 "준비 중"으로 표시됩니다.

### 배포

`.github/workflows/deploy.yml`이 다음 경우에 사이트를 다시 빌드해 GitHub Pages에 배포합니다.

- `main`에 push했을 때
- 릴리스가 발행(published)됐을 때 — 다운로드 버튼이 새 버전으로 바뀝니다
- Actions 탭에서 수동 실행했을 때

---

<sub>AirDrop은 Apple Inc.의 상표이고, Quick Share는 Google LLC의 상표입니다. AirPass는 두 회사와 관련이 없습니다.</sub>
