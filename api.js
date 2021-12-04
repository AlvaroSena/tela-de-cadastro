async function signUp() {
  const user = {
    username: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  }
  console.log(user);

  const result = await fetch('http://localhost:5555/users', {
    method: "POST",
    body: JSON.stringify(user),
    headers: { "Content-type": "application/json; charset=UTF-8" }
  })

  const response = await result.json();
}