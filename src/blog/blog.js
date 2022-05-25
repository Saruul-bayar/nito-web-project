import { Blogs, getBlogs } from "./moduleBlogs.js";
// const url = "../json/blog.json";
const url = "https://api.jsonbin.io/b/625d8773bc312b30ebe8da1f/latest";

getBlogs(url, (blogList) => {
  blogList.forEach((blog) => {
    // console.log(blog);
    document.getElementById("blog").innerHTML += blog.Create();
  });
});
