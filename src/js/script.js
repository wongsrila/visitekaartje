// variables
const isName = document.querySelector('.myName');

// functions
function getData(data) {
  console.log(data.member.name);
  isName.innerHTML = `${data.member.name}.`;
}

function fetchData() {
  const url =
    'https://whois.fdnd.nl/api/v1/member?id=cldex8i4d48ge0auo7uxkro02';
  const data = fetch(url)
    .then((response) => response.json())
    .then((data) => getData(data));
}

fetchData();
