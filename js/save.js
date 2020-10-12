'use strict';

const saveBtn = document.querySelector(".save-button");


// 폼 만들기
function makeForm() {
   
}

// 입력받은 데이터를 저장
function saveDatas() {
    saveContents();
    savaSender();
    }

// 입력받은 내용을 저장하기
let inputContents = [];

saveBtn.addEventListener('click', saveContents);

function saveContents() {
    inputContents = document.querySelector(".form-input").value;
    localStorage.setItem('saveBody', JSON.stringify(inputContents));
    const body = JSON.parse(localStorage.getItem('saveBody'));
    

    // const body1 = document.createElement("div");
    // body1.classList.add("column");
    
    // const body2 = document.createElement("div");
    // body2.classList.add("card");
    // body1.appendChild(body2);

    // const body3 = document.createElement("div");
    // body3.classList.add("content");
    // body2.appendChild(body3);

    // const body4 = document.createElement("h2");
    // body4.classList.add("content-name");
    // body3.appendChild(body4);

    // const body5 = document.createElement("p");
    // body5.classList.add("content-body");
    // body4.appendChild(body5);
    // body5.innerText = body;

    // const row = document.querySelector(".row");                                             
    // console.log(row);

    //row.appendChild(body1);

}

// 입력받은 이름을 저장하기
let InputSender = [];

saveBtn.addEventListener('click', savaSender);

function savaSender() {
    InputSender = document.querySelector(".sender-name").value;
    localStorage.setItem('saveName', InputSender);
    const name = localStorage.getItem('saveName');
    console.log(name);
}
