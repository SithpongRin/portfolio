/**
 * RIN SITHPONG — PORTFOLIO APPLICATION JAVASCRIPT
 * Modern Editorial & Swiss Minimalist Engine
 * Pure Vanilla ES6+ without external frameworks or dependencies.
 *
 * Capabilities:
 *  - Dual Theme Controller (Light Mode / Dark Mode) with LocalStorage & OS Media Query
 *  - Seamless Bilingual Engine (English ⇄ Khmer) with Persistent LocalStorage
 *  - Coordinated ScrollSpy & Reading Progress Tracker
 *  - Accessible Mobile Navigation Drawer
 *  - IntersectionObserver Scroll Reveal Animations (with Reduced-Motion Graceful Fallback)
 *  - Interactive Client-Side Contact Validation with Localized Error Strings & Mailto Fallback
 *  - Dynamic Date & Accessible Micro-interactions
 *  - Zero Emojis Enforced Across All Modules
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. BILINGUAL TRANSLATIONS DICTIONARY (ENGLISH & KHMER)
     ========================================================================== */
  const translations = {
    en: {
      skip_to_content: "Skip to main content",
      logo_subtitle: "Math & Physics Educator",
      
      // Navigation
      nav_about: "About",
      nav_skills: "Skills",
      nav_experience: "Experience",
      nav_education: "Education",
      nav_projects: "Projects",
      nav_stem_lab: "3D Lab",
      nav_mentors: "Mentors",
      nav_contact: "Contact",

      // 3D Interactive HUD & Scene
      hud_mode_label: "3D STEM SIMULATION:",
      hud_btn_geo: "Geometry",
      hud_btn_wave: "Wave Field",
      hud_btn_particles: "Particles",
      hud_badge_live: "ACTIVE 3D WEBGL",
      hud_cam_hint: "Drag to Rotate 3D • Scroll to Zoom",

      // 3D Holographic Portrait
      holo_status: "LICENSED STATE TEACHER",
      holo_school: "DAMNAK PRING SCHOOL",
      holo_focus: "MATH & PHYSICS",
      holo_edtech: "KRUHUB CREATOR",

      // Hero Section
      hero_badge: "Appointed State Teacher • Regional Teacher Training Center (RTTC), Kandal",
      hero_kicker: "Curriculum Pedagogy & STEM Technology",
      hero_greeting: "Hello, I am",
      hero_name: "RIN SITHPONG",
      hero_role: "Lower Secondary Teacher (Math & Physics)",
      hero_intro: "Certified state educator trained at Regional Teacher Training Center (RTTC), Kandal, currently pursuing advanced mathematics at CUS, and creator of <a href='https://kruhub-47766.firebaseapp.com/' target='_blank' rel='noopener noreferrer'>KruHub</a>. Passionate about student-centered instruction, digital classroom innovation, and making complex STEM concepts intuitive, practical, and engaging.",
      tag_kruhub: "Creator of KruHub (Firebase App)",
      tag_math_physics: "Math & Physics Specialist",
      tag_digital_pedagogy: "Digital STEM Pedagogy",
      tag_trilingual: "Khmer • English • French",
      hero_btn_projects: "Explore Selected Works",
      hero_btn_contact: "Get In Touch",
      hero_download_cv: "Download Resume (PDF)",
      badge_appointed: "State Appointed",
      badge_appointed_sub: "Damnak Pring School",
      badge_rttc: "RTTC Kandal",
      badge_rttc_sub: "Certified Teacher",

      // Section Headings & Editorial Numbers
      idx_about: "01 / ABOUT",
      about_subtitle: "Background & Pedagogy",
      about_title: "About Rin Sithpong",
      about_lead: "Transforming STEM Education Through Conceptual Clarity & Digital Innovation.",
      about_p1: "I am Sithpong, a certified Lower Secondary Teacher in Mathematics and Physics, trained at Regional Teacher Training Center (RTTC), Kandal and officially appointed as a state educator to Damnak Pring Lower Secondary School in Ponhea Lueu, Kandal Province. Beyond traditional classroom instruction, I am the creator of the <a href='https://kruhub-47766.firebaseapp.com/' target='_blank' rel='noopener noreferrer'>KruHub</a> web app, developed to help teachers streamline attendance, rosters, and score management efficiently.",
      about_p2: "My teaching philosophy centers on active engagement and student-focused pedagogy. In my teaching practice, I prioritize genuine student understanding above all else, encouraging active questions, reasoning, and practical problem-solving. By combining higher mathematics from CUS, foundational computing from CADT (Linear Algebra, Probability & Statistics, Discrete Mathematics, IT Essentials, and C Programming), and modern AI capabilities, I created the KruHub web app and regularly leverage digital tools to make secondary STEM lessons interactive, practical, and enjoyable for students.",
      about_p3: "With a multilingual foundation in Khmer, English (B2 level), and a French Bilingual Baccalaureate, I strive to inspire secondary students to develop critical thinking, problem-solving skills, and a genuine curiosity for scientific discovery.",
      about_btn_cv: "Official Resume (PDF)",
      about_btn_exp: "View Career History",

      // Personal Metadata Card
      info_title: "Personal Information",
      info_name_lbl: "Full Name:",
      info_name_val: "Mr. RIN SITHPONG (រិន សិទ្ធិពង្ស)",
      info_role_lbl: "Current Role:",
      info_role_val: "Lower Secondary Teacher (Math & Physics)",
      info_school_lbl: "Appointment:",
      info_school_val: "Damnak Pring Lower Secondary School",
      info_location_lbl: "Location:",
      info_location_val: "Prek Ruessei, Ta Khmau, Kandal, Cambodia",
      info_degree_lbl: "Academic Focus:",
      info_degree_val: "<span class='text-nowrap'>B.Math (CUS)</span> • <span class='text-nowrap'>RTTC Kandal</span><br><span class='text-nowrap'>Foundation Year (CADT Y1)</span> • <span class='text-nowrap'>Bac II (Grade B)</span>",
      info_languages_lbl: "Languages:",
      info_languages_val: "<span class='text-nowrap'>Khmer (Native)</span> • <span class='text-nowrap'>English (B2)</span> • <span class='text-nowrap'>French (Bilingual Bac)</span>",
      info_interests_lbl: "Interests:",
      info_interests_val: "KruHub Web App, AI Tools (Antigravity, Codex), STEM Pedagogy, GeoGebra",
      cred_title: "National Teaching License",
      cred_desc: "Certified by the Ministry of Education, Youth and Sport (MoEYS) via Regional Teacher Training Center (RTTC), Kandal.",

      // Skills Section
      idx_skills: "02 / SKILLS & EXPERTISE",
      skills_subtitle: "Core Competencies",
      skills_title: "Technical & Pedagogical Skills",
      cat_pedagogy_title: "Teaching & Pedagogy",
      cat_pedagogy_desc: "Student-centered methodologies, interactive instruction, and national curriculum mastery for Grades 7–9.",
      sk_math: "Secondary Mathematics",
      sk_phys: "Secondary Physics",
      sk_lesson: "Structured Lesson Planning",
      sk_assess: "Formative & Summative Assessment",
      sk_mgmt: "Classroom Management",
      sk_exam: "National Exam Preparation",

      cat_edtech_title: "EdTech & Virtual Classrooms",
      cat_edtech_desc: "Leveraging digital tools to create dynamic, interactive, and accessible learning experiences for remote and hybrid settings.",
      sk_virtual: "Zoom & Google Meet Classrooms",
      sk_telegram: "Telegram Learning Communities",
      sk_geogebra: "Interactive STEM Simulations",
      sk_worksheets: "Digital Educational Worksheets",
      sk_slides: "Multimedia Slide Presentations",
      sk_online_eval: "Digital Quizzes & Feedback",

      cat_tech_title: "Computational Foundation & Applied AI",
      cat_tech_desc: "Solid foundation in mathematics and computing from CADT, combined with practical use of AI tools (such as Antigravity and Codex) to build KruHub and streamline everyday teaching.",
      sk_msoffice: "Microsoft Office Suite (Word, Excel, PPT)",
      sk_grades: "Student Grade Tracking & Analytics",
      sk_algo: "Linear Algebra & Applied Statistics",
      sk_python: "C Programming & Discrete Mathematics",
      sk_data: "AI Tools (Antigravity, Codex & Teaching Aids)",

      cat_leadership_title: "Communication & Languages",
      cat_leadership_desc: "Strong interpersonal communication, bilingual classroom instruction, and student mentorship.",
      sk_km: "Khmer: Native Proficiency",
      sk_en: "English: Upper-Intermediate (B2)",
      sk_fr: "French: Bilingual Stream (Bac Francophone)",
      sk_mentor: "Individual Student Academic Mentoring",
      sk_collab: "Collaborative Teamwork & Ethics",
      sk_time: "Structured Time & Curriculum Management",

      // Experience Section
      idx_experience: "03 / EXPERIENCE",
      exp_subtitle: "Career Milestones",
      exp_title: "Teaching Experience",
      exp1_duration: "Dec 2025 – Mar 2026",
      exp1_location: "Ta Khmau, Kandal",
      exp1_role: "Teaching Intern — Mathematics & Physics",
      exp1_org: "Hun Sen Serypheap High School",
      exp1_desc: "Conducted comprehensive Mathematics and Physics instruction for secondary students in accordance with the national curriculum. Designed structured lesson plans, interactive worksheets, and guided exercises. Fostered collaborative group work and systematically evaluated student academic progress.",

      exp2_duration: "Nov 2024 – Aug 2025",
      exp2_location: "Ta Khmau, Kandal",
      exp2_role: "Teaching Intern — Secondary Education",
      exp2_org: "Hun Sen TaKhmau High School",
      exp2_desc: "Assisted senior educator mentors in delivering secondary Mathematics and Physics classes across two pedagogical terms. Applied student-centered methodologies, managed classroom dynamics, performed homework assessments, and provided individualized academic support to students requiring reinforcement.",

      exp3_duration: "2023 – 2025",
      exp3_location: "Remote / Online",
      exp3_role: "Online Mathematics Educator (Part-Time)",
      exp3_org: "Independent Educational Practice",
      exp3_desc: "Delivered interactive online Mathematics tutoring sessions via Zoom, Google Meet, and Telegram. Developed digital instructional slides, problem-solving rubrics, and practice exam simulations to help secondary students build strong mathematical skills.",

      // Education Section
      idx_education: "04 / EDUCATION",
      edu_subtitle: "Academic Foundation",
      edu_title: "Education & Credentials",
      edu1_year: "Nov 2023 – Present",
      edu1_degree: "Bachelor of Mathematics",
      edu1_school: "Cambodia University of Specialties (CUS)",
      edu1_location: "Phnom Penh, Cambodia",
      edu1_desc: "Pursuing advanced mathematical analysis, pure mathematics, algebra, calculus, geometry, and applied mathematical modeling to deepen pedagogical mastery.",

      edu2_year: "Nov 2024 – Jun 2026",
      edu2_degree: "Specialized Teaching Certificate (Lower Secondary Math & Physics)",
      edu2_school: "Regional Teacher Training Center (RTTC), Kandal",
      edu2_location: "Kandal Province, Cambodia",
      edu2_desc: "National professional pedagogical training covering STEM education, classroom leadership, and lesson delivery. Appointed as an official state teacher to Damnak Pring Lower Secondary School.",

      edu3_year: "Nov 2023 – Aug 2024",
      edu3_degree: "Foundation Studies in Digital Technology (Year 1 Completed)",
      edu3_school: "Cambodia Academy of Digital Technology (CADT)",
      edu3_location: "Phnom Penh, Cambodia",
      edu3_desc: "Completed foundation year coursework focusing on Linear Algebra, Probability & Statistics, Discrete Mathematics, IT Essentials, and C Programming.",

      edu4_year: "Nov 2020 – Oct 2023",
      edu4_degree: "High School Diploma (Bac II Grade B) & French Baccalaureate",
      edu4_school: "Hun Sen Serypheap High School",
      edu4_location: "Ta Khmau, Kandal, Cambodia",
      edu4_desc: "National Baccalaureate Examination Grade B. Awarded Diplôme du Baccalauréat – Mention Francophone (Grade E) following 6 consecutive years of French bilingual stream education (Grades 7–12).",

      // Projects Section
      idx_projects: "05 / SELECTED WORKS",
      proj_subtitle: "Innovation & Educational Engineering",
      proj_title: "Featured Projects & Platforms",
      proj_lead: "A selection of educational web applications, administrative software systems, and instructional tools built to solve practical needs in schools and STEM classrooms.",

      // Flagship KruHub
      proj_kruhub_badge: "Flagship Web App",
      proj_kruhub_title: "KruHub — Classroom Management Platform for Teachers",
      proj_kruhub_desc: "A classroom management web application created with the assistance of AI tools to solve everyday teaching needs—streamlining student attendance, roster tracking, grade calculations, and classroom utilities for educators.",
      proj_kruhub_btn: "Open KruHub Live",

      // Project A: BLS Payment
      proj_bls_pay_badge: "School EdTech & Finance",
      proj_bls_pay_title: "BLS Payment Management System",
      proj_bls_pay_desc: "A dedicated tuition and fee management platform for Brilliant Life School (BLS). Facilitates student profile lookups, payment transaction recording, automated digital invoice generation with html2canvas, and financial summary reporting in a responsive PWA.",
      proj_bls_pay_btn: "Open Live System",

      // Project B: BLS Attendance
      proj_bls_att_badge: "Security & Attendance",
      proj_bls_att_title: "BLS Attendance Management System",
      proj_bls_att_desc: "Dynamic QR attendance and student roster tracking platform for Brilliant Life School. Features a 15-second rotating cryptographic nonce on the school board to eliminate proxy attendance, camera scan check-in/out, and administrative UTF-8 CSV exports for Excel.",
      proj_bls_att_btn: "Open Live System",

      // Project C: MusicHub
      proj_musichub_badge: "Android Application",
      proj_musichub_title: "MusicHub — AI-Powered Offline Music Player",
      proj_musichub_desc: "Personal offline-first Android audio player built with Kotlin and Jetpack Compose. Utilizes AndroidX Media3 (ExoPlayer 1.3.1) with foreground MediaSessionService, a custom 5-band equalizer with bass boost, local Room SQLite database, and automated in-app updates via GitHub Releases.",
      proj_musichub_status: "Native Android • APK v1.0.34",

      // Project D: Teacher Library
      proj_teacher_lib_badge: "Exam-Prep Platform",
      proj_teacher_lib_title: "Teacher Library (បណ្ណាល័យគ្រូបង្រៀន)",
      proj_teacher_lib_desc: "An online examination preparation library for pedagogical candidates and student teachers in Cambodia. Delivers in-browser sanitized HTML reading (DOMPurify), dual Study and Test modes, interactive question practice with explanation keys, and Cloud Firestore sync.",
      proj_teacher_lib_btn: "Open Library Live",

      // Existing Project 1: STEM Physics Sim
      proj1_badge: "Interactive STEM",
      proj1_title: "Interactive STEM & Physics Simulation Lab",
      proj1_desc: "Curated interactive simulation modules designed for secondary school physics (classical mechanics, optics, wave behavior) and geometry proofs, allowing students to visualize theoretical principles dynamically.",

      // Existing Project 2: Math Question Bank
      proj2_badge: "Teaching Resources",
      proj2_title: "Secondary Math Problem Sets & Exam Collections",
      proj2_desc: "A structured compilation of standardized exam questions, chapter-by-chapter exercises, and detailed step-by-step solution rubrics tailored to Grade 7-9 students.",

      // Existing Project 3: Virtual Classroom
      proj3_badge: "Virtual Community",
      proj3_title: "Virtual Classroom & Telegram Learning Community",
      proj3_desc: "An active online learning community providing homework troubleshooting, daily math drills, conceptual video clips, and peer discussions for secondary students.",

      // Existing Project 4: Grade Analytics
      proj4_badge: "Productivity & Data",
      proj4_title: "Student Grade Tracking & Academic Analytics Tool",
      proj4_desc: "An automated grade calculation and student progress tracking workbook utilizing advanced formulas and visualization to analyze class performance trends and identify students needing early intervention.",

      // Project Action Buttons
      proj_btn_demo: "Live Showcase",
      proj_btn_view: "View Material",
      proj_btn_telegram: "Join Community",
      proj_btn_inquire: "Inquire",
      proj_btn_details: "View Details",

      // Interactive 3D STEM Lab Section
      idx_stem_lab: "06 / 3D STEM LAB",
      stem_lab_subtitle: "Interactive 3D Physics & Math Laboratory",
      stem_lab_title: "Interactive 3D STEM Simulation Lab",
      stem_lab_lead: "Real-time interactive 3D simulations demonstrating mathematical surfaces, wave harmonics, and physics principles taught in secondary STEM curricula.",
      stem_ctrl_title: "Simulation Parameters",
      stem_lbl_freq: "Wave Frequency (f):",
      stem_lbl_amp: "Wave Amplitude (A):",
      stem_lbl_speed: "Propagation Speed (v):",
      stem_lbl_preset: "Simulation Presets:",
      stem_preset_harmonic: "Harmonic Wave",
      stem_preset_interference: "Interference Field",
      stem_preset_standing: "Standing Resonance",
      stem_math_title: "Governing Physical Laws",
      stem_reset_cam: "Reset Camera View",
      stem_stat_fps: "Simulation Rate",

      // Mentors Section
      idx_mentors: "07 / ENDORSEMENTS",
      mentors_subtitle: "Professional Endorsement",
      mentors_title: "Academic Mentors & Referees",
      mentor1_title: "Lower Secondary Mathematics Teacher & Mentor",
      mentor1_org: "Hun Sen Serypheap High School",
      mentor2_title: "Lower Secondary Physics Teacher & Mentor",
      mentor2_org: "Hun Sen TaKhmau High School",

      // Contact Section
      idx_contact: "08 / CONTACT",
      contact_subtitle: "Direct Communication",
      contact_title: "Get In Touch",
      contact_heading: "Let's Connect & Collaborate",
      contact_intro: "Whether you are looking for an energetic STEM educator, curriculum collaboration, educational technology workshops, or tutoring support, feel free to reach out directly.",
      contact_email_lbl: "Email",
      contact_tg_lbl: "Telegram & Phone",
      contact_loc_lbl: "Location",
      contact_loc_val: "Prek Ruessei, Ta Khmau, Kandal Province, Cambodia",
      
      // Form Fields & Status
      form_title: "Send a Direct Message",
      form_desc: "Please fill out this form and I will respond to your inquiry promptly.",
      form_name_lbl: "Your Name",
      form_email_lbl: "Email Address",
      form_subject_lbl: "Subject",
      form_message_lbl: "Message",
      form_submit_btn: "Send Message",
      form_success: "Thank you for reaching out! Your message has been prepared successfully. I will get back to you shortly.",
      form_sending: "Processing message...",

      // Footer
      footer_bio: "Certified Lower Secondary Teacher in Mathematics & Physics. Dedicated to modern pedagogy, student academic success, and technology-enhanced STEM instruction.",
      footer_links_title: "Quick Navigation",
      footer_connect_title: "Direct Inquiries",
      footer_rights: "All rights reserved.",
      footer_editorial_note: "Modern Editorial Portfolio • Swiss Minimalist"
    },

    km: {
      skip_to_content: "រំលងទៅមាតិកាចម្បង",
      logo_subtitle: "គ្រូបង្រៀនគណិតវិទ្យា និងរូបវិទ្យា",
      
      // Navigation
      nav_about: "អំពីខ្ញុំ",
      nav_skills: "ជំនាញ",
      nav_experience: "បទពិសោធន៍",
      nav_education: "ការអប់រំ",
      nav_projects: "ស្នាដៃ",
      nav_stem_lab: "បន្ទប់ពិសោធន៍ 3D",
      nav_mentors: "គ្រូណែនាំ",
      nav_contact: "ទំនាក់ទំនង",

      // 3D Interactive HUD & Scene
      hud_mode_label: "ការក្លែងធ្វើ 3D STEM៖",
      hud_btn_geo: "ធរណីមាត្រ",
      hud_btn_wave: "ដែនរលក",
      hud_btn_particles: "ភាគល្អិត",
      hud_badge_live: "ដំណើរការ 3D WEBGL",
      hud_cam_hint: "អូសដើម្បីបង្វិល 3D • រំកិលដើម្បីពង្រីក",

      // 3D Holographic Portrait
      holo_status: "គ្រូបង្រៀនរដ្ឋពេញសិទ្ធិ",
      holo_school: "អនុវិទ្យាល័យដំណាក់ព្រីង",
      holo_focus: "គណិតវិទ្យា & រូបវិទ្យា",
      holo_edtech: "ស្ថាបនិក KRUHUB",

      // Hero Section
      hero_badge: "គ្រូបង្រៀនក្របខ័ណ្ឌរដ្ឋ • មជ្ឈមណ្ឌលគរុកោសល្យភូមិភាគខេត្តកណ្តាល",
      hero_kicker: "គរុកោសល្យ និងបច្ចេកវិទ្យាអប់រំ STEM",
      hero_greeting: "សួស្តី! ខ្ញុំបាទឈ្មោះ",
      hero_name: "រិន សិទ្ធិពង្ស",
      hero_role: "គ្រូបង្រៀនកម្រិតអនុវិទ្យាល័យ (គណិតវិទ្យា និងរូបវិទ្យា)",
      hero_intro: "ខ្ញុំជាគ្រូបង្រៀនក្របខ័ណ្ឌរដ្ឋឯកទេស គណិតវិទ្យា និងរូបវិទ្យា បញ្ចប់ការបណ្តុះបណ្តាលពីមជ្ឈមណ្ឌលគរុកោសល្យភូមិភាគខេត្តកណ្តាល និងកំពុងបន្តរៀនបរិញ្ញាបត្រគណិតវិទ្យានៅ CUS។ ខ្ញុំជាអ្នកបង្កើតគេហទំព័រ <a href='https://kruhub-47766.firebaseapp.com/' target='_blank' rel='noopener noreferrer'>KruHub</a> ដោយប្រើប្រាស់ AI ជួយសម្រួលដល់ការងារបង្រៀន ដើម្បីឱ្យការរៀនគណិត និងរូបវិទ្យាកាន់តែងាយយល់ និងសប្បាយរៀន។",
      tag_kruhub: "អ្នកបង្កើតគេហទំព័រ KruHub (Firebase App)",
      tag_math_physics: "ឯកទេសគណិត និងរូបវិទ្យា",
      tag_digital_pedagogy: "គរុកោសល្យ និងបច្ចេកវិទ្យាអប់រំ",
      tag_trilingual: "ភាសាខ្មែរ • អង់គ្លេស • បារាំង",
      hero_btn_projects: "មើលស្នាដៃសំខាន់ៗ",
      hero_btn_contact: "ទាក់ទងមកខ្ញុំ",
      hero_download_cv: "ទាញយកប្រវត្តិរូបសង្ខេប (PDF)",
      badge_appointed: "គ្រូក្របខ័ណ្ឌរដ្ឋ",
      badge_appointed_sub: "អនុវិទ្យាល័យដំណាក់ព្រីង",
      badge_rttc: "គរុកោសល្យភូមិភាគ",
      badge_rttc_sub: "ខេត្តកណ្តាល",

      // Section Headings & Editorial Numbers
      idx_about: "០១ / អំពីខ្ញុំ",
      about_subtitle: "ប្រវត្តិ និងការងារ",
      about_title: "អំពីខ្ញុំ",
      about_lead: "បង្រៀនដោយយកចិត្តទុកដាក់លើការយល់ដឹងរបស់សិស្ស និងប្រើប្រាស់បច្ចេកវិទ្យាដើម្បីឱ្យមេរៀនងាយស្រួលយល់។",
      about_p1: "ខ្ញុំឈ្មោះ រិន សិទ្ធិពង្ស ជាគ្រូបង្រៀនអនុវិទ្យាល័យ ឯកទេសគណិតវិទ្យា និងរូបវិទ្យា បញ្ចប់ការបណ្តុះបណ្តាលពីមជ្ឈមណ្ឌលគរុកោសល្យភូមិភាគខេត្តកណ្តាល ហើយបច្ចុប្បន្នជាគ្រូក្របខ័ណ្ឌរដ្ឋនៅអនុវិទ្យាល័យដំណាក់ព្រីង ស្រុកពញាឮ ខេត្តកណ្តាល។ ក្រៅពីការបង្រៀន ខ្ញុំបានប្រើ AI បង្កើតគេហទំព័រ <a href='https://kruhub-47766.firebaseapp.com/' target='_blank' rel='noopener noreferrer'>KruHub</a> សម្រាប់ជួយសម្រួលដល់លោកគ្រូអ្នកគ្រូក្នុងការកត់វត្តមាន គ្រប់គ្រងបញ្ជីឈ្មោះ បញ្ចូលពិន្ទុ និងឧបករណ៍ជំនួយក្នុងថ្នាក់រៀនឱ្យកាន់តែលឿន។",
      about_p2: "ក្នុងការបង្រៀន ខ្ញុំតែងតែយកចិត្តទុកដាក់លើសិស្សជាចម្បង ដោយលើកទឹកចិត្តឱ្យពួកគាត់ហ៊ានសួរ ហ៊ានបញ្ចេញមតិ និងអនុវត្តផ្ទាល់។ តាមរយៈចំណេះដឹងគណិតវិទ្យានៅ CUS និងមុខវិជ្ជាដែលធ្លាប់រៀននៅ CADT (Linear Algebra, ស្ថិតិ, Discrete Math, កូដ C) រួមជាមួយការចេះប្រើប្រាស់ AI ខ្ញុំបានយកបច្ចេកវិទ្យាមកជួយបង្កើតសន្លឹកកិច្ចការ និងគំរូពិសោធន៍ ដើម្បីឱ្យសិស្សមើលឃើញរូបភាពច្បាស់ និងយល់ពីប្រភពនៃរូបមន្តនីមួយៗ។",
      about_p3: "ខ្ញុំអាចប្រើប្រាស់ភាសាខ្មែរ ភាសាអង់គ្លេស (កម្រិត B2) និងភាសាបារាំង (ដោយសារធ្លាប់រៀនថ្នាក់ពីរភាសាតាំងពីថ្នាក់ទី៧ រហូតដល់ចប់បាក់ឌុប)។ គោលបំណងរបស់ខ្ញុំ គឺចង់ឱ្យសិស្សស្រឡាញ់ការរៀនសូត្រ ហ៊ានគិត ហ៊ានដោះស្រាយលំហាត់ និងមានមូលដ្ឋានគ្រឹះរឹងមាំសម្រាប់ថ្ងៃអនាគត។",
      about_btn_cv: "ប្រវត្តិរូបសង្ខេបផ្លូវការ (PDF)",
      about_btn_exp: "មើលប្រវត្តិការងារ",

      // Personal Metadata Card
      info_title: "ព័ត៌មានផ្ទាល់ខ្លួន",
      info_name_lbl: "ឈ្មោះពេញ:",
      info_name_val: "លោក រិន សិទ្ធិពង្ស (RIN SITHPONG)",
      info_role_lbl: "តួនាទីបច្ចុប្បន្ន:",
      info_role_val: "គ្រូបង្រៀនអនុវិទ្យាល័យ (គណិតវិទ្យា និងរូបវិទ្យា)",
      info_school_lbl: "សាលាតែងតាំង:",
      info_school_val: "អនុវិទ្យាល័យដំណាក់ព្រីង ខេត្តកណ្តាល",
      info_location_lbl: "ទីលំនៅ:",
      info_location_val: "សង្កាត់ព្រែកឫស្សី ក្រុងតាខ្មៅ ខេត្តកណ្តាល",
      info_degree_lbl: "កម្រិតសិក្សា:",
      info_degree_val: "<span class='text-nowrap'>បរិញ្ញាបត្រគណិត (CUS)</span> • <span class='text-nowrap'>គរុកោសល្យភូមិភាគ</span><br><span class='text-nowrap'>ឆ្នាំមូលដ្ឋាន (CADT Y1)</span> • <span class='text-nowrap'>បាក់ឌុប (និទ្ទេស B)</span>",
      info_languages_lbl: "ភាសា:",
      info_languages_val: "<span class='text-nowrap'>ខ្មែរ (កំណើត)</span> • <span class='text-nowrap'>អង់គ្លេស (B2)</span> • <span class='text-nowrap'>បារាំង (ថ្នាក់ទ្វេភាសា)</span>",
      info_interests_lbl: "ចំណាប់អារម្មណ៍:",
      info_interests_val: "គេហទំព័រ KruHub, ការប្រើ AI (Antigravity, Codex), ការអប់រំ STEM, កម្មវិធី GeoGebra",
      cred_title: "គរុកោសល្យ និងក្របខ័ណ្ឌរដ្ឋ",
      cred_desc: "ទទួលស្គាល់ដោយក្រសួងអប់រំ យុវជន និងកីឡា តាមរយៈមជ្ឈមណ្ឌលគរុកោសល្យភូមិភាគខេត្តកណ្តាល។",

      // Skills Section
      idx_skills: "០២ / ជំនាញ និងសមត្ថភាព",
      skills_subtitle: "ជំនាញ និងសមត្ថភាព",
      skills_title: "ជំនាញគរុកោសល្យ និងបច្ចេកវិទ្យា",
      cat_pedagogy_title: "គរុកោសល្យ និងវិធីសាស្ត្របង្រៀន",
      cat_pedagogy_desc: "វិធីសាស្ត្របង្រៀនបែបសិស្សមជ្ឈមណ្ឌល រៀបចំកិច្ចតែងការច្បាស់លាស់ និងពន្យល់ស្របតាមកម្មវិធីសិក្សាជាតិថ្នាក់ទី ៧ ដល់ ទី ៩។",
      sk_math: "គណិតវិទ្យាអនុវិទ្យាល័យ",
      sk_phys: "រូបវិទ្យាអនុវិទ្យាល័យ",
      sk_lesson: "ការរៀបចំកិច្ចតែងការបង្រៀន",
      sk_assess: "ការវាយតម្លៃលទ្ធផលសិក្សារបស់សិស្ស",
      sk_mgmt: "ការគ្រប់គ្រងវិន័យ និងបរិយាកាសថ្នាក់រៀន",
      sk_exam: "ការបំប៉នសិស្សត្រៀមប្រឡង",

      cat_edtech_title: "បច្ចេកវិទ្យាអប់រំ & ការបង្រៀនឌីជីថល",
      cat_edtech_desc: "ប្រើប្រាស់កម្មវិធី និងឧបករណ៍ឌីជីថលដើម្បីជួយឱ្យសិស្សមើលឃើញរូបភាពជាក់ស្តែង ទាំងការរៀនក្នុងថ្នាក់ និងតាមអនឡាញ។",
      sk_virtual: "ការបង្រៀនតាម Zoom & Google Meet",
      sk_telegram: "ការបង្កើតក្រុមសិក្សាតាម Telegram",
      sk_geogebra: "គំរូរូបភាព និងពិសោធន៍ (GeoGebra)",
      sk_worksheets: "ការរៀបចំសន្លឹកកិច្ចការឌីជីថល",
      sk_slides: "ស្លាយបង្រៀនពហុព័ត៌មាន (Slides)",
      sk_online_eval: "ការធ្វើតេស្ត និងវាយតម្លៃតាមអនឡាញ",

      cat_tech_title: "មូលដ្ឋានគ្រឹះកុំព្យូទ័រ និងការប្រើប្រាស់ AI",
      cat_tech_desc: "មានមូលដ្ឋានគ្រឹះគណិតវិទ្យា និងកុំព្យូទ័រពីរៀននៅ CADT ព្រមទាំងចេះប្រើប្រាស់ AI (ដូចជា Antigravity និង Codex) មកជួយសម្រួលដល់ការងារបង្រៀន និងបង្កើតគេហទំព័រ KruHub។",
      sk_msoffice: "Microsoft Office (Word, Excel, PPT)",
      sk_grades: "ការគ្រប់គ្រង និងគណនាពិន្ទុសិស្ស",
      sk_algo: "ពីជគណិតលីនេអ៊ែរ និងស្ថិតិ",
      sk_python: "ការសរសេរកូដភាសា C និង Discrete Math",
      sk_data: "ការប្រើប្រាស់ AI (Antigravity, Codex ជំនួយការបង្រៀន)",

      cat_leadership_title: "ទំនាក់ទំនង និងភាសា",
      cat_leadership_desc: "មានទំនាក់ទំនងល្អ រួសរាយរាក់ទាក់ គោរពក្រមសីលធម៌គ្រូបង្រៀន និងយកចិត្តទុកដាក់ជួយណែនាំដល់សិស្សានុសិស្ស។",
      sk_km: "ភាសាខ្មែរ (ភាសាកំណើត)",
      sk_en: "ភាសាអង់គ្លេស (កម្រិត B2)",
      sk_fr: "ភាសាបារាំង (ថ្នាក់ពីរភាសា បាក់ឌុបបារាំង)",
      sk_mentor: "ការប្រឹក្សា និងបំប៉នសិស្ស",
      sk_collab: "ការសហការការងារជាក្រុម",
      sk_time: "ការគ្រប់គ្រងពេលវេលាបង្រៀន",

      // Experience Section
      idx_experience: "០៣ / បទពិសោធន៍",
      exp_subtitle: "ប្រវត្តិការងារ",
      exp_title: "បទពិសោធន៍បង្រៀនជាក់ស្តែង",
      exp1_duration: "ធ្នូ ២០២៥ – មីនា ២០២៦",
      exp1_location: "ក្រុងតាខ្មៅ ខេត្តកណ្តាល",
      exp1_role: "គរុសិស្សកម្មសិក្សា — គណិតវិទ្យា & រូបវិទ្យា",
      exp1_org: "វិទ្យាល័យ ហ៊ុន សែន សេរីភាព",
      exp1_desc: "ចុះអនុវត្តការបង្រៀនមុខវិជ្ជាគណិតវិទ្យា និងរូបវិទ្យាដល់សិស្សកម្រិតអនុវិទ្យាល័យ តាមកម្មវិធីសិក្សាជាតិរបស់ក្រសួងអប់រំ។ បានរៀបចំកិច្ចតែងការបង្រៀន សន្លឹកកិច្ចការ លំហាត់អនុវត្ត ព្រមទាំងដឹកនាំសកម្មភាពក្រុម និងតាមដានការវិវត្តរបស់សិស្សជាប្រចាំ។",

      exp2_duration: "វិច្ឆិកា ២០២៤ – សីហា ២០២៥",
      exp2_location: "ក្រុងតាខ្មៅ ខេត្តកណ្តាល",
      exp2_role: "គរុសិស្សកម្មសិក្សា — កម្រិតអនុវិទ្យាល័យ",
      exp2_org: "វិទ្យាល័យ ហ៊ុន សែន តាខ្មៅ",
      exp2_desc: "បានចូលរួមសង្កេតការណ៍ និងបង្រៀនជាក់ស្តែងជាមួយលោកគ្រូអ្នកគ្រូណែនាំ លើមុខវិជ្ជាគណិតវិទ្យា និងរូបវិទ្យា។ បានរៀនសូត្រពីការគ្រប់គ្រងវិន័យក្នុងថ្នាក់ ការកែកិច្ចការសិស្ស និងការជួយបំប៉នបន្ថែមដល់ប្អូនៗសិស្សានុសិស្សដែលរៀនយឺត។",

      exp3_duration: "២០២៣ – ២០២៥",
      exp3_location: "អនឡាញ / ពីចម្ងាយ",
      exp3_role: "គ្រូបង្រៀនគណិតវិទ្យាអនឡាញ (ក្រៅម៉ោង)",
      exp3_org: "ការបង្រៀនឯករាជ្យ",
      exp3_desc: "បង្រៀនបំប៉នសិស្សតាមអនឡាញ (Zoom, Google Meet, Telegram) លើមុខវិជ្ជាគណិតវិទ្យា។ បានចងក្រងវិញ្ញាសា លំហាត់គន្លឹះ និងស្លាយពន្យល់មេរៀន ដើម្បីជួយសិស្សពង្រឹងសមត្ថភាព និងត្រៀមប្រឡងបញ្ចប់ឆ្នាំ។",

      // Education Section
      idx_education: "០៤ / ការអប់រំ",
      edu_subtitle: "ប្រវត្តិការសិក្សា",
      edu_title: "ការអប់រំ និងសញ្ញាបត្រ",
      edu1_year: "វិច្ឆិកា ២០២៣ ដល់ បច្ចុប្បន្ន",
      edu1_degree: "បរិញ្ញាបត្រគណិតវិទ្យា",
      edu1_school: "សាកលវិទ្យាល័យឯកទេសនៃកម្ពុជា (CUS)",
      edu1_location: "រាជធានីភ្នំពេញ កម្ពុជា",
      edu1_desc: "កំពុងបន្តការសិក្សាថ្នាក់បរិញ្ញាបត្រគណិតវិទ្យា ដើម្បីពង្រឹងចំណេះដឹងទ្រឹស្តី វិធីសាស្ត្រគណនា និងយកមកអភិវឌ្ឍវិធីបង្រៀនសិស្សឱ្យកាន់តែច្បាស់លាស់។",

      edu2_year: "វិច្ឆិកា ២០២៤ – មិថុនា ២០២៦",
      edu2_degree: "គរុកោសល្យឯកទេស (គ្រូបង្រៀនកម្រិតអនុវិទ្យាល័យ គណិត & រូប)",
      edu2_school: "មជ្ឈមណ្ឌលគរុកោសល្យភូមិភាគខេត្តកណ្តាល",
      edu2_location: "ខេត្តកណ្តាល កម្ពុជា",
      edu2_desc: "បានបញ្ចប់ការបណ្តុះបណ្តាលគរុកោសល្យកម្រិតមូលដ្ឋាន (១២+២) ឯកទេស គណិត-រូបវិទ្យា នៅមជ្ឈមណ្ឌលគរុកោសល្យភូមិភាគខេត្តកណ្តាល និងទទួលបានការតែងតាំងជាគ្រូបង្រៀនក្របខ័ណ្ឌរដ្ឋនៅអនុវិទ្យាល័យដំណាក់ព្រីង ស្រុកពញាឮ។",

      edu3_year: "វិច្ឆិកា ២០២៣ – សីហា ២០២៤",
      edu3_degree: "ការសិក្សាថ្នាក់ឆ្នាំមូលដ្ឋាន (បញ្ចប់ឆ្នាំទី១)",
      edu3_school: "បណ្ឌិត្យសភាបច្ចេកវិទ្យាឌីជីថលកម្ពុជា (CADT)",
      edu3_location: "រាជធានីភ្នំពេញ កម្ពុជា",
      edu3_desc: "បានបញ្ចប់ការសិក្សាថ្នាក់ឆ្នាំមូលដ្ឋាន ដោយបានរៀនមុខវិជ្ជាគ្រឹះសំខាន់ៗរួមមាន៖ Linear Algebra, Probability & Statistics, Discrete Mathematics, IT Essentials និងការសរសេរកូដភាសា C (C Programming)។",

      edu4_year: "វិច្ឆិកា ២០២០ – តុលា ២០២៣",
      edu4_degree: "សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ (បាក់ឌុប និទ្ទេស B) & បាក់ឌុបបារាំង",
      edu4_school: "វិទ្យាល័យ ហ៊ុន សែន សេរីភាព",
      edu4_location: "ក្រុងតាខ្មៅ ខេត្តកណ្តាល",
      edu4_desc: "ប្រឡងជាប់បាក់ឌុបសម័យប្រឡង ២០២៣ ទទួលបាននិទ្ទេស B និងសញ្ញាបត្របាក់ឌុបភាសាបារាំង (Diplôme du Baccalauréat - Mention Francophone) បន្ទាប់ពីរៀនចប់ថ្នាក់ពីរភាសាខ្មែរ-បារាំង រយៈពេល ៦ឆ្នាំពេញ (ថ្នាក់ទី៧ ដល់ ទី១២)។",

      // Projects Section
      idx_projects: "០៥ / ស្នាដៃ និងគម្រោង",
      proj_subtitle: "ស្នាដៃ និងការច្នៃប្រឌិត",
      proj_title: "ស្នាដៃ និងគម្រោងសំខាន់ៗ",
      proj_lead: "បណ្តុំគេហទំព័រអប់រំ ប្រព័ន្ធគ្រប់គ្រងសាលារៀន និងឧបករណ៍ជំនួយការបង្រៀន ដែលត្រូវបានបង្កើតឡើងដើម្បីដោះស្រាយតម្រូវការជាក់ស្តែងក្នុងថ្នាក់រៀន និងគ្រឹះស្ថានអប់រំ។",

      // Flagship KruHub
      proj_kruhub_badge: "ស្នាដៃបង្កើតផ្ទាល់ • Web App",
      proj_kruhub_title: "KruHub — ប្រព័ន្ធគ្រប់គ្រងថ្នាក់រៀនសម្រាប់គ្រូបង្រៀន",
      proj_kruhub_desc: "គេហទំព័រគ្រប់គ្រងថ្នាក់រៀនដែលខ្ញុំបង្កើតឡើងដោយប្រើប្រាស់បច្ចេកវិទ្យា AI មកជួយសម្រួលដល់កិច្ចការបង្រៀនប្រចាំថ្ងៃរបស់លោកគ្រូអ្នកគ្រូ ដូចជាការស្រង់វត្តមានសិស្ស គ្រប់គ្រងបញ្ជីឈ្មោះ បញ្ចូលពិន្ទុ និងឧបករណ៍ជំនួយក្នុងថ្នាក់រៀនឱ្យកាន់តែរហ័ស និងមានភាពងាយស្រួល។",
      proj_kruhub_btn: "ចូលមើលគេហទំព័រ KruHub",

      // Project A: BLS Payment
      proj_bls_pay_badge: "បច្ចេកវិទ្យាអប់រំ & ហិរញ្ញវត្ថុ",
      proj_bls_pay_title: "ប្រព័ន្ធគ្រប់គ្រងការបង់ប្រាក់សាលាប្រ៊ីលលានឡៃ (BLS Payment)",
      proj_bls_pay_desc: "ប្រព័ន្ធគ្រប់គ្រងការបង់ប្រាក់ថ្លៃសិក្សាសម្រាប់សាលាប្រ៊ីលលានឡៃ (Brilliant Life School) - គ្រប់គ្រងទិន្នន័យសិស្ស កត់ត្រាការបង់ប្រាក់ វិក្កយបត្រស្វ័យប្រវត្ត (html2canvas) និងរបាយការណ៍ហិរញ្ញវត្ថុរហ័សទាន់ចិត្តក្នុងទម្រង់ PWA។",
      proj_bls_pay_btn: "ចូលមើលប្រព័ន្ធផ្ទាល់",

      // Project B: BLS Attendance
      proj_bls_att_badge: "សុវត្ថិភាព & វត្តមាន",
      proj_bls_att_title: "ប្រព័ន្ធកត់ត្រាវត្តមានសាលាប្រ៊ីលលានឡៃ (BLS Attendance)",
      proj_bls_att_desc: "ប្រព័ន្ធកត់ត្រាវត្តមានបុគ្គលិក និងស្រង់វត្តមានសិស្សសម្រាប់សាលាប្រ៊ីលលានឡៃ។ មានបច្ចេកវិទ្យា Dynamic QR Code បង្វិលរៀងរាល់ ១៥ វិនាទី ការពារការស្កេនជួសគ្នា ស្កេនកាមេរ៉ា Check-in/out និងការទាញរបាយការណ៍ជា CSV សម្រាប់ Excel។",
      proj_bls_att_btn: "ចូលមើលប្រព័ន្ធផ្ទាល់",

      // Project C: MusicHub
      proj_musichub_badge: "កម្មវិធីទូរស័ព្ទ Android",
      proj_musichub_title: "MusicHub — កម្មវិធីចាក់តន្ត្រី Offline ដំណើរការដោយ AI",
      proj_musichub_desc: "កម្មវិធីចាក់តន្ត្រី និងទាញយកសំឡេង Offline លើទូរស័ព្ទ Android បង្កើតឡើងដោយប្រើ Kotlin និង Jetpack Compose។ ប្រើប្រាស់ AndroidX Media3 (ExoPlayer 1.3.1) ជាមួយ Foreground Service, ប្រព័ន្ធ Equalizer 5-Band, មូលដ្ឋានទិន្នន័យ Room SQLite ក្នុងម៉ាស៊ីន និងប្រព័ន្ធ Update ស្វ័យប្រវត្តពី GitHub Releases។",
      proj_musichub_status: "កម្មវិធី Android • កំណែ APK v1.0.34",

      // Project D: Teacher Library
      proj_teacher_lib_badge: "បណ្ណាល័យត្រៀមប្រឡង",
      proj_teacher_lib_title: "បណ្ណាល័យគ្រូបង្រៀន (Teacher Library)",
      proj_teacher_lib_desc: "ប្រព័ន្ធបណ្ណាល័យអនឡាញជាភាសាខ្មែរសម្រាប់ត្រៀមប្រឡងគ្រូបង្រៀន អានមេរៀនជា HTML ស្អាតសុវត្ថិភាព (DOMPurify) ដោយផ្ទាល់ក្នុង Browser មានរបៀបសិក្សា និងរបៀបប្រឡងសាកល្បង អនុវត្តសំណួរពហុជ្រើសរើស និងសមកាលកម្ម Cloud Firestore។",
      proj_teacher_lib_btn: "ចូលមើលបណ្ណាល័យ",

      // Existing Project 1: STEM Physics Sim
      proj1_badge: "STEM អន្តរកម្ម",
      proj1_title: "បន្ទប់ពិសោធន៍គំរូរូបវិទ្យា & STEM អន្តរកម្ម",
      proj1_desc: "ការប្រើប្រាស់គំរូពិសោធន៍បែបឌីជីថលលើមុខវិជ្ជារូបវិទ្យា (ចលនាមេកានិច ពន្លឺ រលក) និងធរណីមាត្រ ដើម្បីឱ្យសិស្សមើលឃើញបាតុភូតជាក់ស្តែង និងយល់ច្បាស់ពីទ្រឹស្តីវិទ្យាសាស្ត្រ។",

      // Existing Project 2: Math Question Bank
      proj2_badge: "ឯកសារបង្រៀន",
      proj2_title: "កម្រងលំហាត់ និងវិញ្ញាសាគណិតវិទ្យាអនុវិទ្យាល័យ",
      proj2_desc: "ការចងក្រងកម្រងលំហាត់ និងវិញ្ញាសាគណិតវិទ្យា ព្រមទាំងដំណោះស្រាយលម្អិត ស្របតាមកម្មវិធីសិក្សាជាតិថ្នាក់ទី ៧ ដល់ ទី ៩ សម្រាប់ជួយសិស្សពង្រឹងសមត្ថភាព និងត្រៀមប្រឡង។",

      // Existing Project 3: Virtual Classroom
      proj3_badge: "សហគមន៍អនឡាញ",
      proj3_title: "ថ្នាក់រៀននិម្មិត និងសហគមន៍សិក្សាលើ Telegram",
      proj3_desc: "ក្រុមសិក្សាតាម Telegram សម្រាប់ចែករំលែកគន្លឹះដោះស្រាយលំហាត់ ឆ្លើយសំណួរចម្ងល់មេរៀន និងផ្តល់កន្លែងឱ្យសិស្សានុសិស្សជជែកពិភាក្សាលើមេរៀនគណិត និងរូបវិទ្យា។",

      // Existing Project 4: Grade Analytics
      proj4_badge: "កម្មវិធីគណនាពិន្ទុ",
      proj4_title: "ប្រព័ន្ធកត់ត្រា និងវិភាគពិន្ទុការសិក្សារបស់សិស្ស",
      proj4_desc: "តារាងគណនាពិន្ទុ និងតាមដានលទ្ធផលសិក្សារបស់សិស្សដោយស្វ័យប្រវត្តិ ជួយឱ្យគ្រូអាចដឹងបានភ្លាមៗពីកម្រិតសិក្សារបស់សិស្សម្នាក់ៗ និងងាយស្រួលជួយបំប៉នបន្ថែមទាន់ពេលវេលា។",

      // Project Action Buttons
      proj_btn_demo: "មើលការបង្ហាញ",
      proj_btn_view: "មើលឯកសារ",
      proj_btn_telegram: "ចូលរួមសហគមន៍",
      proj_btn_inquire: "សាកសួរ",
      proj_btn_details: "ព័ត៌មានលម្អិត",

      // Interactive 3D STEM Lab Section
      idx_stem_lab: "០៦ / បន្ទប់ពិសោធន៍ STEM 3D",
      stem_lab_subtitle: "បន្ទប់ពិសោធន៍រូបវិទ្យា & គណិតវិទ្យា 3D អន្តរកម្ម",
      stem_lab_title: "បន្ទប់ក្លែងធ្វើ STEM 3D អន្តរកម្ម",
      stem_lab_lead: "ការក្លែងធ្វើ 3D អន្តរកម្មក្នុងពេលជាក់ស្តែង បង្ហាញផ្ទៃគណិតវិទ្យា រលកអាម៉ូនិក និងគោលការណ៍រូបវិទ្យាដែលបង្រៀនក្នុងកម្មវិធីសិក្សា STEM អនុវិទ្យាល័យ។",
      stem_ctrl_title: "ប៉ារ៉ាម៉ែត្រក្លែងធ្វើ",
      stem_lbl_freq: "ប្រេកង់រលក (f)៖",
      stem_lbl_amp: "ទំហំរលក (A)៖",
      stem_lbl_speed: "ល្បឿនសាយភាយ (v)៖",
      stem_lbl_preset: "គំរូកំណត់ស្រាប់៖",
      stem_preset_harmonic: "រលកអាម៉ូនិក",
      stem_preset_interference: "ដែនជ្រៀតជ្រែក",
      stem_preset_standing: "រលកឈរ",
      stem_math_title: "ច្បាប់រូបវិទ្យាបញ្ជា",
      stem_reset_cam: "កំណត់ទិដ្ឋភាពកាមេរ៉ាឡើងវិញ",
      stem_stat_fps: "ល្បឿនដំណើរការ",

      // Mentors Section
      idx_mentors: "០៧ / បុគ្គលយោង",
      mentors_subtitle: "បុគ្គលយោង",
      mentors_title: "លោកគ្រូអ្នកគ្រូណែនាំ និងបុគ្គលយោង",
      mentor1_title: "គ្រូបង្រៀនគណិតវិទ្យាអនុវិទ្យាល័យ និងជាគ្រូណែនាំ",
      mentor1_org: "វិទ្យាល័យ ហ៊ុន សែន សេរីភាព",
      mentor2_title: "គ្រូបង្រៀនរូបវិទ្យាអនុវិទ្យាល័យ និងជាគ្រូណែនាំ",
      mentor2_org: "វិទ្យាល័យ ហ៊ុន សែន តាខ្មៅ",

      // Contact Section
      idx_contact: "០៨ / ទំនាក់ទំនង",
      contact_subtitle: "ទំនាក់ទំនងផ្ទាល់",
      contact_title: "ទាក់ទងមកខ្ញុំ",
      contact_heading: "រីករាយក្នុងការទំនាក់ទំនង និងពិភាក្សាការងារ",
      contact_intro: "ប្រសិនបើលោកអ្នកចង់ពិភាក្សាការងារលើការបង្រៀន ការរៀបចំឯកសារ ឬកិច្ចសហការផ្សេងៗ សូមទាក់ទងមកខ្ញុំបាទតាមព័ត៌មានខាងក្រោម។",
      contact_email_lbl: "អ៊ីមែល",
      contact_tg_lbl: "តេឡេក្រាម & ទូរស័ព្ទ",
      contact_loc_lbl: "ទីលំនៅ",
      contact_loc_val: "សង្កាត់ព្រែកឫស្សី ក្រុងតាខ្មៅ ខេត្តកណ្តាល",
      
      // Form Fields & Status
      form_title: "ផ្ញើសារមកខ្ញុំដោយផ្ទាល់",
      form_desc: "សូមបំពេញព័ត៌មានខាងក្រោម ខ្ញុំបាទនឹងឆ្លើយតបសាររបស់លោកអ្នកឱ្យបានឆាប់បំផុត។",
      form_name_lbl: "ឈ្មោះរបស់អ្នក",
      form_email_lbl: "អាសយដ្ឋានអ៊ីមែល",
      form_subject_lbl: "ប្រធានបទ",
      form_message_lbl: "ខ្លឹមសារសារ",
      form_submit_btn: "ផ្ញើសារ",
      form_success: "សូមអរគុណសម្រាប់ការទាក់ទង! សាររបស់លោកអ្នកត្រូវបានរៀបចំរួចរាល់។ ខ្ញុំបាទនឹងឆ្លើយតបវិញក្នុងពេលឆាប់ៗ។",
      form_sending: "កំពុងដំណើរការ...",

      // Footer
      footer_bio: "គ្រូបង្រៀនអនុវិទ្យាល័យ ឯកទេសគណិតវិទ្យា និងរូបវិទ្យា។ ស្រឡាញ់ការបង្រៀន និងចូលចិត្តប្រើបច្ចេកវិទ្យាដើម្បីជួយឱ្យសិស្សរៀនកាន់តែពូកែ។",
      footer_links_title: "តំណភ្ជាប់រហ័ស",
      footer_connect_title: "ទំនាក់ទំនងផ្ទាល់",
      footer_rights: "រក្សាសិទ្ធិគ្រប់យ៉ាង។",
      footer_editorial_note: "ផលប័ត្របែបវិចារណកថាទំនើប • ស្ទីលស្វីសបែបសាមញ្ញ"
    }
  };

  /* ==========================================================================
     2. APPLICATION STATE & STORAGE
     ========================================================================== */
  const state = {
    theme: 'light',
    lang: 'en'
  };

  function getSavedPreference(key, fallback) {
    try {
      return localStorage.getItem(key) || fallback;
    } catch (e) {
      return fallback;
    }
  }

  function savePreference(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      // Storage unavailable or blocked
    }
  }

  /* ==========================================================================
     3. THEME CONTROLLER (LIGHT & DARK MODE)
     ========================================================================== */
  function initTheme() {
    const savedTheme = getSavedPreference('portfolio_theme', null);
    
    if (savedTheme === 'dark' || savedTheme === 'light') {
      state.theme = savedTheme;
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      state.theme = 'dark';
    } else {
      state.theme = 'light';
    }

    applyTheme(state.theme);

    const themeToggleBtn = document.getElementById('themeToggleBtn');
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        state.theme = state.theme === 'dark' ? 'light' : 'dark';
        applyTheme(state.theme);
        savePreference('portfolio_theme', state.theme);
      });
    }

    // React to system color scheme shifts if user has not set an explicit override
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!getSavedPreference('portfolio_theme', null)) {
          state.theme = e.matches ? 'dark' : 'light';
          applyTheme(state.theme);
        }
      });
    }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
      const isDark = theme === 'dark';
      themeBtn.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
      themeBtn.setAttribute('title', isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme');
    }
    document.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
  }

  /* ==========================================================================
     4. BILINGUAL LANGUAGE CONTROLLER (EN & KM)
     ========================================================================== */
  function initLanguage() {
    const savedLang = getSavedPreference('portfolio_lang', 'en');
    state.lang = (savedLang === 'km' || savedLang === 'en') ? savedLang : 'en';
    
    applyLanguage(state.lang);

    const langToggleBtn = document.getElementById('langToggleBtn');
    if (langToggleBtn) {
      langToggleBtn.addEventListener('click', () => {
        state.lang = state.lang === 'en' ? 'km' : 'en';
        applyLanguage(state.lang);
        savePreference('portfolio_lang', state.lang);
      });
    }
  }

  function applyLanguage(lang) {
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('data-lang', lang);

    const dictionary = translations[lang] || translations.en;

    // Translate all elements marked with data-i18n
    const translatables = document.querySelectorAll('[data-i18n]');
    translatables.forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dictionary[key] !== undefined) {
        if (dictionary[key].includes('<') || el.hasAttribute('data-i18n-html')) {
          el.innerHTML = dictionary[key];
        } else {
          el.textContent = dictionary[key];
        }
      }
    });

    // Update switcher pill label
    const langLabel = document.getElementById('langLabel');
    if (langLabel) {
      langLabel.textContent = lang === 'en' ? 'EN / ខ្មែរ' : 'ខ្មែរ / EN';
    }

    // Update input placeholders
    updateFormPlaceholders(lang);
  }

  function updateFormPlaceholders(lang) {
    const nameInput = document.getElementById('senderName');
    const emailInput = document.getElementById('senderEmail');
    const subjectInput = document.getElementById('msgSubject');
    const messageInput = document.getElementById('senderMessage');

    if (lang === 'km') {
      if (nameInput) nameInput.placeholder = 'ឧ. រិន សិទ្ធិពង្ស';
      if (emailInput) emailInput.placeholder = 'ឧ. name@example.com';
      if (subjectInput) subjectInput.placeholder = 'ឧ. កិច្ចសហការបង្រៀន ឬការបំប៉នសិស្ស';
      if (messageInput) messageInput.placeholder = 'តើខ្ញុំបាទអាចជួយអ្វីខ្លះទាក់ទងនឹងគណិតវិទ្យា រូបវិទ្យា ឬគម្រោងអប់រំ?';
    } else {
      if (nameInput) nameInput.placeholder = 'e.g. John Doe';
      if (emailInput) emailInput.placeholder = 'e.g. name@example.com';
      if (subjectInput) subjectInput.placeholder = 'e.g. Teaching Collaboration / Tutoring Inquiry';
      if (messageInput) messageInput.placeholder = 'How can I assist you with math, physics, or educational initiatives?';
    }
  }

  /* ==========================================================================
     5. STICKY NAVBAR & READING PROGRESS
     ========================================================================== */
  function initStickyNavbar() {
    const siteHeader = document.getElementById('siteHeader');
    const progressBar = document.getElementById('scrollProgress');

    function onScroll() {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      
      if (siteHeader) {
        if (scrollY > 20) {
          siteHeader.classList.add('scrolled');
        } else {
          siteHeader.classList.remove('scrolled');
        }
      }

      if (progressBar) {
        const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        if (totalHeight > 0) {
          const progress = (scrollY / totalHeight) * 100;
          progressBar.style.width = Math.min(100, Math.max(0, progress)) + '%';
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ==========================================================================
     6. MOBILE MENU DRAWER
     ========================================================================== */
  function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const drawer = document.getElementById('mobileDrawer');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    if (!menuBtn || !drawer) return;

    function openMenu() {
      drawer.classList.add('open');
      menuBtn.setAttribute('aria-expanded', 'true');
      drawer.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      drawer.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
      drawer.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    menuBtn.addEventListener('click', () => {
      const isOpen = drawer.classList.contains('open');
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });

    document.addEventListener('click', (e) => {
      if (drawer.classList.contains('open') && !drawer.contains(e.target) && !menuBtn.contains(e.target)) {
        closeMenu();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('open')) {
        closeMenu();
        menuBtn.focus();
      }
    });
  }

  /* ==========================================================================
     7. SCROLLSPY (ACTIVE NAVIGATION INDICATOR)
     ========================================================================== */
  function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

    if (!('IntersectionObserver' in window)) return;

    const observerOptions = {
      root: null,
      rootMargin: '-25% 0px -55% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            const href = link.getAttribute('href');
            if (href === '#' + id) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
  }

  /* ==========================================================================
     8. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER WITH SAFE FALLBACK)
     ========================================================================== */
  function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');

    // If IntersectionObserver is unavailable or user requested reduced motion, activate immediately
    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!('IntersectionObserver' in window) || prefersReducedMotion) {
      revealElements.forEach((el) => el.classList.add('active'));
      return;
    }

    const revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.08
    });

    revealElements.forEach((el) => revealObserver.observe(el));
  }

  /* ==========================================================================
     9. BACK TO TOP BUTTON
     ========================================================================== */
  function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (!backToTopBtn) return;

    window.addEventListener('scroll', () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollY > 350) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* ==========================================================================
     10. CONTACT FORM VALIDATION & INTERACTIVE SUBMISSION
     ========================================================================== */
  function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const nameInput = document.getElementById('senderName');
    const emailInput = document.getElementById('senderEmail');
    const subjectInput = document.getElementById('msgSubject');
    const messageInput = document.getElementById('senderMessage');
    const submitBtn = document.getElementById('submitBtn');
    const formStatus = document.getElementById('formStatus');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function clearErrors() {
      [nameInput, emailInput, subjectInput, messageInput].forEach((input) => {
        if (input) input.classList.remove('is-invalid');
      });
      [nameError, emailError, subjectError, messageError].forEach((err) => {
        if (err) err.textContent = '';
      });
      if (formStatus) {
        formStatus.className = 'form-status-box';
        formStatus.textContent = '';
        formStatus.style.display = 'none';
      }
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      clearErrors();

      let isValid = true;
      const currentDict = translations[state.lang] || translations.en;

      // Validate Name
      if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        nameInput.classList.add('is-invalid');
        nameError.textContent = state.lang === 'km' 
          ? 'សូមបញ្ចូលឈ្មោះរបស់អ្នក (យ៉ាងតិច ២ តួអក្សរ)' 
          : 'Please enter your name (at least 2 characters).';
        isValid = false;
      }

      // Validate Email
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        emailInput.classList.add('is-invalid');
        emailError.textContent = state.lang === 'km'
          ? 'សូមបញ្ចូលអាសយដ្ឋានអ៊ីមែលត្រឹមត្រូវ'
          : 'Please enter a valid email address.';
        isValid = false;
      }

      // Validate Subject
      if (!subjectInput.value.trim() || subjectInput.value.trim().length < 3) {
        subjectInput.classList.add('is-invalid');
        subjectError.textContent = state.lang === 'km'
          ? 'សូមបញ្ចូលប្រធានបទសារ (យ៉ាងតិច ៣ តួអក្សរ)'
          : 'Please enter a subject (at least 3 characters).';
        isValid = false;
      }

      // Validate Message
      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        messageInput.classList.add('is-invalid');
        messageError.textContent = state.lang === 'km'
          ? 'សូមបញ្ចូលខ្លឹមសារសារ (យ៉ាងតិច ១០ តួអក្សរ)'
          : 'Please enter a message (at least 10 characters).';
        isValid = false;
      }

      if (!isValid) return;

      // Show processing state
      const btnTextEl = submitBtn.querySelector('.btn-text');
      const originalBtnText = btnTextEl ? btnTextEl.textContent : submitBtn.textContent;
      submitBtn.disabled = true;
      if (btnTextEl) btnTextEl.textContent = currentDict.form_sending;

      // Simulate sending feedback and trigger direct mailto fallback
      setTimeout(() => {
        submitBtn.disabled = false;
        if (btnTextEl) btnTextEl.textContent = originalBtnText;

        formStatus.className = 'form-status-box success';
        formStatus.textContent = currentDict.form_success;
        formStatus.style.display = 'block';

        // Compose mailto link so user can send real email client directly if desired
        const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${subjectInput.value.trim()}`);
        const mailtoBody = encodeURIComponent(
          `From: ${nameInput.value.trim()} (${emailInput.value.trim()})\n\n${messageInput.value.trim()}`
        );
        const mailtoUrl = `mailto:sithpongrin4@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
        
        // Reset inputs
        form.reset();

        // Trigger mail client
        window.location.href = mailtoUrl;
      }, 650);
    });
  }

  /* ==========================================================================
     11. 3D TILT ENGINE & SPECULAR GLARE
     ========================================================================== */
  function init3DTiltCards() {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const cards = document.querySelectorAll('.tilt-card-3d');
    if (!cards.length) return;

    cards.forEach((card) => {
      let glare = card.querySelector('.card-glare-overlay');
      if (!glare) {
        glare = document.createElement('div');
        glare.className = 'card-glare-overlay';
        card.appendChild(glare);
      }

      let isHovered = false;
      let rect = null;

      card.addEventListener('mouseenter', () => {
        isHovered = true;
        rect = card.getBoundingClientRect();
        card.style.transition = 'transform 0.08s ease-out, box-shadow 0.25s ease';
      });

      card.addEventListener('mousemove', (e) => {
        if (!isHovered || !rect) return;
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const maxTilt = card.classList.contains('hologram-portrait') ? 14 : 9;
        const rotateX = ((y - centerY) / centerY) * -maxTilt;
        const rotateY = ((x - centerX) / centerX) * maxTilt;

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;

        const glareX = (x / rect.width) * 100;
        const glareY = (y / rect.height) * 100;
        glare.style.background = `radial-gradient(circle at ${glareX.toFixed(1)}% ${glareY.toFixed(1)}%, rgba(255, 255, 255, 0.22) 0%, transparent 65%)`;
      });

      card.addEventListener('mouseleave', () => {
        isHovered = false;
        card.style.transition = 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s ease';
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        glare.style.opacity = '0';
      });
    });
  }

  /* ==========================================================================
     12. THREE.JS 3D HERO INTERACTIVE SCENE
     ========================================================================== */
  function initHero3DScene() {
    const canvas = document.getElementById('hero3DCanvas');
    const container = document.getElementById('hero3DContainer');
    if (!canvas || !container || typeof THREE === 'undefined') return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 10;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance'
      });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    } catch (e) {
      console.warn('WebGL init skipped:', e);
      return;
    }

    function getThemeColors() {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      return {
        isDark,
        primary: isDark ? 0x00f0ff : 0x0284c7,
        secondary: isDark ? 0x8b5cf6 : 0x4f46e5,
        accent: isDark ? 0x10b981 : 0x059669
      };
    }

    let colors = getThemeColors();

    // Mode 1: Quantum Geometry Group
    const geometryGroup = new THREE.Group();

    const icoGeom = new THREE.IcosahedronGeometry(2.4, 0);
    const icoWireMat = new THREE.MeshBasicMaterial({
      color: colors.primary,
      wireframe: true,
      transparent: true,
      opacity: 0.75
    });
    const icoMesh = new THREE.Mesh(icoGeom, icoWireMat);
    geometryGroup.add(icoMesh);

    const icoPointsMat = new THREE.PointsMaterial({
      color: colors.primary,
      size: 0.16,
      transparent: true,
      opacity: 0.95
    });
    const icoPoints = new THREE.Points(icoGeom, icoPointsMat);
    geometryGroup.add(icoPoints);

    const dodecGeom = new THREE.DodecahedronGeometry(3.6, 0);
    const dodecWireMat = new THREE.MeshBasicMaterial({
      color: colors.secondary,
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });
    const dodecMesh = new THREE.Mesh(dodecGeom, dodecWireMat);
    geometryGroup.add(dodecMesh);

    const ring1Geom = new THREE.TorusGeometry(4.6, 0.02, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({ color: colors.primary, transparent: true, opacity: 0.6 });
    const ring1 = new THREE.Mesh(ring1Geom, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    geometryGroup.add(ring1);

    const ring2Geom = new THREE.TorusGeometry(5.2, 0.02, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({ color: colors.secondary, transparent: true, opacity: 0.45 });
    const ring2 = new THREE.Mesh(ring2Geom, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 4;
    geometryGroup.add(ring2);

    scene.add(geometryGroup);

    // Mode 2: Physics Wave Field Group
    const waveGroup = new THREE.Group();
    const planeGeom = new THREE.PlaneGeometry(16, 16, 40, 40);
    const waveWireMat = new THREE.MeshBasicMaterial({
      color: colors.primary,
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });
    const waveMesh = new THREE.Mesh(planeGeom, waveWireMat);
    waveMesh.rotation.x = -Math.PI / 2.6;
    waveMesh.position.y = -1;
    waveGroup.add(waveMesh);

    const wavePointsMat = new THREE.PointsMaterial({
      color: colors.secondary,
      size: 0.08,
      transparent: true,
      opacity: 0.8
    });
    const wavePoints = new THREE.Points(planeGeom, wavePointsMat);
    wavePoints.rotation.x = -Math.PI / 2.6;
    wavePoints.position.y = -1;
    waveGroup.add(wavePoints);

    waveGroup.visible = false;
    scene.add(waveGroup);

    // Mode 3: Gravitational Particle Nebula Group
    const particlesGroup = new THREE.Group();
    const particleCount = 1000;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 6.5;
      particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = r * Math.cos(phi);
    }
    const particleGeom = new THREE.BufferGeometry();
    particleGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particlesMat = new THREE.PointsMaterial({
      color: colors.primary,
      size: 0.09,
      transparent: true,
      opacity: 0.85
    });
    const particleSystem = new THREE.Points(particleGeom, particlesMat);
    particlesGroup.add(particleSystem);

    particlesGroup.visible = false;
    scene.add(particlesGroup);

    // Mode Selection Buttons
    const hudButtons = document.querySelectorAll('.hud-btn');
    const hudActiveLabel = document.getElementById('hudActiveMode');

    function set3DMode(mode) {
      geometryGroup.visible = (mode === 'geometry');
      waveGroup.visible = (mode === 'wave');
      particlesGroup.visible = (mode === 'particles');

      hudButtons.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-mode') === mode);
      });

      if (hudActiveLabel) {
        const titles = {
          geometry: 'QUANTUM GEOMETRY',
          wave: 'PHYSICS WAVE FIELD',
          particles: 'PARTICLE NEBULA'
        };
        hudActiveLabel.textContent = titles[mode] || mode.toUpperCase();
      }
    }

    hudButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const mode = btn.getAttribute('data-mode');
        if (mode) set3DMode(mode);
      });
    });

    // Mouse Tracking & Dragging Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    window.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
        mouseX = (e.clientX / window.innerWidth) - 0.5;
        mouseY = (e.clientY / window.innerHeight) - 0.5;
      }
    }, { passive: true });

    canvas.addEventListener('mousedown', (e) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;

      targetRotY += deltaX * 0.008;
      targetRotX += deltaY * 0.008;
    });

    // Touch Support for Mobile
    canvas.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    }, { passive: true });

    window.addEventListener('touchend', () => {
      isDragging = false;
    });

    window.addEventListener('touchmove', (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - prevMouseX;
      const deltaY = e.touches[0].clientY - prevMouseY;
      prevMouseX = e.touches[0].clientX;
      prevMouseY = e.touches[0].clientY;

      targetRotY += deltaX * 0.008;
      targetRotX += deltaY * 0.008;
    }, { passive: true });

    // Handle Theme Changes
    document.addEventListener('themeChanged', () => {
      colors = getThemeColors();
      icoWireMat.color.setHex(colors.primary);
      icoPointsMat.color.setHex(colors.primary);
      dodecWireMat.color.setHex(colors.secondary);
      ring1Mat.color.setHex(colors.primary);
      ring2Mat.color.setHex(colors.secondary);
      waveWireMat.color.setHex(colors.primary);
      wavePointsMat.color.setHex(colors.secondary);
      particlesMat.color.setHex(colors.primary);
    });

    // Animation Loop with Visibility Caching
    let isVisible = true;
    let clock = new THREE.Clock();

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          isVisible = entry.isIntersecting;
        });
      }, { threshold: 0.05 });
      observer.observe(container);
    }

    function animate() {
      requestAnimationFrame(animate);
      if (!isVisible) return;

      const elapsed = clock.getElapsedTime();

      targetRotY += (mouseX * 0.8 - targetRotY) * 0.04;
      targetRotX += (mouseY * 0.8 - targetRotX) * 0.04;

      if (geometryGroup.visible) {
        geometryGroup.rotation.y += 0.006 + targetRotY * 0.02;
        geometryGroup.rotation.x += 0.004 + targetRotX * 0.02;
        ring1.rotation.z += 0.01;
        ring2.rotation.z -= 0.008;
      }

      if (waveGroup.visible) {
        waveGroup.rotation.z += 0.002;
        const pos = planeGeom.attributes.position;
        for (let i = 0; i < pos.count; i++) {
          const x = pos.getX(i);
          const y = pos.getY(i);
          const z = 0.5 * Math.sin(0.6 * x + elapsed * 2.2) * Math.cos(0.6 * y + elapsed * 1.8);
          pos.setZ(i, z);
        }
        pos.needsUpdate = true;
      }

      if (particlesGroup.visible) {
        particlesGroup.rotation.y += 0.003;
        particlesGroup.rotation.x += 0.002;
      }

      renderer.render(scene, camera);
    }

    animate();

    window.addEventListener('resize', () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    });
  }

  /* ==========================================================================
     13. INTERACTIVE 3D STEM PHYSICS & MATH LAB SIMULATION
     ========================================================================== */
  function initStemLabSimulation() {
    const canvas = document.getElementById('stemLabCanvas');
    const wrapper = document.querySelector('.stem-viewport-wrapper');
    if (!canvas || !wrapper || typeof THREE === 'undefined') return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, wrapper.clientWidth / wrapper.clientHeight, 0.1, 1000);
    camera.position.set(0, 14, 18);
    camera.lookAt(0, 0, 0);

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: false,
        antialias: true,
        powerPreference: 'high-performance'
      });
      renderer.setSize(wrapper.clientWidth, wrapper.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setClearColor(0x070b14, 1);
    } catch (e) {
      console.warn('STEM WebGL init skipped:', e);
      return;
    }

    const gridRes = 48;
    const planeSize = 22;
    const geometry = new THREE.PlaneGeometry(planeSize, planeSize, gridRes, gridRes);
    geometry.rotateX(-Math.PI / 2);

    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.65
    });
    const gridMesh = new THREE.Mesh(geometry, wireMat);
    scene.add(gridMesh);

    const pointsMat = new THREE.PointsMaterial({
      color: 0x8b5cf6,
      size: 0.12,
      transparent: true,
      opacity: 0.85
    });
    const pointsMesh = new THREE.Points(geometry, pointsMat);
    scene.add(pointsMesh);

    let freq = 2.0;
    let amp = 1.0;
    let speed = 3.0;
    let preset = 'harmonic';

    const sliderFreq = document.getElementById('sliderFreq');
    const sliderAmp = document.getElementById('sliderAmp');
    const sliderSpeed = document.getElementById('sliderSpeed');
    const valFreq = document.getElementById('valFreq');
    const valAmp = document.getElementById('valAmp');
    const valSpeed = document.getElementById('valSpeed');
    const telemetryFreq = document.getElementById('telemetryFreq');
    const telemetryLambda = document.getElementById('telemetryLambda');
    const telemetryOmega = document.getElementById('telemetryOmega');
    const telemetryFps = document.getElementById('telemetryFps');
    const equationDisplay = document.getElementById('stemEquationDisplay');
    const presetLabel = document.getElementById('stemActivePresetLabel');
    const presetBtns = document.querySelectorAll('.preset-btn');
    const resetCamBtn = document.getElementById('stemResetCamBtn');

    function updateTelemetry() {
      const omega = 2 * Math.PI * freq;
      const lambda = speed / freq;

      if (valFreq) valFreq.textContent = `${freq.toFixed(1)} Hz`;
      if (valAmp) valAmp.textContent = amp.toFixed(1);
      if (valSpeed) valSpeed.textContent = `${speed.toFixed(1)} m/s`;

      if (telemetryFreq) telemetryFreq.textContent = `${freq.toFixed(1)} Hz`;
      if (telemetryLambda) telemetryLambda.textContent = `${lambda.toFixed(2)} m`;
      if (telemetryOmega) telemetryOmega.textContent = `${omega.toFixed(2)} rad/s`;

      if (equationDisplay) {
        if (preset === 'harmonic') {
          equationDisplay.innerHTML = `y(x,t) = ${amp.toFixed(1)} &middot; sin(${(2 * Math.PI / lambda).toFixed(2)}x - ${(omega).toFixed(2)}t)`;
        } else if (preset === 'interference') {
          equationDisplay.innerHTML = `y = (${(amp / 2).toFixed(1)}) &middot; [sin(k r_1 - &omega;t) + sin(k r_2 - &omega;t)]`;
        } else if (preset === 'standing') {
          equationDisplay.innerHTML = `y = 2(${amp.toFixed(1)}) &middot; sin(kx) &middot; cos(${(omega).toFixed(2)}t)`;
        }
      }
    }

    if (sliderFreq) {
      sliderFreq.addEventListener('input', (e) => {
        freq = parseFloat(e.target.value);
        updateTelemetry();
      });
    }

    if (sliderAmp) {
      sliderAmp.addEventListener('input', (e) => {
        amp = parseFloat(e.target.value);
        updateTelemetry();
      });
    }

    if (sliderSpeed) {
      sliderSpeed.addEventListener('input', (e) => {
        speed = parseFloat(e.target.value);
        updateTelemetry();
      });
    }

    presetBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        preset = btn.getAttribute('data-preset');
        presetBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        if (presetLabel) {
          const names = {
            harmonic: 'Harmonic Wave Surface',
            interference: 'Double-Source Interference Field',
            standing: 'Standing Resonance Field'
          };
          presetLabel.textContent = names[preset] || 'STEM Wave Surface';
        }
        updateTelemetry();
      });
    });

    // Orbit Camera Controls
    let isDragging = false;
    let prevX = 0;
    let prevY = 0;
    let sphericalTheta = Math.PI / 4;
    let sphericalPhi = Math.PI / 3;
    let sphericalRadius = 22;

    function updateCameraPosition() {
      camera.position.x = sphericalRadius * Math.sin(sphericalPhi) * Math.sin(sphericalTheta);
      camera.position.y = sphericalRadius * Math.cos(sphericalPhi);
      camera.position.z = sphericalRadius * Math.sin(sphericalPhi) * Math.cos(sphericalTheta);
      camera.lookAt(0, 0, 0);
    }

    updateCameraPosition();

    canvas.addEventListener('mousedown', (e) => {
      isDragging = true;
      prevX = e.clientX;
      prevY = e.clientY;
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const dx = e.clientX - prevX;
      const dy = e.clientY - prevY;
      prevX = e.clientX;
      prevY = e.clientY;

      sphericalTheta -= dx * 0.008;
      sphericalPhi = Math.max(0.15, Math.min(Math.PI / 2.05, sphericalPhi - dy * 0.008));
      updateCameraPosition();
    });

    canvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      sphericalRadius = Math.max(10, Math.min(35, sphericalRadius + e.deltaY * 0.02));
      updateCameraPosition();
    }, { passive: false });

    if (resetCamBtn) {
      resetCamBtn.addEventListener('click', () => {
        sphericalTheta = Math.PI / 4;
        sphericalPhi = Math.PI / 3;
        sphericalRadius = 22;
        updateCameraPosition();
      });
    }

    canvas.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevX = e.touches[0].clientX;
        prevY = e.touches[0].clientY;
      }
    }, { passive: true });

    window.addEventListener('touchend', () => {
      isDragging = false;
    });

    window.addEventListener('touchmove', (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      const dx = e.touches[0].clientX - prevX;
      const dy = e.touches[0].clientY - prevY;
      prevX = e.touches[0].clientX;
      prevY = e.touches[0].clientY;

      sphericalTheta -= dx * 0.008;
      sphericalPhi = Math.max(0.15, Math.min(Math.PI / 2.05, sphericalPhi - dy * 0.008));
      updateCameraPosition();
    }, { passive: true });

    let isVisible = true;
    let clock = new THREE.Clock();
    let frameCount = 0;
    let lastFpsUpdate = 0;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          isVisible = entry.isIntersecting;
        });
      }, { threshold: 0.05 });
      observer.observe(wrapper);
    }

    function animate() {
      requestAnimationFrame(animate);
      if (!isVisible) return;

      const t = clock.getElapsedTime();
      const pos = geometry.attributes.position;
      const omega = 2 * Math.PI * freq;
      const k = (2 * Math.PI * freq) / speed;

      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        const zCoord = pos.getZ(i);
        let y = 0;

        if (preset === 'harmonic') {
          y = amp * Math.sin(k * x - omega * t * 0.4);
        } else if (preset === 'interference') {
          const d1 = Math.sqrt((x - 4) * (x - 4) + zCoord * zCoord);
          const d2 = Math.sqrt((x + 4) * (x + 4) + zCoord * zCoord);
          y = (amp * 0.6) * (Math.sin(k * d1 - omega * t * 0.4) + Math.sin(k * d2 - omega * t * 0.4));
        } else if (preset === 'standing') {
          y = amp * Math.sin(k * x) * Math.cos(omega * t * 0.4);
        }

        pos.setY(i, y);
      }
      pos.needsUpdate = true;

      frameCount++;
      if (t - lastFpsUpdate >= 1.0) {
        if (telemetryFps) telemetryFps.textContent = `${frameCount} FPS`;
        frameCount = 0;
        lastFpsUpdate = t;
      }

      renderer.render(scene, camera);
    }

    updateTelemetry();
    animate();

    window.addEventListener('resize', () => {
      if (!wrapper) return;
      const w = wrapper.clientWidth;
      const h = wrapper.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    });
  }

  /* ==========================================================================
     14. DYNAMIC FOOTER YEAR & INITIALIZATION
     ========================================================================== */
  function initYear() {
    const yearEl = document.getElementById('currentYear');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

  // Document Ready Setup
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguage();
    initStickyNavbar();
    initMobileMenu();
    initScrollSpy();
    initScrollReveal();
    initBackToTop();
    initContactForm();
    init3DTiltCards();
    initHero3DScene();
    initStemLabSimulation();
    initYear();
  });
})();
