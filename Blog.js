import BlogList from "./components/BlogList.js";
import BlogDetails from "./components/BlogDetails.js";

const blogRoot = document.getElementById("blog");
if (blogRoot) {
  let blogListData = await fetch("http://localhost:7071/api/blogs")
    .then((res) => res.json())
    .catch((err) => console.log(err));

  let blogList = new BlogList(blogListData);

  blogRoot.appendChild(blogList.render());
}

const blogDetailsRoot = document.getElementById("blogDetails");
if (blogDetailsRoot) {
  let id = window.localStorage.getItem("blogId");
  let blogDetailsData = await fetch(`/api/blog-details/${id}`)
    .then((res) => res.json())
    .catch((err) => console.log(err));

  let blogDet = new BlogDetails(blogDetailsData);

  blogDetails.appendChild(blogDet.render());
}
