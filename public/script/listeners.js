import { gatherData } from './data-handling.js';
import { loadingStateAdd, loadingStateRemove } from './load-state.js';
import { submit } from './async.js';
import { disableForm, clearForm, checkDataType } from './results.js';
import { successMessage, errorMessage } from './dom-mod.js';

function inputListeners(inputQuerySelector, parentField, inputType){
  inputQuerySelector.addEventListener('input', () => {
    if(inputQuerySelector.value.length == 0){
      parentField.classList.remove('success');
      parentField.classList.add('error');
    } else {
      parentField.classList.remove('error');
      parentField.classList.add('success');
    }
  })
}

function submitFormListener(button, obj){
  button.addEventListener('click', () => {
     let data = gatherData(obj);
     formErrorListener(obj);
     if(data.checkBox !== true || data.name.length === 0 && data.email.indexOf('@') == -1){
       document.querySelector('.submit-warning').style.display = "block";
     } else {
       document.querySelector('.submit-warning').style.display = "none";
       loadingStateAdd();
       try{
         submit("/submit", data).
         then((response) => {
           loadingStateRemove();
           console.log(response);
           if( checkDataType(response) ){
               disableForm(obj);
               successMessage();
           } else {
             console.log(false);
             errorMessage();
           }
         })
       }
       catch(err){
         console.log('error name', err);
       }
     }
  })
}

function formErrorListener(formObj){
  Object.keys(formObj).forEach((key) => {
    if(!formObj[key].value || !formObj[key].checked){
      formObj[key].parentElement.classList.add('error');
    }
  })
}

function modalInit(node){
  node.addEventListener('click', () => {
    document.querySelector('#imgModal').style.display = 'block';
    document.querySelector('#imgModal').addEventListener('click', () => {
      document.querySelector('#imgModal').style.display = 'none';
    })
  })
}

export { inputListeners, submitFormListener, modalInit, formErrorListener };
