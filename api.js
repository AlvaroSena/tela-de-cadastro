async function signUp() {
  const user = {
    username: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  }

  const form = await fetch('http://localhost:5555/users', {
    method: "POST",
    body: JSON.stringify(user),
    headers: { "Content-type": "application/json; charset=UTF-8" }
  });

  const response = await form.json();
}

async function signIn() {
  const user = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  }

  const form = await fetch('http://localhost:5555/users/auth', {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      // Authorization: `token ${token}`
    },
  });

  const response = await form.json();
  const { token } = response;
  localStorage.setItem('token', token);
  // console.log(response);
}