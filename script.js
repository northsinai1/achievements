document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.toggle-btn');
  const contentBox = document.getElementById('content-area');

  const contents = {
    content2023: `
      <div class="timeline">
        <h1>20 23</h1>
        <div class="timeline-item left">
          <div class="timeline-content">
            <h3>أغسطس</h3>
            <p>استثمارات حكومية بشمال سيناء في خطة 23/24 بقيمة 6.5 مليار جنيه تشمل الزراعة والتعليم والخدمات، استكمال مشاريع الري والصرف الصحي وزرع تجمعات زراعية.</p>
            <img class="img" src="./imgs/1.png">
          </div>
        </div>
        <div class="timeline-item right">
          <div class="timeline-content">
            <h3>أكتوبر</h3>
            <p>تنمية شمال سيناء خلال 10 سنوات: إنشاء الملعب الفرعي باستاد العريش، منازل بدوية، سد أم البارد، مدارس ومعاهد، مجمع صناعي، وغيرها من المشروعات الاجتماعية والتعليمية.</p>
            <img class="img" src="./imgs/2.png">
          </div>
        </div>
      </div>
    `,
    content2024: `
      <div class="timeline">
        <h1>20 24</h1>
        <div class="timeline-item left">
          <div class="timeline-content">
            <h3>أبريل</h3>
            <p>مشروع تنمية شمال سيناء: “وصول قوائم الانتظار إلى صفر”، تقديم 1.7 مليون خدمة ضمن مبادرة “100 يوم صحة” حتى مارس، وتحسين في الخدمات الصحية.</p>
            <img class="img" src="./imgs/3.png">
          </div>
        </div>
        <div class="timeline-item right">
          <div class="timeline-content">
            <h3>أبريل</h3>
            <p>وزارة التخطيط تعرض “خطة المواطن الاستثمارية” لمحافظتي شمال وجنوب سيناء للعام المالي 2024/2025.</p>
            <img class="img" src="./imgs/4.png">
          </div>
        </div>
      </div>
    `,
    content2025: `
      <div class="timeline">
        <h1>20 25</h1>
        <div class="timeline-item left">
          <div class="timeline-content">
            <h3>يناير</h3>
            <p>تسليم وحدات سكنية جديدة في مدينة رفح الجديدة، وزيادة عدد المدارس من عدة مدارس متضررة إلى كثير من المدارس المشغّلة، ونقل طلاب ومعلمين لتحسين الوضع التعليمي.</p>
            <img class="img" src="./imgs/5.png">
          </div>
        </div>
        <div class="timeline-item right">
          <div class="timeline-content">
            <h3>أبريل</h3>
            <p>احتفالات العيد القومي بشمال سيناء: افتتاح مجمع مدارس، حضانات، وحدات صحية، مدارس في عدة قرى، افتتاح حضانة “أول خطوة”، حضانة “بسمات”، حضانة “شعاع أمل”، الوحدة الصحية بقاطية.</p>
            <img class="img" src="./imgs/6.png">
          </div>
        </div>
        <div class="timeline-item left">
          <div class="timeline-content">
            <h3>يونيو</h3>
            <p>“إنجازات غير مسبوقة في سيناء خلال النصف الأول من 2025” – تفاصيل من وكالة الأنباء بأنشطة اقتصادية وتنموية وبنية تحتية متعددة.</p>
            <img class="img" src="./imgs/7.png">
          </div>
        </div>
      </div>
    `
  };

  let active = null;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;

      if (active === target) {
        contentBox.classList.remove('show');
        setTimeout(() => contentBox.hidden = true, 350);
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
        active = null;
        return;
      }

      buttons.forEach(b => { 
        b.classList.remove('active'); 
        b.setAttribute('aria-pressed','false'); 
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed','true');

      contentBox.hidden = false;
      contentBox.innerHTML = contents[target] || "";
      setTimeout(() => contentBox.classList.add('show'), 10);

      active = target;
    });
  });
});
