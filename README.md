# Portfolio — Glenn Madzou-A-Mière

> Portfolio personnel présentant mon parcours académique, mes projets Data & Dev, et mes centres d'intérêt.  
> Site statique HTML/CSS/JS — aucun framework back-end.

---

## 🔗 Aperçu

| Page | Description |
|---|---|
| `index.html` | Page d'accueil : présentation, slider de projets, hobbies, contact |
| `parcours.html` | Frise chronologique interactive (formations, stages, alternance) |
| `projets.html` | Grille de projets classés par année avec modales de détail |
| `hobbies.html` | Galeries photo par centre d'intérêt |

---

## 🗂️ Structure du projet

```
Portfolio_Glenn_MADZOU-A-MIERE/
├── index.html           # Page d'accueil
├── parcours.html        # Timeline parcours
├── projets.html         # Grille de projets
├── hobbies.html         # Hobbies et passions
│
├── css/
│   ├── global.css       # Styles globaux (navbar, hero, footer, contact...)
│   ├── Timeline.css     # Styles spécifiques à la frise chronologique
│   └── hobbies.css      # Anciens styles hobbies (remplacés par global.css)
│
├── js/
│   ├── main.js          # Logique principale (slider, modale projets, burger menu)
│   ├── Timeline.js      # Animation scroll de la timeline
│   └── age.js           # Calcul dynamique de l'âge
│
├── image/               # Images locales du portfolio
│   ├── photoGlenn.jpg        # Photo de profil
│   ├── auto-ecoles.jpg       # Capture projet Analyse Auto-Écoles
│   ├── sold_house.jpg        # Image projet Immobilier
│   ├── PUN_01.jpg            # Capture projet IUT Poitiers
│   ├── montage.jpg           # Image hobby montage vidéo
│   ├── echecsIndex.webp      # Image hobby échecs
│   ├── iutniort.webp         # Photo IUT Niort
│   ├── django-datascientest.png    # Capture projet Django
│   ├── KnimeIMG.jpg          # Capture projet KNIME
│   ├── Gradio-Icon.png       # Logo Gradio
│   ├── TalendLogoCoral.png   # Logo Talend
│   ├── power BI.jpg          # Capture projet Power BI
│   ├── python-folium.png     # Capture projet Folium
│   └── chess_capture stats.png    # Capture stats Chess.com
│
├── projets/             # Fichiers de démo hébergés localement
│   ├── Info3_Carte1_Points_Corrigee.html     # Carte interactive Folium
│   ├── Info3_Carte2_Departements_StyleImage.html  # Carte départements
│   ├── exemplesae1(2022).pdf  # Aperçu projet 2022
│   └── ...
│
└── videos/              # Vidéos éventuelles
```

---

## 🛠️ Stack technique

| Catégorie | Technologie |
|---|---|
| Structure | HTML5 sémantique |
| Style | CSS3 vanilla (variables CSS, flexbox, grid, animations) |
| Interactivité | JavaScript ES6 vanilla |
| Icônes | [Font Awesome 6.4](https://fontawesome.com/) |
| Logos outils | [Devicon v2.16](https://devicons.github.io/devicon/) |
| Polices | [Google Fonts](https://fonts.google.com/) — Cardo + Pathway Gothic One |
| Cartes | [Folium](https://python-visualization.github.io/folium/) (HTML généré) |

---

## 🎨 Fonctionnalités notables

- **Frise chronologique animée** (scroll-triggered, alternée gauche/droite)
- **Logos d'outils avec tooltip CSS pur** dans les cartes de parcours
- **Modales de projets** dynamiques (gestion GitHub, démo, ZIP)
- **Slider de projets** sur l'accueil
- **Navbar glassmorphism** avec underline animé au hover
- **Liens de localisation** stylisés en pill avec icône épingle
- **Galeries photo** par hobby (responsive grid)
- **Calcul d'âge dynamique** en JavaScript
- **Design responsive** (desktop, tablette, mobile)

---

## 🖼️ Sources des images

### Images locales (`/image/`)
| Fichier | Source |
|---|---|
| `photoGlenn.jpg` | Photo personnelle |
| `auto-ecoles.jpg` | Capture d'écran personnelle (projet Folium) |
| `sold_house.jpg` | Capture d'écran personnelle |
| `PUN_01.jpg` | Capture d'écran personnelle (tableau de bord IUT) |
| `montage.jpg` | Photo personnelle |
| `echecsIndex.webp` | Photo personnelle |
| `iutniort.webp` | Photo personnelle — IUT Poitiers site de Niort |
| `django-datascientest.png` | Capture d'écran du projet Django |
| `KnimeIMG.jpg` | Capture d'écran KNIME Analytics |
| `Gradio-Icon.png` | Logo officiel Gradio — [gradio.app](https://gradio.app) |
| `TalendLogoCoral.png` | Logo officiel Talend — [talend.com](https://talend.com) |
| `power BI.jpg` | Capture d'écran Microsoft Power BI |
| `python-folium.png` | Capture d'écran personnelle (projet Python/Folium) |
| `chess_capture stats.png` | Capture d'écran Chess.com |

### Images externes (Unsplash — gratuites, libres de droits)
Utilisées dans `hobbies.html` et `projets.html` via URL directe :

| Usage | Lien Unsplash |
|---|---|
| Basket-ball (accueil) | [photo-1546519638-68e109498ffc](https://unsplash.com/photos/basketball-game-xDN-UXo9seA) |
| Montage vidéo — timeline | [photo-1574717024653-61fd2cf4d44d](https://unsplash.com) |
| Montage vidéo — setup | [photo-1535016120720-40c6874c3b13](https://unsplash.com) |
| Montage vidéo — color grading | [photo-1626814026160-2237a95fc5a0](https://unsplash.com) |
| Basket — panier | [photo-1546519638-68e969f45e31](https://unsplash.com) |
| Basket — match | [photo-1518063319789-7217e6706b04](https://unsplash.com) |
| Basket — terrain urbain | [photo-1628779238951-be2c9f25654b](https://unsplash.com) |
| Basket — ballon | [photo-1574602685244-884d6b622b7a](https://unsplash.com) |
| Échecs — échiquier | [photo-1529699211952-734e80c4d42b](https://unsplash.com) |
| Échecs — stratégie | [photo-1586165368502-1bad197a6461](https://unsplash.com) |
| Projet Fil Rouge | [photo-1460925895917-afdab827c52f](https://unsplash.com) |
| Dashboard Python | [photo-1555066931-4365d14bab8c](https://unsplash.com) |

> **Licence Unsplash** : Images gratuites pour usage personnel et commercial, sans attribution requise. Voir [unsplash.com/license](https://unsplash.com/license).

---

## 🚀 Lancer localement

Ce portfolio est un site **100% statique**. Aucune installation requise.

**Option 1 — Double-clic**  
Ouvrir `index.html` directement dans un navigateur.

**Option 2 — Live Server (recommandé)**  
Avec VS Code + extension [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) :
```
Clic droit sur index.html → "Open with Live Server"
```

**Option 3 — Python HTTP server**
```bash
python -m http.server 8000
# Puis ouvrir http://localhost:8000
```

---

## 👤 Auteur

**Glenn Madzou-A-Mière**  
Master 2 MSI — Parcours SIA — Jean Moulin Lyon III  
📧 [glenn.madzou-a-miere@univ-lyon3.fr](mailto:glenn.madzou-a-miere@univ-lyon3.fr)  
🔗 [LinkedIn](https://www.linkedin.com/in/glenn-madzou-a-miere)  
📦 [GitHub](https://github.com/Glenn-MAM)

---

*© 2026 Glenn Madzou-A-Mière — Tous droits réservés.*
