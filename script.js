
const images = [
  { src: "img1.jpeg", caption: "You’ve always been my safe place. I’m so lucky to have you." },
  { src: "img2.jpeg", caption: "From childhood fights to late-night talks—thank you for being you." },
  { src: "img3.jpeg", caption: "Your success should be the happiest sound" },
  { src: "img4.jpeg", caption: "you should deserve all you wanted and may god shower you all the love and success" },
  { src: "img5.jpeg", caption: "You inspire me every day with your strength and love." },
  { src: "img6.jpeg", caption: "My scoldings are my love towards you" },
  { src: "img7.jpeg", caption: "Even in silence, we understand each other." },
  { src: "img8.jpeg", caption: "You make my life colorful and bright." },
  { src: "img9.jpeg", caption: "There’s no bond like ours—unbreakable and beautiful." },
  { src: "img10.jpeg", caption: "Happy Birthday to the best sister ever! I love you." }
];




// Load wishes from localStorage on page load

function playMusic() {
  const music = document.getElementById("bg-music");
  music.play().then(() => {
    console.log("Music started!");
  }).catch(() => {
    alert("Please tap the Play Music button again to allow audio.");
  });
}
function startSurprise() {
  // Hide welcome screen
  document.getElementById("welcome-screen").style.display = "none";

  // Show main content
  document.getElementById("main-content").style.display = "block";

  // Try to autoplay music (may be blocked)
  playMusic();

  // Load slideshow and wishes
  if (typeof showSlide === "function") showSlide(0);
  if (typeof loadWishes === "function") loadWishes();
}

window.onload = () => {
  showSlide(0);
  loadWishes();
  document.body.addEventListener('click', playMusic, { once: true });
};


function addWish() {
  const input = document.getElementById("wish-input");
  const wishText = input.value.trim();
  if (wishText === "") return;

  const timestamp = new Date().toLocaleString();

  const wishes = JSON.parse(localStorage.getItem("wishes")) || [];
  wishes.push({ text: wishText, time: timestamp });
  localStorage.setItem("wishes", JSON.stringify(wishes));

  input.value = "";
  loadWishes();
  showHearts();
}

function loadWishes() {
  const list = document.getElementById("wish-list");
  list.innerHTML = "";

  const wishes = JSON.parse(localStorage.getItem("wishes")) || [];

  wishes.forEach((wishObj) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${wishObj.text}
      <span class="wish-time">${wishObj.time}</span>
    `;
    list.appendChild(li);
  });
}

