# googleform-slack-message

구글 설문지 응답이 제출될 때 슬랙으로 알림을 보내는 Google Apps Script 코드입니다.

## 주요 기능

- 구글 폼 응답이 제출되면 즉시 슬랙으로 알림
- 강의 신청 정보(이름, 연락처, 이메일)를 깔끔한 형식으로 표시
- 간단한 설치 및 설정

## 설치 방법

1. 구글 설문지의 응답 스프레드시트를 엽니다
2. 상단 메뉴에서 `확장 프로그램 > Apps Script`를 클릭합니다
3. 열린 Apps Script 편집기에 코드를 붙여넣습니다
4. `SLACK_WEBHOOK_URL` 변수에 슬랙에서 생성한 웹훅 URL을 입력합니다
5. 저장 버튼을 클릭합니다

## 트리거 설정

1. Apps Script 편집기에서 왼쪽 사이드바의 시계 아이콘(트리거)을 클릭합니다
2. `트리거 추가` 버튼을 클릭합니다
3. 다음과 같이 설정합니다:
   - 실행할 함수: `onFormSubmit`
   - 이벤트 소스: `스프레드시트에서`
   - 이벤트 유형: `양식 제출 시`
4. 저장 버튼을 클릭합니다

## 슬랙 웹훅 URL 생성 방법

1. 슬랙 워크스페이스에서 Apps를 열고 "Incoming Webhooks"를 검색하여 추가합니다
2. "Add to Slack" 버튼을 클릭합니다
3. 알림을 받을 채널을 선택하고 "Incoming Webhooks 통합 추가" 버튼을 클릭합니다
4. 생성된 웹훅 URL을 복사하여 코드의 `SLACK_WEBHOOK_URL` 변수에 붙여넣습니다

## 라이센스

MIT License를 따릅니다.

## 사용 시 저작권 표기 방법

이 코드를 사용, 수정 또는 재배포할 경우 다음과 같이 저작권 정보를 포함해주세요:
```
/**
 * 구글 설문지 응답이 제출될 때 슬랙으로 알림을 보내는 앱스크립트 코드
 * 원본 코드: https://github.com/cho-ai-lab/googleform-slack-message
 * Copyright (c) 2025 Hyunjung Cho
 * MIT 라이센스에 따라 배포됩니다.
 */
```

## 저작권
Copyright © 2025 Hyunjung Cho
