const saveBtn = document.querySelector(".save-button");
// 입력 받은 내용
let inputContents = [];

// 보내는 사람 이름
let InputSender = [];

saveBtn.addEventListener('click', saveData);

function saveData() {
    inputContents = document.querySelector(".form-input").value;
    InputSender = document.querySelector(".sender-name").value;
    
}

