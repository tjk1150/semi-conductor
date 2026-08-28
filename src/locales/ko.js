/* Korean UI strings used from JavaScript. Static page copy lives in index.html.
   Writing rule: the title states the situation, the body gives the reason and
   the next action. Plain, polite (해요체), no vague wording. */
export default Object.freeze({
  start: '시작하기',
  calibrated: '인식됐어요 👍',
  fitInFrame: '몸 전체가 카메라 화면에 들어오도록 서 주세요. 한 명만 인식할 수 있어요.',
  cameraErrorTitle: '카메라를 사용할 수 없어요',
  cameraError: '팔 움직임을 인식하려면 웹캠이 필요해요. 웹캠을 연결하고 브라우저에서 카메라 권한을 허용한 다음, 페이지를 새로고침해 주세요.',
  mobileTitle: 'PC에서 이용할 수 있어요',
  mobileMessage: '웹캠으로 팔 움직임을 인식하기 때문에 PC 브라우저에서만 이용할 수 있어요. 아래 버튼으로 링크를 보내 두면 PC에서 바로 열 수 있어요.',
  mobileEmailButton: '이메일로 링크 보내기',
  mobileEmailSubject: 'Semi-Conductor 링크',
  mobileEmailBody: 'PC 브라우저에서 이 링크를 열어 주세요: {url}',
});
