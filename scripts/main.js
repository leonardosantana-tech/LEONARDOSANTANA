const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu-navegacao");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("ativo");
});

/* ================= TOGGLE THEME ================= */
const themeButtons = document.querySelectorAll(".toggle-theme");

themeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Sincroniza o estado visual de todos os botões de tema
    themeButtons.forEach((b) => b.classList.toggle("active"));
    document.body.classList.toggle("dark");
  });
});

/* ================= TOGGLE LANGUAGE (Com Tradução) ================= */

const langButtons = document.querySelectorAll(".toggle-lang");
const htmlLang = document.documentElement;

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Sincroniza o estado visual de todos os botões de idioma
    langButtons.forEach((b) => b.classList.toggle("active"));

    let currentLang = "pt";
    if (btn.classList.contains("active")) {
      htmlLang.setAttribute("lang", "en");
      currentLang = "en";
    } else {
      htmlLang.setAttribute("lang", "pt-BR");
      currentLang = "pt";
    }
    updateTexts(currentLang);
  });
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

// Seleciona todos os links dentro do menu de navegação
const linksDoMenu = document.querySelectorAll(".menu-navegacao a");

// Para cada link clicado, remove a classe 'ativo' do menu
linksDoMenu.forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.querySelector(".menu-navegacao");
    menu.classList.remove("ativo");
  });
});
