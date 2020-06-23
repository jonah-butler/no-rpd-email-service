import { gatherDataToSend } from './data-handling.js';
import { loadingStateAdd, loadingStateRemove } from './load-state.js';
import { submit } from './async.js';
import { disableForm, clearForm, checkDataType } from './results.js';
import { successMessage, errorMessage } from './dom-mod.js';
import { allTrue } from './validation.js';

function inputListeners(inputQuerySelector, parentField, inputType){

    inputQuerySelector.addEventListener('input', () => {
      if(inputQuerySelector.value.length == 0){
        parentField.classList.remove('success');
        parentField.classList.add('error');
        Array.from(parentField.childNodes).forEach((ele) => {
          if(ele.nodeName === 'LABEL'){
            ele.style.bottom = "2px";
            ele.style.left = "20px";
          }
        })
      } else {
        parentField.classList.remove('error');
        parentField.classList.add('success');
        Array.from(parentField.childNodes).forEach((ele) => {
          if(ele.nodeName === 'LABEL'){
            ele.style.bottom = "20px";
            ele.style.left = "10px";
          }
        })
      }
    })

}



function submitFormListener(button, obj, obj2){
  button.addEventListener('click', () => {
     let data = gatherDataToSend(obj);
     if( allTrue(formErrorListener(obj2)) && data.email.indexOf('@') != -1 && data.checkBox == true ){
       obj2.repEmail.parentElement.classList.remove('error');
       document.querySelector('.submit-warning').style.display = "none";
       loadingStateAdd();
       try{
         submit("/submit", data).
         then((response) => {
           loadingStateRemove();
           if( checkDataType(response) ){
               disableForm(obj);
               successMessage();
           } else {
             disableForm(obj);
             errorMessage();
           }
         })
       }
       catch(err){
         console.log('error name', err);
       }
     } else {
       document.querySelector('.submit-warning').style.display = "block";
     }
  })
}


function formErrorListener(formObj){
  let arr = [];
  Object.keys(formObj).forEach((key) => {
    if(formObj[key].value.length == 0){
      formObj[key].parentElement.classList.add('error');
      arr.push(false);
    } else {
      arr.push(true);
    }
  })
  return arr;
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
