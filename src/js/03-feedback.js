import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

initialForm()

feedbackForm.addEventListener('input', throttle(onInput,500));
    
function onInput() {
    const formData = new FormData(feedbackForm);
    let userForm = {};
    formData.forEach((value, name) => (userForm[name] = value));
    localStorage.setItem(localStorageKey, JSON.stringify(userForm));
};
    
function initialForm() {
    let persistedForm = localStorage.getItem('localStorageKey');
    if (persistedForm) {
        persistedForm = JSON.parse(persistedForm);
        console.log(persistedForm);
        Object.entries(persistedForm).forEach(([name, value]) => {
        form.elements[name].value = value;
        });
    }
}

feedbackForm.addEventListener('submit', onSubmit);
function onSubmit(evt) {
  evt.preventDefault();
  localStorage.removeItem(localStorageKey);
  let userForm = {};
  const formData = new FormData(feedbackForm);
  formData.forEach((value, name) => (userForm[name] = value));
  console.log(userForm);
  feedbackForm.reset();
}
