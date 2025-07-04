
const productDataMap = {
  jahe: {
    name: "Jahe Merah Bubuk 250gr",
    image: "assets/images/produk_jahe_merah.jpg",
    rating: 4.8,
    reviews: 124,
    discountPrice: "Rp 35.000",
    originalPrice: "Rp 90.000",
    description: "Jahe bubuk merah dari Naturlife terbuat dari 100% jahe merah asli yang diolah menjadi bubuk tanpa campuran dan pengawet. Memiliki rasa pedas bersensasi hangat dengan aroma yang kuat. 100% Jahe Merah Murni | Tanpa pewarna buatan | Tanpa pengawet",
    buyLink: "https://shopee.co.id/JAHE-MERAH-BUBUK-250G-ASLI-100-TANPA-CAMPURAN-ORIGINAL-NATURLIFE-SERBUK-JAHE-BUBUK-MINUMAN-JAHE-MERAH-JAHE-MERAH-INSTAN-PURE-RED-GINGER-POWDER-IMUN-BOOSTER-ORGANIC-NUTRIFARM-BEORGANIK-DARI-BUMI-SAFIYA-GALLEO-i.949762424.25131095441"
  },
  temulawak: {
    name: "Temulawak Bubuk Premium",
    image: "assets/images/produk_temulawak.jpg",
    rating: 4.6,
    reviews: 89,
    discountPrice: "Rp 25.000",
    originalPrice: "Rp 55.000",
    description: "Kunyit (Tumeric) Bubuk by Naturlife dibuat dari 100% akar kunyit asli yang diolah menjadi bubuk, tanpa campuran apapun. Praktis digunakan sebagai minuman herbal dan bahan penyedap makanan alami yang memiliki kandungan senyawa aktif kurkumin yang memiliki sifat antiinflamasi dan antioksidan.",
    buyLink: "https://shopee.co.id/KUNYIT-KUNING-BUBUK-TANPA-CAMPURAN-ASLI-100-ORIGINAL-50G-150G-250G-TUMERIC-POWDER-KUNIR-BUBUK-BAHAN-POKOK-POWDER-BUMBU-REMPAH-ORGANIK-KUALITAS-PREMIUM-KUNYIT-BUMBU-DAPUR-BUBUK-LENGKAP-SUPER-NUTRIFARM-BRAGG-DARI-BUMI-GEMELI-LEMOVITA-OFFICIAL-BEORGANIK-i.949762424.28005242377"
  },
  kunyit: {
    name: "Kunyit Kuning Bubuk",
    image: "assets/images/produk_kunyit.jpg",
    rating: 4.7,
    reviews: 102,
    discountPrice: "Rp 17.000",
    originalPrice: "Rp 35.000",
    description: "Kunyit (Tumeric) Bubuk by Naturlife dibuat dari 100% akar kunyit asli yang diolah menjadi bubuk, tanpa campuran apapun. Praktis digunakan sebagai minuman herbal dan bahan penyedap makanan alami yang memiliki kandungan senyawa aktif kurkumin yang memiliki sifat antiinflamasi dan antioksidan.",
    buyLink: "https://shopee.co.id/KUNYIT-KUNING-BUBUK-TANPA-CAMPURAN-ASLI-100-ORIGINAL-50G-150G-250G-TUMERIC-POWDER-KUNIR-BUBUK-BAHAN-POKOK-POWDER-BUMBU-REMPAH-ORGANIK-KUALITAS-PREMIUM-KUNYIT-BUMBU-DAPUR-BUBUK-LENGKAP-SUPER-NUTRIFARM-BRAGG-DARI-BUMI-GEMELI-LEMOVITA-OFFICIAL-BEORGANIK-i.949762424.28005242377"
  }
};


// Function to populate the product detail section
function renderProduct(product) {
  document.getElementById("product-name").textContent = product.name;
  document.getElementById("product-image").src = product.image;
  document.getElementById("product-image").alt = product.name;
  document.getElementById("product-review").textContent = `(${product.reviews} ulasan)`;
  document.getElementById("product-disc-price").textContent = product.discountPrice;
  document.getElementById("product-price").textContent = product.originalPrice;
  document.getElementById("product-desc").textContent = product.description;
  document.getElementById("product-link").hidden = false;
  document.getElementById("product-link").href = product.buyLink;

  // Optionally generate stars based on rating
  const starContainer = document.querySelector("#product-review").previousSibling;
  if (starContainer && product.rating) {
    const fullStars = Math.floor(product.rating);
    const halfStar = product.rating % 1 >= 0.5 ? "☆" : "";
    const starIcons = "★".repeat(fullStars) + halfStar + "☆".repeat(5 - fullStars - (halfStar ? 1 : 0));
    starContainer.textContent = starIcons;
  }
}

// Run on load
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id"); // ambil id dari URL
  const product = productDataMap[id];
  renderProduct(product);
});