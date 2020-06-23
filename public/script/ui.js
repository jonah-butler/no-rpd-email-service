function stickyNav(eleHeight, ele) {
  if (window.pageYOffset >= eleHeight) {
    ele.classList.add("sticky");
  } else {
    ele.classList.remove("sticky");
  }
}

export { stickyNav };
