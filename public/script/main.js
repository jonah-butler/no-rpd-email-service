import { inputListeners, submitFormListener } from './listeners.js';


let formObj = {

  nameInput: document.querySelector('.name-field'),

  emailInput: document.querySelector('.email-field'),

  defaultMessageInput: document.querySelector('.default-message-field'),

  optionalMessageInput: document.querySelector('.optional-message-field'),

  submitBtn: document.querySelector('#submit'),

  checkBox: document.querySelector('.validation-checkbox')

}



submitFormListener(formObj.submitBtn, formObj);


inputListeners(formObj.nameInput, document.querySelector('.user-name-input'), 'name');
inputListeners(formObj.emailInput, document.querySelector('.user-email-input'), 'email');
