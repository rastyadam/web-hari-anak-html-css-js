const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});
navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});
const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};
ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".destination__card", {
  ...scrollRevealOption,
  interval: 500,
});
ScrollReveal().reveal(".showcase__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".showcase__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".showcase__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".showcase__btn", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  interval: 500,
});
ScrollReveal().reveal(".discover__card", {
  ...scrollRevealOption,
  interval: 500,
});
const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
});
function validateForm() {
    let email = document.getElementById('email').value;
    let nama = document.getElementById('nama').value;
    let nisn = document.getElementById('nisn').value;

    let emailError = document.getElementById('emailError');
    let namaError = document.getElementById('namaError');
    let nisnError = document.getElementById('nisnError');

    let isValid = true;

    // Reset error messages (sembunyikan semua pesan error sebelumnya)
    emailError.style.display = 'none';
    namaError.style.display = 'none';
    nisnError.style.display = 'none';

    // --- 1. Validasi Email ---
    // Pola regex yang lebih kuat untuk email (memastikan ada @ dan domain)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === "" || !emailRegex.test(email)) { // Pastikan tidak kosong dan sesuai format
        emailError.textContent = "Format email tidak valid (contoh: nama@domain.com)"; // Pesan error lebih spesifik
        emailError.style.display = 'block';
        isValid = false;
    }

    // --- 2. Validasi Nama (tidak boleh mengandung angka) ---
    // Pola regex untuk memastikan hanya huruf dan spasi
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (nama === "" || !nameRegex.test(nama)) { // Pastikan tidak kosong dan hanya huruf
        namaError.textContent = "Nama tidak boleh kosong dan hanya boleh mengandung huruf.";
        namaError.style.display = 'block';
        isValid = false;
    }

    // --- 3. Validasi NISN (hanya boleh angka dan panjang 10 digit) ---
    // Pola regex untuk memastikan hanya angka dari awal sampai akhir string
    const nisnNumericRegex = /^\d{10}$/; // '\d{10}' artinya tepat 10 digit angka
    if (nisn === "" || !nisnNumericRegex.test(nisn)) { // Pastikan tidak kosong dan 10 digit angka
        nisnError.textContent = "NISN harus 10 digit angka dan tidak boleh kosong.";
        nisnError.style.display = 'block';
        isValid = false;
    }
    if (isValid) {
        // Jika semua valid, tampilkan alert sukses
        alert("Form berhasil disubmit!\nEmail: " + email + "\nNama: " + nama + "\nNISN: " + nisn);
        return true; // Izinkan form untuk disubmit
    } else {
        // Jika ada yang tidak valid, form tidak akan disubmit
        alert("Mohon periksa kembali input Anda. Ada kesalahan validasi."); // Beri tahu pengguna secara umum
        return false;
    }
}