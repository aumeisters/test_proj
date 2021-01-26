document.addEventListener('mousedown', e => {
  let radioBtn = e.target.previousElementSibling;
  if (!radioBtn) {
    return;
  }
  if (!radioBtn.classList.contains('custom_radio')) {
    return;
  }
  radioBtn.checkedState = radioBtn.checked;
})
document.addEventListener('click', e => {
  let radioBtn = e.target;
  if (!radioBtn.classList.contains('custom_radio')) {
    return;
  }
  radioBtn.checked = !radioBtn.checkedState;
});