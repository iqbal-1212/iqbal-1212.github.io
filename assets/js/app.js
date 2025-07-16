const header = document.getElementById("mainHeader");
const logoNav = document.getElementById("logo-nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    logoNav.src = "./assets/images/logo_white.png";
    header.classList.add("bg-green-700", "text-white", "shadow-md");
    header.classList.remove("text-green-800");
  } else {
    logoNav.src = "./assets/images/logo.png";
    header.classList.remove("bg-green-700", "text-white", "shadow-md");
    header.classList.add("text-green-800");
  }
});

const toggleBtn = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const mobileMenu = document.getElementById("mobileMenu");

toggleBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// MODAL TOGA
const togaData = {
  lushjam: {
    title: "Infused Water 'LUSH JAM'",
    subtitle: "Infused Water Lemon & Madu",
    img: "assets/images/toga_lushjam.png",
    description:
      "Minuman sehat dari lemon dan madu. Menyegarkan dan membantu proses detoksifikasi.",
    benefits: [
      "Meningkatkan hidrasi tubuh",
      "Membantu detoks alami",
      "Meningkatkan metabolisme",
    ],
    cultivation:
      "Tidak perlu dibudidayakan. Gunakan lemon segar dan madu sebagai bahan utama.",
  },

  sejiwa: {
    title: "Jamu 'SEJIWA'",
    subtitle: "Jamu Sachet Herbal",
    img: "assets/images/toga_sejiwa.png",
    description:
      "Jamu kering praktis berbahan kencur, jahe, kunyit, dan sereh. Dikeringkan dan dikemas higienis.",
    benefits: [
      "Menghangatkan tubuh",
      "Menambah energi",
      "Meningkatkan daya tahan tubuh",
    ],
    cultivation:
      "Tanam kencur, jahe, kunyit, dan sereh di pekarangan rumah atau pot.",
  },
};

function openModal(key) {
  const data = togaData[key];
  if (!data) return;

  document.getElementById("herbal-img").src = data.img;
  document.getElementById("herbal-img").alt = data.title;
  document.getElementById("herbal-title").textContent = data.title;
  document.getElementById("herbal-subtitle").textContent = data.subtitle;
  document.getElementById("herbal-description").textContent = data.description;

  const benefitList = document.getElementById("herbal-benefits");
  benefitList.innerHTML = "";
  data.benefits.forEach((b) => {
    const li = document.createElement("li");
    li.textContent = b;
    benefitList.appendChild(li);
  });

  document.getElementById("herbal-cultivation").textContent = data.cultivation;

  document.getElementById("toga-modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("toga-modal").classList.add("hidden");
}

// MODAL GALERI
const galeriData = {
  budidaya: {
    image: "assets/images/galeri (1).jpg",
    title: "Budidaya",
    description: `Kegiatan budidaya tanaman TOGA (Tanaman Obat Keluarga) menjadi fondasi utama dalam upaya kami menciptakan komunitas yang mandiri dalam kesehatan. 
    Dalam gambar ini, terlihat anggota komunitas Herbal Village sedang melakukan penanaman berbagai jenis tanaman herbal seperti jahe, kunyit, sereh, dan kencur di area kebun yang telah disiapkan secara organik. 
    Budidaya ini tidak hanya menekankan aspek pertanian, tetapi juga mengajarkan pentingnya pelestarian lingkungan dan pengenalan tanaman obat sejak dini kepada masyarakat.`,
  },
  pengolahan: {
    image: "assets/images/galeri (2).jpg",
    title: "Proses Pengolahan",
    description: `Setelah dipanen, tanaman herbal melalui proses pengolahan yang higienis dan terstandarisasi. Dalam sesi ini, para anggota komunitas dilatih untuk mengolah hasil kebun menjadi berbagai produk herbal siap pakai seperti jamu, teh herbal, salep tradisional, dan infused water. 
    Kegiatan ini juga menjadi ajang edukasi mengenai cara menjaga kandungan aktif dalam tanaman herbal agar tetap optimal selama proses pengeringan, penggilingan, hingga pengemasan. 
    Tujuannya adalah menghasilkan produk berkualitas tinggi yang aman dan bermanfaat bagi kesehatan, serta memiliki potensi ekonomi lokal.`,
  },
  komunitas: {
    image: "assets/images/galeri (3).jpg",
    title: "Acara Komunitas",
    description: `Acara komunitas Herbal Village merupakan ajang berkumpulnya para pecinta tanaman obat dan pegiat kesehatan alami. Gambar ini menampilkan momen kebersamaan saat diadakannya festival tahunan yang diisi dengan berbagai kegiatan seperti pelatihan herbal, lomba memasak sehat, workshop pengolahan produk alami, dan pentas seni budaya. 
    Acara ini bertujuan untuk mempererat hubungan antaranggota, menyebarkan semangat hidup sehat berbasis alam, serta menjadi sarana promosi hasil karya dan produk komunitas kepada masyarakat luas.`,
  },
};

function openGaleri(key) {
  const data = galeriData[key];
  if (!data) return;

  document.getElementById("modalImage").src = data.image;
  document.getElementById("modalTitle").textContent = data.title;
  document.getElementById("modalDescription").textContent = data.description;
  const modal = document.getElementById("imageModal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeGaleri() {
  document.getElementById("imageModal").classList.add("hidden");
  document.getElementById("imageModal").classList.remove("flex");
}

// SLIDER STRUKTURAL
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    1280: {
      slidesPerView: 5,
    },
  },
});
