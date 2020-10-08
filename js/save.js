const saveBtn = document.querySelector(".save-button");

saveBtn.addEventListener('click', saveContents);

// 입력 받은 데이터를 저장
function saveDatas {
    console.log(body);
}

// 입력 받은 내용
let inputContents = [];

function saveContents() {
    inputContents = document.querySelector(".form-input").value;
    localStorage.setItem('saveBody', inputContents);
    const body = localStorage.getItem('saveBody');
    console.log(body);
}


// 입력 받은 이름
let InputSender = [];

saveBtn.addEventListener('click', savaSender);

function savaSender() {
    InputSender = document.querySelector(".sender-name").value;
    localStorage.setItem('saveName', InputSender);
    const name = localStorage.getItem('saveName');
    console.log(name);
}

