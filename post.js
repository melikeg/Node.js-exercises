/*Blog oluşturmaya hazır mısınız? Konsol ekranında postlarımızı sıralayalım, sonrasında yeni bir post oluşturalım 
ve yeni post ile birlikte postlarımızı tekrar sıralayalım.*/

const posts = [
  { title: "title1", subject: "subject1", author: "author1" },
  { title: "title2", subject: "subject2", author: "author2" },
  { title: "title3", subject: "subject3", author: "author3" },
];

const listPosts = () => {
  posts.map((item) => {
    console.log(item.title);
  });
};

const addPost = (newPost) => {
  const promise1 = new Promise((resolve, reject) => {
    posts.push(newPost);
    resolve(posts);
    //reject("Hata Oluştu!");
  });
  return promise1;
};

async function showPosts() {
  try {
    await addPost({ title: "title5", subject: "subject5", author: "author5" });
    await addPost({ title: "title6", subject: "subject6", author: "author6" });
    listPosts();
  } catch (error) {
    console.log(error);
  }
}

showPosts();
