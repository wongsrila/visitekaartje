// variables
const isName = document.querySelector('.myName');
const profileName = document.querySelector('.profile_name');
const profileBio = document.querySelector('.profile_bio');
const linkInBio = document.querySelector('.link-in-bio');
const pf = document.querySelector('.pf_wrapper');

// functions
function getData(data) {
  isName.innerHTML = `${data.member.name}`;
  profileName.innerHTML = `${data.member.nickname}`;
  profileBio.innerHTML = `${data.member.bio.html}`;
  linkInBio.innerHTML = `${data.member.website}`;
  pf.innerHTML = `<img src="${data.member.avatar}" alt="profile picture" />`;
}

function fetchData() {
  const url =
    'https://whois.fdnd.nl/api/v1/member?id=cldex8i4d48ge0auo7uxkro02';
  const data = fetch(url)
    .then((response) => response.json())
    .then((data) => getData(data));
}

fetchData();

// confetti
const button = document.querySelector('#button');
const canvas = document.querySelector('#confetti');

const jsConfetti = new JSConfetti();

button.addEventListener('click', () => {
  jsConfetti.addConfetti({
    emojis: ['😈', '⚡️', '💥', '✨', '🥇', '🐒'],
    confettiNumber: 65,
  });
  // .then(() => jsConfetti.addConfetti());

  console.log('button');
});

button.addEventListener('click', () => {
  if (button.innerHTML === 'Followed') {
    button.innerHTML = 'Follow';
    button.style.backgroundColor = '';
    jsConfetti.addConfetti({
      emojis: ['😔', '🥲', '🤨', '😪', '☠️', '🐒'],
      confettiNumber: 65,
    });
  } else {
    button.innerHTML = 'Followed';
    button.style.backgroundColor = '#262626';
  }
});
