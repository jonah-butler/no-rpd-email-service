import { inputListeners, submitFormListener, modalInit, formErrorListener } from './listeners.js';

$(document).ready(function(){
          $('.ui.dropdown').dropdown();
});

window.onscroll = function() {myFunction()};

var navbar = document.querySelector(".sticky-top");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


let formObj = {

  nameInput: document.querySelector('.name-field'),

  emailInput: document.querySelector('.email-field'),

  defaultMessageInput: document.querySelector('.default-message-field'),

  optionalMessageInput: document.querySelector('.optional-message-field'),

  submitBtn: document.querySelector('#submit'),

  checkBox: document.querySelector('.validation-checkbox'),

  repEmail: document.querySelector('.representative')

}






submitFormListener(formObj.submitBtn, formObj);

modalInit(document.querySelector('.text-event-modal'));


inputListeners(formObj.nameInput, document.querySelector('.user-name-input'), 'name');
inputListeners(formObj.emailInput, document.querySelector('.user-email-input'), 'email');
inputListeners(formObj.repEmail, document.querySelector('.dropdown'), 'dropdown');
