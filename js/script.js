let contactForm = document.querySelector(".contact-form");
let sendBtn = document.querySelector(".send-btn");

let nameTaker = document.querySelector(".name-taker");
let surnameTaker = document.querySelector(".surname-taker");
let relationTaker = document.querySelector(".relation-taker");
let phoneTaker = document.querySelector(".phone-taker");

let resultList = document.querySelector(".result-list");

contactForm.addEventListener("submit", function(evt){
  evt.preventDefault();

  let listItem = document.createElement("li");

  let personInfo = {
    firstName: nameTaker.value,
    lastName: surnameTaker.value,
    relationShip: relationTaker.value,
    phoneNum: phoneTaker.value,
  }

  let itemSpanName = document.createElement("span");
  let itemTextName = document.createElement("p");
  let listBoxName = document.createElement("div");
  listBoxName.append(itemSpanName, itemTextName);

  let itemSpanSurname = document.createElement("span");
  let itemTextSurname = document.createElement("p");
  let listBoxSurname = document.createElement("div");
  listBoxSurname.append(itemSpanSurname, itemTextSurname);

  let itemSpanRelation = document.createElement("span");
  let itemTextRelation = document.createElement("p");
  let listBoxRelation = document.createElement("div");
  listBoxRelation.append(itemSpanRelation, itemTextRelation);
  
  let itemSpanNumber = document.createElement("span");
  let itemTextNumber = document.createElement("p");
  let itemLinkNum = document.createElement("a");
  let listBoxNumber = document.createElement("div");
  listBoxNumber.append(itemSpanNumber, itemTextNumber);

  itemTextNumber.appendChild(itemLinkNum);

  resultList.appendChild(listItem);
  listItem.append(listBoxName, listBoxSurname, listBoxRelation, listBoxNumber);

  listItem.setAttribute("class", "bg-white bg-opacity-50 shadow p-3 rounded-5 mb-2");

  listBoxName.setAttribute("class", "d-flex");
  listBoxSurname.setAttribute("class", "d-flex");
  listBoxRelation.setAttribute("class", "d-flex");
  listBoxNumber.setAttribute("class", "d-flex");

  itemSpanName.setAttribute("class", "me-2 h3 fw-bold mb-0 link-success opacity-50");
  itemSpanSurname.setAttribute("class", "me-2 h3 fw-bold mb-0 link-primary opacity-50");
  itemSpanRelation.setAttribute("class", "me-2 h3 fw-bold mb-0 link-danger opacity-50");
  itemSpanNumber.setAttribute("class", "me-2 h3 fw-bold mb-0 link-warning opacity-50");
  itemLinkNum.setAttribute("href", "tel:");
  itemLinkNum.setAttribute("class", "text-decoration-none link-secondary");

  itemTextName.setAttribute("class", "h3 m-0 fw-bold link-secondary");
  itemTextSurname.setAttribute("class", "h3 m-0 fw-bold link-secondary");
  itemTextRelation.setAttribute("class", "h3 m-0 fw-bold link-secondary");
  itemTextNumber.setAttribute("class", "m-0 d-inline-block");
  listBoxNumber.setAttribute("class", "h3 m-0 fw-bold link-secondary d-inline-block");

  itemSpanName.textContent = "Name:";
  itemTextName.textContent = personInfo.firstName;

  itemSpanSurname.textContent = "Surname:";
  itemTextSurname.textContent = personInfo.lastName;

  itemSpanRelation.textContent = "Relationship:";
  itemTextRelation.textContent = personInfo.relationShip;

  itemSpanNumber.textContent = "Number:";
  itemLinkNum.textContent = `+${personInfo.phoneNum}`;

  nameTaker.value = "";
  surnameTaker.value = "";
  relationTaker.value = "";
  phoneTaker.value = "";
});

listItem.addEventListener("dblclick", function(){
  resultList.removeChild(listItem);
})