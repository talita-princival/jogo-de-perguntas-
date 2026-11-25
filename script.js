
// Animação de entrada das etapas escolares

const etapas = document.querySelectorAll(".etapa");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.2
});

etapas.forEach((etapa) => {
    etapa.style.opacity = "0";
    etapa.style.transform = "translateY(30px)";
    etapa.style.transition = "all 0.7s ease";
    observer.observe(etapa);
});
