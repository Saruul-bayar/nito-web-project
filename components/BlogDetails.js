import Nito from "./ComponentBase.js";

export default class BlogDetails extends Nito.Component {
  constructor(data) {
    super();
    this.data = data;
  }

  render() {
    console.log(this.data);
    let docFrag = new DocumentFragment();

    const wrapper = document.createElement("section");
    wrapper.className = "blogChatBox";
    docFrag.appendChild(wrapper);

    this.data.map((value) => {
      return (docFrag.firstChild.innerHTML += `
          <section>
            <h1>${value.title}</h1>
            <p>${value.date}</p>
          </section>
          <picture>
            <source media="(max-width: 750px)" srcset="${value.img}"/>
            <img src="${value.img}" alt="blogImage" />
          </picture>
          <article>${value.blogText}</article>
      `);
    });
    return docFrag;
  }
}
