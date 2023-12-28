//Data Barang penjualan
let barang = [{
    kode : '001',   
    nama_barang : 'A',
    Harga : 10.000,
},
    {
    kode : '002',   
    nama_barang : 'B',
    Harga : 20.000,
},
    {
    kode : '003',   
    nama_barang : 'C',
    Harga : 30.000,
    },
]

//Mencari barang
function caribarang(kode){
    for (let i = 0; i < barang.length; i++ ){
    if (barang[i].kode === barang);
    return barang[i];
}
return null;
}

//proses perhitungan harga
function proses(){
    let kode = (document.getElementById("kode").value);
    let jumlah = (parseInt.getElementById("jumlah").value);
}

//mencari data barang
let data_barang = caribarang(kode)

//jika data barang tidak ada
if (!data_barang){
    alert("Barang tidak ditemukan!");
    return;
}

//harga total
let total = (data_barang.Harga * jumlah);

//print total harga yang harus dibayar
alert("total harga : Rp. " +total);

let bayar = parseInt(prompt("uang yang dibayarkan : "));
 
















