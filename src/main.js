// main.js · Punto de entrada de Vite
// Al importar el SCSS, Vite lo compila automáticamente (necesita el paquete "sass").
import "./styles/main.scss";

// ---------- Menú móvil ----------
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".main-nav");

function setMenu(open) {
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  nav.classList.toggle("is-open", open);
  document.body.classList.toggle("menu-open", open);
}

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    setMenu(toggle.getAttribute("aria-expanded") !== "true");
  });

  // Cierra al pulsar un enlace o la tecla Escape
  nav.addEventListener("click", (e) => {
    if (e.target.closest("a")) setMenu(false);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("is-open")) {
      setMenu(false);
      toggle.focus();
    }
  });

  // Si se pasa a escritorio con el menú abierto, se resetea
  window.matchMedia("(min-width: 1200px)").addEventListener("change", (e) => {
    if (e.matches) setMenu(false);
  });
}

// ---------- Sombra de la cabecera al hacer scroll ----------
const header = document.querySelector(".site-header");
const onScroll = () =>
  header?.classList.toggle("is-scrolled", window.scrollY > 8);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// ---------- Año actual en el pie ----------
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// ---------- Validación del formulario ----------
const form = document.querySelector("#form-contacto");

if (form) {
  const okMessage = document.querySelector("#form-ok");
  const fields = form.querySelectorAll(
    "input[required], select[required], input[pattern]",
  );

  const validate = (input) => {
    const wrapper = input.closest(".field");
    const valid = input.checkValidity();
    wrapper?.classList.toggle("has-error", !valid);
    input.setAttribute("aria-invalid", String(!valid));
    return valid;
  };

  fields.forEach((input) => {
    const event =
      input.type === "checkbox" || input.tagName === "SELECT"
        ? "change"
        : "blur";
    input.addEventListener(event, () => validate(input));
    input.addEventListener("input", () => {
      if (input.closest(".field")?.classList.contains("has-error"))
        validate(input);
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const results = [...fields].map(validate);
    const firstInvalid = [...fields].find((_, i) => !results[i]);

    if (firstInvalid) {
      okMessage.classList.remove("is-visible");
      firstInvalid.focus();
      return;
    }

    // Demo: aquí iría el envío real (fetch a un servidor)
    form.reset();
    okMessage.classList.add("is-visible");
  });

  form.addEventListener("reset", () => {
    form
      .querySelectorAll(".has-error")
      .forEach((el) => el.classList.remove("has-error"));
    fields.forEach((input) => input.removeAttribute("aria-invalid"));
  });
}
