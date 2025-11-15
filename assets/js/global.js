const loginTab = document.getElementById('loginTab');

const signupTab = document.getElementById('signupTab');

loginTab.addEventListener('click', () => {

  loginTab.classList.add('active');

  signupTab.classList.remove('active');

});

signupTab.addEventListener('click', () => {

  signupTab.classList.add('active');

  loginTab.classList.remove('active');

});