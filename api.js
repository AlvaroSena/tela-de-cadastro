async function getUsers() {
  const url = await fetch('http://localhost:5555/users');

  const response = await url.json();
  console.log(response);
}

getUsers();

async function signUp() {
  const user = {
    username: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  }

<<<<<<< HEAD
  const result = await fetch('http://localhost:5555/api/users', {
=======
  const result = await fetch('http://localhost:5555/users', {
>>>>>>> dev
    method: "POST",
    body: JSON.stringify(user),
    headers: { "Content-type": "application/json; charset=UTF-8" }
  });

  const response = await result.json();
}

async function signIn() {
  const user = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  }

  const url = await fetch('http://localhost:5555/users/auth', {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
  });

  const response = await url.json();
  const { token } = response;
  localStorage.setItem('token', token);
}

async function updateUsername() {
  const user = {
    username: document.getElementById("name").value,
  }

  const authToken = localStorage.getItem(token);

  const url = await fetch('http://localhost:5555/users', {
    method: "PATCH",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `token ${authToken}`
    },
  });

  const response = await url.json();
  console.log(response);
}
