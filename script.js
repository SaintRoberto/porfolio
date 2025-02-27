document.getElementById("hamburger").addEventListener("click", function () {
  document.getElementById("navLinks").classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  const skillsSection = document.querySelector(".skills");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          skillsSection.classList.add("visible");
          observer.unobserve(skillsSection); // Para que se ejecute una sola vez
        }
      });
    },
    { threshold: 0.5 }
  ); // Ajusta el umbral según necesites

  observer.observe(skillsSection);
});

const container = document.querySelector(".hero-image");
const image = document.getElementById("heroImage");

container.addEventListener("mousemove", (e) => {
  const rect = container.getBoundingClientRect();
  const x = e.clientX - rect.left; // Posición horizontal dentro del contenedor
  const y = e.clientY - rect.top; // Posición vertical dentro del contenedor

  const halfWidth = rect.width / 2;
  const halfHeight = rect.height / 2;

  // Calcula el ángulo según la posición del mouse
  const rotateY = ((x - halfWidth) / halfWidth) * 15; // Rotación en Y (efecto de inclinación lateral)
  const rotateX = -((y - halfHeight) / halfHeight) * 15; // Rotación en X (efecto de inclinación vertical)

  // Para agregar un ligero giro en Z basado en la posición horizontal:
  const rotateZ = ((x - halfWidth) / halfWidth) * 5;

  image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
});

container.addEventListener("mouseleave", () => {
  // Reinicia la transformación al salir el mouse
  image.style.transform = "rotateX(0deg) rotateY(0deg) rotateZ(0deg)";
});
