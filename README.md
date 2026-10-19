# Rin Sithpong — Modern Editorial & Swiss Minimalist Portfolio

A premier, fully responsive personal portfolio website for **Mr. RIN SITHPONG (រិន សិទ្ធិពង្ស)** — certified Lower Secondary School Teacher in Mathematics & Physics, state educator at Damnak Pring Lower Secondary School, and creator of KruHub and school management software systems based in Kandal, Cambodia.

Built strictly with **pure semantic HTML5, modern CSS3 with custom properties, and vanilla JavaScript (ES6+)**. No frontend frameworks, no bundlers, zero external runtime build steps, and strictly zero emojis across the user interface.

---

## 1. Design & Motion System

- **Primary Style:** Modern Editorial Portfolio (expressive typographic hierarchy, generous whitespace, numbered sections, subtle hairline dividers).
- **Secondary Style:** Swiss Minimalist Professional (clean grids, architectural restraint, crisp geometry, clear data presentation).
- **Motion Style:** Coordinated Premium Editorial Motion (short elegant hero entrance sequence, staggered typography reveals, `IntersectionObserver` scroll reveals with graceful fallback, subtle card elevation and image scaling, zero aggressive 3D tilt).
- **Theme Support:** Full Light Mode and Dark Mode with design tokens, OS preference detection, and `localStorage` persistence.
- **Bilingual Architecture:** Instant client-side English ⇄ Khmer language switcher without page reload, custom typographic line-height and letter-spacing for Khmer script (`Kantumruy Pro`), and `localStorage` persistence.
- **Strict Zero-Emoji Rule:** Entire user interface relies purely on geometric vector SVG icons.

---

## 2. Verified Projects & Innovations

The portfolio showcases **9 verified projects** categorized across education technology, school management, and mobile engineering:

1. **KruHub — Classroom Management Platform for Teachers (Flagship)**
   - *Live URL:* `https://kruhub-47766.firebaseapp.com/`
   - *Status:* Implemented & Deployed
   - *Overview:* Classroom management web app created by Rin Sithpong using AI tools to streamline attendance, rosters, and score management for teachers.
2. **BLS Payment Management System**
   - *Live URL:* `https://bls-delta.vercel.app/`
   - *Status:* Implemented & Deployed (PWA)
   - *Overview:* Dedicated tuition and fee payment management platform for Brilliant Life School (BLS), featuring student profile lookups, payment logging, automated invoice generation with `html2canvas`, and financial reports.
3. **BLS Attendance Management System**
   - *Live URL:* `https://bls-attendance.vercel.app/`
   - *Status:* Implemented & Deployed
   - *Overview:* Dynamic QR attendance and student roster tracking platform for Brilliant Life School. Features a 15-second rotating cryptographic nonce on school display boards, camera check-in/out, and administrative UTF-8 CSV exports for Excel.
4. **Teacher Library (បណ្ណាល័យគ្រូបង្រៀន)**
   - *Live URL:* `https://teacher-library-peach.vercel.app/`
   - *Status:* Implemented & Deployed
   - *Overview:* Online exam preparation platform in Khmer for teacher candidates and pedagogy students. Features in-browser sanitized HTML reading (DOMPurify), dual Study and Test modes, interactive question practice with explanation keys, and Cloud Firestore sync.
5. **MusicHub — AI-Powered Offline Music Player**
   - *Status:* Implemented Android Application (v1.0.34 APK architecture)
   - *Overview:* Offline-first Android audio player built with Kotlin and Jetpack Compose. Utilizes AndroidX Media3 (ExoPlayer 1.3.1) with foreground MediaSessionService, a custom 5-band equalizer with bass boost, local Room database, and GitHub Releases auto-updater.
6. **Interactive STEM & Physics Simulation Lab**
   - *Status:* Implemented Educational Resource
   - *Overview:* Curated interactive simulation modules for secondary physics (mechanics, optics, waves) and geometry proofs using GeoGebra and web vectors.
7. **Secondary Mathematics Problem Sets & Exam Collections**
   - *Status:* Implemented Teaching Resource
   - *Overview:* Standardized exam questions, chapter exercises, and step-by-step solution rubrics tailored to Grade 7–9 students.
8. **Virtual Classroom & Telegram Learning Community**
   - *Live Link:* `https://t.me/Sithpong`
   - *Status:* Active Community
   - *Overview:* Active online learning community on Telegram and Zoom providing homework troubleshooting, math drills, and peer discussions.
9. **Student Grade Tracking & Academic Analytics Tool**
   - *Status:* Implemented Utility
   - *Overview:* Automated grade calculation workbook utilizing advanced formulas and visualization to analyze class performance trends.

---

## 3. Verified Personal Information & Credentials

- **Name:** Mr. RIN SITHPONG (លោក រិន សិទ្ធិពង្ស)
- **Role:** Lower Secondary School Teacher (Mathematics & Physics)
- **Appointment:** Appointed State Teacher at Damnak Pring Lower Secondary School, Ponhea Lueu, Kandal Province
- **Pedagogical Accreditation:** Certified Lower Secondary Educator by MoEYS via Regional Teacher Training Center (RTTC), Kandal
- **Higher Education:**
  - Bachelor of Mathematics (CUS), Nov 2023 – Present
  - Foundation Studies in Digital Technology (CADT Year 1 Completed), Nov 2023 – Aug 2024
  - High School Diploma (Bac II Grade B) & French Baccalaureate (Hun Sen Serypheap High School), 2020 – 2023
- **Languages:** Khmer (Native), English (B2 level), French (Bilingual Baccalaureate Mention Francophone)
- **Email:** `sithpongrin4@gmail.com`
- **Telegram / Phone:** `+855 88 567 0036` (`@Sithpong`)
- **Location:** Prek Ruessei, Ta Khmau City, Kandal Province, Cambodia

---

## 4. File Structure

```text
Rin-Sithpong-portfolio-redesigned/
├── index.html                           # Semantic HTML5 markup (Editorial structure)
├── style.css                            # Complete CSS design tokens, themes & motion
├── script.js                            # Theme, bilingual i18n, scroll & form controllers
├── favicon.svg                          # Geometric RS monogram favicon
├── .gitignore                           # Git ignore rules
├── README.md                            # Documentation & project guide
├── PORTFOLIO_CONTENT_AUDIT.md           # Comprehensive verified content inventory
├── Resume_RIN_SITHPONG.pdf              # Official resume document (PDF)
├── Resume_RIN_SITHPONG.docx             # Official resume document (Word)
├── Photo/                               # High-resolution original source photos
│   ├── rin_sithpong_photo.png
│   ├── KOL_SARAVUTH_Photo.jpg
│   └── SAT_SOLINA_Photo.jpg
└── assets/
    ├── documents/
    │   └── Resume_RIN_SITHPONG.pdf      # Downloadable resume asset
    ├── mentors/
    │   ├── KOL_SARAVUTH_Photo.jpg       # Referee photo: Kol Saravuth
    │   └── SAT_SOLINA_Photo.jpg         # Referee photo: Sat Solina
    ├── profile/
    │   ├── rin_sithpong_photo.png       # Hero portrait image
    │   ├── rin_sithpong_avatar.png      # Header & footer circular monogram avatar
    │   └── rin_sithpong_thumb.png       # Open Graph & Twitter card thumbnail
    └── projects/
        ├── kruhub_screenshot.png        # KruHub preview screenshot
        ├── kruhub_preview.svg           # KruHub illustration
        ├── bls_payment_logo.png         # BLS Payment logo
        ├── bls_attendance_preview.png   # BLS Attendance logo/preview
        ├── teacher_library_cover.jpg    # Teacher Library textbook cover
        ├── musichub_preview.svg         # MusicHub Android player vector illustration
        ├── stem_physics_sim.svg         # Physics simulation illustration
        ├── math_question_bank.svg       # Math exam bank illustration
        ├── online_learning_hub.svg      # Telegram classroom illustration
        └── grade_analytics.svg          # Grade tracking workbook illustration
```

---

## 5. How to Run & Preview Locally

Because this project is built exclusively with vanilla web standards, it requires zero installation or compilation steps:

### Option A: Direct Browser Preview
Double-click `index.html` or drag it into any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).

### Option B: Local HTTP Server (Python)
Open PowerShell or Terminal inside `Rin-Sithpong-portfolio-redesigned/`:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

---

## 6. Verification & Quality Assurance Checklist

- [x] Pure HTML5, CSS3, Vanilla JS (zero bundlers, zero dependencies).
- [x] Read-only integrity of `Rin-Sithpong-portfolio-main/` strictly preserved.
- [x] All 9 projects included (Flagship + 4 requested + 4 existing).
- [x] Verified URLs tested and active.
- [x] Bilingual English ⇄ Khmer complete dictionary coverage.
- [x] Light Mode & Dark Mode with smooth transitions and persistence.
- [x] Full accessibility with visible focus outlines and `prefers-reduced-motion` support.
- [x] Responsive layout tested across 320px, 375px, 768px, 1024px, 1440px+.
- [x] Zero emojis anywhere in the interface.
- [x] No secrets or credentials exposed.

---

## License

&copy; 2026 Rin Sithpong. All rights reserved.
