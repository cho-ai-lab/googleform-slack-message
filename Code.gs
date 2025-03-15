/**
 * 구글 설문지 응답이 제출될 때 슬랙으로 알림을 보내는 앱스크립트 코드
 * 
 * 사용 방법:
 * 1. 구글 스프레드시트에서 확장 프로그램 > Apps Script로 이동
 * 2. 아래 코드를 붙여넣기
 * 3. SLACK_WEBHOOK_URL 변수에 슬랙 웹훅 URL을 입력
 * 4. 변경사항 저장 (Ctrl+S 또는 ⌘+S)
 * 5. 트리거 설정: 왼쪽 사이드바의 시계 아이콘 클릭 > 트리거 추가
 * 6. 새 트리거 추가: onFormSubmit 함수, 이벤트 소스 '스프레드시트에서', 이벤트 유형 '양식 제출 시' 선택
 */

// 슬랙 웹훅 URL을 여기에 입력하세요
const SLACK_WEBHOOK_URL = 'YOUR_SLACK_WEBHOOK_URL_HERE';

/**
 * 폼 제출 시 실행되는 함수
 * @param {Object} e 폼 제출 이벤트 객체
 */
function onFormSubmit(e) {
  try {
    // 응답 데이터 가져오기
    const response = e.namedValues;
    
    // 응답 데이터에서 필요한 정보 추출
    const name = response['이름'] ? response['이름'][0] : '정보 없음';
    const phone = response['전화번호'] ? response['전화번호'][0] : 
                 (response['연락처'] ? response['연락처'][0] : '정보 없음');
    const email = response['이메일'] ? response['이메일'][0] : '정보 없음';
    
    // 슬랙 메시지 생성
    const message = {
      "blocks": [
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "*🔴강의 신청*"
          }
        },
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "*이름:* " + name
          }
        },
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "*연락처:* " + phone
          }
        },
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "*이메일:* " + email
          }
        }
      ]
    };
    
    // 슬랙으로 메시지 전송
    sendToSlack(message);
    
    // 로그 기록
    Logger.log('슬랙 알림이 성공적으로 전송되었습니다.');
  } catch (error) {
    Logger.log('오류 발생: ' + error.toString());
  }
}

/**
 * 슬랙으로 메시지 전송 함수
 * @param {Object} message 슬랙 메시지 객체
 */
function sendToSlack(message) {
  // 메시지를 JSON 문자열로 변환
  const payload = JSON.stringify(message);
  
  // 슬랙 API로 POST 요청 보내기
  const options = {
    'method': 'post',
    'contentType': 'application/json',
    'payload': payload
  };
  
  // 요청 전송
  const response = UrlFetchApp.fetch(SLACK_WEBHOOK_URL, options);
  
  // 응답 로깅
  Logger.log(response.getContentText());
  return response;
}

/**
 * 스크립트 테스트 함수 - 직접 실행해서 설정이 제대로 되었는지 확인할 수 있습니다
 */
function testSlackNotification() {
  // 테스트 데이터 생성
  const testData = {
    '이름': ['홍길동'],
    '연락처': ['010-1234-5678'],
    '이메일': ['test@example.com']
  };
  
  // 테스트 이벤트 객체 생성
  const testEvent = {
    namedValues: testData
  };
  
  // onFormSubmit 함수 실행
  onFormSubmit(testEvent);
}
