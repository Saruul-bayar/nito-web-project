import Nito from "./ComponentBase.js";

/*
Үүсгэсэн Button компонентоо ашиглаж өөр нийлмэл компонент үүсгэх жишээ
*/
export default class BlogList extends Nito.Component {
  constructor(data) {
    super();
    this.data = data;
  }

  render() {
    let docFrag = new DocumentFragment();
    const wrapper = document.createElement("section");
    wrapper.className = "blogChatBox";
    docFrag.appendChild(wrapper);
    console.log(this.data);
    this.data.map((value) => {
      if (value.id % 2 == 1) {
        return (docFrag.firstChild.innerHTML += `
        <section class="blogChatBoxRight">
          <section class="blogProfile">
            <img src="${value.authorImage}" alt="profile1" />
            <p>
              ${value.author} <br />
              ${value.date.substring(0, 10)}
            </p>
          </section>
          <section class="blogBox">
              <article>
                <strong>Чөлөөт</strong>
                <h2>${value.title}</h2>
                <a id=${value.id} href="/blog/${value.id}">Дэлгэрэнгүй унших</a>
              </article>
              <img src="${value.img}" alt="chat1" />
          </section>
        </section>
      `);
      }
      if (value.id % 2 == 0) {
        return (docFrag.firstChild.innerHTML += `
          <section class="blogChatBoxLeft">
            <section class="blogProfile">
              <img src="${value.authorImage}" alt="profile1" />
              <p>
                ${value.author} <br />
                ${value.date.substring(0, 10)}
              </p>
            </section>
            <section class="blogBox">
              <article>
                <strong>Чөлөөт</strong>
                <h2>${value.title}</h2>
                   <a id=${value.id} href="/blog/${
          value.id
        }">Дэлгэрэнгүй унших</a>
              </article>
              <img src="${value.img}" alt="chat1" />
            </section>
          </section>
      `);
      }
    });

    return docFrag;
  }
}
