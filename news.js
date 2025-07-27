// News data for the casino industry
const newsData = {
  en: {
    hero: {
      title: 'Elite Casino News',
      subtitle: 'Stay informed with the latest gaming industry insights, market trends, and exclusive updates from Jordan\'s premier casino authority.'
    },
    articles: [
      {
        id: 1,
        date: 'January 15, 2025',
        title: 'Petra.bet Launches Revolutionary VIP Experience Program',
        excerpt: 'The elite casino platform introduces unprecedented VIP benefits including personal gaming consultants, exclusive tournaments, and premium rewards that set new industry standards.',
        tags: ['VIP Program', 'Innovation', 'Exclusive'],
        featured: true
      },
      {
        id: 2,
        date: 'January 12, 2025',
        title: 'Live Casino Gaming Reaches New Heights in Jordan',
        excerpt: 'Market analysis reveals 40% growth in live dealer game participation, with Petra.bet leading the surge through superior streaming quality and professional dealers.',
        tags: ['Live Casino', 'Market Growth', 'Technology'],
        featured: false
      },
      {
        id: 3,
        date: 'January 10, 2025',
        title: 'Mobile Gaming Revolution: Apps vs Browser Experience',
        excerpt: 'Comprehensive comparison of mobile gaming platforms shows native apps delivering 35% better performance, with Petra.bet\'s app setting the benchmark for excellence.',
        tags: ['Mobile Gaming', 'Technology', 'Performance'],
        featured: false
      },
      {
        id: 4,
        date: 'January 8, 2025',
        title: 'Cryptocurrency Integration Transforms Online Gambling',
        excerpt: 'Digital currency adoption accelerates across gaming platforms, offering enhanced security and faster transactions. Petra.bet leads with comprehensive crypto support.',
        tags: ['Cryptocurrency', 'Security', 'Innovation'],
        featured: false
      },
      {
        id: 5,
        date: 'January 5, 2025',
        title: 'Responsible Gaming Tools Show Significant Impact',
        excerpt: 'Latest studies demonstrate 60% improvement in player well-being through advanced responsible gaming features, with Petra.bet\'s comprehensive approach setting new standards.',
        tags: ['Responsible Gaming', 'Player Safety', 'Research'],
        featured: false
      },
      {
        id: 6,
        date: 'January 3, 2025',
        title: 'Bonus Structure Evolution: Quality Over Quantity',
        excerpt: 'Industry shift towards meaningful bonuses with fair terms gains momentum. Petra.bet\'s transparent bonus system becomes the gold standard for player satisfaction.',
        tags: ['Bonuses', 'Player Value', 'Industry Trends'],
        featured: false
      }
    ]
  },
  ar: {
    hero: {
      title: 'أخبار الكازينو النخبة',
      subtitle: 'ابق على اطلاع بأحدث رؤى صناعة الألعاب واتجاهات السوق والتحديثات الحصرية من سلطة الكازينو الرائدة في الأردن.'
    },
    articles: [
      {
        id: 1,
        date: '15 يناير 2025',
        title: 'بيترا.بت تطلق برنامج تجربة VIP الثوري',
        excerpt: 'منصة الكازينو النخبة تقدم مزايا VIP غير مسبوقة تشمل مستشارين شخصيين للألعاب وبطولات حصرية ومكافآت متميزة تضع معايير جديدة للصناعة.',
        tags: ['برنامج VIP', 'ابتكار', 'حصري'],
        featured: true
      },
      {
        id: 2,
        date: '12 يناير 2025',
        title: 'ألعاب الكازينو المباشر تصل لآفاق جديدة في الأردن',
        excerpt: 'تحليل السوق يكشف عن نمو 40% في مشاركة ألعاب الموزع المباشر، مع قيادة بيترا.بت للارتفاع من خلال جودة البث الفائقة والموزعين المحترفين.',
        tags: ['كازينو مباشر', 'نمو السوق', 'تكنولوجيا'],
        featured: false
      },
      {
        id: 3,
        date: '10 يناير 2025',
        title: 'ثورة الألعاب المحمولة: التطبيقات مقابل تجربة المتصفح',
        excerpt: 'مقارنة شاملة لمنصات الألعاب المحمولة تظهر أن التطبيقات الأصلية تقدم أداءً أفضل بنسبة 35%، مع تطبيق بيترا.بت الذي يضع معيار التميز.',
        tags: ['ألعاب محمولة', 'تكنولوجيا', 'أداء'],
        featured: false
      },
      {
        id: 4,
        date: '8 يناير 2025',
        title: 'تكامل العملة المشفرة يحول القمار عبر الإنترنت',
        excerpt: 'تسارع اعتماد العملة الرقمية عبر منصات الألعاب، مما يوفر أماناً محسناً ومعاملات أسرع. بيترا.بت يقود بدعم شامل للعملات المشفرة.',
        tags: ['عملة مشفرة', 'أمان', 'ابتكار'],
        featured: false
      },
      {
        id: 5,
        date: '5 يناير 2025',
        title: 'أدوات اللعب المسؤول تظهر تأثيراً كبيراً',
        excerpt: 'أحدث الدراسات تظهر تحسناً بنسبة 60% في رفاهية اللاعبين من خلال ميزات اللعب المسؤول المتقدمة، مع نهج بيترا.بت الشامل الذي يضع معايير جديدة.',
        tags: ['لعب مسؤول', 'سلامة اللاعب', 'بحث'],
        featured: false
      },
      {
        id: 6,
        date: '3 يناير 2025',
        title: 'تطور هيكل المكافآت: الجودة على الكمية',
        excerpt: 'التحول الصناعي نحو المكافآت المعنوية بشروط عادلة يكتسب زخماً. نظام المكافآت الشفاف في بيترا.بت يصبح المعيار الذهبي لرضا اللاعبين.',
        tags: ['مكافآت', 'قيمة اللاعب', 'اتجاهات الصناعة'],
        featured: false
      }
    ]
  }
};

function renderNews() {
  const lang = localStorage.getItem('elite-casino-lang') || 'en';
  const content = newsData[lang];
  
  // Update hero section
  document.getElementById('news-hero-title').textContent = content.hero.title;
  document.getElementById('news-hero-subtitle').textContent = content.hero.subtitle;
  
  // Render news articles
  const newsGrid = document.getElementById('news-grid');
  newsGrid.innerHTML = '';
  
  content.articles.forEach((article, index) => {
    const card = document.createElement('div');
    card.className = 'news-card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', (index * 100).toString());
    
    const tagsHTML = article.tags.map(tag => 
      `<span class="news-card-tag">${tag}</span>`
    ).join('');
    
    card.innerHTML = `
      <div class="news-card-date">${article.date}</div>
      <h3 class="news-card-title">${article.title}</h3>
      <p class="news-card-excerpt">${article.excerpt}</p>
      <div class="news-card-tags">
        ${tagsHTML}
      </div>
    `;
    
    // Add featured styling for main article
    if (article.featured) {
      card.style.border = '2px solid #10b981';
      card.style.background = 'linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(15,23,42,0.36) 100%)';
    }
    
    newsGrid.appendChild(card);
  });
  
  // Update footer text
  const disclaimer = document.getElementById('disclaimer');
  if (disclaimer) {
    disclaimer.textContent = lang === 'ar' ? 
      'القمار قد يكون مسبباً للإدمان. العب بمسؤولية وضمن الحدود.' : 
      'Gaming may be habit-forming. Play responsibly and within limits.';
  }
  
  const termsLink = document.getElementById('terms-link');
  if (termsLink) {
    termsLink.textContent = lang === 'ar' ? 'شروط الخدمة' : 'Service Terms';
  }
  
  const privacyLink = document.getElementById('privacy-link');
  if (privacyLink) {
    privacyLink.textContent = lang === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy';
  }
  
  const contactLink = document.getElementById('contact-link');
  if (contactLink) {
    contactLink.textContent = lang === 'ar' ? 'الدعم' : 'Support';
  }
  
  // Update logo text
  const logoText = document.querySelector('.logo-text');
  if (logoText) {
    logoText.textContent = lang === 'ar' ? 'دليل الكازينو النخبة' : 'Elite Casino Guide';
  }
}

// Initialize news rendering when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  renderNews();
  
  // Re-render when language changes
  window.addEventListener('storage', function(e) {
    if (e.key === 'elite-casino-lang') {
      renderNews();
    }
  });
});