const input = document.getElementById("input");
const id = document.getElementById("id");
const Name = document.getElementById("name");
const login = document.getElementById("login");
const url = document.getElementById("url");
const company = document.getElementById("company");

async function fetchData(ele) {
  const response = await fetch(ele);
  const obj = await response.json();
  id.innerHTML = `id: ${obj.id}`;
  Name.innerHTML = `name: ${obj.name}`;
  login.innerHTML = `login: ${obj.login}`;
  url.innerHTML = `url: ${obj.url}`;
  company.innerHTML = `company: ${obj.company}`;
}
fetchData(`https://api.github.com/users/Genius8545`);
// document.forms[0].onsubmit = fetchData(
//   `https://api.github.com/users/Genius8545`
// );
