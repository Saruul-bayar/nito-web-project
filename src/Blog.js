import BlogList from "./components/BlogList.js";

let data = await fetch("http://localhost:7071/api/blog").then((res) =>
  res.json()
);

const appRoot = document.getElementById("blog");

let blogList = new BlogList(data);

appRoot.appendChild(blogList.render());
