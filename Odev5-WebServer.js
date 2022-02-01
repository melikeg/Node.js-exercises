/*Kendi Web Sunucumuzu yazalım.
Kendi bilgisayarımızda aşağıdaki özellikleri kullanarak sunucumuzu yazalım.

createServer metodunu kullanacağız.
index, hakkimda ve iletisim sayfaları oluşturalım.
Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h2 başlıkları yazdıralım.
port numarası olarak 5000'i kullanalım.
Kolay gelsin.*/
const http = require("http"); // the http module is called

const server = http.createServer((req, res) => {
  //Server created. It takes the request and response callback parameters.

  const url = req.url; //We put the changes in the url into the url variable.

  if (url === "/") {
    // We return html text to the browser according to the pages visited in the url.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>WELCOME TO THE INDEX PAGE!</h2>");
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>WELCOME TO THE ABOUT ME PAGE!</h2>");
  } else if (url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>WELCOME TO THE CONTACT PAGE!</h2>");
  } else {
    //If the requested url is not among the ones we specified, it will be redirected to the 404 page.
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h2>404 PAGE NOT FOUND</h2>");
  }

  res.end(); //response ended
});

const port = 5000; //We specified the port number as 5000.

server.listen(port, () => {
  // started listening to the port.
  console.log(`Server localhost:${port} 'de başlatıldı. `);
});
