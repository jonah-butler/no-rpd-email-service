import { inputListeners, submitFormListener, modalInit, formErrorListener } from './listeners.js';
import { stickyNav } from './ui.js';

$(document).ready(function(){
          $('.ui.dropdown').dropdown();
});

const navbar = document.querySelector(".sticky-top");
const navbarHeight = navbar.offsetTop;
window.onscroll = function() {stickyNav(navbarHeight, navbar)};




let formObj = {

  nameInput: document.querySelector('.name-field'),

  emailInput: document.querySelector('.email-field'),

  defaultMessageInput: document.querySelector('.default-message-field'),

  optionalMessageInput: document.querySelector('.optional-message-field'),

  submitBtn: document.querySelector('#submit'),

  checkBox: document.querySelector('.validation-checkbox'),

  repEmail: document.querySelector('.representative')

}

let validationObj = {

  nameInput: document.querySelector('.name-field'),

  emailInput: document.querySelector('.email-field'),

  repEmail: document.querySelector('.representative')

}






submitFormListener(formObj.submitBtn, formObj, validationObj);

modalInit(document.querySelector('.text-event-modal'));


inputListeners(formObj.nameInput, document.querySelector('.user-name-input'), 'name');
inputListeners(formObj.emailInput, document.querySelector('.user-email-input'), 'email');
inputListeners(formObj.repEmail, document.querySelector('.dropdown'), 'dropdown');
