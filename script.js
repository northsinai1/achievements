document.addEventListener('DOMContentLoaded', () => {
  /* ================== TABS ================== */
  const tabsButtons = document.querySelectorAll('.tabs__btn');
  const contentBox = document.getElementById('content-area');

  const contents = {
    content2023: `
    <h1 class="timeline__year">2023</h1>
      <div class="timeline">
        <div class="timeline-item left">
          <div class="timeline-content">
            <h3>يناير</h3>
            <p>الرئيس السيسي يتابع الاستراتيجية القومية لتعمير سيناء، مع خطط لتنمية وتطوير شمال سيناء ضمن مشروع الاستراتيجية.</p>
            <img class="img" src="./imgs/1-2023.png">
          </div>
        </div>
        <div class="timeline-item right">
          <div class="timeline-content">
            <h3>أبريل</h3>
            <p>إفتتاح مشروعات تنموية كبرى في شمال سيناء احتفالاً بالعيد القومي للسيناء، منها تسليم قطع أراضٍ ورخص بناء لأهالي توسعات ميناء العريش البحري.</p>
            <img class="img" src="./imgs/2-2023.png">
          </div>
        </div>
        <div class="timeline-item left">
          <div class="timeline-content">
            <h3>أغسطس</h3>
            <p>استثمارات حكومية بشمال سيناء في خطة 23/24 بقيمة 6.5 مليار جنيه تشمل الزراعة والتعليم والخدمات.</p>
            <img class="img" src="./imgs/3-2023.png">
          </div>
        </div>
        <div class="timeline-item right">
          <div class="timeline-content">
            <h3>أكتوبر</h3>
            <p>تنمية شمال سيناء خلال 10 سنوات: إنشاء الملعب الفرعي باستاد العريش، مدارس ومعاهد، مجمع صناعي.</p>
            <img class="img" src="./imgs/4-2023.png">
          </div>
        </div>
        <div class="timeline-item left">
          <div class="timeline-content">
            <h3>نوفمبر</h3>
            <p>إعلانات حول جهود الدولة والخطط الجادة لتنمية شمال سيناء تشمل التعليم، الصحة، الخدمات العامة، البنية التحتية، التوسع الزراعي.</p>
            <img class="img" src="./imgs/5-2023.png">
          </div>
        </div>
      </div>
    `,
    content2024: `
    <h1 class="timeline__year">2024</h1>
      <div class="timeline">
        <div class="timeline-item left">
          <div class="timeline-content">
            <h3>فبراير</h3>
            <p>الحكومة تستهدف ضخ استثمارات جديدة لتنمية سيناء، والخطة تشمل تنفيذ مشروعات تنموية متنوعة في مراكز المحافظة مثل رفح، العريش، الشيخ زويد، بئر العبد، الحسنة، نخلة.</p>
            <img class="img" src="./imgs/1-2024.png">
          </div>
        </div>
        <div class="timeline-item right">
          <div class="timeline-content">
            <h3>أبريل</h3>
            <p>إبريل)افتتاح مشروعات تنموية وخدمية كبرى في مختلف مراكز ومدن المحافظة بمناسبة العيد القومي.</p>
            <img class="img" src="./imgs/2-2024.png">
          </div>
        </div>
        <div class="timeline-item left">
          <div class="timeline-content">
            <h3>أبريل</h3>
            <p>مشروع تنمية شمال سيناء: “وصول قوائم الانتظار إلى صفر”، تقديم 1.7 مليون خدمة ضمن مبادرة “100 يوم صحة”.</p>
            <img class="img" src="./imgs/3-2024.png">
          </div>
        </div>
        <div class="timeline-item right">
          <div class="timeline-content">
            <h3>مايو</h3>
            <p>توجيه من محافظ شمال سيناء بسرعة إنهاء المشروعات التابعة للخطة الاستثمارية قبل انتهاء العام المالي.</p>
            <img class="img" src="./imgs/4-2024.png">
          </div>
        </div>
        <div class="timeline-item left">
          <div class="timeline-content">
            <h3>يوليو</h3>
            <p>إعتمادات خطة استثمارية 2024 بلغت أكثر من 451 مليون جنيه.</p>
            <img class="img" src="./imgs/5-2024.png">
          </div>
        </div>
        <div class="timeline-item right">
          <div class="timeline-content">
            <h3>سبتمبر</h3>
            <p>الإعلان عن مشروعات تنموية وخدمية كبرى مخطط تنفيذها ضمن خطة العام المالي 2024/2025.</p>
            <img class="img" src="./imgs/6-2024.png">
          </div>
        </div>
        <div class="timeline-item left">
          <div class="timeline-content">
            <h3>أكتوبر</h3>
            <p>تنفيذ مشروعات تنموية وخدمية بتكلفة حوالي 17.9 مليار جنيه على مستوى شمال وجنوب سيناء.</p>
            <img class="img" src="./imgs/7-2024.png">
          </div>
        </div>
      </div>
    `,
    content2025: `
    <h1 class="timeline__year">2025</h1>
      <div class="timeline">
        <div class="timeline-item left">
          <div class="timeline-content">
            <h3>يناير</h3>
            <p>تسليم وحدات سكنية جديدة في مدينة رفح الجديدة، وزيادة عدد المدارس وتحسين الوضع التعليمي.</p>
            <img class="img" src="./imgs/1-2025.png">
          </div>
        </div>
        <div class="timeline-item right">
          <div class="timeline-content">
            <h3>مارس</h3>
            <p>خطة المواطن الاستثمارية لمحافظة شمال سيناء لعام 2024/2025: تنفيذ 246 مشروع تنموي بخطط استثمارية تُقدَّر بـ6.8 مليار جنيه. التوزيع القطاعي: الإسكان، النقل، الري، التعليم، الصحة.</p>
            <img class="img" src="./imgs/3-2025.png">
          </div>
        </div>
        <div class="timeline-item left">
          <div class="timeline-content">
            <h3>أبريل</h3>
            <p>افتتاح 13 مشروع خدمي في شمال سيناء في العيد القومي؛ من بينها مدارس، حضانات، وحدات صحية، مركز شباب، رفع كفاءة منشآت مثل نادى الهلال بالعريش.</p>
            <img class="img" src="./imgs/4-2025.png">
          </div>
        </div>
        <div class="timeline-item right">
          <div class="timeline-content">
            <h3>مايو</h3>
            <p>احتفالات العيد القومي بشمال سيناء: افتتاح مجمع مدارس، حضانات، وحدات صحية.</p>
            <img class="img" src="./imgs/2-2025.png">
          </div>
        </div>
        <div class="timeline-item left">
          <div class="timeline-content">
            <h3>يونيو</h3>
            <p>“إنجازات غير مسبوقة في سيناء خلال النصف الأول من 2025” – أنشطة اقتصادية وتنموية وبنية تحتية.</p>
            <img class="img" src="./imgs/5-2025.png">
          </div>
        </div>
        <div class="timeline-item right">
          <div class="timeline-content">
            <h3>يوليو</h3>
            <p>استثمارات حكومية بخطة 2025/2026 لشمال سيناء بقيمة 6.6 مليار جنيه، مع التركيز على الزراعة، الصحة، التشييد والبناء، محطات مياه وصرف صحي.</p>
            <img class="img" src="./imgs/6-2025.png">
          </div>
        </div>
      </div>
    `
  };

  let activeTab = null;

  tabsButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;

      if (activeTab === target) {
        contentBox.classList.remove('show');
        setTimeout(() => contentBox.hidden = true, 350);
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
        activeTab = null;
        return;
      }

      tabsButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });

      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');

      contentBox.hidden = false;
      contentBox.innerHTML = contents[target] || "";
      setTimeout(() => contentBox.classList.add('show'), 10);

      activeTab = target;
    });
  });

  /* ================== SLIDER ================== */
  const slides = Array.from(document.querySelectorAll('.slider__slide'));
  const dotsContainer = document.getElementById('dots');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const viewer = document.getElementById('viewer');

  let current = 0;
  let autoplay = true;
  let interval = null;
  const delay = 4000;

  // إنشاء النقاط
  slides.forEach((s, i) => {
    const dot = document.createElement('span');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.dataset.index = i;
    dotsContainer.appendChild(dot);

    dot.addEventListener('click', () => {
      goTo(parseInt(dot.dataset.index));
      restartAutoplay();
    });
  });

  function update() {
    slides.forEach((s, i) => s.classList.toggle('active', i === current));
    Array.from(dotsContainer.children).forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function goTo(idx) {
    current = (idx + slides.length) % slides.length;
    update();
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  nextBtn.addEventListener('click', () => { next(); restartAutoplay(); });
  prevBtn.addEventListener('click', () => { prev(); restartAutoplay(); });

  function startAutoplay() {
    if (interval) clearInterval(interval);
    interval = setInterval(() => { next(); }, delay);
    autoplay = true;
  }

  function stopAutoplay() {
    if (interval) clearInterval(interval);
    autoplay = false;
  }

  function restartAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  viewer.addEventListener('mouseenter', () => stopAutoplay());
  viewer.addEventListener('mouseleave', () => startAutoplay());

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    stopAutoplay();
  } else {
    startAutoplay();
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { prev(); restartAutoplay(); }
    if (e.key === 'ArrowRight') { next(); restartAutoplay(); }
  });

  update();
});
