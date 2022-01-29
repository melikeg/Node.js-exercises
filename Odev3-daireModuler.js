/*Ödev 3
Daire Modüler Dosyası
Daire alan : circleArea ve daire çevre : circleCircumference fonksiyonları içeren ve consola sonuçları yazdıran circle.js dosyası oluşturunuz.
module.exports yöntemi ile fonksiyonları oluştururken export ediniz.
require ve object destructing kullanarak index.js dosyasında yarıçap (r) 5 olacak şekilde ekran çıktısını alınız.
Kolay gelsin.*/

const pi = 3.14;

exports.circleArea = function (radius) {
  console.log(
    `Yarıçapı ${radius} olan dairenin alanı: ${pi * radius * radius}`
  );
};

exports.circleCircumference = function (radius) {
  console.log(`Yarıçapı ${radius} olan dairenin çevresi: ${2 * pi * radius}`);
};
