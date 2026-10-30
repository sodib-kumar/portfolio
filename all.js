document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  // Language switcher: English, Bangla and Hindi.
  const translations = {
    en: {
      navHome: "Home",
      navAbout: "About",
      navSkills: "Skills",
      navServices: "Services",
      navWork: "Portfolio",
      navContact: "Contact",
      talk: "Let's talk ↗",
      available: "AVAILABLE FOR PROJECTS",
      hello: "Hi, I'm",
      iBuild: "I build as a",
      heroDesc:
        "I create modern, responsive and user-friendly digital experiences using WordPress, Framer, Webflow and custom code. Turning your ideas into websites that work.",
      explore: "Explore my work ↗",
      collaborate: "Let's collaborate ↗",
      findMe: "FIND ME ON",
      scroll: "SCROLL TO EXPLORE",
      aboutKicker: "GET TO KNOW ME",
      aboutTitle: "A little about <em>me.</em>",
      aboutStatement:
        "I don't just build websites. I build <em>digital experiences</em> that connect people and ideas.",
      aboutText1:
        "I'm Sodib Kumar Das, a web developer passionate about building clean, engaging and functional websites. I work with WordPress, Elementor, WooCommerce, Framer, Webflow, UI/UX design and custom HTML, CSS and JavaScript.",
      aboutText2:
        "From business websites and online stores to LMS platforms, travel websites and news portals, I enjoy turning concepts into polished digital products.",
      projectLink: "Have a project in mind? ↗",
      strip1: "Web development",
      strip2: "UI/UX thinking",
      strip3: "Responsive layouts",
      skillKicker: "MY TOOLKIT",
      skillsTitle: "Skills & <em>technologies.</em>",
      skillsSub: "A practical mix of tools for building useful websites.",
      skillNoteTitle: "The right tool for the right job.",
      skillNoteText:
        "I choose tools based on the project's goals, maintainability and the experience the people using it need.",
      serviceKicker: "WHAT I DO",
      servicesTitle: "Services made for <em>your goals.</em>",
      servicesSub:
        "From a clear first idea to a polished website ready to launch.",
      service1Title: "WordPress & Elementor",
      service1Desc:
        "Responsive business websites, landing pages, redesigns and custom layouts.",
      service2Title: "WooCommerce Stores",
      service2Desc:
        "Product pages, variation swatches, cart and checkout experiences.",
      service3Title: "Framer & Webflow",
      service3Desc:
        "Modern visual websites with CMS collections and thoughtful interactions.",
      service4Title: "Custom Development",
      service4Desc:
        "Custom HTML, CSS and JavaScript features built around your needs.",
      service5Title: "LMS & Content Websites",
      service5Desc:
        "Learning platforms, travel sites, news portals and content-heavy pages.",
      service6Title: "UI/UX & Redesign",
      service6Desc:
        "Cleaner layouts, clear navigation and a better experience across devices.",
      workKicker: "SELECTED WORK",
      workTitle: "A few kinds of projects I <em>build.</em>",
      workSub:
        "Demo imagery for layout preview — replace these with screenshots of your actual work.",
      project1: "Business Website",
      project2: "Online Store",
      project3: "Learning Platform",
      project4: "Travel & Tourism",
      project5: "News & Magazine",
      project6: "Custom Website",
      workCTA: "Want to build something similar?",
      workCTALink: "Let's discuss your project ↗",
      journeyKicker: "MY GROWTH",
      journeyTitle: "The journey from <em>2025 to 2027.</em>",
      journeySub:
        "A living roadmap of what I have learned, what I am building, and where I want to go.",
      journeyStatus1: "FOUNDATION",
      journeyTitle1: "Learning the craft",
      journeyDesc1:
        "Built my foundation in WordPress, Elementor and responsive website building while learning how real client projects work.",
      journeyStatus2: "CURRENT FOCUS",
      journeyTitle2: "Expanding my toolkit",
      journeyDesc2:
        "Growing with Framer, Webflow, WooCommerce, UI/UX fundamentals and JavaScript—while improving quality and delivery.",
      journeyStatus3: "NEXT MILESTONE",
      journeyTitle3: "Building at a higher level",
      journeyDesc3:
        "Aim to ship more polished, accessible and maintainable websites, strengthen custom development, and build a stronger portfolio of real outcomes.",
      certKicker: "LEARNING & PROOF",
      certTitle: "Certifications & <em>learning.</em>",
      certSub:
        "A space for verified certificates, courses and professional milestones.",
      certLabel1: "CERTIFICATE SLOT 01",
      certTitle1: "Web Development",
      certDesc1:
        "Add your verified course or certificate name, issuing organization and completion date here.",
      certLabel2: "CERTIFICATE SLOT 02",
      certTitle2: "UI/UX & Design",
      certDesc2:
        "Show a real design course, workshop or credential here when you have one to share.",
      certLabel3: "CERTIFICATE SLOT 03",
      certTitle3: "Frontend Technologies",
      certDesc3:
        "Add a relevant HTML, CSS, JavaScript or Webflow learning milestone with a valid certificate link.",
      certEdit: "Update with your details",
      faqKicker: "GOOD TO KNOW",
      faqTitle: "Frequently asked <em>questions.</em>",
      faqSub: "A few quick answers before we start working together.",
      faqQ1: "What types of websites can you build?",
      faqA1:
        "I build business websites, landing pages, WooCommerce stores, LMS platforms, travel websites, news portals and custom web experiences.",
      faqQ2: "Which platforms and tools do you work with?",
      faqA2:
        "I work with WordPress, Elementor, WooCommerce, Framer, Webflow, HTML, CSS and JavaScript, choosing tools to fit the project.",
      faqQ3: "Will my website work on mobile devices?",
      faqA3:
        "Responsive design is part of the process. I aim for clear layouts and usable interactions across desktop, tablet and mobile screens.",
      faqQ4: "Can you update or fix an existing website?",
      faqA4:
        "Yes. I can help with layout updates, responsive fixes, styling, product pages, checkout improvements and other website refinements.",
      faqQ5: "How do I get started?",
      faqA5:
        "Use the contact form to describe your goals, preferred platform and timeline. We can then discuss the scope and next steps.",
      contactKicker: "LET'S CONNECT",
      contactTitle: "Have an idea?<br>Let's make it <em>real.</em>",
      contactText:
        "Tell me a little about your project. Let's discuss how we can bring it to life.",
      chatWithMe: "Let's chat",
      formTitle: "Send me a message.",
      formIntro: "Your email app will open with the details filled in.",
      labelName: "Your name",
      labelEmail: "Your email",
      labelService: "What do you need?",
      selectService: "Select a service",
      labelMessage: "Tell me about your project",
      formButton: "Prepare message →",
      formNote:
        "This form opens your email app. It does not send data to a server.",
      backTop: "BACK TO TOP ↑",
      formMissing:
        "Please replace CONTACT_EMAIL in script.js with your real email address first.",
      formOpening:
        "Opening your email application. If nothing opens, check your email app settings.",
    },
    bn: {
      navHome: "হোম",
      navAbout: "আমার সম্পর্কে",
      navSkills: "দক্ষতা",
      navServices: "সেবা",
      navWork: "পোর্টফোলিও",
      navContact: "যোগাযোগ",
      talk: "কথা বলুন ↗",
      available: "নতুন প্রজেক্টের জন্য প্রস্তুত",
      hello: "হ্যালো, আমি",
      iBuild: "আমি কাজ করি",
      heroDesc:
        "WordPress, Framer, Webflow এবং কাস্টম কোড ব্যবহার করে আধুনিক, রেসপনসিভ ও ব্যবহারবান্ধব ওয়েবসাইট তৈরি করি। আপনার ধারণাকে কার্যকর ওয়েবসাইটে রূপ দিই।",
      explore: "আমার কাজ দেখুন ↗",
      collaborate: "একসাথে কাজ করি ↗",
      findMe: "আমাকে খুঁজুন",
      scroll: "আরও দেখতে স্ক্রল করুন",
      aboutKicker: "আমার সম্পর্কে জানুন",
      aboutTitle: "আমার সম্পর্কে <em>কিছু কথা।</em>",
      aboutStatement:
        "আমি শুধু ওয়েবসাইট তৈরি করি না। আমি তৈরি করি <em>ডিজিটাল অভিজ্ঞতা</em>, যা মানুষ ও ধারণাকে যুক্ত করে।",
      aboutText1:
        "আমি সোদিব কুমার দাস, পরিষ্কার, আকর্ষণীয় ও কার্যকর ওয়েবসাইট তৈরিতে আগ্রহী একজন ওয়েব ডেভেলপার। আমি WordPress, Elementor, WooCommerce, Framer, Webflow, UI/UX এবং কাস্টম HTML, CSS ও JavaScript নিয়ে কাজ করি।",
      aboutText2:
        "ব্যবসায়িক ওয়েবসাইট, অনলাইন স্টোর, LMS প্ল্যাটফর্ম, ট্রাভেল সাইট ও নিউজ পোর্টাল—বিভিন্ন ধরনের ডিজিটাল প্রজেক্ট তৈরি করতে ভালো লাগে।",
      projectLink: "আপনার কি কোনো প্রজেক্ট আছে? ↗",
      strip1: "ওয়েব ডেভেলপমেন্ট",
      strip2: "UI/UX ভাবনা",
      strip3: "রেসপনসিভ লেআউট",
      skillKicker: "আমার টুলকিট",
      skillsTitle: "দক্ষতা ও <em>প্রযুক্তি।</em>",
      skillsSub: "কার্যকর ওয়েবসাইট তৈরির জন্য ব্যবহারিক কিছু টুল।",
      skillNoteTitle: "সঠিক কাজের জন্য সঠিক টুল।",
      skillNoteText:
        "প্রজেক্টের লক্ষ্য, রক্ষণাবেক্ষণ এবং ব্যবহারকারীর অভিজ্ঞতা বিবেচনা করে টুল নির্বাচন করি।",
      serviceKicker: "আমি যা করি",
      servicesTitle: "আপনার লক্ষ্য অনুযায়ী <em>সেবা।</em>",
      servicesSub:
        "প্রাথমিক ধারণা থেকে প্রকাশের জন্য প্রস্তুত ওয়েবসাইট পর্যন্ত।",
      service1Title: "WordPress ও Elementor",
      service1Desc:
        "রেসপনসিভ ব্যবসায়িক সাইট, ল্যান্ডিং পেজ, রিডিজাইন ও কাস্টম লেআউট।",
      service2Title: "WooCommerce স্টোর",
      service2Desc: "প্রোডাক্ট পেজ, ভ্যারিয়েশন, কার্ট ও চেকআউট কাস্টমাইজেশন।",
      service3Title: "Framer ও Webflow",
      service3Desc: "CMS এবং সুন্দর ইন্টারঅ্যাকশনসহ আধুনিক ওয়েবসাইট।",
      service4Title: "কাস্টম ডেভেলপমেন্ট",
      service4Desc: "আপনার প্রয়োজন অনুযায়ী HTML, CSS ও JavaScript ফিচার।",
      service5Title: "LMS ও কনটেন্ট ওয়েবসাইট",
      service5Desc:
        "লার্নিং প্ল্যাটফর্ম, ট্রাভেল সাইট, নিউজ পোর্টাল ও কনটেন্ট পেজ।",
      service6Title: "UI/UX ও রিডিজাইন",
      service6Desc:
        "পরিষ্কার লেআউট, সহজ নেভিগেশন এবং সব ডিভাইসে ভালো অভিজ্ঞতা।",
      workKicker: "নির্বাচিত কাজ",
      workTitle: "যে ধরনের প্রজেক্ট <em>তৈরি করি।</em>",
      workSub:
        "এগুলো ডেমো ছবি—আপনার বাস্তব প্রজেক্টের স্ক্রিনশট দিয়ে বদলে নিন।",
      project1: "ব্যবসায়িক ওয়েবসাইট",
      project2: "অনলাইন স্টোর",
      project3: "লার্নিং প্ল্যাটফর্ম",
      project4: "ট্রাভেল ও ট্যুরিজম",
      project5: "নিউজ ও ম্যাগাজিন",
      project6: "কাস্টম ওয়েবসাইট",
      workCTA: "এমন কিছু তৈরি করতে চান?",
      workCTALink: "আপনার প্রজেক্ট নিয়ে কথা বলি ↗",
      journeyKicker: "আমার অগ্রগতি",
      journeyTitle: "২০২৫ থেকে <em>২০২৭-এর যাত্রা।</em>",
      journeySub:
        "আমি কী শিখেছি, কী তৈরি করছি এবং সামনে কোথায় যেতে চাই—তার পরিকল্পনা।",
      journeyStatus1: "ভিত্তি তৈরি",
      journeyTitle1: "কাজ শেখা ও ভিত্তি গড়া",
      journeyDesc1:
        "WordPress, Elementor এবং রেসপনসিভ ওয়েবসাইট তৈরির ভিত্তি গড়েছি, পাশাপাশি বাস্তব ক্লায়েন্ট প্রজেক্টের কাজ শিখেছি।",
      journeyStatus2: "বর্তমান লক্ষ্য",
      journeyTitle2: "দক্ষতা ও টুল বাড়ানো",
      journeyDesc2:
        "Framer, Webflow, WooCommerce, UI/UX এবং JavaScript শিখে কাজের মান ও ডেলিভারি উন্নত করছি।",
      journeyStatus3: "পরবর্তী লক্ষ্য",
      journeyTitle3: "আরও উন্নত কাজ তৈরি",
      journeyDesc3:
        "আরও পরিপাটি, অ্যাক্সেসিবল ও সহজে রক্ষণাবেক্ষণযোগ্য ওয়েবসাইট তৈরি এবং বাস্তব কাজের শক্তিশালী পোর্টফোলিও গড়ার লক্ষ্য।",
      certKicker: "শেখা ও প্রমাণ",
      certTitle: "সার্টিফিকেট ও <em>শেখার অভিজ্ঞতা।</em>",
      certSub: "যাচাইকৃত সার্টিফিকেট, কোর্স ও পেশাগত অর্জন যোগ করার জায়গা।",
      certLabel1: "সার্টিফিকেট ০১",
      certTitle1: "ওয়েব ডেভেলপমেন্ট",
      certDesc1:
        "এখানে আপনার যাচাইকৃত কোর্স বা সার্টিফিকেটের নাম, প্রদানকারী প্রতিষ্ঠান এবং তারিখ যোগ করুন।",
      certLabel2: "সার্টিফিকেট ০২",
      certTitle2: "UI/UX ও ডিজাইন",
      certDesc2:
        "শেয়ার করার মতো সার্টিফিকেট থাকলে এখানে ডিজাইন কোর্স বা ওয়ার্কশপের তথ্য দিন।",
      certLabel3: "সার্টিফিকেট ০৩",
      certTitle3: "ফ্রন্টএন্ড প্রযুক্তি",
      certDesc3:
        "HTML, CSS, JavaScript বা Webflow শেখার অর্জন এবং বৈধ সার্টিফিকেট লিংক যোগ করুন।",
      certEdit: "আপনার তথ্য যোগ করুন",
      faqKicker: "জেনে নিন",
      faqTitle: "সাধারণ কিছু <em>প্রশ্ন।</em>",
      faqSub: "একসাথে কাজ শুরু করার আগে কয়েকটি সংক্ষিপ্ত উত্তর।",
      faqQ1: "আপনি কী ধরনের ওয়েবসাইট তৈরি করতে পারেন?",
      faqA1:
        "আমি ব্যবসায়িক ওয়েবসাইট, ল্যান্ডিং পেজ, WooCommerce স্টোর, LMS, ট্রাভেল সাইট, নিউজ পোর্টাল এবং কাস্টম ওয়েবসাইট তৈরি করি।",
      faqQ2: "কোন প্ল্যাটফর্ম ও টুল ব্যবহার করেন?",
      faqA2:
        "প্রজেক্ট অনুযায়ী WordPress, Elementor, WooCommerce, Framer, Webflow, HTML, CSS এবং JavaScript ব্যবহার করি।",
      faqQ3: "ওয়েবসাইট কি মোবাইলে ভালো কাজ করবে?",
      faqA3:
        "রেসপনসিভ ডিজাইন প্রক্রিয়ার অংশ। ডেস্কটপ, ট্যাবলেট ও মোবাইলে পরিষ্কার লেআউট এবং ব্যবহারযোগ্য ইন্টারঅ্যাকশন রাখার চেষ্টা করি।",
      faqQ4: "পুরোনো ওয়েবসাইট আপডেট বা ঠিক করতে পারবেন?",
      faqA4:
        "হ্যাঁ। লেআউট আপডেট, রেসপনসিভ সমস্যা, স্টাইলিং, প্রোডাক্ট পেজ, চেকআউট এবং অন্যান্য উন্নতিতে সাহায্য করতে পারি।",
      faqQ5: "কাজ শুরু করতে কী করতে হবে?",
      faqA5:
        "যোগাযোগ ফর্মে আপনার লক্ষ্য, পছন্দের প্ল্যাটফর্ম এবং সময়সীমা লিখুন। এরপর কাজের পরিধি ও পরবর্তী পদক্ষেপ নিয়ে আলোচনা করা যাবে।",
      contactKicker: "যোগাযোগ করুন",
      contactTitle: "আপনার কোনো ধারণা আছে?<br>চলুন সেটি <em>বাস্তব করি।</em>",
      contactText:
        "আপনার প্রজেক্ট সম্পর্কে কিছু বলুন। কীভাবে বাস্তবায়ন করা যায়, আলোচনা করি।",
      chatWithMe: "চ্যাট করুন",
      formTitle: "আমাকে মেসেজ পাঠান।",
      formIntro: "বিস্তারিতসহ আপনার ইমেইল অ্যাপ খুলবে।",
      labelName: "আপনার নাম",
      labelEmail: "আপনার ইমেইল",
      labelService: "কী ধরনের কাজ দরকার?",
      selectService: "একটি সেবা বেছে নিন",
      labelMessage: "প্রজেক্ট সম্পর্কে লিখুন",
      formButton: "মেসেজ প্রস্তুত করুন →",
      formNote: "এই ফর্ম আপনার ইমেইল অ্যাপ খুলবে। সার্ভারে তথ্য পাঠায় না।",
      backTop: "উপরে ফিরে যান ↑",
      formMissing: "script.js ফাইলে CONTACT_EMAIL-এর জায়গায় আপনার ইমেইল দিন।",
      formOpening:
        "আপনার ইমেইল অ্যাপ খোলা হচ্ছে। না খুললে ইমেইল অ্যাপের সেটিংস দেখুন।",
    },
    hi: {
      navHome: "होम",
      navAbout: "परिचय",
      navSkills: "कौशल",
      navServices: "सेवाएँ",
      navWork: "पोर्टफोलियो",
      navContact: "संपर्क",
      talk: "बात करें ↗",
      available: "नए प्रोजेक्ट के लिए उपलब्ध",
      hello: "नमस्ते, मैं हूँ",
      iBuild: "मैं बनाता हूँ",
      heroDesc:
        "मैं WordPress, Framer, Webflow और कस्टम कोड से आधुनिक, responsive और उपयोगकर्ता-अनुकूल वेबसाइट बनाता हूँ। आपके विचारों को काम करने वाली वेबसाइट में बदलता हूँ।",
      explore: "मेरा काम देखें ↗",
      collaborate: "साथ काम करें ↗",
      findMe: "यहाँ मिलें",
      scroll: "और देखने के लिए स्क्रॉल करें",
      aboutKicker: "मेरे बारे में जानें",
      aboutTitle: "मेरे बारे में <em>थोड़ा।</em>",
      aboutStatement:
        "मैं सिर्फ वेबसाइट नहीं बनाता। मैं ऐसी <em>डिजिटल अनुभव</em> बनाता हूँ जो लोगों और विचारों को जोड़ते हैं।",
      aboutText1:
        "मैं सोदिब कुमार दास हूँ, एक वेब डेवलपर जिसे साफ़, आकर्षक और उपयोगी वेबसाइट बनाना पसंद है। मैं WordPress, Elementor, WooCommerce, Framer, Webflow, UI/UX और कस्टम HTML, CSS व JavaScript के साथ काम करता हूँ।",
      aboutText2:
        "बिज़नेस वेबसाइट, ऑनलाइन स्टोर, LMS प्लेटफ़ॉर्म, ट्रैवल वेबसाइट और न्यूज़ पोर्टल जैसे प्रोजेक्ट बनाना मुझे पसंद है।",
      projectLink: "क्या आपके पास कोई प्रोजेक्ट है? ↗",
      strip1: "वेब डेवलपमेंट",
      strip2: "UI/UX सोच",
      strip3: "Responsive लेआउट",
      skillKicker: "मेरे टूल",
      skillsTitle: "कौशल और <em>तकनीक।</em>",
      skillsSub: "उपयोगी वेबसाइट बनाने के लिए व्यावहारिक टूल।",
      skillNoteTitle: "सही काम के लिए सही टूल।",
      skillNoteText:
        "मैं प्रोजेक्ट के लक्ष्य, रखरखाव और उपयोगकर्ता अनुभव के आधार पर टूल चुनता हूँ।",
      serviceKicker: "मैं क्या करता हूँ",
      servicesTitle: "आपके लक्ष्यों के लिए <em>सेवाएँ।</em>",
      servicesSub: "शुरुआती विचार से लेकर लॉन्च के लिए तैयार वेबसाइट तक।",
      service1Title: "WordPress और Elementor",
      service1Desc:
        "Responsive बिज़नेस वेबसाइट, लैंडिंग पेज, redesign और कस्टम लेआउट।",
      service2Title: "WooCommerce स्टोर",
      service2Desc: "प्रोडक्ट पेज, variations, cart और checkout customization।",
      service3Title: "Framer और Webflow",
      service3Desc: "CMS और उपयोगी interactions वाली आधुनिक वेबसाइट।",
      service4Title: "कस्टम डेवलपमेंट",
      service4Desc: "आपकी ज़रूरत के अनुसार HTML, CSS और JavaScript फीचर।",
      service5Title: "LMS और कंटेंट वेबसाइट",
      service5Desc:
        "लर्निंग प्लेटफ़ॉर्म, ट्रैवल साइट, न्यूज़ पोर्टल और कंटेंट पेज।",
      service6Title: "UI/UX और Redesign",
      service6Desc: "साफ़ लेआउट, आसान navigation और सभी डिवाइस पर बेहतर अनुभव।",
      workKicker: "चुना हुआ काम",
      workTitle: "इस तरह के प्रोजेक्ट <em>बनाता हूँ।</em>",
      workSub:
        "ये डेमो तस्वीरें हैं—इन्हें अपने असली प्रोजेक्ट के स्क्रीनशॉट से बदलें।",
      project1: "बिज़नेस वेबसाइट",
      project2: "ऑनलाइन स्टोर",
      project3: "लर्निंग प्लेटफ़ॉर्म",
      project4: "ट्रैवल और टूरिज़्म",
      project5: "न्यूज़ और मैगज़ीन",
      project6: "कस्टम वेबसाइट",
      workCTA: "क्या आप ऐसा कुछ बनाना चाहते हैं?",
      workCTALink: "अपने प्रोजेक्ट पर बात करें ↗",
      journeyKicker: "मेरी प्रगति",
      journeyTitle: "2025 से <em>2027 तक का सफ़र।</em>",
      journeySub:
        "मैंने क्या सीखा, क्या बना रहा हूँ और आगे कहाँ पहुँचना चाहता हूँ—इसका रोडमैप।",
      journeyStatus1: "बुनियाद",
      journeyTitle1: "काम की बुनियाद सीखना",
      journeyDesc1:
        "WordPress, Elementor और responsive वेबसाइट बनाने की नींव रखी और वास्तविक क्लाइंट प्रोजेक्ट की प्रक्रिया सीखी।",
      journeyStatus2: "वर्तमान लक्ष्य",
      journeyTitle2: "अपने टूल और कौशल बढ़ाना",
      journeyDesc2:
        "Framer, Webflow, WooCommerce, UI/UX और JavaScript में आगे बढ़ते हुए काम की गुणवत्ता और डिलीवरी बेहतर कर रहा हूँ।",
      journeyStatus3: "अगला पड़ाव",
      journeyTitle3: "और बेहतर वेबसाइट बनाना",
      journeyDesc3:
        "अधिक polished, accessible और maintainable वेबसाइट बनाना, custom development मज़बूत करना और वास्तविक काम का बेहतर पोर्टफोलियो बनाना लक्ष्य है।",
      certKicker: "सीखना और प्रमाण",
      certTitle: "प्रमाणपत्र और <em>सीखना।</em>",
      certSub: "सत्यापित प्रमाणपत्र, कोर्स और पेशेवर उपलब्धियाँ जोड़ने की जगह।",
      certLabel1: "प्रमाणपत्र स्लॉट 01",
      certTitle1: "वेब डेवलपमेंट",
      certDesc1:
        "यहाँ अपने सत्यापित कोर्स या प्रमाणपत्र का नाम, जारी करने वाली संस्था और तारीख जोड़ें।",
      certLabel2: "प्रमाणपत्र स्लॉट 02",
      certTitle2: "UI/UX और डिज़ाइन",
      certDesc2:
        "शेयर करने के लिए प्रमाणपत्र हो तो यहाँ डिज़ाइन कोर्स या वर्कशॉप का विवरण जोड़ें।",
      certLabel3: "प्रमाणपत्र स्लॉट 03",
      certTitle3: "फ्रंटएंड तकनीक",
      certDesc3:
        "HTML, CSS, JavaScript या Webflow सीखने की उपलब्धि और प्रमाणपत्र लिंक जोड़ें।",
      certEdit: "अपनी जानकारी जोड़ें",
      faqKicker: "जानने योग्य बातें",
      faqTitle: "अक्सर पूछे जाने वाले <em>सवाल।</em>",
      faqSub: "साथ काम शुरू करने से पहले कुछ छोटे जवाब।",
      faqQ1: "आप किस तरह की वेबसाइट बना सकते हैं?",
      faqA1:
        "मैं बिज़नेस वेबसाइट, landing pages, WooCommerce स्टोर, LMS, ट्रैवल वेबसाइट, न्यूज़ पोर्टल और कस्टम वेबसाइट बनाता हूँ।",
      faqQ2: "आप किन प्लेटफ़ॉर्म और टूल के साथ काम करते हैं?",
      faqA2:
        "प्रोजेक्ट के अनुसार WordPress, Elementor, WooCommerce, Framer, Webflow, HTML, CSS और JavaScript इस्तेमाल करता हूँ।",
      faqQ3: "क्या वेबसाइट मोबाइल पर भी सही चलेगी?",
      faqA3:
        "Responsive design प्रक्रिया का हिस्सा है। मैं desktop, tablet और mobile पर साफ़ layout और उपयोगी interactions बनाने का लक्ष्य रखता हूँ।",
      faqQ4: "क्या आप मौजूदा वेबसाइट में बदलाव या सुधार कर सकते हैं?",
      faqA4:
        "हाँ। मैं layout updates, responsive fixes, styling, product pages, checkout improvements और अन्य सुधारों में मदद कर सकता हूँ।",
      faqQ5: "काम शुरू कैसे करें?",
      faqA5:
        "संपर्क फ़ॉर्म में अपना लक्ष्य, पसंदीदा प्लेटफ़ॉर्म और समयसीमा लिखें। फिर हम काम के दायरे और अगले कदम पर चर्चा कर सकते हैं।",
      contactKicker: "संपर्क करें",
      contactTitle: "कोई विचार है?<br>आइए उसे <em>सच करें।</em>",
      contactText:
        "अपने प्रोजेक्ट के बारे में बताइए। इसे साकार करने के तरीकों पर बात करते हैं।",
      chatWithMe: "बात करें",
      formTitle: "मुझे संदेश भेजें।",
      formIntro: "विवरण के साथ आपका ईमेल ऐप खुलेगा।",
      labelName: "आपका नाम",
      labelEmail: "आपका ईमेल",
      labelService: "आपको क्या चाहिए?",
      selectService: "एक सेवा चुनें",
      labelMessage: "अपने प्रोजेक्ट के बारे में बताएँ",
      formButton: "संदेश तैयार करें →",
      formNote: "यह फ़ॉर्म आपका ईमेल ऐप खोलता है। यह सर्वर पर डेटा नहीं भेजता।",
      backTop: "ऊपर जाएँ ↑",
      formMissing: "script.js में CONTACT_EMAIL की जगह अपना ईमेल पता डालें।",
      formOpening:
        "आपका ईमेल ऐप खुल रहा है। अगर नहीं खुले, तो ईमेल ऐप की सेटिंग जाँचें।",
    },
  };
  const languageSelect = document.getElementById("languageSelect");
  function setLanguage(language) {
    const lang = translations[language] ? language : "en";
    document.documentElement.lang = lang;
    body.classList.toggle("lang-bn", lang === "bn");
    body.classList.toggle("lang-hi", lang === "hi");
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (translations[lang][key] !== undefined)
        el.innerHTML = translations[lang][key];
    });
    if (languageSelect) languageSelect.value = lang;
    try {
      localStorage.setItem("sodib-language", lang);
    } catch (_) {}
    if (typedRole) {
      roleIndex = 0;
      characterIndex = 0;
      deleting = false;
      typedRole.textContent = roles[0];
    }
  }
  const typedRole = document.getElementById("typedRole");
  const roles = [
    "WordPress Developer",
    "Framer Developer",
    "Webflow Developer",
    "UI/UX Designer",
    "Custom Website Developer",
  ];
  let roleIndex = 0,
    characterIndex = 0,
    deleting = false,
    typingTimer;
  function typeRole() {
    if (!typedRole) return;
    if (reducedMotion) {
      typedRole.textContent = roles[roleIndex];
      return;
    }
    const role = roles[roleIndex];
    characterIndex += deleting ? -1 : 1;
    typedRole.textContent = role.slice(0, characterIndex);
    let delay = deleting ? 28 : 58;
    if (!deleting && characterIndex >= role.length) {
      deleting = true;
      delay = 1250;
    } else if (deleting && characterIndex <= 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = 280;
    }
    typingTimer = window.setTimeout(typeRole, delay);
  }
  let savedLanguage = "en";
  try {
    savedLanguage = localStorage.getItem("sodib-language") || "en";
  } catch (_) {}
  setLanguage(savedLanguage);
  languageSelect?.addEventListener("change", (event) =>
    setLanguage(event.target.value),
  );
  typeRole();

  // Responsive mobile menu.
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");
  const menuIcon = menuToggle?.querySelector("i");
  function closeMenu() {
    nav?.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Open menu");
    if (menuIcon) menuIcon.className = "fa-solid fa-bars";
  }
  menuToggle?.addEventListener("click", () => {
    const opened = nav?.classList.toggle("open") || false;
    menuToggle.setAttribute("aria-expanded", String(opened));
    menuToggle.setAttribute("aria-label", opened ? "Close menu" : "Open menu");
    if (menuIcon)
      menuIcon.className = opened ? "fa-solid fa-xmark" : "fa-solid fa-bars";
  });
  nav
    ?.querySelectorAll("a")
    .forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
  document.addEventListener("click", (e) => {
    if (
      nav?.classList.contains("open") &&
      !nav.contains(e.target) &&
      !menuToggle?.contains(e.target)
    )
      closeMenu();
  });

  // Smooth reveal; content remains visible if observers are unsupported.
  const revealElements = document.querySelectorAll(".reveal");
  revealElements.forEach((el) => {
    const siblings = Array.from(el.parentElement?.children || []).filter(
      (child) => child.classList.contains("reveal"),
    );
    el.style.setProperty(
      "--reveal-delay",
      `${Math.min(siblings.indexOf(el), 3) * 70}ms`,
    );
  });
  if (reducedMotion || !("IntersectionObserver" in window))
    revealElements.forEach((el) => el.classList.add("visible"));
  else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -20px 0px" },
    );
    revealElements.forEach((el) => revealObserver.observe(el));
  }

  // Curved scroll progress: the SVG path stays inside a fixed, clipped viewport on phones.
  const progressCurve = document.getElementById("progressCurveFill");
  const progressDot = document.getElementById("progressDot");
  const scrollPercent = document.getElementById("scrollPercent");
  const header = document.querySelector(".header");
  let scrollQueued = false;
  let curveLength = 0;
  try {
    curveLength = progressCurve?.getTotalLength() || 0;
  } catch (_) {}
  if (progressCurve && curveLength)
    progressCurve.style.strokeDasharray = `${curveLength} ${curveLength}`;
  function updateScroll() {
    const root = document.documentElement;
    const maxScroll = Math.max(1, root.scrollHeight - window.innerHeight);
    const progress = Math.max(0, Math.min(1, window.scrollY / maxScroll));
    if (progressCurve && curveLength) {
      progressCurve.style.strokeDashoffset = String(
        curveLength * (1 - progress),
      );
      try {
        const point = progressCurve.getPointAtLength(curveLength * progress);
        progressDot?.setAttribute("cx", point.x);
        progressDot?.setAttribute("cy", point.y);
      } catch (_) {}
    }
    if (scrollPercent)
      scrollPercent.textContent = `${Math.round(progress * 100)
        .toString()
        .padStart(2, "0")}%`;
    header?.classList.toggle("scrolled", window.scrollY > 8);
    scrollQueued = false;
  }
  function onScroll() {
    if (!scrollQueued) {
      scrollQueued = true;
      requestAnimationFrame(updateScroll);
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  window.addEventListener("load", updateScroll);
  updateScroll();

  // Separate day/night and accent-color controls.
  const themeToggle = document.getElementById("themeToggle");
  const colorToggle = document.getElementById("colorToggle");
  const accentColors = ["#f37900", "#2563eb", "#0f9f76", "#d9468f", "#7c3aed"];
  let accentIndex = 0;
  function setTheme(night) {
    document.body.classList.toggle("theme-night", night);
    if (themeToggle) {
      themeToggle.innerHTML = night
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
      themeToggle.setAttribute(
        "aria-label",
        night ? "Switch to day mode" : "Switch to night mode",
      );
      themeToggle.title = night ? "Switch to day mode" : "Switch to night mode";
    }
    try {
      localStorage.setItem("sodib-theme", night ? "night" : "day");
    } catch (_) {}
  }
  try {
    setTheme(localStorage.getItem("sodib-theme") === "night");
  } catch (_) {
    setTheme(false);
  }
  themeToggle?.addEventListener("click", () =>
    setTheme(!document.body.classList.contains("theme-night")),
  );
  function setAccent(index) {
    accentIndex = (index + accentColors.length) % accentColors.length;
    document.documentElement.style.setProperty(
      "--accent",
      accentColors[accentIndex],
    );
    const soft = {
      "#f37900": "#fff0df",
      "#2563eb": "#e8efff",
      "#0f9f76": "#e1f7ef",
      "#d9468f": "#fde8f2",
      "#7c3aed": "#efe8ff",
    }[accentColors[accentIndex]];
    document.documentElement.style.setProperty("--accent-soft", soft);
    colorToggle?.style.setProperty("--swatch", accentColors[accentIndex]);
    try {
      localStorage.setItem("sodib-accent", String(accentIndex));
    } catch (_) {}
  }
  try {
    const storedAccent = Number(localStorage.getItem("sodib-accent"));
    if (
      Number.isInteger(storedAccent) &&
      storedAccent >= 0 &&
      storedAccent < accentColors.length
    )
      accentIndex = storedAccent;
  } catch (_) {}
  setAccent(accentIndex);
  colorToggle?.addEventListener("click", () => setAccent(accentIndex + 1));

  // Smooth custom cursor on mouse/trackpad devices only; never on touch screens.
  const customCursor = document.getElementById("customCursor");
  const finePointer = window.matchMedia("(pointer: fine) and (hover: hover)");
  if (customCursor && finePointer.matches && !reducedMotion) {
    document.body.classList.add("has-custom-cursor");
    let cursorX = window.innerWidth / 2,
      cursorY = window.innerHeight / 2;
    let targetX = cursorX,
      targetY = cursorY;
    window.addEventListener(
      "pointermove",
      (event) => {
        targetX = event.clientX;
        targetY = event.clientY;
        customCursor.classList.add("is-visible");
      },
      { passive: true },
    );
    window.addEventListener("pointerdown", () =>
      customCursor.classList.add("is-clicking"),
    );
    window.addEventListener("pointerup", () =>
      customCursor.classList.remove("is-clicking"),
    );
    document
      .querySelectorAll("a, button, input, textarea, select, label")
      .forEach((el) => {
        el.addEventListener("pointerenter", () =>
          customCursor.classList.add("is-hovering"),
        );
        el.addEventListener("pointerleave", () =>
          customCursor.classList.remove("is-hovering"),
        );
      });
    function moveCursor() {
      cursorX += (targetX - cursorX) * 0.22;
      cursorY += (targetY - cursorY) * 0.22;
      customCursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      requestAnimationFrame(moveCursor);
    }
    requestAnimationFrame(moveCursor);
    window.addEventListener("blur", () =>
      customCursor.classList.remove("is-visible"),
    );
    window.addEventListener("focus", () =>
      customCursor.classList.add("is-visible"),
    );
  } else {
    customCursor?.remove();
  }

  // Highlight the current navigation section.
  const navLinks = document.querySelectorAll(".nav-link");
  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            navLinks.forEach((link) =>
              link.classList.toggle(
                "active",
                link.getAttribute("href") === `#${entry.target.id}`,
              ),
            );
        }),
      { rootMargin: "-28% 0px -62% 0px", threshold: 0 },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((section) => sectionObserver.observe(section));
  }

  // Contact form uses mailto; replace the placeholder with your own address.
  const CONTACT_EMAIL = "sodibkumar52@gmail.com";
  const contactForm = document.getElementById("contactForm");
  const formNote = document.getElementById("formNote");
  contactForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    const lang = languageSelect?.value || "en";
    if (!CONTACT_EMAIL || CONTACT_EMAIL === "your.email@example.com") {
      if (formNote) formNote.textContent = translations[lang].formMissing;
      return;
    }
    const data = new FormData(contactForm);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const project = String(data.get("projectType") || "").trim();
    const message = String(data.get("message") || "").trim();
    const subject = `Website project enquiry from ${name}`;
    const bodyText = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Service: ${project}`,
      "",
      "Project details:",
      message,
    ].join("\n");
    if (formNote) formNote.textContent = translations[lang].formOpening;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
  });
  window.addEventListener("pagehide", () => {
    if (typingTimer) clearTimeout(typingTimer);
  });
});
