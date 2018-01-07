// UI
const output = document.getElementById('output');

document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getAPI);

function getText () {
  fetch('sample.txt')
    .then(res => res.text())
    .then(data => output.innerHTML = data)
    .catch(err => output.innerHTML = err);
}

function getJSON () {
  let users = '';
  fetch('users.json')
    .then(res => res.json())
    .then(data => {
      data.map(user => users += `<li>${user.name}</li>`);
      output.innerHTML = users;
    })
    .catch(err => output.innerHTML = err);
}

function getAPI () {
  fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => {
      let users = '';
      data.map(user => users += `<li>${user.login}</li>`);
      output.innerHTML = users;
    })
    .catch(err => output.innerHTML = err);
}