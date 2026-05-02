// FOIL popup banner manager
// 사용법: enabled false = 숨김, 배열에 항목 추가 = 여러 개 노출, 항목 삭제 = 팝업 삭제
window.FOIL_POPUP_BANNERS = [
  {
    id: "jukkumi-100",
    enabled: true,
    kicker: "SUCCESS CASE",
    title: "OO쭈꾸미 100호점 달성",
    text: "가맹영업 흐름과 리드 관리 구조를 함께 설계한 예시 팝업입니다.",
    button: "도입 문의하기",
    link: "#contact",
    target: "_self",
    delay: 700
  },
  {
    id: "crm-open",
    enabled: true,
    kicker: "CRM",
    title: "본부 실시간 확인형 CRM 운영",
    text: "신규·상담중·계약검토 리드를 한 화면에서 확인하는 구조입니다.",
    button: "CRM 보기",
    link: "#crm",
    target: "_self",
    delay: 1300
  }
];
