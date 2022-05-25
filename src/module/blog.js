// const blogJson = fetch("json/blog.json")
//   .then((res) => res.json())
//   .then((data) => blogLister(data));

const blogJson = fetch("https://api.jsonbin.io/b/625d8773bc312b30ebe8da1f")
  .then((res) => res.json())
  .then((data) => blogLister(data));

function store(id) {
  const blogId = id;

  console.log(id);
  localStorage.setItem("blogId", blogId);
  var params = new URLSearchParams();
  params.append("blogId", blogId);

  var url = "blog2.html?" + params.toString();
  //location.href = url;
}

function blogLister(data) {
  const blogData = document.getElementById("blog");
  blogData.innerHTML = `
    ${data
      .map((value, id) => {
        if (value.id % 2 == 0) {
          return `
          <section class="blogChatBoxRight">
            <section class="blogProfile">
              <img src="${value.authorImage}" alt="profile1" />
              <p>
                ${value.author} <br />
                ${value.date}
              </p>
            </section>
            <section class="blogBox">
                <article>
                  <strong>Чөлөөт</strong>
                  <h2>${value.title}</h2>
                  <a src="${url}" onclick="store(${value.id})">Дэлгэрэнгүй унших</a>
                </article>
                <img src="${value.img}" alt="chat1" />
            </section>
          </section>
        `;
        }
        if (value.id % 2 == 1) {
          return `
            <section class="blogChatBoxLeft">
              <section class="blogProfile">
                <img src="${value.authorImage}" alt="profile1" />
                <p>
                  ${value.author} <br />
                  ${value.date}
                </p>
              </section>
              <section class="blogBox">
                <article>
                  <strong>Чөлөөт</strong>
                  <h2>${value.title}</h2>
                  <a src="${url}" onclick="store(${value.id})">Дэлгэрэнгүй унших</a>
                </article>
                <img src="${value.img}" alt="chat1" />
              </section>
            </section>
        `;
        }
      })
      .join(" ")}
  `;
}
let blogID = decodeURI(location.pathname.split("/").pop());