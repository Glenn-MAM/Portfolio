/* ===============================================
   MAIN.JS - VERSION FINALE (Avec Téléchargement ZIP Intelligent)
   =============================================== */

// --- 1. FONCTIONS GLOBALES (Accessibles depuis le HTML) ---

// Fonction spéciale pour ouvrir 2 onglets (Projet Auto-École)
function ouvrirLesCartes() {
    // MODIFIEZ ICI SI VOS FICHIERS SONT AILLEURS
    const carte1 = 'projets/Info3_Carte1_Points_Corrigee.html';
    const carte2 = 'projets/Info3_Carte2_Departements_StyleImage.html';

    window.open(carte1, '_blank');
    setTimeout(() => {
        window.open(carte2, '_blank');
    }, 500);
}

// Fonction principale qui remplit et ouvre la modale
function openModal(card) {
    const modal = document.getElementById('projectModal');
    if (!modal) return;

    // A. Récupération des données
    const title    = card.getAttribute('data-title');
    const year     = card.getAttribute('data-year');
    const duration = card.getAttribute('data-duration');
    const tech     = card.getAttribute('data-tech');
    const desc     = card.getAttribute('data-desc');
    const type     = card.getAttribute('data-type');
    const linkCode = card.getAttribute('data-link-code');
    const downloadLink = card.getAttribute('data-download');
    const demoLink = card.getAttribute('data-demo');
    const pdfUrl   = card.getAttribute('data-pdf-url');
    const pdfTitle = card.getAttribute('data-pdf-title');

    // B. Injection des textes
    document.getElementById('modal-title').innerText    = title;
    document.getElementById('modal-year').innerText     = year;
    document.getElementById('modal-duration').innerText = duration;
    document.getElementById('modal-tech').innerText     = tech;
    document.getElementById('modal-desc').innerText     = desc;

    // C. Récupération des boutons
    const btnDownload   = document.getElementById('btn-download');
    const btnDemo       = document.getElementById('btn-demo');
    const btnPdf        = document.getElementById('btn-pdf');
    const renderBlock   = document.getElementById('render-placeholder-block');

    // Reset
    btnDownload.style.display = 'none';
    btnDemo.style.display     = 'none';
    if (btnPdf)      btnPdf.style.display      = 'none';
    if (renderBlock) renderBlock.style.display  = 'none';
    btnDemo.onclick = null;
    if (btnPdf) btnPdf.onclick = null;

    // ---- CAS 1 : Cartes interactives (Auto-Écoles) ----
    if (type === 'special-cartes') {
        btnDownload.style.display = 'inline-flex';
        btnDownload.innerHTML     = '<i class="fa-solid fa-code"></i> Voir le code';
        btnDownload.href          = linkCode;
        btnDownload.target        = '_blank';

        btnDemo.style.display = 'inline-flex';
        btnDemo.innerHTML     = '<i class="fa-solid fa-map"></i> Lancer la démo';
        btnDemo.href          = '#';
        btnDemo.onclick = function(e) { e.preventDefault(); ouvrirLesCartes(); };
    }
    // ---- CAS 2 : PDF Viewer (KNIME, Power BI) ----
    else if (type === 'pdf-viewer') {
        if (downloadLink && downloadLink !== '#') {
            btnDownload.style.display = 'inline-flex';
            btnDownload.innerHTML     = '<i class="fa-brands fa-github"></i> Voir le code';
            btnDownload.href          = downloadLink;
            btnDownload.target        = '_blank';
        }
        if (btnPdf && pdfUrl) {
            btnPdf.style.display = 'inline-flex';
            btnPdf.onclick = function() {
                modal.style.display = 'none';
                openPdfModal(pdfUrl, pdfTitle || title);
            };
        }
    }
    // ---- CAS 3 : Placeholder Render (Gradio) ----
    else if (type === 'render-placeholder') {
        if (renderBlock) renderBlock.style.display = 'flex';
        if (downloadLink && downloadLink !== '#') {
            btnDownload.style.display = 'inline-flex';
            btnDownload.innerHTML     = '<i class="fa-brands fa-github"></i> Voir le code';
            btnDownload.href          = downloadLink;
            btnDownload.target        = '_blank';
        }
    }
    // ---- CAS 4 : PDF + GitHub (Talend) ----
    else if (type === 'pdf-and-github') {
        if (downloadLink && downloadLink !== '#') {
            btnDownload.style.display = 'inline-flex';
            btnDownload.innerHTML     = '<i class="fa-brands fa-github"></i> Voir le code';
            btnDownload.href          = downloadLink;
            btnDownload.target        = '_blank';
        }
        if (btnPdf && pdfUrl) {
            btnPdf.style.display = 'inline-flex';
            btnPdf.onclick = function() {
                modal.style.display = 'none';
                openPdfModal(pdfUrl, pdfTitle || title);
            };
        }
    }
    // ---- CAS CLASSIQUE ----
    else {
        if (downloadLink && downloadLink !== '#') {
            btnDownload.style.display = 'inline-flex';
            btnDownload.innerHTML     = '<i class="fa-brands fa-github"></i> Voir le code';
            btnDownload.href          = downloadLink;
            btnDownload.target        = '_blank';
        }
        if (demoLink && demoLink !== '#' && demoLink !== '') {
            btnDemo.href          = demoLink;
            btnDemo.style.display = 'inline-flex';
            if (demoLink.toLowerCase().endsWith('.zip')) {
                btnDemo.innerHTML = '<i class="fa-solid fa-file-zipper"></i> Télécharger le dossier';
                btnDemo.setAttribute('download', '');
                btnDemo.removeAttribute('target');
            } else {
                btnDemo.innerHTML = '<i class="fa-solid fa-desktop"></i> Voir un aperçu';
                btnDemo.target    = '_blank';
                btnDemo.removeAttribute('download');
            }
        }
    }

    // D. Afficher la modale principale
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Ouvre la modale PDF
function openPdfModal(pdfUrl, title) {
    const pdfModal      = document.getElementById('pdfModal');
    const pdfViewer     = document.getElementById('pdfViewer');
    const pdfModalTitle = document.getElementById('pdfModalTitle');
    const pdfOpenNewTab = document.getElementById('pdfOpenNewTab');
    if (!pdfModal) return;
    pdfViewer.src           = pdfUrl;
    pdfModalTitle.textContent = title;
    pdfOpenNewTab.href      = pdfUrl;
    pdfModal.style.display  = 'block';
    document.body.style.overflow = 'hidden';
}


// --- 2. INITIALISATION AU CHARGEMENT DE LA PAGE ---

document.addEventListener('DOMContentLoaded', () => {
    
    /* === A. RESTAURATION DES CLICS SUR TOUTES LES CARTES === */
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            openModal(card);
        });
    });

    /* === B. CALCUL DE L'AGE === */
    const ageSpan = document.getElementById('age-span');
    if (ageSpan) {
        const birthDate = new Date('2003-12-31');
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        ageSpan.textContent = age;
    }

    /* === C. MENU BURGER === */
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    if(burger) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });
    }

    /* === D. FERMETURE DES MODALES === */
    // Modale standard
    const modal = document.getElementById('projectModal');
    if (modal) {
        const closeModal = document.querySelector('.close-modal');
        if (closeModal) {
            closeModal.addEventListener('click', () => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            });
        }
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
    // Modale PDF
    const pdfModal = document.getElementById('pdfModal');
    const closePdfBtn = document.getElementById('closePdfModal');
    if (pdfModal) {
        if (closePdfBtn) {
            closePdfBtn.addEventListener('click', () => {
                pdfModal.style.display = 'none';
                document.getElementById('pdfViewer').src = '';
                document.body.style.overflow = 'auto';
            });
        }
        pdfModal.addEventListener('click', (e) => {
            if (e.target === pdfModal) {
                pdfModal.style.display = 'none';
                document.getElementById('pdfViewer').src = '';
                document.body.style.overflow = 'auto';
            }
        });
    }

    /* === E. GESTION DU CARROUSEL PROJETS (auto-slide) === */
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    if (slides.length > 0 && nextBtn && prevBtn) {
        let currentSlide = 0;
        const totalSlides = slides.length;
        const SLIDE_INTERVAL = 3000; // ms
        let autoSlideTimer = null;

        function showSlide(index) {
            slides.forEach(slide => {
                slide.classList.remove('active');
                slide.style.opacity = '0';
                slide.style.pointerEvents = 'none';
            });

            if (index >= totalSlides) currentSlide = 0;
            else if (index < 0) currentSlide = totalSlides - 1;
            else currentSlide = index;

            const activeSlide = slides[currentSlide];
            activeSlide.classList.add('active');
            activeSlide.style.opacity = '1';
            activeSlide.style.pointerEvents = 'all';

            // Mettre à jour les dots si présents
            const dots = document.querySelectorAll('.dot');
            dots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));
        }

        function startAutoSlide() {
            stopAutoSlide();
            autoSlideTimer = setInterval(() => {
                showSlide(currentSlide + 1);
            }, SLIDE_INTERVAL);
        }

        function stopAutoSlide() {
            if (autoSlideTimer) { clearInterval(autoSlideTimer); autoSlideTimer = null; }
        }

        nextBtn.addEventListener('click', () => {
            showSlide(currentSlide + 1);
            startAutoSlide(); // reset timer
        });

        prevBtn.addEventListener('click', () => {
            showSlide(currentSlide - 1);
            startAutoSlide(); // reset timer
        });

        // Générer les dots
        const dotsContainer = document.getElementById('dotsContainer');
        if (dotsContainer) {
            slides.forEach((_, i) => {
                const dot = document.createElement('div');
                dot.classList.add('dot');
                if (i === 0) dot.classList.add('active');
                dot.addEventListener('click', () => { showSlide(i); startAutoSlide(); });
                dotsContainer.appendChild(dot);
            });
        }

        startAutoSlide();
    }

    /* === F. GESTION DU CAROUSEL HOBBIES === */
    const hobbySlides = document.querySelectorAll('.hobby-slide');
    const hobbyPrev  = document.getElementById('hobbyPrev');
    const hobbyNext  = document.getElementById('hobbyNext');
    const hobbyDotsContainer = document.getElementById('hobbyDots');
    const hobbyProgressFill = document.getElementById('hobbyProgressFill');

    if (hobbySlides.length > 0 && hobbyPrev && hobbyNext) {
        let hobbyIndex = 0;
        const HOBBY_INTERVAL = 4000; // ms
        let hobbyTimer = null;
        let hobbyProgressTimer = null;

        // Générer les dots
        hobbySlides.forEach((_, i) => {
            const d = document.createElement('div');
            d.classList.add('hobby-dot');
            if (i === 0) d.classList.add('active');
            d.addEventListener('click', () => { showHobbySlide(i); restartHobbyAuto(); });
            hobbyDotsContainer.appendChild(d);
        });

        function showHobbySlide(index) {
            hobbySlides.forEach(s => s.classList.remove('active'));
            const dots = hobbyDotsContainer.querySelectorAll('.hobby-dot');
            dots.forEach(d => d.classList.remove('active'));

            if (index >= hobbySlides.length) hobbyIndex = 0;
            else if (index < 0) hobbyIndex = hobbySlides.length - 1;
            else hobbyIndex = index;

            hobbySlides[hobbyIndex].classList.add('active');
            dots[hobbyIndex].classList.add('active');
        }

        function startHobbyProgress() {
            if (!hobbyProgressFill) return;
            // Reset barre
            hobbyProgressFill.style.transition = 'none';
            hobbyProgressFill.style.width = '0%';
            // Force reflow
            void hobbyProgressFill.offsetWidth;
            // Lance l'animation
            hobbyProgressFill.style.transition = `width ${HOBBY_INTERVAL}ms linear`;
            hobbyProgressFill.style.width = '100%';
        }

        function restartHobbyAuto() {
            clearInterval(hobbyTimer);
            clearTimeout(hobbyProgressTimer);
            startHobbyProgress();
            hobbyTimer = setInterval(() => {
                showHobbySlide(hobbyIndex + 1);
                startHobbyProgress();
            }, HOBBY_INTERVAL);
        }

        hobbyPrev.addEventListener('click', () => {
            showHobbySlide(hobbyIndex - 1);
            restartHobbyAuto();
        });
        hobbyNext.addEventListener('click', () => {
            showHobbySlide(hobbyIndex + 1);
            restartHobbyAuto();
        });

        restartHobbyAuto();
    }
});