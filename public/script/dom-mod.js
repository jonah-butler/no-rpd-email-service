function successMessage(){
  let textArea = document.querySelector('.notification-text-area');
  let textAreaParent = document.querySelector('.submit-notification');
  textAreaParent.style.display = 'block';
  textAreaParent.classList.add('success');
  textArea.innerHTML = 'Your email was successfully sent. Thanks for contributing.'
}

function errorMessage(){
  let textArea = document.querySelector('.notification-text-area');
  let textAreaParent = document.querySelector('.submit-notification');
  textAreaParent.style.display = 'block';
  textAreaParent.classList.add('error');
  textArea.innerHTML = 'Looks like there was a problem establishing a connection. Refresh the page and try again. Or contact me at jonahbutler@gmail.com. Or you can email the superintendent with the publicly listed address: '
}

export { successMessage, errorMessage };
