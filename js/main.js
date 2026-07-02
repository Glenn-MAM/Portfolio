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
    const title = card.getAttribute('data-title');
    const year = card.getAttribute('data-year');
    const duration = card.getAttribute('data-duration');
    const tech = card.getAttribute('data-tech');
    const desc = card.getAttribute('data-desc');
    
    // Attributs spéciaux
    const type = card.getAttribute('data-type');
    const linkCode = card.getAttribute('data-link-code');
    const downloadLink = card.getAttribute('data-download');
    const demoLink = card.getAttribute('data-demo');

    // B. Injection des textes
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-year').innerText = year;
    document.getElementById('modal-duration').innerText = duration;
    document.getElementById('modal-tech').innerText = tech;
    document.getElementById('modal-desc').innerText = desc;

    // C. Gestion intelligente des Boutons
    const btnDownload = document.getElementById('btn-download');
    const btnDemo = document.getElementById('btn-demo');

    // --- CAS SPÉCIAL : PROJET "CARTES" ---
    if (type === 'special-cartes') {
        // Bouton Gauche : "Voir le Code"
        btnDownload.style.display = 'inline-flex';
        btnDownload.innerHTML = '<i class="fa-solid fa-code"></i> Voir le code';
        btnDownload.href = linkCode;
        btnDownload.target = "_blank";
        btnDownload.removeAttribute('download');

        // Bouton Droit : "Lancer la démo" (Fonction JS)
        btnDemo.style.display = 'inline-flex';
        btnDemo.innerHTML = '<i class="fa-solid fa-map"></i> Lancer la démo';
        btnDemo.href = '#';
        btnDemo.onclick = function(e) {
            e.preventDefault();
            ouvrirLesCartes();
        };
    } 
    // --- CAS CLASSIQUE (Tous les autres projets) ---
    else {
        // Bouton Gauche : "Voir le Code" (GitHub)
        btnDownload.innerHTML = '<i class="fa-brands fa-github"></i> Voir le code';
        btnDownload.target = "_blank"; 
        btnDownload.removeAttribute('download'); // On enlève le téléchargement forcé
        
        if (downloadLink && downloadLink !== '#' && downloadLink !== null) {
            btnDownload.href = downloadLink;
            btnDownload.style.display = 'inline-flex';
        } else {
            btnDownload.style.display = 'none';
        }

        // ---------------------------------------------------------
        // Bouton Droit : INTELLIGENT (Aperçu OU Zip)
        // ---------------------------------------------------------
        btnDemo.onclick = null; // IMPORTANT : On nettoie l'événement spécial

        if (demoLink && demoLink !== '#' && demoLink !== null) {
            btnDemo.href = demoLink;
            btnDemo.style.display = 'inline-flex';

            // DÉTECTION ZIP : Si le lien finit par .zip
            if (demoLink.toLowerCase().endsWith('.zip')) {
                btnDemo.innerHTML = '<i class="fa-solid fa-file-zipper"></i> Télécharger le dossier';
                btnDemo.setAttribute('download', ''); // Force le téléchargement
                btnDemo.removeAttribute('target');    // Pas de nouvel onglet blanc
            } 
            // DÉTECTION CLASSIQUE : PDF, Site Web, Image
            else {
                btnDemo.innerHTML = '<i class="fa-solid fa-desktop"></i> Voir un aperçu';
                btnDemo.target = "_blank";            // Nouvel onglet
                btnDemo.removeAttribute('download');
            }

        } else {
            btnDemo.style.display = 'none';
        }
    }

    // D. Afficher la modale
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Bloque le scroll
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

    /* === D. FERMETURE MODALE === */
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
            if (e.target == modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    /* === E. GESTION DU CARROUSEL === */
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    if (slides.length > 0 && nextBtn && prevBtn) {
        let currentSlide = 0;
        const totalSlides = slides.length;

        function showSlide(index) {
            // Retirer la classe active de toutes les slides
            slides.forEach(slide => {
                slide.classList.remove('active');
                slide.style.opacity = '0'; 
                slide.style.pointerEvents = 'none';
            });

            // Calcul de l'index cyclique
            if (index >= totalSlides) currentSlide = 0;
            else if (index < 0) currentSlide = totalSlides - 1;
            else currentSlide = index;

            // Afficher la nouvelle slide
            const activeSlide = slides[currentSlide];
            activeSlide.classList.add('active');
            activeSlide.style.opacity = '1'; 
            activeSlide.style.pointerEvents = 'all';
        }

        nextBtn.addEventListener('click', () => {
            showSlide(currentSlide + 1);
        });

        prevBtn.addEventListener('click', () => {
            showSlide(currentSlide - 1);
        });
    }
});