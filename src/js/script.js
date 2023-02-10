// variables
const isName = document.querySelector('.myName');
const profileName = document.querySelector('.profile_name');
const profileBio = document.querySelector('.profile_bio');
const linkInBio = document.querySelector('.link-in-bio');
const pf = document.querySelector('.pf_wrapper');
const contentGrid = document.querySelector('.content-grid');

const posts = [
  'profiel-foto.png',
  'profiel-foto.png',
  'profiel-foto.png',
  'profiel-foto.png',
  'profiel-foto.png',
  'profiel-foto.png',
  'profiel-foto.png',
  'profiel-foto.png',
];

fetch(
  'https://gist.githubusercontent.com/wongsrila/6b153994e8a9c6424dd55222bdf5d3f2/raw/e7fa1a0ebc457fe8dd0085e35f110ece4387b39a/photos.JSON',
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

// array1.forEach((element) =>
//   console.log(`<div class="grid-item">
//       <img src="../src/images/${element}" alt="" />
//     </div>`),
// );

// `<div class="grid-item">
//       <img src="../src/images/${array1}" alt="test" />
//     </div>`;

posts.forEach((post) => {
  let newGridItem = document.createElement('div');
  newGridItem.innerHTML = `<img src="../src/images/${post}" alt="test" />`;
  contentGrid.appendChild(newGridItem).classList.add('grid-item');
});

fetchData();
fetchImages();

// functions
function getData(data) {
  isName.innerHTML = `${data.member.name}`;
  profileName.innerHTML = `${data.member.nickname}`;
  profileBio.innerHTML = `${data.member.bio.html}`;
  linkInBio.innerHTML = `${data.member.website}`;
  pf.innerHTML = `<img src="${data.member.avatar}" alt="profile picture" />`;
}

function getPhotos(data) {
  console.log(data);
}

function fetchData() {
  const url =
    'https://whois.fdnd.nl/api/v1/member?id=cldex8i4d48ge0auo7uxkro02';
  const data = fetch(url)
    .then((response) => response.json())
    .then((data) => getData(data));
}

function fetchImages() {
  const url =
    'https://gist.githubusercontent.com/wongsrila/6b153994e8a9c6424dd55222bdf5d3f2/raw/568db1ffe9eb0491cb208de08ca528c2cc338560/photos.JSON';
  const photoData = fetch(url)
    .then((response) => response.json())
    .then((photoData) => getPhotos(photoData));
}

// confetti.js
const button = document.querySelector('#button');
const canvas = document.querySelector('#confetti');

const jsConfetti = new JSConfetti();

button.addEventListener('click', () => {
  if (button.innerHTML === 'Following') {
    button.innerHTML = 'Follow';
    button.style.backgroundColor = '';
  } else {
    button.innerHTML = 'Following';
    button.style.backgroundColor = '#262626';
    jsConfetti.addConfetti({
      emojis: ['😈', '⚡️', '💥', '✨', '🥇', '🐒'],
      confettiNumber: 65,
    });
  }
});
