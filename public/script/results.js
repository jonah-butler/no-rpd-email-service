function disableForm(formObj) {
  formObj.nameInput.disabled = true;
  formObj.emailInput.disabled = true;
  formObj.submitBtn.disabled = true;
}

function clearForm(formObj){
  formObj.name.value = '';
  formObj.email.value = '';
  formObj.optionalMessage = '';
}

function checkDataType(results){
  if( Array.isArray(results) ) {
    return true;
  } else {
    return false;
  }
}

export { disableForm, clearForm, checkDataType };
