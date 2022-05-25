export function getBlogs(url, callBack) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let blogs = [];
      data.forEach((blog) => {
        blogs.push(
          new Blogs(
            blog.id,
            blog.img,
            blog.title,
            blog.date,
            blog.author,
            blog.authorImage,
            blog.blogText
          )
        );
      });
      callBack(blogs);
      // console.log(data);
    });
}

export class Blogs {
  constructor(_id, _img, _title, _date, _author, _authorImage, _blogText) {
    this.id = _id;
    this.img = _img;
    this.title = _title;
    this.date = _date;
    this.author = _author;
    this.authorImage = _authorImage;
    this.blogText = _blogText;
  }
  // onmouseover="store(${this.id})" onclick="store(${this.id})
  Create() {
    if (this.id % 2 == 0) {
      return `
        <section class="blogChatBoxRight" onmouseover="store(${this.id})">
          <section class="blogProfile">
            <img src="${this.authorImage}" alt="profile1" />
            <p>
              ${this.author} <br />
              ${this.date}
            </p>
          </section>
          <section class="blogBox">
            <article>
              <strong>Чөлөөт</strong>
              <h2>${this.title}</h2>
              <a id="${this.id}" href="#">Дэлгэрэнгүй унших</a>
            </article>
            <img src="${this.img}" alt="chat1" />
          </section>
        </section>
        `;
    }
    // onmouseover="store(${this.id})" onclick="store(${this.id})"
    if (this.id % 2 == 1) {
      return `
        <section class="blogChatBoxLeft" onmouseover="store(${this.id})">
          <section class="blogProfile">
            <img src="${this.authorImage}" alt="profile1" />
            <p>
              ${this.author} <br />
              ${this.date}
            </p>
          </section>
          <section class="blogBox">
            <article>
              <strong>Чөлөөт</strong>
              <h2>${this.title}</h2>
              <a id="${this.id}" href="#">Дэлгэрэнгүй унших</a>
            </article>
            <img src="${this.img}" alt="chat1" />
          </section>
        </section>
      `;
    }
  }
}
