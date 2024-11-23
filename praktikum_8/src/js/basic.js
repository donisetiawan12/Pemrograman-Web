// soal 1 

function hitungLingkaran() {
    var radius = document.getElementById("radius").value;
    if (radius > 0 ){
        var luas = 3.14 * radius * radius;
        var keliling = 2 * 3.14 * radius;

        document.getElementById("lingkaranOutput").
        innerText = "Luas : " +  luas + "cm², Keliling : " + keliling + "cm²"
    } else {
        document.getElementById("LingkarangOutput").
        innerText = "Masukan Jari - Jari Yang valid!!1"
    }
}