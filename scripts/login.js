const AUTH_URL = `${API_URL}/auth`
$(()=> {
  $('form').submit((event) => {
    event.preventDefault();
    console.log('submitted');
    const email = $('#email').val();
    const password = $('#password').val();
    const user = {
      email,
      password
    };
    login(user)
    .then(result => {
      console.log(result);
      window.location = `/user.html?id=${result.id}`
    }).catch(error => {
      const $errorMessage = $('#errorMessage');
      $errorMessage.text(error.responseJSON.message);
      $errorMessage.show();
      console.error(error);
    });
  });
});


function login(user){
  console.log(`${AUTH_URL}/login`)
  // make a post request against the auth url slash login.
  return $.post(`${AUTH_URL}/login`, user);
}
