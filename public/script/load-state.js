function loadingStateAdd(){
  document.querySelector('.form').classList.add('loading');
}

function loadingStateRemove(){
  document.querySelector('.form').classList.remove('loading');
}

export { loadingStateAdd, loadingStateRemove };
