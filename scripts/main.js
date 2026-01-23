const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu-navegacao");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("ativo");
});

/* ================= TOGGLE THEME ================= */
const toggleTheme = document.getElementById("toggleTheme");

toggleTheme.addEventListener("click", () => {
  toggleTheme.classList.toggle("active");
  document.body.classList.toggle("dark");
});

/* ================= TOGGLE LANGUAGE (Com Tradução) ================= */
const toggleLang = document.getElementById("toggleLang");
const htmlLang = document.documentElement;

toggleLang.addEventListener("click", () => {
  toggleLang.classList.toggle("active");

  let currentLang = "pt";

  if (toggleLang.classList.contains("active")) {
    htmlLang.setAttribute("lang", "en");
    currentLang = "en";
    console.log("Idioma alterado para: Inglês");
  } else {
    htmlLang.setAttribute("lang", "pt-BR");
    currentLang = "pt";
    console.log("Idioma alterado para: Português");
  }

  updateTexts(currentLang);
});

function updateTexts(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");

    if (translations[lang] && translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });
}

/* ================= MODAL DE FOTOS (Trabalho Voluntário) ================= */
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("img01");
const closeBtn = document.getElementsByClassName("close")[0];
const fotosVoluntario = document.querySelectorAll(".foto-v-item");

fotosVoluntario.forEach((img) => {
  img.addEventListener("click", function () {
    modal.style.display = "flex";
    modal.style.alignItems = "center";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    document.body.style.overflow = "hidden";
  });
});

function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

closeBtn.onclick = function () {
  closeModal();
};

modal.onclick = function (event) {
  if (event.target === modal) {
    closeModal();
  }
};

document.addEventListener("keydown", function (event) {
  if (
    event.key === "Escape" &&
    (modal.style.display === "flex" || modal.style.display === "block")
  ) {
    closeModal();
  }
});
