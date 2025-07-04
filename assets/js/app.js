const header = document.getElementById('mainHeader');
const logoNav = document.getElementById('logo-nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    logoNav.src = './assets/images/logo_white.png';
    header.classList.add('bg-green-700', 'text-white', 'shadow-md');
    header.classList.remove('text-green-800');
  } else {
    logoNav.src = './assets/images/logo.png';
    header.classList.remove('bg-green-700', 'text-white', 'shadow-md');
    header.classList.add('text-green-800');
  }
});

const toggleBtn = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const mobileMenu = document.getElementById('mobileMenu');

toggleBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// MODAL TOGA
const togaData = {
  lushjam: {
    title: "Infused Water 'LUSH JAM'",
    subtitle: "Infused Water Lemon & Madu",
    img: "assets/images/toga_lushjam.png",
    description: "Minuman sehat dari lemon dan madu. Menyegarkan dan membantu proses detoksifikasi.",
    benefits: [
      "Meningkatkan hidrasi tubuh",
      "Membantu detoks alami",
      "Meningkatkan metabolisme"
    ],
    cultivation: "Tidak perlu dibudidayakan. Gunakan lemon segar dan madu sebagai bahan utama."
  },
  
  sejiwa: {
    title: "Jamu 'SEJIWA'",
    subtitle: "Jamu Sachet Herbal",
    img: "assets/images/toga_sejiwa.png",
    description: "Jamu kering praktis berbahan kencur, jahe, kunyit, dan sereh. Dikeringkan dan dikemas higienis.",
    benefits: [
      "Menghangatkan tubuh",
      "Menambah energi",
      "Meningkatkan daya tahan tubuh"
    ],
    cultivation: "Tanam kencur, jahe, kunyit, dan sereh di pekarangan rumah atau pot."
  }
};

function openModal(key) {
  const data = togaData[key];
  if (!data) return;

  document.getElementById('herbal-img').src = data.img;
  document.getElementById('herbal-img').alt = data.title;
  document.getElementById('herbal-title').textContent = data.title;
  document.getElementById('herbal-subtitle').textContent = data.subtitle;
  document.getElementById('herbal-description').textContent = data.description;

  const benefitList = document.getElementById('herbal-benefits');
  benefitList.innerHTML = '';
  data.benefits.forEach(b => {
    const li = document.createElement('li');
    li.textContent = b;
    benefitList.appendChild(li);
  });

  document.getElementById('herbal-cultivation').textContent = data.cultivation;

  document.getElementById('toga-modal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('toga-modal').classList.add('hidden');
}

// MODAL GALERI
function openGaleri(imageUrl) {
  document.getElementById('modalImage').src = imageUrl;
  document.getElementById('imageModal').classList.remove('hidden');
  document.getElementById('imageModal').classList.add('flex');
}

function closeGaleri() {
  document.getElementById('imageModal').classList.add('hidden');
  document.getElementById('imageModal').classList.remove('flex');
}