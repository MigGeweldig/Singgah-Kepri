contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  // Optional: ambil data jika ingin diproses atau dikirim ke server
  const name = contactForm.querySelector('input[type="text"]').value;
  const email = contactForm.querySelector('input[type="email"]').value;
  const message = contactForm.querySelector('textarea').value;

  // Menampilkan respon
  formResponse.textContent = "Terima kasih! Pesan Anda telah kami terima.";
  
  // Reset form
  contactForm.reset();
});
