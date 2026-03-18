// TODO: TIL 폼 등록 기능을 구현하세요
// 1. 폼 요소와 목록 요소를 querySelector로 선택합니다.
// 2. 폼의 submit 이벤트를 감지하여 새 TIL 항목을 목록에 추가합니다.

const tilForm = document.querySelector("#til-form");
const tilList = document.querySelector("#til-list");

tilForm.addEventListener("submit", function (event) {
    event.preventDefault();  // 폼 기본 동작(페이지 새로고침) 막기

    // 1. 입력값 가져오기 #til-date는 id="til-date"인 요소를 선택
    const date = document.querySelector("#til-date").value;
    const title = document.querySelector("#til-title").value;
    const content = document.querySelector("#til-content").value;

    // 2. 새 TIL 항목 만들기
    const tilItem = document.createElement("article");
    tilItem.className = "til-item";
    tilItem.innerHTML = `
    <time>${date}</time>
    <h3>${title}</h3>
    <p>${content}</p>
  `;

    // 3. 목록 맨 위에 추가
    tilList.prepend(tilItem);

    // 4. 폼 초기화
    tilForm.reset();
});
