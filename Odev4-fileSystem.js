//Node.js FS Modülü kullanarak CRUD işlemleri yapacağız.

const fs = require("fs"); //fs modülünü dahil ettik

//employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)

fs.writeFile(
  "employees.json",
  '{"name": "Employee 1 Name", "salary": 2000}',
  "utf8",
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("The file has been created and data has been added to it.");
    }
  }
);

//Bu veriyi okuyalım. (READ)
fs.readFile("employees.json", "utf8", (err, data) => {
  if (err) console.log(err);
  else {
    console.log(`There are ${data} in the file`);
    console.log("The file has been read");
  }
});

//Bu veriyi güncelleyelim.

const fileName = "./employees.json";
const file = require(fileName);

file.salary = "3500";

fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
  if (err) return console.log(err);
  else{
    console.log(JSON.stringify(file));
    console.log("writing to " + fileName);
    console.log("The file has been updated.");
  }
});

//Dosyayı silelim.

fs.unlink("employees.json", (err) => {
  if (err) console.log(err);
  else {
    console.log("The file has been deleted.");
  }
});
