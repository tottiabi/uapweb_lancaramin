var data = [
  { kode: "001", barang: "Barang A", harga: 10000 },
  { kode: "002", barang: "Barang B", harga: 20000 },
  { kode: "003", barang: "Barang C", harga: 30000 },
];

function transaksi() {
  var idBarang = document.getElementById("idBarang").value;
  var banyakBarang = parseInt(document.getElementById("banyakBarang").value);
  var cariBarang = data.find((item) => item.kode === idBarang);

  if (cariBarang) {
    var harga = cariBarang.harga;
    var total = harga * banyakBarang;

    window.alert("Total Pembayaran Anda : " + total);
    var bayar = window.prompt("Masukkan Uang Anda : ");
    var kembalian = bayar - total;
    window.alert("Total Kembalian Anda : " + kembalian);
  } else {
    window.alert("Kode Tidak Ada");
  }
}
