// const blogEachData = fetch("json/blog.json")
//   .then((res) => res.json())
//   .then((data) => blogAdder(data));

const blogEachData = fetch("https://api.jsonbin.io/b/625d8773bc312b30ebe8da1f")
  .then((res) => res.json())
  .then((data) => blogAdder(data));

// let blogId = JSON.parse(localStorage.getItem("blogId"));

var href = window.location.href;
var index = href.indexOf("=");
let blogId = href[index + 1];
// console.log(href[index+1]);

function blogAdder(data) {
  console.log(data);
  const blogDetails = document.getElementById("blogDetails");
  blogDetails.innerHTML = `
      ${data
        .map((value) => {
          if (value.id == blogId) {
            return `
            <section>
              <h1>${value.title}</h1>
              <p>${value.date}</p>
            </section>
            <picture>
              <source media="(max-width: 750px)" srcset="${value.img}"/>
              <img src="${value.img}" alt="blogImage" />
            </picture>
            <article>${value.blogText.join("")}</article>
        `;
          }
        })
        .join(" ")}
  `;
}
