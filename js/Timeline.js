/* timeline.js
   - Apparition réversible via IntersectionObserver
   - Gestion "hide footer on scroll down, show on scroll up"
   - Code commenté et sans dépendances (vanilla JS)
*/

/* =============== PARTIE 1 : IntersectionObserver pour l'animation réversible =============== */
/* On observe chaque .timeline-item et on ajoute/supprime la classe 'in-view'
   selon si l'élément est visible dans le viewport.
   Ceci remplace le scroll handler lourd et permet un comportement réversible
   (l'élément redevient caché si on remonte).
*/

document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.timeline ul li');

  if ('IntersectionObserver' in window) {
    // options : déclenchement quand 30% de l'élément est visible
    const obsOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.30
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const el = entry.target;
        if (entry.intersectionRatio >= 0.30) {
          // élément visible -> on affiche (classe 'in-view')
          el.classList.add('in-view');
        } else {
          // élément trop peu visible -> on cache (réversible)
          el.classList.remove('in-view');
        }
      });
    }, obsOptions);

    // Observer chaque élément
    items.forEach(item => observer.observe(item));

  } else {
    // fallback simple si IntersectionObserver absent : ajouter tout (non réversible)
    items.forEach(item => item.classList.add('in-view'));
  }

  /* =============== PARTIE 2 : Gestion footer hide/show (scroll direction) =============== */
  const footer = document.getElementById('page-footer');
  let lastScrollY = window.scrollY || 0;
  let ticking = false;

  function onScroll() {
    if (!footer) return;
    const currentY = window.scrollY || 0;
    if (Math.abs(currentY - lastScrollY) < 10) {
      // petit delta -> ignore pour éviter "tremblement"
      return;
    }

    if (currentY > lastScrollY) {
      // scroll vers le bas -> cacher le footer
      footer.style.transform = 'translateY(110%)';
    } else {
      // scroll vers le haut -> montrer le footer
      footer.style.transform = 'translateY(0)';
    }

    lastScrollY = currentY;
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  });

  /* Au chargement on affiche les éléments déjà visibles (utile si on arrive au milieu de la page) */
  // note : si IntersectionObserver s'occupe déjà de ça, cette étape est superflue, mais sans mal.
  setTimeout(() => {
    // Trigger a small manual check in case some items are visible on load
    items.forEach(item => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.7) item.classList.add('in-view');
    });
  }, 120);
});
