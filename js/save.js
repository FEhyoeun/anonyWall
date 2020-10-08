const saveBtn = document.querySelector(".save-button");

// 폼 만들기



// 입력받은 데이터를 저장
 function saveDatas() {
    saveContents();
    savaSender();
 }

// 입력받은 내용
let inputContents = [];

saveBtn.addEventListener('click', saveContents);

function saveContents() {
    inputContents = document.querySelector(".form-input").value;
    localStorage.setItem('saveBody', inputContents);
    const body = localStorage.getItem('saveBody');
    console.log(body);
}

// 입력받은 이름
let InputSender = [];

saveBtn.addEventListener('click', savaSender);

function savaSender() {
    InputSender = document.querySelector(".sender-name").value;
    localStorage.setItem('saveName', InputSender);
    const name = localStorage.getItem('saveName');
    console.log(name);
}
