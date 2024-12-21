function pesananTiket(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const jam = document.getElementById("jkb").value;
    const tujuan = document.getElementById("tkb").value;
    const tiket = document.getElementById("tiket").value;
  
    const nameError = document.getElementById("errorName");
    const emailError = document.getElementById("errorEmail");
    const jamError = document.getElementById("errorJkb");
    const tujuanError = document.getElementById("errorTkb");
    const tiketError = document.getElementById("errorTiket");
  
    const jamPattern = /^([01]\d|2[0-3]):([0-5]\d)$/
  
    nameError.textContent = "";
    jamError.textContent = "";
    emailError.textContent = "";
    tujuanError.textContent = "";
    tiketError.textContent = "";
  
    let isValid = true;
  
    if (name === "" || /\d/.test(name)) {
      nameError.textContent = "Tolong isi Nama Lengkap dengan benar.";
      isValid = false;
    }
  
    if (email === "" || !email.includes("@")) {
      emailError.textContent = "Tolong isi alamat email yang valid.";
      isValid = false;
    }
  
    if (tujuan === "") {
      tujuanError.textContent = "Tolong isi Tujuan Keberangkatan.";
      isValid = false;
    }
  
    if (jam === "" || !jamPattern.test(jam)) {
      jamError.textContent =
        "Tolong isi Jam Keberangkatan dalam format 24-jam (HH:MM).";
      isValid = false;
    }
  
    if (tiket === "" || isNaN(tiket) || tiket < 1 || tiket > 10) {
      tiketError.textContent = "Tolong isi Jumlah Tiket antara 1 dan 10.";
      isValid = false;
    }
  
    if (isValid) {
      document.getElementById(
        "data-pelanggan"
      ).innerHTML = `Nama: ${name} <br> Email: ${email} <br> Jam Keberangkatan: ${jam} <br> Tujuan Keberangkatan: ${tujuan} <br> Jumlah Tiket: ${tiket}`;
    }
  
    return isValid;
  }