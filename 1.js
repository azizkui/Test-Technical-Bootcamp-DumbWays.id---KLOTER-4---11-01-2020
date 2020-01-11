var jam1 =  5*3600 + 25*60 + 10;
var jam2 =  10*3600
var jamWaktu = jam2 - jam1;

console.log('jam ke 1 : ' + jam1 + ' detik');
console.log('jam ke 2 : ' + jam2 + ' detik');
console.log('Jumlah Waktu akan Ditempuh : ' + jamWaktu + ' detik' + '\n');

var interval = 7 * 60;
console.log('Penambahan Kecepatan : ' + interval + ' detik');

var jamInterval =  jamWaktu / interval;
console.log('Penambahan Kecepatan terakhir : ' + Math.round(jamInterval) + '\n');

var sisawaktu = jamWaktu % interval;
console.log('Sisa Detik Kecepatan Terakhir : ' + sisawaktu + 'detik');

var v = 3;
var totalJarak = 0;
var i = 1;

do {
    var jarak = interval*v;
    totalJarak = totalJarak+jarak;
    v=v+1;
    i=i+1; 
} while (i <= jamInterval);

console.log('Sisa Detik yang harus ditempuh : ' + sisawaktu + ' detik' + ' dengan kecepatan : ' + v + ' detik' + '\n');

var sisajarak = sisawaktu * v;
console.log('Sehingga jarak sisa : ' + sisajarak);

totalJarak = totalJarak+sisajarak;
console.log('Total Jarak yang ditempuh : ' + totalJarak);