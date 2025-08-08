// Age buttons
const ageRanges = [
  { range: '1-2', color: '#FCD34D' }, { range: '2-3', color: '#FCD34D' },
  { range: '3-4', color: '#FB923C' }, { range: '4-5', color: '#FB923C' },
  { range: '5-6', color: '#F87171' }, { range: '6-7', color: '#F87171' },
  { range: '7-8', color: '#A78BFA' }, { range: '8-9', color: '#A78BFA' },
  { range: '9-10', color: '#EC4899' }, { range: '10-11', color: '#EC4899' },
  { range: '11-12', color: '#10B981' }, { range: '12-13', color: '#10B981' },
  { range: '13-14', color: '#3B82F6' }, { range: '14-15', color: '#3B82F6' },
  { range: '15-16', color: '#06B6D4' }, { range: '16-17', color: '#06B6D4' },
  { range: '17-18', color: '#8B5CF6' }, { range: '18-19', color: '#8B5CF6' },
  { range: '19-20', color: '#F59E0B' }
];
function createAgeButtons() {
  const ageGrid = document.getElementById('ageGrid');
  ageRanges.forEach(ageData => {
    const button = document.createElement('button');
    button.className = 'age-button';
    button.style.borderColor = ageData.color;
    button.innerHTML = `<span class="age-number">${ageData.range}</span><span class="age-label">Years</span>`;
    button.addEventListener('click', () => {
      document.querySelectorAll('.age-button').forEach(btn => {
        btn.style.backgroundColor = 'white';
        btn.style.color = '#374151';
      });
      button.style.backgroundColor = ageData.color;
      button.style.color = 'white';
    });
    ageGrid.appendChild(button);
  });
}
document.addEventListener('DOMContentLoaded', createAgeButtons);

const courseGrid = document.getElementById("courseGrid");
const newLauriciesGrid = document.getElementById("newLauriciesGrid");



function createCourseCard(data) {
  // data = { img, rating, lang, level, classes, title, desc, age, duration, price, author }
  const card = document.createElement("article");
  card.className = "bg-gray-100 rounded-xl shadow-lg overflow-hidden flex flex-col";
  card.innerHTML = `
    <div class="relative">
      <img src="${data.img || 'assets/kids.png'}" alt="Course Image" class="w-full" />
      <div class="rating-badge" title="Rating">${data.rating || "⭐ 4.9 / 200+ learners"}</div>
    </div>
    <div class="p-4 flex flex-col flex-grow">
      <div class="course-meta-row">
      <div class="lang">${data.lang || 'English'}</div>
      <div class="level">${data.level || 'Intermediate'}</div>
      <div class="classes">${data.classes || '4 classes'}</div>

      <h3>${data.title}</h3>
      <p class="mb-3 text-gray-600 text-sm">${data.desc || ''}</p>
      <div class="course-info-row">
        <div class="info-block">
          <div class="value">${data.age || ''}</div>
        </div>
        <div class="info-block">
          <div class="value">${data.duration || ''}</div>
        </div>
        <div class="info-block">
          <div class="value">${data.price || ''}</div>
        </div>
      </div>
      ${data.author ? `<div class="mt-2 text-sm text-gray-500">By ${data.author}</div>` : ''}
    </div>
  `;
  return card;
}

// Browse Courses example cards (5 cards)
for (let i = 0; i < 5; i++) {
  courseGrid.appendChild(createCourseCard({
    title: "Summer robotics camp: fun projects with auto arduino, Tink...",
    desc: "Build circuits & smart projects like alarms, weather stations, etc",
    age: "7-10 yrs",
    duration: "① 45 Min",
    price: "₹299"
  }));
}

// New Lauricies (5 cards)
for (let i = 0; i < 5; i++) {
  newLauriciesGrid.appendChild(createCourseCard({
    lang: "English",
    title: "Summer robotics camp: fun projects with auto arduino, Tink...",
    desc: "By: Daniel james",
    age: "7-10 yrs",
    duration: "① 45 ",
    price: "₹299"
  }));
}


// Teachers cards
const teacherData = [
  { name: "Andy Brew", degree: "M.Sc, B.Ed", exp: "15+ Years", students: "1000+ Students", subject: "Computer Science", img: "assets/teacher.jpeg" },
  { name: "Andy Brew", degree: "M.Sc, B.Ed", exp: "15+ Years", students: "1000+ Students", subject: "English", img: "assets/teacher.jpeg" },
  { name: "Andy Brew", degree: "M.Sc, B.Ed", exp: "15+ Years", students: "1000+ Students", subject: "Early Educator", img: "assets/teacher.jpeg" },
  { name: "Andy Brew", degree: "M.Sc, B.Ed", exp: "15+ Years", students: "1000+ Students", subject: "Coding", img: "assets/teacher.jpeg" },
  { name: "Andy Brew", degree: "M.Sc, B.Ed", exp: "15+ Years", students: "1000+ Students", subject: "Computer Science", img: "assets/teacher.jpeg" },
  { name: "Andy Brew", degree: "M.Sc, B.Ed", exp: "15+ Years", students: "1000+ Students", subject: "Computer Science", img: "assets/teacher.jpeg" },
];

const container = document.getElementById('teachers');
teacherData.forEach(t => {
  const card = document.createElement('div');
  card.className = 'teacher-card';
  card.innerHTML = `
    <img src="${t.img}" alt="${t.name}" />
    <div class="teacher-name">${t.name}</div>
    <div class="teacher-info">${t.degree} | ${t.exp}</div>
    <div class="teacher-info">${t.students}</div>
    <div class="teacher-subject">${t.subject}</div>
  `;
  container.appendChild(card);
});

// Select all category cards
const categoryCards = document.querySelectorAll(".category-card");

categoryCards.forEach(card => {
  card.addEventListener("click", () => {
    // Remove active class from all
    categoryCards.forEach(c => c.classList.remove("active"));
    // Add active class to clicked one
    card.classList.add("active");
    console.log("Selected Category:", card.dataset.category);
  });
});
const webinarGrid = document.getElementById("webinarGrid");

for (let i = 0; i < 5; i++) {
  webinarGrid.appendChild(createCourseCard({
    lang: "English",
    title: "Summer robotics camp: fun projects with auto arduino, Tink...",
    desc: "By: Daniel james",
    age: "7-10 yrs",
    duration: "① 45 ",
    price: "₹299"
  }));
}
