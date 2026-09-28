// Avisos temporales: se muestran sólo hasta la fecha indicada en data-until.
document.querySelectorAll("[data-until]").forEach((el) => {
  const until = Date.parse(el.dataset.until);
  if (!Number.isNaN(until) && Date.now() < until) el.hidden = false;
});

// Borde del header al hacer scroll.
const header = document.querySelector(".site-header");
const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Selector de idioma: se cierra al hacer clic afuera o con Escape.
const lang = document.querySelector(".lang");
if (lang) {
  document.addEventListener("click", (e) => {
    if (lang.open && !lang.contains(e.target)) lang.open = false;
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lang.open) {
      lang.open = false;
      lang.querySelector("summary").focus();
    }
  });
}

// Año del footer.
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});
