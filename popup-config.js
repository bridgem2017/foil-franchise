// 팝업 배너 관리자 설정 파일
// 사용법:
// 1) 팝업을 숨기려면 enabled:false
// 2) 여러 개 추가 가능
// 3) position: bottom-right, bottom-left, top-right, top-left, center
window.FOIL_POPUPS = [
  {
    id: "popup-100",
    enabled: true,
    title: "OO쭈꾸미 100호점 달성",
    text: "가맹영업 성장 사례를 확인해보세요.",
    button: "문의하기",
    link: "#contact",
    position: "bottom-right",
    theme: "pink"
  },
  {
    id: "popup-crm",
    enabled: false,
    title: "본부 실시간 CRM 운영",
    text: "리드부터 계약검토까지 한 화면에서 관리합니다.",
    button: "CRM 보기",
    link: "#crm",
    position: "top-right",
    theme: "purple"
  }
];
