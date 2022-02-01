/*Koa.js ile web sunucumuzu yazalım.
Öncelikle şunu belirteyim. Koa.js hakkında konuşmadığımızı biliyorum ve bu ödev ilk aşamada bizi zorlayacak. Buradaki amacım yeni bir teknolojiye başlama cesareti oluşturmak ve hata yapma özgürlüğümüz olduğunu göstermek.

koa paketini indirelim.
index, hakkimda ve iletisim sayfaları oluşturalım.
Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h1 başlıkları yazdıralım.
port numarası olarak 3000'i kullanalım.*/

//oncelikle "npm init" ile projemizi module çeviriyoruz.
//Daha sonra "npm i koa" ile koa modulünü ekliyoruz.

const Koa = require("koa"); //koa modülünü kullanıma çağırdık.
const app = new Koa(); //Koa() fonksiyonunu bir app değişkenine atadık.
const koaRouter = require("koa-router"); //router modülünü kullanıma çağırdık.
const router = new koaRouter(); //koaRouter() fonksiyonunu bir router değişkenine atadık.

router.get("/", (context) => {
  //index sayfası status ve içeriğini belirledik.
  context.status = 200;
  context.body = "<h1>WELCOME TO THE INDEX PAGE</h1>";
});

router.get("/contact", (context) => {
  //contact sayfası status ve içeriğini belirledik.
  context.status = 200;
  context.body = "<h1>WELCOME TO THE CONTACT PAGE</h1>";
});

router.get("/about", (context) => {
  //about sayfası status ve içeriğini belirledik.
  context.status = 200;
  context.body = "<h1>WELCOME TO THE ABOUT ME PAGE</h1>";
});

app.use(async (context, next) => {
  //olmayan sayfalara hata mesajı ve status'u verdik.
  try {
    await next();
  } catch (err) {
    console.log(err.status);
    context.status = err.status || 404;
    context.body = err.message;
  }
});

app.use(router.routes());

const port = 3000;

app.listen(3000, () => {
  console.log(`Server running at PORT ${port}`);
});
