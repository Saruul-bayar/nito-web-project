import Nito from "./ComponentBase.js";

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
      value.id = value.id + "";
      if (value.id == "1") {
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
                  <a id=${value.id} href="/blogDetails.html" onclick="passId(${
          value.id
        })">Дэлгэрэнгүй унших</a>
              </article>
              <img src="${value.img}" alt="chat1" />
            </section>
          </section>
        `);
      } else if (value.id.slice(0, 1) % 2 == 1) {
        return (docFrag.firstChild.innerHTML += `
        <section class="blogChatBoxRight">
          <section class="blogProfile">
            <img src="${value.authorImage}" alt="profile1"/>
            <p>
              ${value.author} <br/>
              ${value.date.substring(0, 10)}
            </p>
          </section>
          <section class="blogBox">
              <article>
                <strong>Чөлөөт</strong>
                <h2>${value.title}</h2>
                <a id=${value.id} href="/blogDetails.html" onclick="passId(${
          value.id
        })">Дэлгэрэнгүй унших</a>
              </article>
              <img src="${value.img}" alt="chat1" />
          </section>
        </section>
      `);
      } else if (value.id.slice(0, 1) % 2 == 0) {
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
                   <a id=${value.id} href="/blogDetails.html" onclick="passId(${
          value.id
        })">Дэлгэрэнгүй унших</a>
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
