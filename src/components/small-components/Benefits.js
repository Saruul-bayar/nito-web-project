import Nito from "../ComponentBase.js";

export default class Benefits extends Nito.Component {
  constructor({ data }) {
    super();
    this.data = data;
  }

  render() {
    let docFrag = new DocumentFragment();
    const wrapper = document.createElement("section");
    wrapper.className = "benefitItems";
    docFrag.appendChild(wrapper);

    this.data.map((value, key) => {
      console.log(key + 2);
      return (docFrag.firstChild.innerHTML += `
        <section class="item${key + 2} showOnScroll">
        <img src="${value.img}" alt="cv1" />
        <h3>${value.title}</h3>
        <p>
        ${value.description}
        </p>
      </section>
      `);
    });

    return docFrag;
  }
}
