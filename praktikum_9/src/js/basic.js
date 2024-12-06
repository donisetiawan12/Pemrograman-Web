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
        innerText = "Masukan Jari - Jari Yang valid!!"
    }
}

//soal 2 
    function hitungJumlah () {
        var rupiah = document.getElementById("rupiah").value;
        if (rupiah > 0){
            var kurs = 15870;
            var dollar = rupiah / kurs;
            document.getElementById("hasilRupiah").innerText = "Nilai : $ " + dollar.toFixed(2);
        } else {
            document.getElementById("hasilRupiah").innerHTML = "Masukan Nilai yang Valid!!!";
        }
    }


//soal 3 

function hitungPenjumahan() {
    var biL1 = parseFloat(document.getElementById("biL1").value) || 0;
    var biL2 = parseFloat(document.getElementById("biL2").value) || 0;

    var jumlah = biL1 + biL2;
    document.getElementById("hasilJumlah").innerText = "Jumlah : " + jumlah.toFixed(2);

    
}