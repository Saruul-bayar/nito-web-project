import BlogDetails from "./components/BlogDetails.js";
let url = window.location.pathname;
let id = url.substring(url.lastIndexOf("/") + 1);

let blogDetailsData = await fetch(
  `http://localhost:5000/blog/blog-details/${id}`
).then((res) => res.json());

const blogDetails = document.getElementById("blogDetails");

let blogDet = new BlogDetails(blogDetailsData);

blogDetails.appendChild(blogDet.render());
