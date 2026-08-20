'use strict';

/* ============================================================
   TRANSLATIONS
   ============================================================ */
const translations = {
  en: {
    nav_about: "About",
    nav_projects: "Projects",
    nav_experience: "Experience",
    nav_skills: "Skills",
    nav_achievements: "Achievements",
    nav_research: "Research",
    nav_contact: "Contact",

    hero_greeting: "Hi, I'm",
    hero_title: "Computer Engineer",
    hero_tag_cv: "Computer Vision",
    hero_tag_sw: "Software Development",
    hero_description: "I build intelligent systems by combining software engineering, artificial intelligence, computer vision and robotics.",
    hero_cta_projects: "View My Projects",
    hero_cta_cv: "Download CV",
    hero_badge: "Available for opportunities",

    about_label: "Who I Am",
    about_title: "About Me",
    about_p1: "I'm a Computer Engineering graduate from İstanbul Sabahattin Zaim University (2022–2026), passionate about building systems that sit at the intersection of software, intelligence, and the physical world.",
    about_p2: "My work spans autonomous robotics, real-time computer vision, embedded systems, and full-stack software development. I enjoy tackling complex engineering challenges — from deploying SLAM-based navigation on a TurtleBot to training custom object detection models for mobile deployment.",
    about_p3: "I've had the chance to contribute to research, compete at TEKNOFEST, publish a conference paper, and deliver real-world software during internships. I'm always looking for the next problem worth solving.",
    about_university: "University",
    about_degree: "Degree",
    about_degree_val: "B.Sc. Computer Engineering",
    about_period: "Period",
    stat_projects: "Major Projects",
    stat_exp: "Professional Experiences",
    stat_pub: "Research Publication",
    stat_teknofest: "Finalist",

    projects_label: "What I've Built",
    projects_title: "Featured Projects",
    view_project: "View Details",

    exp_label: "Where I've Worked",
    exp_title: "Experience",

    skills_label: "What I Work With",
    skills_title: "Technical Skills",

    ach_label: "Recognition",
    ach_title: "Achievements",
    ach_competition: "AI in Aviation Competition",
    ach_desc: "Served as Team Captain. Qualified for the finals by ranking in the top 33 out of 122 teams — finishing <strong>16th overall</strong>.",
    ach_tag1: "Team Captain",
    ach_tag2: "Finalist",

    research_label: "Academic Work",
    research_title: "Research & Publications",
    pub_title: "Performance Evaluation of Traditional and Deep Learning-Based Face Recognition Algorithms",
    pub_venue: "International Open Source Conference Proceedings",
    pub_desc: "A comparative study evaluating the performance of classical face recognition methods against modern deep learning approaches, with empirical benchmarks across multiple datasets.",
    pub_read: "Read Publication →",
    cert_title: "Certificates",
    edu_title: "Education",
    edu_degree: "B.Sc. Computer Engineering",
    lang_title: "Languages",
    lang_turkish: "Turkish",
    lang_english: "English",
    lang_native: "Native",

    contact_label: "Get In Touch",
    contact_title: "Let's build something together.",
    contact_intro: "I'm open to new opportunities, collaborations, and interesting conversations. Feel free to reach out.",
    form_name: "Name",
    form_name_ph: "Your name",
    form_email: "Email",
    form_email_ph: "your@email.com",
    form_message: "Message",
    form_message_ph: "Your message...",
    form_send: "Send Message",
    form_success: "✓ Thanks! Your message has been prepared.",
    form_error_name: "Please enter your name.",
    form_error_email: "Please enter a valid email address.",
    form_error_message: "Please enter a message.",

    footer_role: "Computer Engineer",

    modal_overview: "Overview",
    modal_architecture: "Architecture",
    modal_technologies: "Technologies",
    modal_navigation: "Navigation",
    modal_cv: "Computer Vision",
    modal_contribution: "My Contribution",
    modal_challenges: "Challenges",
    modal_results: "Results",
    modal_close: "Close",
    modal_github: "View on GitHub",
  },

  tr: {
    nav_about: "Hakkımda",
    nav_projects: "Projeler",
    nav_experience: "Deneyim",
    nav_skills: "Yetenekler",
    nav_achievements: "Başarılar",
    nav_research: "Araştırma",
    nav_contact: "İletişim",

    hero_greeting: "Merhaba, ben",
    hero_title: "Bilgisayar Mühendisiyim",
    hero_tag_cv: "Bilgisayarla Görme",
    hero_tag_sw: "Yazılım Geliştirme",
    hero_description: "Yazılım mühendisliği, yapay zekâ, bilgisayarla görme ve robotik alanlarını bir araya getirerek akıllı sistemler geliştiriyorum.",
    hero_cta_projects: "Projelerimi Gör",
    hero_cta_cv: "CV'mi İndir",
    hero_badge: "Yeni fırsatlara açığım",

    about_label: "Kimim",
    about_title: "Hakkımda",
    about_p1: "İstanbul Sabahattin Zaim Üniversitesi Bilgisayar Mühendisliği bölümünden (2022–2026) mezun oluyorum. Yazılım, yapay zekâ ve fiziksel dünyanın kesişiminde sistemler geliştirmeye ilgi duyuyorum.",
    about_p2: "Çalışmalarım otonom robotik, gerçek zamanlı bilgisayarla görme, gömülü sistemler ve full-stack yazılım geliştirmeyi kapsıyor. TurtleBot üzerinde SLAM tabanlı navigasyon kurmaktan mobil uygulamalar için özel nesne tespiti modelleri eğitmeye kadar karmaşık mühendislik problemleriyle çalışmaktan keyif alıyorum.",
    about_p3: "Araştırma projelerine katkıda bulundum, TEKNOFEST'te yarıştım, bir konferans bildirisi yayınladım ve stajlarım sırasında gerçek yazılım çözümleri geliştirdim. Her zaman çözülmeye değer yeni bir problem arıyorum.",
    about_university: "Üniversite",
    about_degree: "Bölüm",
    about_degree_val: "Bilgisayar Mühendisliği (Lisans)",
    about_period: "Dönem",
    stat_projects: "Büyük Proje",
    stat_exp: "Profesyonel Deneyim",
    stat_pub: "Araştırma Yayını",
    stat_teknofest: "Finalist",

    projects_label: "Neler Geliştirdim",
    projects_title: "Öne Çıkan Projeler",
    view_project: "Detayları Gör",

    exp_label: "Nerelerde Çalıştım",
    exp_title: "Deneyim",

    skills_label: "Neler Kullanıyorum",
    skills_title: "Teknik Yetenekler",

    ach_label: "Ödüller",
    ach_title: "Başarılar",
    ach_competition: "Yapay Zeka ile Havacılık Yarışması",
    ach_desc: "Takım Kaptanı olarak görev aldım. 122 takım arasından ilk 33'e girerek finale kalındı ve <strong>16. sırada</strong> tamamlandı.",
    ach_tag1: "Takım Kaptanı",
    ach_tag2: "Finalist",

    research_label: "Akademik Çalışmalar",
    research_title: "Araştırma & Yayınlar",
    pub_title: "Geleneksel ve Derin Öğrenme Tabanlı Yüz Tanıma Algoritmalarının Performans Değerlendirmesi",
    pub_venue: "Uluslararası Açık Kaynak Konferansı Bildirileri",
    pub_desc: "Klasik yüz tanıma yöntemlerinin modern derin öğrenme yaklaşımlarıyla karşılaştırıldığı, çoklu veri setleri üzerinde ampirik ölçümler içeren bir çalışma.",
    pub_read: "Yayını Görüntüle →",
    cert_title: "Sertifikalar",
    edu_title: "Eğitim",
    edu_degree: "Bilgisayar Mühendisliği (Lisans)",
    lang_title: "Diller",
    lang_turkish: "Türkçe",
    lang_english: "İngilizce",
    lang_native: "Anadil",

    contact_label: "İletişime Geç",
    contact_title: "Birlikte bir şeyler geliştirelim.",
    contact_intro: "Yeni fırsatlara, iş birliklerine ve ilginç sohbetlere açığım. Çekinmeden ulaşabilirsin.",
    form_name: "Ad",
    form_name_ph: "Adınız",
    form_email: "E-posta",
    form_email_ph: "eposta@ornek.com",
    form_message: "Mesaj",
    form_message_ph: "Mesajınız...",
    form_send: "Mesaj Gönder",
    form_success: "✓ Teşekkürler! Mesajınız hazırlandı.",
    form_error_name: "Lütfen adınızı girin.",
    form_error_email: "Lütfen geçerli bir e-posta adresi girin.",
    form_error_message: "Lütfen bir mesaj girin.",

    footer_role: "Bilgisayar Mühendisi",

    modal_overview: "Genel Bakış",
    modal_architecture: "Mimari",
    modal_technologies: "Teknolojiler",
    modal_navigation: "Navigasyon",
    modal_cv: "Bilgisayarla Görme",
    modal_contribution: "Katkım",
    modal_challenges: "Zorluklar",
    modal_results: "Sonuçlar",
    modal_close: "Kapat",
    modal_github: "GitHub'da Görüntüle",
  }
};

/* ============================================================
   PROJECT DATA
   ============================================================ */
const projects = [
  {
    id: "delivery-robot",
    icon: "🤖",
    title: { en: "Autonomous Delivery Robot", tr: "Otonom Teslimat Robotu" },
    badge: { en: "Graduation Project", tr: "Bitirme Projesi" },
    description: {
      en: "An indoor autonomous delivery robot built on ROS 1, combining SLAM mapping, path planning, and face recognition for secure delivery verification.",
      tr: "ROS 1 üzerinde geliştirilen, SLAM haritalama, rota planlama ve teslimat doğrulaması için yüz tanıma içeren, iç mekân otonom teslimat robotu."
    },
    technologies: ["ROS 1", "Python", "OpenCV", "GMapping SLAM", "TEB Planner", "Dijkstra", "MTCNN", "FaceNet"],
    image: null,
    github: "#",
    details: {
      overview: {
        en: "The Autonomous Delivery Robot is my graduation project — an indoor delivery system built on a TurtleBot 2 (Kobuki) base, running entirely on ROS 1. The goal was to design a robot capable of navigating a mapped indoor environment autonomously and verifying the identity of the recipient before completing a delivery.",
        tr: "Otonom Teslimat Robotu, TurtleBot 2 (Kobuki) tabanı üzerinde, tamamen ROS 1 üzerinde çalışan bir iç mekân teslimat sistemidir ve bitirme projemdir. Amaç, haritalanmış bir iç mekânda otonom şekilde gezinebilen ve teslimatı tamamlamadan önce alıcının kimliğini doğrulayabilen bir robot tasarlamaktı."
      },
      architecture: {
        en: "The system architecture follows a modular ROS node structure: a mapping node (GMapping SLAM) builds and maintains the occupancy grid, a global planner (Dijkstra) computes the optimal route, and a local planner (TEB) handles real-time obstacle avoidance and smooth trajectory execution.",
        tr: "Sistem mimarisi modüler bir ROS node yapısını takip eder: bir haritalama node'u (GMapping SLAM) occupancy grid'i oluşturur ve günceller, bir global planlayıcı (Dijkstra) en uygun rotayı hesaplar, bir lokal planlayıcı (TEB) ise gerçek zamanlı engel kaçınma ve yumuşak rota takibini yönetir."
      },
      technologies: {
        en: "ROS 1, Python, OpenCV, GMapping SLAM, TEB Local Planner, Dijkstra Global Planner, MTCNN for face detection, and FaceNet for face recognition.",
        tr: "ROS 1, Python, OpenCV, GMapping SLAM, TEB Lokal Planlayıcı, Dijkstra Global Planlayıcı, yüz tespiti için MTCNN ve yüz tanıma için FaceNet."
      },
      navigation: {
        en: "Global path planning is handled by the Dijkstra algorithm, which computes the shortest collision-free route across the mapped environment. Local navigation relies on the Timed Elastic Band (TEB) planner, which continuously adjusts the trajectory in real time to avoid dynamic obstacles while keeping the motion smooth.",
        tr: "Global rota planlaması, haritalanmış ortamda en kısa çarpışmasız rotayı hesaplayan Dijkstra algoritması ile yapılır. Lokal navigasyon ise, dinamik engellerden kaçınırken hareketi yumuşak tutmak için rotayı gerçek zamanlı olarak sürekli ayarlayan Timed Elastic Band (TEB) planlayıcısına dayanır."
      },
      computerVision: {
        en: "For delivery verification, the robot uses MTCNN to detect faces in the camera feed and FaceNet to generate facial embeddings for recognition, confirming that the correct recipient is present before releasing the delivery.",
        tr: "Teslimat doğrulaması için robot, kamera görüntüsünde yüzleri tespit etmek amacıyla MTCNN'i ve tanıma için yüz gömme (embedding) vektörleri üretmek amacıyla FaceNet'i kullanır; bu sayede teslimat öncesinde doğru alıcının bulunduğu doğrulanır."
      },
      contribution: {
        en: "I designed and implemented the full navigation stack, integrated the SLAM mapping pipeline, tuned the local and global planners for the robot's physical constraints, and developed the face-detection/recognition module for delivery verification.",
        tr: "Navigasyon yığınının tamamını tasarladım ve uyguladım, SLAM haritalama boru hattını entegre ettim, lokal ve global planlayıcıları robotun fiziksel kısıtlarına göre ayarladım ve teslimat doğrulaması için yüz tespiti/tanıma modülünü geliştirdim."
      },
      challenges: {
        en: "The biggest challenges were tuning the TEB planner for the Kobuki base's specific kinematics to avoid jerky motion, and optimizing the face recognition pipeline to run reliably under varying lighting conditions typical of indoor environments.",
        tr: "En büyük zorluklar, sarsıntılı hareketten kaçınmak için TEB planlayıcısının Kobuki tabanının kinematik özelliklerine göre ayarlanması ve iç mekânlarda tipik olan değişken ışık koşullarında yüz tanıma boru hattının güvenilir çalışmasını sağlamaktı."
      },
      results: {
        en: "The robot successfully completed autonomous navigation across mapped indoor routes and reliably verified recipient identity before delivery completion, demonstrating a functional end-to-end autonomous delivery pipeline.",
        tr: "Robot, haritalanmış iç mekân rotalarında otonom navigasyonu başarıyla tamamladı ve teslimat öncesinde alıcı kimliğini güvenilir şekilde doğruladı; böylece uçtan uca çalışan bir otonom teslimat boru hattı ortaya çıktı."
      }
    }
  },
  {
    id: "waste-detection",
    icon: "♻️",
    title: { en: "Waste Detection App", tr: "Waste Detection App" },
    badge: { en: "Mobile Application", tr: "Mobil Uygulama" },
    description: {
      en: "A mobile app that detects waste categories — glass, metal, organic, paper, and plastic — in real time using a custom-trained YOLOv8 model.",
      tr: "Cam, metal, organik, kağıt ve plastik atık kategorilerini gerçek zamanlı tespit eden, özel eğitilmiş YOLOv8 modeli kullanan bir mobil uygulama."
    },
    technologies: ["Flutter", "Dart", "YOLOv8", "TensorFlow Lite", "SQLite"],
    image: null,
    github: "#",
    details: {
      overview: {
        en: "Waste Detection App is a mobile application designed to help users correctly identify and sort waste. The team collected and labeled a custom dataset covering five waste categories: glass, metal, organic, paper, and plastic.",
        tr: "Waste Detection App, kullanıcıların atıkları doğru şekilde tanımlamasına ve ayırmasına yardımcı olmak için tasarlanmış bir mobil uygulamadır. Ekip, cam, metal, organik, kağıt ve plastik olmak üzere beş atık kategorisini kapsayan özgün bir veri seti topladı ve etiketledi."
      },
      architecture: {
        en: "The app is built with Flutter for cross-platform UI, with a YOLOv8 object detection model converted to TensorFlow Lite format for efficient on-device inference. Detection history is stored locally using SQLite.",
        tr: "Uygulama, çapraz platform arayüzü için Flutter ile geliştirildi; verimli cihaz üzerinde çıkarım için TensorFlow Lite formatına dönüştürülmüş bir YOLOv8 nesne tespit modeli kullanıldı. Tespit geçmişi yerel olarak SQLite ile saklanıyor."
      },
      technologies: {
        en: "Flutter, Dart, YOLOv8, TensorFlow Lite, SQLite.",
        tr: "Flutter, Dart, YOLOv8, TensorFlow Lite, SQLite."
      },
      navigation: null,
      computerVision: {
        en: "The core detection model is YOLOv8, trained on the team's custom-labeled dataset and exported to TensorFlow Lite for efficient real-time inference directly on mobile devices, supporting both live camera feed and gallery image analysis.",
        tr: "Ana tespit modeli, ekibin özel etiketlediği veri seti üzerinde eğitilen ve mobil cihazlarda gerçek zamanlı çıkarım için TensorFlow Lite'a aktarılan YOLOv8'dir; hem canlı kamera görüntüsü hem de galeriden görüntü analizini destekler."
      },
      contribution: {
        en: "I contributed to dataset collection and labeling, trained and evaluated the YOLOv8 model, and worked on integrating the TFLite model into the Flutter application alongside the local storage logic.",
        tr: "Veri seti toplama ve etiketlemeye katkıda bulundum, YOLOv8 modelini eğitip değerlendirdim ve TFLite modelinin yerel depolama mantığıyla birlikte Flutter uygulamasına entegrasyonunda çalıştım."
      },
      challenges: {
        en: "Building a balanced, well-labeled dataset across five visually similar waste categories was a significant challenge, along with optimizing the model size and inference speed for smooth performance on mobile hardware.",
        tr: "Görsel olarak birbirine benzeyen beş atık kategorisinde dengeli ve iyi etiketlenmiş bir veri seti oluşturmak, mobil donanımda akıcı performans için model boyutunu ve çıkarım hızını optimize etmekle birlikte önemli bir zorluktu."
      },
      results: {
        en: "The final application reliably detects waste categories in real time from both the camera and gallery, providing an intuitive tool to support correct waste sorting.",
        tr: "Nihai uygulama, hem kameradan hem galeriden gerçek zamanlı olarak atık kategorilerini güvenilir şekilde tespit ederek, doğru atık ayrıştırmayı destekleyen sezgisel bir araç sunuyor."
      }
    }
  },
  {
    id: "air-quality",
    icon: "🌫️",
    title: { en: "Fuzzy Logic Based Air Quality Monitoring System", tr: "Bulanık Mantık Tabanlı Hava Kalitesi İzleme Sistemi" },
    badge: { en: "Embedded System", tr: "Gömülü Sistem" },
    description: {
      en: "An embedded system that reads temperature, humidity, and gas sensor data in real time and computes an air quality score using Mamdani fuzzy logic.",
      tr: "Sıcaklık, nem ve gaz sensör verilerini gerçek zamanlı okuyup Mamdani bulanık mantık algoritmasıyla hava kalitesi skoru üreten gömülü bir sistem."
    },
    technologies: ["Python", "scikit-fuzzy", "Arduino", "C++", "DHT22", "MQ-135", "Tkinter", "Matplotlib"],
    image: null,
    github: "#",
    details: {
      overview: {
        en: "This project implements a real-time air quality monitoring system that combines embedded sensor readings with a fuzzy logic inference engine to produce an interpretable air quality score, rather than relying on hard-coded threshold rules.",
        tr: "Bu proje, sabit eşik değer kurallarına dayanmak yerine, gömülü sensör okumalarını bir bulanık mantık çıkarım motoruyla birleştirerek yorumlanabilir bir hava kalitesi skoru üreten gerçek zamanlı bir izleme sistemi geliştirir."
      },
      architecture: {
        en: "A DHT22 sensor reads temperature and humidity while an MQ-135 sensor measures gas concentration, both connected to an Arduino. The Arduino streams sensor readings over serial communication to a Python application, which runs the Mamdani fuzzy inference and visualizes results with Tkinter and Matplotlib.",
        tr: "Bir DHT22 sensörü sıcaklık ve nemi ölçerken bir MQ-135 sensörü gaz konsantrasyonunu ölçer; her ikisi de bir Arduino'ya bağlıdır. Arduino, sensör okumalarını seri haberleşme üzerinden bir Python uygulamasına aktarır; bu uygulama Mamdani bulanık çıkarımını çalıştırır ve sonuçları Tkinter ve Matplotlib ile görselleştirir."
      },
      technologies: {
        en: "Python, scikit-fuzzy, Arduino (C++), DHT22 temperature/humidity sensor, MQ-135 gas sensor, Tkinter for the GUI, Matplotlib for visualization.",
        tr: "Python, scikit-fuzzy, Arduino (C++), DHT22 sıcaklık/nem sensörü, MQ-135 gaz sensörü, arayüz için Tkinter, görselleştirme için Matplotlib."
      },
      navigation: null,
      computerVision: null,
      contribution: {
        en: "I designed the fuzzy membership functions and rule base using scikit-fuzzy, implemented the Arduino-to-Python serial communication protocol, and built the Tkinter interface with live Matplotlib plotting of sensor trends and the resulting air quality score.",
        tr: "scikit-fuzzy kullanarak bulanık üyelik fonksiyonlarını ve kural tabanını tasarladım, Arduino-Python seri haberleşme protokolünü uyguladım ve sensör trendlerini ile ortaya çıkan hava kalitesi skorunu canlı Matplotlib grafikleriyle gösteren Tkinter arayüzünü oluşturdum."
      },
      challenges: {
        en: "Defining fuzzy membership functions that produced meaningful, real-world-consistent air quality scores required careful calibration, as did maintaining a stable, low-latency serial link between the Arduino and Python application.",
        tr: "Gerçek dünyayla tutarlı, anlamlı hava kalitesi skorları üreten bulanık üyelik fonksiyonlarının tanımlanması dikkatli bir kalibrasyon gerektirdi; aynı şekilde Arduino ve Python uygulaması arasında kararlı, düşük gecikmeli bir seri bağlantının sürdürülmesi de zorluydu."
      },
      results: {
        en: "The system successfully produces a continuous, real-time air quality score derived from live sensor data, with a working graphical interface for monitoring trends over time.",
        tr: "Sistem, canlı sensör verilerinden türetilen sürekli, gerçek zamanlı bir hava kalitesi skoru üretmeyi ve zaman içindeki eğilimleri izlemek için çalışan bir grafik arayüzü sunmayı başarıyla gerçekleştirdi."
      }
    }
  }
];

/* ============================================================
   EXPERIENCE DATA
   ============================================================ */
const experiences = [
  {
    role: { en: "CRM Intern", tr: "CRM Stajyeri" },
    company: "ATP Yazılım ve Teknoloji A.Ş.",
    period: { en: "Sep 2025 – Oct 2025", tr: "Eylül 2025 – Ekim 2025" },
    points: {
      en: [
        "Analyzed customer and lead record structures within the Microsoft Dynamics 365 (CRM) platform and their relation to business processes.",
        "Gained hands-on experience in requirement management and process documentation by reviewing real business analysis reports.",
        "Actively participated in customer meetings, contributing to the identification of business requirements."
      ],
      tr: [
        "Microsoft Dynamics 365 (CRM) platformunda müşteri ve lead kayıt yapıları incelenerek iş süreçleriyle ilişkisi analiz edildi.",
        "Gerçek iş analizi raporları değerlendirilerek gereksinim yönetimi ve süreç dokümantasyonu konularında deneyim kazanıldı.",
        "Müşteri toplantılarına aktif katılım sağlanarak iş gereksinimlerinin belirlenmesi süreçlerine katkıda bulunuldu."
      ]
    },
    technologies: ["Microsoft Dynamics 365", "CRM", "Business Analysis"]
  },
  {
    role: { en: "IT Intern", tr: "Bilgi İşlem Stajyeri" },
    company: "Würth Sanayi Ürünleri Ticaret Ltd. Şti.",
    period: { en: "Jul 2025 – Aug 2025", tr: "Temmuz 2025 – Ağustos 2025" },
    points: {
      en: [
        "Developed and deployed an internal role-based web system (admin, user, etc.) using ASP.NET Core MVC to streamline internal company operations.",
        "Integrated an MSSQL database with Entity Framework Core, digitizing manual processes and automating CRUD operations to improve operational efficiency."
      ],
      tr: [
        "Şirket içi operasyonları hızlandırmak amacıyla ASP.NET Core MVC ile kullanıcı rolleri bazlı (admin, kullanıcı vb.) dahili bir web sistemi geliştirildi ve aktif kullanıma alındı.",
        "Entity Framework Core ile MSSQL veritabanı entegre edilerek manuel süreçler dijitalleştirildi; veri işlemleri ve CRUD operasyonlarının otomatikleştirilmesiyle operasyonel verimlilik artırıldı."
      ]
    },
    technologies: ["ASP.NET Core MVC", "Entity Framework Core", "MSSQL"]
  },
  {
    role: { en: "Undergraduate Researcher", tr: "Lisans Araştırmacısı" },
    company: "İZÜ Nuclear Detectors and Robotics Application and Research Center",
    period: { en: "Jan 2024 – Jun 2025", tr: "Ocak 2024 – Haziran 2025" },
    points: {
      en: [
        "Developed foundational projects in image processing and computer vision.",
        "Gained practical experience with Linux system administration, YOLO, MATLAB, Python, and OpenCV."
      ],
      tr: [
        "Görüntü işleme ve bilgisayarla görme alanında temel projeler geliştirildi.",
        "Linux Sistem Yönetimi, YOLO, MATLAB, Python ve OpenCV ile pratik deneyim kazanıldı."
      ]
    },
    technologies: ["Linux", "YOLO", "MATLAB", "Python", "OpenCV"]
  },
  {
    role: { en: "Instructor / Mentor", tr: "Eğitmen Mentor - Bursiyer" },
    company: "Türkiye Teknoloji Takımı (T3) Vakfı",
    period: { en: "Mar 2023 – Feb 2024", tr: "Mart 2023 – Şubat 2024" },
    points: {
      en: [
        "Delivered robotics coding education using DeneyapKart, developed by Baykar Teknoloji.",
        "Selected among distinguished candidates after succeeding in a rigorous three-stage examination process."
      ],
      tr: [
        "Baykar Teknoloji tarafından geliştirilen DeneyapKart ile robotik kodlama eğitimi verildi.",
        "Zorlu üç aşamalı sınavda başarı gösterilerek seçkin adaylar arasından seçildi."
      ]
    },
    technologies: ["DeneyapKart", "Robotics Education"]
  }
];

/* ============================================================
   SKILLS DATA
   ============================================================ */
const skillCategories = [
  {
    icon: "💻",
    title: { en: "Programming", tr: "Programlama Dilleri" },
    skills: ["Python", "C/C++", "SQL"]
  },
  {
    icon: "🧠",
    title: { en: "AI & Computer Vision", tr: "Yapay Zekâ & Bilgisayarla Görme" },
    skills: ["YOLO", "OpenCV", "TensorFlow Lite", "MATLAB"]
  },
  {
    icon: "🤖",
    title: { en: "Robotics", tr: "Robotik" },
    skills: ["ROS 1", "TurtleBot 2", "GMapping SLAM", "TEB Planner", "Dijkstra"]
  },
  {
    icon: "⚙️",
    title: { en: "Software Development", tr: "Yazılım Geliştirme" },
    skills: ["ASP.NET Core", "Entity Framework Core", "MSSQL", "Flutter", "Dart"]
  },
  {
    icon: "🛠️",
    title: { en: "Tools", tr: "Araçlar" },
    skills: ["Git", "GitHub", "Linux", "SAP"]
  }
];

/* ============================================================
   CERTIFICATES DATA
   ============================================================ */
const certificates = [
  { name: { en: "Linux 101, 201, 301, 401", tr: "Temel Linux 101, 201, 301, 401" }, issuer: "Turkcell Geleceği Yazanlar" },
  { name: { en: "Version Control: Git & GitHub", tr: "Sürüm Kontrolleri: Git ve GitHub" }, issuer: "BTK Akademi" },
  { name: { en: "Microsoft SQL Server – Beginner to Advanced", tr: "Microsoft SQL Server ile Sıfırdan İleri Seviyeye SQL Kursu" }, issuer: "Udemy" }
];

/* ============================================================
   STATE
   ============================================================ */
let currentLang = localStorage.getItem('portfolio-lang') || 'en';

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(currentLang);
  renderProjects();
  renderExperience();
  renderSkills();
  renderCertificates();
  initNavbarScroll();
  initMobileMenu();
  initSmoothScroll();
  initActiveNav();
  initScrollReveal();
  initModal();
  initBackToTop();
  initContactForm();
  initNeuralCanvas();
});

/* ============================================================
   LANGUAGE SWITCHER
   ============================================================ */
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('portfolio-lang', lang);
  applyLanguage(lang);
  renderProjects();
  renderExperience();
  renderSkills();
  renderCertificates();
}

function applyLanguage(lang) {
  document.documentElement.setAttribute('lang', lang);

  document.getElementById('btnEN').classList.toggle('active', lang === 'en');
  document.getElementById('btnEN').setAttribute('aria-pressed', lang === 'en');
  document.getElementById('btnTR').classList.toggle('active', lang === 'tr');
  document.getElementById('btnTR').setAttribute('aria-pressed', lang === 'tr');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });
}

function t(key) {
  return translations[currentLang][key] || key;
}

/* ============================================================
   RENDER PROJECTS
   ============================================================ */
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = '';

  projects.forEach(project => {
    const card = document.createElement('article');
    card.className = 'project-card reveal';
    card.setAttribute('role', 'listitem');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', project.title[currentLang]);

    const techTags = project.technologies
      .map(tech => `<span class="skill-tag">${tech}</span>`)
      .join('');

    card.innerHTML = `
      <div class="project-image">
        ${project.image
          ? `<img src="${project.image}" alt="${project.title[currentLang]}" loading="lazy" />`
          : `<span class="project-image-placeholder" aria-hidden="true">${project.icon}</span>`
        }
      </div>
      <div class="project-body">
        <span class="project-badge">${project.badge[currentLang]}</span>
        <h3 class="project-title">${project.title[currentLang]}</h3>
        <p class="project-desc">${project.description[currentLang]}</p>
        <div class="project-tags">${techTags}</div>
      </div>
      <div class="project-actions">
        <a href="${project.github}" class="btn btn-secondary btn-sm" target="_blank" rel="noopener noreferrer" aria-label="GitHub: ${project.title[currentLang]}">
          GitHub
        </a>
        <button class="btn btn-primary btn-sm" data-project-id="${project.id}" aria-label="${t('view_project')}: ${project.title[currentLang]}">
          ${t('view_project')}
        </button>
      </div>
    `;

    card.addEventListener('click', (e) => {
      if (e.target.closest('a')) return;
      openProjectModal(project.id);
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        if (e.target.closest('a')) return;
        e.preventDefault();
        openProjectModal(project.id);
      }
    });

    grid.appendChild(card);
  });

  observeRevealElements();
}

/* ============================================================
   RENDER EXPERIENCE TIMELINE
   ============================================================ */
function renderExperience() {
  const timeline = document.getElementById('experienceTimeline');
  timeline.innerHTML = '';

  experiences.forEach(exp => {
    const item = document.createElement('div');
    item.className = 'timeline-item reveal';
    item.setAttribute('role', 'listitem');

    const pointsList = exp.points[currentLang]
      .map(p => `<li>${p}</li>`)
      .join('');

    const techTags = exp.technologies
      .map(tech => `<span class="skill-tag">${tech}</span>`)
      .join('');

    item.innerHTML = `
      <span class="timeline-dot" aria-hidden="true"></span>
      <div class="timeline-content">
        <div class="timeline-header">
          <span class="timeline-role">${exp.role[currentLang]}</span>
          <span class="timeline-period">${exp.period[currentLang]}</span>
        </div>
        <div class="timeline-company">${exp.company}</div>
        <ul class="timeline-list">${pointsList}</ul>
        <div class="timeline-techs">${techTags}</div>
      </div>
    `;

    timeline.appendChild(item);
  });

  observeRevealElements();
}

/* ============================================================
   RENDER SKILLS
   ============================================================ */
function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  grid.innerHTML = '';

  skillCategories.forEach(cat => {
    const card = document.createElement('div');
    card.className = 'skill-category-card reveal';

    const chips = cat.skills
      .map(skill => `<span class="skill-tag">${skill}</span>`)
      .join('');

    card.innerHTML = `
      <h3 class="skill-category-title">
        <span class="skill-category-icon" aria-hidden="true">${cat.icon}</span>
        ${cat.title[currentLang]}
      </h3>
      <div class="skill-chips">${chips}</div>
    `;

    grid.appendChild(card);
  });

  observeRevealElements();
}

/* ============================================================
   RENDER CERTIFICATES
   ============================================================ */
function renderCertificates() {
  const grid = document.getElementById('certsGrid');
  grid.innerHTML = '';

  certificates.forEach(cert => {
    const card = document.createElement('div');
    card.className = 'cert-card reveal';
    card.innerHTML = `
      <span class="cert-icon" aria-hidden="true">📜</span>
      <div>
        <div class="cert-name">${cert.name[currentLang]}</div>
        <div class="cert-issuer">${cert.issuer}</div>
      </div>
    `;
    grid.appendChild(card);
  });

  observeRevealElements();
}

/* ============================================================
   PROJECT MODAL
   ============================================================ */
function openProjectModal(projectId) {
  const project = projects.find(p => p.id === projectId);
  if (!project) return;

  const overlay = document.getElementById('modalOverlay');
  const content = document.getElementById('modalContent');
  const d = project.details;

  const sectionMap = [
    { key: 'overview', label: t('modal_overview') },
    { key: 'architecture', label: t('modal_architecture') },
    { key: 'technologies', label: t('modal_technologies') },
    { key: 'navigation', label: t('modal_navigation') },
    { key: 'computerVision', label: t('modal_cv') },
    { key: 'contribution', label: t('modal_contribution') },
    { key: 'challenges', label: t('modal_challenges') },
    { key: 'results', label: t('modal_results') },
  ];

  const sectionsHtml = sectionMap
    .filter(s => d[s.key] && d[s.key][currentLang])
    .map(s => `
      <div class="modal-section">
        <div class="modal-section-title">${s.label}</div>
        <p class="modal-section-text">${d[s.key][currentLang]}</p>
      </div>
    `).join('');

  const tagsHtml = project.technologies
    .map(tech => `<span class="skill-tag">${tech}</span>`)
    .join('');

  content.innerHTML = `
    <div class="modal-badge">${project.badge[currentLang]}</div>
    <h2 class="modal-title" id="modalTitle">${project.title[currentLang]}</h2>
    <div class="modal-tags">${tagsHtml}</div>
    ${sectionsHtml}
    <div class="modal-links">
      <a href="${project.github}" class="btn btn-secondary btn-sm" target="_blank" rel="noopener noreferrer">
        ${t('modal_github')}
      </a>
    </div>
  `;

  overlay.hidden = false;
  requestAnimationFrame(() => overlay.classList.add('active'));
  document.body.style.overflow = 'hidden';
  document.getElementById('modalClose').focus();
}

function closeProjectModal() {
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
  setTimeout(() => { overlay.hidden = true; }, 250);
}

function initModal() {
  const overlay = document.getElementById('modalOverlay');
  const closeBtn = document.getElementById('modalClose');

  closeBtn.addEventListener('click', closeProjectModal);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeProjectModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeProjectModal();
    }
  });
}

/* ============================================================
   NAVBAR SCROLL EFFECT
   ============================================================ */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ============================================================
   MOBILE MENU
   ============================================================ */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
        hamburger.setAttribute('aria-expanded', isOpen);
  });

  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ============================================================
   SMOOTH SCROLL
   ============================================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId.length < 2) return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = document.getElementById('navbar').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* ============================================================
   ACTIVE NAVIGATION ON SCROLL
   ============================================================ */
function initActiveNav() {
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, {
    rootMargin: '-40% 0px -55% 0px',
    threshold: 0
  });

  sections.forEach(section => observer.observe(section));
}

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
let revealObserver;

function initScrollReveal() {
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  observeRevealElements();
}

function observeRevealElements() {
  if (!revealObserver) return;
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
    revealObserver.observe(el);
  });
}

/* ============================================================
   BACK TO TOP
   ============================================================ */
function initBackToTop() {
  const btn = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    const shouldShow = window.scrollY > 500;
    btn.hidden = false;
    btn.classList.toggle('visible', shouldShow);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ============================================================
   CONTACT FORM VALIDATION
   ============================================================ */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const successMsg = document.getElementById('formSuccess');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('formName');
    const emailInput = document.getElementById('formEmail');
    const messageInput = document.getElementById('formMessage');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    let isValid = true;

    [nameInput, emailInput, messageInput].forEach(el => el.classList.remove('error'));
    [nameError, emailError, messageError].forEach(el => el.textContent = '');

    if (!nameInput.value.trim()) {
      nameInput.classList.add('error');
      nameError.textContent = t('form_error_name');
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      emailInput.classList.add('error');
      emailError.textContent = t('form_error_email');
      isValid = false;
    }

    if (!messageInput.value.trim()) {
      messageInput.classList.add('error');
      messageError.textContent = t('form_error_message');
      isValid = false;
    }

    if (!isValid) {
      successMsg.hidden = true;
      return;
    }

    successMsg.hidden = false;
    successMsg.querySelector('span').textContent = t('form_success');

    const subject = encodeURIComponent(`Portfolio Contact from ${nameInput.value.trim()}`);
    const body = encodeURIComponent(
      `${messageInput.value.trim()}\n\n— ${nameInput.value.trim()} (${emailInput.value.trim()})`
    );
    form.dataset.mailtoLink = `mailto:merveozrr.01@gmail.com?subject=${subject}&body=${body}`;

    form.reset();

    setTimeout(() => { successMsg.hidden = true; }, 5000);
  });
}

/* ============================================================
   HERO NEURAL NETWORK CANVAS ANIMATION
   ============================================================ */
function initNeuralCanvas() {
  const canvas = document.getElementById('neuralCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let width, height, nodes;
  const NODE_COUNT = 28;
  const MAX_DISTANCE = 140;
  const ACCENT = 'rgba(56, 189, 248, OPACITY)';
  const ACCENT_SEC = 'rgba(129, 140, 248, OPACITY)';

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    width = canvas.width = rect.width;
    height = canvas.height = rect.height;
  }

  function createNodes() {
    nodes = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.5 + 1.5
      });
    }
  }

  function update() {
    nodes.forEach(node => {
      node.x += node.vx;
      node.y += node.vy;

      if (node.x < 0 || node.x > width) node.vx *= -1;
      if (node.y < 0 || node.y > height) node.vy *= -1;
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MAX_DISTANCE) {
          const opacity = (1 - dist / MAX_DISTANCE) * 0.35;
          ctx.strokeStyle = ACCENT.replace('OPACITY', opacity.toFixed(3));
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }

    nodes.forEach((node, idx) => {
      const color = idx % 3 === 0 ? ACCENT_SEC : ACCENT;
      ctx.fillStyle = color.replace('OPACITY', '0.8');
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  function animate() {
    update();
    draw();
    requestAnimationFrame(animate);
  }

  resize();
  createNodes();

  if (prefersReducedMotion) {
    draw();
  } else {
    animate();
  }

  window.addEventListener('resize', () => {
    resize();
    createNodes();
    if (prefersReducedMotion) draw();
  }, { passive: true });
}

