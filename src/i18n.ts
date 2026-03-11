import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation strings
const resources = {
    ar: {
        translation: {
            "nav": {
                "home": "الرئيسية",
                "library": "المكتبة الذكية",
                "articles": "المقالات والدروس",
                "login": "دخول",
                "admin": "الإدارة",
                "add_tool": "إضافة أداة",
                "theme_light": "مضيء",
                "theme_dark": "مظلم"
            },
            "hero": {
                "badge": "الدليل الأضخم والأشمل ذكاءً",
                "title1": "انطلق نحو المستقبل مع",
                "title2": "ELHAWY AI TOOLS",
                "subtitle": "ابحث، اكتشف، واستخدم أحدث أدوات ومواقع الذكاء الاصطناعي التي ستغير طريقة عملك وتضاعف إنتاجيتك فوراً.",
                "search_placeholder": "ابحث عن أداة ذكاء اصطناعي (مثال: كتابة، تصميم)...",
                "search_btn": "بحث"
            },
            "home": {
                "categories_title": "تصفح الأقسام",
                "tools_title": "مكتبة الأدوات الشاملة",
                "tools_count": "{{count}} أداة متاحة"
            },
            "tool": {
                "category": "التصنيف",
                "pricing": "باقة الأسعار",
                "platform": "المنصة",
                "web": "ويب (Web)",
                "back": "رجوع للمكتبة"
            },
            "detail": {
                "engine": "عن الأداة",
                "features": "الإمكانيات والمميزات",
                "tech_details": "تفاصيل تقنية",
                "cta_text": "هل أنت مستعد لمضاعفة إنتاجيتك الآن؟",
                "cta_btn": "بدء الاستخدام الفوري",
                "not_found": "لم يتم العثور على الأداة"
            },
            "admin": {
                "title": "لوحة التحكم",
                "login": "تسجيل الدخول للإدارة",
                "add_new": "إضافة أداة جديدة",
                "edit": "تعديل",
                "delete": "حذف",
                "tools_list": "قائمة الأدوات"
            },
            "footer": {
                "about": "عن المكتبة",
                "faq": "الأسئلة الشائعة",
                "privacy": "سياسة الخصوصية",
                "copyright": "جميع الحقوق محفوظة © {{year}} ELHAWY AI."
            }
        }
    },
    en: {
        translation: {
            "nav": {
                "home": "Home",
                "library": "AI Library",
                "articles": "Articles & Tutorials",
                "login": "Login",
                "admin": "Admin",
                "add_tool": "Submit Tool",
                "theme_light": "Light",
                "theme_dark": "Dark"
            },
            "hero": {
                "badge": "The Largest & Most Comprehensive AI Directory",
                "title1": "Leap into the future with",
                "title2": "ELHAWY AI TOOLS",
                "subtitle": "Search, discover, and use the latest AI tools and websites that will transform your workflow and boost your productivity instantly.",
                "search_placeholder": "Search for an AI tool (e.g., writing, design)...",
                "search_btn": "Search"
            },
            "home": {
                "categories_title": "Browse Categories",
                "tools_title": "Comprehensive Tools Library",
                "tools_count": "{{count}} tools available"
            },
            "tool": {
                "category": "Category",
                "pricing": "Pricing",
                "platform": "Platform",
                "web": "Web",
                "back": "Back to Library"
            },
            "detail": {
                "engine": "About the Tool",
                "features": "Features & Capabilities",
                "tech_details": "Technical Details",
                "cta_text": "Ready to double your productivity right now?",
                "cta_btn": "Start Using Now",
                "not_found": "Tool not found"
            },
            "admin": {
                "title": "Admin Dashboard",
                "login": "Admin Login",
                "add_new": "Add New Tool",
                "edit": "Edit",
                "delete": "Delete",
                "tools_list": "Tools List"
            },
            "footer": {
                "about": "About Us",
                "faq": "FAQ",
                "privacy": "Privacy Policy",
                "copyright": "All rights reserved © {{year}} ELHAWY AI."
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'ar',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
