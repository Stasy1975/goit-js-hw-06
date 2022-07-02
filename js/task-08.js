const loginFormEl = document.querySelector('.login-form');

loginFormEl.addEventListener('submit', event => {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  if (email === '' || email.trim() === '' || password === '' || password.trim() === '') {
    return alert('Усі поля мають бути заповнені');
  } else {
    const formEl = {
      email,
      password,
    };
    console.log(formEl);
  }
  loginFormEl.reset();
});
