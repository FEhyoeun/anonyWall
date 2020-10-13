'use strict';

const saveBtn = document.querySelector(".save-button");

// 입력받은 데이터를 저장
function saveDatas() {
    saveContents();
    savaSender();
    }

// 입력받은 내용을 저장하기
let inputContents = [];
// 입력받은 이름을 저장하기
let InputSender = [];

//saveBtn.addEventListener('click', saveContents);
function saveContents() {
    inputContents = document.querySelector(".form-input").value;
    localStorage.setItem('saveBody', JSON.stringify(inputContents));
    const body = JSON.parse(localStorage.getItem('saveBody'));

    InputSender = document.querySelector(".sender-name").value;
    localStorage.setItem('saveName', JSON.stringify(InputSender));
    const name = JSON.parse(localStorage.getItem('saveName'));

    const body1 = document.createElement("div");
    body1.classList.add("column");

    const body2 = document.createElement("div");
    body2.classList.add("card");
    body1.appendChild(body2);

    const body3 = document.createElement("div");
    body3.classList.add("content");
    body2.appendChild(body3);

    const body4 = document.createElement("h2");
    body4.classList.add("content-name");
    body3.appendChild(body4);

    const body5 = document.createElement("p");
    body5.classList.add("content-body");
    body3.appendChild(body5);

    body4.innerText = name;
    body5.innerText = body;

    
    //const wrap = document.querySelector(".testtest");
    const row = document.querySelector(".sender");
    console.log(row);
    console.log(body1);
    //console.log(wrap);
  

}



//saveBtn.addEventListener('click', savaSender);
function savaSender() {
    InputSender = document.querySelector(".sender-name").value;
    localStorage.setItem('saveName', JSON.stringify(InputSender));
    const name = JSON.parse(localStorage.getItem('saveName'));

    const name1 = document.createElement("div");
    name1.classList.add("column");

    const name2 = document.createElement("div");
    name2.classList.add("card");
    name1.appendChild(name2);

    const name3 = document.createElement("div");
    name3.classList.add("content");
    name2.appendChild(name3);

    const name4 = document.createElement("h2");
    name4.classList.add("content-name");
    name3.appendChild(name4);

    const name5 = document.createElement("p");
    name5.classList.add("content-body");
    name3.appendChild(name5);

    name5.innerText = name;

    const row = document.querySelector(".row");
    //row.appendChild(name);
    //console.log(name1);

}

saveBtn.addEventListener('click', saveDatas);